import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import MailIcon from '@material-ui/icons/Mail'

const TopBar = () => {

  const topBar = {
    position: 'relative',
    margin: '3% 4% 5% 4%',
    color: `rgb(${[220,220,220,1]})`,
    backgroundColor: `rgb(${[40,40,40,1]})`,
    heigth: '40%',
    padding: '10px',
    borderRadius: '5px',

    display: 'flex'

  }
  const topbarColumn = {
    flex: '33.3%', maxWidth: '33.3%', fontSize: `calc(${0.5}em + ${0.5}vw)`, display: 'flex', textAlign: 'center' }
  
  const textColumn = {
    flex: '65%', maxWidth: '65%',
    fontSize: `calc(${0.5}em + ${0.5}vw)`,
    marginLeft: '2%',
    display: 'flex',
    textAlign: 'left',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
  const textRow = {
    flex: '50%', maxHeight: '50%', margin: '0', fontSize: `calc(${0.55}em + ${0.55}vw)`
  }

  const iconStyle = { width: `calc(${1.1}em + ${1.1}vw)`, height: `calc(${1.1}em + ${1.1}vw)`}
  const iconContainter = { flex: '35%', maxWidth: '35%', textAlign: 'right' }

  return (
    <div style={topBar}>
      <div style={topbarColumn}>
        <div style={iconContainter} >
          <LocationOnIcon style={iconStyle} />
        </div>
        <div style={textColumn} >
          <p style={textRow}> 7068 Trondheim </p>
          <p style={textRow}> Norway </p>
        </div>
      </div>

      <div style={topbarColumn}>
        <div style={iconContainter} >
          <PhoneIcon style={iconStyle} />
        </div>
        <div style={textColumn} >
          <p style={textRow}> +47 401 04 816 </p>
          <p style={textRow}> &nbsp; MON - FRI </p>
        </div>
      </div>

      <div style={topbarColumn}>
        <div style={iconContainter} >
          <MailIcon style={iconStyle} />
        </div>
        <div style={textColumn} >
          <p style={textRow}> martin.stiles@live.no </p>
          <p style={textRow}> 24 / 7 </p>
        </div>
      </div>
    </div>
  )
}

export default TopBar