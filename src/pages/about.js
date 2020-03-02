import React from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery';

const About = () => {
	const fontColor = '#101010'
	const smallScreen = useMediaQuery('(max-width:600px)') // Boolean that is true if screen is 600px or less
	if (smallScreen) { console.log('JAJAJAJA')}

	// Make this container generic (in app.js? and have it at all times and just change width?)
	// Evt lag en egen component for container
	const container = {
		position: 'fixed',
		width: '78%',
		top: '4%',
		right: '2%',
		marginLeft: '20%',
		maxHeight: '92%',
		overflow: 'scroll',
		bottom: '4%',
		zIndex: 3,
		textAlign: 'center',
		alignItems: 'center',
		fontWeight: 'bold',
		backgroundColor: `rgb(${[220,220,220,0.97]})`,
		borderRadius: '15px'
	}

	// TODO: Make code reusable
	return (
		<div style={container}>
			<h1 style={{fontSize: '5em', color: fontColor, opacity: 1}}> About </h1>
			<p style={{fontSize: '1.5em', color: fontColor, margin: '4vw 2vw'}}> Web developer. Tech enthusiast. Eater of tacos.</p>
			<p style={{fontSize: '1.5em', color: fontColor, margin: '4vw 2vw'}}> Web developer. Tech enthusiast. Eater of tacos.</p>
			<p style={{fontSize: '1.5em', color: fontColor, margin: '4vw 2vw'}}> Web developer. Tech enthusiast. Eater of tacos.</p>
			<p style={{fontSize: '1.5em', color: fontColor, margin: '4vw 2vw'}}> Web developer. Tech enthusiast. Eater of tacos.</p>
			<p style={{fontSize: '1.5em', color: fontColor, margin: '4vw 2vw'}}> Web developer. Tech enthusiast. Eater of tacos.</p>
			<p style={{fontSize: '1.5em', color: fontColor, margin: '4vw 2vw'}}> Web developer. Tech enthusiast. Eater of tacos.</p>
			<p style={{fontSize: '1.5em', color: fontColor, margin: '4vw 2vw'}}> Web developer. Tech enthusiast. Eater of tacos.</p>
			<p style={{fontSize: '1.5em', color: fontColor, margin: '4vw 2vw'}}> Web developer. Tech enthusiast. Eater of tacos.</p>
			<p style={{fontSize: '1.5em', color: fontColor, margin: '4vw 2vw'}}> Web developer. Tech enthusiast. Eater of tacos.</p>
		</div>
	)
}

export default About