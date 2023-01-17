import { useState, useEffect, useRef } from 'react';
import "./Observer.css";

const Observer = () => {
    const [ isVisible, setIsVisible ] = useState(false);
    const containerRef = useRef(null);

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0
    }

    const callbackFn = (entires) => {
        const [entry] = entires;
        setIsVisible(entry.isIntersecting)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFn, options);

        if(containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => {
            if(containerRef.current) {
                observer.unobserve(containerRef.current)
            }
        }

    }, [callbackFn, options])
    return(
        <div className="app">
            <div className="isVisible">{isVisible ? "IN VIEWPORT" : "NOT IN VIEWPORT"}</div>
            <div className="section"></div>
            <div className="box" ref={containerRef}>OBSERVE ME !!!</div>
        </div>
    )
}

export default Observer;