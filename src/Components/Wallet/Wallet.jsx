import React from 'react';
import classes from "./Wallet.module.css";
import coin from "./Coin.svg"
import {useState} from "react";

const Wallet = ({number, coins, setCoins}) => {

    const [isFarm5, setIsFarm5] = useState(false)

    const changeIsFarm5 = () => {
        setIsFarm5(!isFarm5);
    }

    const addSomeCoins = () => {
        if(isFarm5) setCoins(coins + 5);
        else        setCoins(coins + 1);
    }

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
                    <a
                        className={classes.Farm}
                        onClick={event => addSomeCoins()}
                    >
                        Нафармить
                    </a>
                    <input
                        type='checkbox'
                        className={classes.Farm_Checkbox}
                        id="isFarm5Coins"
                        value="Farm5"
                        checked={isFarm5}
                        onChange={event => changeIsFarm5()}
                    />
                    <label htmlFor="isFarm5Coins">Фармить по 5 монет</label>
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