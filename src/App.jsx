import { useRef } from "react"
import About from "./components/About"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"

function App() {
  const home = useRef(null);
  const about = useRef(null);
  const project = useRef(null);


  const scrollToTarget = (component) => {
    if(component==='home'){
    // Scroll to the target component or div
    home.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    else if(component==='about'){
      about.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    else if(component==='project'){
     project.current.scrollIntoView({ behavior: 'smooth', block: 'start' });  
    }
  };
 
  return (
    <div className="w-screen">
      <Navbar scrollToTarget={scrollToTarget}/>
      <Home home={home}/>
      <About about={about}/>
      <Projects project={project}/>
      <Footer/>
    </div>
  )
}

export default App
