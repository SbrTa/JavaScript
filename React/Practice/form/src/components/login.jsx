import React from 'react';
import Form from "./common/form";
import Joi from "joi-browser";


class Login extends Form{
    state = {
        data: {
            username: "",
            password: ""
        },
        errors: {}
    };

    schema = {
        username: Joi.string().required().error( () => {
            return {message: "Username is required."};
        }),
        password: Joi.string().required().error( () => {
            return {message: "Password is required."};
        })
    };

    doSubmit = () => {
        console.log(this.state.data);
    };

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username", "text")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderButton("Submit")}
                </form>
            </div>
        );
    }
}


export default Login;
