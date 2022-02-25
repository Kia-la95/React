import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import './NewExpenses.css'
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function NewExpenseItem(props) {

  const [filteredYear, setFilteredYear] = useState('2020');

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })



  return <div className="expenses">
    <ExpensesFilter selected={filteredYear} onChangefilter={filterChangeHandler} />
    <ExpensesChart expenses={filteredExpenses}/>
    <ExpensesList items={filteredExpenses}/>

  </div>

}

export default NewExpenseItem;