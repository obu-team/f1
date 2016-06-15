import React from 'react'
import Radium from 'radium'

const style = {
	width: '100%',
	boxSizing: 'border-box',
	padding: 30
}

const PaperContent = (props) => <div style={style}>{props.children}</div>

export default Radium(PaperContent)
