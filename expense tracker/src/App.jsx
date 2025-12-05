import { useState } from 'react'

import './App.css'
import { ExpenseForm } from './components/ExpenseForm'
import { TableExpense } from './components/ExpenseTable'
import expenseData from './components/expenseData'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  const [expenses, setExpenses] = useState(expenseData)
 const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const[isEditing, setIsEditing] = useState('')
const[localData, setLocalData] = useLocalStorage('num',[1,2,3])
  console.log(localData);
  
  return (
    <main>
     <h1 onClick={()=>setLocalData((pre)=>[...pre,4,5,6])}>Track Your Expense {localData}</h1>
    <div className="expense-tracker">
        <ExpenseForm setExpenses={setExpenses} expense={expense} setExpense={setExpense} isEditing={isEditing} setIsEditing={setIsEditing}/>
        <TableExpense expenses = {expenses} setExpenses={setExpenses} setExpense={setExpense} setIsEditing={setIsEditing}/>
        
      </div>
    </main>
  )
}

export default App
