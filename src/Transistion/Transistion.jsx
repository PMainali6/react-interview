import React, { useDeferredValue, useEffect, useState, useTransition } from 'react';

const bigArray = [...Array(20000).keys() ];

function Transition() {
    const [search, setSearch] = useState('');
    const [list, setList] = useState(bigArray);
    const deferredValue = useDeferredValue(search);
    const [isPending, startTransition] = useTransition();
    
    function handleInput(e) {
        // urgent update
        setSearch(e.target.value)
    }

    useEffect(() => {
        startTransition(() => {
            console.log(deferredValue);

            const filteredValue = list.filter(item => item.toString().includes(deferredValue));

            setList(filteredValue)
        })
    }, [deferredValue])

    return(
        <div>
            <input type="text" onChange={handleInput} value={search} />
            <p>DeferredValue: {deferredValue}</p>

            <ul>{list.map((el, i) => <li key={el}>{el}</li>)}</ul>
        </div>
    )
}

export default Transition;