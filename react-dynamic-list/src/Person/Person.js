
import React from 'react';

const myfunc = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.click}> A person named {props.name} and age {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} />
        </div>
    
    )

};

export default myfunc;