import './App.css';

var myName = "Aida"
let myAge = 19
const mySurname = "Isayeva"

function App() {
  return (
    <div>
      <a href="https://unsplash.com/">Hello world</a>

      <img src="https://images.unsplash.com/photo-1649829875371-1f583c2cf057?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" />

      <button className="yellow">Button</button>
      <p>p tagi</p>
      <h1 style={{ color: "red", marginBottom: "100px" }}>{myName}</h1>
      <h4>{mySurname}</h4>
      <h4>{mySurname.toUpperCase()}</h4>
      <h3>{myAge}</h3>
      <h3>{myAge > 20 ? "yas 20den boyuk" : "yas 20den kicik"}</h3>
      <h4>{100 + 50}</h4>
      <h4>{Math.random()}</h4>

    </div>
  );
}

export default App;
