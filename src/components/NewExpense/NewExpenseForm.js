import React, { useEffect, useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props)=>{
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredNumber , setEnteredNumber] = useState('')
    const [enteredDate , setEnteredDate] = useState('')
    const [enteredLocation , setEnteredLocation] = useState('')

    const TitleChange = (e)=>{
        setEnteredTitle(e.target.value)
    }
    const NumberChange = (e)=>{
        setEnteredNumber(e.target.value)
    }
    const DateChange = (e)=>{
        setEnteredDate(e.target.value)
    }
    const LocationChange = (e)=>{
        setEnteredLocation(e.target.value)
    }
    const SubmitExp = (e)=>{
        e.preventDefault()
        if(enteredTitle.length > 0 &&
            enteredNumber.length > 0 &&
            enteredDate.length > 0 &&
            enteredLocation.length > 0 ){
            const expenseData = {
                title:enteredTitle,
                amount:enteredNumber,
                date:enteredDate,
                location:enteredLocation
            }
            props.onSaveExpenseData(expenseData)
        }else{
            alert("please fill details")
        }
        setEnteredTitle('')
        setEnteredNumber('')
        setEnteredLocation('')
        setEnteredDate('')
        
    }
    return <form onSubmit={SubmitExp}>
        <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input onChange={TitleChange} value={enteredTitle} placeholder="Title" type="text" />
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input onChange={NumberChange} placeholder="Amount" value={enteredNumber} type="number" />
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input onChange={DateChange} value={enteredDate} type="date" />
        </div>
        <div className="new-expense__control">
            <label>Location</label>
            <input onChange={LocationChange} placeholder="Location" value={enteredLocation} type="text" />
        </div>
        </div>
        <div className="new-expense-actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default NewExpenseForm
