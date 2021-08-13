import React from 'react';

const Counter = ({number, onIncrease, onDecrease}) => {
    return(
        <div>
            <h1>{number}</h1>
            <div>
                <button onClick={onIncrease}>증가</button>
                <button onClick={onDecrease}>감소</button>
            </div>
        </div>
    )
}

export default Counter;