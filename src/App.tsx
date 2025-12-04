import { useRef } from 'react';
import DocumentEditor from './components/DocumentEditor';
import ChatPanel from './components/ChatPanel';
import './App.less';

function App() {
  const documentEditorRef = useRef<HTMLDivElement>(null);
  const documentUrl = 'https://365.kdocs.cn/l/cjPdhRsoUXsY';

  interface DocumentEditorElement extends HTMLDivElement {
    getDocumentContent?: () => Promise<string>;
    setDocumentContent?: (content: string) => Promise<void>;
  }

  const handleDocumentAction = async (action: string, content?: string) => {
    if (!documentEditorRef.current) return;

    try {
      const editorElement = documentEditorRef.current as DocumentEditorElement;

      // 获取文档内容
      const getContent = editorElement.getDocumentContent;
      if (getContent && typeof getContent === 'function') {
        const docContent = await getContent();
        console.log('文档内容:', docContent);
      }

      // 根据操作类型执行相应操作
      if (action === 'update' && content) {
        const setContent = editorElement.setDocumentContent;
        if (setContent && typeof setContent === 'function') {
          await setContent(content);
        }
      }
    } catch (error) {
      console.error('文档操作失败:', error);
    }
  };

  return (
    <div className="app-container">
      <div className="document-section">
        <div className="document-header">
          <h2>文档编辑</h2>
          <p className="document-url">{documentUrl}</p>
        </div>
        <div className="document-content" ref={documentEditorRef}>
          <DocumentEditor documentUrl={documentUrl} />
        </div>
      </div>
      <div className="chat-section">
        <ChatPanel onDocumentAction={handleDocumentAction} />
      </div>
    </div>
  );
}

export default App;
