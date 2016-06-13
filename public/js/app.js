(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

var _reactTapEventPlugin = require('react-tap-event-plugin');

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _Dashboard = require('./components/Dashboard');

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _NotFound = require('./components/NotFound');

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactTapEventPlugin2.default)();

(0, _reactDom.render)(_react2.default.createElement(
  _reactRouter.Router,
  { history: _reactRouter.browserHistory },
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: _App2.default },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _Dashboard2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '*', component: _NotFound2.default })
  )
), document.getElementById('app'));

},{"./components/App":2,"./components/Dashboard":3,"./components/NotFound":4,"react":"react","react-dom":"react-dom","react-router":"react-router","react-tap-event-plugin":"react-tap-event-plugin"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _Suggestion = require('../services/Suggestion.Service');

var _Suggestion2 = _interopRequireDefault(_Suggestion);

var _colors = require('../lib/colors');

var _colors2 = _interopRequireDefault(_colors);

var _Loader = require('./UI/Loader');

var _Loader2 = _interopRequireDefault(_Loader);

var _FullScreen = require('./UI/FullScreen');

var _FullScreen2 = _interopRequireDefault(_FullScreen);

var _CenterContainer = require('./UI/CenterContainer');

var _CenterContainer2 = _interopRequireDefault(_CenterContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
	loader: {
		background: _colors2.default.red500
	}
};

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

		_this.state = {
			init: false,
			suggestions: []
		};
		return _this;
	}

	_createClass(App, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			var _this2 = this;

			_Suggestion2.default.getSuggestions(function (data) {
				_this2.setState({
					init: true,
					suggestions: data
				});
			});
		}
	}, {
		key: 'renderLoader',
		value: function renderLoader() {
			return _react2.default.createElement(
				_FullScreen2.default,
				null,
				_react2.default.createElement(
					_CenterContainer2.default,
					null,
					_react2.default.createElement(_Loader2.default, { style: [styles.loader] })
				)
			);
		}
	}, {
		key: 'renderContent',
		value: function renderContent() {
			var _this3 = this;

			var childrenWithProps = _react2.default.Children.map(this.props.children, function (child) {
				return _react2.default.cloneElement(child, {
					suggestions: _this3.state.suggestions
				});
			});
			return _react2.default.createElement(
				'div',
				null,
				childrenWithProps
			);
		}
	}, {
		key: 'render',
		value: function render() {
			if (!this.state.init) {
				return this.renderLoader();
			}
			return this.renderContent();
		}
	}]);

	return App;
}(_react2.default.Component);

exports.default = (0, _radium2.default)(App);

},{"../lib/colors":9,"../services/Suggestion.Service":10,"./UI/CenterContainer":5,"./UI/FullScreen":6,"./UI/Loader":7,"radium":"radium","react":"react"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _async = require('async');

var _async2 = _interopRequireDefault(_async);

var _colors = require('../lib/colors');

var _colors2 = _interopRequireDefault(_colors);

var _TextAnalysis = require('../services/TextAnalysis.Service');

var _TextAnalysis2 = _interopRequireDefault(_TextAnalysis);

var _Loader = require('./UI/Loader');

var _Loader2 = _interopRequireDefault(_Loader);

var _FullScreen = require('./UI/FullScreen');

var _FullScreen2 = _interopRequireDefault(_FullScreen);

var _CenterContainer = require('./UI/CenterContainer');

var _CenterContainer2 = _interopRequireDefault(_CenterContainer);

var _SearchInput = require('./UI/SearchInput');

var _SearchInput2 = _interopRequireDefault(_SearchInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
	logo: {
		height: 100
	},
	input: {
		width: 550,
		height: 40,
		display: 'inline-block',
		marginTop: 34
	},
	ease: {
		transition: 'all 0.1s ease-in-out'
	},
	button: {
		background: _colors2.default.grey800,
		border: 'none',
		borderRadius: 5,
		margin: 0,
		marginTop: 34,
		color: _colors2.default.white,
		fontWeight: 400,
		padding: 10,
		cursor: 'pointer',
		fontSize: '1rem'
	},
	blur: {
		filter: 'blur(10px)'
	},
	loader: {
		container: {
			position: 'fixed',
			top: 0,
			left: 0,
			zIndex: 10000
		},
		loader: {
			background: _colors2.default.red500
		}
	}
};

var Dashboard = function (_React$Component) {
	_inherits(Dashboard, _React$Component);

	function Dashboard(props) {
		_classCallCheck(this, Dashboard);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dashboard).call(this, props));

		_this.state = {
			search: false,
			modal: false,
			error: false,
			src: '',
			recommend: ''
		};
		_this.onSrcChange = _this.onSrcChange.bind(_this);
		_this.search = _this.search.bind(_this);
		return _this;
	}

	_createClass(Dashboard, [{
		key: 'onSrcChange',
		value: function onSrcChange(v) {
			var rec = '';
			var words = v.split(' ');
			var word = _lodash2.default.last(words);
			if (word && word.length >= 2) {
				var r = _lodash2.default.find(this.props.suggestions, function (s) {
					return s.toLowerCase().startsWith(word.toLowerCase());
				});
				r = r || '';
				if (r) rec = r.substring(word.length);
			}
			this.setState({
				src: v,
				recommend: rec,
				error: false
			});
		}
	}, {
		key: 'search',
		value: function search() {
			var _this2 = this;

			if (!this.state.src) return false;
			var src = this.state.src + this.state.recommend;
			this.setState({
				search: true,
				error: false,
				src: src,
				recommend: ''
			});
			_TextAnalysis2.default.analyse(src, function (err, res) {
				console.log(res.body);
				_this2.setState({
					search: false
				});
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _state = this.state;
			var search = _state.search;
			var modal = _state.modal;

			var loader = this.state.search ? _react2.default.createElement(
				_FullScreen2.default,
				{ style: [styles.loader.container] },
				_react2.default.createElement(
					_CenterContainer2.default,
					null,
					_react2.default.createElement(_Loader2.default, { style: [styles.loader.loader] })
				)
			) : null;
			return _react2.default.createElement(
				'div',
				null,
				loader,
				_react2.default.createElement(
					_FullScreen2.default,
					{ style: [styles.ease, search || modal ? styles.blur : null] },
					_react2.default.createElement(
						_CenterContainer2.default,
						null,
						_react2.default.createElement('img', { src: '/img/f1_logo.png', style: styles.logo }),
						_react2.default.createElement('br', null),
						_react2.default.createElement(
							'div',
							{ style: styles.input },
							_react2.default.createElement(_SearchInput2.default, { recommend: this.state.recommend, value: this.state.src, onChange: this.onSrcChange, onEnter: this.search })
						),
						_react2.default.createElement('br', null),
						_react2.default.createElement(
							'button',
							{ style: [styles.button, styles.ease], onClick: this.search },
							_react2.default.createElement('i', { className: 'fa fa-search' }),
							'  Search'
						)
					)
				)
			);
		}
	}]);

	return Dashboard;
}(_react2.default.Component);

exports.default = (0, _radium2.default)(Dashboard);

},{"../lib/colors":9,"../services/TextAnalysis.Service":11,"./UI/CenterContainer":5,"./UI/FullScreen":6,"./UI/Loader":7,"./UI/SearchInput":8,"async":"async","lodash":"lodash","radium":"radium","react":"react"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _FullScreen = require('./UI/FullScreen');

var _FullScreen2 = _interopRequireDefault(_FullScreen);

var _CenterContainer = require('./UI/CenterContainer');

var _CenterContainer2 = _interopRequireDefault(_CenterContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = function NotFound(props) {
  return _react2.default.createElement(
    _FullScreen2.default,
    null,
    _react2.default.createElement(
      _CenterContainer2.default,
      null,
      'Not found'
    )
  );
};

exports.default = (0, _radium2.default)(NotFound);

},{"./UI/CenterContainer":5,"./UI/FullScreen":6,"radium":"radium","react":"react"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var style = {
	centerBlockStyle: {
		width: '100%',
		height: '100%',
		maxHeight: '100%',
		overflow: 'auto',
		textAlign: 'center'
	},
	centerContentStyle: {
		display: 'inline-block',
		verticalAlign: 'middle',
		boxSizing: 'border-box'
	}
};

var CenterContainer = function CenterContainer(props) {
	return _react2.default.createElement(
		'div',
		{ style: [style.centerBlockStyle].concat(_toConsumableArray(props.style)), id: 'centerContent' },
		_react2.default.createElement(
			'div',
			{ style: [style.centerContentStyle].concat(_toConsumableArray(props.boxStyle)) },
			props.children
		)
	);
};

CenterContainer.defaultProps = {
	style: {},
	boxStyle: {}
};

exports.default = (0, _radium2.default)(CenterContainer);

},{"radium":"radium","react":"react"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var style = {
	width: '100%',
	height: '100vh'
};

var FullScreen = function FullScreen(props) {
	return _react2.default.createElement(
		'div',
		{ style: [style].concat(_toConsumableArray(props.style)) },
		props.children
	);
};

FullScreen.defaultProps = {
	style: {}
};

exports.default = (0, _radium2.default)(FullScreen);

},{"radium":"radium","react":"react"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  width: '60px',
  height: '60px',
  background: '#fff',
  animation: 'sk-rotateplane 1.2s infinite ease-in-out'
};

var Loader = function Loader(props) {
  return _react2.default.createElement('div', { style: [style, props.style] });
};

exports.default = (0, _radium2.default)(Loader);

},{"radium":"radium","react":"react"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _colors = require('../../lib/colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
	container: {
		width: '100%',
		height: '100%',
		position: 'relative',
		background: _colors2.default.white
	},
	inpContainer: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		boxSizing: 'border-box',
		background: 'none',
		border: '1px solid ' + _colors2.default.grey500,
		fontWeight: 300,
		padding: '5px',
		fontSize: '1rem',
		textAlign: 'left',
		fontFamily: 'Roboto',
		margin: 0,
		':focus': {
			outline: 'none',
			border: '1px solid ' + _colors2.default.grey800
		}
	},
	recommend: {
		color: _colors2.default.grey500,
		paddingTop: 9
	},
	ease: {
		transition: 'all 0.1s ease-in-out'
	},
	whiteSpace: {
		color: _colors2.default.white
	}
};

