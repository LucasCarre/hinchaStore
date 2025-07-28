import ButtonCard from "./botonAgregarAlCarrito"
function Card(props){
    return(
        <>
            <div style={{ border: '2px solid black', padding:'10px', margin:'5px'}}>
                <h2>{props.name}</h2>
                <img>{props.img}</img>
                <p>{props.description}</p>
                <p>{props.precio}</p>
                <ButtonCard/>
            </div>
        </>
    )
}

export default Card