import React from 'react'
import Image from '../../media/fb_image.jpg'
import ProfessionalPath from './components/professionalPath'
import WorkExperience from './components/workExperience'
import Education from './components/education'
import Other from './components/other'

const Box = () => {
  const infoBox = {
    bottom: '0',
    margin: '0 4% 0 4%',
    color: `rgb(${[220,220,220,1]})`,
    backgroundColor: `rgb(${[40,40,40,1]})`,
    //textAlign: 'center', --> Inherited
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    overflow: 'auto',
    paddingBottom: '5%'
  }
  const header = { fontSize: `calc(${2}em + ${2}vw)`, marginTop: '13%' }
  const margin = {margin: '0 5% 0 5%'}

  return (
    <div style={infoBox}>
      <h1 style={header}> Martin Stiles </h1>
      <h1 style={margin}> Software developer. Tech enthusiast. Eater of tacos.</h1>
      <h1 style={{ marginBottom: '5%'}}> </h1>

      <ProfessionalPath />
      <WorkExperience />
      <Education />
      <Other />

    </div>
  )
}
/*
title:
*/

const AboutBox = () => {
  const imageStyle = {
    //position:'relative',
    width: '20%',
    borderRadius: '50%',
    border: `3px solid rgb(${[40,40,40,1]})`,
    margin: '0 0 -10% 0',
    // margin: '0 40% -10% 40%',

  }

  return (
    <div>
      <img style={imageStyle} src={Image} alt='' />
      <Box />
    </div>
  )
}

export default AboutBox