var SearchInput = function (_React$Component) {
	_inherits(SearchInput, _React$Component);

	function SearchInput(props) {
		_classCallCheck(this, SearchInput);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SearchInput).call(this, props));

		_this.onKey = _this.onKey.bind(_this);
		return _this;
	}

	_createClass(SearchInput, [{
		key: 'onKey',
		value: function onKey(e) {
			if (e.key == 'Enter') this.props.onEnter();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				{ style: [styles.container, this.props.style] },
				_react2.default.createElement(
					'div',
					{ style: [styles.inpContainer, styles.recommend] },
					_react2.default.createElement(
						'span',
						{ style: styles.whiteSpace },
						this.props.value
					),
					this.props.recommend
				),
				_react2.default.createElement('input', { key: 'inputSrc', type: 'text', style: [styles.ease, styles.inpContainer], value: this.props.value, onChange: function onChange(e) {
						return _this2.props.onChange(e.target.value);
					}, onKeyPress: this.onKey })
			);
		}
	}]);

	return SearchInput;
}(_react2.default.Component);

SearchInput.defaultProps = {
	style: {},
	value: '',
	recommend: ''
};

exports.default = (0, _radium2.default)(SearchInput);

},{"../../lib/colors":9,"radium":"radium","react":"react"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  red50: '#ffebee',
  red100: '#ffcdd2',
  red200: '#ef9a9a',
  red300: '#e57373',
  red400: '#ef5350',
  red500: '#f44336',
  red600: '#e53935',
  red700: '#d32f2f',
  red800: '#c62828',
  red900: '#b71c1c',
  redA100: '#ff8a80',
  redA200: '#ff5252',
  redA400: '#ff1744',
  redA700: '#d50000',

  pink50: '#fce4ec',
  pink100: '#f8bbd0',
  pink200: '#f48fb1',
  pink300: '#f06292',
  pink400: '#ec407a',
  pink500: '#e91e63',
  pink600: '#d81b60',
  pink700: '#c2185b',
  pink800: '#ad1457',
  pink900: '#880e4f',
  pinkA100: '#ff80ab',
  pinkA200: '#ff4081',
  pinkA400: '#f50057',
  pinkA700: '#c51162',

  purple50: '#f3e5f5',
  purple100: '#e1bee7',
  purple200: '#ce93d8',
  purple300: '#ba68c8',
  purple400: '#ab47bc',
  purple500: '#9c27b0',
  purple600: '#8e24aa',
  purple700: '#7b1fa2',
  purple800: '#6a1b9a',
  purple900: '#4a148c',
  purpleA100: '#ea80fc',
  purpleA200: '#e040fb',
  purpleA400: '#d500f9',
  purpleA700: '#aa00ff',

  deepPurple50: '#ede7f6',
  deepPurple100: '#d1c4e9',
  deepPurple200: '#b39ddb',
  deepPurple300: '#9575cd',
  deepPurple400: '#7e57c2',
  deepPurple500: '#673ab7',
  deepPurple600: '#5e35b1',
  deepPurple700: '#512da8',
  deepPurple800: '#4527a0',
  deepPurple900: '#311b92',
  deepPurpleA100: '#b388ff',
  deepPurpleA200: '#7c4dff',
  deepPurpleA400: '#651fff',
  deepPurpleA700: '#6200ea',

  indigo50: '#e8eaf6',
  indigo100: '#c5cae9',
  indigo200: '#9fa8da',
  indigo300: '#7986cb',
  indigo400: '#5c6bc0',
  indigo500: '#3f51b5',
  indigo600: '#3949ab',
  indigo700: '#303f9f',
  indigo800: '#283593',
  indigo900: '#1a237e',
  indigoA100: '#8c9eff',
  indigoA200: '#536dfe',
  indigoA400: '#3d5afe',
  indigoA700: '#304ffe',

  blue50: '#e3f2fd',
  blue100: '#bbdefb',
  blue200: '#90caf9',
  blue300: '#64b5f6',
  blue400: '#42a5f5',
  blue500: '#2196f3',
  blue600: '#1e88e5',
  blue700: '#1976d2',
  blue800: '#1565c0',
  blue900: '#0d47a1',
  blueA100: '#82b1ff',
  blueA200: '#448aff',
  blueA400: '#2979ff',
  blueA700: '#2962ff',

  lightBlue50: '#e1f5fe',
  lightBlue100: '#b3e5fc',
  lightBlue200: '#81d4fa',
  lightBlue300: '#4fc3f7',
  lightBlue400: '#29b6f6',
  lightBlue500: '#03a9f4',
  lightBlue600: '#039be5',
  lightBlue700: '#0288d1',
  lightBlue800: '#0277bd',
  lightBlue900: '#01579b',
  lightBlueA100: '#80d8ff',
  lightBlueA200: '#40c4ff',
  lightBlueA400: '#00b0ff',
  lightBlueA700: '#0091ea',

  cyan50: '#e0f7fa',
  cyan100: '#b2ebf2',
  cyan200: '#80deea',
  cyan300: '#4dd0e1',
  cyan400: '#26c6da',
  cyan500: '#00bcd4',
  cyan600: '#00acc1',
  cyan700: '#0097a7',
  cyan800: '#00838f',
  cyan900: '#006064',
  cyanA100: '#84ffff',
  cyanA200: '#18ffff',
  cyanA400: '#00e5ff',
  cyanA700: '#00b8d4',

  teal50: '#e0f2f1',
  teal100: '#b2dfdb',
  teal200: '#80cbc4',
  teal300: '#4db6ac',
  teal400: '#26a69a',
  teal500: '#009688',
  teal600: '#00897b',
  teal700: '#00796b',
  teal800: '#00695c',
  teal900: '#004d40',
  tealA100: '#a7ffeb',
  tealA200: '#64ffda',
  tealA400: '#1de9b6',
  tealA700: '#00bfa5',

  green50: '#e8f5e9',
  green100: '#c8e6c9',
  green200: '#a5d6a7',
  green300: '#81c784',
  green400: '#66bb6a',
  green500: '#4caf50',
  green600: '#43a047',
  green700: '#388e3c',
  green800: '#2e7d32',
  green900: '#1b5e20',
  greenA100: '#b9f6ca',
  greenA200: '#69f0ae',
  greenA400: '#00e676',
  greenA700: '#00c853',

  lightGreen50: '#f1f8e9',
  lightGreen100: '#dcedc8',
  lightGreen200: '#c5e1a5',
  lightGreen300: '#aed581',
  lightGreen400: '#9ccc65',
  lightGreen500: '#8bc34a',
  lightGreen600: '#7cb342',
  lightGreen700: '#689f38',
  lightGreen800: '#558b2f',
  lightGreen900: '#33691e',
  lightGreenA100: '#ccff90',
  lightGreenA200: '#b2ff59',
  lightGreenA400: '#76ff03',
  lightGreenA700: '#64dd17',

  lime50: '#f9fbe7',
  lime100: '#f0f4c3',
  lime200: '#e6ee9c',
  lime300: '#dce775',
  lime400: '#d4e157',
  lime500: '#cddc39',
  lime600: '#c0ca33',
  lime700: '#afb42b',
  lime800: '#9e9d24',
  lime900: '#827717',
  limeA100: '#f4ff81',
  limeA200: '#eeff41',
  limeA400: '#c6ff00',
  limeA700: '#aeea00',

  yellow50: '#fffde7',
  yellow100: '#fff9c4',
  yellow200: '#fff59d',
  yellow300: '#fff176',
  yellow400: '#ffee58',
  yellow500: '#ffeb3b',
  yellow600: '#fdd835',
  yellow700: '#fbc02d',
  yellow800: '#f9a825',
  yellow900: '#f57f17',
  yellowA100: '#ffff8d',
  yellowA200: '#ffff00',
  yellowA400: '#ffea00',
  yellowA700: '#ffd600',

  amber50: '#fff8e1',
  amber100: '#ffecb3',
  amber200: '#ffe082',
  amber300: '#ffd54f',
  amber400: '#ffca28',
  amber500: '#ffc107',
  amber600: '#ffb300',
  amber700: '#ffa000',
  amber800: '#ff8f00',
  amber900: '#ff6f00',
  amberA100: '#ffe57f',
  amberA200: '#ffd740',
  amberA400: '#ffc400',
  amberA700: '#ffab00',

  orange50: '#fff3e0',
  orange100: '#ffe0b2',
  orange200: '#ffcc80',
  orange300: '#ffb74d',
  orange400: '#ffa726',
  orange500: '#ff9800',
  orange600: '#fb8c00',
  orange700: '#f57c00',
  orange800: '#ef6c00',
  orange900: '#e65100',
  orangeA100: '#ffd180',
  orangeA200: '#ffab40',
  orangeA400: '#ff9100',
  orangeA700: '#ff6d00',

  deepOrange50: '#fbe9e7',
  deepOrange100: '#ffccbc',
  deepOrange200: '#ffab91',
  deepOrange300: '#ff8a65',
  deepOrange400: '#ff7043',
  deepOrange500: '#ff5722',
  deepOrange600: '#f4511e',
  deepOrange700: '#e64a19',
  deepOrange800: '#d84315',
  deepOrange900: '#bf360c',
  deepOrangeA100: '#ff9e80',
  deepOrangeA200: '#ff6e40',
  deepOrangeA400: '#ff3d00',
  deepOrangeA700: '#dd2c00',

  brown50: '#efebe9',
  brown100: '#d7ccc8',
  brown200: '#bcaaa4',
  brown300: '#a1887f',
  brown400: '#8d6e63',
  brown500: '#795548',
  brown600: '#6d4c41',
  brown700: '#5d4037',
  brown800: '#4e342e',
  brown900: '#3e2723',

  blueGrey50: '#eceff1',
  blueGrey100: '#cfd8dc',
  blueGrey200: '#b0bec5',
  blueGrey300: '#90a4ae',
  blueGrey400: '#78909c',
  blueGrey500: '#607d8b',
  blueGrey600: '#546e7a',
  blueGrey700: '#455a64',
  blueGrey800: '#37474f',
  blueGrey900: '#263238',

  grey50: '#fafafa',
  grey100: '#f5f5f5',
  grey200: '#eeeeee',
  grey300: '#e0e0e0',
  grey400: '#bdbdbd',
  grey500: '#9e9e9e',
  grey600: '#757575',
  grey700: '#616161',
  grey800: '#424242',
  grey900: '#212121',

  black: '#000000',
  white: '#ffffff',

  transparent: 'rgba(0, 0, 0, 0)',
  fullBlack: 'rgba(0, 0, 0, 1)',
  darkBlack: 'rgba(0, 0, 0, 0.87)',
  lightBlack: 'rgba(0, 0, 0, 0.54)',
  minBlack: 'rgba(0, 0, 0, 0.26)',
  faintBlack: 'rgba(0, 0, 0, 0.12)',
  fullWhite: 'rgba(255, 255, 255, 1)',
  darkWhite: 'rgba(255, 255, 255, 0.87)',
  lightWhite: 'rgba(255, 255, 255, 0.54)'
};

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var temp = ['Lewis Hamilton', 'Nico Rosberg', 'Sebastian Vettel', 'Kimi Raikkonen', 'Daniel Ricciardo', 'Max Verstappen', 'Felippe Massa', 'Valtteri Bottas', 'Sergio Perez', 'Nico Hulkenberg', 'Daniil Kvyat', 'Carlos Sainz', 'Romain Grosjean', 'Fernando Alonso', 'Jenson Button', 'Kevin Magnussen', 'Esteban Gutierrez', 'Jolyon Palmer', 'Marcus Ericsson', 'Pascal Wehrlein', 'Felipe Nasr', 'Rio Haryanto'];

