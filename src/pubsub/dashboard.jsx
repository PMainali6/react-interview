import { useState, useEffect } from 'react';
import { subscribe } from './pubsubCustom';

export default function Dashboard() {
    const [ name, setName ] = useState('');
    const [age, setAge] = useState(0);
    const [ prof, setProf ] = useState('');

    useEffect(() => {
        const nameSub = subscribe("name", (data) => setName(data))
        const ageSub = subscribe("age", (data) => setAge(data))
        const profSub = subscribe("prof", (data) => setProf(data))

        return () => {
            nameSub.unsubscribe()
            ageSub.unsubscribe()
            profSub.unsubscribe()
        }
    })
    return(
        <div>
            <h1>Dashboard</h1>
            <h3>UserName: {name}</h3>
            <h3>Age: {age}</h3>
            <h3>Profession: {prof}</h3>
        </div>
    )
}