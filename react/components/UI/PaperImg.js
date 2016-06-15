import React from 'react'
import Radium from 'radium'

const style = {
	width: '100%',
	display: 'block'
}

const PaperImg = (props) => <img src={props.src} style={style} />

export default Radium(PaperImg)
