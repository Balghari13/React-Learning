import React from "react";

export const CustomSelect = ({ label, id, name, value, onChange,options, defaultOption, errors }) => {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      >
        {/* <option value="" hidden>
          Select Category
        </option> */}
       {defaultOption &&  <option value='' hidden>
{defaultOption}
        </option>}
     
        {/* <option value="grocery">Grocery</option>
        <option value="clothes">Clothes</option>
        <option value="bills">Bills</option>
        <option value="education">Education</option>
        <option value="medicine">Medicine</option> */}

        {options.map((items,i)=> (<option value={items} key={i}>{items}</option>))}
      </select>
      <p className="error">{errors}</p>
    </div>
  );
};
