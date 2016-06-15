import React from 'react'
import Radium from 'radium'

const styles = {
	container: {
		width: '50%',
		fontWeight: 300,
		marginBottom: 15,
		float: 'left'
	},
	h2: {
		width: '100%',
		margin: 0,
		padding: 0,
		fontSize: '1rem',
		fontWeight: 400
	},
	txt: {
		width: '100%',
		fontSize: '1rem',
	}
}

const PaperLi = (props) => <div style={styles.container}><h2 style={styles.h2}>{props.head}</h2><div style={styles.txt}>{props.children}</div></div>

export default Radium(PaperLi)