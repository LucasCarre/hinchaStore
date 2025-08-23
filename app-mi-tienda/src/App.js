import Card from "./components/items";
import Navbar from "./components/navbar/navbar";
import "./App.css";
import ItemListConteiner from "./components/items/itemListConteiner";
import MapPrueba from "./data/mapPrueba";
function App() {
  
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Navbar/>
        </header>
      </div>
        <ItemListConteiner mensaje='Bienvenidos a HINCHA ST⚽​RE' slogan='Donde el hincha encuentra su camiseta'/>
        <div className='main-container'>
        <Card name='Producto N°1' description='Lorem ipsum' precio='$$$$'/>
        <Card name='Producto N°2' description='Lorem ipsum' precio='$$$$'/>
        <Card name='Producto N°3' description='Lorem ipsum' precio='$$$$'/>
        <Card name='Producto N°4' description='Lorem ipsum' precio='$$$$'/>
        <MapPrueba/>
        </div>
    </>
  );
}

export default App;