var SuggestionService = function () {
	function SuggestionService() {
		_classCallCheck(this, SuggestionService);
	}

	_createClass(SuggestionService, null, [{
		key: 'getSuggestions',
		value: function getSuggestions(cb) {
			_superagent2.default.get('/ai/suggestions').end(function (err, res) {
				cb(err ? [] : res.body);
			});
		}
	}]);

	return SuggestionService;
}();

exports.default = SuggestionService;

},{"superagent":"superagent"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextAnalysisService = function () {
	function TextAnalysisService() {
		_classCallCheck(this, TextAnalysisService);
	}

	_createClass(TextAnalysisService, null, [{
		key: 'analyse2',
		value: function analyse2(txt, cb) {
			_superagent2.default.post('https://apiv2.indico.io/keywords?key=275989e7911da3e3fe044ec34474996d').send(JSON.stringify({ data: txt, relative: true })).end(function (err, res) {
				cb(err, res);
			});
		}
	}, {
		key: 'analyse',
		value: function analyse(txt, cb) {
			_superagent2.default.post('/ai/analyse').send({ text: txt }).end(function (err, res) {
				cb(err, res);
			});
		}
	}]);

	return TextAnalysisService;
}();

exports.default = TextAnalysisService;

},{"superagent":"superagent"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJyZWFjdC9hcHAuanMiLCJyZWFjdC9jb21wb25lbnRzL0FwcC5qcyIsInJlYWN0L2NvbXBvbmVudHMvRGFzaGJvYXJkLmpzIiwicmVhY3QvY29tcG9uZW50cy9Ob3RGb3VuZC5qcyIsInJlYWN0L2NvbXBvbmVudHMvVUkvQ2VudGVyQ29udGFpbmVyLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9GdWxsU2NyZWVuLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9Mb2FkZXIuanMiLCJyZWFjdC9jb21wb25lbnRzL1VJL1NlYXJjaElucHV0LmpzIiwicmVhY3QvbGliL2NvbG9ycy5qcyIsInJlYWN0L3NlcnZpY2VzL1N1Z2dlc3Rpb24uU2VydmljZS5qcyIsInJlYWN0L3NlcnZpY2VzL1RleHRBbmFseXNpcy5TZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBSUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFKQTs7QUFNQSxzQkFDRTtBQUFBO0VBQUEsRUFBUSxvQ0FBUjtFQUNDO0FBQUE7SUFBQSxFQUFPLE1BQUssR0FBWixFQUFnQix3QkFBaEI7SUFDQyx5REFBWSw4QkFBWixHQUREO0lBRUMsb0RBQU8sTUFBSyxHQUFaLEVBQWdCLDZCQUFoQjtBQUZEO0FBREQsQ0FERixFQU9HLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQVBIOzs7Ozs7Ozs7OztBQ1hBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLFNBQVM7QUFDZCxTQUFRO0FBQ1AsY0FBWSxpQkFBTztBQURaO0FBRE0sQ0FBZjs7SUFNTSxHOzs7QUFDTCxjQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxxRkFDWixLQURZOztBQUVsQixRQUFLLEtBQUwsR0FBYTtBQUNaLFNBQU0s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TSxLQUFLLFNBQUwsQ0FBZSxFQUFDLE1BQU0sR0FBUCxFQUFZLFVBQVUsSUFBdEIsRUFBZixDQUROLEVBRUMsR0FGRCxDQUVLLFVBQUMsR0FBRCxFQUFNLEdBQU4sRUFBYztBQUNsQixPQUFHLEdBQUgsRUFBUSxHQUFSO0FBQ0EsSUFKRDtBQUtBOzs7MEJBQ2MsRyxFQUFLLEUsRUFBSTtBQUN2Qix3QkFBRSxJQUFGLGdCQUNDLElBREQsQ0FDTSxFQUFDLE1BQU0sR0FBUCxFQUROLEVBRUMsR0FGRCxDQUVLLFVBQUMsR0FBRCxFQUFNLEdBQU4sRUFBYztBQUNsQixPQUFHLEdBQUgsRUFBUSxHQUFSO0FBQ0EsSUFKRDtBQUtBOzs7Ozs7a0JBR2EsbUIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7Um91dGVyLCBSb3V0ZSwgSW5kZXhSb3V0ZSwgYnJvd3Nlckhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBpbmplY3RUYXBFdmVudFBsdWdpbiBmcm9tICdyZWFjdC10YXAtZXZlbnQtcGx1Z2luJ1xuXG5pbmplY3RUYXBFdmVudFBsdWdpbigpXG5cbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCdcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi9jb21wb25lbnRzL0Rhc2hib2FyZCdcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL2NvbXBvbmVudHMvTm90Rm91bmQnXG5cbnJlbmRlcigoXG4gIDxSb3V0ZXIgaGlzdG9yeT17YnJvd3Nlckhpc3Rvcnl9PlxuICBcdDxSb3V0ZSBwYXRoPScvJyBjb21wb25lbnQ9e0FwcH0+XG4gIFx0XHQ8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0Rhc2hib2FyZH0gLz5cbiAgXHRcdDxSb3V0ZSBwYXRoPScqJyBjb21wb25lbnQ9e05vdEZvdW5kfSAvPlxuICBcdDwvUm91dGU+XG4gIDwvUm91dGVyPlxuKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmltcG9ydCBTdWdnZXN0aW9uU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9TdWdnZXN0aW9uLlNlcnZpY2UnXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2xpYi9jb2xvcnMnXG5cbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9VSS9Mb2FkZXInXG5pbXBvcnQgRnVsbFNjcmVlbiBmcm9tICcuL1VJL0Z1bGxTY3JlZW4nXG5pbXBvcnQgQ2VudGVyQ29udGFpbmVyIGZyb20gJy4vVUkvQ2VudGVyQ29udGFpbmVyJ1xuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGxvYWRlcjoge1xuXHRcdGJhY2tncm91bmQ6IGNvbG9ycy5yZWQ1MDBcblx0fVxufVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRpbml0OiBmYWxzZSxcblx0XHRcdHN1Z2dlc3Rpb25zOiBbXVxuXHRcdH1cblx0fVxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0U3VnZ2VzdGlvblNlcnZpY2UuZ2V0U3VnZ2VzdGlvbnMoZGF0YSA9PiB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0aW5pdDogdHJ1ZSxcblx0XHRcdFx0c3VnZ2VzdGlvbnM6IGRhdGFcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXHRyZW5kZXJMb2FkZXIoKSB7XG5cdFx0cmV0dXJuIDxGdWxsU2NyZWVuPjxDZW50ZXJDb250YWluZXI+PExvYWRlciBzdHlsZT17W3N0eWxlcy5sb2FkZXJdfSAvPjwvQ2VudGVyQ29udGFpbmVyPjwvRnVsbFNjcmVlbj5cblx0fVxuXHRyZW5kZXJDb250ZW50KCkge1xuXHRcdHZhciBjaGlsZHJlbldpdGhQcm9wcyA9IFJlYWN0LkNoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCBjaGlsZCA9PiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgXHRzdWdnZXN0aW9uczogdGhpcy5zdGF0ZS5zdWdnZXN0aW9uc1xuICAgICAgICB9KSlcblx0XHRyZXR1cm4gPGRpdj57Y2hpbGRyZW5XaXRoUHJvcHN9PC9kaXY+XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGlmKCF0aGlzLnN0YXRlLmluaXQpIHtcblx0XHRcdHJldHVybiB0aGlzLnJlbmRlckxvYWRlcigpXG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnJlbmRlckNvbnRlbnQoKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShBcHApXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBhc3luYyBmcm9tICdhc3luYydcblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9saWIvY29sb3JzJ1xuaW1wb3J0IFRleHRBbmFseXNpc1NlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvVGV4dEFuYWx5c2lzLlNlcnZpY2UnXG5cbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9VSS9Mb2FkZXInXG5pbXBvcnQgRnVsbFNjcmVlbiBmcm9tICcuL1VJL0Z1bGxTY3JlZW4nXG5pbXBvcnQgQ2VudGVyQ29udGFpbmVyIGZyb20gJy4vVUkvQ2VudGVyQ29udGFpbmVyJ1xuaW1wb3J0IFNlYXJjaElucHV0IGZyb20gJy4vVUkvU2VhcmNoSW5wdXQnXG5cbmNvbnN0IHN0eWxlcyA9IHtcblx0bG9nbzoge1xuXHRcdGhlaWdodDogMTAwXG5cdH0sXG5cdGlucHV0OiB7XG5cdFx0d2lkdGg6IDU1MCxcblx0XHRoZWlnaHQ6IDQwLFxuXHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuXHRcdG1hcmdpblRvcDogMzRcblx0fSxcblx0ZWFzZToge1xuXHRcdHRyYW5zaXRpb246ICdhbGwgMC4xcyBlYXNlLWluLW91dCdcblx0fSxcblx0YnV0dG9uOiB7XG5cdFx0YmFja2dyb3VuZDogY29sb3JzLmdyZXk4MDAsXG5cdFx0Ym9yZGVyOiAnbm9uZScsXG5cdFx0Ym9yZGVyUmFkaXVzOiA1LFxuXHRcdG1hcmdpbjogMCxcblx0XHRtYXJnaW5Ub3A6IDM0LFxuXHRcdGNvbG9yOiBjb2xvcnMud2hpdGUsXG5cdFx0Zm9udFdlaWdodDogNDAwLFxuXHRcdHBhZGRpbmc6IDEwLFxuXHRcdGN1cnNvcjogJ3BvaW50ZXInLFxuXHRcdGZvbnRTaXplOiAnMXJlbSdcblx0fSxcblx0Ymx1cjoge1xuXHRcdGZpbHRlcjogJ2JsdXIoMTBweCknXG5cdH0sXG5cdGxvYWRlcjoge1xuXHRcdGNvbnRhaW5lcjoge1xuXHRcdFx0cG9zaXRpb246ICdmaXhlZCcsXG5cdFx0XHR0b3A6IDAsXG5cdFx0XHRsZWZ0OiAwLFxuXHRcdFx0ekluZGV4OiAxMDAwMFxuXHRcdH0sXG5cdFx0bG9hZGVyOiB7XG5cdFx0XHRiYWNrZ3JvdW5kOiBjb2xvcnMucmVkNTAwXG5cdFx0fVxuXHR9XG59XG5cbmNsYXNzIERhc2hib2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNlYXJjaDogZmFsc2UsXG5cdFx0XHRtb2RhbDogZmFsc2UsXG5cdFx0XHRlcnJvcjogZmFsc2UsXG5cdFx0XHRzcmM6ICcnLFxuXHRcdFx0cmVjb21tZW5kOiAnJ1xuXHRcdH1cblx0XHR0aGlzLm9uU3JjQ2hhbmdlID0gdGhpcy5vblNyY0NoYW5nZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5zZWFyY2ggPSB0aGlzLnNlYXJjaC5iaW5kKHRoaXMpXG5cdH1cblx0b25TcmNDaGFuZ2Uodikge1xuXHRcdGxldCByZWMgPSAnJ1xuXHRcdGxldCB3b3JkcyA9IHYuc3BsaXQoJyAnKVxuXHRcdGxldCB3b3JkID0gXy5sYXN0KHdvcmRzKVxuXHRcdGlmKHdvcmQgJiYgd29yZC5sZW5ndGg+PTIpIHtcblx0XHRcdGxldCByID0gXy5maW5kKHRoaXMucHJvcHMuc3VnZ2VzdGlvbnMsIHMgPT4ge1xuXHRcdFx0XHRyZXR1cm4gcy50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgod29yZC50b0xvd2VyQ2FzZSgpKVxuXHRcdFx0fSlcblx0XHRcdHIgPSByIHx8ICcnXG5cdFx0XHRpZihyKSByZWMgPSByLnN1YnN0cmluZyh3b3JkLmxlbmd0aClcblx0XHR9XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzcmM6IHYsXG5cdFx0XHRyZWNvbW1lbmQ6IHJlYyxcblx0XHRcdGVycm9yOiBmYWxzZVxuXHRcdH0pXG5cdH1cblx0c2VhcmNoKCkge1xuXHRcdGlmKCF0aGlzLnN0YXRlLnNyYykgcmV0dXJuIGZhbHNlXG5cdFx0bGV0IHNyYyA9IHRoaXMuc3RhdGUuc3JjICsgdGhpcy5zdGF0ZS5yZWNvbW1lbmRcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHNlYXJjaDogdHJ1ZSxcblx0XHRcdGVycm9yOiBmYWxzZSxcblx0XHRcdHNyYzogc3JjLFxuXHRcdFx0cmVjb21tZW5kOiAnJ1xuXHRcdH0pXG5cdFx0VGV4dEFuYWx5c2lzU2VydmljZS5hbmFseXNlKHNyYywgKGVyciwgcmVzKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhyZXMuYm9keSlcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRzZWFyY2g6IGZhbHNlXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtzZWFyY2gsIG1vZGFsfSA9IHRoaXMuc3RhdGVcblx0XHRjb25zdCBsb2FkZXIgPSB0aGlzLnN0YXRlLnNlYXJjaCA/IDxGdWxsU2NyZWVuIHN0eWxlPXtbc3R5bGVzLmxvYWRlci5jb250YWluZXJdfT48Q2VudGVyQ29udGFpbmVyPjxMb2FkZXIgc3R5bGU9e1tzdHlsZXMubG9hZGVyLmxvYWRlcl19IC8+PC9DZW50ZXJDb250YWluZXI+PC9GdWxsU2NyZWVuPiA6IG51bGxcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0e2xvYWRlcn1cblx0XHRcdFx0PEZ1bGxTY3JlZW4gc3R5bGU9e1tzdHlsZXMuZWFzZSwgc2VhcmNoIHx8IG1vZGFsID8gc3R5bGVzLmJsdXIgOiBudWxsXX0+XG5cdFx0XHRcdFx0PENlbnRlckNvbnRhaW5lcj5cblx0XHRcdFx0XHRcdDxpbWcgc3JjPScvaW1nL2YxX2xvZ28ucG5nJyBzdHlsZT17c3R5bGVzLmxvZ299IC8+PGJyLz5cblx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3N0eWxlcy5pbnB1dH0+PFNlYXJjaElucHV0IHJlY29tbWVuZD17dGhpcy5zdGF0ZS5yZWNvbW1lbmR9IHZhbHVlPXt0aGlzLnN0YXRlLnNyY30gb25DaGFuZ2U9e3RoaXMub25TcmNDaGFuZ2V9IG9uRW50ZXI9e3RoaXMuc2VhcmNofSAvPjwvZGl2Pjxici8+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIHN0eWxlPXtbc3R5bGVzLmJ1dHRvbiwgc3R5bGVzLmVhc2VdfSBvbkNsaWNrPXt0aGlzLnNlYXJjaH0+PGkgY2xhc3NOYW1lPSdmYSBmYS1zZWFyY2gnIC8+Jm5ic3A7IFNlYXJjaDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvQ2VudGVyQ29udGFpbmVyPlxuXHRcdFx0XHQ8L0Z1bGxTY3JlZW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKERhc2hib2FyZClcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5pbXBvcnQgRnVsbFNjcmVlbiBmcm9tICcuL1VJL0Z1bGxTY3JlZW4nXG5pbXBvcnQgQ2VudGVyQ29udGFpbmVyIGZyb20gJy4vVUkvQ2VudGVyQ29udGFpbmVyJ1xuXG5jb25zdCBOb3RGb3VuZCA9IChwcm9wcykgPT4gPEZ1bGxTY3JlZW4+PENlbnRlckNvbnRhaW5lcj5Ob3QgZm91bmQ8L0NlbnRlckNvbnRhaW5lcj48L0Z1bGxTY3JlZW4+XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShOb3RGb3VuZClcbiIsImltcG9ydCBSZWFjdCwge1Byb3BUeXBlc30gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuY29uc3Qgc3R5bGUgPSB7XG5cdGNlbnRlckJsb2NrU3R5bGU6IHtcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdGhlaWdodDogJzEwMCUnLFxuXHRcdG1heEhlaWdodDogJzEwMCUnLFxuXHRcdG92ZXJmbG93OiAnYXV0bycsXG5cdFx0dGV4dEFsaWduOiAnY2VudGVyJ1xuXHR9LFxuXHRjZW50ZXJDb250ZW50U3R5bGU6IHtcblx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcblx0XHR2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcblx0XHRib3hTaXppbmc6ICdib3JkZXItYm94J1xuXHR9XG59XG5cbmNvbnN0IENlbnRlckNvbnRhaW5lciA9IChwcm9wcykgPT4gPGRpdiBzdHlsZT17W3N0eWxlLmNlbnRlckJsb2NrU3R5bGUsIC4uLnByb3BzLnN0eWxlXX0gaWQ9J2NlbnRlckNvbnRlbnQnPjxkaXYgc3R5bGU9e1tzdHlsZS5jZW50ZXJDb250ZW50U3R5bGUsIC4uLnByb3BzLmJveFN0eWxlXX0+e3Byb3BzLmNoaWxkcmVufTwvZGl2PjwvZGl2PlxuXG5DZW50ZXJDb250YWluZXIuZGVmYXVsdFByb3BzID0ge1xuICBzdHlsZToge30sXG4gIGJveFN0eWxlOiB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oQ2VudGVyQ29udGFpbmVyKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmNvbnN0IHN0eWxlID0ge1xuXHR3aWR0aDogJzEwMCUnLFxuXHRoZWlnaHQ6ICcxMDB2aCdcbn1cblxuY29uc3QgRnVsbFNjcmVlbiA9IChwcm9wcykgPT4gPGRpdiBzdHlsZT17W3N0eWxlLCAuLi5wcm9wcy5zdHlsZV19Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cblxuRnVsbFNjcmVlbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHN0eWxlOiB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oRnVsbFNjcmVlbilcbiIsImltcG9ydCBSZWFjdCwge1Byb3BUeXBlc30gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuY29uc3Qgc3R5bGUgPSB7XG5cdHdpZHRoOiAnNjBweCcsXG4gIGhlaWdodDogJzYwcHgnLFxuICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gIGFuaW1hdGlvbjogJ3NrLXJvdGF0ZXBsYW5lIDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQnXG59XG5cbmNvbnN0IExvYWRlciA9IChwcm9wcykgPT4gPGRpdiBzdHlsZT17W3N0eWxlLCBwcm9wcy5zdHlsZV19IC8+XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShMb2FkZXIpXG4iLCJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXN9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vLi4vbGliL2NvbG9ycydcblxuY29uc3Qgc3R5bGVzID0ge1xuXHRjb250YWluZXI6IHtcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdGhlaWdodDogJzEwMCUnLFxuXHRcdHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXHRcdGJhY2tncm91bmQ6IGNvbG9ycy53aGl0ZVxuXHR9LFxuXHRpbnBDb250YWluZXI6IHtcblx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcblx0XHR0b3A6IDAsXG5cdFx0bGVmdDogMCxcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdGhlaWdodDogJzEwMCUnLFxuXHRcdGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuXHRcdGJhY2tncm91bmQ6ICdub25lJyxcblx0XHRib3JkZXI6IGAxcHggc29saWQgJHtjb2xvcnMuZ3JleTUwMH1gLFxuXHRcdGZvbnRXZWlnaHQ6IDMwMCxcblx0XHRwYWRkaW5nOiAnNXB4Jyxcblx0XHRmb250U2l6ZTogJzFyZW0nLFxuXHRcdHRleHRBbGlnbjogJ2xlZnQnLFxuXHRcdGZvbnRGYW1pbHk6ICdSb2JvdG8nLFxuXHRcdG1hcmdpbjogMCxcblx0XHQnOmZvY3VzJzoge1xuXHRcdFx0b3V0bGluZTogJ25vbmUnLFxuXHRcdFx0Ym9yZGVyOiBgMXB4IHNvbGlkICR7Y29sb3JzLmdyZXk4MDB9YFxuXHRcdH1cblx0fSxcblx0cmVjb21tZW5kOiB7XG5cdFx0Y29sb3I6IGNvbG9ycy5ncmV5NTAwLFxuXHRcdHBhZGRpbmdUb3A6IDlcblx0fSxcblx0ZWFzZToge1xuXHRcdHRyYW5zaXRpb246ICdhbGwgMC4xcyBlYXNlLWluLW91dCdcblx0fSxcblx0d2hpdGVTcGFjZToge1xuXHRcdGNvbG9yOiBjb2xvcnMud2hpdGVcblx0fVxufVxuXG5jbGFzcyBTZWFyY2hJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5vbktleSA9IHRoaXMub25LZXkuYmluZCh0aGlzKVxuXHR9XG5cdG9uS2V5KGUpIHtcblx0XHRpZihlLmtleSA9PSAnRW50ZXInKSB0aGlzLnByb3BzLm9uRW50ZXIoKVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17W3N0eWxlcy5jb250YWluZXIsIHRoaXMucHJvcHMuc3R5bGVdfT5cblx0XHRcdFx0PGRpdiBzdHlsZT17W3N0eWxlcy5pbnBDb250YWluZXIsIHN0eWxlcy5yZWNvbW1lbmRdfT48c3BhbiBzdHlsZT17c3R5bGVzLndoaXRlU3BhY2V9Pnt0aGlzLnByb3BzLnZhbHVlfTwvc3Bhbj57dGhpcy5wcm9wcy5yZWNvbW1lbmR9PC9kaXY+XG5cdFx0XHRcdDxpbnB1dCBrZXk9J2lucHV0U3JjJyB0eXBlPSd0ZXh0JyBzdHlsZT17W3N0eWxlcy5lYXNlLCBzdHlsZXMuaW5wQ29udGFpbmVyXX0gdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9IG9uQ2hhbmdlPXtlID0+IHRoaXMucHJvcHMub25DaGFuZ2UoZS50YXJnZXQudmFsdWUpfSBvbktleVByZXNzPXt0aGlzLm9uS2V5fSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cblNlYXJjaElucHV0LmRlZmF1bHRQcm9wcyA9IHtcblx0c3R5bGU6IHt9LFxuXHR2YWx1ZTogJycsXG5cdHJlY29tbWVuZDogJydcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKFNlYXJjaElucHV0KVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICByZWQ1MDogJyNmZmViZWUnLFxuICByZWQxMDA6ICcjZmZjZGQyJyxcbiAgcmVkMjAwOiAnI2VmOWE5YScsXG4gIHJlZDMwMDogJyNlNTczNzMnLFxuICByZWQ0MDA6ICcjZWY1MzUwJyxcbiAgcmVkNTAwOiAnI2Y0NDMzNicsXG4gIHJlZDYwMDogJyNlNTM5MzUnLFxuICByZWQ3MDA6ICcjZDMyZjJmJyxcbiAgcmVkODAwOiAnI2M2MjgyOCcsXG4gIHJlZDkwMDogJyNiNzFjMWMnLFxuICByZWRBMTAwOiAnI2ZmOGE4MCcsXG4gIHJlZEEyMDA6ICcjZmY1MjUyJyxcbiAgcmVkQTQwMDogJyNmZjE3NDQnLFxuICByZWRBNzAwOiAnI2Q1MDAwMCcsXG5cbiAgcGluazUwOiAnI2ZjZTRlYycsXG4gIHBpbmsxMDA6ICcjZjhiYmQwJyxcbiAgcGluazIwMDogJyNmNDhmYjEnLFxuICBwaW5rMzAwOiAnI2YwNjI5MicsXG4gIHBpbms0MDA6ICcjZWM0MDdhJyxcbiAgcGluazUwMDogJyNlOTFlNjMnLFxuICBwaW5rNjAwOiAnI2Q4MWI2MCcsXG4gIHBpbms3MDA6ICcjYzIxODViJyxcbiAgcGluazgwMDogJyNhZDE0NTcnLFxuICBwaW5rOTAwOiAnIzg4MGU0ZicsXG4gIHBpbmtBMTAwOiAnI2ZmODBhYicsXG4gIHBpbmtBMjAwOiAnI2ZmNDA4MScsXG4gIHBpbmtBNDAwOiAnI2Y1MDA1NycsXG4gIHBpbmtBNzAwOiAnI2M1MTE2MicsXG5cbiAgcHVycGxlNTA6ICcjZjNlNWY1JyxcbiAgcHVycGxlMTAwOiAnI2UxYmVlNycsXG4gIHB1cnBsZTIwMDogJyNjZTkzZDgnLFxuICBwdXJwbGUzMDA6ICcjYmE2OGM4JyxcbiAgcHVycGxlNDAwOiAnI2FiNDdiYycsXG4gIHB1cnBsZTUwMDogJyM5YzI3YjAnLFxuICBwdXJwbGU2MDA6ICcjOGUyNGFhJyxcbiAgcHVycGxlNzAwOiAnIzdiMWZhMicsXG4gIHB1cnBsZTgwMDogJyM2YTFiOWEnLFxuICBwdXJwbGU5MDA6ICcjNGExNDhjJyxcbiAgcHVycGxlQTEwMDogJyNlYTgwZmMnLFxuICBwdXJwbGVBMjAwOiAnI2UwNDBmYicsXG4gIHB1cnBsZUE0MDA6ICcjZDUwMGY5JyxcbiAgcHVycGxlQTcwMDogJyNhYTAwZmYnLFxuXG4gIGRlZXBQdXJwbGU1MDogJyNlZGU3ZjYnLFxuICBkZWVwUHVycGxlMTAwOiAnI2QxYzRlOScsXG4gIGRlZXBQdXJwbGUyMDA6ICcjYjM5ZGRiJyxcbiAgZGVlcFB1cnBsZTMwMDogJyM5NTc1Y2QnLFxuICBkZWVwUHVycGxlNDAwOiAnIzdlNTdjMicsXG4gIGRlZXBQdXJwbGU1MDA6ICcjNjczYWI3JyxcbiAgZGVlcFB1cnBsZTYwMDogJyM1ZTM1YjEnLFxuICBkZWVwUHVycGxlNzAwOiAnIzUxMmRhOCcsXG4gIGRlZXBQdXJwbGU4MDA6ICcjNDUyN2EwJyxcbiAgZGVlcFB1cnBsZTkwMDogJyMzMTFiOTInLFxuICBkZWVwUHVycGxlQTEwMDogJyNiMzg4ZmYnLFxuICBkZWVwUHVycGxlQTIwMDogJyM3YzRkZmYnLFxuICBkZWVwUHVycGxlQTQwMDogJyM2NTFmZmYnLFxuICBkZWVwUHVycGxlQTcwMDogJyM2MjAwZWEnLFxuXG4gIGluZGlnbzUwOiAnI2U4ZWFmNicsXG4gIGluZGlnbzEwMDogJyNjNWNhZTknLFxuICBpbmRpZ28yMDA6ICcjOWZhOGRhJyxcbiAgaW5kaWdvMzAwOiAnIzc5ODZjYicsXG4gIGluZGlnbzQwMDogJyM1YzZiYzAnLFxuICBpbmRpZ281MDA6ICcjM2Y1MWI1JyxcbiAgaW5kaWdvNjAwOiAnIzM5NDlhYicsXG4gIGluZGlnbzcwMDogJyMzMDNmOWYnLFxuICBpbmRpZ284MDA6ICcjMjgzNTkzJyxcbiAgaW5kaWdvOTAwOiAnIzFhMjM3ZScsXG4gIGluZGlnb0ExMDA6ICcjOGM5ZWZmJyxcbiAgaW5kaWdvQTIwMDogJyM1MzZkZmUnLFxuICBpbmRpZ29BNDAwOiAnIzNkNWFmZScsXG4gIGluZGlnb0E3MDA6ICcjMzA0ZmZlJyxcblxuICBibHVlNTA6ICcjZTNmMmZkJyxcbiAgYmx1ZTEwMDogJyNiYmRlZmInLFxuICBibHVlMjAwOiAnIzkwY2FmOScsXG4gIGJsdWUzMDA6ICcjNjRiNWY2JyxcbiAgYmx1ZTQwMDogJyM0MmE1ZjUnLFxuICBibHVlNTAwOiAnIzIxOTZmMycsXG4gIGJsdWU2MDA6ICcjMWU4OGU1JyxcbiAgYmx1ZTcwMDogJyMxOTc2ZDInLFxuICBibHVlODAwOiAnIzE1NjVjMCcsXG4gIGJsdWU5MDA6ICcjMGQ0N2ExJyxcbiAgYmx1ZUExMDA6ICcjODJiMWZmJyxcbiAgYmx1ZUEyMDA6ICcjNDQ4YWZmJyxcbiAgYmx1ZUE0MDA6ICcjMjk3OWZmJyxcbiAgYmx1ZUE3MDA6ICcjMjk2MmZmJyxcblxuICBsaWdodEJsdWU1MDogJyNlMWY1ZmUnLFxuICBsaWdodEJsdWUxMDA6ICcjYjNlNWZjJyxcbiAgbGlnaHRCbHVlMjAwOiAnIzgxZDRmYScsXG4gIGxpZ2h0Qmx1ZTMwMDogJyM0ZmMzZjcnLFxuICBsaWdodEJsdWU0MDA6ICcjMjliNmY2JyxcbiAgbGlnaHRCbHVlNTAwOiAnIzAzYTlmNCcsXG4gIGxpZ2h0Qmx1ZTYwMDogJyMwMzliZTUnLFxuICBsaWdodEJsdWU3MDA6ICcjMDI4OGQxJyxcbiAgbGlnaHRCbHVlODAwOiAnIzAyNzdiZCcsXG4gIGxpZ2h0Qmx1ZTkwMDogJyMwMTU3OWInLFxuICBsaWdodEJsdWVBMTAwOiAnIzgwZDhmZicsXG4gIGxpZ2h0Qmx1ZUEyMDA6ICcjNDBjNGZmJyxcbiAgbGlnaHRCbHVlQTQwMDogJyMwMGIwZmYnLFxuICBsaWdodEJsdWVBNzAwOiAnIzAwOTFlYScsXG5cbiAgY3lhbjUwOiAnI2UwZjdmYScsXG4gIGN5YW4xMDA6ICcjYjJlYmYyJyxcbiAgY3lhbjIwMDogJyM4MGRlZWEnLFxuICBjeWFuMzAwOiAnIzRkZDBlMScsXG4gIGN5YW40MDA6ICcjMjZjNmRhJyxcbiAgY3lhbjUwMDogJyMwMGJjZDQnLFxuICBjeWFuNjAwOiAnIzAwYWNjMScsXG4gIGN5YW43MDA6ICcjMDA5N2E3JyxcbiAgY3lhbjgwMDogJyMwMDgzOGYnLFxuICBjeWFuOTAwOiAnIzAwNjA2NCcsXG4gIGN5YW5BMTAwOiAnIzg0ZmZmZicsXG4gIGN5YW5BMjAwOiAnIzE4ZmZmZicsXG4gIGN5YW5BNDAwOiAnIzAwZTVmZicsXG4gIGN5YW5BNzAwOiAnIzAwYjhkNCcsXG5cbiAgdGVhbDUwOiAnI2UwZjJmMScsXG4gIHRlYWwxMDA6ICcjYjJkZmRiJyxcbiAgdGVhbDIwMDogJyM4MGNiYzQnLFxuICB0ZWFsMzAwOiAnIzRkYjZhYycsXG4gIHRlYWw0MDA6ICcjMjZhNjlhJyxcbiAgdGVhbDUwMDogJyMwMDk2ODgnLFxuICB0ZWFsNjAwOiAnIzAwODk3YicsXG4gIHRlYWw3MDA6ICcjMDA3OTZiJyxcbiAgdGVhbDgwMDogJyMwMDY5NWMnLFxuICB0ZWFsOTAwOiAnIzAwNGQ0MCcsXG4gIHRlYWxBMTAwOiAnI2E3ZmZlYicsXG4gIHRlYWxBMjAwOiAnIzY0ZmZkYScsXG4gIHRlYWxBNDAwOiAnIzFkZTliNicsXG4gIHRlYWxBNzAwOiAnIzAwYmZhNScsXG5cbiAgZ3JlZW41MDogJyNlOGY1ZTknLFxuICBncmVlbjEwMDogJyNjOGU2YzknLFxuICBncmVlbjIwMDogJyNhNWQ2YTcnLFxuICBncmVlbjMwMDogJyM4MWM3ODQnLFxuICBncmVlbjQwMDogJyM2NmJiNmEnLFxuICBncmVlbjUwMDogJyM0Y2FmNTAnLFxuICBncmVlbjYwMDogJyM0M2EwNDcnLFxuICBncmVlbjcwMDogJyMzODhlM2MnLFxuICBncmVlbjgwMDogJyMyZTdkMzInLFxuICBncmVlbjkwMDogJyMxYjVlMjAnLFxuICBncmVlbkExMDA6ICcjYjlmNmNhJyxcbiAgZ3JlZW5BMjAwOiAnIzY5ZjBhZScsXG4gIGdyZWVuQTQwMDogJyMwMGU2NzYnLFxuICBncmVlbkE3MDA6ICcjMDBjODUzJyxcblxuICBsaWdodEdyZWVuNTA6ICcjZjFmOGU5JyxcbiAgbGlnaHRHcmVlbjEwMDogJyNkY2VkYzgnLFxuICBsaWdodEdyZWVuMjAwOiAnI2M1ZTFhNScsXG4gIGxpZ2h0R3JlZW4zMDA6ICcjYWVkNTgxJyxcbiAgbGlnaHRHcmVlbjQwMDogJyM5Y2NjNjUnLFxuICBsaWdodEdyZWVuNTAwOiAnIzhiYzM0YScsXG4gIGxpZ2h0R3JlZW42MDA6ICcjN2NiMzQyJyxcbiAgbGlnaHRHcmVlbjcwMDogJyM2ODlmMzgnLFxuICBsaWdodEdyZWVuODAwOiAnIzU1OGIyZicsXG4gIGxpZ2h0R3JlZW45MDA6ICcjMzM2OTFlJyxcbiAgbGlnaHRHcmVlbkExMDA6ICcjY2NmZjkwJyxcbiAgbGlnaHRHcmVlbkEyMDA6ICcjYjJmZjU5JyxcbiAgbGlnaHRHcmVlbkE0MDA6ICcjNzZmZjAzJyxcbiAgbGlnaHRHcmVlbkE3MDA6ICcjNjRkZDE3JyxcblxuICBsaW1lNTA6ICcjZjlmYmU3JyxcbiAgbGltZTEwMDogJyNmMGY0YzMnLFxuICBsaW1lMjAwOiAnI2U2ZWU5YycsXG4gIGxpbWUzMDA6ICcjZGNlNzc1JyxcbiAgbGltZTQwMDogJyNkNGUxNTcnLFxuICBsaW1lNTAwOiAnI2NkZGMzOScsXG4gIGxpbWU2MDA6ICcjYzBjYTMzJyxcbiAgbGltZTcwMDogJyNhZmI0MmInLFxuICBsaW1lODAwOiAnIzllOWQyNCcsXG4gIGxpbWU5MDA6ICcjODI3NzE3JyxcbiAgbGltZUExMDA6ICcjZjRmZjgxJyxcbiAgbGltZUEyMDA6ICcjZWVmZjQxJyxcbiAgbGltZUE0MDA6ICcjYzZmZjAwJyxcbiAgbGltZUE3MDA6ICcjYWVlYTAwJyxcblxuICB5ZWxsb3c1MDogJyNmZmZkZTcnLFxuICB5ZWxsb3cxMDA6ICcjZmZmOWM0JyxcbiAgeWVsbG93MjAwOiAnI2ZmZjU5ZCcsXG4gIHllbGxvdzMwMDogJyNmZmYxNzYnLFxuICB5ZWxsb3c0MDA6ICcjZmZlZTU4JyxcbiAgeWVsbG93NTAwOiAnI2ZmZWIzYicsXG4gIHllbGxvdzYwMDogJyNmZGQ4MzUnLFxuICB5ZWxsb3c3MDA6ICcjZmJjMDJkJyxcbiAgeWVsbG93ODAwOiAnI2Y5YTgyNScsXG4gIHllbGxvdzkwMDogJyNmNTdmMTcnLFxuICB5ZWxsb3dBMTAwOiAnI2ZmZmY4ZCcsXG4gIHllbGxvd0EyMDA6ICcjZmZmZjAwJyxcbiAgeWVsbG93QTQwMDogJyNmZmVhMDAnLFxuICB5ZWxsb3dBNzAwOiAnI2ZmZDYwMCcsXG5cbiAgYW1iZXI1MDogJyNmZmY4ZTEnLFxuICBhbWJlcjEwMDogJyNmZmVjYjMnLFxuICBhbWJlcjIwMDogJyNmZmUwODInLFxuICBhbWJlcjMwMDogJyNmZmQ1NGYnLFxuICBhbWJlcjQwMDogJyNmZmNhMjgnLFxuICBhbWJlcjUwMDogJyNmZmMxMDcnLFxuICBhbWJlcjYwMDogJyNmZmIzMDAnLFxuICBhbWJlcjcwMDogJyNmZmEwMDAnLFxuICBhbWJlcjgwMDogJyNmZjhmMDAnLFxuICBhbWJlcjkwMDogJyNmZjZmMDAnLFxuICBhbWJlckExMDA6ICcjZmZlNTdmJyxcbiAgYW1iZXJBMjAwOiAnI2ZmZDc0MCcsXG4gIGFtYmVyQTQwMDogJyNmZmM0MDAnLFxuICBhbWJlckE3MDA6ICcjZmZhYjAwJyxcblxuICBvcmFuZ2U1MDogJyNmZmYzZTAnLFxuICBvcmFuZ2UxMDA6ICcjZmZlMGIyJyxcbiAgb3JhbmdlMjAwOiAnI2ZmY2M4MCcsXG4gIG9yYW5nZTMwMDogJyNmZmI3NGQnLFxuICBvcmFuZ2U0MDA6ICcjZmZhNzI2JyxcbiAgb3JhbmdlNTAwOiAnI2ZmOTgwMCcsXG4gIG9yYW5nZTYwMDogJyNmYjhjMDAnLFxuICBvcmFuZ2U3MDA6ICcjZjU3YzAwJyxcbiAgb3JhbmdlODAwOiAnI2VmNmMwMCcsXG4gIG9yYW5nZTkwMDogJyNlNjUxMDAnLFxuICBvcmFuZ2VBMTAwOiAnI2ZmZDE4MCcsXG4gIG9yYW5nZUEyMDA6ICcjZmZhYjQwJyxcbiAgb3JhbmdlQTQwMDogJyNmZjkxMDAnLFxuICBvcmFuZ2VBNzAwOiAnI2ZmNmQwMCcsXG5cbiAgZGVlcE9yYW5nZTUwOiAnI2ZiZTllNycsXG4gIGRlZXBPcmFuZ2UxMDA6ICcjZmZjY2JjJyxcbiAgZGVlcE9yYW5nZTIwMDogJyNmZmFiOTEnLFxuICBkZWVwT3JhbmdlMzAwOiAnI2ZmOGE2NScsXG4gIGRlZXBPcmFuZ2U0MDA6ICcjZmY3MDQzJyxcbiAgZGVlcE9yYW5nZTUwMDogJyNmZjU3MjInLFxuICBkZWVwT3JhbmdlNjAwOiAnI2Y0NTExZScsXG4gIGRlZXBPcmFuZ2U3MDA6ICcjZTY0YTE5JyxcbiAgZGVlcE9yYW5nZTgwMDogJyNkODQzMTUnLFxuICBkZWVwT3JhbmdlOTAwOiAnI2JmMzYwYycsXG4gIGRlZXBPcmFuZ2VBMTAwOiAnI2ZmOWU4MCcsXG4gIGRlZXBPcmFuZ2VBMjAwOiAnI2ZmNmU0MCcsXG4gIGRlZXBPcmFuZ2VBNDAwOiAnI2ZmM2QwMCcsXG4gIGRlZXBPcmFuZ2VBNzAwOiAnI2RkMmMwMCcsXG5cbiAgYnJvd241MDogJyNlZmViZTknLFxuICBicm93bjEwMDogJyNkN2NjYzgnLFxuICBicm93bjIwMDogJyNiY2FhYTQnLFxuICBicm93bjMwMDogJyNhMTg4N2YnLFxuICBicm93bjQwMDogJyM4ZDZlNjMnLFxuICBicm93bjUwMDogJyM3OTU1NDgnLFxuICBicm93bjYwMDogJyM2ZDRjNDEnLFxuICBicm93bjcwMDogJyM1ZDQwMzcnLFxuICBicm93bjgwMDogJyM0ZTM0MmUnLFxuICBicm93bjkwMDogJyMzZTI3MjMnLFxuXG4gIGJsdWVHcmV5NTA6ICcjZWNlZmYxJyxcbiAgYmx1ZUdyZXkxMDA6ICcjY2ZkOGRjJyxcbiAgYmx1ZUdyZXkyMDA6ICcjYjBiZWM1JyxcbiAgYmx1ZUdyZXkzMDA6ICcjOTBhNGFlJyxcbiAgYmx1ZUdyZXk0MDA6ICcjNzg5MDljJyxcbiAgYmx1ZUdyZXk1MDA6ICcjNjA3ZDhiJyxcbiAgYmx1ZUdyZXk2MDA6ICcjNTQ2ZTdhJyxcbiAgYmx1ZUdyZXk3MDA6ICcjNDU1YTY0JyxcbiAgYmx1ZUdyZXk4MDA6ICcjMzc0NzRmJyxcbiAgYmx1ZUdyZXk5MDA6ICcjMjYzMjM4JyxcblxuICBncmV5NTA6ICcjZmFmYWZhJyxcbiAgZ3JleTEwMDogJyNmNWY1ZjUnLFxuICBncmV5MjAwOiAnI2VlZWVlZScsXG4gIGdyZXkzMDA6ICcjZTBlMGUwJyxcbiAgZ3JleTQwMDogJyNiZGJkYmQnLFxuICBncmV5NTAwOiAnIzllOWU5ZScsXG4gIGdyZXk2MDA6ICcjNzU3NTc1JyxcbiAgZ3JleTcwMDogJyM2MTYxNjEnLFxuICBncmV5ODAwOiAnIzQyNDI0MicsXG4gIGdyZXk5MDA6ICcjMjEyMTIxJyxcblxuICBibGFjazogJyMwMDAwMDAnLFxuICB3aGl0ZTogJyNmZmZmZmYnLFxuXG4gIHRyYW5zcGFyZW50OiAncmdiYSgwLCAwLCAwLCAwKScsXG4gIGZ1bGxCbGFjazogJ3JnYmEoMCwgMCwgMCwgMSknLFxuICBkYXJrQmxhY2s6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJyxcbiAgbGlnaHRCbGFjazogJ3JnYmEoMCwgMCwgMCwgMC41NCknLFxuICBtaW5CbGFjazogJ3JnYmEoMCwgMCwgMCwgMC4yNiknLFxuICBmYWludEJsYWNrOiAncmdiYSgwLCAwLCAwLCAwLjEyKScsXG4gIGZ1bGxXaGl0ZTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxuICBkYXJrV2hpdGU6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODcpJyxcbiAgbGlnaHRXaGl0ZTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41NCknXG59XG4iLCJpbXBvcnQgJCBmcm9tICdzdXBlcmFnZW50J1xuXG5jb25zdCB0ZW1wID0gW1xuXHQnTGV3aXMgSGFtaWx0b24nLFxuXHQnTmljbyBSb3NiZXJnJyxcblx0J1NlYmFzdGlhbiBWZXR0ZWwnLFxuXHQnS2ltaSBSYWlra29uZW4nLFxuXHQnRGFuaWVsIFJpY2NpYXJkbycsXG5cdCdNYXggVmVyc3RhcHBlbicsXG5cdCdGZWxpcHBlIE1hc3NhJyxcblx0J1ZhbHR0ZXJpIEJvdHRhcycsXG5cdCdTZXJnaW8gUGVyZXonLFxuXHQnTmljbyBIdWxrZW5iZXJnJyxcblx0J0RhbmlpbCBLdnlhdCcsXG5cdCdDYXJsb3MgU2FpbnonLFxuXHQnUm9tYWluIEdyb3NqZWFuJyxcblx0J0Zlcm5hbmRvIEFsb25zbycsXG5cdCdKZW5zb24gQnV0dG9uJyxcblx0J0tldmluIE1hZ251c3NlbicsXG5cdCdFc3RlYmFuIEd1dGllcnJleicsXG5cdCdKb2x5b24gUGFsbWVyJyxcblx0J01hcmN1cyBFcmljc3NvbicsXG5cdCdQYXNjYWwgV2VocmxlaW4nLFxuXHQnRmVsaXBlIE5hc3InLFxuXHQnUmlvIEhhcnlhbnRvJ1xuXVxuXG5jbGFzcyBTdWdnZXN0aW9uU2VydmljZSB7XG5cdHN0YXRpYyBnZXRTdWdnZXN0aW9ucyhjYikge1xuXHRcdCQuZ2V0KCcvYWkvc3VnZ2VzdGlvbnMnKVxuXHRcdC5lbmQoKGVyciwgcmVzKSA9PiB7XG5cdFx0XHRjYihlcnIgPyBbXSA6IHJlcy5ib2R5KVxuXHRcdH0pXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3VnZ2VzdGlvblNlcnZpY2VcbiIsImltcG9ydCAkIGZyb20gJ3N1cGVyYWdlbnQnXG5cbmNsYXNzIFRleHRBbmFseXNpc1NlcnZpY2Uge1xuXHRzdGF0aWMgYW5hbHlzZTIodHh0LCBjYikge1xuXHRcdCQucG9zdCgnaHR0cHM6Ly9hcGl2Mi5pbmRpY28uaW8va2V5d29yZHM/a2V5PTI3NTk4OWU3OTExZGEzZTNmZTA0NGVjMzQ0NzQ5OTZkJylcblx0XHQuc2VuZChKU09OLnN0cmluZ2lmeSh7ZGF0YTogdHh0LCByZWxhdGl2ZTogdHJ1ZX0pKVxuXHRcdC5lbmQoKGVyciwgcmVzKSA9PiB7XG5cdFx0XHRjYihlcnIsIHJlcylcblx0XHR9KVxuXHR9XG5cdHN0YXRpYyBhbmFseXNlKHR4dCwgY2IpIHtcblx0XHQkLnBvc3QoYC9haS9hbmFseXNlYClcblx0XHQuc2VuZCh7dGV4dDogdHh0fSlcblx0XHQuZW5kKChlcnIsIHJlcykgPT4ge1xuXHRcdFx0Y2IoZXJyLCByZXMpXG5cdFx0fSlcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0QW5hbHlzaXNTZXJ2aWNlXG4iXX0=
