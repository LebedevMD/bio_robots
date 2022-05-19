import React from 'react';
import classes from "./Wallet.module.css";
import coin from "./Coin.svg"

const Wallet = ({number, coins}) => {
    return (
        <div className={classes.Block}>
            <div className={"Counter"}>
                <p>{number}</p>
            </div>
            <div>
                <h1>Кошелёк криптовалют</h1>
                <div className={classes.Coins}>
                    {getCoinsImage(coins)}
                </div>
            </div>
        </div>
    );
};

const getCoinsImage = coins => {
    let content = [];
    for (let i = 0; i < coins; i++) {
        const style =  {
            position: "relative",
            right: i * 7 + "px",
            zIndex: coins - i
        };
        content.push(
            <img
                key={i}
                src={coin}
                style={style}
            />
        );
    }
    return content;
}

export default Wallet;