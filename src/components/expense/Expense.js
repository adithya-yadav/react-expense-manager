
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

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

  

  return (
    <Card className="expense">
      <div className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses = {filteredExpense}/>
        <ExpenseList filteredItems = {filteredExpense}/>
      </div>
    </Card>
  );
};

export default Expense;
