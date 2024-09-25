import { useState } from "react"
import ComponentB from "./ComponentB"
import { createContext } from "react"

export const UserContext = createContext();

function ComponentA () {

    const [user, setuser] = useState('Ruf')

    return (
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB/>
            </UserContext.Provider>
        </div>
    )
}

export default ComponentA