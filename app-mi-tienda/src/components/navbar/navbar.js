import Carrito from './carrito'


function Navbar(){
    const navStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#1E7F3D',
    };

    const ulStyle = {
        display: 'flex',
        listStyle: 'none',
        gap: '10px',
    };


    return (
        <nav className="navbar" style={navStyle}>
            <div className="navbarItems">
                <h1>~ HINCHA ST⚽​RE ~</h1>
            </div>
            <ul style={ulStyle}>
                <li>Incio</li>
                <li>Nosotros</li>
                <li>Como comprar?</li>
            </ul>
            <Carrito/>
        </nav>
    )
}

export default Navbar