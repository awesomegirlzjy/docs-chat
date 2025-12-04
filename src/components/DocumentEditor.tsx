import { useEffect, useRef } from 'react';
import type { DocumentEditorProps, DocumentEditorMethods } from '../types';
import type { IWps } from '../assets/web-office-sdk-v1.1.20/index.d';
import WebOfficeSDK from '../assets/web-office-sdk-v1.1.20/web-office-sdk-v1.1.20.es.js';
import './DocumentEditor.less';

const DocumentEditor: React.FC<DocumentEditorProps> = ({ documentUrl }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const jssdkRef = useRef<IWps | null>(null);

  useEffect(() => {
    if (!containerRef.current) {
      console.error('Container not found');
      return;
    }

    // 初始化文档编辑器
    const jssdk = WebOfficeSDK.config({
      url: documentUrl,
      mount: containerRef.current,
    });

    jssdkRef.current = jssdk;

    // 监听文档就绪事件
    jssdk.on('ready', () => {
      console.log('文档编辑器就绪');
    });

    // 监听文档保存事件
    jssdk.on('save', (data: unknown) => {
      console.log('文档保存: ', data);
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
