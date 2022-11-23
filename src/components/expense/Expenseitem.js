import "./Expenseitem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";



const ExpenseItem = (props) => {
 
  const DeleteExp = ()=> {
    console.log("delete!!!")
  };
 

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        location={props.location}
        amount={props.amount}
      />
      <button onClick={DeleteExp}>Delete Expense</button>

    </div>
  );
};

export default ExpenseItem;
