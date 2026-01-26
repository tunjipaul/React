import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uploadDocument, setUploading, selectIsUploading } from '../store/slices/documentSlice';
import { selectTheme } from '../store/slices/uiSlice';
import { Loader2 } from 'lucide-react';

function DocumentUploader() {
  const dispatch = useDispatch();
  const isUploading = useSelector(selectIsUploading);
  const theme = useSelector(selectTheme);
  const [fileName, setFileName] = useState('');
  const [fileType, setFileType] = useState('PDF');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fileName.trim()) return;

    dispatch(setUploading(true));

    setTimeout(() => {
      dispatch(uploadDocument({
        name: fileName,
        type: fileType,
        size: Math.floor(Math.random() * 5000) + 1000,
      }));
      setFileName('');
      setFileType('PDF');
    }, 1000);
  };

  return (
    <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
      <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
        Upload Document
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Document Name
          </label>
          <input
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            placeholder="e.g., Project Proposal.pdf"
            className={`w-full px-4 py-2 rounded-lg border ${
              theme === 'dark'
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                : 'bg-white border-gray-300 text-gray-800'
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            disabled={isUploading}
            required
          />
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Document Type
          </label>
          <select
            value={fileType}
            onChange={(e) => setFileType(e.target.value)}
            className={`w-full px-4 py-2 rounded-lg border ${
              theme === 'dark'
                ? 'bg-gray-700 border-gray-600 text-white'
                : 'bg-white border-gray-300 text-gray-800'
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            disabled={isUploading}
          >
            <option value="PDF">PDF</option>
            <option value="DOCX">DOCX</option>
            <option value="TXT">TXT</option>
            <option value="CSV">CSV</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isUploading}
          className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
            isUploading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600'
          } text-white`}
        >
          {isUploading ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin" />
              Uploading...
            </span>
          ) : (
            'Upload Document'
          )}
        </button>
      </form>
    </div>
  );
}

export default DocumentUploader;
