import React from 'react';
import logo from "./Logo.svg";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <div className={classes.Header}>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div>
                <button type="button"
                        disabled
                        name="button"
                        className={classes.button_create}
                >
                    Произвести биоробота
                </button>
            </div>
        </div>
    );
};

export default Header;