import {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
  useCallback,
} from 'react';
import type { DocumentEditorMethods } from '../types';
import type { IWps } from '../assets/web-office-sdk-v1.1.20/index.d';
import WebOfficeSDK from '../assets/web-office-sdk-v1.1.20/web-office-sdk-v1.1.20.es.js';
import './DocumentEditor.less';

const DocumentEditor = forwardRef<DocumentEditorMethods>((_, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [jssdk, setJssdk] = useState<IWps | null>(null);

  useEffect(() => {
    if (!containerRef.current) {
      console.error('Container not found');
      return;
    }

    // 初始化文档编辑器
    const jssdkInstance = WebOfficeSDK.config({
      url: 'https://365.kdocs.cn/l/cjPdhRsoUXsY',
      mount: containerRef.current,
    });

    setJssdk(jssdkInstance);

    jssdkInstance.on('fileOpen', (data) => {
      console.log('打开文档成功: ', data);
    });

    // 清理函数
    return () => {
      if (jssdkInstance) {
        jssdkInstance.destroy?.();
      }
    };
  }, []);

  // 获取文档内容的方法
  const getDocumentContent = useCallback(async (): Promise<string> => {
    if (!jssdk) {
      throw new Error('文档编辑器未初始化');
    }
    const app = jssdk.Application;
    const range = await app.ActiveDocument.Content;
    const text = await range.Text;
    return text || '';
  }, [jssdk]);

  // 设置文档内容的方法
  const setDocumentContent = useCallback(
    async (content: string): Promise<void> => {
      if (!jssdk) {
        throw new Error('文档编辑器未初始化');
      }
      // 这里需要根据 WPS API 文档实现设置内容的方法
      // 示例：await jssdk.setContent(content);
      console.log('设置文档内容:', content);
    },
    [jssdk]
  );

  // 使用 useImperativeHandle 暴露方法给父组件
  useImperativeHandle(
    ref,
    () => ({
      getDocumentContent,
      setDocumentContent,
      jssdk,
    }),
    [jssdk, getDocumentContent, setDocumentContent]
  );

  return <div ref={containerRef} className="document-editor" />;
});

DocumentEditor.displayName = 'DocumentEditor';

export default DocumentEditor;
