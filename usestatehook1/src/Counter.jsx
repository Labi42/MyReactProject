import React, {useState} from 'react'

function Counter() {
    const [count, setcount] = useState(0)

    const plus = () => {
        setcount(count + 1);
    }

    const minus = () => {
        setcount(count - 1);
    }
    
    return (
        <div>
            <p>{count}</p>
            <button onClick={plus}>plus</button>
            <button onClick={minus}>minus</button>
        </div>
    )
}

export default Counter