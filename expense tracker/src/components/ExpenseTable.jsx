import React, { useState } from "react";
import { useFilterHook } from "../hooks/useFilterHook";
import { ContextMenu } from "./ContextMenu";

export const TableExpense = ({
  setExpense,
  expenses,
  setExpenses,
  setIsEditing,
}) => {
  // const [category,setCategory]= useState('');

  // const filterData = expenses.filter((expense)=>expense.category.toLowerCase().includes(category))

  const [result, setQuery] = useFilterHook(expenses, (data) => data.category);

  const [contextPosition, setContextPosition] = useState({});
  const [rowId, setRowId] = useState("");

  const [sortCallback, setSortCallback] = useState(()=>()=>{})

  return (
    <>
      <ContextMenu
        menuPosition={contextPosition}
        setMenuPosition={setContextPosition}
        setExpenses={setExpenses}
        rowId={rowId}
        expenses={expenses}
        setExpense={setExpense}
        setIsEditing={setIsEditing}
      />
      <table
        className="expense-table"
        onClick={() => {
          if (contextPosition.left) {
            setContextPosition({});
          }
        }}
      >
        <thead>
          <tr>
            <th>Title</th>
            <th>
              <select
                onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
              >
                <option value="">All</option>
                <option value="grocery">Grocery</option>
                <option value="clothes">Clothes</option>
                <option value="bills">Bills</option>
                <option value="education">Education</option>
                <option value="medicine">Medicine</option>
              </select>
            </th>
            <th className="amount-column">
              <div>
                <span>Amount</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow up-arrow"
                  onClick={() => {
                    // e.stopPropagation();
                    // setExpenses((prevState) => [
                    //   ...prevState.sort((a, b) => a.amount - b.amount),
                    // ]);

                    setSortCallback(()=>(a,b)=>a.amount-b.amount)
                    
                  }}
                >
                  <title>Ascending</title>
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
                  onClick={() => {
                    // e.stopPropagation();
                   setSortCallback(()=>(a,b)=>b.amount-a.amount)
                  }}
                >
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {result.sort(sortCallback).map((el) => (
            <tr
              key={el.id}
              onContextMenu={(e) => {
                e.preventDefault();
                setContextPosition({ left: e.clientX + 4, top: e.clientY + 4 });
                setRowId(el.id);
              }}
            >
              <td>{el.title}</td>
              <td>{el.category}</td>
              <td>Rs.{el.amount}</td>
            </tr>
          ))}
          <tr>
            <th>Total</th>
            <th onClick={()=>setSortCallback(()=>{})}>clear sort</th>
            <th>
              Rs.{result.reduce((acc, item) => acc + Number(item.amount), 0)}
            </th>
          </tr>
        </tbody>
      </table>
    </>
  );
};
