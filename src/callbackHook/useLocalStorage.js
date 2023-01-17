import { useEffect, useState } from 'react';

function getValueFromStore(key, initialValue) {
    const savedValue = localStorage.getItem(key);
    if(savedValue)
        return JSON.parse(savedValue);
    
    if(initialValue instanceof Function) {
        return initialValue();
    } else {
        return initialValue;
    }
}

export default function useLocalStorage(key, initialValue) {
    const [ state, setState ] = useState(() => getValueFromStore(key, initialValue));
    
    useEffect(() => {
        localStorage.setItem(key, state);
    }, [state]);

    return [state, setState];
}