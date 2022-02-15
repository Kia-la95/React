import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import './NewExpenses.css'
import { useState } from "react";

function NewExpenseItem(props) {

  const [filteredYear, setFilteredYear] = useState('2020');

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  return <div className="expenses">
    <ExpensesFilter selected={filteredYear} onChnageilter={filterChangeHandler} />
    <ExpenseItem name={props.item[0].title} amount={props.item[0].amount} date={props.item[0].date} ></ExpenseItem>
    <ExpenseItem name={props.item[1].title} amount={props.item[1].amount} date={props.item[1].date} ></ExpenseItem>
    <ExpenseItem name={props.item[2].title} amount={props.item[2].amount} date={props.item[2].date} ></ExpenseItem>
    <ExpenseItem name={props.item[3].title} amount={props.item[3].amount} date={props.item[3].date} ></ExpenseItem>

  </div>

}

export default NewExpenseItem;