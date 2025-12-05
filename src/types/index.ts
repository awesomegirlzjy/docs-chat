// 应用相关的类型定义
import type { IWps } from '../assets/web-office-sdk-v1.1.20/index.d';

// 文档编辑器相关类型
export interface DocumentEditorMethods {
  getDocumentContent: () => Promise<string>;
  setDocumentContent: (content: string) => Promise<void>;
  jssdk: IWps | null;
}

// 聊天面板相关类型
export interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatPanelProps {
  onDocumentAction?: (action: string, content?: string) => void;
}

export interface ChatContent {
  role: 'user' | 'model';
  parts: Array<{ text: string }>;
}
