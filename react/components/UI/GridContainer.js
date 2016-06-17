import React from 'react'
import Radium from 'radium'

import colors from '../../lib/colors'
import Analyser from '../../lib/Analyser'

import MasonryGrid from './MasonryGrid'
import Paper from './Paper'
import PaperContent from './PaperContent'
import Profile from './Profile'

const styles = {
	container: {
		width: '100%',
		minHeight: '100vh',
		boxSizing: 'border-box',
		padding: '80px 20px 20px 20px',
		background: colors.grey200
	},
	mansory: {
		padding: 20,
		boxSizing: 'border-box',
		width: '25%'
	},
	summary: {
		width: '50%'
	}
}

class GridContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			profiles: [],
			dates: [],
			summaries: []
		}
	}
	componentWillMount() {
		this.parseEntities(this.props)
	}
	componentWillReceiveProps(nextProps) {
		this.parseEntities(nextProps)
	}
	parseEntities(props) {
		Analyser.parseEntities(this.props.query, props.entities, data => this.setState(data))
	}
	renderEmpty() {
		return <MasonryGrid><div style={styles.mansory} className='gridItem'><Paper><PaperContent><span className='lnr lnr-cross' /> No results found</PaperContent></Paper></div></MasonryGrid>
	}
	renderContent() {
		return (
			<MasonryGrid>
				{this.state.profiles.map(p => <div className='gridItem' key={p._id} style={styles.mansory}><Profile entity={p} /></div>)}
			</MasonryGrid>
		)
	}
	render() {
		let cnt = this.props.entities.length ? this.renderContent() : this.renderEmpty()
		return <div style={styles.container}>{cnt}</div>
	}
}

export default Radium(GridContainer)
