import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  if (props.onFilteredByYear.length === 0) {
    return <h3 style={{ color: "#eee" }}>No Expense Found</h3>;
  }
  return (
    <ul>
      {props.onFilteredByYear.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpenseList;