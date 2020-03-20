import React from 'react'

const Headers = (props) => {
  const view = props.view
  const smallTextStyle = {fontSize: '1.5em', margin: '0px'}

  return (
    <div style={{marginTop: '1.5em'}}>
      { view === 'personal' && <h1 style={smallTextStyle}> My personal </h1> }
      <h1 style={{fontSize: '4em', margin: '0px'}}> PROJECTS </h1>
      { view === 'professional' && <h1 style={smallTextStyle}> I am a part of </h1> }
      <hr style={{width: '90%', border: `1px solid`, marginTop: '10px', marginBottom: '3em'}} />
    </div>
  )
}

export default Headers