import React, { useState } from 'react'
import './App.css';


function App() {
  const onClickLi = (name) => {
    console.log(name)
  }

  const [data, setData] = useState([{ name: "Aida" }, { name: "aa" }, { name: "Aida2" }, { name: "Aida3" }, { name: "Aida" }, { name: "hikmet" }, { name: "ahmet" }])
  return (
    <div className="App">
      <h1>List</h1>
      {data.map((item, index) => {

        if (item.name.includes("hikmet")) {
          return null
        }

        if (item.name == "ahmet") {
          return <h2> {item.name.charAt(0).toUpperCase()}</h2>
        }

        if (item.name.length >= 3) {
          return <h1 key={index}>{item.name}</h1>
        }

        else {
          return <p key={index} onClick={() => {
            onClickLi(item.name)
          }}>{item.name.length <= 2 ? "Addaki herf sayi azdi" : item.name}</p>
        }
      })}
    </div >
  )
}

export default App;

