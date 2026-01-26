# TunjiPaul Expense Tracker (Zustand)

A modern, feature-rich expense tracking application built with **React**, **Zustand**, and **Tailwind CSS**. Track your expenses, manage budgets, and visualize spending patterns with a beautiful, responsive interface.

![React](https://img.shields.io/badge/React-19.2.0-61dafb.svg)
![Zustand](https://img.shields.io/badge/Zustand-5.0.2-000000.svg)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4.1.18-38bdf8.svg)

## ✨ Features

### 💰 Expense Management

- **Add Expenses** - Track expenses with description, amount, and category
- **Delete Expenses** - Remove unwanted expense entries
- **Categorization** - Organize expenses by type (Food, Transport, Bills, etc.)
- **Timestamps** - Automatic date/time tracking for each expense

### 📊 Budget Tracking

- **Set Monthly Budget** - Define your spending limit
- **Real-time Calculations** - Automatic total spent and remaining budget
- **Visual Progress Bar** - Color-coded budget usage indicator
- **Over-budget Warnings** - Alerts when spending exceeds budget

### 💾 Data Persistence

- **LocalStorage Integration** - Expenses and budget persist across sessions
- **Zustand Persist Middleware** - Automatic state synchronization
- **No Data Loss** - Your data is saved even after closing the browser

### 🎨 Modern UI/UX

- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Nigerian Naira (₦) Formatting** - Localized currency display
- **Category Badges** - Color-coded expense categories
- **Smooth Animations** - Polished transitions and interactions
- **Tailwind CSS** - Modern, utility-first styling

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Navigate to project directory
cd state-management-practice

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Tech Stack

- **React 19.2** - UI library
- **Zustand 5.0** - Lightweight state management
- **Zustand Persist** - State persistence middleware
- **Tailwind CSS 4.1** - Styling framework
- **Vite 7.2** - Build tool and dev server

## 🏗️ Project Structure

```
src/
├── store/
│   └── useExpenseStore.js    # Zustand store with persist
├── components/
│   ├── ExpenseForm.jsx        # Add expense form
│   ├── ExpenseList.jsx        # Display expenses
│   ├── BudgetSummary.jsx      # Budget overview
│   └── BudgetSettings.jsx     # Update budget
├── App.jsx                    # Main app component
└── main.jsx                   # Entry point
```

## 🎯 Zustand Store

### State

```javascript
{
  expenses: [],           // Array of expense objects
  totalBudget: 500000,   // Monthly budget in Naira
}
```

### Actions

- `addExpense(expense)` - Add new expense
- `removeExpense(id)` - Delete expense by ID
- `setBudget(amount)` - Update monthly budget

### Computed Values (Selectors)

- `getTotalSpent()` - Calculate total expenses
- `getRemainingBudget()` - Calculate remaining budget

### Persistence

```javascript
persist(
  (set, get) => ({
    /* store */
  }),
  {
    name: "expense-tracker-storage",
    storage: createJSONStorage(() => localStorage),
  },
);
```

## 💡 Key Features Explained

### Budget Progress Indicator

- **Green** - Less than 75% spent
- **Yellow** - 75-99% spent
- **Red** - 100%+ spent (over budget)

### Expense Categories

- Food
- Transport
- Entertainment
- Bills
- Shopping
- Other

### Currency Formatting

Uses `Intl.NumberFormat` for proper Nigerian Naira formatting:

```javascript
new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
}).format(amount);
```

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🌐 Deployment

### Deploy to Vercel

1. **Via Dashboard**
   - Push code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Import repository
   - Click "Deploy"

2. **Via CLI**
   ```bash
   npm install -g vercel
   vercel login
   vercel --prod
   ```

**Build Settings:**

- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

## 🎓 Learning Outcomes

This project demonstrates:

- Zustand state management patterns
- Persist middleware implementation
- Computed values with selectors
- LocalStorage integration
- Responsive design with Tailwind
- Currency formatting and localization
- React hooks and component composition

## 🆚 Zustand vs Redux

**Why Zustand?**

- ✅ Minimal boilerplate
- ✅ No Provider wrapper needed
- ✅ Simple API
- ✅ Built-in persistence
- ✅ Perfect for small-medium apps

## 📄 License

MIT License - feel free to use this project for learning!

## 👨‍💻 Author

**TunjiPaul**

---

Built with ❤️ using React, Zustand, and Tailwind CSS

Run the app here: https://tunjipaulexpensetracker-tunjipauls-projects.vercel.app/
