import React from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from "../../../axios-orders";
import Spinner from '../../../components/UI/Spinner/Spinner';


class ContactData extends React.Component{
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    };

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading:true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'SbrTa',
                address: {
                    street: 'kunjaban',
                    zip: '1205',
                    country: 'Bangladesh'
                },
                email: 'subrataxon@gmail.com'
            },
            deliveryMethod: 'fastest'
        };
        axios.post('/orders.json',order)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch( error => {
                this.setState({loading: false});
                console.log(error);
            });
    }

    render() {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Name"/>
                <input className={classes.Input} type="email" name="email" placeholder="Email"/>
                <input className={classes.Input} type="text" name="street" placeholder="Street"/>
                <input className={classes.Input} type="text" name="postal" placeholder="Postal Code"/>
                <Button
                    clicked={this.orderHandler}
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

export default ContactData;
