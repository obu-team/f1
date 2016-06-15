import React from 'react'
import Radium from 'radium'

const style = {
	width: '100%',
	display: 'block',
	fontSize: '1.5rem',
	fontWeight: 300,
	marginBottom: 30,
	padding: 0
}

const PaperHeader = (props) => <h1 style={style}>{props.children}</h1>

export default Radium(PaperHeader)
