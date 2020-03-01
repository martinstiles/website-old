import React, {useState} from 'react';
import './App.css';
import Navbar from './components/navbar'
import Home from './pages/home.js'
import About from './pages/about.js'
import Projects from './pages/projects'
import Background from './media/Background.JPG'

const fontTypeContext = React.createContext('em');

//TODO: Ha en if (ternary) som gir forskjellig main/navbar?
function App() {
  // background: '#4C6663'
  const style = {
    alignItems: 'center',
    //backgroundImage: `url(${Background})`,
    width: '100%',
    height: '100%'
  }

  // TODO: PROBLEM MED ABSOLUTE IMAGE?
  const imageStyle = {
    width: '100%',
    height: '100%',
    opacity: '1',
    zIndex: -1,
    position: 'absolute',
  }

  // Poor solution? but it works for now
  const [currentPage, setCurrentPage] = useState('home')
  const getPageFromChild = (page) => {
    setCurrentPage(page)
  }

  return (
    <div style={style} className='app'>
      <div>
        <img style={imageStyle} src={Background} alt='' />
      </div>
      <Navbar setPageInParent={getPageFromChild}/>
      { currentPage === 'home' && <Home /> }
      { currentPage === 'about' && <About />}
      { currentPage === 'projects' && <Projects />}
    </div>
  );
}
// <div><Home /></div>

function BackgroundColor() {
  return(
    <div style={{color: `rgb(${[10,10,10,0.7]})`, width: '100%', height: '100%', zIndex: 100}}>

    </div>
  )
}

export default App;
