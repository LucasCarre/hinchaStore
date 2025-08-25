import { useEffect, useState } from "react";
import { getProducts } from "../../data/async";
import { Link } from "react-router-dom";
import VersionFilter from "./version";
import MarcaFilter from "./marcas";

const Filtros = () => {
    const [products, setProducts] = useState([]);
    const [marca, setMarca] = useState("Todos");
    const [version, setVersion] = useState("Todas");

    useEffect(() => {
        const fetchProducts = async () => {
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
        };
        fetchProducts();
    }, []);

    // Filtrado combinado
    const filteredProducts = products.filter((product) => {
        const filterMarca = marca === "Todos" || product.marca === marca;
        const filterVersion = version === "Todas" || product.variante === version;
        return filterMarca && filterVersion;
    });

    return (
        <>
        <div className="product-list-container">
            <h1>Tienda de Camisetas</h1>
            <div className="filter-container">
            <MarcaFilter marca={marca} setMarca={setMarca} />
            <VersionFilter version={version} setVersion={setVersion} />
            </div>

            {/* Listado de productos filtrados */}
            <div className="main-container">
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                <div className="card" key={product.id}>
                    <h3>{product.equipo}</h3>
                    <img src={product.img} alt={product.equipo} />
                    <p>Marca: {product.marca}</p>
                    <p>Versión: {product.variante}</p>
                    <div className="button-card">
                    <button>
                        <Link to={`./${product.id}`}>Ver más</Link>
                    </button>
                    </div>
                </div>
                ))
            ) : (
                <p>No se encontraron productos.</p>
            )}
            </div>
        </div>
        </>
    );
};

export default Filtros;