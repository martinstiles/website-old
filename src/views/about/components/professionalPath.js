import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import InfoSection from './infoSection'

const ProfessionalPath = (props) => {
  const webPercentage = 80
  const dataPercentage = 78
  const somePercentage = 68
  const flexBox = {display: 'flex', justifyContent: 'space-around', marginTop: '0%'}
  const circleStyle = {flex: '33%', maxWidth: '20%', textAlign: 'center', textOverflow: 'ellipsis'}
  const textStyle = {fontSize: `calc(${0.6}em + ${0.6}vw)`}
  const skillStyle = {fontSize: `calc(${0.7}em + ${0.7}vw)`}

  return (
    <InfoSection header='PROFESSIONAL PATH'>
      <p style={textStyle}>
        Since the time of my lego addiction, problem solving has always been one of my favorite activities.
        As an aspiring tech geek I always seek to obtain knowledge about my field: computer science.
        I aim to specialize in the research part (like Data Analysis and AI), although currently I enjoy doing a lot of web development.
      </p>
      <p style={textStyle}>
        Consequently, my skills vary a lot. From my university I have built a strong engineering foundation, but as I feel university has
        too much focus on the breadth of learning, I often do online courses and reading to acquire more in depth knowledge.
        Thus, programming technologies I will claim to have good experience in is: Python, JavaScript (ES8), CSS, HTML, Java
      </p>
      <div style={flexBox}>
        <div style={circleStyle}>
          <h1 style={skillStyle}> Web Dev </h1>
          <CircularProgressbar value={webPercentage} text={`${webPercentage}%`} styles={buildStyles({ textColor: "white", trailColor: "white"})}/>
        </div>
        <div style={circleStyle}>
          <h1 style={skillStyle}> Data Sc. </h1>
          <CircularProgressbar value={dataPercentage} text={`${dataPercentage}%`} styles={buildStyles({ textColor: "white", trailColor: "white"})}/>
        </div>
        <div style={circleStyle}>
          <h1 style={skillStyle}> AI </h1>
          <CircularProgressbar value={somePercentage} text={`${somePercentage}%`} styles={buildStyles({ textColor: "white", trailColor: "white"})}/>
        </div>
      </div>
    </InfoSection>
  )
}

export default ProfessionalPath