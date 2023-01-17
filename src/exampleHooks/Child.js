import { useState, useContext, useRef, useEffect } from 'react';
import { ColorContext } from './store';
import './Child.css'

const Child = () => {
    const { state, dispatch } = useContext(ColorContext);
    const [ inputColor, setInputColor ] = useState("");
    const inputRef = useRef(null);
    const btnRef = useRef(null);

    // run on mount
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return(
        <div>
            <h1 style={{ color: state.color }}>Child Component</h1>
            <input type="text" value={inputColor}
                ref={inputRef} placeholder="This should be focued"
                onChange={(e) => setInputColor(e.currentTarget.value)}
            />
            <button ref={btnRef} className="btn-focus"
            onClick={() => {
                dispatch({ type: 'set', payload: inputColor })
                btnRef.current.focus()
            }}>
                SET COLOR
            </button>
        </div>
    )
}

export default Child;