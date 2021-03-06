import React from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends React.Component{
    state = {
        orders: [],
        loading: true
    };

    componentDidMount() {
        axios.get('/orders.json')
            .then(response=>{
                const data = [];
                for (let key in response.data){
                    data.push({
                        ...response.data[key],
                        id: key
                    });
                }
                this.setState({loading:false, orders:data});
            })
            .catch(error=>{
                this.setState({loading:false})
            })
    }

    render() {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order key={order.id}
                           ingredients={order.ingredients}
                           price={order.price.toFixed(2)}/>
                ))}
            </div>
        );
    }


}

export default withErrorHandler(Orders,axios);
