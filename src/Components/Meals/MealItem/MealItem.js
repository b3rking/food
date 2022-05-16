import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;

    return (
        <li key={props.id}>
            <div className="">
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div className="">
                <MealItemForm />
            </div>
        </li>
    );
};

export default MealItem;
