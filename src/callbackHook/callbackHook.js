import { useState, useMemo, useEffect } from 'react';
import MemoList from './List';
import useLocalStorage from './useLocalStorage';

export default function MyComp() {
    const [ theme, setTheme ] = useState("white");
    const [num, setNum ] = useLocalStorage("num", 0);
    const expeniseData = useMemo(() => ["a", "b", "c"], []);

    const style = useMemo(() => {
        return {
            backgroundColor: theme,
            color: theme === "white" ? "black" : "white"
        }
    }, [theme])

    useEffect(() => {
        console.log("theme changed")
    }, [theme])

    return(
        <div style={style}>
            <h1>Parent</h1>
            <button onClick={() => {
                theme === "white" ? setTheme("black") : setTheme("white")
            }}>Toggle</button>

            <input type="number" onChange={(e) => setNum(e.currentTarget.value)} value={num} />

            {/* expensive Component to render */}
            <MemoList data={expeniseData} />
        </div>
    )
}