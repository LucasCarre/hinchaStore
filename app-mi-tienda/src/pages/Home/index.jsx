import Navbar from "../../components/navbar/navbar";
import ItemListConteiner from "../../components/items/itemListConteiner";

const Home = ()=>{
    return(
        <>
        <div className="App">
            <header className="App-header">
                <Navbar/>
            </header>
        </div>
        <section className="bienvenida">
            <h1>Bienvenido a HINCHA ST⚽RE</h1>
            <p>
                Tu tienda online de camisetas de fútbol de excelente calidad, de los clubes más importantes de Argentina y del mundo.
            </p>
        </section>
        <div className='main-container'>
            <ItemListConteiner mostrarCantidad={4}/>
        </div>
        
    </>
    )
}

export default Home