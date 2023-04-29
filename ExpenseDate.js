import React from 'react';

import './ExpenseDate.css'

const ExpenseDate = (props) => {
    const month = props.Date.toLocaleString('en-US' , {month : 'long'});
    const day = props.Date.toLocaleString('en-US' , { day : '2-digit'});
    const Year = props.Date.getFullYear();

    return (
        <div className = "expense-date" >
   <div className = "expense-date__month">{month}</div>
   <div className= "expense-date__day">{day}</div>
   <div className = "expense-date__year">{Year}</div>
   </div>
    );
    
}

export default ExpenseDate;
