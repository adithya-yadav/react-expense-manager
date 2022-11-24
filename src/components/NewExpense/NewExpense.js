import React from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
  const SaveExpenseDataHandler = (enteredExpenseData)=>{
      const enteredData={
        id:Math.random().toString(),
        ...enteredExpenseData
      }
      //console.log("newExpensedata",enteredData)
      props.onAddExpenseData(enteredData)
  }
  return (
    <div className="new-expense">
        <NewExpenseForm onSaveExpenseData={SaveExpenseDataHandler}/>
    </div>
  )
};

export default NewExpense;
