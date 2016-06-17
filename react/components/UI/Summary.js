import React, {PropTypes} from 'react'
import Radium from 'radium'
import _ from 'lodash'

import colors from '../../lib/colors'
import F1Service from '../../services/F1.Service'
import Utils from '../../lib/Utils'

import Paper from './Paper'
import PaperContent from './PaperContent'
import PaperHeader from './PaperHeader'
import Loader from './Loader'
import CenterContainer from './CenterContainer'
import Table from './Table'

const style = {
	padding: 20,
	boxSizing: 'border-box',
	width: '100%'
}

class Summary extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [],
			error: false,
			loading: true,
			ths: []
		}
	}
	componentWillMount() {
		F1Service.getSummary(this.props.summary, (err, data) => {
			if(err) {
				this.setState({loading: false, error: true})
			} else {
				let ths = F1Service.resultsFormater(this.props.summary.type)
				this.setState({loading: false, error: false, data, ths})
				Utils.reposition()
			}
		})
	}
	renderLoader() {
		return <Paper><PaperContent><CenterContainer><Loader /></CenterContainer></PaperContent></Paper>
	}
	render() {
		const {loading, data, error, ths} = this.state
		if(loading) return this.renderLoader()
		if(error) return null
		return (
			<div style={style}>
				<Paper>
					<PaperHeader>{this.props.summary.name}</PaperHeader>
					<PaperContent>
						<Table headers={ths} data={data} />
					</PaperContent>
				</Paper>
			</div>
		)
	}
}

Summary.propTypes = {
	summary: PropTypes.object.isRequired
}

export default Radium(Summary)
