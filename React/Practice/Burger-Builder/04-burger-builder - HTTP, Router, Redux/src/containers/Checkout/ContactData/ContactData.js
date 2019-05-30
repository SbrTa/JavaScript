import React from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from "../../../axios-orders";
import Spinner from '../../../components/UI/Spinner/Spinner';
import {connect} from "react-redux";
import Input from '../../../components/UI/Input/Input';
import FormValidator from '../../../components/Validator/FormValidator';


class ContactData extends React.Component{
    constructor(props){
        super(props);

        this.validator = new FormValidator([
            {
                field: 'name',
                method: 'isEmpty',
                validWhen: false,
                message: 'Name is required'
            },
            /*{
                field: 'street',
                method: 'isEmpty',
                validWhen: false,
                message: 'Street is required'
            },
            {
                field: 'zip',
                method: 'isEmpty',
                validWhen: false,
                message: 'ZIP is required'
            },*/
            {
                field: 'country',
                method: 'isEmpty',
                validWhen: false,
                message: 'Country is required'
            },
            {
                field: 'email',
                method: 'isEmpty',
                validWhen: false,
                message: 'Email is required'
            },
            {
                field: 'deliveryMethod',
                method: 'isEmpty',
                validWhen: false,
                message: 'deliveryMethod is required'
            }
        ]);

        this.state = {
            orderForm: {
                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your Name'
                    },
                    value: ''
                },
                street: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Street'
                    },
                    value: ''
                },
                zip: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'ZIP Code'
                    },
                    value: ''
                },
                country: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Country'
                    },
                    value: ''
                },
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Email'
                    },
                    value: ''
                },
                deliveryMethod: {
                    elementType: 'select',
                    elementConfig: {
                        options: [
                            {value: 'fastest', displayValue: 'Fastest'},
                            {value: 'cheapest', displayValue: 'Cheapest'},
                        ]
                    },
                    value: 'fastest'
                },
                payment: {
                    elementType: 'radio',
                    elementConfig: {
                        options: [
                            {value: '1', displayValue: 'Cash'},
                            {value: '2', displayValue: 'Card'},
                        ]
                    },
                    value: '1'
                }
            },
            loading: false,
            validation: this.validator.setValid()
        };
    }
    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading:true});
        const formData = {};
        for (let key in this.state.orderForm){
            formData[key] = this.state.orderForm[key].value;
        }

        const validation = this.validator.validate(formData);
        this.setState({validation});

        const order = {
            ingredients: this.props.ings,
            price: this.props.price,
            orderData: formData
        };


        if (validation.isValid){
            axios.post('/orders.json',order)
                .then(response => {
                    this.setState({loading: false});
                    this.props.history.push('/');
                })
                .catch( error => {
                    this.setState({loading: false});
                    console.log(error);
                });
        }else{
            this.setState({loading: false});
        }
    };

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {...this.state.orderForm};
        const updatedFormElement = {...updatedOrderForm[inputIdentifier]};
        updatedFormElement.value = event.target.value;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        this.setState({orderForm:updatedOrderForm});
    };

    render() {
        const formElementsArray = [];
        for(let key in this.state.orderForm){
            formElementsArray.push({
                id : key,
                config: this.state.orderForm[key],
                message: this.state.validation[key] ? this.state.validation[key].message : ''
            });
        }

        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(formElement => {
                    return (
                        <Input
                            key={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            change={(event) => this.inputChangedHandler(event, formElement.id)}
                            message={formElement.message}
                        />
                    );
                })}
                <Button
                    btnType="Success">Order</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner/>;
        }
        return (
            <div className={classes.ContactData}>
                <h3>Enter your contact data</h3>
                {form}
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
};

export default connect(mapStateToProps,null)(ContactData);
