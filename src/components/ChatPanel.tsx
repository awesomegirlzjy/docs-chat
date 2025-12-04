import { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import './ChatPanel.less';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatPanelProps {
  onDocumentAction?: (action: string, content?: string) => void;
}

const ChatPanel: React.FC<ChatPanelProps> = ({ onDocumentAction }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const genAI = useRef<GoogleGenAI | null>(null);

  useEffect(() => {
    // 初始化 Gemini API
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (apiKey && apiKey !== 'your_gemini_api_key_here') {
      genAI.current = new GoogleGenAI({ apiKey });
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

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = {
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      if (!genAI.current) {
        throw new Error('Gemini API 未初始化，请检查 API Key 配置');
      }

      // 构建对话历史
      const chatHistory = messages.map((msg) => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }],
      }));

      // 添加当前用户消息
      chatHistory.push({
        role: 'user',
        parts: [{ text: userMessage.content }],
      });

      // 使用 gemini-2.5-flash 模型生成内容
      interface ChatContent {
        role: 'user' | 'model';
        parts: Array<{ text: string }>;
      }
      const result = await genAI.current.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: chatHistory as ChatContent[],
      });

      const text = result.text || '无法获取响应内容';

      const assistantMessage: Message = {
        role: 'assistant',
        content: text,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);

      // 如果对话中包含文档操作指令，触发回调
      if (onDocumentAction && text.includes('文档')) {
        onDocumentAction('update', text);
      }
    } catch (error) {
      console.error('发送消息失败:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: `错误: ${error instanceof Error ? error.message : '未知错误'}`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
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
      <div className="chat-header">
        <h3>AI 助手</h3>
        <p className="chat-subtitle">使用 Gemini 2.5 Flash 模型</p>
      </div>
      <div className="chat-messages">
        {messages.length === 0 && (
          <div className="chat-empty">
            <p>开始与 AI 对话，询问文档相关问题或请求编辑文档内容</p>
          </div>
        )}
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-message ${message.role === 'user' ? 'user' : 'assistant'}`}
          >
            <div className="message-content">{message.content}</div>
            <div className="message-time">
              {message.timestamp.toLocaleTimeString()}
            </div>
          </div>
        ))}
        {loading && (
          <div className="chat-message assistant">
            <div className="message-content">
              <span className="typing-indicator">正在思考...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-input-container">
        <textarea
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="输入消息... (按 Enter 发送，Shift+Enter 换行)"
          rows={3}
          disabled={loading}
        />
        <button
          className="chat-send-button"
          onClick={sendMessage}
          disabled={loading || !input.trim()}
        >
          发送
        </button>
      </div>
    </div>
  );
};

export default ChatPanel;
