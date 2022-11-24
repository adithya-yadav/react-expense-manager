import React ,{useState} from 'react'

const ExpenseDetails=(props)=>{
  const [title , setTitle] = useState(props.title)
  const [amount , setAmount] = useState(props.amount)
  const Edit=()=>{
    setTitle("Updated !!")
    setAmount("$ 100")
    console.log(title)
    console.log(amount)
  }
  return (
    <div className="expense-item__description">
      <h2>{title}</h2>
      <div className="expense-item__location">Made in {props.location}</div>
      <div className="expense-item__price">$ {amount}</div>
      <button onClick={Edit}>Edit Expense</button>
    </div>
  );
}



export default ExpenseDetails;
