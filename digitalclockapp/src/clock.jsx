import { useState, useEffect } from "react";

function Digitalclock () {

    const [time, settime] = useState(new Date());

    useEffect(() => {
        const intervalid = setInterval(() => {
            settime(new Date())
        }, 1000)

        return ()=> {
            clearInterval(intervalid)
        }
    }, [])

    function formattime () {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        const seconds = time.getSeconds();

        return `${padzero(hours)}:${padzero(minutes)}:${padzero(seconds)}`
    }

    function padzero(number){
        return (number < 10 ? "0" : "") + number;
    }

    return (
    <>
        <div>
            <span>{formattime()}</span>
        </div>
    </>
    );
}

export default Digitalclock