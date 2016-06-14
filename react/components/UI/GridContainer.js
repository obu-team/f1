import React from 'react'
import Radium from 'radium'

import colors from '../../lib/colors'

const styles = {
	container: {
		width: '100%',
		minHeight: '100vh',
		boxSizing: 'border-box',
		padding: '100px 40px 40px 40px',
		background: colors.grey200
	}
}

class GridContainer extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div style={styles.container}>
				Content
			</div>
		)
	}
}

export default Radium(GridContainer)
