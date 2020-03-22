import React from 'react'
import InfoSection from './infoSection'
import Link from '@material-ui/core/Link'

const WorkExperience = () => {
  const margin = '8px'
  const titleStyle = {fontSize: '2em', marginBottom: '2px'}
  const workStyle = {color: `rgb(${[90, 172, 235]})`, fontSize: '1.6em', textDecoration: 'underline', margin: '4px 0'}
  const textStyle = {fontSize: '1.4em', margin: '4px 0'}
  const descriptionStyle = {marginBottom: '2em', marginTop: '8px', fontSize: '1.2em'}
  
  return (
    <InfoSection header='WORK EXPERIENCE'>
      <h1 style={titleStyle}> SOFTWARE DEVELOPER </h1>
      <Link target="_blank" color='inherit' variant='inherit' href='https://strise.ai/'> <h1 style={workStyle}> Strise </h1> </Link>
      <p style={textStyle}> January 2020 - Present </p>
      <p style={descriptionStyle}>Interning as a front end developer. I am learning so much in this position, both technical and soft skills.
      I'm really grateful for landing this job. Combining it with studies forces me to be more effective. </p>

      <h1 style={titleStyle}> LEARNING ASSISTANT </h1>
      <Link target="_blank" color='inherit' variant='inherit' href='https://www.ntnu.no/idi'> <h1 style={workStyle}> NTNU </h1> </Link>
      <p style={textStyle}> January 2020 - Present </p>
      <p style={descriptionStyle}> Student assistant in the course TDT4145: Data Modelling and Database Systems. Helping others professionally
      turned out to be something I enjoy more than I imagined. </p>

      <h1 style={titleStyle}> RIDER </h1>
      <Link target="_blank" color='inherit' variant='inherit' href='https://www.foodora.com/'> <h1 style={workStyle}> Foodora </h1> </Link>
      <p style={textStyle}> March 2019 - november 2019 </p>
      <p style={descriptionStyle}>Food delivery cyclist. Combining exercise and income was a motivating factor that kept me going despite
      the "varying" weather of Trondheim.</p>

      <h1 style={titleStyle}> BARTENDER </h1>
      <Link target="_blank" color='inherit' variant='inherit' href='https://www.facebook.com/menightclub/'> <h1 style={workStyle}> Me Nightclub </h1> </Link>
      <p style={textStyle}> June 2018 - July 2019 </p>
      <p style={descriptionStyle}>Working part time as a bartender was a really fun experiece. And besides, getting good
      at different drinks is "surprisingly" useful in social scenarios. </p>
    </InfoSection>
  )
}

export default WorkExperience