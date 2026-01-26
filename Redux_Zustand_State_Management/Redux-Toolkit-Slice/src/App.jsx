import BudgetSettings from './components/BudgetSettings';
import BudgetSummary from './components/BudgetSummary';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            ₦ OTP Expense Tracker
          </h1>
          <p className="text-gray-600">
            Track your expenses with Redux Toolkit
          </p>
        </header>

        <BudgetSettings />
        <BudgetSummary />
        <ExpenseForm />
        <ExpenseList />

        <footer className="text-center mt-8 text-gray-500 text-sm">
          <p>Built with React, Redux Toolkit & Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
