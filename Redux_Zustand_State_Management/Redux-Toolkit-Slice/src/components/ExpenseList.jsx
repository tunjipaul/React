import { useSelector, useDispatch } from 'react-redux';
import { selectExpenses, removeExpense } from '../store/slices/expenseSlice';

function ExpenseList() {
  const expenses = useSelector(selectExpenses);
  const dispatch = useDispatch();

  const categoryColors = {
    Food: 'bg-yellow-100 text-yellow-800',
    Transport: 'bg-blue-100 text-blue-800',
    Entertainment: 'bg-purple-100 text-purple-800',
    Bills: 'bg-red-100 text-red-800',
    Shopping: 'bg-pink-100 text-pink-800',
    Other: 'bg-gray-100 text-gray-800',
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-NG', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  if (expenses.length === 0) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-8 text-center">
        <p className="text-gray-500 text-lg">No expenses recorded yet</p>
        <p className="text-gray-400 text-sm mt-2">Add your first expense above</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Expense History</h2>
      
      <div className="space-y-3">
        {expenses.map((expense) => (
          <div
            key={expense.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors gap-3"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 sm:gap-3 mb-1 flex-wrap">
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{expense.description}</h3>
                <span className={`px-2 py-1 text-xs rounded-full ${categoryColors[expense.category]}`}>
                  {expense.category}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-500">{formatDate(expense.date)}</p>
            </div>
            
            <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4">
              <p className="font-bold text-lg sm:text-xl text-gray-800">
                {formatCurrency(expense.amount)}
              </p>
              <button
                onClick={() => dispatch(removeExpense(expense.id))}
                className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-md transition-colors shrink-0"
                title="Delete expense"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseList;
