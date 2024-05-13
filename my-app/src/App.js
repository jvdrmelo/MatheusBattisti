import logo from './logo.svg';
import './App.css';

function App() {

  const url = "https://via.placeholder.com/200"

  return (
    <div className="App">
      <h1>Olá React!</h1>
      <p>Meu primeiro App</p>
      <img src={url} alt=""/>
    </div>
  );
}

export default App;
