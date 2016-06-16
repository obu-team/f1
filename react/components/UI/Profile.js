import React, {PropTypes} from 'react'
import Radium from 'radium'
import _ from 'lodash'

import colors from '../../lib/colors'
import EntityService from '../../services/Entity.Service'
import F1Service from '../../services/F1.Service'
import Utils from '../../lib/Utils'

import Paper from './Paper'
import PaperContent from './PaperContent'
import PaperImg from './PaperImg'
import PaperHeader from './PaperHeader'
import PaperUl from './PaperUl'
import PaperLi from './PaperLi'
import PaperLine from './PaperLine'
import PaperBtn from './PaperBtn'
import Loader from './Loader'
import CenterContainer from './CenterContainer'

const exclude = ['thumbnail', 'depiction', 'birthPlace', 'wikiPageID', 'abstract', 'location']

const styles = {
	reload: {
		cursor: 'pointer',
		':hover': {
			color: colors.red500
		}
	}
}

class Profile extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			entity: null,
			err: false
		}
		this.reload = this.reload.bind(this)
	}
	componentWillMount() {
		if(this.props.entity.data) {
			this.setState({entity: this.props.entity.data})
		} else {
			this.fetchSparql()
		}
	}
	reload() {
		this.setState({
			entity: null,
			err: false
		})
		this.fetchSparql()
	}
	fetchSparql() {
		EntityService.getEntity(this.props.entity, (err, res) => {
			if(err || !res.body.results.bindings.length) return this.fetchApi()
			this.setState({entity: res.body.results.bindings[0]})
		})
	}
	fetchApi() {
		F1Service.getEntity(this.props.entity, (err, res) => {
			if(err) return this.setState({entity: null, err: true})
			this.setState({
				entity: res,
				err: false
			})
		})
	}
	renderLoader() {
		return <Paper><PaperContent><CenterContainer><Loader /></CenterContainer></PaperContent></Paper>
	}
	renderContent() {
		let {entity} = this.state
		let img = _.has(entity, 'depiction') ? <PaperImg src={entity.depiction.value} /> : null
		let href = _.has(entity, 'wikiPageID') ? <div><PaperLine /><PaperBtn href={`https://en.wikipedia.org/?curid=${entity.wikiPageID.value}`}>Read More</PaperBtn></div> : null
		let keys = _(entity).keys().filter(k => _.indexOf(exclude, k)==-1).value()
		return (
			<Paper>
				{img}
				<PaperHeader>{this.props.entity.name}</PaperHeader>
				<PaperContent>
					<PaperUl>
						{keys.map(k => {
							return <PaperLi key={`${this.props.entity._id}-${k}`} head={Utils.capitalize(k)}>{Utils.formatEntityString(entity[k].value)}</PaperLi>
						})}
					</PaperUl>
					{href}
				</PaperContent>
			</Paper>
		)
	}
	renderAgainBtn() {
		return (
			<Paper>
				<PaperContent>
					<PaperHeader>{this.props.entity.name}</PaperHeader>
					<span style={styles.reload} onClick={this.reload}>Could not fetch data. Click to try again</span>
				</PaperContent>
			</Paper>
		)
	}
	render() {
		if(this.state.err) return this.renderAgainBtn()
		if(!this.state.entity) return this.renderLoader()
		return this.renderContent()
	}
}

Profile.propTypes = {
	entity: PropTypes.object.isRequired
}

export default Radium(Profile)
