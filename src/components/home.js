import React from 'react'

// height 50% ??
const Home = () => {
	const container = {
		position: 'absolute',
		width: '50%',
		marginTop: '15%',
		margiRight: 'auto',
		marginLeft: '25%',
		zIndex: 3,
		textAlign: 'center',
		alignItems: 'center',
		fontWeight: 'bold',
		backgroundColor: '#4C6663',
		borderRadius: '15px'
	}

	return (
		<div style={container}>
			<h1 style={{fontSize: '5vw', color: 'black', opacity: 1}}> MARTIN STILES </h1>
			<p style={{fontSize: '1.5vw', color: 'black', margin: '4vw 2vw'}}> Web developer. Tech enthusiast. Friendly neighborhood spiderman.</p>
		</div>
	)
}

export default Home
