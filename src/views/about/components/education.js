import React from 'react'
import InfoSection from './infoSection'
import Link from '@material-ui/core/Link'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const Eduaction = () => {
  const isSmallScreen = useMediaQuery('(max-width:800px)') // Boolean that is true if screen is 800px or less

  const titleStyle = {fontSize: isSmallScreen ? '1.5em' : '2em', marginBottom: '2px'}
  const workStyle = {fontSize: isSmallScreen ? '1.2em' : '1.6em', color: `rgb(${[90, 172, 235]})`, textDecoration: 'underline', margin: '4px 0'}
  const textStyle = {fontSize: isSmallScreen ? '1.2em' : '1.4em', margin: '4px 0'}
  const descriptionStyle = {fontSize: isSmallScreen ? '1.1em' : '1.2em', marginBottom: '1em', marginTop: '8px'}
  
  return (
    <InfoSection header='EDUCATION'>
      <h1 style={titleStyle}> M.Sc. student in Computer Science </h1>
      <Link target="_blank" color='inherit' variant='inherit' href='https://www.ntnu.no/studier/mtdt'> <h1 style={workStyle}> NTNU </h1> </Link>
      <p style={textStyle}> August 2017 - Present </p>
      <p style={descriptionStyle}>
        5 year integrated Masters degree at the Norwegian University of Science and Technology.
        Currently specializing in database systems, search engines and AI.
      </p>

      
    </InfoSection>
  )
}

export default Eduaction