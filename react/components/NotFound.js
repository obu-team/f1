import React from 'react'
import Radium from 'radium'

import FullScreen from './UI/FullScreen'
import CenterContainer from './UI/CenterContainer'

const NotFound = (props) => <FullScreen><CenterContainer>Not found</CenterContainer></FullScreen>

export default Radium(NotFound)
