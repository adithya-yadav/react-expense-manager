import React from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = ()=>{
    const TitleChange = (e)=>{
        console.log(e.target.value)
    }
    const AddExp = (e)=>{
        e.preventDefault()
        console.log("Add expense");
    }
    return <form>
        <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input onChange={TitleChange} type="text" />
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" />
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" />
        </div>
        </div>
        <div className="new-expense-actions">
            <button onClick={AddExp} type="submit">Add Expense</button>
        </div>
    </form>
}

export default NewExpenseForm
