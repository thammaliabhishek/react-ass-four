import Navbars from './Components/Navbar';
import Home from './Components/Home';
import Students from './Components/Students';
import Contact from './Components/Contact';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './index.css';

function App() {
  return (
    <BrowserRouter>
      <Navbars />
      <Routes>
        <Route path='/Home' element={ < Home /> } />
        <Route path='/Students' element={ < Students /> } />
        <Route path='/Contact' element={ < Contact /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;