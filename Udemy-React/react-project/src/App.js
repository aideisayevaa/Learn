import './App.css';
import HelloWorld from './components/HelloWorld'

function App() {
  return (
    <div>
      <HelloWorld yazi="salam" button="Click1" resim="https://images.unsplash.com/photo-1648275115509-8e81cebdf925?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60">


        <h3>Qirmizi yerdeki basliq</h3>


      </HelloWorld>



      <HelloWorld yazi="Hello" button="Click2" resim="https://images.unsplash.com/photo-1648432477533-3b6ecc1495b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60">

          <button>QIRMIZI YERDEKI BUTTON</button>


      </HelloWorld>
    </div >
  );
}

export default App;
