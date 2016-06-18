import React from 'react'
import Radium from 'radium'

import colors from '../../lib/colors'
import Analyser from '../../lib/Analyser'
import Utils from '../../lib/Utils'

import MasonryGrid from './MasonryGrid'
import Paper from './Paper'
import PaperContent from './PaperContent'
import Profile from './Profile'
import Summary from './Summary'
import Loader from './Loader'
import CenterContainer from './CenterContainer'

const styles = {
	container: {
		width: '100%',
		minHeight: '100vh',
		boxSizing: 'border-box',
		padding: '80px 20px 20px 20px',
		background: colors.grey200
	},
	mansory: {
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
			summaries: [],
			entities: [],
			loaded: false
		}
	}
	componentWillMount() {
		this.parseEntities(this.props)
	}
	componentWillReceiveProps(nextProps) {
		this.parseEntities(nextProps)
	}
	parseEntities(props) {
		//if(!_.isEqual(this.state.entities, props.entities)) {
			Analyser.parseEntities(Utils.getQuery(), props.entities, data => this.setState({profiles: data.profiles, dates: data.dates, summaries: data.summaries, entities: props.entities, loaded: true}))
		//}
	}
	renderEmpty() {
		return <MasonryGrid><div style={styles.mansory} className='gridItem'><Paper><PaperContent><span className='lnr lnr-cross' /> No results found</PaperContent></Paper></div></MasonryGrid>
	}
	renderContent() {
		return (
			<MasonryGrid>
				{this.state.summaries.map(s => <div className='gridItem' key={s.name+s.type} style={[styles.mansory, styles.summary]}><Summary summary={s} /></div>)}
				{this.state.profiles.map(p => <div className='gridItem' key={p._id} style={styles.mansory}><Profile entity={p} /></div>)}
			</MasonryGrid>
		)
	}
	renderLoader() {
		return <MasonryGrid><div style={styles.mansory} className='gridItem'><Paper><PaperContent><CenterContainer><Loader /></CenterContainer></PaperContent></Paper></div></MasonryGrid>
	}
	render() {
		let {profiles, summaries, loaded} = this.state
		let cnt = null
		if(!loaded) {
			cnt = this.renderLoader()
		} else if(!profiles.length && !summaries.length) {
			cnt = this.renderEmpty()
		} else {
			cnt = this.renderContent()
		}
		return <div style={styles.container}>{cnt}</div>
	}
}

export default Radium(GridContainer)
