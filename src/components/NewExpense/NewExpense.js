import React, { useState } from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
  const [displayForm, setdisplayForm] = useState(false)
  const SaveExpenseDataHandler = (enteredExpenseData)=>{
      const enteredData={
        id:Math.random().toString(),
        ...enteredExpenseData
      }
      props.onAddExpenseData(enteredData)
      setdisplayForm(false)
  }
  const displayFormHandler = ()=>{
    setdisplayForm(true)
  }
  const stopEditing = ()=>{
    setdisplayForm(false)
  }
  return (
    <div className="new-expense">
        {!displayForm && <button onClick={displayFormHandler}>Add New Expense</button>}
        {displayForm && <NewExpenseForm onCancel={stopEditing} onSaveExpenseData={SaveExpenseDataHandler}/>}
    </div>
  )
};

export default NewExpense;
