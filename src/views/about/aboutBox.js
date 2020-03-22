import React from 'react'
import Image from '../../media/fb_image.jpg'
import ProfessionalPath from './components/professionalPath'
import WorkExperience from './components/workExperience'
import Education from './components/education'
//import Other from './components/other'

const Box = () => {
  const infoBox = {
    bottom: '0',
    margin: '0 4% 0 4%',
    color: `rgb(${[220,220,220,1]})`,
    backgroundColor: `rgb(${[40,40,40,1]})`,
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    overflow: 'auto',
    paddingBottom: '5%'
  }
  const header = { fontSize: '4em', marginTop: '13%', marginBottom: '0px' }
  const underHeader = {fontSize: '2em', margin: '1em', marginLeft: '30px', marginRight: '30px'}

  return (
    <div style={infoBox}>
      <h1 style={header}> Martin Stiles </h1>
      <h1 style={underHeader}> Software developer. Tech enthusiast. Eater of tacos.</h1>

      <ProfessionalPath />
      <WorkExperience />
      <Education />
    </div>
  )
}

const AboutBox = () => {
  const imageStyle = {
    width: '20%',
    borderRadius: '50%',
    border: `3px solid rgb(${[40,40,40,1]})`,
    margin: '0 0 -10% 0',

  }

  return (
    <div>
      <img style={imageStyle} src={Image} alt='' />
      <Box />
    </div>
  )
}

export default AboutBox