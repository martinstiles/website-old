import React from 'react'
import Image from '../../media/fb_image.jpg'
import ProfessionalPath from './components/professionalPath'
import WorkExperienceIT from './components/experience/workExperienceIT'
import WorkExperienceOther from './components/experience/workExperienceOther'
import Education from './components/experience/education'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const Box = () => {
  const isSmallScreen = useMediaQuery('(max-width:800px)') // Boolean that is true if screen is 800px or less
  
  const infoBox = {
    bottom: '0',
    margin: '0 4% 0 4%',
    color: `rgb(${[220,220,220,1]})`,
    backgroundColor: `rgb(${[40,40,40,1]})`,
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    overflow: 'auto',
    paddingBottom: '5%',
    zIndex: 1
  }
  const header = { fontSize: isSmallScreen ? '3em' : '4em', marginTop: isSmallScreen ? '26%' : '13%', marginBottom: 0 }
  const underHeader = {fontSize: isSmallScreen ? '1.5em' : '2em', margin: '0.3em 30px 1em 30px'}

  return (
    <div style={infoBox}>
      <h1 style={header}> Martin Stiles </h1>
      <h1 style={underHeader}> Software developer. Tech enthusiast. Eater of tacos.</h1>

      <ProfessionalPath />
      <Education />
      <WorkExperienceIT />
      <WorkExperienceOther />
      <hr style={{width: '90%', border: `2px solid`, borderRadius: '5px'}} />
    </div>
  )
}

const AboutBox = () => {
  const isSmallScreen = useMediaQuery('(max-width:800px)') // Boolean that is true if screen is 800px or less

  const imageStyle = {
    width: isSmallScreen ? '40%' : '20%',
    borderRadius: '50%',
    border: `3px solid rgb(${[40,40,40,1]})`,
    margin: isSmallScreen ? '0 0 -22% 0' : '0 0 -10% 0',
    zIndex: 10,
    position: 'relative'
  }

  return (
    <div>
      <img style={imageStyle} src={Image} alt='' />
      <Box />
    </div>
  )
}

export default AboutBox