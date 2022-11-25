import ExpenseItem from "./Expenseitem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  let ListContent = <p className="expenses-list__fallback">No expense in this year</p>;

  if (props.filteredItems.length > 1) {
    ListContent = props.filteredItems.map((expense) => {
      return (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
          key={expense.id}
        />
      );
    });
  } else if (props.filteredItems.length === 1) {
    ListContent = props.filteredItems.map((expense) => {
      return (
        <div key={expense.id}>
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
            key={expense.id}
          />
          <p className="expenses-list__fallback">
            Only single Expense here. Please add more...
          </p>
        </div>
      );
    });
  }
  return <ul className="expenses-list">
    {ListContent}
  </ul>
};

export default ExpenseList;
