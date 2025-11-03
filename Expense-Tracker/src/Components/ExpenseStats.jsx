import { useMemo } from "react";
import StatCard from "./StatCard";
import { CATEGORIES, categoryClassName, formatCurrency } from "./Utils";

function ExpenseStats({ expenses }) {
  const { total, count, highest, breakdown } = useMemo(() => {
    const total = expenses.reduce((sum, ex) => sum + ex.amount, 0);
    const count = expenses.length;
    const highest = Math.max(0, ...expenses.map((ex) => ex.amount));

    const breakdown = CATEGORIES.reduce((acc, category) => {
      const categoryTotal = expenses
        .filter((ex) => ex.category === category)
        .reduce((sum, ex) => sum + ex.amount, 0);
      acc[category] = {
        total: categoryTotal,
        percentage: total > 0 ? (categoryTotal / total) * 100 : 0,
      };
      return acc;
    }, {});

    return { total, count, highest, breakdown };
  }, [expenses]);

  return (
    <div className="stats-container">
      <div className="stats-grid">
        <StatCard title="Total Spent" value={formatCurrency(total)} />
        <StatCard title="Total Items" value={count} />
        <StatCard title="Highest Expense" value={formatCurrency(highest)} />
      </div>

      <div className="card">
        <h3 className="breakdown-title">Spending Breakdown</h3>
        <div className="breakdown-progress-list">
          {CATEGORIES.map((category) => (
            <div key={category} className="breakdown-progress-item">
              <div className="breakdown-progress-labels">
                <span className="breakdown-category-label">{category}</span>
                <span className="breakdown-category-total">
                  {formatCurrency(breakdown[category].total)}
                </span>
              </div>
              <div className="progress-bar-container">
                <div
                  className={`progress-bar-inner ${categoryClassName[category]}`}
                  style={{ width: `${breakdown[category].percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ExpenseStats;
