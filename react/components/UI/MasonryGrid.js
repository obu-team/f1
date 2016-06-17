import React from 'react'
import Radium from 'radium'
import Masonry from 'masonry-layout'
import imagesLoaded from 'imagesloaded'
import $ from 'jquery'

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
		this.man = null
	}
	componentDidMount() {
		this.gridLayout()
	}
	componentDidUpdate(nextProps, nextState) {
		this.gridLayout()
	}
	componentWillReceiveProps(nextProps) {
		this.gridLayout()
	}
	gridLayout() {
		let grid = document.querySelector('.masonryGrid')
		imagesLoaded(grid, () => {
			this.man = new Masonry(grid, {
		  	itemSelector: '.gridItem',
		  	columnWidth: '.gridSizer',
			  percentPosition: true
		  })
		})
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
