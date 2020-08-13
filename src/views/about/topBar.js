import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import MailIcon from '@material-ui/icons/Mail'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const TopBar = () => {
  // Boolean that is true if screen is 800px or less
  const isSmallScreen = useMediaQuery('(max-width:800px)')

  const topBar = {
    position: 'relative',
    margin: isSmallScreen ? '5% 4% 5% 4%' : '3% 4% 5% 4%',
    color: `rgb(${[220,220,220,1]})`,
    backgroundColor: `rgb(${[40,40,40,1]})`,
    padding: '10px',
    borderRadius: '5px',

    display: 'flex',
    flexDirection: isSmallScreen ? 'column' : 'row',
    justifyContent: isSmallScreen ? 'center' :  'space-around'

  }
  const topbarColumn = {
    flex: isSmallScreen ? '100%' : '33.3%', maxWidth: isSmallScreen ? '100%' : '33.3%', display: 'flex', textAlign: 'center'
  }
  
  const textColumn = {
    flex: '65%', maxWidth: '65%',
    marginLeft: '2%',
    display: 'flex',
    textAlign: 'left',
    flexDirection: isSmallScreen ? 'column' : 'column',
    justifyContent: 'space-around',
    ...(isSmallScreen && {marginBottom: '5px'})
  }
  const textRow = {
    flex: '50%', maxHeight: '50%', margin: '0', fontSize: isSmallScreen ? '0.8em' :  '1.2em'
  }

  const iconStyle = { width: isSmallScreen ? '1em' : '2em', height: isSmallScreen ? '1em' :  '2em'}
  const iconContainter = { flex: '35%', maxWidth: '35%', textAlign: 'right' }

  return (
    <div style={topBar}>
      <div style={topbarColumn}>
        <div style={iconContainter} >
          <LocationOnIcon style={iconStyle} />
        </div>
        <div style={textColumn} >
          <p style={textRow}> 7030 Trondheim </p>
          <p style={textRow}> Norway </p>
        </div>
      </div>

      <div style={topbarColumn}>
        <div style={iconContainter} >
          <PhoneIcon style={iconStyle} />
        </div>
        <div style={textColumn} >
          <p style={textRow}> +47 401 04 816 </p>
          <p style={textRow}>  MON - FRI </p>
        </div>
      </div>

      <div style={topbarColumn}>
        <div style={iconContainter} >
          <MailIcon style={iconStyle} />
        </div>
        <div style={textColumn} >
          <p style={textRow}> <a style={{color: `rgb(${[220,220,220,1]})`}} href='mailto:martin.stiles@live.no'>martin.stiles@live.no</a> </p>
          <p style={textRow}> 24 / 7 </p>
        </div>
      </div>
    </div>
  )
}

export default TopBar