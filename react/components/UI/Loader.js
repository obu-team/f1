import React, {PropTypes} from 'react'
import Radium from 'radium'

import colors from '../../lib/colors'

const style = {
	width: '60px',
  height: '60px',
  background: colors.red500,
  animation: 'sk-rotateplane 1.2s infinite ease-in-out'
}

const Loader = (props) => <div style={[style, props.style]} />

export default Radium(Loader)
