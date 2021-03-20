import React from 'react';
import "./Count.css"


function Count({number,increase,decrease}){
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    )
}

export default Count; 