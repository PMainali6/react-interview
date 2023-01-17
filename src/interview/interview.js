import { useState } from 'react';

export default function Example() {
    const [ state, setState ] = useState(0);

    return (
        <div style={{ fontSize: 32 }} onClick={() => {
            // setState(state + 1);
            // setTimeout(() => setState(state+1), 1000);
            // setTimeout(() => setState(state+1), 2000);

            setState(state => state + 1);
            setTimeout(() => setState(state => state+1), 1000);
            setTimeout(() => setState(state => state+1), 2000);
        }}>
            state: {state}
        </div>
    )
}