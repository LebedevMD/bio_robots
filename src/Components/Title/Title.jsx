import React from 'react';
import robots from "./Robots.png"
import classes from "./Title.module.css";

const Title = (props) => {
    return (
        <div className={classes.Block}>
            <div className={"Counter"}>
                <p>{props.number}</p>
            </div>
            <div>
                <h1 className={classes.main_text}>Фабрика по производству биороботов</h1>
                <h1 className={classes.sub_text}>класса «монитор-кресло»</h1>
            </div>
            <div className={classes.img_robots}>
                <img src={robots} alt="Robots" />
            </div>
        </div>
    );
};

export default Title;