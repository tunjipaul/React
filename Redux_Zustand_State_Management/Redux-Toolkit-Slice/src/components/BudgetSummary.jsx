import { useSelector } from 'react-redux';
import { selectTotalBudget, selectTotalSpent, selectRemainingBudget } from '../store/slices/expenseSlice';

function BudgetSummary() {
  const totalBudget = useSelector(selectTotalBudget);
  const totalSpent = useSelector(selectTotalSpent);
  const remainingBudget = useSelector(selectRemainingBudget);

  const spentPercentage = (totalSpent / totalBudget) * 100;
  const isOverBudget = remainingBudget < 0;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
    }).format(amount);
  };

  return (
    <div className="bg-linear-to-r from-green-500 to-green-600 shadow-lg rounded-lg p-6 text-white mb-6">
      <h2 className="text-2xl font-bold mb-6">Budget Summary</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
          <p className="text-sm font-bold opacity-90 mb-1 text-gray-950">Total Budget</p>
          <p className="text-2xl font-bold text-gray-950">{formatCurrency(totalBudget)}</p>
        </div>

        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
          <p className="text-sm font-bold opacity-90 mb-1 text-gray-950">Total Spent</p>
          <p className="text-2xl font-bold text-gray-950">{formatCurrency(totalSpent)}</p>
        </div>

        <div className={`bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 ${isOverBudget ? 'ring-2 ring-red-300' : ''}`}>
          <p className="text-sm font-bold opacity-90 mb-1 text-gray-950">Remaining</p>
          <p className={`text-2xl font-bold ${isOverBudget ? 'text-red-600' : ''}`}>
            {formatCurrency(Math.abs(remainingBudget))}
            {isOverBudget && ' (Over-Budget)'}
          </p>
        </div>
      </div>

      <div className="mb-2">
        <div className="flex justify-between text-sm mb-2">
          <span className="font-bold text-gray-950">Budget Usage</span>
          <span className="font-bold text-gray-950">{spentPercentage.toFixed(1)}%</span>
        </div>
        <div className="w-full bg-white bg-opacity-30 rounded-full h-4 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              spentPercentage >= 100 ? 'bg-red-400' : 
              spentPercentage >= 75 ? 'bg-yellow-400' : 
              'bg-green-200'
            }`}
            style={{ width: `${Math.min(spentPercentage, 100)}%` }}
          />
        </div>
      </div>

      {isOverBudget && (
        <div className="bg-red-500 bg-opacity-50 border border-red-300 rounded-lg p-3 mt-4">
          <p className="text-sm font-semibold text-gray-950">⚠️ Warning: You have exceeded your budget!</p>
        </div>
      )}
    </div>
  );
}

export default BudgetSummary;
