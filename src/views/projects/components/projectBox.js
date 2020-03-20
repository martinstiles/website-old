import React from 'react'
import './projectBox.css'

const ProjectBox = (props) => {
  const boxStyle = {
    width: '100%',
    marginBottom: '3em',
  }
  const imageStyle = {
    width: '20em',
    height: '20em',
    boxShadow: `8px 8px 5px 0 rgb(${[0,0,0,0.2]})`,
    borderRadius: '5px'
  }

  // TODO: Lage on hover effekt
  // --> Scale: 1.4 --> Skriv VELDIG KORT OM PROSJEKTET og ha en link-button til prosjektet
  // props.link

  // Need style for image
  return (
    <div style={boxStyle}>
      <img style={imageStyle} className={'projectBox'} src={props.image} alt='' />
    </div>
  )
}

export default ProjectBox