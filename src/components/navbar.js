import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Link from '@material-ui/core/Link'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import '../animations/fadeIn.css'

// TODO: Sikker på at det lønner seg å bruke vw på fonts?
// Can use useMemo here, and make it update when the global value "activePage" changes (implemented eventually)
const Navbar = ({setPageInParent}) => {
  const [currentPage, setCurrentPage] = useState('home')
  const [isHome, setIsHome] = useState(true)
  const handleClick = (page) => {
    setCurrentPage(page)
    setIsHome(page === 'home')
    setPageInParent(page)
    sessionStorage.setItem('init', 'false')
  }
  // sessionStorage to decide style of components
  if (currentPage === 'home') sessionStorage.setItem('visited', 'false')
  const initialMount = () => {
		return sessionStorage.getItem('init') !== 'false'
	}

  const fontColor = '#101010'
  //const width = isHome ? '30%' : '16%'
  //const leftMargin = isHome ? '35%' : '2%'
  const width = isHome ? '30%' : '16%'
  const leftMargin = isHome ? '35%' : '2%'

  // Different styles for vertical/horizontal navbar
  const verticalStyle = {
    width: width,
    height: '92%',
    position: 'fixed',
    zIndex: 2,
    top: '4%',
    left: leftMargin,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'space-between',
    fontFamily: 'Acme, cursive',
    color: fontColor,
    borderRadius: '15px',
    backgroundColor: `rgb(${[220,220,220,0.97]})`,
  }
  // FOR PHONE?
  const horizontalStyle = {
    width: '96%',
    height: '10%',
    position: 'fixed',
    zIndex: 2,
    margin: '2% 2% 0 2%',
    display: 'grid',
    gridTemplateColumns: '60% 40%',
    gridTemplateRows: '100%', 
    fontFamily: 'Acme, cursive',
    color: fontColor,
    borderRadius: '15px',
    backgroundColor: `rgb(${[220,220,220,0.95]})`,
  }

  // Header style
  const verticalHeader = {
    fontSize: `calc(${1.5}em + ${1.5}vw)`,
    fontWeight: 'bold',
    margin: '3vw 5% 3% 5%'
  }

  const midFontSize = {fontSize: `calc(${1}em + ${1}vw)`, fontWeigh: 'bold'}

  // Footer style
  const footer = {marginBottom: '3vw', justifySelf: 'right'}
  const iconStyle = {width: '3vw', height: '3vw'}

  // TODO!: ADD BUTTONS FOR SWITCH BETWEEN LIGHT/DARK MODE
  // <p style={midFontSize}> Web developer. Tech enthusiast. Eater of tacos.</p>
  // initialMount() ? 'fadeIn' : (isHome ? 'moveRight' : 'moveLeft')
  console.log(isHome)
  return (
    <div className={initialMount() ? 'fadeIn' : (isHome ? 'moveRight' : 'moveLeft')} style={verticalStyle}>
        { isHome ?
          <div>
          <h1 style={verticalHeader}> MARTIN STILES </h1>
          <p style={{fontSize: `calc(${0.7}em + ${0.7}vw)`, fontWeigh: 'cursive', margin: '0 5%'}}>
            Web developer. Tech enthusiast. Eater of tacos
          </p>
          </div>
            :
          <h1 style={verticalHeader}> { currentPage.toUpperCase()} </h1>
        }

        <ButtonGroup orientation={'vertical'} color="inherit" size='large'>
          { isHome || <Button style={midFontSize} variant='text' color='inherit' disabled={isHome} onClick={() => handleClick('home')}> Home </Button> }
          <Button style={midFontSize} variant='text' color='inherit' disabled={currentPage === 'about'} onClick={() => handleClick('about')}> About </Button>
          <Button style={midFontSize} variant='text' color='inherit' disabled={currentPage === 'projects'} onClick={() => handleClick('projects')}> projects </Button>
          <Button style={midFontSize} variant='text' color='inherit' disabled={currentPage === 'blog'} onClick={() => handleClick('blog')}> Blog </Button>
        </ButtonGroup>

        <div style={footer}>
          <Link style={{color: fontColor}} target="_blank" href='https://www.facebook.com/martin.stiles.9'> <FacebookIcon style={iconStyle}/> </Link>
          <Link style={{color: fontColor, margin: '0 10% 0 10%'}} target="_blank" href='https://www.linkedin.com/in/martin-stiles-39b662171/'> <LinkedInIcon style={iconStyle} /> </Link>
          <Link style={{color: fontColor}} target="_blank" href='https://www.instagram.com/msstiles/'> <InstagramIcon style={iconStyle}/> </Link>
        </div>
    </div>
  )
}

export default Navbar

/*
AUTHORS NOTE
Choice: keep track of several boolean fro each 'page' or run check operations every render -> Currently: checks every render
*/