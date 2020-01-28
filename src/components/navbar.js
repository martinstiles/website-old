import React from 'react'
import Container from './container.js'
import Link from '@material-ui/core/Link'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'

// Can use useMemo here, and make it update when the global value "activePage" changes (implemented eventually)
const Navbar = () => {
  const verticalStyle = {
    listStyleType: 'none',
    width: '15%',
    backgroundColor: '#4C6663',
    position: 'fixed',
    height: '94%',
    zIndex: 2,
    margin: '2% 0 2% 2%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
  }

  const midFontSize = "h5"

  // Unødvendig?
  const footerStyle = {
    display: 'flex',
    flexDirection: 'row',
  }

  const headerStyle = {
    marginTop: '5%',
    textTransform: 'uppercase',
    fontFamily: 'Luckiest Guy, cursive',
    fontSize: '2em'
  }

  // Noe i denne dur? onHover={() => style={scale: 1.1}}
  return (
    <div style={verticalStyle}>
        <h1 style={headerStyle}> Home </h1>

        <Link style={{marginTop: '60%'}} onHover={{transform: 'scale(2)'}} disabled={true} underline={'none'} color='black' component="button" variant={midFontSize} onClick={() => { console.info("I'm a button.") }} > Home </Link>
        <Link color='black' component="button" variant={midFontSize} onClick={() => { console.info("I'm a button.") }} > About </Link>
        <Link color='black' component="button" variant={midFontSize} onClick={() => { console.info("I'm a button.") }} > Portfolio </Link>
        <Link color='black' component="button" variant={midFontSize} onClick={() => { console.info("I'm a button.") }} > Blog </Link>
        <div style={{marginTop: '80%'}}>
          <Link target="_blank" color='black' href='https://www.google.com'><FacebookIcon/></Link>
          <LinkedInIcon style={{margin: '0 3% 0 3%'}}/>
          <InstagramIcon />
        </div>
    </div>
  )
}

export default Navbar
