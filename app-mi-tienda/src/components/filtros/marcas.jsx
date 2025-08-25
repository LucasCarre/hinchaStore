const MarcaFilter = ({ marca, setMarca }) => {
    return (
        <div className="marca-filter">
        <label htmlFor="marca-filter">Filtrar por Marca:</label>
        <select
            id="marca-filter"
            onChange={(e) => setMarca(e.target.value)}
            value={marca}
        >
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
    );
};

export default MarcaFilter;