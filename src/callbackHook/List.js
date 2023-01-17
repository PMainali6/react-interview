import { useState, useEffect, memo } from 'react';

function List ({ data }) {
    const [ state, setState ] = useState([]); 
    useEffect(() => {
        console.log("Child Comp renders");
        setState(data);
    }, [data])

    return (
        <div>
            {state.map(item => (
                <div key={item}>
                    {item}
                </div>
            ))}
        </div>
    )
}

export default memo(List);

