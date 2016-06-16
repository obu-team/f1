import React from 'react'
import Radium from 'radium'

import colors from '../../lib/colors'

const style = {
	display: 'block',
	border: 'none',
	margin: 0,
	padding: '10px',
	color: colors.white,
	background: colors.red500,
	fontSize: '.8rem',
	fontWeight: 400,
	fontFamily: 'inherit',
	cursor: 'pointer',
	transition: 'all 0.1s ease-in-out',
	':hover': {
		background: colors.red700
	}
}

const PaperBtn = (props) => <a href={props.href} target='_blank'><button style={style}>{props.children}</button></a>

PaperBtn.defaultProps = {
	style: {}
}

export default Radium(PaperBtn)
