import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import InfoSection from './infoSection'
import useMediaQuery from '@material-ui/core/useMediaQuery';

const SkillHeader = (props) => {
  const skillStyle = {fontSize: '1.4em'}
  const hideText = {overflow: 'hidden', textOverflow: 'ellipsis'}
  const percentage = props.percentage

  return (
    <>
      <div style={hideText}>
        <h1 style={skillStyle}> {props.header} </h1>
      </div>
      <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({ textColor: "white", trailColor: "white"})}/>
    </>
  )
}

const ProfessionalPath = (props) => {
  const smallScreen = useMediaQuery('(max-width:1100px)')
  const flexBox = {display: 'flex', justifyContent: 'space-around', marginTop: '0%'}
  const circleStyle = {flex: '33%', maxWidth: smallScreen ? '6em' : '8em', textAlign: 'center', textOverflow: 'ellipsis'}
  const textStyle = {fontSize: '1.2em'}

  return (
    <InfoSection header='PROFESSIONAL PATH'>
      <p style={textStyle}>
        Since the time of my lego addiction, problem solving has always been one of my favorite activities.
        As an aspiring tech geek I always seek to obtain knowledge about my field: computer science.
        I aim to specialize in the research part, like Data Analysis and AI, although I am currently doing a lot of web development.
      </p>
      <p style={textStyle}>
        Consequently, my skills vary a lot. In university I have built a strong engineering foundation, but as I feel university offers
        too much breadth of learning, I often do online courses and reading to acquire more in depth knowledge.
        Thus, programming technologies I claim to have good experience in are: Python, React, JavaScript (ES8), CSS, HTML, Java.
      </p>
      <div style={flexBox}>
        <div style={circleStyle}>
          <SkillHeader header='WebDev' percentage={80}/>
        </div>
        <div style={circleStyle}>
          <SkillHeader header='DataSci' percentage={75}/>
        </div>
        <div style={circleStyle}>
          <SkillHeader header='AI' percentage={60}/>
        </div>
      </div>
    </InfoSection>
  )
}

export default ProfessionalPath