import ExpenseItem from "./Expenseitem";
import Card from "../card/Card";
import "./Expense.css";

const Expense=(props) =>{
  const expensesList = [];
  for (let i = 0; i < props.item.length; i++) {
    expensesList.push(
      <ExpenseItem
        title={props.item[i].title}
        amount={props.item[i].amount}
        date={props.item[i].date}
        location={props.item[i].location}
        id={props.item[i].id}
      />
    );
  }
  return (
    <div>
      <Card className="expenses">{expensesList}</Card>;
    </div>
  );
}


export default Expense;
