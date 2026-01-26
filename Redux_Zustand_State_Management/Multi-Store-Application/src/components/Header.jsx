import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from '../store/slices/authSlice';
import { selectTheme, setTheme, toggleSidebar, selectSidebarOpen } from '../store/slices/uiSlice';
import { Menu, Moon, Sun, LogOut } from 'lucide-react';

function Header() {
  const user = useSelector(selectUser);
  const theme = useSelector(selectTheme);
  const sidebarOpen = useSelector(selectSidebarOpen);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleToggleTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <header className={`border-b ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-sm`}>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => dispatch(toggleSidebar())}
            className={`p-2 rounded-lg ${
              theme === 'dark'
                ? 'hover:bg-gray-700 text-gray-200'
                : 'hover:bg-gray-100 text-gray-700'
            } lg:hidden`}
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            Naija AI Document Assistant
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleToggleTheme}
            className={`p-2 rounded-lg ${
              theme === 'dark'
                ? 'hover:bg-gray-700 text-yellow-400'
                : 'hover:bg-gray-100 text-gray-600'
            }`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>

          <div className={`hidden sm:flex items-center gap-3 px-4 py-2 rounded-lg ${
            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
          }`}>
            <div className="w-8 h-8 bg-linear-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                {user?.username.charAt(0).toUpperCase()}
              </span>
            </div>
            <span className={`font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
              {user?.username}
            </span>
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
