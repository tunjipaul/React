import { useState, useMemo } from "react";
import "./App.css"; 

import Header from "./Components/Header";
import ExpenseStats from "./Components/ExpenseStats";
import AddExpenseForm from "./Components/ExpenseForm";
import CategoryFilter from "./Components/CategoryFilter";
import ExpenseList from "./Components/ExpenseList";

const sampleExpenses = [
  {
    id: 1,
    description: "Lunch at Mama Put",
    amount: 1500,
    category: "Food",
    date: "2025-11-01",
  },
  {
    id: 2,
    description: "Bolt ride to office",
    amount: 2500,
    category: "Transport",
    date: "2025-11-01",
  },
  {
    id: 3,
    description: "MTN Data Subscription",
    amount: 5000,
    category: "Bills",
    date: "2025-11-02",
  },
  {
    id: 4,
    description: "Cinema ticket",
    amount: 7500,
    category: "Entertainment",
    date: "2025-11-02",
  },
];

function App() {
  // --- State ---
  const [expenses, setExpenses] = useState(sampleExpenses);
  const [filter, setFilter] = useState("all");

  // --- Handler Functions ---

  const handleAddExpense = (newExpense) => {
    setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  const handleEditExpense = (id, newDescription, newAmount) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) =>
        expense.id === id
          ? { ...expense, description: newDescription, amount: newAmount }
          : expense
      )
    );
  };

  const handleSetFilter = (category) => {
    setFilter(category.toLowerCase());
  };

  // --- Derived State (Filtering) ---
  const filteredExpenses = expenses.filter((expense) => {
    if (filter === "all") return true;
    return expense.category.toLowerCase() === filter;
  });

  // --- Render ---
  return (
    <div className="app-container">
      <Header />

      <main>
        <ExpenseStats expenses={expenses} />
        <AddExpenseForm onAddExpense={handleAddExpense} />
        <CategoryFilter
          currentFilter={filter}
          onFilterChange={handleSetFilter}
        />
        <ExpenseList
          expenses={filteredExpenses}
          onDeleteExpense={handleDeleteExpense}
          onEditExpense={handleEditExpense}
        />
      </main>

      <footer className="app-footer">Built with React.</footer>
    </div>
  );
}

export default App;
