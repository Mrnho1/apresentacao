import Navbar from "./Navbar"
import dataCompany from "./dataCompany"
import Slide from "./Slide"
import Footer from "./Footer"
import './styles/CorpoHome.css'

function Company(){


    return(
        <>
        <div>
            <Navbar />
            <div className='alinhar'>
                <Slide images={dataCompany}/>
            </div>
            </div>
            <p className=' space '> </p>
            <h1 className='spaceW'>Conheça a nossa empresa</h1>
        
            <br/>
            <p>Tudo começou quando eu era criança e tive curiosidades nesse setor, e desta maneira comecei a desmontar os aparelhos de casa, e conforme fui crescendo despertou meu interesse na área, e foi onde trabalhei por 10 anos em uma empresa de assistência técnica e iniciei os estudos para me qualificar no objetivo de desenvolver as habilidades necessárias para poder prestar serviços nessa especialidade. Então foi em 2007, que decidi empreender e há 15 anos que estou trabalhando nesse setor e me dedicando completamente aos meus clientes.</p>
            <br/>
            <hr/>
            <p className="spaceW"></p>
            <h2>Missão</h2>
            <br/>
            <p>Comercializar e prestar serviços de assistência técnica em equipamentos eletrodomésticos de qualidade diferenciada pela robustez e versatilidade, gerando valores e benefícios para clientes e sociedade. Também temos um compromisso firme com a sustentabilidade, melhorando a eficácia de seu aparelho para economizar custos e melhorar o tempo de vida de seu aparelho eletrodoméstico.</p>
            <br/>
            <hr/>
            <p className="spaceW"></p>
            <h2>Visão</h2>
            <p>Ao empreender mostramos o reconhecimento no ramo de assistência técnica em eletrodomésticos e mostrando aos possíveis consumidores o nosso serviço de qualidade que cada vez mais estão melhorando e sendo requisitados no mercado de conserto de eletrodomésticos.</p>
            <br/>
            <hr/>
            <p className="spaceW"></p>
            <h2>Valores</h2>
            <ul className="container">
                    <li>Disciplina</li>
                    <li>Crescimento profissional</li>
                    <li>Dedicação ao trabalho</li>
                    <li>Qualidade em tudo que fazemos</li>
                    <li>Satisfação do cliente</li> 
                    <li>Transparência</li>
                    <li>Honestidade</li> 
                    <li>Integridade</li>
                    <li>Respeito às pessoas</li>
                </ul>
            <br/>
            <hr/>
            {/* <p className="spaceW"></p> */}


            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default Company