import "./Navbar.css";
import {Component} from 'react'
import ApenasOLogo from './ApenasOLogo.png'

class Navbar extends Component{

    state={clicked: false};
    handClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    render(){
    return(
        <header>
            <nav>
                <a href="/"><img src={ApenasOLogo} height={48.5} alt='logo' /></a>
                <div>
                    <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                        <li><a className="active"  href="/">Home</a></li>
                        <li><a href="/Company">Sobre nós</a></li>
                        <li><a href="/Contact">Contato</a></li>
                        <li><a href="/Products">Produtos</a></li>
                    </ul>
                </div>
                <div id='mobile' onClick={this.handClick}>
                    <i id='bar' className={this.state.clicked ? 'fas fa-times' : ' fas fa-bars'}></i>
                </div>
            </nav>
        </header>
    )
}
}
export default Navbar