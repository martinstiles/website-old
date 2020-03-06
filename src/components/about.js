import React from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import '../animations/fadeIn.css'
import TopBar from './about/topBar'
import InfoBox from './about/infoBox'
import Image from '../media/fb_image.jpg'

const About = () => {
	const fontColor = `rgb(${[40,40,40,1]})`
	const smallScreen = useMediaQuery('(max-width:600px)') // Boolean that is true if screen is 600px or less
	if (smallScreen) { console.log('JAJAJAJA')}
	
	// Checks to see if any other pages than home has been visitet, so the page doesn't fade in when you switch pages
	const visit = () => {
		const visited = sessionStorage.getItem('visited') !== 'true'
		if (visited) sessionStorage.setItem(`visited`, 'true')
		return visited
	}

	// Make this container generic (in app.js? and have it at all times and just change width?)
	// Evt lag en egen component for container
	const container = {
		position: 'fixed',
		width: '84%',
		top: '0%',
		marginLeft: '16%',
		height: '100%',
		overflow: 'scroll',
		bottom: '4%',
		zIndex: 3,
		textAlign: 'center',
		alignItems: 'center',
		fontWeight: 'bold',
		color: fontColor,
		backgroundColor: `rgb(${[220,220,220,1]})`,
	}
	
	// TODO: Make code reusable
	return (
		<div style={container} className={visit() ? 'appear' : ''}>
			<TopBar />
			<InfoBox />
		</div>
	)
}

export default About