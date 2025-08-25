import BotonVerMas from "./botonVerMas"
import ButtonCard from "./botonAgregarAlCarrito"
import { useState, useEffect } from "react"
import { getProducts } from "../../data/async"
import { Link } from "react-router-dom"


    const ItemListConteiner = ()=>{
            const [dataProducts, setDataProducts] = useState([])
            useEffect(()=>{
                getProducts().then((data)=>(setDataProducts(data)))
            }, [])

            return(
                dataProducts.map(elem =>{
                    return(
                        <div className="card">
                            <h3>{elem.equipo}</h3>
                            <img src={elem.img} alt={elem.equipo} /> 
                            <p>Marca: {elem.marca}</p>
                            <p>Temporada: {elem.temporada}</p>
                            <p>Opcion: {elem.variante}</p>
                            <p>Precio: ${elem.precio}</p>
                            <ButtonCard/>
                            <div className="button-card">
                                <button><Link to={`/productos/${elem.id}`}>Ver más</Link></button>
                            </div>
                        </div>
                    )
                })
            )
    }

export default ItemListConteiner