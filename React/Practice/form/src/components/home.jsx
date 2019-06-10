import React from 'react';

class Home extends React.Component{

    btnHandler = () => {
        this.props.history.push("/login");
    };

    render() {
        return (
            <div>
                <p>HOME</p>
                <button onClick={this.btnHandler}>Form</button>
            </div>
        );
    }


}

export default Home;
