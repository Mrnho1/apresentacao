import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React from 'react';
import i1 from './img/logo_comfundo.png'
import i2 from './img/lavar.jpg'
import i3 from './img/fogao.jpg'
// import i4 from './img/lavadeira.jpg'
// import i5 from './img/micro.jpg'
import './styles/Home.css';
import { Carousel } from 'react-responsive-carousel';

function Exemplo() {
    return (
        <div>
            <Carousel>
                <div>
                    <img src={i1} alt='img1' height={60} />
                </div>
                <div>
                    <img src={i2} alt='img2' height={60} />
                </div>
                <div>
                    <img src={i3} alt='img3' height={60} />
                </div>
            </Carousel>
        </div>
    );
}

export default Exemplo;
