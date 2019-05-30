import React from 'react';
import classes from './Input.css';
import Select from 'react-select';

const input = props => {
    let inputElement = null;
    switch (props.elementType) {
        case ('input'):
            inputElement =
                <div>
                    <input
                        className={classes.InputElement}
                        {...props.elementConfig}
                        value={props.value}
                        onChange={props.change}/>
                    <label>{props.message}</label>
                </div>;
            break;
        case ('textarea'):
            inputElement =
                <div>
                    <textarea
                        className={classes.InputElement}
                        {...props.elementConfig}
                        value={props.value}
                        onChange={props.change}/>
                    <label>{props.message}</label>
                </div>;
            break;
        case ('select'):
            inputElement =
                <div>
                    <select
                        className={classes.InputElement}
                        value={props.value}
                        onChange={props.change}>
                        {props.elementConfig.options.map(option=>(
                            <option key={option.value} value={option.value}>
                                {option.displayValue}
                            </option>
                        ))}
                    </select>
                    <label>{props.message}</label>
                </div>;
            break;
        /*case ('select'):
            inputElement =
                <div>
                    <Select
                        //className={classes.InputElement}
                        value={props.value}
                        onChange={props.change}
                        options={props.elementConfig.options}>
                    </Select>
                    <label>{props.message}</label>
                </div>;
            break;*/
        case ('radio'):
            inputElement =
                <div className="row">
                    {props.elementConfig.options.map(option=>(
                        <label key={option.value}>
                            <input
                                onChange={props.change}
                                value={option}
                                type="radio" /> {option.displayValue}
                        </label>
                    ))}
                    <label>{props.message}</label>
                </div>;
            break;

        default:
            inputElement =
                <div>
                    <input
                        className={classes.InputElement}
                        {...props.elementConfig}
                        value={props.value}
                        onChange={props.change}/>
                    <label>{props.message}</label>
                </div>;
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default input;
