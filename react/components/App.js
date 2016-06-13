import React from 'react'
import Radium from 'radium'

import SuggestionService from '../services/Suggestion.Service'
import colors from '../lib/colors'

import Loader from './UI/Loader'
import FullScreen from './UI/FullScreen'
import CenterContainer from './UI/CenterContainer'

const styles = {
	loader: {
		background: colors.red500
	}
}

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			init: false,
			suggestions: []
		}
	}
	componentWillMount() {
		SuggestionService.getSuggestions(data => {
			this.setState({
				init: true,
				suggestions: data
			})
		})
	}
	renderLoader() {
		return <FullScreen><CenterContainer><Loader style={[styles.loader]} /></CenterContainer></FullScreen>
	}
	renderContent() {
		var childrenWithProps = React.Children.map(this.props.children, child => React.cloneElement(child, {
        	suggestions: this.state.suggestions
        }))
		return <div>{childrenWithProps}</div>
	}
	render() {
		if(!this.state.init) {
			return this.renderLoader()
		}
		return this.renderContent()
	}
}

export default Radium(App)
