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
		padding: '15px 20px',
		position: 'fixed',
		top: 0,
		left: 0,
		zIndex: 100
	},
	logo: {
		height: 40
	},
	input: {
		width: 400,
		height: 40,
		margin: '0px 30px',
		display: 'inline-block',
		padding: 0
	},
	inpContainer: {
		borderRadius: 5,
		overflow: 'hidden'
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
				<img src='/img/f1_logo_dark.png' style={styles.logo} />
				<div style={styles.input}><SearchInput style={[styles.inpContainer]} inpStyle={[styles.inp]} recommend={this.props.recommend} value={this.props.value} onChange={this.props.onChange} onEnter={this.props.onEnter} onTab={this.props.onTab} /></div>
			</nav>
		)
	}
}

export default Radium(Nav)