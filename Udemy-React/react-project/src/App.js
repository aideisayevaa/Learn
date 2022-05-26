import React, { useRef } from 'react'
import './App.css';

function App() {

  const myCustomInput = useRef()

  return (
    <div>
      <input className='abc fde test' ref={myCustomInput} />
      <button onClick={() => {

        console.log(myCustomInput.current.value)

        console.log(myCustomInput.current.classList)


      }}>Inputun deyerini ve class adlarini goster</button>
    </div>
  )
}

export default App;

