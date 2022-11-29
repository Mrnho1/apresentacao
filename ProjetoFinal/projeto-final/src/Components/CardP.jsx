import cards from "./PDetails"
import cards2 from "./Pdetails2"
import cards3 from "./Pdetails3"
import './styles/Card.css'

function CardP(){
    
    return(
        <div>
            <section>
                <div className="container">
                    <h2>Refrigeradores</h2>
                    <div className="cards">
                       {
                        cards.map((card,i) => (
                        <div className="card" key={i}>
                            <h3>{card.title}</h3>
                            <p>{card.text}</p>
                            <button className="btn">Orçamento</button>
                        </div>
                        ))
                    }
                    </div>
                </div>
                <div className="container">
                    <h2>Máquina</h2>
                    <div className="cards">
                       {
                        cards2.map((card,i) => (
                        <div className="card" key={i}>
                            <h3>{card.title}</h3>
                            <p>{card.text}</p>
                            <button className="btn">Orçamento</button>
                        </div>
                        ))
                    }
                    </div>
                </div> 
                <div className="container">
                    <h2>Forno Elétrico</h2>
                    <div className="cards">
                       {
                        cards3.map((card,i) => (
                        <div className="card" key={i}>
                            <h3>{card.title}</h3>
                            <p>{card.text}</p>
                            <button className="btn">Orçamento</button>
                        </div>
                        ))
                    }
                    </div>
                </div>  
            </section>
        </div>
    )
}

export default CardP