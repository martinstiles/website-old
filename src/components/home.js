import React from 'react'

const Home = () => {
	const container = {
		position: 'absolute',
		width: '50%',
		marginTop: '12%',
		margiRight: 'auto',
		marginLeft: '30%',
		zIndex: 3,
		textAlign: 'center',
		alignItems: 'center',
		fontWeight: 'bold',
		backgroundColor: `rgb(${[0,0,0,0.7]})`,
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
