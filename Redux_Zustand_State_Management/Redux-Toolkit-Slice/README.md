# OTP Expense Tracker (Redux Toolkit)

A professional expense tracking application built with **React**, **Redux Toolkit**, and **Tailwind CSS**. Features persistent storage, real-time budget tracking, and a beautiful responsive interface - perfect for learning Redux patterns!

![React](https://img.shields.io/badge/React-19.2.0-61dafb.svg)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2.11.2-764abc.svg)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4.1.18-38bdf8.svg)

## ✨ Features

### 💰 Expense Management

- **Add Expenses** - Track with description, amount (₦), and category
- **Delete Expenses** - Remove unwanted entries
- **Smart Categorization** - Food, Transport, Bills, Shopping, Entertainment, Other
- **Automatic Timestamps** - Track when each expense was added

### 📊 Budget Tracking

- **Monthly Budget** - Set and update spending limits
- **Real-time Calculations** - Instant total spent and remaining budget
- **Visual Progress Bar** - Color-coded budget usage (green → yellow → red)
- **Over-budget Alerts** - Warning when spending exceeds budget

### 💾 Redux Persist

- **LocalStorage Integration** - All data persists across sessions
- **Automatic Sync** - State saved on every change
- **No Data Loss** - Expenses and budget survive page refreshes

### 🎨 Modern UI/UX

- **Fully Responsive** - Mobile-first design, works on all devices
- **Nigerian Naira (₦)** - Proper currency formatting
- **Category Badges** - Color-coded visual indicators
- **Smooth Animations** - Polished user experience
- **Tailwind CSS v4** - Latest utility-first styling

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Navigate to project directory
cd Redux-Toolkit-Slice

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Tech Stack

- **React 19.2** - UI library
- **Redux Toolkit 2.11** - State management
- **Redux Persist** - State persistence
- **React-Redux 9.2** - React bindings for Redux
- **Tailwind CSS 4.1** - Styling framework
- **Vite 7.2** - Build tool

## 🏗️ Project Structure

```
src/
├── store/
│   ├── index.js              # Store configuration + persist
│   └── slices/
│       └── expenseSlice.js   # Expense slice with reducers
├── components/
│   ├── ExpenseForm.jsx       # Add expense form
│   ├── ExpenseList.jsx       # Display expenses
│   ├── BudgetSummary.jsx     # Budget overview
│   └── BudgetSettings.jsx    # Update budget
├── App.jsx                   # Main app component
└── main.jsx                  # Entry point with Provider
```

## 🎯 Redux Architecture

### Expense Slice

**State:**

```javascript
{
  expenses: [],           // Array of expense objects
  totalBudget: 500000,   // Monthly budget in Naira
}
```

**Reducers:**

- `addExpense` - Add new expense with auto-generated ID and timestamp
- `removeExpense` - Delete expense by ID
- `setBudget` - Update monthly budget

**Selectors:**

```javascript
selectExpenses(state); // Get all expenses
selectTotalBudget(state); // Get budget amount
selectTotalSpent(state); // Calculate total spent
selectRemainingBudget(state); // Calculate remaining budget
```

### Redux Persist Configuration

```javascript
const persistConfig = {
  key: "otp-expense-tracker",
  storage,
  whitelist: ["expenses"],
};
```

## 💡 Key Features Explained

### Budget Progress Indicator

- **Green (< 75%)** - Healthy spending
- **Yellow (75-99%)** - Approaching limit
- **Red (100%+)** - Over budget with warning

### Expense Categories

Each category has a unique color badge:

- 🟡 Food
- 🔵 Transport
- 🟣 Entertainment
- 🔴 Bills
- 🌸 Shopping
- ⚪ Other

### Currency Formatting

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
   - Push to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Import repository
   - Deploy automatically

2. **Via CLI**
   ```bash
   npm install -g vercel
   vercel login
   vercel --prod
   ```

**Build Settings (auto-detected):**

- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

## 🎓 Learning Outcomes

This project demonstrates:

- Redux Toolkit slice patterns
- Redux Persist integration
- useSelector and useDispatch hooks
- Selector functions for computed state
- Redux DevTools integration
- Provider pattern
- Responsive design with Tailwind v4
- Currency formatting and localization

## 🆚 Redux vs Zustand

**Why Redux Toolkit?**

- ✅ Industry standard for large apps
- ✅ Excellent DevTools
- ✅ Structured patterns
- ✅ Great for teams
- ✅ Extensive ecosystem

**Trade-offs:**

- ⚠️ More boilerplate than Zustand
- ⚠️ Requires Provider wrapper
- ⚠️ Steeper learning curve

## 🔄 State Flow

```
User Action → Dispatch Action → Reducer Updates State →
Redux Persist Saves → Selector Reads State → Component Re-renders
```

## 📄 License

MIT License - feel free to use this project for learning!

## 👨‍💻 Author

**TunjiPaul**

---

Built with ❤️ using React, Redux Toolkit, and Tailwind CSS

Run the App here: https://expense-tracker-redux-gray.vercel.app/
