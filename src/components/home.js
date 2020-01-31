import React from 'react'

const Home = () => {
	const container = {
		position: 'fixed',
		width: '40%',
		marginTop: '12%',
		margiRight: 'auto',
		marginLeft: '30%',
		zIndex: 3,
		textAlign: 'center',
		alignItems: 'center',
		fontWeight: 'bold'
	}

	return (
		<div style={container}>
			<h1 style={{fontSize: '5vw'}}> MARTIN STILES </h1>
			<p style={{fontSize: '1.5vw'}}> Web developer. Tech enthusiast. Friendly neighborhood spiderman.</p>
		</div>
	)
}

export default Home
