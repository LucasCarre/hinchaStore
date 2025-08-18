import Carrito from './carrito'
import "../../App.css";



function Navbar(){
    return (
        <nav className="navbar">
            <div className="navbarItems">
                <h1>~ HINCHA ST⚽​RE ~</h1>
            </div>
            <ul>
                <a>Inicio</a>
                <a>Productos</a>
                <a>Nosotros</a>
            </ul>
            <Carrito/>
        </nav>
    )
}

export default Navbar