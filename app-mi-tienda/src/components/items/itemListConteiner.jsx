import ButtonCard from "./botonAgregarAlCarrito"
import { useState, useEffect } from "react"
import { getProducts } from "../../data/async"
import { Link } from "react-router-dom"


    const ItemListConteiner = ({ mostrarCantidad })=>{
            const [dataProducts, setDataProducts] = useState([])
            useEffect(()=>{
                getProducts().then((data)=>(setDataProducts(data)))
            }, [])

            let productosAMostrar = dataProducts;
            if (mostrarCantidad && dataProducts.length > mostrarCantidad) {
                const shuffled = [...dataProducts].sort(() => 0.5 - Math.random());
                productosAMostrar = shuffled.slice(0, mostrarCantidad);
            }

            return productosAMostrar.map((elem) => (
                <div className="card" key={elem.id}>
                    <h3>{elem.equipo}</h3>
                    <img src={elem.img} alt={elem.equipo} />
                    <p>Temporada: {elem.temporada}</p>
                    <ButtonCard producto={elem} />
                    <div className="button-card">
                        <button>
                        <Link to={`/productos/${elem.id}`}>Ver más</Link>
                        </button>
                    </div>
                </div>
            ));
    }

export default ItemListConteiner