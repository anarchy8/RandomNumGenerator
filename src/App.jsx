import { useState } from 'react'
import './index.css'

function App() {

  const [min, setMin] = useState(0)
  const [max, setMax] = useState(0)
  const [random, setRandom] = useState(0)


  const catchMin = (event) => {
    setMin(parseInt(event.target.value))
  }

  const catchMax = (event) => {
    setMax(parseInt(event.target.value))
  }



  const createNum = () => {
    let randomNum = Math.floor(Math.random() * (max - min) + min + 1);
    setRandom(randomNum);
    console.log(randomNum);
  }

  return (
    <div className='App'>
      <h1 className='title'>Random Number Generator</h1>
      <div className='container'>
        <h1 className='title-container'>ENTER MİN-MAX VALUE</h1>

        <div className='inputs-div'>
          <div className='input-div'>
            <label className='input-label'>MinValue</label>
            <input onChange={catchMin} value={min} className='input' type="number" />
          </div>
          <div className='input-div'>
            <label className='input-label'>MaxValue</label>
            <input onChange={catchMax} value={max} className='input' type="number" />
          </div>
        </div>

        <div className='randomNum-Div'>
          <h1>{random}</h1>
        </div>
        <button onClick={createNum} className='btn'>GET RANDOM NUM</button>
      </div>
    </div>
  )
}

export default App
