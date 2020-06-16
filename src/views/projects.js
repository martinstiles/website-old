import React from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import '../animations/fadeIn.css'
import ProjectSection from './projects/projectSection'
import ProjectBox from './projects/components/projectBox'
// IMAGES FOR PROJECTS
import StriseImage from '../media/strise.png'
import RobotImage from '../media/robotProject.png'
import AlgorithmVisualizer from '../media/pathfindingVisualizer.gif'
import SortingVisualizer from '../media/sortingVisualizer.gif'


const Projects = () => {
	const fontColor = `rgb(${[40,40,40,1]})`
	
	const visit = () => {
		const visited = sessionStorage.getItem('visited') !== 'true'
		if (visited) sessionStorage.setItem(`visited`, 'true')
		return visited
	}

	const isSmallScreen = useMediaQuery('(max-width:800px)') // Boolean that is true if screen is 1000px or less

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
		zIndex: 3,
		textAlign: 'center',
		backgroundColor: `rgb(${[220,220,220,1]})`,
		color: fontColor,

		display: 'flex',
		flexDirection: isSmallScreen ? 'column' : 'row'
	}
	const column = {
		flex: isSmallScreen ? '100%' : '50%',
		maxWidth: isSmallScreen ? '100%' : '50%',
	}

	// 'both' or 'personal' or 'professional'
	// const [view, setView] = useState('both')
	// TODO: make buttons to full screen one of the views
	
	return (
		<div style={container} className={visit() ? 'appear' : ''}>
			<div style={column}>
				<ProjectSection type={'personal'} isSmallScreen={isSmallScreen}>
					{ isSmallScreen && <p> NB: These projects might not be optimized for small screens! </p> }
					<ProjectBox
						image={AlgorithmVisualizer}
						desc={'Visualizing path finding algorithms with Javascript (React)'}
						githubLink={'https://github.com/martinstiles/pathfinding-visualizer/'}
						projectLink='https://martinstiles.github.io/pathfinding-visualizer/'
					/>
					<ProjectBox
						image={SortingVisualizer}
						desc={'Visualizing sorting algorithms with Javascript (React)'}
						githubLink={'https://github.com/martinstiles/sorting-visualizer/'}
						projectLink='https://martinstiles.github.io/sorting-visualizer/'
					/>
					<ProjectBox
						image={RobotImage}
						desc={'React introductory project'}
						githubLink={'https://github.com/martinstiles/monsters-rolodex'}
						projectLink='https://martinstiles.github.io/monsters-rolodex/'
					/>
				</ProjectSection>
			</div>
			<div style={column}>
				<ProjectSection type={'professional'} isSmallScreen={isSmallScreen}>
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