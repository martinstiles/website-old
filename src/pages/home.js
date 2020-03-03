import React from 'react'
import '../animations/fadeIn.css'

// height 50% ??
const Home = () => {
	const fontColor = '#101010'
	const outerContainer = {
		width: '100%',
		height: '100%',
		textAlign: 'center',
		alignItems: 'center'
	}
	// Make this container generic (in app.js? and have it at all times and just change width?)
	const container = {
		position: 'absolute',
		width: '50%',
		height: '40%',
		top: '30%',
		marginLeft: '34%',
		zIndex: 3,
		textAlign: 'center',
		fontWeight: 'bold',
		backgroundColor: `rgb(${[220,220,220,0.97]})`,
		borderRadius: '15px',

		display: 'flex',
		flexDirection: 'column',
	}

	const headerStyle = {fontSize: '5em', color: fontColor, margin: '5% 3% 0 3%'}
	const infoStyle = {fontSize: '2em', color: fontColor, margin: '9% 3% 5% 3%'}

	return (
		<div style={container} className={'fadeIn'}>
			<h1 style={headerStyle}> MARTIN STILES </h1>
			<p style={infoStyle}> Web developer. Tech enthusiast. Eater of tacos.</p>
		</div>
	)
}

export default Home
