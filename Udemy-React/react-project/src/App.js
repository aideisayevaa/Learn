import React, { useState } from 'react'
import './App.css';


function App() {

  const [number, setNumber] = useState(20)
  const [name, setName] = useState("Aida")
  const [isActive, setIsActive] = useState(false)
  const [user, setUser] = useState({ name: "", lastname: "" })
  const [numberArray, setNumberArray] = useState([1, 2, 3, 4, 5])



  const changeNumber = () => {
    const n = number + 10
    setNumber(n)
    console.log("n", n)
  }

  return (
    <div>
      <h1>Yas : {number}</h1>
      <button onClick={changeNumber}>Yasi deyisdir</button>
      <h1>Adi deyisdir : {name}</h1>
      <input value={name} onChange={(e) => { setName(e.target.value) }} />

      <h1>{JSON.stringify(isActive)}</h1>
      <input type="checkbox" checked={isActive} onChange={(e)=>{
        setIsActive(e.target.checked)
      }} />

      <h1>{JSON.stringify(user)}</h1>
      <button onClick={()=>{
        setUser({name:"Aida",lastname:"Isayeva"})
      }}>User melumatlarini elave et</button>

      <h1>{JSON.stringify(numberArray)}</h1>

      <button onClick={()=>{
        const arr=[ ... numberArray]
        arr.push(10)
        setNumberArray(arr)
      }}>Elave et</button>
    </div>
  );
}

export default App;

