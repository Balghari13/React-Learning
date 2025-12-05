import { useState } from 'react'

import './App.css'
import { ExpenseForm } from './components/ExpenseForm'
import { TableExpense } from './components/ExpenseTable'
import expenseData from './components/expenseData'

function App() {
  const [expenses, setExpenses] = useState(expenseData)
 const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const[isEditing, setIsEditing] = useState('')

  
  return (
    <main>
     <h1>Track Your Expense</h1>
    <div className="expense-tracker">
        <ExpenseForm setExpenses={setExpenses} expense={expense} setExpense={setExpense} isEditing={isEditing} setIsEditing={setIsEditing}/>
        <TableExpense expenses = {expenses} setExpenses={setExpenses} setExpense={setExpense} setIsEditing={setIsEditing}/>
        
      </div>
    </main>
  )
}

export default App
