import React from 'react'

const About = () => {
	const container = {
		position: 'absolute',
		width: '96%',
		maxHeight: '85%',
		marginTop: '15%',
		margiRight: 'auto',
		marginLeft: '2%',
		zIndex: 3,
		textAlign: 'center',
		alignItems: 'center',
		backgroundColor: `rgb(${[10,10,10,0.7]})`,
		borderRadius: '15px',
		overflow: 'scroll',
		color: 'white',
		fontSize: '5vw'
	}

	// egen komponent for 'header box'
	// Bildeplassering blir tricky
	// Finn på masse info slik at man må scrolle??
	return (
		<div style={container}>
			HALLOOOOOOO
			<p> lol </p>
			<p> lol </p>
			<p> lol </p>
			<p> lol </p>
			<p> lol </p>
		</div>
	)
}

export default About