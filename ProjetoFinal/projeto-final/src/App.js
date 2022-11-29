import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Company from './Components/Company';
import Contact from './Components/Contact';
import Products from './Components/Products';

export default function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/Company' element={<Company/>}/>
                    <Route path='/Contact' element={<Contact/>}/>
                    <Route path='/Products' element={<Products/>}/>
                </Routes>
            </Router>

        </div>
    );
}
