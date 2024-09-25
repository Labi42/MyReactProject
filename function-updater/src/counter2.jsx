import { useState } from "react";

function Countf () {
    const [numc, setcount] = useState(0);

    function pl (){
        setcount(n => n + 1)
        setcount(n => n + 1)
    }

    function mn (){
        setcount(numc - 1)
        setcount(numc - 1)
        setcount(numc - 1)
    }

    return (
        <>
            <h1>{numc}</h1>
            <button onClick={pl}>+</button>
            <button onClick={mn}>-</button>
        </>
    )
}

export default Countf