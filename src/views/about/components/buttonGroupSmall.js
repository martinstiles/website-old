import React, { useState } from 'react'
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline'
import { Button, MenuItem, Menu } from '@material-ui/core'

const ButtonGroupSmall = (props) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const handleMoreClose = (page) => {
    setAnchorEl(null)
    page !== props.currentPage && props.handleClick(page)
  }
  const handleMoreClick = (event) => { setAnchorEl(event.currentTarget) }

  return (
    <>
      <Button style={{fontSize: '1em', color: `rgb(${[230,230,230,1]})`}} aria-haspopup="true" onClick={handleMoreClick}>
        <ViewHeadlineIcon style={{fontSize: '2em'}} />
      </Button>
      <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={() => handleMoreClose(props.currentPage)}>
        <MenuItem onClick={() => handleMoreClose('home')}> <p style={{...(props.currentPage === 'home' && {color: '#ccc'})}}> HOME </p> </MenuItem>
        <MenuItem onClick={() => handleMoreClose('about')}> <p style={{...(props.currentPage === 'about' && {color: '#ccc'})}}> ABOUT </p> </MenuItem>
        <MenuItem onClick={() => handleMoreClose('projects')}> <p style={{...(props.currentPage === 'projects' && {color: '#ccc'})}}> PROJECTS </p> </MenuItem>
      </Menu>
    </>
  )
}

export default ButtonGroupSmall