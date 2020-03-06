import React from 'react'
import Image from '../../media/fb_image.jpg'

const InfoBox = () => {
  const imageStyle = {
    width: '20%',
    borderRadius: '50%',
    zIndex: 3
  }

  const infoBox = {
    position: 'fixed',
    bottom: '0',
    margin: '0 7vw 0 7vw',
    width: '70vw',
    height: '60%',
    color: `rgb(${[220,220,220,1]})`,
    backgroundColor: `rgb(${[40,40,40,1]})`,
    textAlign: 'center',
    borderRadius: '5px',
    zIndex: 1,
    overflow: 'visible'
  }

  return (
    <div style={{marginTop: '8%', position: 'relative'}} >
      <img style={imageStyle} src={Image} alt='' />

      
    </div>
  )
}

export default InfoBox