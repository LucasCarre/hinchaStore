const VersionFilter = ({ version, setVersion }) => {
    return (
        <div className="version-filter">
        <label htmlFor="version-filter">Filtrar por versión:</label>
        <select
            id="version-filter"
            onChange={(e) => setVersion(e.target.value)}
            value={version}
        >
            <option value="Todas">Todas</option>
            <option value="Local">Local</option>
            <option value="Visitante">Visitante</option>
        </select>
        </div>
    );
};

export default VersionFilter;
