import React, { useState } from 'react'
import './App.css';


function App() {

  const [data, setData] = useState(
    [
      {
        id: 1,
        age: 65
      },
      {
        id: 2,
        age: 40
      },
      {
        id: 3,
        age: 50
      },
      {
        id: 4,
        age: 10
      }

    ]
  )

  const getStatus = (item) => {
    if (item.age == 65) {
      return "high"
    }

    if (item.age == 50) {
      return "medium"
    }

    if (item.age == 50) {
      return "minimal"
    }

    return "xsmall"
  }



  return (
    <div className="App">
      {data.map((item, index) => {
        return (
          <div key={index} className={`riskStatus ${getStatus(item)}`}>

            <p>Yasa gore risk {item.age}</p>

          </div>
        )
      })}
    </div >
  )
}

export default App;

