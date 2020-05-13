import React from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import '../animations/fadeIn.css'
import TopBar from './about/topBar'
import AboutBox from './about/aboutBox'

const About = () => {
	const isSmallScreen = useMediaQuery('(max-width:800px)') // Boolean that is true if screen is 600px or less
	
	// Checks to see if any other pages than home has been visitet, so the page doesn't fade in when you switch pages
	const visit = () => {
		const visited = sessionStorage.getItem('visited') !== 'true'
		if (visited) sessionStorage.setItem(`visited`, 'true')
		return visited
	}
	
	const marginLeft = isSmallScreen ? '0%' : '16%'
	const width = isSmallScreen ? '100%' : '84%'
	const marginTop = isSmallScreen ? '10%' : '0'
	const height = isSmallScreen ? '90%' : '100%'

	const container = {
		position: 'fixed',
		width,
		marginLeft,
		marginTop,
		height,
		bottom: 0,
		overflow: 'scroll',
		textAlign: 'center',
		fontWeight: 'bold',
		backgroundColor: `rgb(${[220,220,220,1]})`,
	}
	
	// TODO: Make code reusable
	return (
		<div style={container} className={visit() ? 'appear' : ''}>
			<TopBar />
			<AboutBox />
		</div>
	)
}

export default About