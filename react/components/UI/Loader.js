import React, {PropTypes} from 'react'
import Radium from 'radium'

const style = {
	width: '60px',
  height: '60px',
  background: '#fff',
  animation: 'sk-rotateplane 1.2s infinite ease-in-out'
}

const Loader = (props) => <div style={[style, props.style]} />

export default Radium(Loader)
