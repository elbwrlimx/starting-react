import "./App.css";
import logo from "./images/logo.png"; // Certifique-se de que o caminho está correto
import Logo from './components/logo';

function App() {
  return (
    <div className="app">
      <header className="App-header">
        <Logo />
        <Logo></Logo>
      </header>
    </div>
  );
}

export default App;