import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import About from './About1';
import Contact from './contact1';
import Navbarreact from './Navv';


function Navrout(){
    return(
        <BrowserRouter>
      <div> 
      <Navbarreact/>
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
    );
}

export default Navrout;