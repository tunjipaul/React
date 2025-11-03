import { useState } from "react";
import { categoryClassName, formatCurrency } from "./Utils";
function ExpenseItem({ expense, onDeleteExpense, onEditExpense }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editDescription, setEditDescription] = useState(expense.description);
  const [editAmount, setEditAmount] = useState(expense.amount.toString());

  const handleSave = () => {
    if (!editDescription.trim() || !editAmount || Number(editAmount) <= 0) {
      setIsEditing(false);
      setEditDescription(expense.description);
      setEditAmount(expense.amount.toString());
      return;
    }
    onEditExpense(expense.id, editDescription.trim(), Number(editAmount));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditDescription(expense.description);
    setEditAmount(expense.amount.toString());
  };

  const catClassName =
    categoryClassName[expense.category] || categoryClassName["Others"];

  return (
    <li className="expense-item">
      {isEditing ? (
        <div className="edit-form">
          <input
            type="text"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            className="form-input"
          />
          <input
            type="number"
            value={editAmount}
            onChange={(e) => setEditAmount(e.target.value)}
            className="form-input"
          />
          <div className="edit-form-actions">
            <button onClick={handleCancel} className="edit-btn edit-btn-cancel">
              Cancel
            </button>
            <button onClick={handleSave} className="edit-btn edit-btn-save">
              Save
            </button>
          </div>
        </div>
      ) : (
        <div className="expense-item-display">
          <div className="item-col-date-category">
            <div className={`category-tag ${catClassName}`}>
              {expense.category}
            </div>
            <div className="item-date">{expense.date}</div>
          </div>

          <div className="item-col-desc-amount">
            <p className="item-description">{expense.description}</p>
            <p className="item-amount">{formatCurrency(expense.amount)}</p>
          </div>

          <div className="item-col-actions">
            <button
              onClick={() => setIsEditing(true)}
              className="icon-btn"
              aria-label="Edit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </button>
            <button
              onClick={() => onDeleteExpense(expense.id)}
              className="icon-btn delete"
              aria-label="Delete"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </li>
  );
}

export default ExpenseItem;
