import React, { useState } from 'react'
import styled from 'styled-components'
import Container from './container.js'
import Link from '@material-ui/core/Link'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import '../App.css'

// Can use useMemo here, and make it update when the global value "activePage" changes (implemented eventually)
const Navbar = () => {
  const fontColor = 'blue'

  const verticalStyle = {
    width: '17%',
    position: 'fixed',
    height: '92%',
    zIndex: 2,
    margin: '2% 0 2% 2%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'space-between'
  }

  const midFontSize = "h5"
  const midSection = {
    display: 'flex',
    flexDirection: 'column'
  }

  const headerStyle = {
    marginTop: '10%',
    fontFamily: 'Luckiest Guy, cursive',
    fontSize: '2em'
  }

  const footerStyle = {
    marginBottom: '10%'
  }

  const [currentPage, setCurrentPage] = useState('home')
  const onLinkClick = (str) => {
    setCurrentPage(str)
  }

  // TODO:
  // const click = (page) => { setCurrentPage(page); localStorage.setItem('currentPage', page)}
  // Må følgelig initialisere page basert på localStorage.getItem('currentPage')

  // Noe i denne dur? onHover={() => style={scale: 1.1}}
  // Kan evt. endre slik at vi har dette inni: disabled={currentPage === 'home'} (må da også ha underline: 'none')
  return (
    <div style={verticalStyle} className='navbarGradient'>
        <h1 style={headerStyle}> {currentPage.toUpperCase()} </h1>

        <div style={ midSection}>
          { currentPage === 'home' || <Link color='black' component="button" variant={midFontSize} onClick={() => onLinkClick('home')} > Home </Link> }
          { currentPage === 'about' || <Link color='black' component="button" variant={midFontSize} onClick={() => onLinkClick('about')} > About </Link> }
          { currentPage === 'portfolio' || <Link color='black' component="button" variant={midFontSize} onClick={() => onLinkClick('portfolio')} > Portfolio </Link> }
          { currentPage === 'blog' || <Link color='black' component="button" variant={midFontSize} onClick={() => onLinkClick('blog')} > Blog </Link> }
        </div>

        <div style={footerStyle}>
          <Link style={{color: 'black'}} target="_blank" href='https://www.facebook.com/martin.stiles.9'><FacebookIcon/></Link>
          <Link style={{color: 'black', margin: '0 10% 0 10%'}} target="_blank" href='https://www.linkedin.com/in/martin-stiles-39b662171/'> <LinkedInIcon /> </Link>
          <Link style={{color: 'black'}} target="_blank" href='https://www.instagram.com/msstiles/'> <InstagramIcon /> </Link>
        </div>
    </div>
  )
}

export default Navbar
