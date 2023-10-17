import { useState } from 'react'


function App() {

  let [counter,setcounter] = useState(0)

const addValue= () => {
    console.log("value added")
    setcounter(counter+1)
}

const decValue = () => {
  console.log("value subtracted")
  setcounter(counter-1)
}
  return (
    <>
    <h2>Counter Value : {counter} </h2>
    <button  onClick={addValue}> Add Value</button>
    <br/> 
    <br/>

    <button onClick={decValue}>Decrease Value</button>
    </>
  )
}

export default App
