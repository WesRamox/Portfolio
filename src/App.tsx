import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Navbar/Header'
import About from './pages/About/About'
import Experience from './pages/Experience/Experience'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import Skills from './pages/Skills/Skills'

function App() {

  return (
    <>
      <Header />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </>

  )
}

export default App
