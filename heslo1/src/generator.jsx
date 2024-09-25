import { useEffect, useState } from "react";

function Generator() {
    const kombinace = [
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
        "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", 
        "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ];
    
    const [password, setPassword] = useState("");
    let [delkahesla, setdelkahesla] = useState(10);

    useEffect(() => {
        generatepassword ()
    }, [delkahesla]);

    function generatepassword () {
        let generatedPassword = "";
        for (let i = 0; i < delkahesla; i++) {
            let aktualniznak = kombinace[Math.floor(Math.random() * kombinace.length)];
            generatedPassword += aktualniznak;
        }
        setPassword(generatedPassword); 
    }

    function Getdelkahesla(event) {
        setdelkahesla (event.target.value)
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
    };    

    return (
        <div>
            <p>Random heslo - <span className="fontstejny">{password}</span></p>
            <input type="text" onChange={Getdelkahesla} value={delkahesla}/>
            <button onClick={generatepassword}>Refresh</button>
            <button onClick={copyToClipboard}>Zkopírovat heslo</button>
        </div>
    );
}

export default Generator;