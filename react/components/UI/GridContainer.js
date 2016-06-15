import React from 'react'
import Radium from 'radium'
import Masonry from 'react-masonry-component'

import colors from '../../lib/colors'

import Paper from './Paper'
import PaperContent from './PaperContent'
import PaperImg from './PaperImg'
import PaperHeader from './PaperHeader'
import PaperUl from './PaperUl'
import PaperLi from './PaperLi'
import PaperLine from './PaperLine'
import PaperBtn from './PaperBtn'

const styles = {
	container: {
		width: '100%',
		minHeight: '100vh',
		boxSizing: 'border-box',
		padding: '100px 40px 40px 40px',
		background: colors.grey200
	},
	mansory: {
		padding: 20,
		boxSizing: 'border-box',
		width: '50%'
	}
}

class GridContainer extends React.Component {
	constructor(props) {
		super(props)
	}
	renderEmpty() {
		return (
			<Masonry elementType={'div'}>
				<div style={styles.mansory}><Paper><PaperContent><span className='lnr lnr-cross' /> No results found</PaperContent></Paper></div>
				<div style={styles.mansory}>
					<Paper>
						<PaperImg src='https://mrdangerdaysf1.files.wordpress.com/2015/02/raikkonen.jpg' />
						<PaperContent>
							<PaperHeader>Kimi Raikkonen</PaperHeader>
							<PaperUl>
								<PaperLi head='First Name'>Kimi</PaperLi>
								<PaperLi head='Last Name'>Raikkonen</PaperLi>
								<PaperLi head='Nationality'>Finnish</PaperLi>
								<PaperLi head='Number'>7</PaperLi>
							</PaperUl>
							<PaperLine />
							<PaperBtn href='http://www.kimiraikkonen.com'>Read More</PaperBtn>
						</PaperContent>
					</Paper>
				</div>
			</Masonry>
		)
	}
	renderContent() {
		return null
	}
	render() {
		let cnt = this.props.entities.length ? this.renderContent() : this.renderEmpty()
		return <div style={styles.container}>{cnt}</div>
	}
}

export default Radium(GridContainer)
