import React from 'react'

const InfoSection = (props) => {
  const sectionStyle = {display: 'flex', textAlign: 'left', margin: '0 5% 5% 5%'}
  const header = {fontSize: '2em '}

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
    <hr style={{width: '90%', border: `2px solid`, borderRadius: '5px', float: 'left'}} />
    <div style={sectionStyle}>
      <div style={{flex: '40%'}}>
        <h1 style={header}> {props.header} </h1>
      </div>
      <div style={{flex: '60%', margin: '0 3% 0 3%'}}>
        {props.children}
      </div>
    </div>
    </div>
  )
}

export default InfoSection