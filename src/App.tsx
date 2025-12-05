import { useRef } from 'react';
import DocumentEditor from './components/DocumentEditor';
import ChatPanel from './components/ChatPanel';
import type { DocumentEditorMethods } from './types';
import './App.less';

function App() {
  const documentEditorRef = useRef<DocumentEditorMethods>(null);

  const handleDocumentAction = async (action: string, content?: string) => {
    if (!documentEditorRef.current) return;

    try {
      // 获取文档内容
      const docContent = await documentEditorRef.current.getDocumentContent();
      console.log('文档内容:', docContent);

      // 根据操作类型执行相应操作
      if (action === 'update' && content) {
        await documentEditorRef.current.setDocumentContent(content);
      }
    } catch (error) {
      console.error('文档操作失败:', error);
    }
  };

  return (
    <div className="app-container">
      <div className="document-section">
        <DocumentEditor ref={documentEditorRef} />
      </div>
      <div className="chat-section">
        <ChatPanel onDocumentAction={handleDocumentAction} />
      </div>
    </div>
  );
}

export default App;
