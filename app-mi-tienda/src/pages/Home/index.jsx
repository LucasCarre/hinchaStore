import Navbar from "../../components/navbar/navbar";
import ItemListConteiner from "../../components/items/itemListConteiner";

const Home = ()=>{
    return(
        <>
        <div className="App">
            <header className="App-header">
                <Navbar/>
            </header>
        </div>
        <div className='main-container'>
        <ItemListConteiner/>
        </div>
    </>
    )
}

export default Home