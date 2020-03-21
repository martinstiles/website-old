import React from 'react'
import Headers from './components/headers'

const ProjectSection = (props) => {
  const fontColor = `rgb(${[40,40,40,1]})`
  const type = props.type
  const smallScreen = props.smallScreen
  
  const mainStyle = {
    height: '100%',
    borderRight: !smallScreen && type === 'personal' && `1px solid ${fontColor}`, // We only want border on personal side and not when small screen
    overflow: 'auto',
    position: 'relative'
  }

  return (
    <div style={mainStyle}>
      <Headers view={type} />
      {props.children}
    </div>
  )
}

export default ProjectSection