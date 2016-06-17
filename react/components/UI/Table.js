import React, {PropTypes} from 'react'
import Radium from 'radium'
import uuid from 'node-uuid'

import colors from '../../lib/colors'
import Utils from '../../lib/Utils'

const styles = {
	container: {
		width: '100%',
		fontSize: '.8em',
		display: 'table'
	},
	row: {
		width: '100%',
		padding: 0,
		margin: 0,
		display: 'table-row',
		':hover': {
			background: colors.grey200
		}
	},
	header: {
		textTransform: 'uppercase',
		color: colors.grey800
	},
	odd: {
		background: colors.grey100,
		':hover': {
			background: colors.grey200
		}
	},
	cell: {
		padding: 10,
		display: 'table-cell',
		verticalAlign: 'middle'
	}
}

const Table = (props) => {
	let cnt = 0
	let width = {width: `${100/props.headers.length}%`}
	return (
		<div className='clear' style={styles.container}>
			<div style={[styles.row, styles.header]} key={uuid.v4()}>{props.headers.map(h => <div key={uuid.v4()} style={[styles.cell]}>{h.name}</div>)}</div>
			{props.data.map(d => {
				cnt++
				let odd = cnt%2 ? styles.odd : {}
				return (
					<div key={uuid.v4()} style={[styles.row, odd]}>
						{props.headers.map(h => <div key={uuid.v4()} style={[styles.cell]}>{Utils.formatEntityString(Utils.pluckValue(d, h.key))}</div>)}
					</div>
				)
			})}
		</div>
	)
}

Table.propTypes = {
	headers: PropTypes.array.isRequired,
	data: PropTypes.array.isRequired
}

export default Radium(Table)
