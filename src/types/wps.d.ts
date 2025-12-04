// WPS WebOffice SDK 类型定义
export interface WebOfficeSDK {
  config(options: WebOfficeConfig): WebOfficeInstance;
}

export interface WebOfficeConfig {
  url: string;
  mount: HTMLElement;
  mode?: 'normal' | 'readonly';
  [key: string]: unknown;
}

export interface WebOfficeInstance {
  on(event: string, callback: (data: unknown) => void): void;
  destroy?: () => void;
  [key: string]: unknown;
}

declare global {
  interface Window {
    WebOfficeSDK: WebOfficeSDK;
  }
}
