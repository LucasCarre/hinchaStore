import Card from "./components/cards";
import Navbar from "./components/navbar/navbar";
import Saludo from "./components/cards/bienvenida";
import "./App.css";
function App() {
  
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Navbar/>
        </header>
      </div>
        <Saludo mensaje='Bienvenidos a HINCHA ST⚽​RE' slogan='Donde el hincha encuentra su camiseta'/>
        <div className='main-container'>
        <Card name='Producto N°1' description='Lorem ipsum' precio='$$$$'/>
        <Card name='Producto N°2' description='Lorem ipsum' precio='$$$$'/>
        <Card name='Producto N°3' description='Lorem ipsum' precio='$$$$'/>
        <Card name='Producto N°4' description='Lorem ipsum' precio='$$$$'/>
        </div>
    </>
  );
}

export default App;
