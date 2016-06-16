import React from 'react'
import Radium from 'radium'

import colors from '../../lib/colors'

const style = {
	width: '100%',
	display: 'block',
	background: colors.grey200,
	height: 1,
	margin: '10px 0 20px 0'
}

const PaperLine = (props) => <div style={style} />

export default Radium(PaperLine)
