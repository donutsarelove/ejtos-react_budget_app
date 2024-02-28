import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {dispatch, currency} = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    }
    return (
        <div className=' alert currency' style={{backgroundColor: "lightgreen"}}>
        <label style={{marginLeft: '1rem' , backgroundColor:'lightgreen', color:'white'}}> Currency
            <select style={{backgroundColor: "lightgreen", color:'white', border:"none", marginLeft: '1rem', }} onChange={handleCurrencyChange}>
                <option style={{color:'black'}} value="$">$ Dollar</option>
                <option style={{color:'black'}} value="£" selected> £ Pound</option>
                <option style={{color:'black'}} value="€" > € Euro</option>
                <option style={{color:'black'}} value="₹"> ₹ Ruppee</option>
            </select>
        </label>
        </div>
            );
};
export default Currency;

