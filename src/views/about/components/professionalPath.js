import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import InfoSection from './infoSection'

const ProfessionalPath = (props) => {
  const webPercentage = 80
  const dataPercentage = 70
  const somePercentage = 68
  const flexBox = {display: 'flex', justifyContent: 'space-around', marginTop: '0%'}
  const circleStyle = {flex: '33%', maxWidth: '20%', textAlign: 'center', textOverflow: 'ellipsis'}
  const textStyle = {fontSize: `calc(${0.6}em + ${0.6}vw)`}
  const skillStyle = {fontSize: `calc(${0.7}em + ${0.7}vw)`}

  return (
    <InfoSection header='PROFESSIONAL PATH'>
      <p style={textStyle}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p>
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
          <h1 style={skillStyle}> AI? :D </h1>
          <CircularProgressbar value={somePercentage} text={`${somePercentage}%`} styles={buildStyles({ textColor: "white", trailColor: "white"})}/>
        </div>
      </div>
    </InfoSection>
  )
}

export default ProfessionalPath