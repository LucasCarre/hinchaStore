function ButtonCard({color, callback}){
    return (
        <div className="button-card">
            <button onClick={callback} color={color}>Agregar al carrito</button>
        </div>
    )
}

export default ButtonCard