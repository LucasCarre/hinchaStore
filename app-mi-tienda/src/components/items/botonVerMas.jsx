function BotonVerMas({color, callback}){
    return (
        <div className="button-card">
            <button onClick={callback} color={color}>Ver más</button>
        </div>
    )
}

export default BotonVerMas