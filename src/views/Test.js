import React, { useState, useEffect } from 'react';

function Test(props){
    
    console.log(props.aaa);
    
    const [count, setCount] = useState(0);
    return (
        <>
            Count: {count}
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        </>
    );
}

Test.defaultProps = {
    aaa: '안녕'
}

export default Test;