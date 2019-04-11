import React from 'react'
import './Digit.css'


const Digit = (props)=>{
    return (
        <div className="Digit mx-4 text-center" style={{borderColor: props.bcolor}}> 
            <h1 className="display-3 py-3" style={{color: props.tcolor}}>
                {props.value<10 ? `0${props.value}`: props.value}
            </h1>
        </div>
    )
}

export default Digit