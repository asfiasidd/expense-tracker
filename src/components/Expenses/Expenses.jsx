import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredByYearHandler = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // let filteredMesg = <h3>No Expense Found</h3>;
  // if (filteredByYear.length > 0) {
  //   filteredMesg = filteredByYear.map((expense) => {
  //     return (
  //       <ExpenseItem
  //         key={expense.id}
  //         title={expense.title}
  //         amount={expense.amount}
  //         date={expense.date}
  //       />
  //     );
  //   });
  // }

  return (
    <Card className='expenses'>
      <ExpenseFilter
        selected={filteredYear}
        onFilteredChangeYear={filteredChangeHandler}
      />

      <ExpenseChart expenses={filteredByYearHandler} />

      {/* Fifth Step */}
      <ExpenseList onFilteredByYear={filteredByYearHandler} />

      {/* Fourt Step */}
      {/* {filteredMesg} */}

      {/* third Step */}
      {/* {filteredByYear.length === 0 && <h3>No Expense Found</h3>}
      {filteredByYear.length > 0 &&
        filteredByYear.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })} */}

      {/* Second Step */}
      {/* {filteredByYear.length === 0 ? (
        <h3>No Expense Found</h3>
      ) : (
        filteredByYear.map((expense) => {
          return (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })
      )} */}

      {/* First Step */}
      {/* {filteredByYear.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })} */}
    </Card>
  );
};

export default Expenses;