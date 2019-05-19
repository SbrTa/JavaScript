import React from 'react';
import axios from 'axios';
import FormValidator from "../validator/FormValidator";

class Password extends React.Component{
    constructor(props){
        super(props);

        this.validator = new FormValidator([
            {
                field: 'oldPassword',
                method: 'isEmpty',
                validWhen: false,
                message: 'Old Password is required'
            },
            {
                field: 'newPassword',
                method: 'isEmpty',
                validWhen: false,
                message: 'New Password is required'
            },
            {
                field: 'newPassword',
                method: 'matches',
                args: [/(?=.*[@])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z@]{8,}$/],
                validWhen: true,
                message: 'Password must contain at least one of a-z, A-Z, 0-9 and @ with minimum length 8 digits'
            },
            {
                field: 'confirmNewPassword',
                method: 'isEmpty',
                validWhen: false,
                message: 'Confirm New Password is required'
            },
            {
                field: 'confirmNewPassword',
                method: this.isPasswordMatched,
                validWhen: true,
                message: 'New password does not match'
            }
        ]);

        this.state = {
            formFields : {
                tokenResponseType: '2',
                oldPassword: '',
                newPassword: '',
                confirmNewPassword: '',
                csrfParamName: '',
                csrfToken: ''
            },
            response : {
                code: '',
                message: ''
            },
            validation: this.validator.setValid(),
        };
        this.submitted = false;
    };

    isPasswordMatched = (confirm) => (this.state.formFields.newPassword===confirm);

    inputChangeHandler(e) {
        let formFields = {...this.state.formFields};
        formFields[e.target.name] = e.target.value;
        this.setState({
            formFields
        });
    };


    submitHandler = (e) => {
        e.preventDefault();
        const validation = this.validator.validate(this.state.formFields);
        this.setState({ validation });
        let formData = {...this.state.formFields}
        console.log(formData);
        if (validation.isValid){
            axios.post('/change-password',formData)
                .then(response => {
                    let data = response.data;
                    console.log(data.responseCode+" || "+data.responseMessages[0]);
                    if (data.responseCode==100){
                        axios.post('/logout',null);
                        this.props.history.push("/login");
                    }
                    else {
                        let response = {
                            code: data.responseCode,
                            message: data.responseMessages
                        };
                        this.setState({
                            response
                        })
                    }
                })
                .catch(error => {
                    alert("Error");
                    console.log("error>> "+error);
                });
        };
    };

    render () {
        const warning = {
            color: 'red',
            fontWeight: 'bold'
        };
        let form = (
            <form>
                <div className='row'>
                    <label className='col-md-2'>Old Password : </label>
                    <input type="text" name="oldPassword" placeholder="oldPassword"
                       onChange={(e) => this.inputChangeHandler.call(this, e)}
                       value={this.state.formFields.oldPassword}/>
                </div>
                <span style={warning}>{this.state.validation.oldPassword.message}</span>

                <div className='row'>
                    <label className='col-md-2'>New Password : </label>
                    <input type="text" name="newPassword" placeholder="newPassword"
                       onChange={(e) => this.inputChangeHandler.call(this, e)}
                       value={this.state.formFields.newPassword}/>
                </div>
                <span style={warning}>{this.state.validation.newPassword.message}</span>

                <div className='row'>
                    <label className='col-md-2'>Confirm NewPassword : </label>
                    <input type="text" name="confirmNewPassword" placeholder="confirmNewPassword"
                       onChange={(e) => this.inputChangeHandler.call(this, e)}
                       value={this.state.formFields.confirmNewPassword}/>
                </div>
                <span style={warning}>{this.state.validation.confirmNewPassword.message}</span>

                <div className='row'>
                    <span className='col-md-2'>OTP Channel: </span>
                    <span>
                        <input className="" type="radio" className="sms-otp radio" id="email-otp"
                               name="tokenResponseType" value='2' defaultChecked
                               onChange={(e) => this.inputChangeHandler.call(this, e)}/>
                        <label htmlFor="email-otp">Email</label>
                        <input className="" type="radio" className="sms-otp radio" id="sms-otp"
                               name="tokenResponseType" value='1'
                               onChange={(e) => this.inputChangeHandler.call(this, e)}/>
                        <label htmlFor="sms-otp">SMS</label>
                        <input className="" type="radio" className="sms-otp radio" id="both-otp"
                               name="tokenResponseType" value='3'
                               onChange={(e) => this.inputChangeHandler.call(this, e)}/>
                        <label htmlFor="both-otp">Both</label>
                     </span>
                </div>
                <div>
                    <input type="hidden" name={this.state.csrfParamName} value={this.state.csrfToken} />
                    <button className='btn btn-primary btn-large' onClick={this.submitHandler}>Submit</button>
                </div>
            </form>
        );

        const errorStyle = {
            color: 'red'
        };

        return (
            <div>
                <h2>Change Password</h2>
                <div>
                    <h4 style={errorStyle}>{this.state.response.message}</h4>
                </div>
                {form}
            </div>
        );
    }

}

export default Password;
