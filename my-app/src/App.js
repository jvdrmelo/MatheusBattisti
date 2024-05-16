import './App.css';
import Frase from './components/Frase';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from  './components/List'

function App() {

  const nome = "Maria"

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <HelloWorld/>
      <Frase/>
      <SayMyName nome="Matheus"/>
      <SayMyName nome="João"/>
      <SayMyName nome={nome}/>
      <Pessoa 
        nome="Rodrigo" 
        idade="28" 
        profissao="Programador" 
        foto="https://via.placeholder.com/150" 
      />
      <Pessoa 
        nome="Jefferson" 
        idade="19" 
        profissao="Estagiário" 
        foto="https://via.placeholder.com/150" 
      />
      <List/>
    </div>
  );
}

export default App;
