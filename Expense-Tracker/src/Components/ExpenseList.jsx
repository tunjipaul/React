import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, onDeleteExpense, onEditExpense }) {
  if (expenses.length === 0) {
    return (
      <div className="expense-list-empty">
        <p>No expenses found. Add one to get started!</p>
      </div>
    );
  }

  return (
    <div className="expense-list-container">
      <ul className="expense-list">
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            expense={expense}
            onDeleteExpense={onDeleteExpense}
            onEditExpense={onEditExpense}
          />
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
