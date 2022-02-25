import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';


function ExpensesList(props){


    if(props.items.length === 0){
       return <h2 className='expenses-list__fallback'> Found no Expenses</h2> ;
    }

return <ul className='expense-list'>
   {props.items.map((expenses) => 
      <ExpenseItem 
        key={expenses.id} 
        title={expenses.title} 
        name ={expenses.name}
        amount={expenses.amount} 
        date={expenses.date} 
      />)}

</ul>



}

export default ExpensesList;