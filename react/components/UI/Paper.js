import React from 'react'
import Radium from 'radium'

import colors from '../../lib/colors'

const style = {
	width: '100%',
	background: colors.white,
	boxShadow: '0 -1px 0 #e5e5e5, 0 0 2px rgba(0, 0, 0, .12), 0 2px 4px rgba(0, 0, 0, .24)'
}

const Paper = (props) => <div style={[style, props.style]}>{props.children}</div>

Paper.defaultProps = {
	style: {}
}

export default Radium(Paper)
