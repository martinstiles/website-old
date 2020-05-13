import React from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

const ButtonGroupBig = (props) => {
  const isHome = props.isHome
  const isAbout = props.currentPage === 'about'
  const isProjects = props.currentPage === 'projects'

  const button = (props.isSmallScreen) ? 
    {fontSize: '2em'} :
    {fontSize: `calc(${1}em + ${1}vw)`}
  const disabledButton = (props.isSmallScreen) ? 
    {fontSize: '2em'} :
    {fontSize: `calc(${1}em + ${1}vw)`, backgroundColor: `rgb(${[220,220,220,0.2]})`}

  return (
    <>
    <ButtonGroup orientation={'vertical'} size='large'>
      {
        (props.isSmallScreen && isHome)
        ||
        <Button variant='text' color='inherit' style={isHome ? disabledButton : button}
          disabled={isHome} onClick={() => props.handleClick('home')}> Home </Button> 
      }
      <Button variant='text' color='inherit' style={isAbout ? disabledButton : button}
        disabled={isAbout} onClick={() => props.handleClick('about')}> About </Button>
      <Button variant='text' color='inherit' style={isProjects ? disabledButton : button}
        disabled={isProjects} onClick={() => props.handleClick('projects')}> Projects </Button>
    </ButtonGroup>
    </>
  )
}

export default ButtonGroupBig