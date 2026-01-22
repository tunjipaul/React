import useExpenseStore from '../store/expenseStore'
import { MdTrendingUp, MdTrendingDown, MdAccountBalanceWallet } from 'react-icons/md'

function BudgetSummary() {
  const totalBudget = useExpenseStore((state) => state.totalBudget)
  const expenses = useExpenseStore((state) => state.expenses)
  
  const totalSpent = expenses.reduce((total, expense) => total + expense.amount, 0)
  const remaining = totalBudget - totalSpent
  const percentageSpent = totalBudget > 0 ? (totalSpent / totalBudget) * 100 : 0
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 2
    }).format(amount)
  }
  
  const getProgressColor = () => {
    if (percentageSpent >= 100) return 'bg-red-500'
    if (percentageSpent >= 90) return 'bg-red-500'
    if (percentageSpent >= 70) return 'bg-orange-500'
    return 'bg-green-500'
  }
  
  const getBudgetStatus = () => {
    if (remaining < 0) return { text: 'Over Budget', color: 'text-red-600', icon: MdTrendingDown }
    if (percentageSpent >= 90) return { text: 'Almost There', color: 'text-orange-600', icon: MdTrendingUp }
    return { text: 'On Track', color: 'text-green-600', icon: MdTrendingUp }
  }
  
  const status = getBudgetStatus()
  const StatusIcon = status.icon
  
  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg shadow-lg p-4 sm:p-6 text-white">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold">Budget Overview</h2>
        <MdAccountBalanceWallet className="text-3xl sm:text-4xl opacity-80" />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="bg-white bg-opacity-30 rounded-lg p-3 sm:p-4 backdrop-blur-sm border border-white border-opacity-20">
          <p className="text-gray-600 text-xs sm:text-sm mb-1 font-bold">Total Budget</p>
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-500 break-all">{formatCurrency(totalBudget)}</p>
        </div>
        
        <div className="bg-white bg-opacity-30 rounded-lg p-3 sm:p-4 backdrop-blur-sm border border-white border-opacity-20">
          <p className="text-gray-600 text-xs sm:text-sm mb-1 font-bold">Total Spent</p>
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-500 break-all">{formatCurrency(totalSpent)}</p>
        </div>
        
        <div className="bg-white bg-opacity-30 rounded-lg p-3 sm:p-4 backdrop-blur-sm border border-white border-opacity-20">
          <p className="text-gray-600 text-xs sm:text-sm mb-1 font-bold">Remaining</p>
          <p className={`text-xl sm:text-2xl lg:text-3xl font-bold break-all ${remaining < 0 ? 'text-red-500' : 'text-green-600'}`}>
            {formatCurrency(Math.abs(remaining))}
          </p>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs sm:text-sm font-medium">Budget Used</span>
          <span className="text-xs sm:text-sm font-bold">{percentageSpent.toFixed(1)}%</span>
        </div>
        <div className="w-full bg-white bg-opacity-30 rounded-full h-3 sm:h-4 overflow-hidden">
          <div
            className={`h-full transition-all duration-500 ${getProgressColor()}`}
            style={{ width: `${Math.min(percentageSpent, 100)}%` }}
          />
        </div>
      </div>
      
      <div className={`flex items-center justify-center space-x-2 mt-4 p-2 sm:p-3 rounded-lg bg-white bg-opacity-20 text-gray-900`}>
        <StatusIcon className="text-xl sm:text-2xl" />
        <span className="font-semibold text-sm sm:text-base">{status.text}</span>
      </div>
      
      {remaining < 0 && (
        <div className="mt-4 p-2 sm:p-3 bg-red-500 bg-opacity-30 border border-red-300 rounded-lg">
          <p className="text-xs sm:text-sm font-medium flex items-center">
            <span className="mr-2">⚠️</span>
            You are over budget by {formatCurrency(Math.abs(remaining))}!
          </p>
        </div>
      )}
    </div>
  )
}

export default BudgetSummary
