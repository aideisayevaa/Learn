import React, { useEffect, useRef } from 'react'
import './App.css';

function App() {

  const myCustomInput = useRef()
  const itemsRef=useRef([])

  return (
    <div>
      

      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item,i)=>{
        return(
          <div 
          key={i} 
          style={{width:`${(i+1)*100}px`,height:"20px",background:"red"}}
          ref={el=>itemsRef.current[i]=el}
          ></div>
        )
      })}



      <input className='abc fde test' ref={myCustomInput} />
      <button onClick={() => {

        console.log(itemsRef)

        console.log(myCustomInput.current.value)

        console.log(myCustomInput.current.classList)


      }}>Inputun deyerini ve class adlarini goster</button>
    </div>
  )
}

export default App;

