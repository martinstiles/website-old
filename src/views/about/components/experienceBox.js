import React from 'react'
import Link from '@material-ui/core/Link'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const ExperienceBox = (props) => {
  const isSmallScreen = useMediaQuery('(max-width:800px)') // Boolean that is true if screen is 800px or less

  const titleStyle = {fontSize: isSmallScreen ? '1.5em' : '2em', marginBottom: '2px'}
  const workStyle = {fontSize: isSmallScreen ? '1.2em' : '1.5em', color: `rgb(${[90, 172, 235]})`, textDecoration: 'underline', margin: '4px 0'}
  const textStyle = {fontSize: isSmallScreen ? '1.2em' : '1.4em', margin: '4px 0', fontStyle: 'italic'}
  const keywordStyle = {fontSize: isSmallScreen ? '1.2em' : '1.5em', margin: '12px 0'}
  const descriptionStyle = {fontSize: isSmallScreen ? '1.1em' : '1.2em', marginBottom: '1em', marginTop: '8px'}
  
  return (
    <> 
      <h1 style={titleStyle}> {props.title} </h1>
      <Link target="_blank" color='inherit' variant='inherit' href={props.link}> <h1 style={workStyle}> {props.company} </h1> </Link>
      <p style={textStyle}> {props.duration}</p>
      <p style={keywordStyle}> {props.keywords} </p>
      <p style={descriptionStyle}> {props.description} </p>
    </>
  )
}

export default ExperienceBox