import React from 'react'
import './App.css';
import styles from "./CustomStyle.module.css"



function App() {
  return (
    <div>
      <div className={styles.modulerCss}>
          Hello World
      </div>

      <div className={styles.customBtn}>
          Merhaba dunya
      </div>
    </div>
  )
}

export default App;

