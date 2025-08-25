import Navbar from "./components/navbar/navbar";
import "./App.css";
import ItemListConteiner from "./components/items/itemListConteiner";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import ItemDetailConteiner from "./components/items/itemDetailConteiner";
import Productos from "./pages/Productos";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos/:id" element={<ItemDetailConteiner/>}/>
        <Route path="/productos" element={<Productos/>}/>
      </Routes>
    </BrowserRouter>
    // <>
    //   <div className="App">
    //     <header className="App-header">
    //       <Navbar/>
    //     </header>
    //   </div>
    //     <div className='main-container'>
    //     <ItemListConteiner/>
    //     </div>
    // </>
  );
}

export default App;