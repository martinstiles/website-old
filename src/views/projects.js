import React, {useState} from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import '../animations/fadeIn.css'
import ProjectSection from './projects/projectSection'
import ProjectBox from './projects/components/projectBox'
// IMAGES FOR PROJECTS
import StriseImage from '../media/strise_comp.png'
import RobotImage from '../media/robotProject.png'


const Projects = () => {
	const fontColor = `rgb(${[40,40,40,1]})`
	
	// TODO: make this and ther duplicate code in a common files folder ?
	// Checks to see if any other pages than home has been visitet, so the page doesn't fade in when you switch pages
	const visit = () => {
		const visited = sessionStorage.getItem('visited') !== 'true'
		if (visited) sessionStorage.setItem(`visited`, 'true')
		return visited
	}

	const smallScreen = useMediaQuery('(max-width:1000px)') // Boolean that is true if screen is 600px or less

	// Make this container generic (in app.js? and have it at all times and just change width?)
	// Evt lag en egen component for container
	const container = {
		position: 'fixed',
		width: '84%',
		marginLeft: '16%',
		height: '100%',
		overflow: 'scroll',
		zIndex: 3,
		textAlign: 'center',
		backgroundColor: `rgb(${[220,220,220,1]})`,
		color: fontColor,

		display: 'flex',
		flexDirection: smallScreen ? 'column' : 'row'
	}
	const column = {
		flex: smallScreen ? '100%' : '50%',
		maxWidth: smallScreen ? '100%' : '50%',
	}

	// 'both' or 'personal' or 'professional'
	const [view, setView] = useState('both')
	// TODO: make buttons to full screen one of the views
	
	//TODO: ADD STRISE
	return (
		<div style={container} className={visit() ? 'appear' : ''}>
			<div style={column}>
				<ProjectSection type={'personal'} smallScreen={smallScreen}>
					<ProjectBox
						image={RobotImage}
						desc={'React introductory project'}
						githubLink={'https://github.com/martinstiles/monsters-rolodex'}
						projectLink='https://martinstiles.github.io/monsters-rolodex/'
					/>
				</ProjectSection>
			</div>
			<div style={column}>
				<ProjectSection type={'professional'} smallScreen={smallScreen}>
					<ProjectBox
						image={StriseImage}
						desc={'Front end development for Strise'}
						projectLink='https://strise.ai/'
					/>
				</ProjectSection>
			</div>
		</div>
	)
}

export default Projects