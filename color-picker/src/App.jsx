import { useState } from 'react'

function App() {

  const [color, setColor] = useState("#FFF")

  function handlecolorchange (event){
    setColor(event.target.value)
  }

  return (
      <div>
          <h1>Color picker</h1>
          <div className='color-displazy' style={{backgroundColor: color}}>
              <p>Selected color: {color}</p>
          </div>
          <label>Selecteda Color:</label>
          <input type="color" value={color} onChange={handlecolorchange}/>
      </div>
  );
}

export default App
