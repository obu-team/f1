import React from 'react'
import Radium from 'radium'

import Nav from './UI/Nav'
import GridContainer from './UI/GridContainer'

class SearchGrid extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				<Nav onHome={this.props.onHome} recommend={this.props.recommend} value={this.props.value} onChange={this.props.onChange} onEnter={this.props.onEnter} onTab={this.props.onTab} />
				<GridContainer query={this.props.query} entities={this.props.entities} />
			</div>
		)
	}
}

export default SearchGrid
