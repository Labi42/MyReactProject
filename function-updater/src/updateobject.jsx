import { useState } from "react";

function MC () {
    const [car, setCar] = useState({year:2024,
                                    make: "Ford",
                                    model: "Mustang",})
    
    function handleyearchange (event) {
        //setCar({...car, year: event.target.value}) nebo
        setCar(c => ({...c, year: event.target.value}))
    }

    function handlemakechange (event) {
        setCar(c => ({...c, make: event.target.value}))
    }

    function handlemodelchange (event) {
        setCar(c => ({...c, model: event.target.value}))
    }
    
    return (
        <div>
            <p>car is {car.year} make {car.make} and model is {car.model}</p>

            <input type="number" value={car.year} onChange={handleyearchange}/>
            <input type="text" value={car.make} onChange={handlemakechange}/>
            <input type="text" value={car.model} onChange={handlemodelchange}/>
        </div>
    )
}

export default MC