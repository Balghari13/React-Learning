import React, { useEffect, useState } from "react";
import { useRef } from "react";
import CustomInput from "./CustomInput";
import { CustomSelect } from "./CustomSelect";

export const ExpenseForm = ({
  expense,
  setExpense,
  setExpenses,
  isEditing,
  setIsEditing,
}) => {
  // const [title, setTitle] = useState('')
  // const [category, setCategory] = useState('')
  // const [amount, setAmount] = useState('')

  //making one state; if use useRef() than we don't need this state also
  /*
  uplifting expense state to get it in context component
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });*/

  // const titleRef= useRef();
  // const categoryRef= useRef();
  // const amountRef= useRef();

  const [errors, setErrors] = useState({});

  const validationConfig = {
    title: [
      { required: true, message: "Please enter title" },
      { minLength: 1, message: "Title should be 5 characters long" },
    ],
    category: [{ required: true, message: "Please select Category" }],
    amount: [
      {
        required: true,
        message: "Please enter Amount",
      },
      {
         pattern: /^[1-9]\d*(\.\d+)?$/,
         message: "Please enter a valid number"
      }
    ],
  };

  function validate(formData) {
    const errorData = {};
    Object.entries(formData).forEach(([key, value]) =>
      validationConfig[key].some((rule) => {
        if (rule.required && !value) {
          errorData[key] = rule.message;
          return true;
        }
        if (rule.minLength && value.length < rule.minLength) {
          errorData[key] = rule.message;
          return true;
        }
        if(rule.pattern && !rule.pattern.test(value)){
          errorData[key] = rule.message;
          return true
        }
      }),
    );

    // if (!formData.title) {
    //   errorData.title = "Title is required";
    // }
    // if (!formData.category) {
    //   errorData.category = "Category is required";
    // }
    // if (!formData.amount) {
    //   errorData.amount = "Amount is requireddd";
    // }
    setErrors(errorData);
    return errorData;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateResult = validate(expense);
    if (Object.keys(validateResult).length) return;
    if (isEditing) {
      setExpenses((preState) =>
        preState.map((preExp) => {
          if (preExp.id === isEditing) {
            return { ...expense, id: isEditing };
          }
          return preExp;
        }),
      );
      setIsEditing("");
      setExpense({
        title: "",
        category: "",
        amount: "",
      });

      return;
    }
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
        options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
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
      <button className="add-btn">{isEditing ? "Save" : "Add"}</button>
    </form>
  );
};
