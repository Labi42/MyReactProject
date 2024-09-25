
function Button () {

    let handleclick = () => alert("Ouch");

    return (
        <>
            <button onClick={handleclick}>Click me 😊</button>
        </>
    )
}

export default Button