// 应用相关的类型定义

// 文档编辑器相关类型
export interface DocumentEditorProps {
  documentUrl: string;
}

export interface DocumentEditorMethods {
  getDocumentContent: () => Promise<string>;
  setDocumentContent: (content: string) => Promise<void>;
}

export interface DocumentEditorElement extends HTMLDivElement {
  getDocumentContent?: () => Promise<string>;
  setDocumentContent?: (content: string) => Promise<void>;
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
