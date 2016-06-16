import React from 'react'
import Radium from 'radium'

import colors from '../../lib/colors'

const style = {
	width: '100%',
	display: 'block',
	fontSize: '1rem',
	fontWeight: 300,
	margin: 0,
	padding: '10px 20px',
	boxSizing: 'border-box',
	background: '#1b1718',
	color: colors.white
}

const PaperHeader = (props) => <h1 style={style}>{props.children}</h1>

export default Radium(PaperHeader)
