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
        <span style={{color: 'white'}}> Currency: </span>
            <select style={{backgroundColor: "lightgreen", border:"none"}} onChange={handleCurrencyChange}>
                <option value="$">$ Dollar</option>
                <option value="£" selected> £ Pound</option>
                <option value="€" > € Euro</option>
                <option value="₹"> ₹ Ruppee</option>
            </select>
        </div>
            );
};
export default Currency;