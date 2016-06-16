import React from 'react'
import Radium from 'radium'
import _ from 'lodash'
import async from 'async'

import colors from '../lib/colors'
import TextAnalysisService from '../services/TextAnalysis.Service'

import Loader from './UI/Loader'
import FullScreen from './UI/FullScreen'
import CenterContainer from './UI/CenterContainer'
import SearchInput from './UI/SearchInput'
import SearchGrid from './SearchGrid'

const styles = {
	logo: {
		height: 100
	},
	input: {
		width: 550,
		height: 40,
		display: 'inline-block',
		marginTop: 34
	},
	ease: {
		transition: 'all 0.1s ease-in-out'
	},
	blur: {
		filter: 'blur(10px)'
	},
	loader: {
		container: {
			position: 'fixed',
			top: 0,
			left: 0,
			zIndex: 10000
		},
		loader: {
			background: colors.red500
		}
	}
}

class Dashboard extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			search: false,
			modal: false,
			src: '',
			recommend: '',
			entities: []
		}
		this.onSrcChange = this.onSrcChange.bind(this)
		this.search = this.search.bind(this)
		this.onTab = this.onTab.bind(this)
		this.onHome = this.onHome.bind(this)
	}
	onSrcChange(v) {
		let rec = ''
		let words = v.split(' ')
		let word = _.last(words)
		if(word && word.length>=2) {
			let r = _.find(this.props.suggestions, s => {
				return s.toLowerCase().startsWith(word.toLowerCase())
			})
			r = r || ''
			if(r) rec = r.substring(word.length)
		}
		this.setState({
			src: v,
			recommend: rec
		})
	}
	onTab() {
		let {src, recommend} = this.state
		this.setState({
			src: src + recommend,
			recommend: ''
		})
	}
	onHome() {
		this.setState({
			search: false,
			modal: false,
			src: '',
			recommend: '',
			entities: []
		})
	}
	search() {
		if(!this.state.src) return false
		let src = this.state.src + this.state.recommend
		this.setState({
			search: true,
			src: src,
			recommend: ''
		})
		TextAnalysisService.analyse(src, (err, res) => {
			this.setState({
				search: false,
				entities: res,
				modal: true
			})
		})
	}
	renderFullSrc() {
		return (
			<FullScreen>
				<CenterContainer>
					<img src='/img/f1_logo.png' style={styles.logo} /><br/>
					<div style={styles.input}><SearchInput recommend={this.state.recommend} value={this.state.src} onChange={this.onSrcChange} onEnter={this.search} onTab={this.onTab} /></div><br/>
				</CenterContainer>
			</FullScreen>
		)
	}
	renderGrid() {
		return <SearchGrid query={this.state.src} onHome={this.onHome} recommend={this.state.recommend} value={this.state.src} onChange={this.onSrcChange} onEnter={this.search} onTab={this.onTab} entities={this.state.entities} />
	}
	render() {
		const {search, modal} = this.state
		const loader = this.state.search ? <FullScreen style={[styles.loader.container]}><CenterContainer><Loader style={[styles.loader.loader]} /></CenterContainer></FullScreen> : null
		let cnt = this.state.modal ? this.renderGrid() : this.renderFullSrc()
		return (
			<div>
				{loader}
				<div style={[styles.ease, search ? styles.blur : null]}>
					{cnt}
				</div>
			</div>
		)
	}
}

export default Radium(Dashboard)
