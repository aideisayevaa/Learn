import logo from './logo.svg';
import './App.css';

function App() {
  const test =34
  const isAuth=true
  return (
    <div className='App'>
      <h4>{1 + 1}</h4>
      <h4>{"aida".toUpperCase()}</h4>
      <h4>{test}</h4>
      <div>
        {
          isAuth ? <p>Qeydiyyata alindi</p>
                 : null
        }
      </div>
    </div>
  );
}

export default App;
