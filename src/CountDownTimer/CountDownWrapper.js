import { useState } from 'react';
import CountDownTimer from './CountDownTimer';

const CountDownWrapper = () => {
    const [ hasExpired, setExpired ] = useState(false);

    const expireCallback = () => {
        console.log("expire Callback");
        setExpired(true)
    }

    const restartFn = () => {
        setExpired(false);
    }

    return (
        <div>
            { !hasExpired ? 
                <CountDownTimer duration={2* 1000} onExpire={expireCallback}/> : 
                <button onClick={restartFn}>RESTART</button> 
            }
        </div>
    );
}

export default CountDownWrapper;