

import dataContact from './dataContact'
import './styles/Card.css'

function CardC(){
    
    return(
        <div>
            <section>
                <div className="container">
                    <h2>Contato</h2>
                    <div className="cards">
                       {
                        dataContact.map((card,i) => (
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

export default CardC