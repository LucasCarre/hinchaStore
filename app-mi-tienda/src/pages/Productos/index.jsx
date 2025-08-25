import Filtros from "../../components/filtros/filtros"
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
        <Filtros/>
        </div>
        </>
    )
}

export default Productos