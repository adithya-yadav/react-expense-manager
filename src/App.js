import logo from "./logo.svg";
import "./App.css";
import Expense from "./components/expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const App=()=>{
  const expense = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: "$ 19.5",
      date: new Date(2022, 11, 21),
      location: "china",
    },
    {
      id: "e2",
      title: "Tiffin Box",
      amount: "$ 40",
      date: new Date(2022, 11, 21),
      location: "china",
    },
    {
      id: "e3",
      title: "Brush",
      amount: "$ 25.6",
      date: new Date(2022, 11, 21),
      location: "japan",
    },
    {
      id: "e4",
      title: "Ball",
      amount: "$ 30.00",
      date: new Date(2022, 11, 21),
      location: "delhi",
    },
  ];
  return (
    <div>
      <NewExpense/>
      <Expense item={expense} />
    </div>
  )
}

export default App;
