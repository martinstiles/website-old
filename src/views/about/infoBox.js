import React from 'react'
import Image from '../../media/fb_image.jpg'
import CakeIcon from '@material-ui/icons/Cake'
import ProfessionalPath from './components/professionalPath'
import WorkExperience from './components/workExperience'
import Education from './components/education'

const Box = () => {
  const infoBox = {
    bottom: '0',
    margin: '0 4% 0 4%',
    //height: '60%',
    color: `rgb(${[220,220,220,1]})`,
    backgroundColor: `rgb(${[40,40,40,1]})`,
    //textAlign: 'center', --> Inherited
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    overflow: 'auto'
  }
  const header = { fontSize: `calc(${2}em + ${2}vw)`, marginTop: '13%' }

  return (
    <div style={infoBox}>
      <h1 style={header}> Martin Stiles </h1>
      <h1> <CakeIcon style={{marginRight: '5px'}} /> 20 November 1997 </h1>
      <h1 style={{ marginBottom: '10%'}}> </h1>

      <ProfessionalPath />
      <WorkExperience />
      <Education />

      <h1></h1>
      
      <h1> TEST </h1>
      <h1> TEST </h1>
    </div>
  )
}
/*
title:
*/

const InfoBox = () => {
  const imageStyle = {
    position:'relative',
    width: '20%',
    borderRadius: '50%',
    border: `3px solid rgb(${[40,40,40,1]})`,
    margin: '0 0 -10% 0',
    // margin: '0 40% -10% 40%',

  }

  return (
    <div >
      <img style={imageStyle} src={Image} alt='' />
      <Box />
    </div>
  )
}

export default InfoBox