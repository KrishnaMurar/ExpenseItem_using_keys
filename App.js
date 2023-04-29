import React, { useState } from 'react';

import NewExpense from './Components/ExpenseForm/NewExpense' 
 import Expenses from './Components/Expenses/Expenses'

 const Dummy_Expense =[
  {
    id : 'e1',
    title : "Car Wash",
    Date : new Date(2023, 5, 28),
    Amount :  520,
    location : "Delhi"
  },
  {
    id : 'e2',
    title : "Shopping",
    Date : new Date(2023, 1, 28),
    Amount :  400,
    location : "Noida"
  },
  {
    id : 'e3',
    title : "Car Travelling",
    Date : new Date(2023, 2, 18),
    Amount :  520,
    location : "Gurgoan"
  }
];

const App = () => {
      const [expense, setExpense] = useState(Dummy_Expense);

  const addExpenseHandler = (expenses) =>{
      setExpense((prevExpense) =>{
        return [expenses, ...prevExpense]
      })
  }
  
  return (
    <div>
      
      <NewExpense onAddExpense ={addExpenseHandler} />
      <Expenses items={expense} />
    </div>
   
  );
}
 export default App;
