import React from 'react'

const InfoSection = (props) => {
  const sectionStyle = {display: 'flex', textAlign: 'left', margin: '0 5% 5% 5%'}
  const header = {fontSize: `calc(${1}em + ${1}vw)`}

  return (
    <div style={sectionStyle}>
      <div style={{flex: '40%'}}>
        <hr style={{width: '70%', border: `2px solid`, borderRadius: '5px', float: 'left'}} />
        <h1 style={header}> {props.header} </h1>
      </div>
      <div style={{flex: '60%', top: '0', margin: '0 3% 0 3%'}}>
        {props.children}
      </div>
    </div>
  )
}

export default InfoSection