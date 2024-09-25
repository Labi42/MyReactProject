
function List() {
    let fruits = [  {id: 1,name: "apple", calories:90},
                    {id: 2,name: "orange", calories:51},
                    {id: 3,name: "banana", calories:200},
                 ]
    
    fruits.sort((a, b) => a.name.localeCompare(b.name)) //abeceda
    fruits.sort((a, b) => a.calories - b.calories) //cisla

    let listitems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>)

    let lowcalfruit = fruits.filter(fruit => fruit.calories < 100);

    let listitems2 = lowcalfruit.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>)

    return (
        <>
            <ul>{listitems}</ul>
            <ul>{listitems2}</ul>
        </>
    )
}

export default List