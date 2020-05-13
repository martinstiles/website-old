import React from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const InfoSection = (props) => {
  const isSmallScreen = useMediaQuery('(max-width:800px)') // Boolean that is true if screen is 800px or less

  const sectionStyle = {display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row' , textAlign: 'left', margin: '0 5% 5% 5%'}
  const header = {fontSize: isSmallScreen ? '1.8em' : '2em', marginBottom: 0}

  return (
    <>
    <hr style={{width: '90%', border: `2px solid`, borderRadius: '5px'}} />

    <div style={sectionStyle}>
      <div style={{flex: '35%', ...(isSmallScreen && {textAlign: 'center'})}}>
        <h1 style={header}> {props.header} </h1>
      </div>
      <div style={{flex: '65%', margin: isSmallScreen ? 0 : '0 1% 0 3%', fontFamily: 'Helvetica'}}>
        {props.children}
      </div>
    </div>
    </>
  )
}

export default InfoSection