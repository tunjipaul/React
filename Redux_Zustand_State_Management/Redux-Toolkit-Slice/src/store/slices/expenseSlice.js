import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  expenses: [],
  totalBudget: 500000,
};

const expenseSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push({
        ...action.payload,
        id: Date.now(),
        date: new Date().toISOString(),
      });
    },
    
    removeExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        expense => expense.id !== action.payload
      );
    },
    
    setBudget: (state, action) => {
      state.totalBudget = action.payload;
    },
  },
});

export const { addExpense, removeExpense, setBudget } = expenseSlice.actions;

export const selectExpenses = (state) => state.expenses.expenses;
export const selectTotalBudget = (state) => state.expenses.totalBudget;

export const selectTotalSpent = (state) => {
  return state.expenses.expenses.reduce(
    (total, expense) => total + parseFloat(expense.amount || 0),
    0
  );
};

export const selectRemainingBudget = (state) => {
  const totalSpent = selectTotalSpent(state);
  return state.expenses.totalBudget - totalSpent;
};

export default expenseSlice.reducer;
