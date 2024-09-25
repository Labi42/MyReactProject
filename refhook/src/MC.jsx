import { useState, useEffect, useRef } from "react";

function MC () {

    const ref1 = useRef(0);
    const inputRef = useRef(null);

    useEffect(() => {
        console.log('component render');
        console.log(inputRef);
    })

    function handleClick(){
        ref1.current = ref1.current + 1
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = 'red'
    }

    return (
        <div>
            <button onClick={handleClick}>Click</button>
            <input ref={inputRef} />
        </div>
    );
}

export default MC