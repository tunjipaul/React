import { useState } from 'react'
import useExpenseStore from '../store/expenseStore'
import CategoryDropdown from './CategoryDropdown'

function ExpenseForm() {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('Food')
  
  const [errors, setErrors] = useState({
    description: '',
    amount: ''
  })
  
  const addExpense = useExpenseStore((state) => state.addExpense)
  
  const validateForm = () => {
    const newErrors = {
      description: '',
      amount: ''
    }
    
    let isValid = true
    
    if (!description.trim()) {
      newErrors.description = 'Please enter a description'
      isValid = false
    }
    
    if (!amount) {
      newErrors.amount = 'Please enter an amount'
      isValid = false
    } else if (parseFloat(amount) <= 0) {
      newErrors.amount = 'Amount must be greater than 0'
      isValid = false
    }
    
    setErrors(newErrors)
    return isValid
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    addExpense({
      description: description.trim(),
      amount: parseFloat(amount),
      category
    })
    
    setDescription('')
    setAmount('')
    setCategory('Food')
    setErrors({ description: '', amount: '' })
  }
  
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
    if (errors.description) {
      setErrors({ ...errors, description: '' })
    }
  }
  
  const handleAmountChange = (e) => {
    setAmount(e.target.value)
    if (errors.amount) {
      setErrors({ ...errors, amount: '' })
    }
  }
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Add New Expense</h2>
      
      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        <div>
          <label htmlFor="description" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <input
            id="description"
            type="text"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="e.g., Lunch at Mama Put"
            className={`w-full px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition ${
              errors.description 
                ? 'border-red-500 focus:border-red-500' 
                : 'border-gray-300 focus:border-blue-500'
            }`}
          />
          {errors.description && (
            <p className="mt-1 text-xs sm:text-sm text-red-600 flex items-center">
              <span className="mr-1">⚠️</span>
              {errors.description}
            </p>
          )}
        </div>
        
        <div>
          <label htmlFor="amount" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
            Amount (₦)
          </label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="0.00"
            step="0.01"
            min="0"
            className={`w-full px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition ${
              errors.amount 
                ? 'border-red-500 focus:border-red-500' 
                : 'border-gray-300 focus:border-blue-500'
            }`}
          />
          {errors.amount && (
            <p className="mt-1 text-xs sm:text-sm text-red-600 flex items-center">
              <span className="mr-1">⚠️</span>
              {errors.amount}
            </p>
          )}
        </div>
        
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <CategoryDropdown value={category} onChange={setCategory} />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg text-sm sm:text-base"
        >
          Add Expense
        </button>
      </form>
    </div>
  )
}

export default ExpenseForm
