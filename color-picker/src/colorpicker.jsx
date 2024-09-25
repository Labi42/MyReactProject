import { useState } from 'react'

function colorpicker(){

    const [color, setColor] = useState("#FFF")

    return (
        <div>
            <h1>Color picker</h1>
            <div className='color-displazy' style={{backgroundColor: color}}>
                <p>Selected color: {color}</p>
            </div>
            <label>Selecteda Color:</label>
            <input type="color" />
        </div>
    );
}

export default colorpicker