
import React from 'react';

const myfunc = (props) => {
    return (
        <div className='Person'>
            <p>A person named {props.name} and age {props.age} </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} />
        </div>
    
    )

};

export default myfunc;