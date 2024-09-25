import React, {useState} from 'react'

function MyComponent(){
    const [name, setname] = useState("Guest"); //vraci pole s 2 prvky - promena a funkce

    const updatename = () => {
        setname("Bob")
    }

    const [name1, setname1] = useState("")

    function handleNameChange (event){
        setname1(event.target.value)
    }
 
    return (
        <div> 
            <div>
                <p>Name: {name}</p>
                <button onClick={updatename}>Set name</button>
            </div>
            <div>
                <input value={name1} onChange={handleNameChange} />
                <p>Name: {name1}</p>
            </div>
        </div>
    )
}

export default MyComponent