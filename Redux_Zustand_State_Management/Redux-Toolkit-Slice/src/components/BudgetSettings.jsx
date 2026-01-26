import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTotalBudget, setBudget } from '../store/slices/expenseSlice';

function BudgetSettings() {
  const currentBudget = useSelector(selectTotalBudget);
  const dispatch = useDispatch();
  const [newBudget, setNewBudget] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const budgetValue = parseFloat(newBudget);
    if (!isNaN(budgetValue) && budgetValue > 0) {
      dispatch(setBudget(budgetValue));
      setNewBudget('');
      setIsEditing(false);
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
    }).format(amount);
  };

  if (!isEditing) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Monthly Budget</h3>
            <p className="text-3xl font-bold text-green-600">{formatCurrency(currentBudget)}</p>
          </div>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
          >
            Update Budget
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Update Monthly Budget</h3>
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="number"
          value={newBudget}
          onChange={(e) => setNewBudget(e.target.value)}
          placeholder={`Current: ${formatCurrency(currentBudget)}`}
          step="0.01"
          min="0"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          autoFocus
          required
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-md transition-colors"
        >
          Save
        </button>
        <button
          type="button"
          onClick={() => {
            setIsEditing(false);
            setNewBudget('');
          }}
          className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-6 rounded-md transition-colors"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default BudgetSettings;
