import { useState, useEffect, useRef } from 'react';

const useCounter = (initalValue) => {
    const [ count, setCount ] = useState(initalValue);
    const [ start, setStart ] = useState(true);
    const countID = useRef(null);

    const stopCounter = () => {
        clearTimeout(countID.current);
        setStart(false);
    }

    const startCounter = () => {
        setStart(true);
    }

    useEffect(()=> {
        if(start) {
            countID.current = setTimeout(() => {
                setCount(c => c+1)
            }, 1000);
    
            return () => {
                clearTimeout(countID.current)
            }
        }
    }, [count, start])

    return [ count, stopCounter, startCounter];
}

export default useCounter;