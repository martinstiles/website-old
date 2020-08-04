import React from 'react'
import InfoSection from './infoSection'
import Link from '@material-ui/core/Link'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const WorkExperienceIT = () => {
  const isSmallScreen = useMediaQuery('(max-width:800px)') // Boolean that is true if screen is 800px or less

  const titleStyle = {fontSize: isSmallScreen ? '1.5em' : '2em', marginBottom: '2px'}
  const workStyle = {fontSize: isSmallScreen ? '1.2em' : '1.6em', color: `rgb(${[90, 172, 235]})`, textDecoration: 'underline', margin: '4px 0'}
  const textStyle = {fontSize: isSmallScreen ? '1.2em' : '1.4em', margin: '4px 0'}
  const descriptionStyle = {fontSize: isSmallScreen ? '1.1em' : '1.2em', marginBottom: '1em', marginTop: '8px'}
  
  return (
    <InfoSection header='WORK EXPERIENCE - IT'>
      <h1 style={titleStyle}> SOFTWARE DEVELOPER </h1>
      <Link target="_blank" color='inherit' variant='inherit' href='https://strise.ai/'> <h1 style={workStyle}> Strise </h1> </Link>
      <p style={textStyle}> January 2020 - July 2020 </p>
      <p style={descriptionStyle}>Interning as a front end developer. Strise aims to revolutionize enterprise software, and being a part of
      the team is such a unique experience. I am learning a lot in this position, both technical and soft skills.
      Combining this with studies has forced me to be more efficient. </p>

      <h1 style={titleStyle}> LEARNING ASSISTANT </h1>
      <Link target="_blank" color='inherit' variant='inherit' href='https://www.ntnu.no/idi'> <h1 style={workStyle}> NTNU </h1> </Link>
      <p style={textStyle}> January 2020 - May 2020 </p>
      <p style={descriptionStyle}> Student assistant in the course TDT4145: Data Modelling and Database Systems. Helping others professionally
      turns out to be something I enjoy more than I imagined. </p>
    </InfoSection>
  )
}

export default WorkExperienceIT