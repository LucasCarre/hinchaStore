import Carrito from './carrito'
import "../../App.css";
import { Link } from 'react-router-dom';



function Navbar(){
    return (
        <nav className="navbar">
            <div className="navbarItems">
                <h1>~ HINCHA ST⚽​RE ~</h1>
            </div>
            <ul>
                <a><Link to='/'>Inicio</Link></a>
                <a><Link to='/productos'>Productos</Link></a>
                <a><Link to={'/nosotros'}>Nosotros</Link></a>
            </ul>
            <Carrito/>
        </nav>
    )
}

export default Navbar