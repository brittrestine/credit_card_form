import './App.css';

import React, {useState} from 'react';

import Cards from 'react-credit-cards';

function App() {
const [cvc, setCvc] = useState('');
const [expiry, setExpiry] = useState('');
const [focus, setFocus] = useState('');
const [name, setName] = useState('');
const [number, setNumber] = useState('');
console.log("name", name)
console.log("number", number)
console.log("focus", focus)

  return (
    <div className="App">
      <header className="App-header"/>

      <div className="PaymentForm">
        <Cards
          className="Card"
          cvc={cvc}
          expiry={expiry}
          focused={focus}
          name={name}
          number={number}
        />

        <form className="Form">
        	<input
            className="Input"
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={(e) => setNumber(e.target.value)}
            onFocus={(e) => setFocus({ focus: e.target.name })}
          />

        	<input
            className="Input"
            type="text"
            name="name"
            placeholder="Name"
            onChange={(e) => setName( e.target.value)}
          />

        </form>
      </div>
    </div>
  )
}

export default App;
