import './ExpenseItem.css'
import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {

   const [title, SetTitle] = useState(props.name);


    function clickHandler(){
        SetTitle('Updated');
    }

    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>change Title</button>

        </div>
    );
}
export default ExpenseItem;