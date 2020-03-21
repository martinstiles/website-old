import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Link from '@material-ui/core/Link'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import '../animations/fadeIn.css'

const Navbar = ({setPageInParent}) => {
  const [currentPage, setCurrentPage] = useState('home')
  const [isHome, setIsHome] = useState(true)
  const handleClick = (page) => {
    setCurrentPage(page)
    setIsHome(page === 'home')
    setPageInParent(page)
    sessionStorage.setItem('initialMount', 'false')
  }
  // sessionStorage to decide style of components
  if (currentPage === 'home') sessionStorage.setItem('visited', 'false') // for About and Projects
  const initialMount = () => sessionStorage.getItem('initialMount') !== 'false' // for Navbar
  // må lage logikk for navbar bug
  //const refreshable = 
  //sessionStorage.getItem('refreshable')

  const fontColor = `rgb(${[220,220,220,1]})`
  const width = isHome ? '22%' : '16%'
  const leftMargin = isHome ? '39%' : '0%'

  const verticalStyle = {
    width: width,
    height: '100%',
    position: 'fixed',
    zIndex: 2,
    top: '0%',
    left: leftMargin,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'space-between',
    //fontFamily: 'Acme, cursive',
    color: fontColor,
    backgroundColor: `rgb(${[40,40,40,1]})`,
  }
  // FOR PHONE?
  /*
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
  } */

  // Header style
  const verticalHeader = {
    fontSize: currentPage === 'projects' ? `calc(${0.5}em + ${2}vw)` : `calc(${1.5}em + ${1.5}vw)`,
    fontWeight: 'bold',
    margin: '3vw 5% 3% 5%',
    height: '10%'
  }

  const midFontSize = {fontSize: `calc(${1}em + ${1}vw)`}

  // Footer style
  const footer = {marginBottom: '3vw', justifySelf: 'right'}
  const iconStyle = {width: `calc(${0.5}em + ${2}vw)`, height: `calc(${0.5}em + ${2}vw)`}

  const test = {color: 'white', backgroundColor: 'white'}

  return (
    <div className={initialMount() ? 'fadeIn' : (isHome ? 'moveRight' : 'moveLeft')} style={verticalStyle}>
        { 
          <h1 style={verticalHeader}> { isHome ? 'WELCOME' : currentPage.toUpperCase()} </h1>
        }

        <ButtonGroup orientation={'vertical'} color="inherit" size='large'>
          { isHome || <Button style={midFontSize} variant='text' color='inherit' disabled={isHome} onClick={() => handleClick('home')}> Home </Button> }
          { currentPage === 'about' || <Button style={midFontSize} classes={{disabled: test}} variant='text' color='inherit' disabled={currentPage === 'about'} onClick={() => handleClick('about')}> About </Button>}
          { currentPage === 'projects' || <Button style={midFontSize} variant='text' color='inherit' disabled={currentPage === 'projects'} onClick={() => handleClick('projects')}> projects </Button>}
          { currentPage === 'other' || <Button style={midFontSize} variant='text' color='inherit' disabled={currentPage === 'blog'} onClick={() => handleClick('blog')}> Other </Button>}
        </ButtonGroup>

        <div style={footer}>
          <Link style={{color: fontColor}} target='_blank' href='https://www.facebook.com/martin.stiles.9'> <FacebookIcon style={iconStyle}/> </Link>
          <Link style={{color: fontColor, margin: '0 10% 0 10%'}} target='_blank' href='https://www.linkedin.com/in/martin-stiles-39b662171/'> <LinkedInIcon style={iconStyle} /> </Link>
          <Link style={{color: fontColor}} target='_blank' href='https://www.instagram.com/msstiles/'> <InstagramIcon style={iconStyle}/> </Link>
        </div>
    </div>
  )
}

export default Navbar

// TODO!: ADD BUTTONS FOR SWITCH BETWEEN LIGHT/DARK MODE
// TODO: MAKE NAVBAR WITH FLEX OR SOMETHING: THIS MAKES THE BUTTONS MOVE BECAUSE OF THE DIFFERENCE IN SIZE

/*
AUTHORS NOTE
Choice: keep track of several boolean fro each 'page' or run check operations every render -> Currently: checks every render
*/