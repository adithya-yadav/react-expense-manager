// import ExpenseItem from "./Expenseitem";
// import Card from "../UI/Card";
// import "./Expense.css";
// import ExpenseFilter from "./ExpenseFilter";
// import { useState } from "react";

// const Expense=(props) =>{
//   const expensesList = [];
//   for (let i = 0; i < props.items.length; i++) {
//     expensesList.push(
//       <ExpenseItem
//         title={props.items[i].title}
//         amount={props.items[i].amount}
//         date={props.items[i].date}
//         location={props.items[i].location}
//         id={props.items[i].id}
//       />
//     );
//   }
//   const [filteredYear,setFilteredYear] = useState("2022")
//   const filterChangeHandler=(selectedYear)=>{
//       setFilteredYear(selectedYear)
//   }
//   return (
//     <div className="expenses">
//       <ExpenseFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler} />
//       <Card className="expenses">{expensesList} </Card>;
//     </div>
//   );
// }


// export default Expense;

import ExpenseItem from "./Expenseitem";
import Card from "../UI/Card";
import "./Expense.css";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //props.items.map(e=>console.log(e))
  

  return (
   // props.items.forEach(e=>console.log(e,"return inside expense")),
      <Card className="expense">
        <div className="expenses">
          <ExpenseFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
          
          {props.items.map((expense) =>{  
              return  <ExpenseItem
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
                  location={expense.location}
                  key={expense.id}
                  />
           } )}
        </div>
      </Card>

  );
};

export default Expense;
