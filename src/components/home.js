import React from 'react'
import Background from '../media/Background.JPG'

const Home = () => {
	const style = {
		maxWidth: '100%',
		maxHeight: '100%',
		opacity: '0.8',
		zIndex: -100,
	}
	return (
		<div>
			<img style={style} src={Background} alt='' />
		</div>
	)
}

export default Home
