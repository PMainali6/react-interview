import { useState, useEffect, useRef } from 'react';

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const useTimer = ({ duration, onExpire }) => {
    const [time, setTime] = useState(duration);
    const timerID = useRef(null);

    const stopTimer = () => {
        clearTimeout(timerID.current);
    };

    useEffect(()=> {
        timerID.current = setTimeout(() => {
            setTime(time - 1000);
        }, 1000);

        if(time <= 0) {
            stopTimer()
            onExpire && onExpire()
        }
        
        return stopTimer;
    }, [time, onExpire]);

    const getFormattedTime = (time) => {
        const days = Math.floor(time / DAY);
        const hours = Math.floor((time % DAY) / HOUR);
        const minutes = Math.floor((time % HOUR) / MINUTE);
        const seconds = Math.floor((time % MINUTE) / SECOND);

        return `${days} days : ${hours} hours : ${minutes} minutes : ${seconds} seconds`;
    }

    return getFormattedTime(time); 
}

export default useTimer;