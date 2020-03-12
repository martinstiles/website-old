import React from 'react'
import InfoSection from './infoSection'
import Link from '@material-ui/core/Link'

const WorkExperience = () => {
  const titleStyle = {fontSize: `calc(${1}em + ${1}vw)`}
  const workStyle = {color: `rgb(${[90, 172, 235]})`}
  
  return (
    <InfoSection header='WORK EXPERIENCE'>
      <h1 style={titleStyle}> SOFTWARE DEVELOPER</h1>
      <Link target="_blank" href='https://strise.ai/'> <h1 style={workStyle}> strise.ai </h1> </Link>
    </InfoSection>
  )
}

export default WorkExperience