import { useState, useEffect } from "react";

function Mc () {

    const [count, setcount] = useState(0);

    //useEffect(() => {
    //    document.title = `Count: ${count}`;
    //})
    //spustí se vždy při renrování componentu
    
    //useEffect(() => {
    //    document.title = `My website`;
    //}, [])
    //s [] se to stane jenom jednou

    useEffect(() => {
        document.title = `Count: ${count}`;

        return () => {
            //some cleanup code
        }
    }, [count])

    function addCount(){
        setcount(c => c + 1)
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={addCount}>Add</button>
        </div>
    );
}

export default Mc