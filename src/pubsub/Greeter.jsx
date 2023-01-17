import React, { useEffect, useState } from 'react';
import { subscribe } from './pubsubCustom';

export default function Greeter() {
    const [ greet, setGreet ] = useState("Guest");

    useEffect(() => {
        const subInstance = subscribe("name", (data) => {
            setGreet(data)
        })

        return () => {
            subInstance.unsubscribe()
        }
    })

    return(
        <div>Hello, {greet}</div>
    )
}