import React from 'react'
import InfoSection from './infoSection'
import Link from '@material-ui/core/Link'

const WorkExperience = () => {
  const titleStyle = {fontSize: `calc(${1}em + ${1}vw)`, marginBottom: '0.5%'}
  const workStyle = {color: `rgb(${[90, 172, 235]})`, fontSize: `calc(${0.8}em + ${0.8}vw)`, textDecoration: 'underline', margin: '0px'}
  const textStyle = {fontSize: `calc(${0.7}em + ${0.7}vw)`, marginTop: '1%', marginBottom: '2%'}
  const descriptionStyle = {marginBottom: '7%', marginTop: '0%', fontSize: `calc(${0.5}em + ${0.5}vw)`}
  
  return (
    <InfoSection header='WORK EXPERIENCE'>
      <h1 style={titleStyle}> SOFTWARE DEVELOPER </h1>
      <Link target="_blank" color='inherit' variant='inherit' href='https://strise.ai/'> <h1 style={workStyle}> Strise </h1> </Link>
      <p style={textStyle}> January 2020 - Present </p>
      <p style={descriptionStyle}>Interning as a front end developer. I am learning so much in this position, both technical and soft skills.
      I'm really grateful for being able to land this job. </p>

      <h1 style={titleStyle}> LEARNING ASSISTANT </h1>
      <Link target="_blank" color='inherit' variant='inherit' href='https://www.ntnu.no/idi'> <h1 style={workStyle}> NTNU </h1> </Link>
      <p style={textStyle}> January 2020 - Present </p>
      <p style={descriptionStyle}> Student assistant in the course TDT4145: Data Modelling and Database Systems. Helping others professionally
      turned out to be something I enjoyed more than imagined. </p>

      <h1 style={titleStyle}> RIDER </h1>
      <Link target="_blank" color='inherit' variant='inherit' href='https://www.foodora.com/'> <h1 style={workStyle}> Foodora </h1> </Link>
      <p style={textStyle}> March 2019 - november 2019 </p>
      <p style={descriptionStyle}>Food delivery cyclist. Combining exercise and income was a huge motivating factor that kept me going despite
      the "varying" weather of Trondheim.</p>

      <h1 style={titleStyle}> BARTENDER </h1>
      <Link target="_blank" color='inherit' variant='inherit' href='https://www.facebook.com/menightclub/'> <h1 style={workStyle}> Me Nightclub </h1> </Link>
      <p style={textStyle}> June 2018 - July 2019 </p>
      <p style={descriptionStyle}>Working part time as a bartender was a really fun experiece. And besides, getting good
      at different drinks is unexpectedly useful in social scenarios. </p>
    </InfoSection>
  )
}

export default WorkExperience