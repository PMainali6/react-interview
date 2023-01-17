import useCounter from './useCounter';

const CountUpTimer = () => {
    const [count, stopCounter, startCounter ] = useCounter(0);

    return(
        <div>
            <div>{count}</div>
            <button onClick={stopCounter}>STOP</button>
            <button onClick={startCounter}>START</button>
        </div>

    )
}

export default CountUpTimer;