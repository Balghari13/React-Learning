import React, { useState } from 'react'

export const ExpenseForm = ({setExpenses}) => {

  // const [title, setTitle] = useState('')
  // const [category, setCategory] = useState('')
  // const [amount, setAmount] = useState('')

  //making one state
  const [expense, setExpense] = useState({
    title : '', category: '', amount: ''
  })
  
const handleSubmit = (e)=>{
  e.preventDefault();
  setExpenses((preState)=> [...preState, {...expense, id: crypto.randomUUID()}])
  setExpense({
    title : '', category: '', amount: ''
  })
//  const expense = {title, category,amount, id:crypto.randomUUID()}
//  setExpenses((preState)=> [...preState, expense])
//   setTitle('');
//   setCategory('');
//   setAmount('');
   
}
  

  //Javascript method
  // const handleSubmit =(e)=>{
  //   e.preventDefault()
  //   const expense = {...getFormData(e.target), id: crypto.randomUUID()}
  //   setExpense((pre)=> ([...pre, expense] ))
  //   e.target.reset()
  // }
//   const getFormData = (form)=>{
// const formData = new FormData(form)
// const data = {}
// for(const [key, value] of formData.entries()){
//   data[key] = value
// }
// return data;
//   }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="title">Title</label>
            <input id="title" name='title' 
            // value={title} onChange={(e)=>setTitle(e.target.value)}
            value={expense.title} onChange={(e)=>setExpense(preState=> ({...preState, title: e.target.value}))}
            />
          </div>
          <div className="input-container">
            <label htmlFor="category">Category</label>
            <select id='category' name='category'
            //  value={category} onChange={(e)=> setCategory(e.target.value)}
value={expense.category} onChange={(e)=> setExpense(preState=> ({...preState, category:e.target.value}))}
             >
                  <option value="" hidden>Select Category</option>
                  <option value="grocery">Grocery</option>
                  <option value="clothes">Clothes</option>
                  <option value="bills">Bills</option>
                  <option value="education">Education</option>
                  <option value="medicine">Medicine</option>
                </select>
          </div>
          <div className="input-container">
            <label htmlFor="amount">Amount</label>
            <input id="amount" name='amount'
            //  value={amount} onChange={(e)=>setAmount(e.target.value)}
            value={expense.amount} onChange={(e)=> setExpense(preState=>({...preState, amount:e.target.value}))}
            />
          </div>
          <button className="add-btn">Add</button>
        </form>
  )
}
