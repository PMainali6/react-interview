import { useState } from 'react';

const CoWorkerList = ({ coworkers }) => {
    const initialState = coworkers.reduce((state, worker) => {
        const name = `${worker.first_name}${worker.last_name}`;
        return {
            ...state,
            [name]: true,
        }
    }, {});

    const [isOnline, setOnline] = useState(initialState);

    const toggleStatus = (key) => {
        setOnline(state => {
            return {
                ...state,
                [key]: !state[key]
            }
        })
    }
    return (
        <div>
            {coworkers.map(({first_name, last_name}) => {
                const key = `${first_name}${last_name}`;
                return(
                    <div key={key}>
                        <p>{`${first_name} ${last_name}`}</p>
                        <input type="checkbox" htmlFor={key} checked={isOnline[key]} onChange={() => toggleStatus(key)} />
                    </div>
                )
            })}
        </div>
    )

}

CoWorkerList.defaultProps = {
    coworkers: [
        {first_name: "Naruto", last_name: "Uzumaki"},
        {first_name: "Sasuke", last_name: "Uchinha"},
        {first_name: "Sakura", last_name: "Haruno"}
    ]
}

export default CoWorkerList;