import logo from './logo.svg';
import './App.css';
import Name from './Components/Name';
import Aboutme from './Components/Aboutme';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Image from './Components/Image';
import Skills from './Components/Skills';

function App() {
  return (
    <div className='container' >
    <Name/>

    <div  className="d-flex justify-content-around " style={{marginTop:80}}>
      {/* Section 1 */}
      <section className="w-50">
        <Aboutme />
        <Education />
        <Experience/>
      </section>
      {/* Section 2 */}
      <section className='w-50'>
        <Image/>
        <Contact/>
        <Skills/>
        
      </section>
    </div>
  </div>
  );
}

export default App;
