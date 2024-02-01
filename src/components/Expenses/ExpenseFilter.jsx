import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const filterChangeHandler = (e) => {
    props.onFilteredChangeYear(e.target.value);
  };
  return (
    <div className='expense-form-control'>
      <label htmlFor='filterYear'>Filter by Year</label>
      <select
        id='filterYear'
        value={props.selected}
        onChange={filterChangeHandler}
      >
        <option value='2019'>2019</option>
        <option value='2020'>2020</option>
        <option value='2021'>2021</option>
        <option value='2022'>2022</option>
        <option value='2023'>2023</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;