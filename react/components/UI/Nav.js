import React from 'react'
import Radium from 'radium'

import colors from '../../lib/colors'

import SearchInput from './SearchInput'

const styles = {
	container: {
		background: '#1b1718',
		width: '100%',
		height: 70,
		boxSizing: 'border-box',
		padding: '15px 40px',
		position: 'fixed',
		top: 0,
		left: 0,
		zIndex: 100
	},
	logo: {
		height: 40,
		cursor: 'pointer'
	},
	input: {
		width: 400,
		height: 40,
		display: 'inline-block',
		padding: 0,
		float: 'right'
	},
	inp: {
		border: `1px solid ${colors.white}`,
		':focus': {
			border: `1px solid ${colors.white}`
		}
	}
}

class Nav extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<nav style={styles.container}>
				<img src='/img/f1_logo_dark.png' onClick={this.props.onHome} style={styles.logo} />
				<div style={styles.input}><SearchInput inpStyle={[styles.inp]} recommend={this.props.recommend} value={this.props.value} onChange={this.props.onChange} onEnter={this.props.onEnter} onTab={this.props.onTab} /></div>
			</nav>
		)
	}
}

export default Radium(Nav)
