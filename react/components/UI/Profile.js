import React, {PropTypes} from 'react'
import Radium from 'radium'
import _ from 'lodash'

import colors from '../../lib/colors'
import EntityService from '../../services/Entity.Service'

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

const exclude = ['thumbnail', 'depiction', 'birthPlace', 'wikiPageID']

class Profile extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			entity: null
		}
	}
	componentWillMount() {
		EntityService.getEntity(this.props.entity, (err, res) => {
			if(err) return false
			console.log(res.body.results.bindings[0])
			this.setState({entity: res.body.results.bindings[0]})
		})
	}
	renderLoader() {
		return <Paper><PaperContent><CenterContainer><Loader /></CenterContainer></PaperContent></Paper>
	}
	renderContent() {
		let {entity} = this.state
		let img = entity.depiction.value
		let href = entity.wikiPageID.value
		let keys = _(entity).keys().filter(k => _.indexOf(exclude, k)==-1).value()
		return (
			<Paper>
				<PaperImg src={img} />
				<PaperContent>
					<PaperHeader>{this.props.entity.name}</PaperHeader>
					<PaperUl>
						{keys.map(k => <PaperLi key={`${this.props.entity._id}-${k}`} head={k}>{entity[k].value}</PaperLi>)}
					</PaperUl>
					<PaperLine />
					<PaperBtn href={href}>Read More</PaperBtn>
				</PaperContent>
			</Paper>
		)
	}
	render() {
		return this.state.entity ? this.renderContent() : this.renderLoader()
	}
}

Profile.propTypes = {
	entity: PropTypes.object.isRequired
}

export default Radium(Profile)
