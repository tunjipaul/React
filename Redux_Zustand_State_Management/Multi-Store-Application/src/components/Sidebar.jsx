import { useSelector, useDispatch } from 'react-redux';
import { selectDocuments, selectSelectedDocument, selectDocument, deleteDocument } from '../store/slices/documentSlice';
import { selectTheme, selectSidebarOpen, setSidebarOpen } from '../store/slices/uiSlice';
import { FileText, Trash2 } from 'lucide-react';

function Sidebar() {
  const documents = useSelector(selectDocuments);
  const selectedDocument = useSelector(selectSelectedDocument);
  const theme = useSelector(selectTheme);
  const sidebarOpen = useSelector(selectSidebarOpen);
  const dispatch = useDispatch();

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-NG', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => dispatch(setSidebarOpen(false))}
        />
      )}

      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-80 transform transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } ${
          theme === 'dark'
            ? 'bg-gray-800 border-gray-700'
            : 'bg-white border-gray-200'
        } border-r`}
      >
        <div className="flex flex-col h-full">
          <div className={`p-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
            <h2 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              My Documents
            </h2>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {documents.length === 0 ? (
              <div className="text-center py-8">
                <FileText className={`w-16 h-16 mx-auto mb-3 ${theme === 'dark' ? 'text-gray-600' : 'text-gray-400'}`} />
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  No documents yet
                </p>
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'} mt-1`}>
                  Upload your first document
                </p>
              </div>
            ) : (
              documents.map((doc) => (
                <div
                  key={doc.id}
                  className={`p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedDocument?.id === doc.id
                      ? theme === 'dark'
                        ? 'bg-blue-900 bg-opacity-50'
                        : 'bg-blue-50 border border-blue-200'
                      : theme === 'dark'
                      ? 'hover:bg-gray-700'
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => dispatch(selectDocument(doc.id))}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-semibold truncate text-sm ${
                        theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                      }`}>
                        {doc.name}
                      </h3>
                      <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
                        {formatDate(doc.uploadedAt)}
                      </p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch(deleteDocument(doc.id));
                      }}
                      className="text-red-500 hover:text-red-700 p-1 shrink-0"
                      title="Delete document"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
