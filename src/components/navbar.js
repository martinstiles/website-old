import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Link from '@material-ui/core/Link'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import './animations/fadeIn.css'

// TODO: Sikker på at det lønner seg å bruke vw på fonts?
// Can use useMemo here, and make it update when the global value "activePage" changes (implemented eventually)
const Navbar = ({setPageInParent}) => {
  const fontColor = '#101010'

  // Different styles for vertical/horizontal navbar
  const verticalStyle = {
    width: '16%',
    height: '92%',
    position: 'fixed',
    zIndex: 2,
    margin: '2% 0 2% 2%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'space-between',
    fontFamily: 'Acme, cursive',
    color: fontColor,
    borderRadius: '15px',
    backgroundColor: `rgb(${[220,220,220,0.95]})`,
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
    marginTop: '3vw',
    fontSize: '3.5em',
    fontWeight: 'bold'
  }
  const horizontalHeader = {
    fontSize: '3em',
    fontWeight: 'bold',
    gridColumn: 1,
    gridRow: 1,
    justifySelf: 'left',
    marginLeft: '3vw',
  }

  const midFontSize = {fontSize: '2.2em', fontWeigh: 'bold'}

  // Footer style
  const footer = {marginBottom: '3vw', justifySelf: 'right', gridColumn: 3, gridRow: 1,}
  const iconStyle = {width: '3vw', height: '3vw'}

  const [currentPage, setCurrentPage] = useState('home')
  const [isHome, setIsHome] = useState(true)
  const onLinkClick = (page) => {
    setCurrentPage(page)
    setIsHome(page === 'home')
    setPageInParent(page)
  }

  // TODO:
  // const click = (page) => { localStorage.setItem('currentPage', page)}
  // Må følgelig initialisere page basert på localStorage.getItem('currentPage')


  // Noe i denne dur? onHover={() => style={transform: `scale($1.1)`}}
  return (
    <div className={'fadeIn'} style={currentPage === 'home' ? verticalStyle : verticalStyle}>
        <h1 style={isHome ? verticalHeader : verticalHeader}> {currentPage.toUpperCase()} </h1>

        <ButtonGroup style={{gridRow: 1, gridColumn: 2, justifySelf: 'center'}} orientation={isHome ? 'vertical' : 'vertical'} color="inherit" size='large'>
          { isHome || <Button style={midFontSize} variant='text' color='inherit' disabled={isHome} onClick={() => onLinkClick('home')}> Home </Button> }
          <Button style={midFontSize} variant='text' color='inherit' disabled={currentPage === 'about'} onClick={() => onLinkClick('about')}> About </Button>
          <Button style={midFontSize} variant='text' color='inherit' disabled={currentPage === 'portfolio'} onClick={() => onLinkClick('portfolio')}> Portfolio </Button>
          <Button style={midFontSize} variant='text' color='inherit' disabled={currentPage === 'blog'} onClick={() => onLinkClick('blog')}> Blog </Button>
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