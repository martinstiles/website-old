import React from 'react'

// height 50% ??
const Home = () => {
	const container = {
		position: 'absolute',
		width: '50%',
		marginTop: '15%',
		margiRight: 'auto',
		marginLeft: '34%',
		zIndex: 3,
		textAlign: 'center',
		alignItems: 'center',
		fontWeight: 'bold',
		backgroundColor: `rgb(${[10,10,10,0.7]})`,
		borderRadius: '15px'
	}

	return (
		<div style={container}>
			<h1 style={{fontSize: '5vw', color: 'white', opacity: 1}}> MARTIN STILES </h1>
			<p style={{fontSize: '1.5vw', color: 'white', margin: '4vw 2vw'}}> Web developer. Tech enthusiast. Friendly neighborhood spiderman.</p>
		</div>
	)
}

export default Home
