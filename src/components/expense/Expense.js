import ExpenseItem from "./Expenseitem";
import Card from "../UI/Card";
import "./Expense.css";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("allExp");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  let filteredExpense;
  if (filteredYear == "allExp") {
    filteredExpense = props.items;
  } else {
    filteredExpense = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === filteredYear;
    });
  }

  let ListContent = <p className="emptyList">No expense in this year</p>;

  if (filteredExpense.length > 1) {
    ListContent = filteredExpense.map((expense) => {
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
  } else if (filteredExpense.length === 1) {
    ListContent = filteredExpense.map((expense) => {
      return (
        <div key={expense.id}>
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
            key={expense.id}
          />
          <p className="emptyList">Only single Expense here. Please add more...</p>
        </div>
      );
    });
  }

  return (
    <Card className="expense">
      <div className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {ListContent}
      </div>
    </Card>
  );
};

export default Expense;
