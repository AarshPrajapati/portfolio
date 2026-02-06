import { useRef, lazy, Suspense } from "react"
import LoadingSpinner from "./components/LoadingSpinner"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
const About = lazy(() => import('./components/About'))
const Projects = lazy(() => import('./components/Projects'))
const Footer = lazy(() => import('./components/Footer'))
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from "@vercel/analytics/react"

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
      <Suspense fallback={<LoadingSpinner />}>
        <About about={about}/>
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Projects project={project}/>
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Footer/>
      </Suspense>
      <Toaster />
      <Analytics/>
    </div>
  )
}

export default App
