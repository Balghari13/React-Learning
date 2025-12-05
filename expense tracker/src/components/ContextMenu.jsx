import React from "react";

export const ContextMenu = ({ menuPosition, setMenuPosition,setExpenses,rowId,setExpense,expenses, setIsEditing}) => {
  if (!menuPosition.left) return;
 
  return (
    <div className="context-menu" style={menuPosition}>
      <div onClick={()=>{
        setIsEditing(rowId)
        const{title,category,amount} = expenses.find((expense)=>expense.id===rowId)
       setExpense({title,category,amount})
        setMenuPosition({})
      }}>Edit</div>
      <div
        onClick={() => {
        
        setExpenses((pre)=> pre.filter(expense=> expense.id !== rowId))
          setMenuPosition({});

        }}
      >
        Delete
      </div>
    </div>
  );
};
