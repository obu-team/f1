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
	button: {
		background: colors.grey800,
		border: 'none',
		borderRadius: 5,
		margin: 0,
		marginTop: 34,
		color: colors.white,
		fontWeight: 400,
		padding: 10,
		cursor: 'pointer',
		fontSize: '1rem'
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
			error: false,
			src: '',
			recommend: ''
		}
		this.onSrcChange = this.onSrcChange.bind(this)
		this.search = this.search.bind(this)
	}
	onSrcChange(v) {
		let rec = ''
		if(v.length>=3) {
			let r = _.find(this.props.suggestions, s => {
				return s.toLowerCase().startsWith(v.toLowerCase())
			})
			r = r || ''
			if(r) rec = r.substring(v.length)
		}
		this.setState({
			src: v,
			recommend: rec,
			error: false
		})
	}
	search() {
		if(!this.state.src) return false
		let src = this.state.src + this.state.recommend
		this.setState({
			search: true,
			error: false,
			src: src,
			recommend: ''
		})
		TextAnalysisService.analyse(src, (err, res) => {
			console.log(res.body)
			this.setState({
				search: false
			})
		})
	}
	render() {
		const {search, modal} = this.state
		const loader = this.state.search ? <FullScreen style={[styles.loader.container]}><CenterContainer><Loader style={[styles.loader.loader]} /></CenterContainer></FullScreen> : null
		return (
			<div>
				{loader}
				<FullScreen style={[styles.ease, search || modal ? styles.blur : null]}>
					<CenterContainer>
						<img src='/img/f1_logo.png' style={styles.logo} /><br/>
						<div style={styles.input}><SearchInput recommend={this.state.recommend} value={this.state.src} onChange={this.onSrcChange} onEnter={this.search} /></div><br/>
						<button style={[styles.button, styles.ease]} onClick={this.search}><i className='fa fa-search' />&nbsp; Search</button>
					</CenterContainer>
				</FullScreen>
			</div>
		)
	}
}

export default Radium(Dashboard)
