import logo from "./logo.svg";
import "./App.css";
import { ReactDOM, useState } from "react";
import Expense from "./components/expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyExp = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: "19.5",
    date: new Date(2021, 11, 21),
    location: "china",
  },
  {
    id: "e2",
    title: "Tiffin Box",
    amount: "40",
    date: new Date(2021, 11, 21),
    location: "china",
  },
  {
    id: "e3",
    title: "Brush",
    amount: "25.6",
    date: new Date(2020, 11, 21),
    location: "japan",
  },
  {
    id: "e4",
    title: "Ball",
    amount: "30.00",
    date: new Date(2020, 11, 21),
    location: "delhi",
  },
  {
    id: "e5",
    title: "Mobile",
    amount: "300.00",
    date: new Date(2020, 11, 21),
    location: "Hyderabad",
  },
  {
    id: "e6",
    title: "phone",
    amount: "300.00",
    date: new Date(2019, 11, 21),
    location: "dubai",
  },
];

const App=()=>{

  const [expenses,SetExpense] = useState(dummyExp)

  const onAddExpenseDataHandler = (onNewlyAddedExpense)=>{
    const updatedExpenses = [onNewlyAddedExpense, ...expenses];
    console.log("EXPENSES!!!!      ", updatedExpenses);
    SetExpense(updatedExpenses);    
  };
 
  return (
    <div>
      <NewExpense onAddExpenseData={onAddExpenseDataHandler}/>
      <Expense items={expenses} />
    </div>
  )
}

export default App;
