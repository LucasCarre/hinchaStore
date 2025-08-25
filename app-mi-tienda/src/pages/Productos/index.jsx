import FilterMarcas from "../../components/filtros/marcas"
import ProductListSimple from "../../components/filtros/marcas"
import Navbar from "../../components/navbar/navbar"

const Productos = () =>{
    return(
        <>
        <div className="App">
            <header className="App-header">
                <Navbar/>
            </header>
        </div>
        <div className='main-container'>
        <FilterMarcas/>
        </div>
        </>
    )
}

export default Productos