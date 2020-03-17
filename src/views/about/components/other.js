import React from 'react'
import InfoSection from './infoSection'
import Link from '@material-ui/core/Link'

const Other = () => {
  const titleStyle = {fontSize: `calc(${1}em + ${1}vw)`, marginBottom: '0.5%'}
  const workStyle = {color: `rgb(${[90, 172, 235]})`, fontSize: `calc(${0.8}em + ${0.8}vw)`, textDecoration: 'underline', margin: '0px'}
  const textStyle = {fontSize: `calc(${0.7}em + ${0.7}vw)`, marginTop: '1%', marginBottom: '2%'}
  const descriptionStyle = {marginBottom: '7%', marginTop: '0%', fontSize: `calc(${0.5}em + ${0.5}vw)`}
  
  // TODO: HER KAN VI SKRIVE OM KURS, 
  return (
    <InfoSection header='OTHER'>
      <h1 style={titleStyle}> TO COME? </h1>
    </InfoSection>
  )
}

export default Other