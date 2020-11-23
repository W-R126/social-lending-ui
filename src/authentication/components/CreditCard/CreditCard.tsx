import * as React from 'react';
import {useState} from 'react';
import {CreditCardState} from './CreditCard.types';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

export const CreditCard: React.FC = () => {
    const [state, setState] = useState<CreditCardState>({cvc: '', expiry: '', focus: '', name: '', number: ''});

    const handleInputFocus = (e: any) => {
        setState({...state, focus: e.target.name});
    };

    const handleInputChange = (e: any) => {
        const {name, value} = e.target;

        setState({...state, [name]: value});
    };

    return (
        <>
            <Cards cvc={state.cvc} expiry={state.expiry} focused={state.focus} name={state.name} number={state.number} />
            <form>
                <input type="tel" name="number" placeholder="Card Number" onChange={handleInputChange} onFocus={handleInputFocus} />
            </form>
        </>
    );
};
