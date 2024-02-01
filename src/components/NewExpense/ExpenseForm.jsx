import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredDate: "",
  //     enteredAmount: "",
  //   });

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    // setUserInput({enteredTitle: e.target.value, ...userInput})
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: e.target.value };
    // });
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: e.target.value };
    // });
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: e.target.value };
    // });
  };

  const expenseSubmitHandler = (e) => {
    e.preventDefault();
    // const expenseData = {
    //   title: userInput.enteredTitle,
    //   amount: userInput.enteredAmount,
    //   date: userInput.enteredDate,
    // };

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);

    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");

    // setUserInput({
    //     enteredTitle: ''
    //     enteredAmount: ''
    //     enteredDate: ''
    // })
  };

  return (
    <form onSubmit={expenseSubmitHandler}>
      <div className='input-controls'>
        <div className='input-control'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            value={enteredTitle}
            required
            onChange={titleChangeHandler}
          />
        </div>
        <div className='input-control'>
          <label htmlFor='amount'>Amount</label>
          <input
            type='number'
            id='amount'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className='input-control'>
          <label htmlFor='date'>Date</label>
          <input
            type='date'
            id='date'
            min='2019-1-1'
            max='2023-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='add-expense-btn'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;