import Navbar from "./Navbar"
import Slide from "./Slide"
import dataC from "./dataC"
import Footer from "./Footer"
import './styles/CorpoHome.css'
import CardC from "./CardC"

function Contact(){
    return(
        <>
        <div>
            <Navbar />
            <div className='alinhar'>
                <Slide images={dataC}/>
            </div>
            </div>
            <p className='space'> </p>
                <CardC/>
            <p className='spaceW'> </p>
                <Footer/>
        </>
    )
}

export default Contact