import { useState,useEffect, } from "react";
import { useParams } from "react-router-dom";
import { getDetailProducts } from "../../data/async";
import ButtonCard from "./botonAgregarAlCarrito";
import Navbar from "../navbar/navbar";

function ItemDetailConteiner() {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    useEffect(()=>{
        async function fectchProduct(){
            const data = await getDetailProducts(id);
            setProduct(data);
        }
        fectchProduct();
        }, [id])

    if (!product) {
    return <p>Cargando producto...</p>; // Mensaje mientras espera
    }

    return(
        <>
        <header className="App-header">
            <Navbar/>
        </header>
        <section>
            <h2>{product.equipo}</h2>
            <img src={product.img} alt={product.equipo} /> 
            <p>Marca: {product.marca}</p>
            <p>Temporada: {product.temporada}</p>
            <p>Opción: {product.variante}</p>
            <p>Precio: ${product.precio}</p>
            <p>Descripcion: {product.descripcion}</p>
            <ButtonCard />
        </section>
        </>
    )
}

export default ItemDetailConteiner