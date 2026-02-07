import Navbar from './components/navbar.jsx'
import Herosection from './components/herosection.jsx'
import About from './components/about.jsx'
import Skills from './components/skills.jsx'
import Experience from './components/experience.jsx'
import Projects from './components/projects.jsx'
import Contact from './components/contact.jsx'
function App(){
  return(
    <>
    <Navbar/>
    <Herosection/>
    <About />
    <Skills/>
    <Experience />
    <Projects />
    <Contact />
    </>
  )
}
export default App;