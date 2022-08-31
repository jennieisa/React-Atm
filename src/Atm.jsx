const Atm = (props) => {
    const handleDeposit = () => {
        let amount = document.querySelector("#depositInput").value;

        props.increaseBalance(amount);
    }

    return (
        <section>
            <h2>{`Current balance: ${props.balance} SEK`}</h2>
            <h2>{`Amount to withdraw: ${props.withdrawAmount} ${props.currency}`}</h2>
            <button onClick={() => props.increaseWithdrawAmount(100)}>+100</button>
            <button onClick={() => props.increaseWithdrawAmount(500)}>+500</button>
            <button onClick={() => props.increaseWithdrawAmount(1000)}>+1000</button>
            <button onClick={() => props.changeCurrency("SEK")}>SEK</button>
            <button onClick={() => props.changeCurrency("EURO")}>EURO</button>
            <button onClick={() => props.changeCurrency("USD")}>USD</button>
            <br/><br/>
            <button onClick={() => props.decreaseBalance(props.withdrawAmount, props.currency)}>Withdraw money!</button>
            <h3>Deposit money: </h3>
            <input id="depositInput" type="text" />
            <br/><br/>
            <button onClick={() => handleDeposit()}>Deposit</button>
        </section>
    )
}

export default Atm;
