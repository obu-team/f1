import React from 'react'
import Radium from 'radium'

const style = {
	width: '100%',
	height: '100vh'
}

const FullScreen = (props) => <div style={[style, ...props.style]}>{props.children}</div>

FullScreen.defaultProps = {
  style: {}
}

export default Radium(FullScreen)
