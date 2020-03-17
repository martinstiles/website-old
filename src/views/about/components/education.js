import React from 'react'
import InfoSection from './infoSection'
import Link from '@material-ui/core/Link'

const Eduaction = () => {
  const titleStyle = {fontSize: `calc(${1}em + ${1}vw)`, marginBottom: '1%'}
  const workStyle = {color: `rgb(${[90, 172, 235]})`, fontSize: `calc(${0.8}em + ${0.8}vw)`, textDecoration: 'underline', margin: '0px'}
  const textStyle = {fontSize: `calc(${0.7}em + ${0.7}vw)`, marginTop: '2%'}
  const descriptionStyle = {marginBottom: '7%', fontSize: `calc(${0.5}em + ${0.5}vw)`}
  
  return (
    <InfoSection header='EDUCATION'>
      <h1 style={titleStyle}> MSc. student in Computer Science </h1>
      <Link target="_blank" color='inherit' variant='inherit' href='https://www.ntnu.no/studier/mtdt'> <h1 style={workStyle}> NTNU </h1> </Link>
      <p style={textStyle}> August 2017 - Present </p>
      <p style={descriptionStyle}> Currently specializing in database systems and AI. </p>

      
    </InfoSection>
  )
}

export default Eduaction