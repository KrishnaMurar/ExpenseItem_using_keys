import React , { useState } from 'react';
import './ExpenseForm.css'

function ExpenseForm(props){
  const [enteredTitle, setEnteredTitle] = useState('');
 const [enteredAmount, setEnteredAmount] = useState('');
 const [enteredDate, setEnteredDate] = useState('');

// const [userInput, setUserInput] = useState({
//     enteredTitle:'',
//     enteredAmount:'',
//     enteredDate:''
// })
    const titleClickHandler = (event) =>{
         setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });
        // setUserInput((prevState) =>{
        //     return{...prevState, enteredTitle:event.target.value};
        // }

        
    }

    const AmountClickHandler = (event) =>{
         setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });
    }

    const dateClickHandler = (event) =>{
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });
    }
const submitHandler = (event) => {
  event.preventDefault();

  const expenseData = {
    title: enteredTitle,
    Amount: enteredAmount,
    Date: new Date(enteredDate)
  }
  props.onSaveExpenseData(expenseData);
  setEnteredTitle('');
  setEnteredAmount('');
  setEnteredDate('');
}
    

    return(

    <form onSubmit={submitHandler}>
        <div className = "new-expense__controls">
        <div className = "new-expense__control">
            <label>title</label>
            <input type ='text' value = {enteredTitle} onChange = {titleClickHandler} />
        </div>
        <div className = "new-expense__control">
            <label>Amount</label>
            <input type = 'number' min = "0.01" steps = "0.01" value = {enteredAmount} onChange = {AmountClickHandler} />
        </div>
        <div className = "new-expense__control">
            <label>Date</label>
            <input type = 'date' min ="2018-01-01" max = "31-12-2030" value = {enteredDate} onChange = {dateClickHandler}/>
            </div>
     </div>
     <div className = "new-expense__actions">
        <button type='submit' >Add Expense</button>
        </div>
    </form>
 
    )
}

export default ExpenseForm