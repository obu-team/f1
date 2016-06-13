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
		_this.onTab = _this.onTab.bind(_this);
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
		key: 'onTab',
		value: function onTab() {
			var _state = this.state;
			var src = _state.src;
			var recommend = _state.recommend;

			this.setState({
				src: src + recommend,
				recommend: ''
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
			var _state2 = this.state;
			var search = _state2.search;
			var modal = _state2.modal;

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
							_react2.default.createElement(_SearchInput2.default, { recommend: this.state.recommend, value: this.state.src, onChange: this.onSrcChange, onEnter: this.search, onTab: this.onTab })
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
		_this.onKeyDown = _this.onKeyDown.bind(_this);
		return _this;
	}

	_createClass(SearchInput, [{
		key: 'onKey',
		value: function onKey(e) {
			if (e.key == 'Enter') this.props.onEnter();
		}
	}, {
		key: 'onKeyDown',
		value: function onKeyDown(e) {
			if (e.key == 'Tab') {
				e.preventDefault();
				this.props.onTab();
			}
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
					}, onKeyPress: this.onKey, onKeyDown: this.onKeyDown })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJyZWFjdC9hcHAuanMiLCJyZWFjdC9jb21wb25lbnRzL0FwcC5qcyIsInJlYWN0L2NvbXBvbmVudHMvRGFzaGJvYXJkLmpzIiwicmVhY3QvY29tcG9uZW50cy9Ob3RGb3VuZC5qcyIsInJlYWN0L2NvbXBvbmVudHMvVUkvQ2VudGVyQ29udGFpbmVyLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9GdWxsU2NyZWVuLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9Mb2FkZXIuanMiLCJyZWFjdC9jb21wb25lbnRzL1VJL1NlYXJjaElucHV0LmpzIiwicmVhY3QvbGliL2NvbG9ycy5qcyIsInJlYWN0L3NlcnZpY2VzL1N1Z2dlc3Rpb24uU2VydmljZS5qcyIsInJlYWN0L3NlcnZpY2VzL1RleHRBbmFseXNpcy5TZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBSUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFKQTs7QUFNQSxzQkFDRTtBQUFBO0VBQUEsRUFBUSxvQ0FBUjtFQUNDO0FBQUE7SUFBQSxFQUFPLE1BQUssR0FBWixFQUFnQix3QkFBaEI7SUFDQyx5REFBWSw4QkFBWixHQUREO0lBRUMsb0RBQU8sTUFBSyxHQUFaLEVBQWdCLDZCQUFoQjtBQUZEO0FBREQsQ0FERixFQU9HLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQVBIOzs7Ozs7Ozs7OztBQ1hBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLFNBQVM7QUFDZCxTQUFRO0FBQ1AsY0FBWSxpQkFBTztBQURaO0FBRE0sQ0FBZjs7SUFNTSxHOzs7QUFDTCxjQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxxRkFDWixLQURZOztBQUVsQixRQUFLLEtBQUwsR0FBYTtBQUNaLFNBQU0s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QWFaLGlCQWJZLEVBY1osaUJBZFksRUFlWixlQWZZLEVBZ0JaLGlCQWhCWSxFQWlCWixtQkFqQlksRUFrQlosZUFsQlksRUFtQlosaUJBbkJZLEVBb0JaLGlCQXBCWSxFQXFCWixhQXJCWSxFQXNCWixjQXRCWSxDQUFiOztJQXlCTSxpQjs7Ozs7OztpQ0FDaUIsRSxFQUFJO0FBQ3pCLHdCQUFFLEdBQUYsQ0FBTSxpQkFBTixFQUNDLEdBREQsQ0FDSyxVQUFDLEdBQUQsRUFBTSxHQUFOLEVBQWM7QUFDbEIsT0FBRyxNQUFNLEVBQU4sR0FBVyxJQUFJLElBQWxCO0FBQ0EsSUFIRDtBQUlBOzs7Ozs7a0JBR2EsaUI7Ozs7Ozs7Ozs7O0FDcENmOzs7Ozs7OztJQUVNLG1COzs7Ozs7OzJCQUNXLEcsRUFBSyxFLEVBQUk7QUFDeEIsd0JBQUUsSUFBRixDQUFPLHVFQUFQLEVBQ0MsSUFERCxDQUNNLEtBQUssU0FBTCxDQUFlLEVBQUMsTUFBTSxHQUFQLEVBQVksVUFBVSxJQUF0QixFQUFmLENBRE4sRUFFQyxHQUZELENBRUssVUFBQyxHQUFELEVBQU0sR0FBTixFQUFjO0FBQ2xCLE9BQUcsR0FBSCxFQUFRLEdBQVI7QUFDQSxJQUpEO0FBS0E7OzswQkFDYyxHLEVBQUssRSxFQUFJO0FBQ3ZCLHdCQUFFLElBQUYsZ0JBQ0MsSUFERCxDQUNNLEVBQUMsTUFBTSxHQUFQLEVBRE4sRUFFQyxHQUZELENBRUssVUFBQyxHQUFELEVBQU0sR0FBTixFQUFjO0FBQ2xCLE9BQUcsR0FBSCxFQUFRLEdBQVI7QUFDQSxJQUpEO0FBS0E7Ozs7OztrQkFHYSxtQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHtSb3V0ZXIsIFJvdXRlLCBJbmRleFJvdXRlLCBicm93c2VySGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IGluamVjdFRhcEV2ZW50UGx1Z2luIGZyb20gJ3JlYWN0LXRhcC1ldmVudC1wbHVnaW4nXG5cbmluamVjdFRhcEV2ZW50UGx1Z2luKClcblxuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwJ1xuaW1wb3J0IERhc2hib2FyZCBmcm9tICcuL2NvbXBvbmVudHMvRGFzaGJvYXJkJ1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4vY29tcG9uZW50cy9Ob3RGb3VuZCdcblxucmVuZGVyKChcbiAgPFJvdXRlciBoaXN0b3J5PXticm93c2VySGlzdG9yeX0+XG4gIFx0PFJvdXRlIHBhdGg9Jy8nIGNvbXBvbmVudD17QXBwfT5cbiAgXHRcdDxJbmRleFJvdXRlIGNvbXBvbmVudD17RGFzaGJvYXJkfSAvPlxuICBcdFx0PFJvdXRlIHBhdGg9JyonIGNvbXBvbmVudD17Tm90Rm91bmR9IC8+XG4gIFx0PC9Sb3V0ZT5cbiAgPC9Sb3V0ZXI+XG4pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuaW1wb3J0IFN1Z2dlc3Rpb25TZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL1N1Z2dlc3Rpb24uU2VydmljZSdcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vbGliL2NvbG9ycydcblxuaW1wb3J0IExvYWRlciBmcm9tICcuL1VJL0xvYWRlcidcbmltcG9ydCBGdWxsU2NyZWVuIGZyb20gJy4vVUkvRnVsbFNjcmVlbidcbmltcG9ydCBDZW50ZXJDb250YWluZXIgZnJvbSAnLi9VSS9DZW50ZXJDb250YWluZXInXG5cbmNvbnN0IHN0eWxlcyA9IHtcblx0bG9hZGVyOiB7XG5cdFx0YmFja2dyb3VuZDogY29sb3JzLnJlZDUwMFxuXHR9XG59XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGluaXQ6IGZhbHNlLFxuXHRcdFx0c3VnZ2VzdGlvbnM6IFtdXG5cdFx0fVxuXHR9XG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHRTdWdnZXN0aW9uU2VydmljZS5nZXRTdWdnZXN0aW9ucyhkYXRhID0+IHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRpbml0OiB0cnVlLFxuXHRcdFx0XHRzdWdnZXN0aW9uczogZGF0YVxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cdHJlbmRlckxvYWRlcigpIHtcblx0XHRyZXR1cm4gPEZ1bGxTY3JlZW4+PENlbnRlckNvbnRhaW5lcj48TG9hZGVyIHN0eWxlPXtbc3R5bGVzLmxvYWRlcl19IC8+PC9DZW50ZXJDb250YWluZXI+PC9GdWxsU2NyZWVuPlxuXHR9XG5cdHJlbmRlckNvbnRlbnQoKSB7XG5cdFx0dmFyIGNoaWxkcmVuV2l0aFByb3BzID0gUmVhY3QuQ2hpbGRyZW4ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIGNoaWxkID0+IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICBcdHN1Z2dlc3Rpb25zOiB0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zXG4gICAgICAgIH0pKVxuXHRcdHJldHVybiA8ZGl2PntjaGlsZHJlbldpdGhQcm9wc308L2Rpdj5cblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0aWYoIXRoaXMuc3RhdGUuaW5pdCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmVuZGVyTG9hZGVyKClcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMucmVuZGVyQ29udGVudCgpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKEFwcClcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IGFzeW5jIGZyb20gJ2FzeW5jJ1xuXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2xpYi9jb2xvcnMnXG5pbXBvcnQgVGV4dEFuYWx5c2lzU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9UZXh0QW5hbHlzaXMuU2VydmljZSdcblxuaW1wb3J0IExvYWRlciBmcm9tICcuL1VJL0xvYWRlcidcbmltcG9ydCBGdWxsU2NyZWVuIGZyb20gJy4vVUkvRnVsbFNjcmVlbidcbmltcG9ydCBDZW50ZXJDb250YWluZXIgZnJvbSAnLi9VSS9DZW50ZXJDb250YWluZXInXG5pbXBvcnQgU2VhcmNoSW5wdXQgZnJvbSAnLi9VSS9TZWFyY2hJbnB1dCdcblxuY29uc3Qgc3R5bGVzID0ge1xuXHRsb2dvOiB7XG5cdFx0aGVpZ2h0OiAxMDBcblx0fSxcblx0aW5wdXQ6IHtcblx0XHR3aWR0aDogNTUwLFxuXHRcdGhlaWdodDogNDAsXG5cdFx0ZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG5cdFx0bWFyZ2luVG9wOiAzNFxuXHR9LFxuXHRlYXNlOiB7XG5cdFx0dHJhbnNpdGlvbjogJ2FsbCAwLjFzIGVhc2UtaW4tb3V0J1xuXHR9LFxuXHRidXR0b246IHtcblx0XHRiYWNrZ3JvdW5kOiBjb2xvcnMuZ3JleTgwMCxcblx0XHRib3JkZXI6ICdub25lJyxcblx0XHRib3JkZXJSYWRpdXM6IDUsXG5cdFx0bWFyZ2luOiAwLFxuXHRcdG1hcmdpblRvcDogMzQsXG5cdFx0Y29sb3I6IGNvbG9ycy53aGl0ZSxcblx0XHRmb250V2VpZ2h0OiA0MDAsXG5cdFx0cGFkZGluZzogMTAsXG5cdFx0Y3Vyc29yOiAncG9pbnRlcicsXG5cdFx0Zm9udFNpemU6ICcxcmVtJ1xuXHR9LFxuXHRibHVyOiB7XG5cdFx0ZmlsdGVyOiAnYmx1cigxMHB4KSdcblx0fSxcblx0bG9hZGVyOiB7XG5cdFx0Y29udGFpbmVyOiB7XG5cdFx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcblx0XHRcdHRvcDogMCxcblx0XHRcdGxlZnQ6IDAsXG5cdFx0XHR6SW5kZXg6IDEwMDAwXG5cdFx0fSxcblx0XHRsb2FkZXI6IHtcblx0XHRcdGJhY2tncm91bmQ6IGNvbG9ycy5yZWQ1MDBcblx0XHR9XG5cdH1cbn1cblxuY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2VhcmNoOiBmYWxzZSxcblx0XHRcdG1vZGFsOiBmYWxzZSxcblx0XHRcdGVycm9yOiBmYWxzZSxcblx0XHRcdHNyYzogJycsXG5cdFx0XHRyZWNvbW1lbmQ6ICcnXG5cdFx0fVxuXHRcdHRoaXMub25TcmNDaGFuZ2UgPSB0aGlzLm9uU3JjQ2hhbmdlLmJpbmQodGhpcylcblx0XHR0aGlzLnNlYXJjaCA9IHRoaXMuc2VhcmNoLmJpbmQodGhpcylcblx0XHR0aGlzLm9uVGFiID0gdGhpcy5vblRhYi5iaW5kKHRoaXMpXG5cdH1cblx0b25TcmNDaGFuZ2Uodikge1xuXHRcdGxldCByZWMgPSAnJ1xuXHRcdGxldCB3b3JkcyA9IHYuc3BsaXQoJyAnKVxuXHRcdGxldCB3b3JkID0gXy5sYXN0KHdvcmRzKVxuXHRcdGlmKHdvcmQgJiYgd29yZC5sZW5ndGg+PTIpIHtcblx0XHRcdGxldCByID0gXy5maW5kKHRoaXMucHJvcHMuc3VnZ2VzdGlvbnMsIHMgPT4ge1xuXHRcdFx0XHRyZXR1cm4gcy50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgod29yZC50b0xvd2VyQ2FzZSgpKVxuXHRcdFx0fSlcblx0XHRcdHIgPSByIHx8ICcnXG5cdFx0XHRpZihyKSByZWMgPSByLnN1YnN0cmluZyh3b3JkLmxlbmd0aClcblx0XHR9XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzcmM6IHYsXG5cdFx0XHRyZWNvbW1lbmQ6IHJlYyxcblx0XHRcdGVycm9yOiBmYWxzZVxuXHRcdH0pXG5cdH1cblx0b25UYWIoKSB7XG5cdFx0bGV0IHtzcmMsIHJlY29tbWVuZH0gPSB0aGlzLnN0YXRlXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzcmM6IHNyYyArIHJlY29tbWVuZCxcblx0XHRcdHJlY29tbWVuZDogJydcblx0XHR9KVxuXHR9XG5cdHNlYXJjaCgpIHtcblx0XHRpZighdGhpcy5zdGF0ZS5zcmMpIHJldHVybiBmYWxzZVxuXHRcdGxldCBzcmMgPSB0aGlzLnN0YXRlLnNyYyArIHRoaXMuc3RhdGUucmVjb21tZW5kXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzZWFyY2g6IHRydWUsXG5cdFx0XHRlcnJvcjogZmFsc2UsXG5cdFx0XHRzcmM6IHNyYyxcblx0XHRcdHJlY29tbWVuZDogJydcblx0XHR9KVxuXHRcdFRleHRBbmFseXNpc1NlcnZpY2UuYW5hbHlzZShzcmMsIChlcnIsIHJlcykgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2cocmVzLmJvZHkpXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0c2VhcmNoOiBmYWxzZVxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7c2VhcmNoLCBtb2RhbH0gPSB0aGlzLnN0YXRlXG5cdFx0Y29uc3QgbG9hZGVyID0gdGhpcy5zdGF0ZS5zZWFyY2ggPyA8RnVsbFNjcmVlbiBzdHlsZT17W3N0eWxlcy5sb2FkZXIuY29udGFpbmVyXX0+PENlbnRlckNvbnRhaW5lcj48TG9hZGVyIHN0eWxlPXtbc3R5bGVzLmxvYWRlci5sb2FkZXJdfSAvPjwvQ2VudGVyQ29udGFpbmVyPjwvRnVsbFNjcmVlbj4gOiBudWxsXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdHtsb2FkZXJ9XG5cdFx0XHRcdDxGdWxsU2NyZWVuIHN0eWxlPXtbc3R5bGVzLmVhc2UsIHNlYXJjaCB8fCBtb2RhbCA/IHN0eWxlcy5ibHVyIDogbnVsbF19PlxuXHRcdFx0XHRcdDxDZW50ZXJDb250YWluZXI+XG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz0nL2ltZy9mMV9sb2dvLnBuZycgc3R5bGU9e3N0eWxlcy5sb2dvfSAvPjxici8+XG5cdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXtzdHlsZXMuaW5wdXR9PjxTZWFyY2hJbnB1dCByZWNvbW1lbmQ9e3RoaXMuc3RhdGUucmVjb21tZW5kfSB2YWx1ZT17dGhpcy5zdGF0ZS5zcmN9IG9uQ2hhbmdlPXt0aGlzLm9uU3JjQ2hhbmdlfSBvbkVudGVyPXt0aGlzLnNlYXJjaH0gb25UYWI9e3RoaXMub25UYWJ9IC8+PC9kaXY+PGJyLz5cblx0XHRcdFx0XHRcdDxidXR0b24gc3R5bGU9e1tzdHlsZXMuYnV0dG9uLCBzdHlsZXMuZWFzZV19IG9uQ2xpY2s9e3RoaXMuc2VhcmNofT48aSBjbGFzc05hbWU9J2ZhIGZhLXNlYXJjaCcgLz4mbmJzcDsgU2VhcmNoPC9idXR0b24+XG5cdFx0XHRcdFx0PC9DZW50ZXJDb250YWluZXI+XG5cdFx0XHRcdDwvRnVsbFNjcmVlbj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oRGFzaGJvYXJkKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmltcG9ydCBGdWxsU2NyZWVuIGZyb20gJy4vVUkvRnVsbFNjcmVlbidcbmltcG9ydCBDZW50ZXJDb250YWluZXIgZnJvbSAnLi9VSS9DZW50ZXJDb250YWluZXInXG5cbmNvbnN0IE5vdEZvdW5kID0gKHByb3BzKSA9PiA8RnVsbFNjcmVlbj48Q2VudGVyQ29udGFpbmVyPk5vdCBmb3VuZDwvQ2VudGVyQ29udGFpbmVyPjwvRnVsbFNjcmVlbj5cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKE5vdEZvdW5kKVxuIiwiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5jb25zdCBzdHlsZSA9IHtcblx0Y2VudGVyQmxvY2tTdHlsZToge1xuXHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0aGVpZ2h0OiAnMTAwJScsXG5cdFx0bWF4SGVpZ2h0OiAnMTAwJScsXG5cdFx0b3ZlcmZsb3c6ICdhdXRvJyxcblx0XHR0ZXh0QWxpZ246ICdjZW50ZXInXG5cdH0sXG5cdGNlbnRlckNvbnRlbnRTdHlsZToge1xuXHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuXHRcdHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuXHRcdGJveFNpemluZzogJ2JvcmRlci1ib3gnXG5cdH1cbn1cblxuY29uc3QgQ2VudGVyQ29udGFpbmVyID0gKHByb3BzKSA9PiA8ZGl2IHN0eWxlPXtbc3R5bGUuY2VudGVyQmxvY2tTdHlsZSwgLi4ucHJvcHMuc3R5bGVdfSBpZD0nY2VudGVyQ29udGVudCc+PGRpdiBzdHlsZT17W3N0eWxlLmNlbnRlckNvbnRlbnRTdHlsZSwgLi4ucHJvcHMuYm94U3R5bGVdfT57cHJvcHMuY2hpbGRyZW59PC9kaXY+PC9kaXY+XG5cbkNlbnRlckNvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIHN0eWxlOiB7fSxcbiAgYm94U3R5bGU6IHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShDZW50ZXJDb250YWluZXIpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuY29uc3Qgc3R5bGUgPSB7XG5cdHdpZHRoOiAnMTAwJScsXG5cdGhlaWdodDogJzEwMHZoJ1xufVxuXG5jb25zdCBGdWxsU2NyZWVuID0gKHByb3BzKSA9PiA8ZGl2IHN0eWxlPXtbc3R5bGUsIC4uLnByb3BzLnN0eWxlXX0+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuXG5GdWxsU2NyZWVuLmRlZmF1bHRQcm9wcyA9IHtcbiAgc3R5bGU6IHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShGdWxsU2NyZWVuKVxuIiwiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5jb25zdCBzdHlsZSA9IHtcblx0d2lkdGg6ICc2MHB4JyxcbiAgaGVpZ2h0OiAnNjBweCcsXG4gIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgYW5pbWF0aW9uOiAnc2stcm90YXRlcGxhbmUgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dCdcbn1cblxuY29uc3QgTG9hZGVyID0gKHByb3BzKSA9PiA8ZGl2IHN0eWxlPXtbc3R5bGUsIHByb3BzLnN0eWxlXX0gLz5cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKExvYWRlcilcbiIsImltcG9ydCBSZWFjdCwge1Byb3BUeXBlc30gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi9saWIvY29sb3JzJ1xuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGNvbnRhaW5lcjoge1xuXHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0aGVpZ2h0OiAnMTAwJScsXG5cdFx0cG9zaXRpb246ICdyZWxhdGl2ZScsXG5cdFx0YmFja2dyb3VuZDogY29sb3JzLndoaXRlXG5cdH0sXG5cdGlucENvbnRhaW5lcjoge1xuXHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHRcdHRvcDogMCxcblx0XHRsZWZ0OiAwLFxuXHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0aGVpZ2h0OiAnMTAwJScsXG5cdFx0Ym94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG5cdFx0YmFja2dyb3VuZDogJ25vbmUnLFxuXHRcdGJvcmRlcjogYDFweCBzb2xpZCAke2NvbG9ycy5ncmV5NTAwfWAsXG5cdFx0Zm9udFdlaWdodDogMzAwLFxuXHRcdHBhZGRpbmc6ICc1cHgnLFxuXHRcdGZvbnRTaXplOiAnMXJlbScsXG5cdFx0dGV4dEFsaWduOiAnbGVmdCcsXG5cdFx0Zm9udEZhbWlseTogJ1JvYm90bycsXG5cdFx0bWFyZ2luOiAwLFxuXHRcdCc6Zm9jdXMnOiB7XG5cdFx0XHRvdXRsaW5lOiAnbm9uZScsXG5cdFx0XHRib3JkZXI6IGAxcHggc29saWQgJHtjb2xvcnMuZ3JleTgwMH1gXG5cdFx0fVxuXHR9LFxuXHRyZWNvbW1lbmQ6IHtcblx0XHRjb2xvcjogY29sb3JzLmdyZXk1MDAsXG5cdFx0cGFkZGluZ1RvcDogOVxuXHR9LFxuXHRlYXNlOiB7XG5cdFx0dHJhbnNpdGlvbjogJ2FsbCAwLjFzIGVhc2UtaW4tb3V0J1xuXHR9LFxuXHR3aGl0ZVNwYWNlOiB7XG5cdFx0Y29sb3I6IGNvbG9ycy53aGl0ZVxuXHR9XG59XG5cbmNsYXNzIFNlYXJjaElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLm9uS2V5ID0gdGhpcy5vbktleS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5vbktleURvd24gPSB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpXG5cdH1cblx0b25LZXkoZSkge1xuXHRcdGlmKGUua2V5ID09ICdFbnRlcicpIHRoaXMucHJvcHMub25FbnRlcigpXG5cdH1cblx0b25LZXlEb3duKGUpIHtcblx0XHRpZihlLmtleSA9PSAnVGFiJykge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHR0aGlzLnByb3BzLm9uVGFiKClcblx0XHR9XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXtbc3R5bGVzLmNvbnRhaW5lciwgdGhpcy5wcm9wcy5zdHlsZV19PlxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXtbc3R5bGVzLmlucENvbnRhaW5lciwgc3R5bGVzLnJlY29tbWVuZF19PjxzcGFuIHN0eWxlPXtzdHlsZXMud2hpdGVTcGFjZX0+e3RoaXMucHJvcHMudmFsdWV9PC9zcGFuPnt0aGlzLnByb3BzLnJlY29tbWVuZH08L2Rpdj5cblx0XHRcdFx0PGlucHV0IGtleT0naW5wdXRTcmMnIHR5cGU9J3RleHQnIHN0eWxlPXtbc3R5bGVzLmVhc2UsIHN0eWxlcy5pbnBDb250YWluZXJdfSB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX0gb25DaGFuZ2U9e2UgPT4gdGhpcy5wcm9wcy5vbkNoYW5nZShlLnRhcmdldC52YWx1ZSl9IG9uS2V5UHJlc3M9e3RoaXMub25LZXl9IG9uS2V5RG93bj17dGhpcy5vbktleURvd259IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuU2VhcmNoSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuXHRzdHlsZToge30sXG5cdHZhbHVlOiAnJyxcblx0cmVjb21tZW5kOiAnJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oU2VhcmNoSW5wdXQpXG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIHJlZDUwOiAnI2ZmZWJlZScsXG4gIHJlZDEwMDogJyNmZmNkZDInLFxuICByZWQyMDA6ICcjZWY5YTlhJyxcbiAgcmVkMzAwOiAnI2U1NzM3MycsXG4gIHJlZDQwMDogJyNlZjUzNTAnLFxuICByZWQ1MDA6ICcjZjQ0MzM2JyxcbiAgcmVkNjAwOiAnI2U1MzkzNScsXG4gIHJlZDcwMDogJyNkMzJmMmYnLFxuICByZWQ4MDA6ICcjYzYyODI4JyxcbiAgcmVkOTAwOiAnI2I3MWMxYycsXG4gIHJlZEExMDA6ICcjZmY4YTgwJyxcbiAgcmVkQTIwMDogJyNmZjUyNTInLFxuICByZWRBNDAwOiAnI2ZmMTc0NCcsXG4gIHJlZEE3MDA6ICcjZDUwMDAwJyxcblxuICBwaW5rNTA6ICcjZmNlNGVjJyxcbiAgcGluazEwMDogJyNmOGJiZDAnLFxuICBwaW5rMjAwOiAnI2Y0OGZiMScsXG4gIHBpbmszMDA6ICcjZjA2MjkyJyxcbiAgcGluazQwMDogJyNlYzQwN2EnLFxuICBwaW5rNTAwOiAnI2U5MWU2MycsXG4gIHBpbms2MDA6ICcjZDgxYjYwJyxcbiAgcGluazcwMDogJyNjMjE4NWInLFxuICBwaW5rODAwOiAnI2FkMTQ1NycsXG4gIHBpbms5MDA6ICcjODgwZTRmJyxcbiAgcGlua0ExMDA6ICcjZmY4MGFiJyxcbiAgcGlua0EyMDA6ICcjZmY0MDgxJyxcbiAgcGlua0E0MDA6ICcjZjUwMDU3JyxcbiAgcGlua0E3MDA6ICcjYzUxMTYyJyxcblxuICBwdXJwbGU1MDogJyNmM2U1ZjUnLFxuICBwdXJwbGUxMDA6ICcjZTFiZWU3JyxcbiAgcHVycGxlMjAwOiAnI2NlOTNkOCcsXG4gIHB1cnBsZTMwMDogJyNiYTY4YzgnLFxuICBwdXJwbGU0MDA6ICcjYWI0N2JjJyxcbiAgcHVycGxlNTAwOiAnIzljMjdiMCcsXG4gIHB1cnBsZTYwMDogJyM4ZTI0YWEnLFxuICBwdXJwbGU3MDA6ICcjN2IxZmEyJyxcbiAgcHVycGxlODAwOiAnIzZhMWI5YScsXG4gIHB1cnBsZTkwMDogJyM0YTE0OGMnLFxuICBwdXJwbGVBMTAwOiAnI2VhODBmYycsXG4gIHB1cnBsZUEyMDA6ICcjZTA0MGZiJyxcbiAgcHVycGxlQTQwMDogJyNkNTAwZjknLFxuICBwdXJwbGVBNzAwOiAnI2FhMDBmZicsXG5cbiAgZGVlcFB1cnBsZTUwOiAnI2VkZTdmNicsXG4gIGRlZXBQdXJwbGUxMDA6ICcjZDFjNGU5JyxcbiAgZGVlcFB1cnBsZTIwMDogJyNiMzlkZGInLFxuICBkZWVwUHVycGxlMzAwOiAnIzk1NzVjZCcsXG4gIGRlZXBQdXJwbGU0MDA6ICcjN2U1N2MyJyxcbiAgZGVlcFB1cnBsZTUwMDogJyM2NzNhYjcnLFxuICBkZWVwUHVycGxlNjAwOiAnIzVlMzViMScsXG4gIGRlZXBQdXJwbGU3MDA6ICcjNTEyZGE4JyxcbiAgZGVlcFB1cnBsZTgwMDogJyM0NTI3YTAnLFxuICBkZWVwUHVycGxlOTAwOiAnIzMxMWI5MicsXG4gIGRlZXBQdXJwbGVBMTAwOiAnI2IzODhmZicsXG4gIGRlZXBQdXJwbGVBMjAwOiAnIzdjNGRmZicsXG4gIGRlZXBQdXJwbGVBNDAwOiAnIzY1MWZmZicsXG4gIGRlZXBQdXJwbGVBNzAwOiAnIzYyMDBlYScsXG5cbiAgaW5kaWdvNTA6ICcjZThlYWY2JyxcbiAgaW5kaWdvMTAwOiAnI2M1Y2FlOScsXG4gIGluZGlnbzIwMDogJyM5ZmE4ZGEnLFxuICBpbmRpZ28zMDA6ICcjNzk4NmNiJyxcbiAgaW5kaWdvNDAwOiAnIzVjNmJjMCcsXG4gIGluZGlnbzUwMDogJyMzZjUxYjUnLFxuICBpbmRpZ282MDA6ICcjMzk0OWFiJyxcbiAgaW5kaWdvNzAwOiAnIzMwM2Y5ZicsXG4gIGluZGlnbzgwMDogJyMyODM1OTMnLFxuICBpbmRpZ285MDA6ICcjMWEyMzdlJyxcbiAgaW5kaWdvQTEwMDogJyM4YzllZmYnLFxuICBpbmRpZ29BMjAwOiAnIzUzNmRmZScsXG4gIGluZGlnb0E0MDA6ICcjM2Q1YWZlJyxcbiAgaW5kaWdvQTcwMDogJyMzMDRmZmUnLFxuXG4gIGJsdWU1MDogJyNlM2YyZmQnLFxuICBibHVlMTAwOiAnI2JiZGVmYicsXG4gIGJsdWUyMDA6ICcjOTBjYWY5JyxcbiAgYmx1ZTMwMDogJyM2NGI1ZjYnLFxuICBibHVlNDAwOiAnIzQyYTVmNScsXG4gIGJsdWU1MDA6ICcjMjE5NmYzJyxcbiAgYmx1ZTYwMDogJyMxZTg4ZTUnLFxuICBibHVlNzAwOiAnIzE5NzZkMicsXG4gIGJsdWU4MDA6ICcjMTU2NWMwJyxcbiAgYmx1ZTkwMDogJyMwZDQ3YTEnLFxuICBibHVlQTEwMDogJyM4MmIxZmYnLFxuICBibHVlQTIwMDogJyM0NDhhZmYnLFxuICBibHVlQTQwMDogJyMyOTc5ZmYnLFxuICBibHVlQTcwMDogJyMyOTYyZmYnLFxuXG4gIGxpZ2h0Qmx1ZTUwOiAnI2UxZjVmZScsXG4gIGxpZ2h0Qmx1ZTEwMDogJyNiM2U1ZmMnLFxuICBsaWdodEJsdWUyMDA6ICcjODFkNGZhJyxcbiAgbGlnaHRCbHVlMzAwOiAnIzRmYzNmNycsXG4gIGxpZ2h0Qmx1ZTQwMDogJyMyOWI2ZjYnLFxuICBsaWdodEJsdWU1MDA6ICcjMDNhOWY0JyxcbiAgbGlnaHRCbHVlNjAwOiAnIzAzOWJlNScsXG4gIGxpZ2h0Qmx1ZTcwMDogJyMwMjg4ZDEnLFxuICBsaWdodEJsdWU4MDA6ICcjMDI3N2JkJyxcbiAgbGlnaHRCbHVlOTAwOiAnIzAxNTc5YicsXG4gIGxpZ2h0Qmx1ZUExMDA6ICcjODBkOGZmJyxcbiAgbGlnaHRCbHVlQTIwMDogJyM0MGM0ZmYnLFxuICBsaWdodEJsdWVBNDAwOiAnIzAwYjBmZicsXG4gIGxpZ2h0Qmx1ZUE3MDA6ICcjMDA5MWVhJyxcblxuICBjeWFuNTA6ICcjZTBmN2ZhJyxcbiAgY3lhbjEwMDogJyNiMmViZjInLFxuICBjeWFuMjAwOiAnIzgwZGVlYScsXG4gIGN5YW4zMDA6ICcjNGRkMGUxJyxcbiAgY3lhbjQwMDogJyMyNmM2ZGEnLFxuICBjeWFuNTAwOiAnIzAwYmNkNCcsXG4gIGN5YW42MDA6ICcjMDBhY2MxJyxcbiAgY3lhbjcwMDogJyMwMDk3YTcnLFxuICBjeWFuODAwOiAnIzAwODM4ZicsXG4gIGN5YW45MDA6ICcjMDA2MDY0JyxcbiAgY3lhbkExMDA6ICcjODRmZmZmJyxcbiAgY3lhbkEyMDA6ICcjMThmZmZmJyxcbiAgY3lhbkE0MDA6ICcjMDBlNWZmJyxcbiAgY3lhbkE3MDA6ICcjMDBiOGQ0JyxcblxuICB0ZWFsNTA6ICcjZTBmMmYxJyxcbiAgdGVhbDEwMDogJyNiMmRmZGInLFxuICB0ZWFsMjAwOiAnIzgwY2JjNCcsXG4gIHRlYWwzMDA6ICcjNGRiNmFjJyxcbiAgdGVhbDQwMDogJyMyNmE2OWEnLFxuICB0ZWFsNTAwOiAnIzAwOTY4OCcsXG4gIHRlYWw2MDA6ICcjMDA4OTdiJyxcbiAgdGVhbDcwMDogJyMwMDc5NmInLFxuICB0ZWFsODAwOiAnIzAwNjk1YycsXG4gIHRlYWw5MDA6ICcjMDA0ZDQwJyxcbiAgdGVhbEExMDA6ICcjYTdmZmViJyxcbiAgdGVhbEEyMDA6ICcjNjRmZmRhJyxcbiAgdGVhbEE0MDA6ICcjMWRlOWI2JyxcbiAgdGVhbEE3MDA6ICcjMDBiZmE1JyxcblxuICBncmVlbjUwOiAnI2U4ZjVlOScsXG4gIGdyZWVuMTAwOiAnI2M4ZTZjOScsXG4gIGdyZWVuMjAwOiAnI2E1ZDZhNycsXG4gIGdyZWVuMzAwOiAnIzgxYzc4NCcsXG4gIGdyZWVuNDAwOiAnIzY2YmI2YScsXG4gIGdyZWVuNTAwOiAnIzRjYWY1MCcsXG4gIGdyZWVuNjAwOiAnIzQzYTA0NycsXG4gIGdyZWVuNzAwOiAnIzM4OGUzYycsXG4gIGdyZWVuODAwOiAnIzJlN2QzMicsXG4gIGdyZWVuOTAwOiAnIzFiNWUyMCcsXG4gIGdyZWVuQTEwMDogJyNiOWY2Y2EnLFxuICBncmVlbkEyMDA6ICcjNjlmMGFlJyxcbiAgZ3JlZW5BNDAwOiAnIzAwZTY3NicsXG4gIGdyZWVuQTcwMDogJyMwMGM4NTMnLFxuXG4gIGxpZ2h0R3JlZW41MDogJyNmMWY4ZTknLFxuICBsaWdodEdyZWVuMTAwOiAnI2RjZWRjOCcsXG4gIGxpZ2h0R3JlZW4yMDA6ICcjYzVlMWE1JyxcbiAgbGlnaHRHcmVlbjMwMDogJyNhZWQ1ODEnLFxuICBsaWdodEdyZWVuNDAwOiAnIzljY2M2NScsXG4gIGxpZ2h0R3JlZW41MDA6ICcjOGJjMzRhJyxcbiAgbGlnaHRHcmVlbjYwMDogJyM3Y2IzNDInLFxuICBsaWdodEdyZWVuNzAwOiAnIzY4OWYzOCcsXG4gIGxpZ2h0R3JlZW44MDA6ICcjNTU4YjJmJyxcbiAgbGlnaHRHcmVlbjkwMDogJyMzMzY5MWUnLFxuICBsaWdodEdyZWVuQTEwMDogJyNjY2ZmOTAnLFxuICBsaWdodEdyZWVuQTIwMDogJyNiMmZmNTknLFxuICBsaWdodEdyZWVuQTQwMDogJyM3NmZmMDMnLFxuICBsaWdodEdyZWVuQTcwMDogJyM2NGRkMTcnLFxuXG4gIGxpbWU1MDogJyNmOWZiZTcnLFxuICBsaW1lMTAwOiAnI2YwZjRjMycsXG4gIGxpbWUyMDA6ICcjZTZlZTljJyxcbiAgbGltZTMwMDogJyNkY2U3NzUnLFxuICBsaW1lNDAwOiAnI2Q0ZTE1NycsXG4gIGxpbWU1MDA6ICcjY2RkYzM5JyxcbiAgbGltZTYwMDogJyNjMGNhMzMnLFxuICBsaW1lNzAwOiAnI2FmYjQyYicsXG4gIGxpbWU4MDA6ICcjOWU5ZDI0JyxcbiAgbGltZTkwMDogJyM4Mjc3MTcnLFxuICBsaW1lQTEwMDogJyNmNGZmODEnLFxuICBsaW1lQTIwMDogJyNlZWZmNDEnLFxuICBsaW1lQTQwMDogJyNjNmZmMDAnLFxuICBsaW1lQTcwMDogJyNhZWVhMDAnLFxuXG4gIHllbGxvdzUwOiAnI2ZmZmRlNycsXG4gIHllbGxvdzEwMDogJyNmZmY5YzQnLFxuICB5ZWxsb3cyMDA6ICcjZmZmNTlkJyxcbiAgeWVsbG93MzAwOiAnI2ZmZjE3NicsXG4gIHllbGxvdzQwMDogJyNmZmVlNTgnLFxuICB5ZWxsb3c1MDA6ICcjZmZlYjNiJyxcbiAgeWVsbG93NjAwOiAnI2ZkZDgzNScsXG4gIHllbGxvdzcwMDogJyNmYmMwMmQnLFxuICB5ZWxsb3c4MDA6ICcjZjlhODI1JyxcbiAgeWVsbG93OTAwOiAnI2Y1N2YxNycsXG4gIHllbGxvd0ExMDA6ICcjZmZmZjhkJyxcbiAgeWVsbG93QTIwMDogJyNmZmZmMDAnLFxuICB5ZWxsb3dBNDAwOiAnI2ZmZWEwMCcsXG4gIHllbGxvd0E3MDA6ICcjZmZkNjAwJyxcblxuICBhbWJlcjUwOiAnI2ZmZjhlMScsXG4gIGFtYmVyMTAwOiAnI2ZmZWNiMycsXG4gIGFtYmVyMjAwOiAnI2ZmZTA4MicsXG4gIGFtYmVyMzAwOiAnI2ZmZDU0ZicsXG4gIGFtYmVyNDAwOiAnI2ZmY2EyOCcsXG4gIGFtYmVyNTAwOiAnI2ZmYzEwNycsXG4gIGFtYmVyNjAwOiAnI2ZmYjMwMCcsXG4gIGFtYmVyNzAwOiAnI2ZmYTAwMCcsXG4gIGFtYmVyODAwOiAnI2ZmOGYwMCcsXG4gIGFtYmVyOTAwOiAnI2ZmNmYwMCcsXG4gIGFtYmVyQTEwMDogJyNmZmU1N2YnLFxuICBhbWJlckEyMDA6ICcjZmZkNzQwJyxcbiAgYW1iZXJBNDAwOiAnI2ZmYzQwMCcsXG4gIGFtYmVyQTcwMDogJyNmZmFiMDAnLFxuXG4gIG9yYW5nZTUwOiAnI2ZmZjNlMCcsXG4gIG9yYW5nZTEwMDogJyNmZmUwYjInLFxuICBvcmFuZ2UyMDA6ICcjZmZjYzgwJyxcbiAgb3JhbmdlMzAwOiAnI2ZmYjc0ZCcsXG4gIG9yYW5nZTQwMDogJyNmZmE3MjYnLFxuICBvcmFuZ2U1MDA6ICcjZmY5ODAwJyxcbiAgb3JhbmdlNjAwOiAnI2ZiOGMwMCcsXG4gIG9yYW5nZTcwMDogJyNmNTdjMDAnLFxuICBvcmFuZ2U4MDA6ICcjZWY2YzAwJyxcbiAgb3JhbmdlOTAwOiAnI2U2NTEwMCcsXG4gIG9yYW5nZUExMDA6ICcjZmZkMTgwJyxcbiAgb3JhbmdlQTIwMDogJyNmZmFiNDAnLFxuICBvcmFuZ2VBNDAwOiAnI2ZmOTEwMCcsXG4gIG9yYW5nZUE3MDA6ICcjZmY2ZDAwJyxcblxuICBkZWVwT3JhbmdlNTA6ICcjZmJlOWU3JyxcbiAgZGVlcE9yYW5nZTEwMDogJyNmZmNjYmMnLFxuICBkZWVwT3JhbmdlMjAwOiAnI2ZmYWI5MScsXG4gIGRlZXBPcmFuZ2UzMDA6ICcjZmY4YTY1JyxcbiAgZGVlcE9yYW5nZTQwMDogJyNmZjcwNDMnLFxuICBkZWVwT3JhbmdlNTAwOiAnI2ZmNTcyMicsXG4gIGRlZXBPcmFuZ2U2MDA6ICcjZjQ1MTFlJyxcbiAgZGVlcE9yYW5nZTcwMDogJyNlNjRhMTknLFxuICBkZWVwT3JhbmdlODAwOiAnI2Q4NDMxNScsXG4gIGRlZXBPcmFuZ2U5MDA6ICcjYmYzNjBjJyxcbiAgZGVlcE9yYW5nZUExMDA6ICcjZmY5ZTgwJyxcbiAgZGVlcE9yYW5nZUEyMDA6ICcjZmY2ZTQwJyxcbiAgZGVlcE9yYW5nZUE0MDA6ICcjZmYzZDAwJyxcbiAgZGVlcE9yYW5nZUE3MDA6ICcjZGQyYzAwJyxcblxuICBicm93bjUwOiAnI2VmZWJlOScsXG4gIGJyb3duMTAwOiAnI2Q3Y2NjOCcsXG4gIGJyb3duMjAwOiAnI2JjYWFhNCcsXG4gIGJyb3duMzAwOiAnI2ExODg3ZicsXG4gIGJyb3duNDAwOiAnIzhkNmU2MycsXG4gIGJyb3duNTAwOiAnIzc5NTU0OCcsXG4gIGJyb3duNjAwOiAnIzZkNGM0MScsXG4gIGJyb3duNzAwOiAnIzVkNDAzNycsXG4gIGJyb3duODAwOiAnIzRlMzQyZScsXG4gIGJyb3duOTAwOiAnIzNlMjcyMycsXG5cbiAgYmx1ZUdyZXk1MDogJyNlY2VmZjEnLFxuICBibHVlR3JleTEwMDogJyNjZmQ4ZGMnLFxuICBibHVlR3JleTIwMDogJyNiMGJlYzUnLFxuICBibHVlR3JleTMwMDogJyM5MGE0YWUnLFxuICBibHVlR3JleTQwMDogJyM3ODkwOWMnLFxuICBibHVlR3JleTUwMDogJyM2MDdkOGInLFxuICBibHVlR3JleTYwMDogJyM1NDZlN2EnLFxuICBibHVlR3JleTcwMDogJyM0NTVhNjQnLFxuICBibHVlR3JleTgwMDogJyMzNzQ3NGYnLFxuICBibHVlR3JleTkwMDogJyMyNjMyMzgnLFxuXG4gIGdyZXk1MDogJyNmYWZhZmEnLFxuICBncmV5MTAwOiAnI2Y1ZjVmNScsXG4gIGdyZXkyMDA6ICcjZWVlZWVlJyxcbiAgZ3JleTMwMDogJyNlMGUwZTAnLFxuICBncmV5NDAwOiAnI2JkYmRiZCcsXG4gIGdyZXk1MDA6ICcjOWU5ZTllJyxcbiAgZ3JleTYwMDogJyM3NTc1NzUnLFxuICBncmV5NzAwOiAnIzYxNjE2MScsXG4gIGdyZXk4MDA6ICcjNDI0MjQyJyxcbiAgZ3JleTkwMDogJyMyMTIxMjEnLFxuXG4gIGJsYWNrOiAnIzAwMDAwMCcsXG4gIHdoaXRlOiAnI2ZmZmZmZicsXG5cbiAgdHJhbnNwYXJlbnQ6ICdyZ2JhKDAsIDAsIDAsIDApJyxcbiAgZnVsbEJsYWNrOiAncmdiYSgwLCAwLCAwLCAxKScsXG4gIGRhcmtCbGFjazogJ3JnYmEoMCwgMCwgMCwgMC44NyknLFxuICBsaWdodEJsYWNrOiAncmdiYSgwLCAwLCAwLCAwLjU0KScsXG4gIG1pbkJsYWNrOiAncmdiYSgwLCAwLCAwLCAwLjI2KScsXG4gIGZhaW50QmxhY2s6ICdyZ2JhKDAsIDAsIDAsIDAuMTIpJyxcbiAgZnVsbFdoaXRlOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXG4gIGRhcmtXaGl0ZTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC44NyknLFxuICBsaWdodFdoaXRlOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0KSdcbn1cbiIsImltcG9ydCAkIGZyb20gJ3N1cGVyYWdlbnQnXG5cbmNvbnN0IHRlbXAgPSBbXG5cdCdMZXdpcyBIYW1pbHRvbicsXG5cdCdOaWNvIFJvc2JlcmcnLFxuXHQnU2ViYXN0aWFuIFZldHRlbCcsXG5cdCdLaW1pIFJhaWtrb25lbicsXG5cdCdEYW5pZWwgUmljY2lhcmRvJyxcblx0J01heCBWZXJzdGFwcGVuJyxcblx0J0ZlbGlwcGUgTWFzc2EnLFxuXHQnVmFsdHRlcmkgQm90dGFzJyxcblx0J1NlcmdpbyBQZXJleicsXG5cdCdOaWNvIEh1bGtlbmJlcmcnLFxuXHQnRGFuaWlsIEt2eWF0Jyxcblx0J0NhcmxvcyBTYWlueicsXG5cdCdSb21haW4gR3Jvc2plYW4nLFxuXHQnRmVybmFuZG8gQWxvbnNvJyxcblx0J0plbnNvbiBCdXR0b24nLFxuXHQnS2V2aW4gTWFnbnVzc2VuJyxcblx0J0VzdGViYW4gR3V0aWVycmV6Jyxcblx0J0pvbHlvbiBQYWxtZXInLFxuXHQnTWFyY3VzIEVyaWNzc29uJyxcblx0J1Bhc2NhbCBXZWhybGVpbicsXG5cdCdGZWxpcGUgTmFzcicsXG5cdCdSaW8gSGFyeWFudG8nXG5dXG5cbmNsYXNzIFN1Z2dlc3Rpb25TZXJ2aWNlIHtcblx0c3RhdGljIGdldFN1Z2dlc3Rpb25zKGNiKSB7XG5cdFx0JC5nZXQoJy9haS9zdWdnZXN0aW9ucycpXG5cdFx0LmVuZCgoZXJyLCByZXMpID0+IHtcblx0XHRcdGNiKGVyciA/IFtdIDogcmVzLmJvZHkpXG5cdFx0fSlcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdWdnZXN0aW9uU2VydmljZVxuIiwiaW1wb3J0ICQgZnJvbSAnc3VwZXJhZ2VudCdcblxuY2xhc3MgVGV4dEFuYWx5c2lzU2VydmljZSB7XG5cdHN0YXRpYyBhbmFseXNlMih0eHQsIGNiKSB7XG5cdFx0JC5wb3N0KCdodHRwczovL2FwaXYyLmluZGljby5pby9rZXl3b3Jkcz9rZXk9Mjc1OTg5ZTc5MTFkYTNlM2ZlMDQ0ZWMzNDQ3NDk5NmQnKVxuXHRcdC5zZW5kKEpTT04uc3RyaW5naWZ5KHtkYXRhOiB0eHQsIHJlbGF0aXZlOiB0cnVlfSkpXG5cdFx0LmVuZCgoZXJyLCByZXMpID0+IHtcblx0XHRcdGNiKGVyciwgcmVzKVxuXHRcdH0pXG5cdH1cblx0c3RhdGljIGFuYWx5c2UodHh0LCBjYikge1xuXHRcdCQucG9zdChgL2FpL2FuYWx5c2VgKVxuXHRcdC5zZW5kKHt0ZXh0OiB0eHR9KVxuXHRcdC5lbmQoKGVyciwgcmVzKSA9PiB7XG5cdFx0XHRjYihlcnIsIHJlcylcblx0XHR9KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRBbmFseXNpc1NlcnZpY2VcbiJdfQ==
