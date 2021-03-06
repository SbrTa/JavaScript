import React from 'react';
import classes from './Order.css';

const order = (props) => {
    const ingredients = [];
    for (let name in props.ingredients){
        ingredients.push({name:name,amount:props.ingredients[name]});
    }
    const ingredientOutput = ingredients.map(ig => {
        return <span
            style={{textTransform: 'capital',
                display: 'inline-block',
                margin: '0px',
                border: '1px solid #ccc',
                padding: '5px'}}
            key={ig.name}>
            {ig.name}({ig.amount})</span>
    });

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>Tk. {props.price}</strong></p>
        </div>
    );
};
export default order;
