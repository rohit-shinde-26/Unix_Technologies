import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

import { Route,Routes } from 'react-router-dom';
import Reactdev from './pages/Reactdev';
import Graphicde from './pages/Graphicde';
import Motiongra from './pages/Motiongra';
import Datas from './pages/Datas';
// import Navbarmobile from './component/Navbarmobile';

function App() {
  return (
    <div className="App">
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      {/* <Route path='/services' element={<Services/>}/> */}
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/reactdev' element={<Reactdev/>}/>
      <Route path='/graphicde' element={<Graphicde/>}/>
      <Route path='/motiongra' element={<Motiongra/>}/>
      <Route path='/datas' element={<Datas/>}/>



    </Routes>
   
    <Footer />
    </div>
  );
}

export default App;
