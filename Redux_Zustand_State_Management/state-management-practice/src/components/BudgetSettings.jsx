import { useState } from 'react'
import useExpenseStore from '../store/expenseStore'
import { MdSettings, MdSave, MdCancel } from 'react-icons/md'

function BudgetSettings() {
  const totalBudget = useExpenseStore((state) => state.totalBudget)
  const setBudget = useExpenseStore((state) => state.setBudget)
  
  const [isEditing, setIsEditing] = useState(false)
  const [budgetInput, setBudgetInput] = useState(totalBudget.toString())
  const [error, setError] = useState('')
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 2
    }).format(amount)
  }
  
  const handleEdit = () => {
    setIsEditing(true)
    setBudgetInput(totalBudget.toString())
    setError('')
  }
  
  const handleCancel = () => {
    setIsEditing(false)
    setBudgetInput(totalBudget.toString())
    setError('')
  }
  
  const handleSave = () => {
    const newBudget = parseFloat(budgetInput)
    
    if (!budgetInput || isNaN(newBudget)) {
      setError('Please enter a valid amount')
      return
    }
    
    if (newBudget <= 0) {
      setError('Budget must be greater than 0')
      return
    }
    
    setBudget(newBudget)
    setIsEditing(false)
    setError('')
  }
  
  const handleInputChange = (e) => {
    setBudgetInput(e.target.value)
    if (error) setError('')
  }
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <MdSettings className="text-xl sm:text-2xl text-gray-700" />
          <h2 className="text-lg sm:text-xl font-bold text-gray-800">Budget Settings</h2>
        </div>
      </div>
      
      {!isEditing ? (
        <div className="space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 bg-gray-50 rounded-lg space-y-3 sm:space-y-0">
            <div>
              <p className="text-xs sm:text-sm text-gray-600 mb-1">Monthly Budget</p>
              <p className="text-xl sm:text-2xl font-bold text-gray-900 break-all">{formatCurrency(totalBudget)}</p>
            </div>
            <button
              onClick={handleEdit}
              className="w-full sm:w-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200 text-sm sm:text-base"
            >
              Edit Budget
            </button>
          </div>
          
          <div className="text-xs sm:text-sm text-gray-500">
            💡 Tip: You can adjust your monthly budget anytime to match your financial goals.
          </div>
        </div>
      ) : (
        <div className="space-y-3 sm:space-y-4">
          <div>
            <label htmlFor="budget" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
              New Monthly Budget (₦)
            </label>
            <input
              id="budget"
              type="number"
              value={budgetInput}
              onChange={handleInputChange}
              placeholder="500000"
              step="1000"
              min="0"
              className={`w-full px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition ${
                error 
                  ? 'border-red-500 focus:border-red-500' 
                  : 'border-gray-300 focus:border-blue-500'
              }`}
              autoFocus
            />
            {error && (
              <p className="mt-1 text-xs sm:text-sm text-red-600 flex items-center">
                <span className="mr-1">⚠️</span>
                {error}
              </p>
            )}
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
            <button
              onClick={handleSave}
              className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base"
            >
              <MdSave className="text-base sm:text-lg" />
              <span>Save Budget</span>
            </button>
            <button
              onClick={handleCancel}
              className="flex-1 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-lg transition duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base"
            >
              <MdCancel className="text-base sm:text-lg" />
              <span>Cancel</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default BudgetSettings
