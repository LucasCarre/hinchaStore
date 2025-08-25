import { useEffect, useState } from "react"
import { getProducts } from "../../data/async"
import { Link } from "react-router-dom"


const FilterMarcas = () => {
    const[marcas, setMarcas] = useState('Todos')
    const[products, setProducts] = useState([])
    const handleFilterChange = (event) =>{
        setMarcas(event.target.value)
    }
    useEffect(() => {
        const fetchProducts = async () => {
            const fetchedProducts = await getProducts();
            setProducts(fetchedProducts);
        };
        fetchProducts();
    }, []);
    const filteredProducts = products.filter(product => {
        if (marcas === 'Todos') {
            return true; // Si se selecciona 'Todos', muestra todos los productos
        }
        return product.marca === marcas; // De lo contrario, solo muestra los que coinciden
    });
    return (
        <div className="product-list-container">
            <h1>Tienda de Camisetas</h1>

            {/* Selector para filtrar por marca */}
            <div className="filter-container">
                <label htmlFor="marca-filter">Filtrar por Marca:</label>
                <select id="marca-filter" onChange={handleFilterChange} value={marcas}>
                    {/* Opciones del filtro escritas directamente */}
                    <option value="Todos">Todos</option>
                    <option value="Le Coq">Le Coq</option>
                    <option value="Umbro">Umbro</option>
                    <option value="Givova">Givova</option>
                    <option value="Adidas">Adidas</option>
                    <option value="Macron">Macron</option>
                    <option value="Puma">Puma</option>
                    <option value="Atomik">Atomik</option>
                    <option value="Nike">Nike</option>
                </select>
            </div>

            {/* Contenedor de las tarjetas de productos */}
            <div className="main-container">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <div className="card" key={product.id}>
                            <h3>{product.equipo}</h3>
                            <img src={product.img} alt={product.equipo} />
                            <p>Marca: {product.marca}</p>
                            <div className="button-card">
                                <button><Link to={`./${product.id}`}>Ver más</Link></button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No se encontraron productos para esta marca.</p>
                )}
            </div>
        </div>
    );
}

export default FilterMarcas