import React, { useState } from "react";
// import Expenses from "./Componenets/Expenses/Expenses";
// import NewExpense from "./Componenets/NewExpense/NewExpense";
import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";

import "./App.css";

const dummyExpenses = [
  { id: 0, title: "A Book", amount: 29.8, date: new Date(2019, 2, 23) },
  { id: 1, title: "Buy Apple", amount: 2.8, date: new Date(2020, 3, 13) },
  { id: 2, title: "T-Shirt", amount: 26.8, date: new Date(2021, 12, 3) },
];
function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const getExpenseDataHandler = (data) => {
    // setExpenses([data, ...expenses])
    setExpenses((prevState) => {
      return [data, ...prevState];
    });
  };

  return (
    <div className='App'>
      <h1>Expense Tracker</h1>
      <NewExpense onGetExpenseData={getExpenseDataHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;