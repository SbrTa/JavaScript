import React from "react";

const Select = ({name, label, options, error, ...rest}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select className="form-control" name={name} id={name} {...rest}>
                <option value="0">Select</option>
                {
                    options.map(option=>(
                        <option key={option._id} value={option._id}>
                            {option.name}
                        </option>
                    ))
                }
            </select>
            {error && <div>{error}</div>}
        </div>
    );
};

export default Select;
