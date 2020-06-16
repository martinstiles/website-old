import React, { useState } from 'react'
import Link from '@material-ui/core/Link'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import '../animations/fadeIn.css'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import ButtonGroupBig from './about/components/buttonGroupBig'
import ButtonGroupSmall from './about/components/buttonGroupSmall'

const Navbar = ({setPageInParent}) => {
  const [currentPage, setCurrentPage] = useState('home')
  const [isHome, setIsHome] = useState(true)
  const handleClick = (page) => {
    setCurrentPage(page)
    setIsHome(page === 'home')
    setPageInParent(page)
    sessionStorage.setItem('initialMount', 'false')
  }
  // sessionStorage to check if it is the initial mount
  if (isHome) sessionStorage.setItem('visited', 'false') // for About and Projects
  const initialMount = () => sessionStorage.getItem('initialMount') !== 'false' // for Navbar

  // Boolean that is true if screen is 800px or less
  const isSmallScreen = useMediaQuery('(max-width:800px)')

  const fontColor = `rgb(${[230,230,230,1]})`
  const width = isHome ? '22%' : '16%'
  const leftMarginVertical = isHome ? '39%' : '0%'
  const verticalStyle = {
    width,
    height: '100%',
    position: 'fixed',
    zIndex: 2,
    top: '0%',
    left: leftMarginVertical,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'space-between',
    color: fontColor,
    backgroundColor: `rgb(${[40,40,40,1]})`,
  }

  // FOR PHONES
  const height = isHome ? '100%' : '10%'
  const opacity = isHome ? 0.8 : 1
  const horizontalStyle = {
    width: '100%',
    height,
    position: 'fixed',
    zIndex: 2,
    display: 'flex',
    flexDirection: isHome ? 'column' : 'row',
    textAlign: 'center',
    verticalAlign: 'bottom',
    justifyContent: 'space-between',
    color: fontColor,
    backgroundColor: `rgb(${[40,40,40,opacity]})`,
    borderBottom: `1px solid rgb(${[220,220,220,1]})`
  }

  // Header style
  const header = {
    // Own size for "projects" as the word is long af
    fontSize: isSmallScreen ? '3em' : currentPage === 'projects' ? `calc(${0.5}em + ${2}vw)` : `calc(${1.5}em + ${1.5}vw)`,
    fontWeight: 'bold',
    marginTop: isSmallScreen ? '8%' : '3vw',
  }
  // TODO: FIX THIS!!! MAKE IT ALWAYS IN THE MIDDLE (VERTICALLY)
  const phoneHeader = {fontSize: '2em', marginTop: '4.5vw', marginLeft: '5%'}


  // Footer style
  const footer = {marginBottom: isSmallScreen ? '8%' : '3vw', justifySelf: 'right'}
  const iconStyle = isSmallScreen ?
    {width: '2em', height: '2em'} :
    {width: `calc(${0.5}em + ${2}vw)`, height: `calc(${0.5}em + ${2}vw)`}

  return (
    <div className={isSmallScreen ? '' : initialMount() ? 'fadeIn' : (isHome ? 'moveRight' : 'moveLeft')} style={isSmallScreen ? horizontalStyle : verticalStyle}>
        {
          (isSmallScreen && !isHome)
          ?
          <h1 style={phoneHeader}> {currentPage.toUpperCase()} </h1>
          :
          <h1 style={header}> { isHome ? 'WELCOME' : currentPage.toUpperCase()} </h1>
        }

        {
          (isSmallScreen && !isHome)
          ?
          <ButtonGroupSmall currentPage={currentPage} handleClick={handleClick} />
          :
          <ButtonGroupBig isSmallScreen={isSmallScreen} isHome={isHome} currentPage={currentPage} handleClick={handleClick}/>
        }

        {
          (isSmallScreen && !isHome) ||
          <div style={footer}>
            <Link style={{color: fontColor}} target='_blank' href='https://www.facebook.com/martin.stiles.9'> <FacebookIcon style={iconStyle}/> </Link>
            <Link style={{color: fontColor, margin: '0 10% 0 10%'}} target='_blank' href='https://www.linkedin.com/in/martin-stiles-39b662171/'> <LinkedInIcon style={iconStyle} /> </Link>
            <Link style={{color: fontColor}} target='_blank' href='https://www.instagram.com/msstiles/'> <InstagramIcon style={iconStyle}/> </Link>
          </div>
        }
    </div>
  )
}

export default Navbar

// TODO!: ADD BUTTONS FOR SWITCH BETWEEN LIGHT/DARK MODE

/*
AUTHORS NOTE
Choice: keep track of several boolean fro each 'page' or run check operations every render -> Currently: checks every render
*/