import React from 'react'
import Radium from 'radium'
import Masonry from 'masonry-layout'
import imagesLoaded from 'imagesloaded'
import $ from 'jquery'

import Utils from '../../lib/Utils'

const styles = {
	grid: {
		width: '100%'
	},
	sizer: {
		width: '25%'
	}
}

class MasonryGrid extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		this.gridLayout()
	}
	componentDidUpdate(nextProps, nextState) {
		this.gridLayout()
	}
	/*componentWillReceiveProps(nextProps) {
		this.gridLayout()
	}*/
	gridLayout() {
		let grid = document.querySelector('.masonryGrid')
		Utils.reposition()
		imagesLoaded(grid, () => Utils.reposition())
	}
	render() {
		return (
			<div className='masonryGrid' style={styles.grid}>
				<div className='gridSizer' style={styles.sizer} />
				{this.props.children}
			</div>
		)
	}
}

export default Radium(MasonryGrid)
