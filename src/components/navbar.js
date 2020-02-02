import React, { useState } from 'react'
import Container from './container.js'
import Link from '@material-ui/core/Link'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import '../App.css'

// Can use useMemo here, and make it update when the global value "activePage" changes (implemented eventually)
const Navbar = () => {
  // Different styles for vertical/horizontal navbar
  const verticalStyle = {
    width: '17%',
    height: '92%',
    position: 'fixed',
    zIndex: 2,
    margin: '2% 0 2% 2%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'space-between',
    fontFamily: 'Raleway, cursive'
  }
  const horizontalStyle = {
    width: '96%',
    height: '10%',
    position: 'fixed',
    zIndex: 2,
    margin: '2% 2% 0 2%',
    display: 'grid',
    gridTemplateColumns: '60% 40%',
    fontFamily: 'Raleway, cursive'
  }

  // Header style
  const verticalHeader = {
    marginTop: '3vw',
    fontSize: '2.5vw',
    fontWeight: 'bold'
  }
  const horizontalHeader = {
    fontSize: '2.5vw',
    fontWeight: 'bold',
    gridColumn: 1,
    justifySelf: 'left',
    marginLeft: '8vw'
  }

  // Mid section style
  const midFontSize = "h4"
  const verticalMidSection = {
    display: 'flex',
    flexDirection: 'column'
  }
  const horizonalMidSection = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gridColumn: 2,
    justifySelf: 'stretch',
    marginRight: '10vw'
  }

  // Footer style
  const verticalFooter = {
    marginBottom: '3vw'
  }

  const [currentPage, setCurrentPage] = useState('home')
  const [isHome, setIsHome] = useState(true)
  const onLinkClick = (page) => {
    setCurrentPage(page)
    setIsHome(page === 'home')
  }

  // TODO:
  // const click = (page) => { localStorage.setItem('currentPage', page)}
  // Må følgelig initialisere page basert på localStorage.getItem('currentPage')

  // TODO:
  // Create a component for Link (customLink?) which gathers all common code (everything except onClick). Use a prop (called type) to specify page type

  // Noe i denne dur? onHover={() => style={scale: 1.1}}
  return (
    <div style={currentPage === 'home' ? verticalStyle : horizontalStyle} className='navbarGradient'>
        <h1 style={isHome ? verticalHeader : horizontalHeader}> {currentPage.toUpperCase()} </h1>

        <div style={isHome ? verticalMidSection : horizonalMidSection}>
          <Link color='black' component="button" variant={midFontSize} onClick={() => onLinkClick('home')} disabled={currentPage === 'home'} underline={currentPage === 'home' ? 'none' : 'hover'} > Home </Link>
          <Link color='black' component="button" variant={midFontSize} onClick={() => onLinkClick('about')} disabled={currentPage === 'about'} underline={currentPage === 'about' ? 'none' : 'hover'} > About </Link>
          <Link color='black' component="button" variant={midFontSize} onClick={() => onLinkClick('portfolio')} disabled={currentPage === 'portfolio'} underline={currentPage === 'portfolio' ? 'none' : 'hover'}> Portfolio </Link>
          <Link color='black' component="button" variant={midFontSize} onClick={() => onLinkClick('blog')} disabled={currentPage === 'blog'} underline={currentPage === 'blog' ? 'none' : 'hover'}> Blog </Link>
        </div>

        { isHome &&
          <div style={verticalFooter}>
            <Link style={{color: 'black', fontSize: '50px'}} target="_blank" href='https://www.facebook.com/martin.stiles.9'><FacebookIcon/></Link>
            <Link style={{color: 'black', margin: '0 10% 0 10%'}} target="_blank" href='https://www.linkedin.com/in/martin-stiles-39b662171/'> <LinkedInIcon /> </Link>
            <Link style={{color: 'black'}} target="_blank" href='https://www.instagram.com/msstiles/'> <InstagramIcon /> </Link>
          </div>
        }
    </div>
  )
}

export default Navbar

/*
AUTHORS NOTE
Choice: keep track of several boolean fro each 'page' or run check operations every render -> Currently: checks every render
*/