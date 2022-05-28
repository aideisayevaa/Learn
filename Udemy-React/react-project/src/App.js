import React, { useEffect, useRef, useState } from 'react'
import './App.css';
import Portal from './components/Portal'



function App() {

  const customTarget = useRef()
  const [isExist, setIsExist] = useState(false)
  const [target, setTarget] = useState(document.body)
  const [targetText, setTargetText] = useState("Body")


  useEffect(() => {
    if (customTarget.current) {
      setIsExist(true)
    }
  }, [customTarget])


  return (
    <div>


      <div ref={customTarget}>


      </div>

      <button onClick={() => {
        if (targetText == "Body") {
          setTargetText("Custom Target")
          setTarget(customTarget.current)
        }
        else {
          setTarget(document.Body)
          setTargetText("Body")
        }

      }}>Deyisdir</button>

      <Portal text={targetText} target={target} />


    </div>
  ) 


}

export default App;

