import React, {Component} from 'react'

class Title extends Component{
    render(){
        return(
            <h1>This is Mr. {this.props.name} </h1>
        )
    }
}

export default Title