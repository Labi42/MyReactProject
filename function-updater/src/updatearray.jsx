import { useState } from "react";

function MC2 () {

    const [foods, setFoods] = useState(["apple", "orange", "banana"])

    function handleAddFood(){
        const newFood = document.getElementById("foodinput").value;
        document.getElementById("foodinput").value = "";

        setFoods([...foods, newFood]);
    }

    function handleremovefood (index) {
        //setFoods(foods.filter((_, i) => i !== index)); // _ znamena ignorovano 
    }

    return (
        <>
            <h2>List of food</h2>   
            <ul>
                {foods.map((food,index) => <li key={index} onClick={handleremovefood(index)}>{food}</li>)}
            </ul>
            <input type="text" id="foodinput"/>
            <button onClick={handleAddFood}>Add Food</button>
        </>
    )
}

export default MC2