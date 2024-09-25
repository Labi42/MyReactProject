import { useState } from "react";

function Kontrola () {

    const [heslo, setheslo] = useState("");
    const [stavdelky, setsd] = useState(false);
    const [stavdelkyclass, setsdc] = useState(false);
    const [obsahujeCislo, setObsahujeCislo] = useState(false);
    const [heslodelka, setheslodelka] = useState(0);
    const [obsahujeMale, setObsahujeMale] = useState(false);  
    const [obsahujeVelke, setObsahujeVelke] = useState(false);

    function getheslo(event) {
        setheslo(event.target.value);
    }

    function kontrolahesla() {
        if (heslo.length > 7) {
            setsd(true);
            setsdc(true);
        } else {
            setsd(false);
            setsdc(false);
        }

        const regex = /\d/;
        const regexMale = /[a-z]/;  
        const regexVelke = /[A-Z]/; 

        if (regex.test(heslo)) {
            setObsahujeCislo(true);
        } else {
            setObsahujeCislo(false);
        }

        setheslodelka(heslo.length)

        setObsahujeMale(regexMale.test(heslo));

        setObsahujeVelke(regexVelke.test(heslo));
    }

    return (
        <div>
            <p>Kontrola hesla:</p>
            <input type="text" onChange={getheslo} value={heslo}/>
            <button onClick={kontrolahesla}>Kontrola</button>
            <p>heslo - {heslo}</p>
            <p>Delka hesla - <span className={stavdelkyclass ? "sgood" : "sbad"}>{heslodelka}, {stavdelky ? "Dobry" : "Spatny"}</span></p>
            <p>Obsahuje číslo: <span className={obsahujeCislo ? "sgood" : "sbad"}>{obsahujeCislo ? "Ano" : "Ne"}</span></p>
            <p>Obsahuje malé písmeno: <span className={obsahujeMale ? "sgood" : "sbad"}>{obsahujeMale ? "Ano" : "Ne"}</span></p> 
            <p>Obsahuje velké písmeno: <span className={obsahujeVelke ? "sgood" : "sbad"}>{obsahujeVelke ? "Ano" : "Ne"}</span></p> 
        </div>
    );
}

export default Kontrola;
