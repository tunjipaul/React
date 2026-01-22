import useExpenseStore from '../store/expenseStore'
import { MdFastfood, MdDirectionsBus, MdMovie, MdLightbulb, MdLocalHospital, MdSchool, MdShoppingCart, MdCategory, MdDelete } from 'react-icons/md'

function ExpenseList() {
  const expenses = useExpenseStore((state) => state.expenses)
  const removeExpense = useExpenseStore((state) => state.removeExpense)
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 2
    }).format(amount)
  }
  
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-NG', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }
  
  const getCategoryIcon = (category) => {
    const icons = {
      'Food': <MdFastfood className="text-2xl sm:text-3xl text-orange-600" />,
      'Transport': <MdDirectionsBus className="text-2xl sm:text-3xl text-blue-600" />,
      'Entertainment': <MdMovie className="text-2xl sm:text-3xl text-purple-600" />,
      'Utilities': <MdLightbulb className="text-2xl sm:text-3xl text-yellow-600" />,
      'Healthcare': <MdLocalHospital className="text-2xl sm:text-3xl text-red-600" />,
      'Education': <MdSchool className="text-2xl sm:text-3xl text-green-600" />,
      'Shopping': <MdShoppingCart className="text-2xl sm:text-3xl text-pink-600" />,
      'Other': <MdCategory className="text-2xl sm:text-3xl text-gray-600" />
    }
    return icons[category] || <MdCategory className="text-2xl sm:text-3xl text-gray-600" />
  }
  
  const getCategoryColor = (category) => {
    const colors = {
      'Food': 'bg-orange-100 text-orange-800',
      'Transport': 'bg-blue-100 text-blue-800',
      'Entertainment': 'bg-purple-100 text-purple-800',
      'Utilities': 'bg-yellow-100 text-yellow-800',
      'Healthcare': 'bg-red-100 text-red-800',
      'Education': 'bg-green-100 text-green-800',
      'Shopping': 'bg-pink-100 text-pink-800',
      'Other': 'bg-gray-100 text-gray-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }
  
  const handleDelete = (id, description) => {
    if (window.confirm(`Are you sure you want to delete "${description}"?`)) {
      removeExpense(id)
    }
  }
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Your Expenses</h2>
      
      {expenses.length === 0 ? (
        <div className="text-center py-8 sm:py-12">
          <div className="text-5xl sm:text-6xl mb-4">📭</div>
          <p className="text-gray-500 text-base sm:text-lg">No expenses yet</p>
          <p className="text-gray-400 text-xs sm:text-sm mt-2">Add your first expense above to get started!</p>
        </div>
      ) : (
        <div className="space-y-3">
          {expenses.map((expense) => (
            <div
              key={expense.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 border border-gray-200 rounded-lg hover:shadow-md transition duration-200 space-y-3 sm:space-y-0"
            >
              <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                <div className="flex-shrink-0">
                  {getCategoryIcon(expense.category)}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3">
                    <h3 className="font-semibold text-gray-800 text-base sm:text-lg truncate">
                      {expense.description}
                    </h3>
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(expense.category)} inline-block mt-1 sm:mt-0 w-fit`}>
                      {expense.category}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">
                    {formatDate(expense.date)}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-between sm:justify-end sm:space-x-4 pl-9 sm:pl-0">
                <div className="text-left sm:text-right">
                  <p className="text-lg sm:text-xl font-bold text-gray-900 break-all">
                    {formatCurrency(expense.amount)}
                  </p>
                </div>
                
                <button
                  onClick={() => handleDelete(expense.id, expense.description)}
                  className="px-3 sm:px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition duration-200 font-medium flex items-center space-x-1 sm:space-x-2 text-sm sm:text-base flex-shrink-0"
                  title="Delete expense"
                >
                  <MdDelete className="text-base sm:text-lg" />
                  <span className="hidden sm:inline">Delete</span>
                  <span className="sm:hidden">Del</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {expenses.length > 0 && (
        <div className="mt-4 sm:mt-6 pt-4 border-t border-gray-200">
          <p className="text-gray-600 text-xs sm:text-sm text-center">
            Total of <span className="font-semibold">{expenses.length}</span> expense{expenses.length !== 1 ? 's' : ''}
          </p>
        </div>
      )}
    </div>
  )
}

export default ExpenseList
