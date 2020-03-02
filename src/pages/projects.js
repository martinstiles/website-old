import React from 'react'
import Container from '../components/container'

export const Projects = () => {
  const fontColor = '#101010'

  // Make this container generic (in app.js? and have it at all times and just change width?)
	// Evt lag en egen component for container
	const container = {
		position: 'fixed',
		width: '78%',
		top: '4%',
		right: '2%',
		marginLeft: '20%',
		maxHeight: '92%',
		overFlow: 'scroll',
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
		<Container>
			<h1 style={{fontSize: '5em', color: fontColor, opacity: 1}}> Projects </h1>
			<p style={{fontSize: '1.5em', color: fontColor, margin: '4vw 2vw'}}> Web developer. Tech enthusiast. Eater of tacos.</p>
			<p style={{fontSize: '1.5em', color: fontColor, margin: '4vw 2vw'}}> Web developer. Tech enthusiast. Eater of tacos.</p>
			<p style={{fontSize: '1.5em', color: fontColor, margin: '4vw 2vw'}}> Web developer. Tech enthusiast. Eater of tacos.</p>
			<p style={{fontSize: '1.5em', color: fontColor, margin: '4vw 2vw'}}> Web developer. Tech enthusiast. Eater of tacos.</p>
			<p style={{fontSize: '1.5em', color: fontColor, margin: '4vw 2vw'}}> Web developer. Tech enthusiast. Eater of tacos.</p>
			<p style={{fontSize: '1.5em', color: fontColor, margin: '4vw 2vw'}}> Web developer. Tech enthusiast. Eater of tacos.</p>
			<p style={{fontSize: '1.5em', color: fontColor, margin: '4vw 2vw'}}> Web developer. Tech enthusiast. Eater of tacos.</p>
			<p style={{fontSize: '1.5em', color: fontColor, margin: '4vw 2vw'}}> Web developer. Tech enthusiast. Eater of tacos.</p>
			<p style={{fontSize: '1.5em', color: fontColor, margin: '4vw 2vw'}}> Web developer. Tech enthusiast. Eater of tacos.</p>
		</Container>
	)
}

export default Projects
