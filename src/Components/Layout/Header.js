import React from "react";
import meals from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <button>cart</button>
            </header>
            <div className={classes["main-image"]}>
                <img src={meals} alt="a table full of delicious food" />
            </div>
        </React.Fragment>
    );
};

export default Header;
