import React, { useState } from 'react'
import './App.css';
import styles from "./CustomStyle.module.css"

function App() {

  const [data, setData] = useState([
    {
      text: 'Yasin',
      status: "success"
    },
    {
      text: 'Ali',
      status: 'error'
    },
    {
      text: 'Mehmet',
      status: 'primary'
    }])

  return (
    <div>
      {data.map((item, index) => {
        return (
          <div key={index} className={styles[item.status]}>
            {item.text}
          </div>
        )
      })}
    </div>
  )
}

export default App;

