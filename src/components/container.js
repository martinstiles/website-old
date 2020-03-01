import React from 'react'

const Container = (props) => {
	const container = {
		position: 'fixed',
		width: '78%',
		top: '4%',
		right: '2%',
		marginLeft: '20%',
		maxHeight: '92%',
		overFlow: 'scroll',
		bottom: '4%',
		textAlign: 'center',
		alignItems: 'center',
		fontWeight: 'bold',
		backgroundColor: `rgb(${[220,220,220,0.95]})`,
		borderRadius: '15px'
	}

	return <div style={container}></div>
}

export default Container