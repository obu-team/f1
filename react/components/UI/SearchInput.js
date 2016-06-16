import React, {PropTypes} from 'react'
import Radium from 'radium'

import colors from '../../lib/colors'

const styles = {
	container: {
		width: '100%',
		height: '100%',
		position: 'relative',
		background: colors.white,
		overflow: 'hidden'
	},
	inpContainer: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		boxSizing: 'border-box',
		background: 'none',
		border: `none`,
		fontWeight: 300,
		padding: '5px 45px 5px 5px',
		fontSize: '1rem',
		textAlign: 'left',
		fontFamily: 'Roboto',
		margin: 0,
		':focus': {
			outline: 'none',
			//border: `1px solid ${colors.grey800}`
		}
	},
	recommend: {
		color: colors.grey500,
		paddingTop: 9
	},
	ease: {
		transition: 'all 0.1s ease-in-out'
	},
	whiteSpace: {
		color: colors.white
	},
	icon: {
		position: 'absolute',
		width: 40,
		height: 40,
		top: 0,
		right: 0,
		display: 'block',
		fontSize: '1em',
		background: colors.grey800,
		color: colors.white,
		border: 'none',
		padding: 0,
		cursor: 'pointer',
		':hover': {
			color: colors.grey500
		}
	}
}

class SearchInput extends React.Component {
	constructor(props) {
		super(props)
		this.onKey = this.onKey.bind(this)
		this.onKeyDown = this.onKeyDown.bind(this)
	}
	onKey(e) {
		if(e.key == 'Enter') this.props.onEnter()
	}
	onKeyDown(e) {
		if(e.key == 'Tab') {
			e.preventDefault()
			this.props.onTab()
		}
	}
	render() {
		return (
			<div style={[styles.container, this.props.style]}>
				<div style={[styles.inpContainer, styles.recommend, this.props.inpStyle]}><span style={styles.whiteSpace}>{this.props.value}</span>{this.props.recommend}</div>
				<input key='inputSrc' type='text' style={[styles.ease, styles.inpContainer, this.props.inpStyle]} value={this.props.value} onChange={e => this.props.onChange(e.target.value)} onKeyPress={this.onKey} onKeyDown={this.onKeyDown} />
				<button style={[styles.icon, styles.ease]} key='internalSrcButton' onClick={e => this.props.onEnter()}><i className='fa fa-search' /></button>
			</div>
		)
	}
}

SearchInput.defaultProps = {
	style: {},
	value: '',
	recommend: '',
	inpStyle: {}
}

export default Radium(SearchInput)
