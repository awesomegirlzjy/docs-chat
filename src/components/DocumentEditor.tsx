import { useEffect, useRef } from 'react';
import type { WebOfficeInstance } from '../types/wps';
import './DocumentEditor.less';

interface DocumentEditorProps {
  documentUrl: string;
}

interface DocumentEditorMethods {
  getDocumentContent: () => Promise<string>;
  setDocumentContent: (content: string) => Promise<void>;
}

const DocumentEditor: React.FC<DocumentEditorProps> = ({ documentUrl }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const jssdkRef = useRef<WebOfficeInstance | null>(null);

  useEffect(() => {
    if (!containerRef.current || !window.WebOfficeSDK) {
      console.error('WebOfficeSDK not loaded or container not found');
      return;
    }

    // 初始化文档编辑器
    const jssdk = window.WebOfficeSDK.config({
      url: documentUrl,
      mount: containerRef.current,
      mode: 'normal', // 编辑模式
    });

    jssdkRef.current = jssdk;

    // 监听文档打开事件
    jssdk.on('fileOpen', (data: unknown) => {
      console.log('文档打开成功: ', data);
    });

    // 监听文档内容变化
    jssdk.on('fileContentChange', (data: unknown) => {
      console.log('文档内容变化: ', data);
    });

    // 清理函数
    return () => {
      if (jssdkRef.current) {
        jssdkRef.current.destroy?.();
      }
    };
  }, [documentUrl]);

  // 获取文档内容的方法
  const getDocumentContent = async (): Promise<string> => {
    if (!jssdkRef.current) {
      throw new Error('文档编辑器未初始化');
    }
    // 这里需要根据 WPS API 文档实现获取内容的方法
    // 示例：return await jssdkRef.current.getContent();
    return '';
  };

  // 设置文档内容的方法
  const setDocumentContent = async (content: string): Promise<void> => {
    if (!jssdkRef.current) {
      throw new Error('文档编辑器未初始化');
    }
    // 这里需要根据 WPS API 文档实现设置内容的方法
    // 示例：await jssdkRef.current.setContent(content);
    console.log('设置文档内容:', content);
  };

  // 暴露方法给父组件
  useEffect(() => {
    if (containerRef.current) {
      const methods: DocumentEditorMethods = {
        getDocumentContent,
        setDocumentContent,
      };
      Object.assign(containerRef.current, methods);
    }
  }, []);

  return <div ref={containerRef} className="document-editor" />;
};

export default DocumentEditor;
