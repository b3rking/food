import MealsSummary from "./MealsSummary";
import AvalableMeals from "./AvailableMeals";
import React from "react";

const Meals = () => {
    return (
        <React.Fragment>
            <MealsSummary />
            <AvalableMeals />
        </React.Fragment>
    );
};

export default Meals;
