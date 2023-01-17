import React, { useReducer } from 'react';
import counterReducers from './reducers';


const initalState = {
    count: 0,
    step: 1
}

const Counter = () => {
    const [ state, dispatch ] = useReducer(
        counterReducers,
        initalState
    )
    return(
        <div>
            <div>{state.count}</div>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'reset' })}>RESET</button>
        </div>
    )
}


export default Counter;




// import { useReducer } from 'react';

// function reducer(state, value) {
//     return state + value
// }

// const Counter = () => {
//     const [ count, dispatch ] = useReducer(
//         reducer,
//         0
//     );

//     return(
//         <div>
//             <h1>{count}</h1>
//             <button onClick={() => dispatch(1)}>+</button>
//         </div>
//     )
// }

// export default Counter;