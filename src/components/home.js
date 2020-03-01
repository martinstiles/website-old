import React from 'react'
import './animations/fadeIn.css'

// height 50% ??
const Home = () => {
	const fontColor = '#101010'

	// Make this container generic (in app.js? and have it at all times and just change width?)
	const container = {
		position: 'absolute',
		width: '50%',
		height: '40%',
		top: '30%',
		// margiRight: 'auto',
		marginLeft: '25%',
		zIndex: 3,
		textAlign: 'center',
		alignItems: 'center',
		fontWeight: 'bold',
		backgroundColor: `rgb(${[220,220,220,0.95]})`,
		borderRadius: '15px',
	}

	return (
		<div style={container} className={'fadeIn'}>
			<h1 style={{fontSize: '6em', color: fontColor, opacity: 1}}> MARTIN STILES </h1>
			<p style={{fontSize: '2em', color: fontColor}}> Web developer. Tech enthusiast. Eater of tacos.</p>
		</div>
	)
}

export default Home
