import React, { useEffect, useState } from "react";
import { useRef } from "react";
import CustomInput from "./CustomInput";
import { CustomSelect } from "./CustomSelect";

export const ExpenseForm = ({ setExpenses }) => {
  // const [title, setTitle] = useState('')
  // const [category, setCategory] = useState('')
  // const [amount, setAmount] = useState('')

  //making one state; if use useRef() than we don't need this state also
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  // const titleRef= useRef();
  // const categoryRef= useRef();
  // const amountRef= useRef();

  const [errors, setErrors] = useState({});

  function validate(formData) {
    const errorData = {};
    if (!formData.title) {
      errorData.title = "Title is required";
    }
    if (!formData.category) {
      errorData.category = "Category is required";
    }
    if (!formData.amount) {
      errorData.amount = "Amount is required";
    }
    setErrors(errorData);
    return errorData;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateResult = validate(expense);
    if (Object.keys(validateResult).length) return;

    setExpenses((preState) => [
      ...preState,
      { ...expense, id: crypto.randomUUID() },
    ]);
    setExpense({
      title: "",
      category: "",
      amount: "",
    });

    //using useRef hook
    //   const data = {title: titleRef.current.value, category:categoryRef.current.value, amount: amountRef.current.value, id:crypto.randomUUID()}

    //   setExpenses((preState)=> [...preState, data])
    // e.target.reset()

    // when use states
    //  const expense = {title, category,amount, id:crypto.randomUUID()}
    //  setExpenses((preState)=> [...preState, expense])
    //   setTitle('');
    //   setCategory('');
    //   setAmount('');
  };

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

  function handleChange(e) {
    const { name, value } = e.target;
    setExpense((preState) => ({ ...preState, [name]: value }));
    setErrors({});
  }
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <CustomInput
        label="Title"
        name="title"
        value={expense.title}
        onChange={handleChange}
        error={errors.title}
      />

      {/* <div className="input-container">
            <label htmlFor="title">Title</label>
            <input id="title" name='title' 
            // value={title} onChange={(e)=>setTitle(e.target.value)}
            value={expense.title} 
            // onChange={(e)=>setExpense(preState=> ({...preState, title: e.target.value}))  }
            onChange={handleChange}
              // ref={titleRef}
            />
          <p className='error'>{errors.title}</p>
          </div> */}

      <CustomSelect
        label="Category"
        name="category"
        value={expense.category}
        onChange={handleChange}
        options={["grocery", "clothes", "bills", "education", "medicine"]}
        defaultOption="Select category"
        errors={errors.category}
      />

      {/* <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          //  value={category} onChange={(e)=> setCategory(e.target.value)}
          value={expense.category}
          onChange={
            // (e)=> setExpense(preState=> ({...preState, category:e.target.value}))
            handleChange
          }

          // ref={categoryRef}
        >
          <option value="" hidden>
            Select Category
          </option>
          <option value="grocery">Grocery</option>
          <option value="clothes">Clothes</option>
          <option value="bills">Bills</option>
          <option value="education">Education</option>
          <option value="medicine">Medicine</option>
        </select>
        <p className="error">{errors.category}</p>
      </div> */}

      <CustomInput
        label="Amount"
        id="amount"
        name="amount"
        value={expense.amount}
        onChange={handleChange}
        error={errors.amount}
      />
      {/* <div className="input-container">
            <label htmlFor="amount">Amount</label>
            <input id="amount" name='amount'
            //  value={amount} onChange={(e)=>setAmount(e.target.value)}
            value={expense.amount} onChange={
              // (e)=> setExpense(preState=>({...preState, amount:e.target.value}))
              handleChange
            }
            
            // ref={amountRef}
            />
            <p className='error'>{errors.amount}</p>
          </div> */}
      <button className="add-btn">Add</button>
    </form>
  );
};
