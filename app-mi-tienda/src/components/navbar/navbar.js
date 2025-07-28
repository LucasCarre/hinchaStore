import Carrito from './carrito'


function Navbar(){
    return (
        <nav className="navbar">
            <div className="navbarItems">
                <h1>~ HINCHA ST⚽​RE ~</h1>
            </div>
            <ul>
                <li>Incio</li>
                <li>Nosotros</li>
                <li>Como comprar?</li>
            </ul>
            <Carrito/>
        </nav>
    )
}

export default Navbar