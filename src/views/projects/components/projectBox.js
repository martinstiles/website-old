import React, {useState} from 'react'
import '../../../animations/projectBox.css'
import Button from '@material-ui/core/Button'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import GitHubIcon from '@material-ui/icons/GitHub'

const ProjectBox = (props) => {
  const [hover, setHover] = useState(false)

  const boxStyle = {
    width: '100%',
    marginBottom: '3em',
    position: 'relative'
  }
  const imageStyle = {
    width: '20em',
    height: '20em',
    boxShadow: `8px 8px 5px 0 rgb(${[0,0,0,0.2]})`,
    borderRadius: '5px',
    transition: '.3s ease',
    // If hovering:
    transform: hover && `scale(${1.2})`,
    opacity: hover && 0.3
  }

  // BOTH have the same onMouseEnter/Leave to remove bugs caused when user is too fast
  return (
    <div style={boxStyle}>
      <img onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={imageStyle} src={props.image} alt='' />
      <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={hover ? 'hidden-info-in' : 'hidden-info-out'} style={hover ? {opacity: 1, width: '23em', padding: '5px'} : {opacity: 0, visibility: 'hidden'}}>
        <h1 style={{fontSize: '1.5em'}}> {props.desc} </h1>
        <div style={{marginBottom: '1em'}}>
          <Button onClick={() => setHover(false)} variant="contained" color="primary" disabled={!props.githubLink || !hover} href={props.githubLink} target='_blank' style={{marginRight: '5px'}}>
            Go to repo <GitHubIcon style={{marginLeft: '6px'}} />
          </Button>
          <Button onClick={() => setHover(false)} disabled={!hover} variant="contained" color="primary" href={props.projectLink} target='_blank'>
            See project <OpenInNewIcon style={{marginLeft: '5px'}} />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProjectBox