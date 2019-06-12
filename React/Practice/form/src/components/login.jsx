import React from 'react';
import Form from "./common/form";
import Joi from "joi-browser";


class Login extends Form{
    state = {
        data: {
            username: "",
            password: "",
            userType: "",
            otpChannel: "2"
        },
        errors: {},
        optionList: [
            {_id:11,name:"VIP"},
            {_id:22,name:"Premier"},
            {_id:33,name:"Guest"}
        ]
    };

    schema = {
        username: Joi.string().required().min(5).max(10).label("Username"),
        password: Joi.string().required().error( () => {
            return {message: "Password is required."};
        }),
        userType: Joi.string().required().error( ()=>{
            return {message: "Please select User Type."};
        }),
        otpChannel: Joi.string().required().error( ()=>{
            return {message: "Please select an OTP channel."};
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
                    {this.renderSelect("userType", "User Type", this.state.optionList)}
                    {this.renderOtpChannel("otpChannel")}
                    {this.renderButton("Submit")}
                </form>
            </div>
        );
    }
}


export default Login;
