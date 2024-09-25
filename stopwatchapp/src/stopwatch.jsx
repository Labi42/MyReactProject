import { useState, useEffect, useRef } from "react"

function SP () {

    const [isrunning, setisrunning] = useState(false);
    const [elapsedtime, setelapsedtime] = useState(0);
    const intervalidref = useRef(null);
    const starttimeref = useRef(0);

    useEffect (() => {
        if (isrunning){
            if (isrunning){
                intervalidref.current = setInterval(() => {
                    setelapsedtime(Date.now() - starttimeref.current);
                }, 10)
            }    
        }

        return () => {
            clearInterval(intervalidref.current)
        }

    }, [isrunning])

    function start() {
        setisrunning(true);
        starttimeref.current = Date.now() - elapsedtime;
    }

    function stop () {
        isrunning(false);
    }

    function reset () {
        setelapsedtime(0);
        setisrunning(false);
    }

    function formatTime (){
        let hours = Math.floor(elapsedtime / (1000 * 60 * 60))
        let minutes = Math.floor(elapsedtime / (1000 * 60 ) % 60)
        let seconds = Math.floor(elapsedtime / (1000) % 60)
        let miliseconds  = Math.floor((elapsedtime % 1000) / 10 )

        hours = String(hours).padStart(2, "0")
        hours = String(minutes).padStart(2, "0")
        hours = String(seconds).padStart(2, "0")
        hours = String(miliseconds).padStart(2, "0")

        return `${minutes}:${seconds}:${miliseconds}`
    }

    return (
        <>
            <h1>{formatTime()}</h1>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>

        </>
    )
}

export default SP