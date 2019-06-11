import React from 'react';

const Radio = ({name, label, error, ...rest}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input className="from-control" {...rest} name={name} id={name}/>
            {error && <div>{error}</div>}
        </div>
    );
};

export default Radio;
