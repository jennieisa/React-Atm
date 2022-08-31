import './App.css';
import { useState } from 'react';
import Atm from './Atm';

function App() {
  const [showAtm, setShowAtm] = useState(false);
  const [balance, setBalance] = useState(1000);
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  //const [depositAmount, setDepositAmount] = useState(0);
  const [currency, setCurrency] = useState("SEK")

  const increaseWithdrawAmount = (increaseAmount) => {
    setWithdrawAmount(withdrawAmount + increaseAmount);
  }

  const changeCurrency = (value) => {
    setCurrency(value);
  }

  const decreaseBalance = (amount, currency) => {
    if(currency === "SEK") {
      if (amount > balance) {
        alert('You can not withdraw more money than your balance');
        setWithdrawAmount(0);
      } else {
        setBalance(balance - amount);
      }
    } else if (currency === "EURO" || currency === "USD") {
        if ((amount * 10) > balance) {
          alert('You can not withdraw more money than your balance');
          setWithdrawAmount(0);
        } else {
            setBalance(balance - (amount * 10))
        }
    } 
  }

  const increaseBalance = (amount) => {
    setBalance(balance + parseInt(amount));
    const depositInput = document.querySelector("#depositInput");
    depositInput.value = "";
  }


  return (
    <div className="App">
      <main className="">
        <h1>React ATM 2.0</h1>
        <button onClick={() => setShowAtm(!showAtm)}>Visa/Dölj ATM</button>
        {showAtm && 
          <>
            <Atm 
            balance={balance} 
            withdrawAmount={withdrawAmount} 
            currency={currency} 
            increaseWithdrawAmount={increaseWithdrawAmount} 
            changeCurrency={changeCurrency} 
            decreaseBalance={decreaseBalance}
            increaseBalance={increaseBalance}
            />
          </>
        }
      </main>
    </div>
  );
}

export default App;

