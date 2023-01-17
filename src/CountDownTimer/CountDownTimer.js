import useTimer from './useTimer';

const CountDownTimer = ({ duration, onExpire }) => {
    const time = useTimer({ duration, onExpire });

    return(
        <div>{time}</div>
    )
}

export default CountDownTimer;

