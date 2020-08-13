import React, {useState} from 'react';
import Navbar from './views/navbar'
import About from './views/about.js'
import Projects from './views/projects'
import Background from './media/Background.JPG'
import Tree from './media/tree.jpg'
import useMediaQuery from '@material-ui/core/useMediaQuery'

//TODO: Ha en if (ternary) som gir forskjellig main/navbar? --> JA, for mobil. Det meste må lages på nytt for mobil
function App() {
  const style = {
    alignItems: 'center',
    width: '100%',
    height: '100%',
  }

  const imageStyle = {
    width: '100%',
    height: '100%',
    opacity: '1',
    zIndex: -1,
    position: 'absolute',
  }

  const [currentPage, setCurrentPage] = useState('home')

  // Boolean that is true if screen is 800px or less
  const isSmallScreen = useMediaQuery('(max-width:800px)')

  return (
    <div style={style} className='app'>
      {
        <div>
          <img style={imageStyle} src={isSmallScreen ? Tree : Background} alt='' />
        </div>
      }
      <Navbar setPageInParent={setCurrentPage}/>
      { currentPage === 'about' && <About />}
      { currentPage === 'projects' && <Projects />}
    </div>
  );
}

/*
<div>
  <img style={imageStyle} src={Background} alt='' />
</div>
<Navbar setPageInParent={getPageFromChild}/>
*/

export default App;
