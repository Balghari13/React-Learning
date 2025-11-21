import { useState } from 'react'

import './App.css'
import { ExpenseForm } from './components/ExpenseForm'
import { TableExpense } from './components/ExpenseTable'
import expenseData from './components/expenseData'

function App() {
  const [expenses, setExpense] = useState(expenseData)


  
  return (
    <main>
     <h1>Track Your Expense</h1>
    <div className="expense-tracker">
        <ExpenseForm />
        <TableExpense expenses = {expenses}/>
        
      </div>
    </main>
  )
}

export default App
