import { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import type { Message, ChatPanelProps } from '../types';
import './ChatPanel.less';

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconColor: string;
}

const ChatPanel: React.FC<ChatPanelProps> = ({ onDocumentAction }) => {
  void onDocumentAction; // TODO: 待实现文档操作功能
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const genAI = useRef<GoogleGenAI | null>(null);
  const chatRef = useRef<Awaited<
    ReturnType<GoogleGenAI['chats']['create']>
  > | null>(null);

  const featureCards: FeatureCard[] = [
    {
      id: 'grammar',
      title: '语病检查',
      description: '检查全文是否有语病、标点符号错误和错别字',
      icon: 'ABC',
      iconColor: '#34c759',
    },
    {
      id: 'summary',
      title: '内容总结',
      description: '提炼文档核心内容,结构化生成摘要',
      icon: '📄',
      iconColor: '#007aff',
    },
    {
      id: 'mindmap',
      title: '生成思维导图',
      description: '梳理文档结构,生成逻辑清晰的思维导图',
      icon: '🗺️',
      iconColor: '#007aff',
    },
  ];

  useEffect(() => {
    // 初始化 Gemini API
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (apiKey && apiKey !== 'your_gemini_api_key_here') {
      genAI.current = new GoogleGenAI({ apiKey });
      console.log('Gemini API 初始化成功');
    } else {
      console.warn(
        'Gemini API Key 未配置，请在 .env 文件中设置 VITE_GEMINI_API_KEY'
      );
    }
  }, []);

  useEffect(() => {
    // 自动滚动到底部
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleFeatureClick = (featureId: string) => {
    const featureMessages: Record<string, string> = {
      grammar: '请检查文档中的语病、标点符号错误和错别字',
      summary: '请提炼文档的核心内容，生成结构化摘要',
      mindmap: '请梳理文档结构，生成逻辑清晰的思维导图',
    };

    const message = featureMessages[featureId];
    if (message) {
      // 自动发送
      setTimeout(() => {
        sendMessage(message);
      }, 100);
    }
  };

  const getOrCreateChat = async () => {
    if (!genAI.current) {
      throw new Error('Gemini API 未初始化，请检查 API Key 配置');
    }

    // 如果 chat 实例不存在，或者消息为空（新对话），创建新的 chat 实例
    if (!chatRef.current || messages.length === 0) {
      // 构建对话历史（不包括当前要发送的消息）
      const history = messages.map((msg) => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }],
      }));

      chatRef.current = await genAI.current.chats.create({
        model: 'gemini-2.5-flash',
        history,
      });
    }

    return chatRef.current;
  };

  const sendMessage = async (customMessage?: string) => {
    const messageText = customMessage || input.trim();
    if (!messageText || loading) return;

    const userMessage: Message = {
      role: 'user',
      content: messageText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    // 创建一个空的 assistant 消息，用于流式更新
    const assistantMessage: Message = {
      role: 'assistant',
      content: '',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, assistantMessage]);

    try {
      // 获取或创建 chat 实例
      const chat = await getOrCreateChat();

      // 使用 chat.sendMessageStream 发送消息，获取流式响应
      const stream = await chat.sendMessageStream({
        message: messageText,
      });

      let fullText = '';

      // 遍历流式响应，逐步更新消息内容
      for await (const chunk of stream) {
        const chunkText = chunk.text || '';
        fullText += chunkText;

        // 更新最后一条 assistant 消息的内容（总是最后一条）
        setMessages((prev) => {
          const newMessages = [...prev];
          const lastIndex = newMessages.length - 1;
          if (lastIndex >= 0 && newMessages[lastIndex].role === 'assistant') {
            newMessages[lastIndex] = {
              ...newMessages[lastIndex],
              content: fullText,
            };
          }
          return newMessages;
        });
      }

      // TODO 如果对话中包含文档操作指令，触发回调
      // if (onDocumentAction && fullText.includes('文档')) {
      //   onDocumentAction('update', fullText);
      // }
    } catch (error) {
      console.error('发送消息失败:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: `错误: ${error instanceof Error ? error.message : '未知错误'}`,
        timestamp: new Date(),
      };
      setMessages((prev) => {
        const newMessages = [...prev];
        const lastIndex = newMessages.length - 1;
        // 替换最后一条消息为错误消息
        if (lastIndex >= 0 && newMessages[lastIndex].role === 'assistant') {
          newMessages[lastIndex] = errorMessage;
        } else {
          newMessages.push(errorMessage);
        }
        return newMessages;
      });
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="chat-panel">
      <div className="chat-messages">
        {messages.length === 0 ? (
          <div className="chat-welcome">
            <h1 className="welcome-title">HI, 今天有什么可以帮忙?</h1>
            <div className="feature-cards">
              {featureCards.map((card) => (
                <div
                  key={card.id}
                  className="feature-card"
                  onClick={() => handleFeatureClick(card.id)}
                >
                  <div
                    className="feature-icon"
                    style={{ backgroundColor: `${card.iconColor}15` }}
                  >
                    <span
                      className="feature-icon-text"
                      style={{ color: card.iconColor }}
                    >
                      {card.icon}
                    </span>
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title">{card.title}</h3>
                    <p className="feature-description">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chat-message ${message.role === 'user' ? 'user' : 'assistant'}`}
              >
                <div className="message-content">
                  {message.content || (
                    <span className="typing-indicator">正在思考...</span>
                  )}
                </div>
                {message.content && (
                  <div className="message-time">
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>
      <div className="chat-input-container">
        <textarea
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder={loading ? '正在思考...' : '输入修改建议，优化当前内容'}
          rows={3}
          disabled={loading}
        />
        <button
          className="chat-send-button"
          onClick={() => sendMessage()}
          disabled={loading || !input.trim()}
          type="button"
        >
          <span className="send-icon">→</span>
        </button>
      </div>
    </div>
  );
};

export default ChatPanel;
