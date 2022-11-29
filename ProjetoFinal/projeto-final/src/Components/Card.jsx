import cards from "./PropertyDetails"
import './styles/Card.css'


function Card(){
    
    return(
        <div>
            <section>
                <div className="container">
                    <h2>Serviços</h2>
                    <div className="cards">
                       {
                        cards.map((card,i) => (
                        <div className="card" key={i}>
                            <h3>{card.title}</h3>
                            <p>{card.text}</p>
                            <button className="btn">Mais</button>
                        </div>
                        ))
                    }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Card