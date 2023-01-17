import React, { useReducer } from 'react';
import { ColorContext, initialState } from './store';
import reducer from './reducer';
import Child from './Child';

const Parent = () => {
    const [ colorState, colorDispatch ] = useReducer(
        reducer,
        initialState
    )
    return (
        <ColorContext.Provider value={{ state: colorState, dispatch: colorDispatch }}>
            <div className="parent">
                <h1>Parent</h1>
                <Child />
            </div>
        </ColorContext.Provider>
    )
}

export default Parent;