import React, { useEffect, useState } from 'react'
import './App.css';
import useWindowSize from './hooks/useWindowsSize';


function App() {
  const { width, height } = useWindowSize()
  return (
    <>
      <h1>Width :  {width}</h1>
      <br />
      <br />
      <br />
      <h1>Height :  {height}</h1>


      {width < 500 && <p>Lorem ipsum dolor sit.</p>}  {/* width 500-den kicik olanda gosterir */}
    </>
  )
}

export default App;

