# TunjiPaul Local AI Document Assistant

A modern, full-featured document management application with AI chat capabilities, built with **React**, **Redux Toolkit**, and **Tailwind CSS**. This is a frontend-only demo showcasing advanced state management patterns and responsive design.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19.2.0-61dafb.svg)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2.11.2-764abc.svg)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4.1.18-38bdf8.svg)

## ✨ Features

### 🔐 Authentication

- Local authentication system (demo mode)
- Persistent login state with redux-persist
- User profile management

### 📄 Document Management

- Upload and organize documents
- Document selection and deletion
- Persistent document storage
- Support for multiple file types (PDF, DOCX, TXT, CSV)

### 💬 AI Chat Interface

- Interactive chat with simulated AI responses
- Typing indicators
- Message history
- Real-time conversation flow

### 🎨 UI/UX

- **Dark/Light Mode** - Theme toggle with localStorage persistence
- **Responsive Design** - Mobile-first, works on all devices
- **Collapsible Sidebar** - Touch-friendly navigation
- **Toast Notifications** - Auto-dismissing success/error messages
- **Modern Icons** - Powered by lucide-react

### 🏗️ Advanced Redux Patterns

- **4 Redux Slices** - auth, documents, chat, ui
- **Cross-Slice Middleware** - Automated state interactions
- **Redux Persist** - Auth and documents persist across refreshes
- **Selectors** - Optimized state access

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd Multi-Store-Application

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Login

Enter any username and email to access the dashboard (demo mode).

## 📦 Tech Stack

- **React 19.2** - UI library
- **Redux Toolkit 2.11** - State management
- **Redux Persist** - State persistence
- **Tailwind CSS 4.1** - Styling
- **Lucide React** - Icons
- **Vite 7.2** - Build tool

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── LoginForm.jsx
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   ├── DocumentUploader.jsx
│   ├── ChatInterface.jsx
│   └── NotificationContainer.jsx
├── store/              # Redux store
│   ├── index.js        # Store configuration + middleware
│   └── slices/         # Redux slices
│       ├── authSlice.js
│       ├── documentSlice.js
│       ├── chatSlice.js
│       └── uiSlice.js
├── App.jsx             # Main app component
└── main.jsx            # Entry point
```

## 🌐 Deploy to Vercel

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

### Manual Deployment

1. **Install Vercel CLI**

   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**

   ```bash
   vercel login
   ```

3. **Deploy**

   ```bash
   vercel
   ```

4. **Production Deployment**
   ```bash
   vercel --prod
   ```

### Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository
4. Vercel will auto-detect Vite configuration
5. Click "Deploy"

**Build Settings (auto-detected):**

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📚 Redux Architecture

### Slices

1. **authSlice** - User authentication
   - State: `user`, `isAuthenticated`, `token`
   - Actions: `login()`, `logout()`, `refreshToken()`

2. **documentSlice** - Document management
   - State: `documents[]`, `selectedDocument`, `isUploading`
   - Actions: `uploadDocument()`, `deleteDocument()`, `selectDocument()`

3. **chatSlice** - AI chat
   - State: `messages[]`, `isAgentTyping`
   - Actions: `sendQuery()`, `addMessage()`, `clearChat()`

4. **uiSlice** - UI state
   - State: `sidebarOpen`, `theme`, `notifications[]`
   - Actions: `toggleSidebar()`, `setTheme()`, `addNotification()`

### Cross-Slice Interactions

Custom middleware automatically handles:

- ✅ Document upload → Success notification
- ✅ User logout → Clear chat and documents
- ✅ Theme change → Persist to localStorage

## 🎯 Learning Outcomes

This project demonstrates:

- Multi-slice Redux architecture
- Redux middleware patterns
- State persistence strategies
- Cross-slice communication
- Responsive design with Tailwind
- Dark mode implementation
- Modern React patterns

## ⚠️ Important Notes

- **Frontend Only** - No backend integration (demo mode)
- **Simulated Features** - Authentication, file upload, and AI responses are simulated
- **Local Storage** - Auth and documents persist in browser localStorage
- **Production Ready Patterns** - Redux architecture is production-ready, just needs backend integration

## 🔮 Future Enhancements

To make this production-ready:

- [ ] Backend API integration (FastAPI/Express)
- [ ] Real JWT authentication
- [ ] Actual file upload (AWS S3/Cloudinary)
- [ ] Real AI integration (OpenAI/Gemini)
- [ ] Database persistence (PostgreSQL/MongoDB)
- [ ] User registration and password reset
- [ ] Document preview functionality
- [ ] Advanced search and filtering

## 📄 License

MIT License - feel free to use this project for learning or as a template!

## 👨‍💻 Author

**TunjiPaul**

---

Built with ❤️ using React, Redux Toolkit, and Tailwind CSS

Run it here: https://ai-local-document-assistant.vercel.app/