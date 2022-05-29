import React, { createElement } from 'react'
import './App.css';

const Typo = (props) => {
  const createEl = (text, as) => {
    const el = createElement(as, {}, text)
    return el
  }
  return (
    <>
      {createEl(props.text, props.as)}
    </>
  )
}



function App() {

  return (
    <div>

      <Typo text="H1 tegi" as="h1" />
      <Typo text="H2 tegi" as="h2" />
      <Typo text="H3 tegi" as="h3" />
      <Typo text="H4 tegi" as="h4" />

    </div>

  )
}

export default App;

