import React, { useState } from "react";
import './ExpenseForm.css';

function ExpenseForm(props){

    const [enteredTitle, setEnterTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredName, setEnteredName] = useState('');

    function titleChangeHandler(event){
        setEnterTitle(event.target.value);
    }

    function amountChangeHandler(event){
        setEnteredAmount(event.target.value);
    }

    function dateChangeHandler(event){
        setEnteredDate(event.target.value);
    }

    function nameChangeHandler(event){
        setEnteredName(event.target.value);

    }

    function submitHandler(event){
        event.preventDefault();

        const expenseData ={

            name : enteredName,
            title : enteredTitle,
            amount : +enteredAmount,
            date : new Date (enteredDate)
        };

        console.log(expenseData);
        

        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnterTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredName('');
    }
    
  
    return( 
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
        <div className="new-expense__control">
                <label>Your Name</label>
                <input type='text' value={enteredName} onChange={nameChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min="2019-01-01" max='2022-12-31' value={enteredDate} onChange={dateChangeHandler}></input>
            </div>
        </div>
        <div className=" new-expense__actions">
            <button type="submit">Add Expense</button>
            <button type="button" onClick={props.onCancel}>Cancel</button>

        </div>

    </form>
    )
}

export default ExpenseForm;