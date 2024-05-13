import './App.css';
import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase';

function App() {

  const url = "https://via.placeholder.com/200"

  return (
    <div className="App">
      <h1>Olá React!</h1>
      <p>Meu primeiro App</p>
      <img src={url} alt=""/>
      <HelloWorld/>
      <Frase/>
    </div>
  );
}

export default App;
