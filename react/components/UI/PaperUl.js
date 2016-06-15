import React from 'react'
import Radium from 'radium'

const style = {
	width: '100%',
	display: 'block'
}

const PaperUl = (props) => <div className='clear' style={style}>{props.children}</div>

export default Radium(PaperUl)
