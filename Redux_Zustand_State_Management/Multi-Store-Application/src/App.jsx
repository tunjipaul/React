import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from './store/slices/authSlice';
import { selectTheme } from './store/slices/uiSlice';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DocumentUploader from './components/DocumentUploader';
import ChatInterface from './components/ChatInterface';
import NotificationContainer from './components/NotificationContainer';

function App() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const theme = useSelector(selectTheme);

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <NotificationContainer />
      <Header />
      
      <div className="flex h-[calc(100vh-64px)]">
        <Sidebar />
        
        <main className="flex-1 overflow-auto p-4 lg:p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <DocumentUploader />
            
            <div className="h-[500px] lg:h-[600px]">
              <ChatInterface />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
