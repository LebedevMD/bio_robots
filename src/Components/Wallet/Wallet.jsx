import React from 'react';
import classes from "./Wallet.module.css";
import coin from "./Coin.svg"

const Wallet = ({number, coins}) => {
    return (
        <div className={classes.Block}>
            <div className={"Counter"}>
                <p>{number}</p>
            </div>
            <div className={classes.Container_Coins}>
                <h1>Кошелёк криптовалют</h1>
                <div className={classes.Coins}>
                    {getCoinsImage(coins)}
                </div>
                <p>{coins} biorobo монет</p>
                <div className={classes.Accumulate}>
                    <a className={classes.Farm}>Нафармить</a>
                    <input type="checkbox" className={classes.Farm_Checkbox}/>
                    <label>Фармить по 5 монет</label>
                </div>
            </div>
        </div>
    );
};

const getCoinsImage = coins => {
    let content = [];
    for (let i = 0; i < coins; i++) {
        const style =  {
            position: "absolute",
            left: i * 8,
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