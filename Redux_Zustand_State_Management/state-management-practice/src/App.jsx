import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import BudgetSummary from './components/BudgetSummary'
import BudgetSettings from './components/BudgetSettings'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            💰 TunjiPaul Expense Tracker
          </h1>
          <p className="text-sm sm:text-base text-gray-600 px-4">
            Track your expenses and manage your budget with Zustand state management
          </p>
        </header>
        
        <div className="space-y-4 sm:space-y-6 mb-4 sm:mb-6">
          <BudgetSummary />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="lg:col-span-1 space-y-4 sm:space-y-6">
            <BudgetSettings />
            <ExpenseForm />
          </div>
          
          <div className="lg:col-span-2">
            <ExpenseList />
          </div>
        </div>
        
        <footer className="mt-6 sm:mt-8 text-center text-gray-500 text-xs sm:text-sm">
          <p>Built with React, Zustand, and TailwindCSS</p>
        </footer>
      </div>
    </div>
  )
}

export default App
