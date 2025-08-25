import "../../App.css";
import Navbar from "../../components/navbar/navbar";

function Nosotros() {
    return (
        <>
        <div className="App">
            <header className="App-header">
                <Navbar/>
            </header>
        </div>
        <div className="nosotrosContainer">
            <h1>Sobre HINCHA ST⚽RE</h1>

            <p>
                Bienvenido a <strong>HINCHA ST⚽RE</strong>, tu tienda online especializada en camisetas de fútbol de excelente calidad. 
                Aquí encontrarás productos de los clubes más destacados de Argentina y del mundo, ideales para verdaderos hinchas. 
            </p>

            <p>
                Nos apasiona el fútbol tanto como a vos, por eso seleccionamos cuidadosamente cada camiseta, asegurando materiales de primera y diseños auténticos. 
                Queremos que cada fanático pueda lucir los colores de su equipo favorito con orgullo y comodidad.
            </p>

            <p>
                En HINCHA ST⚽RE nos esforzamos por brindar una experiencia de compra segura, ágil y confiable, con atención personalizada y envíos rápidos a todo el país. 
                ¡Sumate a nuestra comunidad de hinchas y disfrutá del fútbol con estilo!
            </p>
        </div>
        </>
    );
}

export default Nosotros;