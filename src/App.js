
import './App.scss';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Resume from './containers/resume';
import Navbar from './components/navBar';
import {Routes,Route,useLocation} from 'react-router-dom'


import ParticlesComponent from './utils/particles';
function App() {
  
const location= useLocation();
 const renderParticleSim = location.pathname ==='/nimbusart'; 
  return (
    
    <div className="App">

      {
        renderParticleSim &&
        <ParticlesComponent id="particles" />
      }

      
      <Navbar/>


      <div className='App__main-page-content'>


      <Routes>
        <Route index path='/nimbusart' element={<Home/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/contact_me' element={<Contact/>}/>
        <Route  path='/resume' element={<Resume/>}/>
      </Routes>


      </div>

    </div>
  );
}

export default App;
