import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <div>
        <Sidenav />
        <Main />
      </div>
      <div className='bg-gray-600'>
        <Work />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </>
  )
}

export default App
