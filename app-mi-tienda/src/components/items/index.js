import ButtonCard from "./botonAgregarAlCarrito"
import "../../App.css";

function Card(props){
    return(
        <>
            <div className='card'>
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