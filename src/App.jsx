import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'
import DarkModeToggle from './components/DarkModeToggle'
import ScrollToTop from './components/ScrollToTop'
import FloatingContact from './components/FloatingContact'

function App() {

  return (
    <>
      <div>
        <Sidenav />
        <Main />
      </div>
      <div className='bg-gray-600 dark:bg-gray-700'>
        <Work />
        <About />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </div>
      <DarkModeToggle />
      <ScrollToTop />
      <FloatingContact />
    </>
  )
}

export default App
