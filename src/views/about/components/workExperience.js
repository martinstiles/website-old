import React from 'react'
import InfoSection from './infoSection'
import Link from '@material-ui/core/Link'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const WorkExperience = () => {
  const isSmallScreen = useMediaQuery('(max-width:800px)') // Boolean that is true if screen is 800px or less

  const titleStyle = {fontSize: isSmallScreen ? '1.5em' : '2em', marginBottom: '2px'}
  const workStyle = {fontSize: isSmallScreen ? '1.2em' : '1.6em', color: `rgb(${[90, 172, 235]})`, textDecoration: 'underline', margin: '4px 0'}
  const textStyle = {fontSize: isSmallScreen ? '1.2em' : '1.4em', margin: '4px 0'}
  const descriptionStyle = {fontSize: isSmallScreen ? '1.1em' : '1.2em', marginBottom: '2em', marginTop: '8px'}
  
  return (
    <InfoSection header='WORK EXPERIENCE'>
      <h1 style={titleStyle}> SOFTWARE DEVELOPER </h1>
      <Link target="_blank" color='inherit' variant='inherit' href='https://strise.ai/'> <h1 style={workStyle}> Strise </h1> </Link>
      <p style={textStyle}> January 2020 - Present </p>
      <p style={descriptionStyle}>Interning as a front end developer. Strise aims to revolutionize enterprise software, and being a part of
      the team is such a unique experience. I am learning a lot in this position, both technical and soft skills.
      Combining this with studies has forced me to be more efficient. </p>

      <h1 style={titleStyle}> LEARNING ASSISTANT </h1>
      <Link target="_blank" color='inherit' variant='inherit' href='https://www.ntnu.no/idi'> <h1 style={workStyle}> NTNU </h1> </Link>
      <p style={textStyle}> January 2020 - Present </p>
      <p style={descriptionStyle}> Student assistant in the course TDT4145: Data Modelling and Database Systems. Helping others professionally
      turns out to be something I enjoy more than I imagined. </p>

      <h1 style={titleStyle}> RIDER </h1>
      <Link target="_blank" color='inherit' variant='inherit' href='https://www.foodora.com/'> <h1 style={workStyle}> Foodora </h1> </Link>
      <p style={textStyle}> March 2019 - november 2019 </p>
      <p style={descriptionStyle}>Food delivery cyclist. A mix of exercise and income was a great combination for a part time job.</p>

      <h1 style={titleStyle}> BARTENDER </h1>
      <Link target="_blank" color='inherit' variant='inherit' href='https://www.facebook.com/menightclub/'> <h1 style={workStyle}> Me Nightclub </h1> </Link>
      <p style={textStyle}> June 2018 - July 2019 </p>
      <p style={descriptionStyle}>Working part time as a bartender was a really fun experiece. And besides, being good
      at making drinks is a "surprisingly" useful skill. </p>

      <h1 style={titleStyle}> Tactical Command Assistant </h1>
      <Link target="_blank" color='inherit' variant='inherit' href='https://forsvaret.no/hogskolene/studiekatalog-bibliotek/Luftkrigsskolen/utdanning/utdanningstilbud/luftvern'> <h1 style={workStyle}> Norwegian Army </h1> </Link>
      <p style={textStyle}> July 2016 - July 2017 </p>
      <p style={descriptionStyle}> One year in the Norwegian Air Defence Battalion,
      honing both self discipline and communication skills. </p>
    </InfoSection>
  )
}

export default WorkExperience