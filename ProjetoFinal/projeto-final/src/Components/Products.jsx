import Navbar from "./Navbar"
import Slide from "./Slide"
import data from "./dataProdutos"
import Footer from "./Footer"
import CardP from "./CardP"

function Products(){
    return(
        <div>
            <div>
            <Navbar />
            <div className='alinhar'>
                <Slide images={data}/>
            </div>
            </div>
            <p className='space'> </p>
            <section>
                <CardP/>
            </section>
            <p className='spaceW'> </p>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default Products