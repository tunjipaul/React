import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useExpenseStore = create(
  persist(
    (set, get) => ({
      expenses: [],
      totalBudget: 500000,
      
      addExpense: (expense) => {
        const newExpense = {
          id: Date.now(),
          ...expense,
          date: new Date().toISOString()
        }
        
        set((state) => ({
          expenses: [...state.expenses, newExpense]
        }))
      },
      
      removeExpense: (id) => set((state) => ({
        expenses: state.expenses.filter(expense => expense.id !== id)
      })),
      
      setBudget: (amount) => set({ totalBudget: amount }),
      
      getTotalSpent: () => {
        const { expenses } = get()
        return expenses.reduce((total, expense) => total + expense.amount, 0)
      },
      
      getRemainingBudget: () => {
        const { totalBudget } = get()
        const { getTotalSpent } = get()
        return totalBudget - getTotalSpent()
      },
      
      getExpensesByCategory: () => {
        const { expenses } = get()
        return expenses.reduce((acc, expense) => {
          const category = expense.category || 'Other'
          acc[category] = (acc[category] || 0) + expense.amount
          return acc
        }, {})
      }
    }),
    {
      name: 'expense-tracker-storage',
      partialize: (state) => ({
        expenses: state.expenses,
        totalBudget: state.totalBudget
      })
    }
  )
)

export default useExpenseStore
