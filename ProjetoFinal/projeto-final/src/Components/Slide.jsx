import { useState } from 'react';
import { useRef } from 'react';
import '../Components/styles/Slide.css';

const Slide = ({ images }) => {
    const carousel = useRef();
    const [count, setCount] = useState(0);

    const incrementCarousel = delta => {
        if (!carousel.current) return;
        const width = carousel.current.offsetWidth;

        if (count + delta > images.length - 1) {
            setCount(0);
            carousel.current.scrollTo(0, 0);
            return;
        } else if (count + delta < 0) {
            setCount(images.length-1);
            console.log(width, carousel.current.scrollLeft)
            carousel.current.scrollTo(carousel.current.scrollLeft + width * images.length-1 ,
                0);
            return;
        }
        carousel.current.scrollTo(
            carousel.current.scrollLeft + width * delta,
            0
        );
        setCount(c => c + delta);
    };

    return (
        <div className="carousel-container">
            <div
                className="carousel-btn left-btn"
                onClick={() => incrementCarousel(-1)}
            />
            <div
                className="carousel-btn right-btn"
                onClick={() => incrementCarousel(1)}
            />
            <div className="carousel" ref={carousel}>
                {images.map((img, idx) => (
                    <div
                        className="carousel-item"
                        key={`he={value.toString(${idx}-${img.title})}`}
                    >
                        <img
                            src={img.src}
                            alt="img do carousel"
                            height={500}
                            width={700}
                        />
                        <p>{img.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slide;
