import React, { useState } from 'react'
import Container from './container.js'
import Link from '@material-ui/core/Link'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'

// Can use useMemo here, and make it update when the global value "activePage" changes (implemented eventually)
const Navbar = () => {
  const verticalStyle = {
    width: '15%',
    backgroundColor: '#4C6663',
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

  // Unødvendig?
  const midSection = {
    display: 'flex',
    flexDirection: 'column'
  }

  const headerStyle = {
    marginTop: '5%',
    textTransform: 'uppercase',
    fontFamily: 'Luckiest Guy, cursive',
    fontSize: '2em'
  }

  const [currentPage, setCurrentPage] = useState('home')

  // TODO:
  // const click = (page) => { setCurrentPage(page); localStorage.setItem('currentPage', page)}
  // Må følgelig initialisere page basert på localStorage.getItem('currentPage')

  // Noe i denne dur? onHover={() => style={scale: 1.1}}
  return (
    <div style={verticalStyle}>
        <h1 style={headerStyle}> Home </h1>
        <div style={ midSection}>
          { currentPage === 'home' || <Link underline={'none'} color='black' component="button" variant={midFontSize} onClick={() => { console.info("I'm a button.") }} > Home </Link> }
          { currentPage === 'about' || <Link color='black' component="button" variant={midFontSize} onClick={() => { console.info("I'm a button.") }} > About </Link> }
          { currentPage === 'portfolio' || <Link color='black' component="button" variant={midFontSize} onClick={() => { console.info("I'm a button.") }} > Portfolio </Link> }
          { currentPage === 'blog' || <Link color='black' component="button" variant={midFontSize} onClick={() => { console.info("I'm a button.") }} > Blog </Link> }
        </div>
        <div style={{color: 'black', marginBottom: '1em'}}>
          <Link style={{color: 'black'}} target="_blank" href='https://www.facebook.com/martin.stiles.9'><FacebookIcon/></Link>
          <Link style={{color: 'black', margin: '0 10% 0 10%'}} target="_blank" href='https://www.linkedin.com/in/martin-stiles-39b662171/'> <LinkedInIcon /> </Link>
          <Link style={{color: 'black'}} target="_blank" href='https://www.instagram.com/msstiles/'> <InstagramIcon /> </Link>
        </div>
    </div>
  )
}

export default Navbar
