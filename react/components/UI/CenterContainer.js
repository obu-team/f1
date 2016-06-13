import React, {PropTypes} from 'react'
import Radium from 'radium'

const style = {
	centerBlockStyle: {
		width: '100%',
		height: '100%',
		maxHeight: '100%',
		overflow: 'auto',
		textAlign: 'center'
	},
	centerContentStyle: {
		display: 'inline-block',
		verticalAlign: 'middle',
		boxSizing: 'border-box'
	}
}

const CenterContainer = (props) => <div style={[style.centerBlockStyle, ...props.style]} id='centerContent'><div style={[style.centerContentStyle, ...props.boxStyle]}>{props.children}</div></div>

CenterContainer.defaultProps = {
  style: {},
  boxStyle: {}
}

export default Radium(CenterContainer)
