import React from 'react'
import Radium from 'radium'
import Masonry from 'react-masonry-component'

import colors from '../../lib/colors'

import Paper from './Paper'
import PaperContent from './PaperContent'

const styles = {
	container: {
		width: '100%',
		minHeight: '100vh',
		boxSizing: 'border-box',
		padding: '100px 40px 40px 40px',
		background: colors.grey200
	},
	mansory: {
		padding: 20,
		boxSizing: 'border-box',
		width: '50%'
	}
}

class GridContainer extends React.Component {
	constructor(props) {
		super(props)
	}
	renderEmpty() {
		return (
			<Masonry elementType={'div'}><div style={styles.mansory}><Paper><PaperContent><span className='lnr lnr-cross' /> No results found</PaperContent></Paper></div></Masonry>
		)
	}
	renderContent() {
		return null
	}
	render() {
		let cnt = this.props.entities.length ? this.renderContent() : this.renderEmpty()
		return <div style={styles.container}>{cnt}</div>
	}
}

export default Radium(GridContainer)
