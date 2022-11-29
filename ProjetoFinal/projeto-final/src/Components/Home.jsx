import Navbar from './Navbar';
// import Carousel from './Carousel'
import data from '../Components/data'
import Slide from './Slide';
import './styles/Slide.css'
import './styles/CorpoHome.css'
import Card from './Card';
import Footer from './Footer';

function Home() {
    return (
        <div>
            <div>
            <Navbar />
            <div className='alinhar'>
                <Slide images={data}/>
            </div>
            </div>
            <p className='space'> </p>
            <h1 className='spaceW'>Soluções Personalizadas para Eletrodomésticos</h1>
            <section>
                <Card/>
            </section>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default Home;
