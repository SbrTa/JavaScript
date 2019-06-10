import React from 'react';
import Input from "./input";
import Joi from "joi-browser";
import Select from "./select";

class Form extends React.Component{
    state = {
        data: {},
        errors: {}
    };

    validate = () => {
        const abortEarlyFalse = {abortEarly: false};
        const { error } = Joi.validate(this.state.data, this.schema, abortEarlyFalse);
        if (!error) return null;

        const errors = {};
        for (let item of error.details)
            errors[item.path[0]] = item.message;
        return errors;
    };

    handleChange = ({currentTarget: input}) => {
        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({data});
        console.log(this.state.data);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate();

        this.setState({errors: errors || {}});
        if (errors) return;
        this.doSubmit();
    };

    renderInput(name, label, type) {
        const {data,errors} = this.state;
        return (
            <Input
                type={type}
                name={name}
                label={label}
                value={data[name]}
                error={errors[name]}
                onChange={this.handleChange}/>
        );
    };

    renderSelect(name, label, options) {
        const {data,errors} = this.state;
        return (
            <Select name={name}
                    label={label}
                    options={options}
                    value={data[name]}
                    error={errors[name]}
                    onChange={this.handleChange}/>
        );
    };

    renderButton(label) {
        return (
            <button>{label}</button>
        );
    }
}

export default Form;
