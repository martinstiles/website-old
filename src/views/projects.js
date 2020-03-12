import React from 'react'
import '../animations/fadeIn.css'

const Projects = () => {
	const fontColor = `rgb(${[40,40,40,1]})`
	
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
		backgroundColor: `rgb(${[220,220,220,1]})`,

		// display: 'flex'
	}
	/*
	const column = { flex: '50%', maxWidth: '50%' }
	*/
	
	// TODO: Make code reusable
	return (
		<div style={container} className={visit() ? 'appear' : ''}>
			<h1 style={{fontSize: `calc(${2}em + ${2}vw)`, color: fontColor, opacity: 1}}> About </h1>
			<p style={{fontSize: `calc(${1}em + ${1}vw)`, color: fontColor, margin: '4vw 2vw'}}> Web developer. Tech enthusiast. Eater of tacos.</p>
			<p style={{fontSize: `calc(${1}em + ${1}vw)`, color: fontColor, margin: '4vw 2vw'}}> Web developer. Tech enthusiast. Eater of tacos.</p>
			<p style={{fontSize: `calc(${1}em + ${1}vw)`, color: fontColor, margin: '4vw 2vw'}}> Web developer. Tech enthusiast. Eater of tacos.</p>
			<p style={{fontSize: `calc(${1}em + ${1}vw)`, color: fontColor, margin: '4vw 2vw'}}> Web developer. Tech enthusiast. Eater of tacos.</p>
			<p style={{fontSize: `calc(${1}em + ${1}vw)`, color: fontColor, margin: '4vw 2vw'}}> Web developer. Tech enthusiast. Eater of tacos.</p>
			<p style={{fontSize: `calc(${1}em + ${1}vw)`, color: fontColor, margin: '4vw 2vw'}}> Web developer. Tech enthusiast. Eater of tacos.</p>
			<p style={{fontSize: `calc(${1}em + ${1}vw)`, color: fontColor, margin: '4vw 2vw'}}> Web developer. Tech enthusiast. Eater of tacos.</p>
			<p style={{fontSize: `calc(${1}em + ${1}vw)`, color: fontColor, margin: '4vw 2vw'}}> Web developer. Tech enthusiast. Eater of tacos.</p>
			<p style={{fontSize: `calc(${1}em + ${1}vw)`, color: fontColor, margin: '4vw 2vw'}}> Web developer. Tech enthusiast. Eater of tacos.</p>
		</div>
	)
}

export default Projects