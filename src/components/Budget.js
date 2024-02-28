import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';



const Budget = () => {
    const { dispatch, budget, expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    console.log(totalExpenses);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        
        if(newBudget <= totalExpenses){
            alert("You can't reduce the budget lower than spending");
        }
        else
        {dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        });}
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £{newBudget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;