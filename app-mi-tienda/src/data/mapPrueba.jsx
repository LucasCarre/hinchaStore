import products from "./productos.json"
import ButtonCard from "../components/items/botonAgregarAlCarrito"
const MapPrueba = () =>{
    return(
        products.map(elem =>{
                    return(
                    <div className="card">
                        <h2>{elem.equipo}</h2>
                        <img src={elem.img} alt={elem.equipo} /> 
                        <p>Temporada: {elem.temporada}</p>
                        <p>Precio: ${elem.precio}</p>
                        <ButtonCard/>
                    </div>
                    )
                })
    )
}

export default MapPrueba