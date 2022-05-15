import React, { useState } from 'react'
import './App.css';


function App() {
  const onClickLi = (name) => {
    console.log(name)
  }

  const [data, setData] = useState([{ name: "Aida" }, { name: "aa" }, { name: "Aida2" }, { name: "Aida3" }, { name: "Aida" }])
  return (
    <div className="App">
      <h1>List</h1>
      {data.map((item, index) => {
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

