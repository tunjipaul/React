import { useState } from "react";
import { CATEGORIES } from "./Utils";

function AddExpenseForm({ onAddExpense }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim() || !amount || Number(amount) <= 0) {
      setError(
        "Please enter a valid description and an amount greater than ₦0."
      );
      return;
    }
    setError("");
    const newExpense = {
      description: description.trim(),
      amount: Number(amount),
      category: category,
      date: new Date().toISOString().split("T")[0],
      id: Date.now(),
    };
    onAddExpense(newExpense);
    setDescription("");
    setAmount("");
    setCategory(CATEGORIES[0]);
  };

  return (
    <div className="card">
      <h3 className="form-title">Add New Expense</h3>
      {error && (
        <div className="form-error" role="alert">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="add-expense-form">
        <div className="form-grid">
          {/* --- Description Input --- */}
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g., Lunch"
              className="form-input"
            />
          </div>

          {/* --- Amount Input --- */}
          <div className="form-group">
            <label htmlFor="amount">Amount (₦)</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="e.g., 1500"
              className="form-input"
            />
          </div>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="form-input"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div className="form-submit-wrapper">
            <button type="submit" className="form-submit-btn">
              Add Expense
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddExpenseForm;
