import React, { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = ()=>{
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredNumber , setEnteredNumber] = useState('')
    const [enteredDate , setEnteredDate] = useState('')

    const TitleChange = (e)=>{
        setEnteredTitle(e.target.value)
    }
    const NumberChange = (e)=>{
        setEnteredNumber(e.target.value)
    }
    const DateChange = (e)=>{
        setEnteredDate(e.target.value)
    }
    const AddExp = (e)=>{
        e.preventDefault()
        const expenseData = {
            title:enteredTitle,
            amount:enteredNumber,
            date:enteredDate
        }
        console.log(expenseData);
    }
    return <form onSubmit={AddExp}>
        <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input onChange={TitleChange} type="text" />
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input onChange={NumberChange} type="number" />
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input onChange={DateChange} type="date" />
        </div>
        </div>
        <div className="new-expense-actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default NewExpenseForm
