import React from 'react'
import InfoSection from './infoSection'
import Link from '@material-ui/core/Link'

const Eduaction = () => {
  const titleStyle = {fontSize: '2em', marginBottom: '2px'}
  const workStyle = {color: `rgb(${[90, 172, 235]})`, fontSize: '1.6em', textDecoration: 'underline', margin: '4px 0'}
  const textStyle = {fontSize: '1.4em', margin: '4px 0'}
  const descriptionStyle = {marginBottom: '2em', marginTop: '8px', fontSize: '1.2em'}
  
  return (
    <InfoSection header='EDUCATION'>
      <h1 style={titleStyle}> MSc. student in Computer Science </h1>
      <Link target="_blank" color='inherit' variant='inherit' href='https://www.ntnu.no/studier/mtdt'> <h1 style={workStyle}> NTNU </h1> </Link>
      <p style={textStyle}> August 2017 - Present </p>
      <p style={descriptionStyle}>
        5 year integrated Masters degree at the Norwegian University of Science and Technology.
        Currently specializing in database systems and AI.
      </p>

      
    </InfoSection>
  )
}

export default Eduaction