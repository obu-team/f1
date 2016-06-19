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
	},
	bg: {
		background: 'url(\'/img/bg2.jpg\') no-repeat center center',
		backgroundSize: 'cover'
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
				{ style: [styles.bg] },
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

},{"../lib/colors":27,"../services/Suggestion.Service":30,"./UI/CenterContainer":6,"./UI/FullScreen":7,"./UI/Loader":9,"radium":"radium","react":"react"}],3:[function(require,module,exports){
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

var _Utils = require('../lib/Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _Loader = require('./UI/Loader');

var _Loader2 = _interopRequireDefault(_Loader);

var _FullScreen = require('./UI/FullScreen');

var _FullScreen2 = _interopRequireDefault(_FullScreen);

var _CenterContainer = require('./UI/CenterContainer');

var _CenterContainer2 = _interopRequireDefault(_CenterContainer);

var _SearchInput = require('./UI/SearchInput');

var _SearchInput2 = _interopRequireDefault(_SearchInput);

var _SearchGrid = require('./SearchGrid');

var _SearchGrid2 = _interopRequireDefault(_SearchGrid);

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
	},
	bg: {
		background: 'url(\'/img/bg2.jpg\') no-repeat center center',
		backgroundSize: 'cover'
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
			src: '',
			recommend: '',
			entities: []
		};
		_this.onSrcChange = _this.onSrcChange.bind(_this);
		_this.search = _this.search.bind(_this);
		_this.onTab = _this.onTab.bind(_this);
		_this.onHome = _this.onHome.bind(_this);
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
				recommend: rec
			});
		}
	}, {
		key: 'onTab',
		value: function onTab() {
			var _state = this.state;
			var src = _state.src;
			var recommend = _state.recommend;

			var newSrc = src + recommend;
			_Utils2.default.setQuery(newSrc);
			this.setState({
				src: newSrc,
				recommend: ''
			});
		}
	}, {
		key: 'onHome',
		value: function onHome() {
			_Utils2.default.setQuery('');
			this.setState({
				search: false,
				modal: false,
				src: '',
				recommend: '',
				entities: []
			});
		}
	}, {
		key: 'search',
		value: function search() {
			var _this2 = this;

			if (!this.state.src) return false;
			var src = this.state.src + this.state.recommend;
			_Utils2.default.setQuery(src);
			this.setState({
				search: true,
				src: src,
				recommend: ''
			});
			_TextAnalysis2.default.analyse(src, function (err, res) {
				_this2.setState({
					search: false,
					entities: res,
					modal: true
				});
			});
		}
	}, {
		key: 'renderFullSrc',
		value: function renderFullSrc() {
			return _react2.default.createElement(
				_FullScreen2.default,
				{ style: [styles.bg] },
				_react2.default.createElement(
					_CenterContainer2.default,
					null,
					_react2.default.createElement('img', { src: '/img/f1_logo_bright.png', style: styles.logo }),
					_react2.default.createElement('br', null),
					_react2.default.createElement(
						'div',
						{ style: styles.input },
						_react2.default.createElement(_SearchInput2.default, { recommend: this.state.recommend, value: this.state.src, onChange: this.onSrcChange, onEnter: this.search, onTab: this.onTab })
					),
					_react2.default.createElement('br', null)
				)
			);
		}
	}, {
		key: 'renderGrid',
		value: function renderGrid() {
			return _react2.default.createElement(_SearchGrid2.default, { onHome: this.onHome, recommend: this.state.recommend, value: this.state.src, onChange: this.onSrcChange, onEnter: this.search, onTab: this.onTab, entities: this.state.entities });
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
			var cnt = this.state.modal ? this.renderGrid() : this.renderFullSrc();
			return _react2.default.createElement(
				'div',
				null,
				loader,
				_react2.default.createElement(
					'div',
					{ style: [styles.ease, search ? styles.blur : null] },
					cnt
				)
			);
		}
	}]);

	return Dashboard;
}(_react2.default.Component);

exports.default = (0, _radium2.default)(Dashboard);

},{"../lib/Utils":26,"../lib/colors":27,"../services/TextAnalysis.Service":31,"./SearchGrid":5,"./UI/CenterContainer":6,"./UI/FullScreen":7,"./UI/Loader":9,"./UI/SearchInput":21,"async":"async","lodash":"lodash","radium":"radium","react":"react"}],4:[function(require,module,exports){
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

},{"./UI/CenterContainer":6,"./UI/FullScreen":7,"radium":"radium","react":"react"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _Nav = require('./UI/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _GridContainer = require('./UI/GridContainer');

var _GridContainer2 = _interopRequireDefault(_GridContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchGrid = function (_React$Component) {
	_inherits(SearchGrid, _React$Component);

	function SearchGrid(props) {
		_classCallCheck(this, SearchGrid);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SearchGrid).call(this, props));
	}

	_createClass(SearchGrid, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_Nav2.default, { onHome: this.props.onHome, recommend: this.props.recommend, value: this.props.value, onChange: this.props.onChange, onEnter: this.props.onEnter, onTab: this.props.onTab }),
				_react2.default.createElement(_GridContainer2.default, { entities: this.props.entities })
			);
		}
	}]);

	return SearchGrid;
}(_react2.default.Component);

exports.default = SearchGrid;

},{"./UI/GridContainer":8,"./UI/Nav":11,"radium":"radium","react":"react"}],6:[function(require,module,exports){
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

var _Analyser = require('../../lib/Analyser');

var _Analyser2 = _interopRequireDefault(_Analyser);

var _Utils = require('../../lib/Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _MasonryGrid = require('./MasonryGrid');

var _MasonryGrid2 = _interopRequireDefault(_MasonryGrid);

var _Paper = require('./Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _PaperContent = require('./PaperContent');

var _PaperContent2 = _interopRequireDefault(_PaperContent);

var _Profile = require('./Profile');

var _Profile2 = _interopRequireDefault(_Profile);

var _Summary = require('./Summary');

var _Summary2 = _interopRequireDefault(_Summary);

var _Loader = require('./Loader');

var _Loader2 = _interopRequireDefault(_Loader);

var _CenterContainer = require('./CenterContainer');

var _CenterContainer2 = _interopRequireDefault(_CenterContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
	container: {
		width: '100%',
		minHeight: '100vh',
		boxSizing: 'border-box',
		padding: '80px 20px 20px 20px',
		background: _colors2.default.grey200
	},
	mansory: {
		boxSizing: 'border-box',
		width: '25%'
	},
	summary: {
		width: '50%'
	}
};

var GridContainer = function (_React$Component) {
	_inherits(GridContainer, _React$Component);

	function GridContainer(props) {
		_classCallCheck(this, GridContainer);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GridContainer).call(this, props));

		_this.state = {
			profiles: [],
			dates: [],
			summaries: [],
			entities: [],
			loaded: false
		};
		return _this;
	}

	_createClass(GridContainer, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.parseEntities(this.props);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.parseEntities(nextProps);
		}
	}, {
		key: 'parseEntities',
		value: function parseEntities(props) {
			var _this2 = this;

			//if(!_.isEqual(this.state.entities, props.entities)) {
			_Analyser2.default.parseEntities(_Utils2.default.getQuery(), props.entities, function (data) {
				return _this2.setState({ profiles: data.profiles, dates: data.dates, summaries: data.summaries, entities: props.entities, loaded: true });
			});
			//}
		}
	}, {
		key: 'renderEmpty',
		value: function renderEmpty() {
			return _react2.default.createElement(
				_MasonryGrid2.default,
				null,
				_react2.default.createElement(
					'div',
					{ style: styles.mansory, className: 'gridItem' },
					_react2.default.createElement(
						_Paper2.default,
						null,
						_react2.default.createElement(
							_PaperContent2.default,
							null,
							_react2.default.createElement('span', { className: 'lnr lnr-cross' }),
							' No results found'
						)
					)
				)
			);
		}
	}, {
		key: 'renderContent',
		value: function renderContent() {
			return _react2.default.createElement(
				_MasonryGrid2.default,
				null,
				this.state.summaries.map(function (s) {
					return _react2.default.createElement(
						'div',
						{ className: 'gridItem', key: s.name + s.type, style: [styles.mansory, styles.summary] },
						_react2.default.createElement(_Summary2.default, { summary: s })
					);
				}),
				this.state.profiles.map(function (p) {
					return _react2.default.createElement(
						'div',
						{ className: 'gridItem', key: p._id, style: styles.mansory },
						_react2.default.createElement(_Profile2.default, { entity: p })
					);
				})
			);
		}
	}, {
		key: 'renderLoader',
		value: function renderLoader() {
			return _react2.default.createElement(
				_MasonryGrid2.default,
				null,
				_react2.default.createElement(
					'div',
					{ style: styles.mansory, className: 'gridItem' },
					_react2.default.createElement(
						_Paper2.default,
						null,
						_react2.default.createElement(
							_PaperContent2.default,
							null,
							_react2.default.createElement(
								_CenterContainer2.default,
								null,
								_react2.default.createElement(_Loader2.default, null)
							)
						)
					)
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _state = this.state;
			var profiles = _state.profiles;
			var summaries = _state.summaries;
			var loaded = _state.loaded;

			var cnt = null;
			if (!loaded) {
				cnt = this.renderLoader();
			} else if (!profiles.length && !summaries.length) {
				cnt = this.renderEmpty();
			} else {
				cnt = this.renderContent();
			}
			return _react2.default.createElement(
				'div',
				{ style: styles.container },
				cnt
			);
		}
	}]);

	return GridContainer;
}(_react2.default.Component);

exports.default = (0, _radium2.default)(GridContainer);

},{"../../lib/Analyser":24,"../../lib/Utils":26,"../../lib/colors":27,"./CenterContainer":6,"./Loader":9,"./MasonryGrid":10,"./Paper":12,"./PaperContent":14,"./Profile":20,"./Summary":22,"radium":"radium","react":"react"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _colors = require('../../lib/colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  width: '60px',
  height: '60px',
  background: _colors2.default.red500,
  animation: 'sk-rotateplane 1.2s infinite ease-in-out'
};

var Loader = function Loader(props) {
  return _react2.default.createElement('div', { style: [style, props.style] });
};

exports.default = (0, _radium2.default)(Loader);

},{"../../lib/colors":27,"radium":"radium","react":"react"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _masonryLayout = require('masonry-layout');

var _masonryLayout2 = _interopRequireDefault(_masonryLayout);

var _imagesloaded = require('imagesloaded');

var _imagesloaded2 = _interopRequireDefault(_imagesloaded);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _Utils = require('../../lib/Utils');

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
	grid: {
		width: '100%'
	},
	sizer: {
		width: '25%'
	}
};

var MasonryGrid = function (_React$Component) {
	_inherits(MasonryGrid, _React$Component);

	function MasonryGrid(props) {
		_classCallCheck(this, MasonryGrid);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(MasonryGrid).call(this, props));
	}

	_createClass(MasonryGrid, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.gridLayout();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(nextProps, nextState) {
			this.gridLayout();
		}
		/*componentWillReceiveProps(nextProps) {
  	this.gridLayout()
  }*/

	}, {
		key: 'gridLayout',
		value: function gridLayout() {
			var grid = document.querySelector('.masonryGrid');
			_Utils2.default.reposition();
			(0, _imagesloaded2.default)(grid, function () {
				return _Utils2.default.reposition();
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'masonryGrid', style: styles.grid },
				_react2.default.createElement('div', { className: 'gridSizer', style: styles.sizer }),
				this.props.children
			);
		}
	}]);

	return MasonryGrid;
}(_react2.default.Component);

exports.default = (0, _radium2.default)(MasonryGrid);

},{"../../lib/Utils":26,"imagesloaded":"imagesloaded","jquery":"jquery","masonry-layout":"masonry-layout","radium":"radium","react":"react"}],11:[function(require,module,exports){
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

var _SearchInput = require('./SearchInput');

var _SearchInput2 = _interopRequireDefault(_SearchInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
	container: {
		background: '#1b1718',
		width: '100%',
		height: 70,
		boxSizing: 'border-box',
		padding: '15px 40px',
		position: 'fixed',
		top: 0,
		left: 0,
		zIndex: 100
	},
	logo: {
		height: 40,
		cursor: 'pointer'
	},
	input: {
		width: 400,
		height: 40,
		display: 'inline-block',
		padding: 0,
		float: 'right'
	},
	inp: {
		border: '1px solid ' + _colors2.default.white,
		':focus': {
			border: '1px solid ' + _colors2.default.white
		}
	}
};

var Nav = function (_React$Component) {
	_inherits(Nav, _React$Component);

	function Nav(props) {
		_classCallCheck(this, Nav);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Nav).call(this, props));
	}

	_createClass(Nav, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'nav',
				{ style: styles.container },
				_react2.default.createElement('img', { src: '/img/f1_logo_dark.png', onClick: this.props.onHome, style: styles.logo }),
				_react2.default.createElement(
					'div',
					{ style: styles.input },
					_react2.default.createElement(_SearchInput2.default, { inpStyle: [styles.inp], recommend: this.props.recommend, value: this.props.value, onChange: this.props.onChange, onEnter: this.props.onEnter, onTab: this.props.onTab })
				)
			);
		}
	}]);

	return Nav;
}(_react2.default.Component);

exports.default = (0, _radium2.default)(Nav);

},{"../../lib/colors":27,"./SearchInput":21,"radium":"radium","react":"react"}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _colors = require('../../lib/colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
	width: '100%',
	background: _colors2.default.white,
	boxShadow: '0 -1px 0 #e5e5e5, 0 0 2px rgba(0, 0, 0, .12), 0 2px 4px rgba(0, 0, 0, .24)'
};

var Paper = function Paper(props) {
	return _react2.default.createElement(
		'div',
		{ style: [style, props.style] },
		props.children
	);
};

Paper.defaultProps = {
	style: {}
};

exports.default = (0, _radium2.default)(Paper);

},{"../../lib/colors":27,"radium":"radium","react":"react"}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _colors = require('../../lib/colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
	display: 'block',
	border: 'none',
	margin: 0,
	padding: '10px',
	color: _colors2.default.white,
	background: _colors2.default.red500,
	fontSize: '.8rem',
	fontWeight: 400,
	fontFamily: 'inherit',
	cursor: 'pointer',
	transition: 'all 0.1s ease-in-out',
	':hover': {
		background: _colors2.default.red700
	}
};

var PaperBtn = function PaperBtn(props) {
	return _react2.default.createElement(
		'a',
		{ href: props.href, target: '_blank' },
		_react2.default.createElement(
			'button',
			{ style: style },
			props.children
		)
	);
};

PaperBtn.defaultProps = {
	style: {}
};

exports.default = (0, _radium2.default)(PaperBtn);

},{"../../lib/colors":27,"radium":"radium","react":"react"}],14:[function(require,module,exports){
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
	width: '100%',
	boxSizing: 'border-box',
	padding: 20
};

var PaperContent = function PaperContent(props) {
	return _react2.default.createElement(
		'div',
		{ style: style },
		props.children
	);
};

exports.default = (0, _radium2.default)(PaperContent);

},{"radium":"radium","react":"react"}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _colors = require('../../lib/colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
	width: '100%',
	display: 'block',
	fontSize: '1rem',
	fontWeight: 300,
	margin: 0,
	padding: '10px 20px',
	boxSizing: 'border-box',
	background: '#1b1718',
	color: _colors2.default.white
};

var PaperHeader = function PaperHeader(props) {
	return _react2.default.createElement(
		'h1',
		{ style: style },
		props.children
	);
};

exports.default = (0, _radium2.default)(PaperHeader);

},{"../../lib/colors":27,"radium":"radium","react":"react"}],16:[function(require,module,exports){
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
	width: '100%',
	display: 'block'
};

var PaperImg = function PaperImg(props) {
	return _react2.default.createElement('img', { src: props.src, style: style });
};

exports.default = (0, _radium2.default)(PaperImg);

},{"radium":"radium","react":"react"}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
	container: {
		width: '100%',
		fontWeight: 300,
		marginBottom: 10,
		float: 'left'
	},
	h2: {
		width: '100%',
		margin: 0,
		padding: 0,
		fontSize: '.8rem',
		fontWeight: 400
	},
	txt: {
		width: '100%',
		fontSize: '.8rem',
		wordWrap: 'break-word'
	}
};

var PaperLi = function PaperLi(props) {
	return _react2.default.createElement(
		'div',
		{ style: styles.container },
		_react2.default.createElement(
			'h2',
			{ style: styles.h2 },
			props.head
		),
		_react2.default.createElement(
			'div',
			{ style: styles.txt },
			props.children
		)
	);
};

exports.default = (0, _radium2.default)(PaperLi);

},{"radium":"radium","react":"react"}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _colors = require('../../lib/colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
	width: '100%',
	display: 'block',
	background: _colors2.default.grey200,
	height: 1,
	margin: '10px 0 20px 0'
};

var PaperLine = function PaperLine(props) {
	return _react2.default.createElement('div', { style: style });
};

exports.default = (0, _radium2.default)(PaperLine);

},{"../../lib/colors":27,"radium":"radium","react":"react"}],19:[function(require,module,exports){
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
	width: '100%',
	display: 'block'
};

var PaperUl = function PaperUl(props) {
	return _react2.default.createElement(
		'div',
		{ className: 'clear', style: style },
		props.children
	);
};

exports.default = (0, _radium2.default)(PaperUl);

},{"radium":"radium","react":"react"}],20:[function(require,module,exports){
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

var _colors = require('../../lib/colors');

var _colors2 = _interopRequireDefault(_colors);

var _Entity = require('../../services/Entity.Service');

var _Entity2 = _interopRequireDefault(_Entity);

var _F = require('../../services/F1.Service');

var _F2 = _interopRequireDefault(_F);

var _Utils = require('../../lib/Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _Paper = require('./Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _PaperContent = require('./PaperContent');

var _PaperContent2 = _interopRequireDefault(_PaperContent);

var _PaperImg = require('./PaperImg');

var _PaperImg2 = _interopRequireDefault(_PaperImg);

var _PaperHeader = require('./PaperHeader');

var _PaperHeader2 = _interopRequireDefault(_PaperHeader);

var _PaperUl = require('./PaperUl');

var _PaperUl2 = _interopRequireDefault(_PaperUl);

var _PaperLi = require('./PaperLi');

var _PaperLi2 = _interopRequireDefault(_PaperLi);

var _PaperLine = require('./PaperLine');

var _PaperLine2 = _interopRequireDefault(_PaperLine);

var _PaperBtn = require('./PaperBtn');

var _PaperBtn2 = _interopRequireDefault(_PaperBtn);

var _Loader = require('./Loader');

var _Loader2 = _interopRequireDefault(_Loader);

var _CenterContainer = require('./CenterContainer');

var _CenterContainer2 = _interopRequireDefault(_CenterContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var exclude = ['thumbnail', 'depiction', 'birthPlace', 'wikiPageID', 'abstract', 'location'];

var styles = {
	reload: {
		cursor: 'pointer',
		':hover': {
			color: _colors2.default.red500
		}
	},
	container: {
		padding: 20,
		boxSizing: 'border-box',
		width: '100%'
	}
};

var Profile = function (_React$Component) {
	_inherits(Profile, _React$Component);

	function Profile(props) {
		_classCallCheck(this, Profile);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Profile).call(this, props));

		_this.state = {
			entity: null,
			err: false
		};
		_this.reload = _this.reload.bind(_this);
		return _this;
	}

	_createClass(Profile, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			if (this.props.entity.data) {
				this.setState({ entity: this.props.entity.data });
			} else {
				this.fetchSparql();
			}
		}
	}, {
		key: 'reload',
		value: function reload() {
			this.setState({
				entity: null,
				err: false
			});
			this.fetchSparql();
		}
	}, {
		key: 'fetchSparql',
		value: function fetchSparql() {
			var _this2 = this;

			_Entity2.default.getEntity(this.props.entity, function (err, res) {
				if (err || !res.body.results.bindings.length) return _this2.fetchApi();
				_this2.setState({ entity: res.body.results.bindings[0] });
			});
		}
	}, {
		key: 'fetchApi',
		value: function fetchApi() {
			var _this3 = this;

			_F2.default.getEntity(this.props.entity, function (err, res) {
				if (err) return _this3.setState({ entity: null, err: true });
				_this3.setState({
					entity: res,
					err: false
				});
			});
		}
	}, {
		key: 'renderLoader',
		value: function renderLoader() {
			return _react2.default.createElement(
				'div',
				{ style: styles.container },
				_react2.default.createElement(
					_Paper2.default,
					null,
					_react2.default.createElement(
						_PaperContent2.default,
						null,
						_react2.default.createElement(
							_CenterContainer2.default,
							null,
							_react2.default.createElement(_Loader2.default, null)
						)
					)
				)
			);
		}
	}, {
		key: 'renderContent',
		value: function renderContent() {
			var _this4 = this;

			var entity = this.state.entity;

			var img = _lodash2.default.has(entity, 'depiction') ? _react2.default.createElement(_PaperImg2.default, { src: entity.depiction.value }) : null;
			var href = _lodash2.default.has(entity, 'wikiPageID') ? _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_PaperLine2.default, null),
				_react2.default.createElement(
					_PaperBtn2.default,
					{ href: 'https://en.wikipedia.org/?curid=' + entity.wikiPageID.value },
					'Read More'
				)
			) : null;
			var keys = (0, _lodash2.default)(entity).keys().filter(function (k) {
				return _lodash2.default.indexOf(exclude, k) == -1;
			}).value();
			return _react2.default.createElement(
				'div',
				{ style: styles.container },
				_react2.default.createElement(
					_Paper2.default,
					null,
					img,
					_react2.default.createElement(
						_PaperHeader2.default,
						null,
						this.props.entity.name
					),
					_react2.default.createElement(
						_PaperContent2.default,
						null,
						_react2.default.createElement(
							_PaperUl2.default,
							null,
							keys.map(function (k) {
								return _react2.default.createElement(
									_PaperLi2.default,
									{ key: _this4.props.entity._id + '-' + k, head: _Utils2.default.capitalize(k) },
									_Utils2.default.formatEntityString(entity[k].value)
								);
							})
						),
						href
					)
				)
			);
		}
	}, {
		key: 'renderAgainBtn',
		value: function renderAgainBtn() {
			return _react2.default.createElement(
				_Paper2.default,
				null,
				_react2.default.createElement(
					_PaperContent2.default,
					null,
					_react2.default.createElement(
						_PaperHeader2.default,
						null,
						this.props.entity.name
					),
					_react2.default.createElement(
						'span',
						{ style: styles.reload, onClick: this.reload },
						'Could not fetch data. Click to try again'
					)
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			if (this.state.err) return this.renderAgainBtn();
			if (!this.state.entity) return this.renderLoader();
			return this.renderContent();
		}
	}]);

	return Profile;
}(_react2.default.Component);

Profile.propTypes = {
	entity: _react.PropTypes.object.isRequired
};

exports.default = (0, _radium2.default)(Profile);

},{"../../lib/Utils":26,"../../lib/colors":27,"../../services/Entity.Service":28,"../../services/F1.Service":29,"./CenterContainer":6,"./Loader":9,"./Paper":12,"./PaperBtn":13,"./PaperContent":14,"./PaperHeader":15,"./PaperImg":16,"./PaperLi":17,"./PaperLine":18,"./PaperUl":19,"lodash":"lodash","radium":"radium","react":"react"}],21:[function(require,module,exports){
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
		background: _colors2.default.white,
		overflow: 'hidden'
	},
	inpContainer: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		boxSizing: 'border-box',
		background: 'none',
		border: '1px solid ' + _colors2.default.white,
		fontWeight: 300,
		padding: '5px 45px 5px 5px',
		fontSize: '1rem',
		textAlign: 'left',
		fontFamily: 'Roboto',
		margin: 0,
		':focus': {
			outline: 'none'
		}
	},
	//border: `1px solid ${colors.grey800}`
	recommend: {
		color: _colors2.default.grey500,
		paddingTop: 9
	},
	ease: {
		transition: 'all 0.1s ease-in-out'
	},
	whiteSpace: {
		color: _colors2.default.white
	},
	icon: {
		position: 'absolute',
		width: 40,
		height: 40,
		top: 0,
		right: 0,
		display: 'block',
		fontSize: '1em',
		background: _colors2.default.grey800,
		color: _colors2.default.white,
		border: 'none',
		padding: 0,
		cursor: 'pointer',
		':hover': {
			color: _colors2.default.grey500
		}
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
					{ style: [styles.inpContainer, styles.recommend, this.props.inpStyle] },
					_react2.default.createElement(
						'span',
						{ style: styles.whiteSpace },
						this.props.value
					),
					this.props.recommend
				),
				_react2.default.createElement('input', { key: 'inputSrc', type: 'text', style: [styles.ease, styles.inpContainer, this.props.inpStyle], value: this.props.value, onChange: function onChange(e) {
						return _this2.props.onChange(e.target.value);
					}, onKeyPress: this.onKey, onKeyDown: this.onKeyDown }),
				_react2.default.createElement(
					'button',
					{ style: [styles.icon, styles.ease], key: 'internalSrcButton', onClick: function onClick(e) {
							return _this2.props.onEnter();
						} },
					_react2.default.createElement('i', { className: 'fa fa-search' })
				)
			);
		}
	}]);

	return SearchInput;
}(_react2.default.Component);

SearchInput.defaultProps = {
	style: {},
	value: '',
	recommend: '',
	inpStyle: {}
};

exports.default = (0, _radium2.default)(SearchInput);

},{"../../lib/colors":27,"radium":"radium","react":"react"}],22:[function(require,module,exports){
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

var _colors = require('../../lib/colors');

var _colors2 = _interopRequireDefault(_colors);

var _F = require('../../services/F1.Service');

var _F2 = _interopRequireDefault(_F);

var _Utils = require('../../lib/Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _Paper = require('./Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _PaperContent = require('./PaperContent');

var _PaperContent2 = _interopRequireDefault(_PaperContent);

var _PaperHeader = require('./PaperHeader');

var _PaperHeader2 = _interopRequireDefault(_PaperHeader);

var _Loader = require('./Loader');

var _Loader2 = _interopRequireDefault(_Loader);

var _CenterContainer = require('./CenterContainer');

var _CenterContainer2 = _interopRequireDefault(_CenterContainer);

var _Table = require('./Table');

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
	padding: 20,
	boxSizing: 'border-box',
	width: '100%'
};

var Summary = function (_React$Component) {
	_inherits(Summary, _React$Component);

	function Summary(props) {
		_classCallCheck(this, Summary);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Summary).call(this, props));

		_this.state = {
			data: [],
			error: false,
			loading: true,
			ths: []
		};
		_this.mounted = false;
		return _this;
	}

	_createClass(Summary, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			var _this2 = this;

			this.mounted = true;
			_F2.default.getSummary(this.props.summary, function (err, data) {
				if (!_this2.mounted) return false;
				if (err) {
					_this2.setState({ loading: false, error: true });
				} else {
					var ths = _F2.default.resultsFormater(_this2.props.summary.type);
					_this2.setState({ loading: false, error: false, data: data, ths: ths });
					_Utils2.default.reposition();
				}
			});
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.mounted = false;
		}
	}, {
		key: 'renderLoader',
		value: function renderLoader() {
			return _react2.default.createElement(
				'div',
				{ style: style },
				_react2.default.createElement(
					_Paper2.default,
					null,
					_react2.default.createElement(
						_PaperHeader2.default,
						null,
						this.props.summary.name
					),
					_react2.default.createElement(
						_PaperContent2.default,
						null,
						_react2.default.createElement(
							_CenterContainer2.default,
							null,
							_react2.default.createElement(_Loader2.default, null)
						)
					)
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _state = this.state;
			var loading = _state.loading;
			var data = _state.data;
			var error = _state.error;
			var ths = _state.ths;

			if (loading) return this.renderLoader();
			if (error) return null;
			return _react2.default.createElement(
				'div',
				{ style: style },
				_react2.default.createElement(
					_Paper2.default,
					null,
					_react2.default.createElement(
						_PaperHeader2.default,
						null,
						this.props.summary.name
					),
					_react2.default.createElement(
						_PaperContent2.default,
						null,
						_react2.default.createElement(_Table2.default, { headers: ths, data: data })
					)
				)
			);
		}
	}]);

	return Summary;
}(_react2.default.Component);

Summary.propTypes = {
	summary: _react.PropTypes.object.isRequired
};

exports.default = (0, _radium2.default)(Summary);

},{"../../lib/Utils":26,"../../lib/colors":27,"../../services/F1.Service":29,"./CenterContainer":6,"./Loader":9,"./Paper":12,"./PaperContent":14,"./PaperHeader":15,"./Table":23,"lodash":"lodash","radium":"radium","react":"react"}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _nodeUuid = require('node-uuid');

var _nodeUuid2 = _interopRequireDefault(_nodeUuid);

var _colors = require('../../lib/colors');

var _colors2 = _interopRequireDefault(_colors);

var _Utils = require('../../lib/Utils');

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
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
			background: _colors2.default.grey200
		}
	},
	header: {
		textTransform: 'uppercase',
		color: _colors2.default.grey800
	},
	odd: {
		background: _colors2.default.grey100,
		':hover': {
			background: _colors2.default.grey200
		}
	},
	cell: {
		padding: 10,
		display: 'table-cell',
		verticalAlign: 'middle',
		wordWrap: 'break-word'
	}
};

var Table = function Table(props) {
	var cnt = 0;
	var width = { width: 100 / props.headers.length + '%' };
	return _react2.default.createElement(
		'div',
		{ className: 'clear', style: styles.container },
		_react2.default.createElement(
			'div',
			{ style: [styles.row, styles.header], key: _nodeUuid2.default.v4() },
			props.headers.map(function (h) {
				return _react2.default.createElement(
					'div',
					{ key: _nodeUuid2.default.v4(), style: [styles.cell] },
					h.name
				);
			})
		),
		props.data.map(function (d) {
			cnt++;
			var odd = cnt % 2 ? styles.odd : {};
			return _react2.default.createElement(
				'div',
				{ key: _nodeUuid2.default.v4(), style: [styles.row, odd] },
				props.headers.map(function (h) {
					return _react2.default.createElement(
						'div',
						{ key: _nodeUuid2.default.v4(), style: [styles.cell] },
						_Utils2.default.formatEntityString(_Utils2.default.pluckValue(d, h.key))
					);
				})
			);
		})
	);
};

Table.propTypes = {
	headers: _react.PropTypes.array.isRequired,
	data: _react.PropTypes.array.isRequired
};

exports.default = (0, _radium2.default)(Table);

},{"../../lib/Utils":26,"../../lib/colors":27,"node-uuid":"node-uuid","radium":"radium","react":"react"}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _async = require('async');

var _async2 = _interopRequireDefault(_async);

var _jsCombinatorics = require('js-combinatorics');

var _jsCombinatorics2 = _interopRequireDefault(_jsCombinatorics);

var _Keywords = require('./Keywords');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _Utils = require('./Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _F = require('../services/F1.Service');

var _F2 = _interopRequireDefault(_F);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Analyser = function () {
	function Analyser() {
		_classCallCheck(this, Analyser);
	}

	_createClass(Analyser, null, [{
		key: 'parseEntities',
		value: function parseEntities(query, entities, cb) {
			var dates = (0, _lodash2.default)(entities).filter(function (e) {
				return e.type == 'date';
			}).map('name').value();
			var _profiles = _lodash2.default.filter(entities, function (e) {
				return e.type != 'date';
			});
			Analyser.evaluateProfiles(query, _profiles, function (profiles) {
				Analyser.dataCase(query, profiles, dates, function (summaries, _ents) {
					if (_ents != undefined && !_ents) profiles = [];
					cb({ dates: dates, profiles: profiles, summaries: summaries });
				});
			});
		}
	}, {
		key: 'evaluateProfiles',
		value: function evaluateProfiles(query, profiles, cb) {
			var keys = (0, _lodash2.default)(query.split(' ')).map(function (k) {
				return _lodash2.default.deburr(k.toLowerCase());
			}).uniq().value();
			var combinations = _Utils2.default.naturalKeywordCombinations(keys);
			var ps = (0, _lodash2.default)(profiles).map(function (p) {
				var keywords = (0, _lodash2.default)(_Utils2.default.naturalKeywordCombinations(p.keywords)).flattenDeep().map(function (k) {
					return _lodash2.default.deburr(k);
				}).uniq().value();
				var intersect = _lodash2.default.intersection(keys, keywords);
				p.confident = intersect.length;
				p.intersect = intersect;
				if (_lodash2.default.indexOf(combinations, _lodash2.default.deburr(p.name.toLowerCase())) > -1) p.confident = 100;
				return p;
			}).orderBy(['confident', 'name'], ['desc', 'asc']).value();
			Analyser.createDependencyGraph(ps, cb);
		}
	}, {
		key: 'createDependencyGraph',
		value: function createDependencyGraph(profiles, cb) {
			var profs = _lodash2.default.groupBy(profiles, 'type');
			profs._keys = _lodash2.default.keys(profs);
			profs = _lodash2.default.map(profs._keys, function (k) {
				var p = profs[k];
				var group = _lodash2.default.groupBy(p, 'intersect');
				var keys = _lodash2.default.keys(group);
				return { _keys: keys, data: group };
			});
			profs = (0, _lodash2.default)(profs).map(function (p) {
				return (0, _lodash2.default)(p._keys).map(function (k) {
					var pr = p.data[k];
					var max = _lodash2.default.maxBy(pr, 'confident').confident;
					return (0, _lodash2.default)(pr).filter(function (_p) {
						return _p.confident == max;
					}).flatten().value();
				}).flatten().value();
			}).flatten().orderBy(['confident', 'type', 'name'], ['desc', 'asc', 'asc']).uniqBy('_id').value();
			cb(profs);
		}
	}, {
		key: 'dataCase',
		value: function dataCase(query, profiles, dates, cb) {
			var keywords = (0, _lodash2.default)(query.split(' ')).map(function (k) {
				return _lodash2.default.deburr(k.toLowerCase());
			}).value();
			var combinations = _Utils2.default.naturalKeywordCombinations(keywords);
			var words = (0, _lodash2.default)(_Keywords.specialKeywords).filter(function (sk) {
				return _lodash2.default.intersection(sk.words, combinations).length;
			}).map('key').uniq().value();
			var grouped = _lodash2.default.groupBy(profiles, 'type');
			var keys = _lodash2.default.keys(grouped);
			if (dates.length) {
				if (profiles.length) {
					if (_Utils2.default.onlyInArray(keys, ['driver'])) {
						var _ret = function () {
							var apiData = Analyser.inspectDriverData(words);
							apiData = apiData.map(function (a) {
								return a + 'ByYear';
							});
							var combos = [];
							_lodash2.default.forEach(dates, function (d) {
								_lodash2.default.forEach(grouped.driver, function (dr) {
									return combos.push({ date: d, driver: dr });
								});
							});
							return {
								v: Analyser.getDataInfo(combos, apiData, cb)
							};
						}();

						if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
					} else if (_Utils2.default.onlyInArray(keys, ['team'])) {
						var _ret2 = function () {
							var apiData = Analyser.inspectTeamData(words);
							apiData = apiData.map(function (a) {
								return a + 'ByYear';
							});
							var combos = [];
							_lodash2.default.forEach(dates, function (d) {
								_lodash2.default.forEach(grouped.team, function (tm) {
									return combos.push({ date: d, team: tm });
								});
							});
							return {
								v: Analyser.getDataInfo(combos, apiData, cb)
							};
						}();

						if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
					} else if (_Utils2.default.onlyInArray(keys, ['track'])) return Analyser.getDataInfo(grouped.track, Analyser.inspectTrackData(words), cb);else if (_Utils2.default.onlyInArray(keys, ['driver', 'team'])) {
						var _ret3 = function () {
							var driverData = Analyser.inspectDriverData(words, true);
							var teamData = Analyser.inspectTeamData(words, true);
							var combos = [];
							_lodash2.default.forEach(grouped.driver, function (d) {
								_lodash2.default.forEach(grouped.team, function (t) {
									return combos.push({ driver: d, team: t });
								});
							});
							var summaries = [];
							return {
								v: _async2.default.parallel([function (cb1) {
									return Analyser.getDataInfo(combos, ['driverRaceResultsByTeam'], function (sum) {
										summaries.push(sum);
										cb1();
									});
								}, function (cb1) {
									return Analyser.getDataInfo(grouped.driver, driverData, function (sum) {
										summaries.push(sum);
										cb1();
									});
								}, function (cb1) {
									return Analyser.getDataInfo(grouped.team, teamData, function (sum) {
										summaries.push(sum);
										cb1();
									});
								}], function () {
									cb(_lodash2.default.flatten(summaries));
								})
							};
						}();

						if ((typeof _ret3 === 'undefined' ? 'undefined' : _typeof(_ret3)) === "object") return _ret3.v;
					} else if (_Utils2.default.onlyInArray(keys, ['driver', 'track'])) {
						var _ret4 = function () {
							var driverData = Analyser.inspectDriverData(words, true);
							var trackData = Analyser.inspectTrackData(words, true);
							var combos = [];
							_lodash2.default.forEach(grouped.driver, function (d) {
								_lodash2.default.forEach(grouped.track, function (t) {
									return combos.push({ driver: d, track: t });
								});
							});
							var summaries = [];
							return {
								v: _async2.default.parallel([function (cb1) {
									return Analyser.getDataInfo(combos, ['driverRaceResultsByTrack'], function (sum) {
										summaries.push(sum);
										cb1();
									});
								}, function (cb1) {
									return Analyser.getDataInfo(grouped.driver, driverData, function (sum) {
										summaries.push(sum);
										cb1();
									});
								}, function (cb1) {
									return Analyser.getDataInfo(grouped.track, trackData, function (sum) {
										summaries.push(sum);
										cb1();
									});
								}], function () {
									cb(_lodash2.default.flatten(summaries));
								})
							};
						}();

						if ((typeof _ret4 === 'undefined' ? 'undefined' : _typeof(_ret4)) === "object") return _ret4.v;
					} else if (_Utils2.default.onlyInArray(keys, ['team', 'track'])) {
						var _ret5 = function () {
							var teamData = Analyser.inspectTeamData(words, true);
							var trackData = Analyser.inspectTrackData(words, true);
							var combos = [];
							_lodash2.default.forEach(grouped.team, function (d) {
								_lodash2.default.forEach(grouped.track, function (t) {
									return combos.push({ team: d, track: t });
								});
							});
							var summaries = [];
							return {
								v: _async2.default.parallel([function (cb1) {
									return Analyser.getDataInfo(combos, ['teamAttendanceByTrack'], function (sum) {
										summaries.push(sum);
										cb1();
									});
								}, function (cb1) {
									return Analyser.getDataInfo(grouped.team, teamData, function (sum) {
										summaries.push(sum);
										cb1();
									});
								}, function (cb1) {
									return Analyser.getDataInfo(grouped.track, trackData, function (sum) {
										summaries.push(sum);
										cb1();
									});
								}], function () {
									cb(_lodash2.default.flatten(summaries));
								})
							};
						}();

						if ((typeof _ret5 === 'undefined' ? 'undefined' : _typeof(_ret5)) === "object") return _ret5.v;
					} else if (_Utils2.default.onlyInArray(keys, ['driver', 'team', 'track'])) {
						var _ret6 = function () {
							var driverData = Analyser.inspectDriverData(words, true);
							var teamData = Analyser.inspectTeamData(words, true);
							var trackData = Analyser.inspectTrackData(words, true);
							var combos = [];
							_lodash2.default.forEach(grouped.driver, function (d) {
								_lodash2.default.forEach(grouped.team, function (t) {
									_lodash2.default.forEach(grouped.track, function (tr) {
										return combos.push({ driver: d, team: t, track: tr });
									});
								});
							});
							var summaries = [];
							return {
								v: _async2.default.parallel([function (cb1) {
									return Analyser.getDataInfo(combos, ['driverRaceResultsByTeamAndTrack'], function (sum) {
										summaries.push(sum);
										cb1();
									});
								}, function (cb1) {
									return Analyser.getDataInfo(grouped.driver, driverData, function (sum) {
										summaries.push(sum);
										cb1();
									});
								}, function (cb1) {
									return Analyser.getDataInfo(grouped.team, teamData, function (sum) {
										summaries.push(sum);
										cb1();
									});
								}], function () {
									cb(_lodash2.default.flatten(summaries));
								})
							};
						}();

						if ((typeof _ret6 === 'undefined' ? 'undefined' : _typeof(_ret6)) === "object") return _ret6.v;
					}
				} else {
					var _apiData2 = ['raceCalendar', 'driverStandings', 'constructorStandings'];
					if (_Utils2.default.oneOfCombinations(words, ['season', 'standing'])) _apiData2 = ['driverStandings', 'constructorStandings'];else if (_Utils2.default.oneOfCombinations(words, ['calendar', 'season'])) _apiData2 = ['raceCalendar'];else if (_Utils2.default.oneOfCombinations(words, ['driver', 'standing', 'season'])) _apiData2 = ['driverStandings'];else if (_Utils2.default.oneOfCombinations(words, ['team', 'standing', 'season'])) _apiData2 = ['constructorStandings'];
					return Analyser.getDataInfo(dates, _apiData2, cb);
				}
			} else {
				if (_Utils2.default.onlyInArray(keys, ['driver'])) return Analyser.getDataInfo(grouped.driver, Analyser.inspectDriverData(words), cb);else if (_Utils2.default.onlyInArray(keys, ['team'])) return Analyser.getDataInfo(grouped.team, Analyser.inspectTeamData(words), cb);else if (_Utils2.default.onlyInArray(keys, ['track'])) {
					var _apiData3 = Analyser.inspectTrackData(words);
					var _ents = true;
					if (_apiData3.length == 1 && _lodash2.default.first(_apiData3) == 'driversByNationality') {
						grouped.track = [_lodash2.default.first(grouped.track)];
						_ents = false;
					}
					return Analyser.getDataInfo(grouped.track, _apiData3, cb, _ents);
				} else if (_Utils2.default.onlyInArray(keys, ['driver', 'team'])) {
					var _ret7 = function () {
						var driverData = Analyser.inspectDriverData(words, true);
						var teamData = Analyser.inspectTeamData(words, true);
						var combos = [];
						_lodash2.default.forEach(grouped.driver, function (d) {
							_lodash2.default.forEach(grouped.team, function (t) {
								return combos.push({ driver: d, team: t });
							});
						});
						var summaries = [];
						return {
							v: _async2.default.parallel([function (cb1) {
								return Analyser.getDataInfo(combos, ['driverRaceResultsByTeam'], function (sum) {
									summaries.push(sum);
									cb1();
								});
							}, function (cb1) {
								return Analyser.getDataInfo(grouped.driver, driverData, function (sum) {
									summaries.push(sum);
									cb1();
								});
							}, function (cb1) {
								return Analyser.getDataInfo(grouped.team, teamData, function (sum) {
									summaries.push(sum);
									cb1();
								});
							}], function () {
								cb(_lodash2.default.flatten(summaries));
							})
						};
					}();

					if ((typeof _ret7 === 'undefined' ? 'undefined' : _typeof(_ret7)) === "object") return _ret7.v;
				} else if (_Utils2.default.onlyInArray(keys, ['driver', 'track'])) {
					var _ret8 = function () {
						var driverData = Analyser.inspectDriverData(words, true);
						var trackData = Analyser.inspectTrackData(words, true);
						var combos = [];
						_lodash2.default.forEach(grouped.driver, function (d) {
							_lodash2.default.forEach(grouped.track, function (t) {
								return combos.push({ driver: d, track: t });
							});
						});
						var summaries = [];
						return {
							v: _async2.default.parallel([function (cb1) {
								return Analyser.getDataInfo(combos, ['driverRaceResultsByTrack'], function (sum) {
									summaries.push(sum);
									cb1();
								});
							}, function (cb1) {
								return Analyser.getDataInfo(grouped.driver, driverData, function (sum) {
									summaries.push(sum);
									cb1();
								});
							}, function (cb1) {
								return Analyser.getDataInfo(grouped.track, trackData, function (sum) {
									summaries.push(sum);
									cb1();
								});
							}], function () {
								cb(_lodash2.default.flatten(summaries));
							})
						};
					}();

					if ((typeof _ret8 === 'undefined' ? 'undefined' : _typeof(_ret8)) === "object") return _ret8.v;
				} else if (_Utils2.default.onlyInArray(keys, ['team', 'track'])) {
					var _ret9 = function () {
						var teamData = Analyser.inspectTeamData(words, true);
						var trackData = Analyser.inspectTrackData(words, true);
						var combos = [];
						_lodash2.default.forEach(grouped.team, function (d) {
							_lodash2.default.forEach(grouped.track, function (t) {
								return combos.push({ team: d, track: t });
							});
						});
						var summaries = [];
						return {
							v: _async2.default.parallel([function (cb1) {
								return Analyser.getDataInfo(combos, ['teamAttendanceByTrack'], function (sum) {
									summaries.push(sum);
									cb1();
								});
							}, function (cb1) {
								return Analyser.getDataInfo(grouped.team, teamData, function (sum) {
									summaries.push(sum);
									cb1();
								});
							}, function (cb1) {
								return Analyser.getDataInfo(grouped.track, trackData, function (sum) {
									summaries.push(sum);
									cb1();
								});
							}], function () {
								cb(_lodash2.default.flatten(summaries));
							})
						};
					}();

					if ((typeof _ret9 === 'undefined' ? 'undefined' : _typeof(_ret9)) === "object") return _ret9.v;
				} else if (_Utils2.default.onlyInArray(keys, ['driver', 'team', 'track'])) {
					var _ret10 = function () {
						var driverData = Analyser.inspectDriverData(words, true);
						var teamData = Analyser.inspectTeamData(words, true);
						var trackData = Analyser.inspectTrackData(words, true);
						var combos = [];
						_lodash2.default.forEach(grouped.driver, function (d) {
							_lodash2.default.forEach(grouped.team, function (t) {
								_lodash2.default.forEach(grouped.track, function (tr) {
									return combos.push({ driver: d, team: t, track: tr });
								});
							});
						});
						var summaries = [];
						return {
							v: _async2.default.parallel([function (cb1) {
								return Analyser.getDataInfo(combos, ['driverRaceResultsByTeamAndTrack'], function (sum) {
									summaries.push(sum);
									cb1();
								});
							}, function (cb1) {
								return Analyser.getDataInfo(grouped.driver, driverData, function (sum) {
									summaries.push(sum);
									cb1();
								});
							}, function (cb1) {
								return Analyser.getDataInfo(grouped.team, teamData, function (sum) {
									summaries.push(sum);
									cb1();
								});
							}], function () {
								cb(_lodash2.default.flatten(summaries));
							})
						};
					}();

					if ((typeof _ret10 === 'undefined' ? 'undefined' : _typeof(_ret10)) === "object") return _ret10.v;
				} else if (words.length) {
					if (_Utils2.default.onlyInArray(words, ['next'])) return Analyser.getDataInfo(['current'], ['nextRace'], cb);else if (_Utils2.default.oneOfCombinations(words, ['current', 'season', 'summary'], ['current', 'summary'])) return Analyser.getDataInfo(['current'], ['nextRace', 'raceCalendar', 'driverStandings', 'constructorStandings'], cb);else if (_Utils2.default.oneOfCombinations(words, ['current', 'season', 'standing', 'driver'], ['current', 'standing', 'driver'])) return Analyser.getDataInfo(['current'], ['driverStandings'], cb);else if (_Utils2.default.oneOfCombinations(words, ['current', 'season', 'standing', 'team'], ['current', 'standing', 'team'])) return Analyser.getDataInfo(['current'], ['constructorStandings'], cb);else if (_Utils2.default.oneOfCombinations(words, ['current', 'season', 'standing'], ['current', 'standing'])) return Analyser.getDataInfo(['current'], ['driverStandings', 'constructorStandings'], cb);else if (_Utils2.default.oneOfCombinations(words, ['current', 'season', 'calendar'], ['current', 'calendar'])) return Analyser.getDataInfo(['current'], ['raceCalendar'], cb);else if (_lodash2.default.indexOf(words, 'current') > -1) {
						var _apiData4 = [];
						if (_lodash2.default.indexOf(words, 'next') > -1) _apiData4.push('nextRace');
						if (_lodash2.default.indexOf(words, 'standing') > -1 && _lodash2.default.indexOf(words, 'driver') == -1 && _lodash2.default.indexOf(words, 'team') == -1) _apiData4.push(['driverStandings', 'constructorStandings']);
						if (_lodash2.default.indexOf(words, 'driver') > -1) _apiData4.push('driverStandings');
						if (_lodash2.default.indexOf(words, 'team') > -1) _apiData4.push('constructorStandings');
						if (_lodash2.default.indexOf(words, 'calendar') > -1) _apiData4.push('raceCalendar');
						_apiData4 = _lodash2.default.flatten(_apiData4);
						if (_apiData4.length) return Analyser.getDataInfo(['current'], _apiData4, cb);
					}
				}
			}
			cb([]);
		}
	}, {
		key: 'inspectDriverData',
		value: function inspectDriverData(words) {
			var empty = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

			var apiData = empty ? [] : ['driverSeasonStanding', 'driverWorldTitles', 'driverSeasonFinishes', 'driverTeams'];
			if (_Utils2.default.oneOfCombinations(words, ['current', 'standing', 'driver'], ['current'])) apiData = ['driverSeasonStanding'];else if (_Utils2.default.oneOfCombinations(words, ['title', 'driver'], ['title'])) apiData = ['driverWorldTitles'];else if (_Utils2.default.oneOfCombinations(words, ['season', 'driver', 'standing'], ['season'])) apiData = ['driverSeasonFinishes'];else if (_Utils2.default.oneOfCombinations(words, ['team', 'driver'], ['team'])) apiData = ['driverTeams'];else {
				var _apiData = [];
				if (_lodash2.default.indexOf(words, 'current') > -1) _apiData.push('driverSeasonStanding');
				if (_lodash2.default.indexOf(words, 'title') > -1) _apiData.push('driverWorldTitles');
				if (_lodash2.default.indexOf(words, 'season') > -1) _apiData.push('driverSeasonFinishes');
				if (_lodash2.default.indexOf(words, 'team') > -1) _apiData.push('driverTeams');
				apiData = _apiData.length ? _apiData : apiData;
			}
			return apiData;
		}
	}, {
		key: 'inspectTeamData',
		value: function inspectTeamData(words) {
			var empty = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

			var apiData = empty ? [] : ['teamSeasonStanding', 'teamWorldTitles', 'teamSeasonFinishes', 'teamDrivers'];
			if (_Utils2.default.oneOfCombinations(words, ['current', 'standing', 'team'], ['current'])) apiData = ['teamSeasonStanding'];else if (_Utils2.default.oneOfCombinations(words, ['title', 'team'], ['title'])) apiData = ['teamWorldTitles'];else if (_Utils2.default.oneOfCombinations(words, ['season', 'team', 'standing'], ['season'])) apiData = ['teamSeasonFinishes'];else if (_Utils2.default.oneOfCombinations(words, ['team', 'driver'], ['driver'])) apiData = ['teamDrivers'];else {
				var _apiData = [];
				if (_lodash2.default.indexOf(words, 'current') > -1) _apiData.push('teamSeasonStanding');
				if (_lodash2.default.indexOf(words, 'title') > -1) _apiData.push('teamWorldTitles');
				if (_lodash2.default.indexOf(words, 'season') > -1) _apiData.push('teamSeasonFinishes');
				if (_lodash2.default.indexOf(words, 'driver') > -1) _apiData.push('teamDrivers');
				apiData = _apiData.length ? _apiData : apiData;
			}
			return apiData;
		}
	}, {
		key: 'inspectTrackData',
		value: function inspectTrackData(words) {
			var empty = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

			var apiData = empty ? [] : ['trackWinners'];
			if (_Utils2.default.oneOfCombinations(words, ['current', 'standing'])) apiData = ['currentTrackResults'];else if (!empty && _Utils2.default.oneOfCombinations(words, ['driver', 'nation'], ['driver'])) apiData = ['driversByNationality'];
			return apiData;
		}
	}, {
		key: 'getDataInfo',
		value: function getDataInfo(data, selection, cb) {
			var entities = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];

			var summaries = [];
			_async2.default.forEach(data, function (d, cb1) {
				d = d == 'current' ? (0, _moment2.default)().format('YYYY') : d;
				summaries.push(_lodash2.default.filter([{
					name: 'Next Race', type: 'nextRace'
				}, {
					name: d + ' Race Calendar',
					type: 'raceCalendar',
					year: d
				}, {
					name: d + ' Driver Standings',
					type: 'driverStandings',
					year: d
				}, {
					name: d + ' Constructor Standings',
					type: 'constructorStandings',
					year: d
				}, {
					name: d.name + '\'s Current Season Info',
					type: 'driverSeasonStanding',
					driver: d.ergastID
				}, {
					name: d.name + '\'s World Titles',
					type: 'driverWorldTitles',
					driver: d.ergastID
				}, {
					name: d.name + '\'s Season Finishes',
					type: 'driverSeasonFinishes',
					driver: d.ergastID
				}, {
					name: d.name + '\'s Constructors',
					type: 'driverTeams',
					driver: d.ergastID
				}, {
					name: d.name + '\'s Current Season Info',
					type: 'teamSeasonStanding',
					team: d.ergastID
				}, {
					name: d.name + '\'s World Titles',
					type: 'teamWorldTitles',
					team: d.ergastID
				}, {
					name: d.name + '\'s Season Finishes',
					type: 'teamSeasonFinishes',
					team: d.ergastID
				}, {
					name: d.name + '\'s Drivers',
					type: 'teamDrivers',
					team: d.ergastID
				}, {
					name: d.name + ' Winners',
					type: 'trackWinners',
					track: d.ergastID
				}, {
					name: 'Drivers',
					type: 'driversByNationality',
					track: d.ergastID
				}, {
					name: (0, _moment2.default)().format('YYYY') + ' ' + d.name + ' Results',
					type: 'currentTrackResults',
					track: d.ergastID
				}, {
					name: (d.driver ? d.driver.name : '') + ' in ' + (d.team ? d.team.name : '') + ' Race Results',
					type: 'driverRaceResultsByTeam',
					driver: d.driver ? d.driver.ergastID : null,
					team: d.team ? d.team.ergastID : null
				}, {
					name: (d.driver ? d.driver.name : '') + ' in ' + (d.track ? d.track.name : '') + ' Race Results',
					type: 'driverRaceResultsByTrack',
					driver: d.driver ? d.driver.ergastID : null,
					track: d.track ? d.track.ergastID : null
				}, {
					name: (d.team ? d.team.name : '') + ' in ' + (d.track ? d.track.name : '') + ' Attendance',
					type: 'teamAttendanceByTrack',
					team: d.team ? d.team.ergastID : null,
					track: d.track ? d.track.ergastID : null
				}, {
					name: (d.driver ? d.driver.name : '') + ' in ' + (d.team ? d.team.name : '') + ' ' + (d.track ? d.track.name : '') + ' Race Results',
					type: 'driverRaceResultsByTeamAndTrack',
					driver: d.driver ? d.driver.ergastID : null,
					team: d.team ? d.team.ergastID : null,
					track: d.track ? d.track.ergastID : null
				}, {
					name: d.date + ' ' + (d.driver ? d.driver.name : '') + ' Season Info',
					type: 'driverSeasonStandingByYear',
					year: d.date,
					driver: d.driver ? d.driver.ergastID : null
				}, {
					name: d.date + ' ' + (d.driver ? d.driver.name : '') + ' World Title',
					type: 'driverWorldTitlesByYear',
					year: d.date,
					driver: d.driver ? d.driver.ergastID : null
				}, {
					name: d.date + ' ' + (d.driver ? d.driver.name : '') + '\'s Season Finishes',
					type: 'driverSeasonFinishesByYear',
					year: d.date,
					driver: d.driver ? d.driver.ergastID : null
				}, {
					name: d.date + ' ' + (d.driver ? d.driver.name : '') + '\'s Constructor',
					type: 'driverTeamsByYear',
					year: d.date,
					driver: d.driver ? d.driver.ergastID : null
				}], function (_d) {
					return _lodash2.default.indexOf(selection, _d.type) > -1;
				}));
				cb1();
			}, function (err) {
				return cb(_lodash2.default.flatten(summaries), entities);
			});
		}
	}]);

	return Analyser;
}();

exports.default = Analyser;

},{"../services/F1.Service":29,"./Keywords":25,"./Utils":26,"async":"async","js-combinatorics":"js-combinatorics","lodash":"lodash","moment":"moment"}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var specialKeywords = exports.specialKeywords = [{
	key: 'driver',
	words: ['driver', 'drivers']
}, {
	key: 'team',
	words: ['constructor', 'constructors', 'team', 'teams']
}, {
	key: 'season',
	words: ['season', 'seasons']
}, {
	key: 'standing',
	words: ['standing', 'standings', 'result', 'results']
}, {
	key: 'calendar',
	words: ['calendar', 'calendars', 'schedule', 'scheduler', 'schedules']
}, {
	key: 'current',
	words: ['current', 'right now', 'currently', 'this year', 'this years', 'this year\'s']
}, {
	key: 'summary',
	words: ['summary', 'summaries', 'overview', 'overviews', 'everything']
}, {
	key: 'next',
	words: ['next race', 'next races', 'next gp', 'next grand prix', 'next venue', 'next venues', 'next circuit', 'next track', 'next tracks', 'next circuits']
}, {
	key: 'title',
	words: ['title', 'titles', 'world title', 'world championship', 'world championships', 'champion of the world', 'championship', 'championships']
}, {
	key: 'nation',
	words: ['nation', 'nationality', 'country', 'countries']
}];

},{}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _masonryLayout = require('masonry-layout');

var _masonryLayout2 = _interopRequireDefault(_masonryLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var query = '';

var Utils = function () {
	function Utils() {
		_classCallCheck(this, Utils);
	}

	_createClass(Utils, null, [{
		key: 'capitalize',
		value: function capitalize(str) {
			return (0, _lodash2.default)(str.split(/(?=[A-Z])/)).map(function (txt) {
				return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
			}).value().join(' ');
		}
	}, {
		key: 'formatEntityString',
		value: function formatEntityString(e) {
			if (e.startsWith('http://') || e.startsWith('https://')) {
				return _react.DOM.a({ href: e, target: '_blank' }, e);
			}
			if (/^(\d{4})-(\d{1,2})-(\d{1,2})$/.test(e)) {
				return (0, _moment2.default)(e, 'YYYY-MM-DD').format('LL');
			}
			return e;
		}
	}, {
		key: 'naturalKeywordCombinations',
		value: function naturalKeywordCombinations(keys) {
			var chunks = keys.length;
			var ret = [];
			for (var x = 1; x <= chunks; x++) {
				for (var y = 1; y <= chunks - x + 1; y++) {
					ret.push(_lodash2.default.slice(keys, y - 1, y - 1 + x).join(' '));
				}
			}
			return ret;
		}
	}, {
		key: 'arrayCombinations',
		value: function arrayCombinations(a) {
			var min = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

			var fn = function fn(n, src, got, all) {
				if (n == 0) {
					if (got.length > 0) {
						all[all.length] = got;
					}
					return;
				}
				for (var j = 0; j < src.length; j++) {
					fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
				}
				return;
			};
			var all = [];
			for (var i = min; i < a.length; i++) {
				fn(i, a, [], all);
			}
			all.push(a);
			return all;
		}
	}, {
		key: 'onlyInArray',
		value: function onlyInArray(array, shouldBeIn) {
			if (array.length != shouldBeIn.length) return false;
			var ret = true;
			_lodash2.default.forEach(shouldBeIn, function (sbi) {
				if (_lodash2.default.indexOf(array, sbi) == -1) ret = false;
			});
			return ret;
		}
	}, {
		key: 'oneOfCombinations',
		value: function oneOfCombinations(array, words) {
			var important = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

			var combinations = Utils.arrayCombinations(words);
			var ret = false;
			_lodash2.default.forEach(combinations, function (word) {
				if (Utils.onlyInArray(array, word)) {
					if (important.length) {
						if (_lodash2.default.intersection(word, important).length == important.length) {
							ret = true;
							return false;
						}
					} else {
						ret = true;
						return false;
					}
				}
			});
			return ret;
		}
	}, {
		key: 'pluckValue',
		value: function pluckValue(data, keys) {
			_lodash2.default.forEach(keys, function (k) {
				data = data[k];
				if (_lodash2.default.isArray(data)) data = _lodash2.default.first(data);
			});
			return data;
		}
	}, {
		key: 'reposition',
		value: function reposition() {
			var grid = document.querySelector('.masonryGrid');
			new _masonryLayout2.default(grid, {
				itemSelector: '.gridItem',
				columnWidth: '.gridSizer',
				percentPosition: true
			});
		}
	}, {
		key: 'setQuery',
		value: function setQuery(q) {
			query = q;
		}
	}, {
		key: 'getQuery',
		value: function getQuery() {
			return query;
		}
	}]);

	return Utils;
}();

exports.default = Utils;

},{"lodash":"lodash","masonry-layout":"masonry-layout","moment":"moment","react":"react"}],27:[function(require,module,exports){
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

},{}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EntityService = function () {
	function EntityService() {
		_classCallCheck(this, EntityService);
	}

	_createClass(EntityService, null, [{
		key: 'getEntity',
		value: function getEntity(entity, cb) {
			_superagent2.default.post('/ai/entity').send(entity).end(function (err, res) {
				cb(err, res);
			});
		}
	}]);

	return EntityService;
}();

exports.default = EntityService;

},{"superagent":"superagent"}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _async = require('async');

var _async2 = _interopRequireDefault(_async);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var F1Service = function () {
	function F1Service() {
		_classCallCheck(this, F1Service);
	}

	_createClass(F1Service, null, [{
		key: 'getEntity',
		value: function getEntity(entity, cb) {
			var type = 'drivers';
			if (entity.type == 'track') {
				type = 'circuits';
			} else if (entity.type == 'team') {
				type = 'constructors';
			}
			_superagent2.default.get('http://ergast.com/api/f1/' + type + '/' + entity.ergastID + '.json?limit=1000').end(function (err, res) {
				if (err) return cb(err);
				if (entity.type == 'driver') {
					var data = res.body.MRData.DriverTable.Drivers;
					if (!data.length) return cb(true);
					data = _lodash2.default.first(data);
					return cb(null, {
						givenName: { value: data.givenName || 'n/a' },
						familyName: { value: data.familyName || 'n/a' },
						code: { value: data.code || 'n/a' },
						dateOfBirth: { value: data.dateOfBirth || 'n/a' },
						nationality: { value: data.nationality || 'n/a' },
						number: { value: data.permanentNumber || 'n/a' },
						url: { value: data.url || 'n/a' }
					});
				} else if (entity.type == 'track') {
					var _data = res.body.MRData.CircuitTable.Circuits;
					if (!_data.length) return cb(true);
					_data = _lodash2.default.first(_data);
					return cb(null, {
						name: { value: _data.circuitName || 'n/a' },
						city: { value: _data.Location.city || 'n/a' },
						country: { value: _data.Location.country || 'n/a' },
						url: { value: _data.url || 'n/a' }
					});
				} else if (entity.type == 'team') {
					var _data2 = res.body.MRData.ConstructorTable.Constructors;
					if (!_data2.length) return cb(true);
					_data2 = _lodash2.default.first(_data2);
					return cb(null, {
						name: { value: _data2.name || 'n/a' },
						nationality: { value: _data2.nationality || 'n/a' },
						url: { value: _data2.url || 'n/a' }
					});
				} else {
					return cb(true);
				}
			});
		}
	}, {
		key: 'getDriverSeasonResults',
		value: function getDriverSeasonResults(year, cb) {
			F1Service.callApi('http://ergast.com/api/f1/' + year + '/driverStandings.json?limit=1000', ['StandingsTable', 'StandingsLists', 'DriverStandings'], cb);
		}
	}, {
		key: 'getTeamSeasonResults',
		value: function getTeamSeasonResults(year, cb) {
			F1Service.callApi('http://ergast.com/api/f1/' + year + '/constructorStandings.json?limit=1000', ['StandingsTable', 'StandingsLists', 'ConstructorStandings'], cb);
		}
	}, {
		key: 'getRaceCalendar',
		value: function getRaceCalendar(year, cb) {
			F1Service.callApi('http://ergast.com/api/f1/' + year + '.json?limit=1000', ['RaceTable', 'Races'], cb);
		}
	}, {
		key: 'getDriverResultsBySeason',
		value: function getDriverResultsBySeason(driver, year, cb) {
			F1Service.callApi('http://ergast.com/api/f1/' + year + '/drivers/' + driver + '/results.json?limit=1000', ['RaceTable', 'Races'], cb);
		}
	}, {
		key: 'getDriverWorldTitles',
		value: function getDriverWorldTitles(driver, cb) {
			F1Service.callApi('http://ergast.com/api/f1/drivers/' + driver + '/driverStandings/1/seasons.json?limit=1000', ['SeasonTable', 'Seasons'], cb);
		}
	}, {
		key: 'getDriverSeasonFinishes',
		value: function getDriverSeasonFinishes(driver, cb) {
			F1Service.callApi('http://ergast.com/api/f1/drivers/' + driver + '/driverStandings.json?limit=1000', ['StandingsTable', 'StandingsLists'], cb);
		}
	}, {
		key: 'getDriverTeams',
		value: function getDriverTeams(driver, cb) {
			F1Service.callApi('http://ergast.com/api/f1/drivers/' + driver + '/constructors.json?limit=1000', ['ConstructorTable', 'Constructors'], cb);
		}
	}, {
		key: 'getDriverSeasonStanding',
		value: function getDriverSeasonStanding(driver, cb) {
			F1Service.callApi('http://ergast.com/api/f1/current/drivers/' + driver + '/driverStandings.json?limit=1000', ['StandingsTable', 'StandingsLists', 'DriverStandings'], cb);
		}
	}, {
		key: 'getNextRace',
		value: function getNextRace(cb) {
			F1Service.callApi('http://ergast.com/api/f1/current/next.json?limit=1000', ['RaceTable', 'Races'], cb);
		}
	}, {
		key: 'getTeamSeasonStanding',
		value: function getTeamSeasonStanding(team, cb) {
			F1Service.callApi('http://ergast.com/api/f1/current/constructors/' + team + '/constructorStandings.json?limit=1000', ['StandingsTable', 'StandingsLists', 'ConstructorStandings'], cb);
		}
	}, {
		key: 'getTeamWorldTitles',
		value: function getTeamWorldTitles(team, cb) {
			F1Service.callApi('http://ergast.com/api/f1/constructors/' + team + '/constructorStandings/1/seasons.json?limit=1000', ['SeasonTable', 'Seasons'], cb);
		}
	}, {
		key: 'getTeamSeasonFinishes',
		value: function getTeamSeasonFinishes(team, cb) {
			F1Service.callApi('http://ergast.com/api/f1/constructors/' + team + '/constructorStandings.json?limit=1000', ['StandingsTable', 'StandingsLists'], cb);
		}
	}, {
		key: 'getTeamDrivers',
		value: function getTeamDrivers(team, cb) {
			F1Service.callApi('http://ergast.com/api/f1/constructors/' + team + '/drivers.json?limit=1000', ['DriverTable', 'Drivers'], cb);
		}
	}, {
		key: 'getTrackWinners',
		value: function getTrackWinners(track, cb) {
			F1Service.callApi('http://ergast.com/api/f1/circuits/' + track + '/results/1.json?limit=1000', ['RaceTable', 'Races'], cb);
		}
	}, {
		key: 'getCurrentTrackResults',
		value: function getCurrentTrackResults(track, cb) {
			F1Service.callApi('http://ergast.com/api/f1/current/circuits/' + track + '/results.json?limit=1000', ['RaceTable', 'Races', 'Results'], cb);
		}
	}, {
		key: 'getDriverRaceResultsByTeam',
		value: function getDriverRaceResultsByTeam(driver, team, cb) {
			F1Service.callApi('http://ergast.com/api/f1/constructors/' + team + '/drivers/' + driver + '/results.json?limit=1000', ['RaceTable', 'Races'], cb);
		}
	}, {
		key: 'getDriverRaceResultsByTrack',
		value: function getDriverRaceResultsByTrack(driver, track, cb) {
			F1Service.callApi('http://ergast.com/api/f1/circuits/' + track + '/drivers/' + driver + '/results.json?limit=1000', ['RaceTable', 'Races'], cb);
		}
	}, {
		key: 'getTeamAttendanceByTrack',
		value: function getTeamAttendanceByTrack(team, track, cb) {
			F1Service.callApi('http://ergast.com/api/f1/circuits/' + track + '/constructors/' + team + '/results.json?limit=1000', ['RaceTable', 'Races'], cb);
		}
	}, {
		key: 'getDriverRaceResultsByTeamAndTrack',
		value: function getDriverRaceResultsByTeamAndTrack(driver, team, track, cb) {
			F1Service.callApi('http://ergast.com/api/f1/constructors/' + team + '/drivers/' + driver + '/circuits/' + track + '/results.json?limit=1000', ['RaceTable', 'Races'], cb);
		}
	}, {
		key: 'getDriverSeasonStandingByYear',
		value: function getDriverSeasonStandingByYear(year, driver, cb) {
			F1Service.callApi('http://ergast.com/api/f1/' + year + '/drivers/' + driver + '/driverStandings.json?limit=1000', ['StandingsTable', 'StandingsLists', 'DriverStandings'], cb);
		}
	}, {
		key: 'getDriverWorldTitlesByYear',
		value: function getDriverWorldTitlesByYear(year, driver, cb) {
			F1Service.callApi('http://ergast.com/api/f1/' + year + '/drivers/' + driver + '/driverStandings/1/seasons.json?limit=1000', ['SeasonTable', 'Seasons'], cb);
		}
	}, {
		key: 'getDriverSeasonFinishesByYear',
		value: function getDriverSeasonFinishesByYear(year, driver, cb) {
			F1Service.callApi('http://ergast.com/api/f1/' + year + '/drivers/' + driver + '/results.json?limit=1000', ['RaceTable', 'Races'], cb);
		}
	}, {
		key: 'getDriverTeamsByYear',
		value: function getDriverTeamsByYear(year, driver, cb) {
			F1Service.callApi('http://ergast.com/api/f1/' + year + '/drivers/' + driver + '/constructors.json?limit=1000', ['ConstructorTable', 'Constructors'], cb);
		}
	}, {
		key: 'getDriversByNationality',
		value: function getDriversByNationality(track, cb) {
			_superagent2.default.post('/ai/entity/list').send({ name: track }).end(function (err, res) {
				if (err || !res.body.results.bindings.length) return cb(true);
				cb(null, res.body.results.bindings);
			});
		}
	}, {
		key: 'callApi',
		value: function callApi(link, keys, cb) {
			_superagent2.default.get(link).end(function (err, res) {
				if (err) return cb(true);
				var data = res.body.MRData;
				_async2.default.forEachSeries(keys, function (k, cb1) {
					if (!data[k]) return cb1(true);
					data = data[k];
					if (_lodash2.default.isArray(data)) {
						if (!data.length) return cb1(true);
						if (_lodash2.default.last(keys) != k) data = _lodash2.default.first(data);
					}
					cb1();
				}, function (err) {
					return cb(err, data);
				});
			});
		}
	}, {
		key: 'getSummary',
		value: function getSummary(summary, cb) {
			switch (summary.type) {
				case 'raceCalendar':
					F1Service.getRaceCalendar(summary.year, cb);
					break;
				case 'driverStandings':
					F1Service.getDriverSeasonResults(summary.year, cb);
					break;
				case 'constructorStandings':
					F1Service.getTeamSeasonResults(summary.year, cb);
					break;
				case 'driverWorldTitles':
					F1Service.getDriverWorldTitles(summary.driver, cb);
					break;
				case 'driverSeasonFinishes':
					F1Service.getDriverSeasonFinishes(summary.driver, cb);
					break;
				case 'driverTeams':
					F1Service.getDriverTeams(summary.driver, cb);
					break;
				case 'driverSeasonStanding':
					F1Service.getDriverSeasonStanding(summary.driver, cb);
					break;
				case 'nextRace':
					F1Service.getNextRace(cb);
					break;
				case 'teamSeasonStanding':
					F1Service.getTeamSeasonStanding(summary.team, cb);
					break;
				case 'teamWorldTitles':
					F1Service.getTeamWorldTitles(summary.team, cb);
					break;
				case 'teamSeasonFinishes':
					F1Service.getTeamSeasonFinishes(summary.team, cb);
					break;
				case 'teamDrivers':
					F1Service.getTeamDrivers(summary.team, cb);
					break;
				case 'trackWinners':
					F1Service.getTrackWinners(summary.track, cb);
					break;
				case 'currentTrackResults':
					F1Service.getCurrentTrackResults(summary.track, cb);
					break;
				case 'driverRaceResultsByTeam':
					F1Service.getDriverRaceResultsByTeam(summary.driver, summary.team, cb);
					break;
				case 'driverRaceResultsByTrack':
					F1Service.getDriverRaceResultsByTrack(summary.driver, summary.track, cb);
					break;
				case 'teamAttendanceByTrack':
					F1Service.getTeamAttendanceByTrack(summary.team, summary.track, cb);
					break;
				case 'driverRaceResultsByTeamAndTrack':
					F1Service.getDriverRaceResultsByTeamAndTrack(summary.driver, summary.team, summary.track, cb);
					break;
				case 'driversByNationality':
					F1Service.getDriversByNationality(summary.track, cb);
					break;
				case 'driverSeasonStandingByYear':
					F1Service.getDriverSeasonStandingByYear(summary.year, summary.driver, cb);
					break;
				case 'driverWorldTitlesByYear':
					F1Service.getDriverWorldTitlesByYear(summary.year, summary.driver, cb);
					break;
				case 'driverSeasonFinishesByYear':
					F1Service.getDriverSeasonFinishesByYear(summary.year, summary.driver, cb);
					break;
				case 'driverTeamsByYear':
					F1Service.getDriverTeamsByYear(summary.year, summary.driver, cb);
					break;
				default:
					cb(true);
					break;
			}
		}
	}, {
		key: 'resultsFormater',
		value: function resultsFormater(type) {
			switch (type) {
				case 'raceCalendar':
					return [{
						name: 'Round',
						key: ['round']
					}, {
						name: 'Name',
						key: ['raceName']
					}, {
						name: 'Date',
						key: ['date']
					}, {
						name: 'Circuit',
						key: ['Circuit', 'circuitName']
					}, {
						name: 'Country',
						key: ['Circuit', 'Location', 'country']
					}];
					break;
				case 'driverStandings':
					return [{
						name: 'Position',
						key: ['position']
					}, {
						name: 'First Name',
						key: ['Driver', 'givenName']
					}, {
						name: 'Last Name',
						key: ['Driver', 'familyName']
					}, {
						name: 'Team',
						key: ['Constructors', 'name']
					}, {
						name: 'Points',
						key: ['points']
					}];
					break;
				case 'constructorStandings':
					return [{
						name: 'Position',
						key: ['position']
					}, {
						name: 'Team',
						key: ['Constructor', 'name']
					}, {
						name: 'Points',
						key: ['points']
					}, {
						name: 'Wins',
						key: ['wins']
					}];
					break;
				case 'driverWorldTitles':
					return [{
						name: 'Season',
						key: ['season']
					}, {
						name: 'More info',
						key: ['url']
					}];
					break;
				case 'driverSeasonFinishes':
					return [{
						name: 'Season',
						key: ['season']
					}, {
						name: 'Position',
						key: ['DriverStandings', 'position']
					}, {
						name: 'Points',
						key: ['DriverStandings', 'points']
					}, {
						name: 'Wins',
						key: ['DriverStandings', 'wins']
					}, {
						name: 'Team',
						key: ['DriverStandings', 'Constructors', 'name']
					}];
					break;
				case 'driverTeams':
					return [{
						name: 'Team',
						key: ['name']
					}, {
						name: 'Nationality',
						key: ['nationality']
					}, {
						name: 'More Info',
						key: ['url']
					}];
					break;
				case 'driverSeasonStanding':
					return [{
						name: 'Position',
						key: ['position']
					}, {
						name: 'Points',
						key: ['points']
					}, {
						name: 'Wins',
						key: ['wins']
					}, {
						name: 'Team',
						key: ['Constructors', 'name']
					}];
					break;
				case 'nextRace':
					return [{
						name: 'Round',
						key: ['round']
					}, {
						name: 'Name',
						key: ['raceName']
					}, {
						name: 'Date',
						key: ['date']
					}, {
						name: 'Circuit',
						key: ['Circuit', 'circuitName']
					}, {
						name: 'Country',
						key: ['Circuit', 'Location', 'country']
					}];
					break;
				case 'teamSeasonStanding':
					return [{
						name: 'Position',
						key: ['position']
					}, {
						name: 'Points',
						key: ['points']
					}, {
						name: 'Wins',
						key: ['wins']
					}];
					break;
				case 'teamWorldTitles':
					return [{
						name: 'Season',
						key: ['season']
					}, {
						name: 'More info',
						key: ['url']
					}];
					break;
				case 'teamSeasonFinishes':
					return [{
						name: 'Season',
						key: ['season']
					}, {
						name: 'Position',
						key: ['ConstructorStandings', 'position']
					}, {
						name: 'Points',
						key: ['ConstructorStandings', 'points']
					}, {
						name: 'Wins',
						key: ['ConstructorStandings', 'wins']
					}];
					break;
				case 'teamDrivers':
					return [{
						name: 'First Name',
						key: ['givenName']
					}, {
						name: 'Last Name',
						key: ['familyName']
					}, {
						name: 'Birth Date',
						key: ['dateOfBirth']
					}, {
						name: 'Nationality',
						key: ['nationality']
					}];
					break;
				case 'trackWinners':
					return [{
						name: 'Date',
						key: ['date']
					}, {
						name: 'First name',
						key: ['Results', 'Driver', 'givenName']
					}, {
						name: 'Last name',
						key: ['Results', 'Driver', 'familyName']
					}, {
						name: 'Nationality',
						key: ['Results', 'Driver', 'nationality']
					}, {
						name: 'Team',
						key: ['Results', 'Constructor', 'name']
					}];
					break;
				case 'currentTrackResults':
					return [{
						name: 'Position',
						key: ['position']
					}, {
						name: 'First name',
						key: ['Driver', 'givenName']
					}, {
						name: 'Last name',
						key: ['Driver', 'familyName']
					}, {
						name: 'Nationality',
						key: ['Driver', 'nationality']
					}, {
						name: 'Team',
						key: ['Constructor', 'name']
					}];
					break;
				case 'driverRaceResultsByTeam':
					return [{
						name: 'Season',
						key: ['season']
					}, {
						name: 'Race',
						key: ['raceName']
					}, {
						name: 'Position',
						key: ['Results', 'position']
					}];
					break;
				case 'driverRaceResultsByTrack':
					return [{
						name: 'Season',
						key: ['season']
					}, {
						name: 'Race',
						key: ['raceName']
					}, {
						name: 'Position',
						key: ['Results', 'position']
					}, {
						name: 'Team',
						key: ['Results', 'Constructor', 'name']
					}];
					break;
				case 'teamAttendanceByTrack':
					return [{
						name: 'Season',
						key: ['season']
					}, {
						name: 'Race',
						key: ['raceName']
					}, {
						name: 'Date',
						key: ['date']
					}, {
						name: 'Round',
						key: ['round']
					}];
					break;
				case 'driverRaceResultsByTeamAndTrack':
					return [{
						name: 'Season',
						key: ['season']
					}, {
						name: 'Race',
						key: ['raceName']
					}, {
						name: 'Position',
						key: ['Results', 'position']
					}, {
						name: 'More info',
						key: ['url']
					}];
					break;
				case 'driversByNationality':
					return [];
					break;
				case 'driverSeasonStandingByYear':
					return [{
						name: 'Position',
						key: ['position']
					}, {
						name: 'Points',
						key: ['points']
					}, {
						name: 'Wins',
						key: ['wins']
					}, {
						name: 'Team',
						key: ['Constructors', 'name']
					}];
					break;
				case 'driverWorldTitlesByYear':
					return [{
						name: 'Season',
						key: ['season']
					}, {
						name: 'More info',
						key: ['url']
					}];
					break;
				case 'driverSeasonFinishesByYear':
					return [{
						name: 'Position',
						key: ['Results', 'position']
					}, {
						name: 'Race',
						key: ['raceName']
					}, {
						name: 'Date',
						key: ['date']
					}, {
						name: 'Team',
						key: ['Results', 'Constructor', 'name']
					}];
					break;
				case 'driverTeamsByYear':
					return [{
						name: 'Team',
						key: ['name']
					}, {
						name: 'Nationality',
						key: ['nationality']
					}, {
						name: 'More Info',
						key: ['url']
					}];
					break;
				default:
					return [];
					break;
			}
		}
	}]);

	return F1Service;
}();

exports.default = F1Service;

},{"async":"async","lodash":"lodash","superagent":"superagent"}],30:[function(require,module,exports){
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

},{"superagent":"superagent"}],31:[function(require,module,exports){
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
		key: 'analyse',
		value: function analyse(txt, cb) {
			_superagent2.default.post('/ai/analyse').send({ text: txt }).end(function (err, res) {
				cb(err, res.body || null);
			});
		}
	}]);

	return TextAnalysisService;
}();

exports.default = TextAnalysisService;

},{"superagent":"superagent"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJyZWFjdC9hcHAuanMiLCJyZWFjdC9jb21wb25lbnRzL0FwcC5qcyIsInJlYWN0L2NvbXBvbmVudHMvRGFzaGJvYXJkLmpzIiwicmVhY3QvY29tcG9uZW50cy9Ob3RGb3VuZC5qcyIsInJlYWN0L2NvbXBvbmVudHMvU2VhcmNoR3JpZC5qcyIsInJlYWN0L2NvbXBvbmVudHMvVUkvQ2VudGVyQ29udGFpbmVyLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9GdWxsU2NyZWVuLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9HcmlkQ29udGFpbmVyLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9Mb2FkZXIuanMiLCJyZWFjdC9jb21wb25lbnRzL1VJL01hc29ucnlHcmlkLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9OYXYuanMiLCJyZWFjdC9jb21wb25lbnRzL1VJL1BhcGVyLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9QYXBlckJ0bi5qcyIsInJlYWN0L2NvbXBvbmVudHMvVUkvUGFwZXJDb250ZW50LmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9QYXBlckhlYWRlci5qcyIsInJlYWN0L2NvbXBvbmVudHMvVUkvUGFwZXJJbWcuanMiLCJyZWFjdC9jb21wb25lbnRzL1VJL1BhcGVyTGkuanMiLCJyZWFjdC9jb21wb25lbnRzL1VJL1BhcGVyTGluZS5qcyIsInJlYWN0L2NvbXBvbmVudHMvVUkvUGFwZXJVbC5qcyIsInJlYWN0L2NvbXBvbmVudHMvVUkvUHJvZmlsZS5qcyIsInJlYWN0L2NvbXBvbmVudHMvVUkvU2VhcmNoSW5wdXQuanMiLCJyZWFjdC9jb21wb25lbnRzL1VJL1N1bW1hcnkuanMiLCJyZWFjdC9jb21wb25lbnRzL1VJL1RhYmxlLmpzIiwicmVhY3QvbGliL0FuYWx5c2VyLmpzIiwicmVhY3QvbGliL0tleXdvcmRzLmpzIiwicmVhY3QvbGliL1V0aWxzLmpzIiwicmVhY3QvbGliL2NvbG9ycy5qcyIsInJlYWN0L3NlcnZpY2VzL0VudGl0eS5TZXJ2aWNlLmpzIiwicmVhY3Qvc2VydmljZXMvRjEuU2VydmljZS5qcyIsInJlYWN0L3NlcnZpY2VzL1N1Z2dlc3Rpb24uU2VydmljZS5qcyIsInJlYWN0L3NlcnZpY2VzL1RleHRBbmFseXNpcy5TZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBSUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFKQTs7QUFNQSxzQkFDRTtBQUFBO0VBQUEsRUFBUSxvQ0FBUjtFQUNDO0FBQUE7SUFBQSxFQUFPLE1BQUssR0FBWixFQUFnQix3QkFBaEI7SUFDQyx5REFBWSw4QkFBWixHQUREO0lBRUMsb0RBQU8sTUFBSyxHQUFaLEVBQWdCLDZCQUFoQjtBQUZEO0FBREQsQ0FERixFQU9HLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQVBIOzs7Ozs7Ozs7OztBQ1hBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLFNBQVM7QUFDZCxTQUFRO0FBQ1AsY0FBWSxpQkFBTztBQURaLEVBRE07QUFJZCxLQUFJO0FBQ0gsY0FBWSwrQ0FEVDtBQUVILGtCQUFnQjtBQUZiO0FBSlUsQ0FBZjs7SUFVTSxHOzs7QUFDTCxjQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxxRkFDWixLQURZOztBQUVsQixRQUFLLEtBQUwsR0FBYTtBQUNaLFNBQU0sS0FETTtBQUVaLGdCQUFhO0FBRkQsR0FBYjtBQUZrQjtBQU1sQjs7Ozt1Q0FDb0I7QUFBQTs7QUFDcEIsd0JBQWtCLGNBQWxCLENBQWlDLGdCQUFRO0FBQ3hDLFdBQUssUUFBTCxDQUFjO0FBQ2IsV0FBTSxJQURPO0FBRWIsa0JBQWE7QUFGQSxLQUFkO0FBSUEsSUFMRDtBQU1BOzs7aUNBQ2M7QUFDZCxVQUFPO0FBQUE7SUFBQSxFQUFZLE9BQU8sQ0FBQyxPQUFPLEVB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QUFDbEIsT0FBRyxHQUFILEVBQVEsSUFBSSxJQUFKLElBQVksSUFBcEI7QUFDQSxJQUpEO0FBS0E7Ozs7OztrQkFHYSxtQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHtSb3V0ZXIsIFJvdXRlLCBJbmRleFJvdXRlLCBicm93c2VySGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IGluamVjdFRhcEV2ZW50UGx1Z2luIGZyb20gJ3JlYWN0LXRhcC1ldmVudC1wbHVnaW4nXG5cbmluamVjdFRhcEV2ZW50UGx1Z2luKClcblxuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwJ1xuaW1wb3J0IERhc2hib2FyZCBmcm9tICcuL2NvbXBvbmVudHMvRGFzaGJvYXJkJ1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4vY29tcG9uZW50cy9Ob3RGb3VuZCdcblxucmVuZGVyKChcbiAgPFJvdXRlciBoaXN0b3J5PXticm93c2VySGlzdG9yeX0+XG4gIFx0PFJvdXRlIHBhdGg9Jy8nIGNvbXBvbmVudD17QXBwfT5cbiAgXHRcdDxJbmRleFJvdXRlIGNvbXBvbmVudD17RGFzaGJvYXJkfSAvPlxuICBcdFx0PFJvdXRlIHBhdGg9JyonIGNvbXBvbmVudD17Tm90Rm91bmR9IC8+XG4gIFx0PC9Sb3V0ZT5cbiAgPC9Sb3V0ZXI+XG4pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuaW1wb3J0IFN1Z2dlc3Rpb25TZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL1N1Z2dlc3Rpb24uU2VydmljZSdcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vbGliL2NvbG9ycydcblxuaW1wb3J0IExvYWRlciBmcm9tICcuL1VJL0xvYWRlcidcbmltcG9ydCBGdWxsU2NyZWVuIGZyb20gJy4vVUkvRnVsbFNjcmVlbidcbmltcG9ydCBDZW50ZXJDb250YWluZXIgZnJvbSAnLi9VSS9DZW50ZXJDb250YWluZXInXG5cbmNvbnN0IHN0eWxlcyA9IHtcblx0bG9hZGVyOiB7XG5cdFx0YmFja2dyb3VuZDogY29sb3JzLnJlZDUwMFxuXHR9LFxuXHRiZzoge1xuXHRcdGJhY2tncm91bmQ6ICd1cmwoXFwnL2ltZy9iZzIuanBnXFwnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcicsXG5cdFx0YmFja2dyb3VuZFNpemU6ICdjb3Zlcidcblx0fVxufVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRpbml0OiBmYWxzZSxcblx0XHRcdHN1Z2dlc3Rpb25zOiBbXVxuXHRcdH1cblx0fVxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0U3VnZ2VzdGlvblNlcnZpY2UuZ2V0U3VnZ2VzdGlvbnMoZGF0YSA9PiB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0aW5pdDogdHJ1ZSxcblx0XHRcdFx0c3VnZ2VzdGlvbnM6IGRhdGFcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXHRyZW5kZXJMb2FkZXIoKSB7XG5cdFx0cmV0dXJuIDxGdWxsU2NyZWVuIHN0eWxlPXtbc3R5bGVzLmJnXX0+PENlbnRlckNvbnRhaW5lcj48TG9hZGVyIHN0eWxlPXtbc3R5bGVzLmxvYWRlcl19IC8+PC9DZW50ZXJDb250YWluZXI+PC9GdWxsU2NyZWVuPlxuXHR9XG5cdHJlbmRlckNvbnRlbnQoKSB7XG5cdFx0dmFyIGNoaWxkcmVuV2l0aFByb3BzID0gUmVhY3QuQ2hpbGRyZW4ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIGNoaWxkID0+IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICBcdHN1Z2dlc3Rpb25zOiB0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zXG4gICAgICAgIH0pKVxuXHRcdHJldHVybiA8ZGl2PntjaGlsZHJlbldpdGhQcm9wc308L2Rpdj5cblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0aWYoIXRoaXMuc3RhdGUuaW5pdCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmVuZGVyTG9hZGVyKClcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMucmVuZGVyQ29udGVudCgpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKEFwcClcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IGFzeW5jIGZyb20gJ2FzeW5jJ1xuXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2xpYi9jb2xvcnMnXG5pbXBvcnQgVGV4dEFuYWx5c2lzU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9UZXh0QW5hbHlzaXMuU2VydmljZSdcbmltcG9ydCBVdGlscyBmcm9tICcuLi9saWIvVXRpbHMnXG5cbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9VSS9Mb2FkZXInXG5pbXBvcnQgRnVsbFNjcmVlbiBmcm9tICcuL1VJL0Z1bGxTY3JlZW4nXG5pbXBvcnQgQ2VudGVyQ29udGFpbmVyIGZyb20gJy4vVUkvQ2VudGVyQ29udGFpbmVyJ1xuaW1wb3J0IFNlYXJjaElucHV0IGZyb20gJy4vVUkvU2VhcmNoSW5wdXQnXG5pbXBvcnQgU2VhcmNoR3JpZCBmcm9tICcuL1NlYXJjaEdyaWQnXG5cbmNvbnN0IHN0eWxlcyA9IHtcblx0bG9nbzoge1xuXHRcdGhlaWdodDogMTAwXG5cdH0sXG5cdGlucHV0OiB7XG5cdFx0d2lkdGg6IDU1MCxcblx0XHRoZWlnaHQ6IDQwLFxuXHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuXHRcdG1hcmdpblRvcDogMzRcblx0fSxcblx0ZWFzZToge1xuXHRcdHRyYW5zaXRpb246ICdhbGwgMC4xcyBlYXNlLWluLW91dCdcblx0fSxcblx0Ymx1cjoge1xuXHRcdGZpbHRlcjogJ2JsdXIoMTBweCknXG5cdH0sXG5cdGxvYWRlcjoge1xuXHRcdGNvbnRhaW5lcjoge1xuXHRcdFx0cG9zaXRpb246ICdmaXhlZCcsXG5cdFx0XHR0b3A6IDAsXG5cdFx0XHRsZWZ0OiAwLFxuXHRcdFx0ekluZGV4OiAxMDAwMFxuXHRcdH0sXG5cdFx0bG9hZGVyOiB7XG5cdFx0XHRiYWNrZ3JvdW5kOiBjb2xvcnMucmVkNTAwXG5cdFx0fVxuXHR9LFxuXHRiZzoge1xuXHRcdGJhY2tncm91bmQ6ICd1cmwoXFwnL2ltZy9iZzIuanBnXFwnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcicsXG5cdFx0YmFja2dyb3VuZFNpemU6ICdjb3Zlcidcblx0fVxufVxuXG5jbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzZWFyY2g6IGZhbHNlLFxuXHRcdFx0bW9kYWw6IGZhbHNlLFxuXHRcdFx0c3JjOiAnJyxcblx0XHRcdHJlY29tbWVuZDogJycsXG5cdFx0XHRlbnRpdGllczogW11cblx0XHR9XG5cdFx0dGhpcy5vblNyY0NoYW5nZSA9IHRoaXMub25TcmNDaGFuZ2UuYmluZCh0aGlzKVxuXHRcdHRoaXMuc2VhcmNoID0gdGhpcy5zZWFyY2guYmluZCh0aGlzKVxuXHRcdHRoaXMub25UYWIgPSB0aGlzLm9uVGFiLmJpbmQodGhpcylcblx0XHR0aGlzLm9uSG9tZSA9IHRoaXMub25Ib21lLmJpbmQodGhpcylcblx0fVxuXHRvblNyY0NoYW5nZSh2KSB7XG5cdFx0bGV0IHJlYyA9ICcnXG5cdFx0bGV0IHdvcmRzID0gdi5zcGxpdCgnICcpXG5cdFx0bGV0IHdvcmQgPSBfLmxhc3Qod29yZHMpXG5cdFx0aWYod29yZCAmJiB3b3JkLmxlbmd0aD49Mikge1xuXHRcdFx0bGV0IHIgPSBfLmZpbmQodGhpcy5wcm9wcy5zdWdnZXN0aW9ucywgcyA9PiB7XG5cdFx0XHRcdHJldHVybiBzLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aCh3b3JkLnRvTG93ZXJDYXNlKCkpXG5cdFx0XHR9KVxuXHRcdFx0ciA9IHIgfHwgJydcblx0XHRcdGlmKHIpIHJlYyA9IHIuc3Vic3RyaW5nKHdvcmQubGVuZ3RoKVxuXHRcdH1cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHNyYzogdixcblx0XHRcdHJlY29tbWVuZDogcmVjXG5cdFx0fSlcblx0fVxuXHRvblRhYigpIHtcblx0XHRsZXQge3NyYywgcmVjb21tZW5kfSA9IHRoaXMuc3RhdGVcblx0XHRsZXQgbmV3U3JjID0gc3JjICsgcmVjb21tZW5kXG5cdFx0VXRpbHMuc2V0UXVlcnkobmV3U3JjKVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c3JjOiBuZXdTcmMsXG5cdFx0XHRyZWNvbW1lbmQ6ICcnXG5cdFx0fSlcblx0fVxuXHRvbkhvbWUoKSB7XG5cdFx0VXRpbHMuc2V0UXVlcnkoJycpXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzZWFyY2g6IGZhbHNlLFxuXHRcdFx0bW9kYWw6IGZhbHNlLFxuXHRcdFx0c3JjOiAnJyxcblx0XHRcdHJlY29tbWVuZDogJycsXG5cdFx0XHRlbnRpdGllczogW11cblx0XHR9KVxuXHR9XG5cdHNlYXJjaCgpIHtcblx0XHRpZighdGhpcy5zdGF0ZS5zcmMpIHJldHVybiBmYWxzZVxuXHRcdGxldCBzcmMgPSB0aGlzLnN0YXRlLnNyYyArIHRoaXMuc3RhdGUucmVjb21tZW5kXG5cdFx0VXRpbHMuc2V0UXVlcnkoc3JjKVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c2VhcmNoOiB0cnVlLFxuXHRcdFx0c3JjOiBzcmMsXG5cdFx0XHRyZWNvbW1lbmQ6ICcnXG5cdFx0fSlcblx0XHRUZXh0QW5hbHlzaXNTZXJ2aWNlLmFuYWx5c2Uoc3JjLCAoZXJyLCByZXMpID0+IHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRzZWFyY2g6IGZhbHNlLFxuXHRcdFx0XHRlbnRpdGllczogcmVzLFxuXHRcdFx0XHRtb2RhbDogdHJ1ZVxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cdHJlbmRlckZ1bGxTcmMoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxGdWxsU2NyZWVuIHN0eWxlPXtbc3R5bGVzLmJnXX0+XG5cdFx0XHRcdDxDZW50ZXJDb250YWluZXI+XG5cdFx0XHRcdFx0PGltZyBzcmM9Jy9pbWcvZjFfbG9nb19icmlnaHQucG5nJyBzdHlsZT17c3R5bGVzLmxvZ299IC8+PGJyLz5cblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXtzdHlsZXMuaW5wdXR9PjxTZWFyY2hJbnB1dCByZWNvbW1lbmQ9e3RoaXMuc3RhdGUucmVjb21tZW5kfSB2YWx1ZT17dGhpcy5zdGF0ZS5zcmN9IG9uQ2hhbmdlPXt0aGlzLm9uU3JjQ2hhbmdlfSBvbkVudGVyPXt0aGlzLnNlYXJjaH0gb25UYWI9e3RoaXMub25UYWJ9IC8+PC9kaXY+PGJyLz5cblx0XHRcdFx0PC9DZW50ZXJDb250YWluZXI+XG5cdFx0XHQ8L0Z1bGxTY3JlZW4+XG5cdFx0KVxuXHR9XG5cdHJlbmRlckdyaWQoKSB7XG5cdFx0cmV0dXJuIDxTZWFyY2hHcmlkIG9uSG9tZT17dGhpcy5vbkhvbWV9IHJlY29tbWVuZD17dGhpcy5zdGF0ZS5yZWNvbW1lbmR9IHZhbHVlPXt0aGlzLnN0YXRlLnNyY30gb25DaGFuZ2U9e3RoaXMub25TcmNDaGFuZ2V9IG9uRW50ZXI9e3RoaXMuc2VhcmNofSBvblRhYj17dGhpcy5vblRhYn0gZW50aXRpZXM9e3RoaXMuc3RhdGUuZW50aXRpZXN9IC8+XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtzZWFyY2gsIG1vZGFsfSA9IHRoaXMuc3RhdGVcblx0XHRjb25zdCBsb2FkZXIgPSB0aGlzLnN0YXRlLnNlYXJjaCA/IDxGdWxsU2NyZWVuIHN0eWxlPXtbc3R5bGVzLmxvYWRlci5jb250YWluZXJdfT48Q2VudGVyQ29udGFpbmVyPjxMb2FkZXIgc3R5bGU9e1tzdHlsZXMubG9hZGVyLmxvYWRlcl19IC8+PC9DZW50ZXJDb250YWluZXI+PC9GdWxsU2NyZWVuPiA6IG51bGxcblx0XHRsZXQgY250ID0gdGhpcy5zdGF0ZS5tb2RhbCA/IHRoaXMucmVuZGVyR3JpZCgpIDogdGhpcy5yZW5kZXJGdWxsU3JjKClcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0e2xvYWRlcn1cblx0XHRcdFx0PGRpdiBzdHlsZT17W3N0eWxlcy5lYXNlLCBzZWFyY2ggPyBzdHlsZXMuYmx1ciA6IG51bGxdfT5cblx0XHRcdFx0XHR7Y250fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oRGFzaGJvYXJkKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmltcG9ydCBGdWxsU2NyZWVuIGZyb20gJy4vVUkvRnVsbFNjcmVlbidcbmltcG9ydCBDZW50ZXJDb250YWluZXIgZnJvbSAnLi9VSS9DZW50ZXJDb250YWluZXInXG5cbmNvbnN0IE5vdEZvdW5kID0gKHByb3BzKSA9PiA8RnVsbFNjcmVlbj48Q2VudGVyQ29udGFpbmVyPk5vdCBmb3VuZDwvQ2VudGVyQ29udGFpbmVyPjwvRnVsbFNjcmVlbj5cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKE5vdEZvdW5kKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmltcG9ydCBOYXYgZnJvbSAnLi9VSS9OYXYnXG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tICcuL1VJL0dyaWRDb250YWluZXInXG5cbmNsYXNzIFNlYXJjaEdyaWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PE5hdiBvbkhvbWU9e3RoaXMucHJvcHMub25Ib21lfSByZWNvbW1lbmQ9e3RoaXMucHJvcHMucmVjb21tZW5kfSB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX0gb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2V9IG9uRW50ZXI9e3RoaXMucHJvcHMub25FbnRlcn0gb25UYWI9e3RoaXMucHJvcHMub25UYWJ9IC8+XG5cdFx0XHRcdDxHcmlkQ29udGFpbmVyIGVudGl0aWVzPXt0aGlzLnByb3BzLmVudGl0aWVzfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEdyaWRcbiIsImltcG9ydCBSZWFjdCwge1Byb3BUeXBlc30gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuY29uc3Qgc3R5bGUgPSB7XG5cdGNlbnRlckJsb2NrU3R5bGU6IHtcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdGhlaWdodDogJzEwMCUnLFxuXHRcdG1heEhlaWdodDogJzEwMCUnLFxuXHRcdG92ZXJmbG93OiAnYXV0bycsXG5cdFx0dGV4dEFsaWduOiAnY2VudGVyJ1xuXHR9LFxuXHRjZW50ZXJDb250ZW50U3R5bGU6IHtcblx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcblx0XHR2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcblx0XHRib3hTaXppbmc6ICdib3JkZXItYm94J1xuXHR9XG59XG5cbmNvbnN0IENlbnRlckNvbnRhaW5lciA9IChwcm9wcykgPT4gPGRpdiBzdHlsZT17W3N0eWxlLmNlbnRlckJsb2NrU3R5bGUsIC4uLnByb3BzLnN0eWxlXX0gaWQ9J2NlbnRlckNvbnRlbnQnPjxkaXYgc3R5bGU9e1tzdHlsZS5jZW50ZXJDb250ZW50U3R5bGUsIC4uLnByb3BzLmJveFN0eWxlXX0+e3Byb3BzLmNoaWxkcmVufTwvZGl2PjwvZGl2PlxuXG5DZW50ZXJDb250YWluZXIuZGVmYXVsdFByb3BzID0ge1xuICBzdHlsZToge30sXG4gIGJveFN0eWxlOiB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oQ2VudGVyQ29udGFpbmVyKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmNvbnN0IHN0eWxlID0ge1xuXHR3aWR0aDogJzEwMCUnLFxuXHRoZWlnaHQ6ICcxMDB2aCdcbn1cblxuY29uc3QgRnVsbFNjcmVlbiA9IChwcm9wcykgPT4gPGRpdiBzdHlsZT17W3N0eWxlLCAuLi5wcm9wcy5zdHlsZV19Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cblxuRnVsbFNjcmVlbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHN0eWxlOiB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oRnVsbFNjcmVlbilcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uLy4uL2xpYi9jb2xvcnMnXG5pbXBvcnQgQW5hbHlzZXIgZnJvbSAnLi4vLi4vbGliL0FuYWx5c2VyJ1xuaW1wb3J0IFV0aWxzIGZyb20gJy4uLy4uL2xpYi9VdGlscydcblxuaW1wb3J0IE1hc29ucnlHcmlkIGZyb20gJy4vTWFzb25yeUdyaWQnXG5pbXBvcnQgUGFwZXIgZnJvbSAnLi9QYXBlcidcbmltcG9ydCBQYXBlckNvbnRlbnQgZnJvbSAnLi9QYXBlckNvbnRlbnQnXG5pbXBvcnQgUHJvZmlsZSBmcm9tICcuL1Byb2ZpbGUnXG5pbXBvcnQgU3VtbWFyeSBmcm9tICcuL1N1bW1hcnknXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJ1xuaW1wb3J0IENlbnRlckNvbnRhaW5lciBmcm9tICcuL0NlbnRlckNvbnRhaW5lcidcblxuY29uc3Qgc3R5bGVzID0ge1xuXHRjb250YWluZXI6IHtcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdG1pbkhlaWdodDogJzEwMHZoJyxcblx0XHRib3hTaXppbmc6ICdib3JkZXItYm94Jyxcblx0XHRwYWRkaW5nOiAnODBweCAyMHB4IDIwcHggMjBweCcsXG5cdFx0YmFja2dyb3VuZDogY29sb3JzLmdyZXkyMDBcblx0fSxcblx0bWFuc29yeToge1xuXHRcdGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuXHRcdHdpZHRoOiAnMjUlJ1xuXHR9LFxuXHRzdW1tYXJ5OiB7XG5cdFx0d2lkdGg6ICc1MCUnXG5cdH1cbn1cblxuY2xhc3MgR3JpZENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHByb2ZpbGVzOiBbXSxcblx0XHRcdGRhdGVzOiBbXSxcblx0XHRcdHN1bW1hcmllczogW10sXG5cdFx0XHRlbnRpdGllczogW10sXG5cdFx0XHRsb2FkZWQ6IGZhbHNlXG5cdFx0fVxuXHR9XG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHR0aGlzLnBhcnNlRW50aXRpZXModGhpcy5wcm9wcylcblx0fVxuXHRjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuXHRcdHRoaXMucGFyc2VFbnRpdGllcyhuZXh0UHJvcHMpXG5cdH1cblx0cGFyc2VFbnRpdGllcyhwcm9wcykge1xuXHRcdC8vaWYoIV8uaXNFcXVhbCh0aGlzLnN0YXRlLmVudGl0aWVzLCBwcm9wcy5lbnRpdGllcykpIHtcblx0XHRcdEFuYWx5c2VyLnBhcnNlRW50aXRpZXMoVXRpbHMuZ2V0UXVlcnkoKSwgcHJvcHMuZW50aXRpZXMsIGRhdGEgPT4gdGhpcy5zZXRTdGF0ZSh7cHJvZmlsZXM6IGRhdGEucHJvZmlsZXMsIGRhdGVzOiBkYXRhLmRhdGVzLCBzdW1tYXJpZXM6IGRhdGEuc3VtbWFyaWVzLCBlbnRpdGllczogcHJvcHMuZW50aXRpZXMsIGxvYWRlZDogdHJ1ZX0pKVxuXHRcdC8vfVxuXHR9XG5cdHJlbmRlckVtcHR5KCkge1xuXHRcdHJldHVybiA8TWFzb25yeUdyaWQ+PGRpdiBzdHlsZT17c3R5bGVzLm1hbnNvcnl9IGNsYXNzTmFtZT0nZ3JpZEl0ZW0nPjxQYXBlcj48UGFwZXJDb250ZW50PjxzcGFuIGNsYXNzTmFtZT0nbG5yIGxuci1jcm9zcycgLz4gTm8gcmVzdWx0cyBmb3VuZDwvUGFwZXJDb250ZW50PjwvUGFwZXI+PC9kaXY+PC9NYXNvbnJ5R3JpZD5cblx0fVxuXHRyZW5kZXJDb250ZW50KCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TWFzb25yeUdyaWQ+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLnN1bW1hcmllcy5tYXAocyA9PiA8ZGl2IGNsYXNzTmFtZT0nZ3JpZEl0ZW0nIGtleT17cy5uYW1lK3MudHlwZX0gc3R5bGU9e1tzdHlsZXMubWFuc29yeSwgc3R5bGVzLnN1bW1hcnldfT48U3VtbWFyeSBzdW1tYXJ5PXtzfSAvPjwvZGl2Pil9XG5cdFx0XHRcdHt0aGlzLnN0YXRlLnByb2ZpbGVzLm1hcChwID0+IDxkaXYgY2xhc3NOYW1lPSdncmlkSXRlbScga2V5PXtwLl9pZH0gc3R5bGU9e3N0eWxlcy5tYW5zb3J5fT48UHJvZmlsZSBlbnRpdHk9e3B9IC8+PC9kaXY+KX1cblx0XHRcdDwvTWFzb25yeUdyaWQ+XG5cdFx0KVxuXHR9XG5cdHJlbmRlckxvYWRlcigpIHtcblx0XHRyZXR1cm4gPE1hc29ucnlHcmlkPjxkaXYgc3R5bGU9e3N0eWxlcy5tYW5zb3J5fSBjbGFzc05hbWU9J2dyaWRJdGVtJz48UGFwZXI+PFBhcGVyQ29udGVudD48Q2VudGVyQ29udGFpbmVyPjxMb2FkZXIgLz48L0NlbnRlckNvbnRhaW5lcj48L1BhcGVyQ29udGVudD48L1BhcGVyPjwvZGl2PjwvTWFzb25yeUdyaWQ+XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGxldCB7cHJvZmlsZXMsIHN1bW1hcmllcywgbG9hZGVkfSA9IHRoaXMuc3RhdGVcblx0XHRsZXQgY250ID0gbnVsbFxuXHRcdGlmKCFsb2FkZWQpIHtcblx0XHRcdGNudCA9IHRoaXMucmVuZGVyTG9hZGVyKClcblx0XHR9IGVsc2UgaWYoIXByb2ZpbGVzLmxlbmd0aCAmJiAhc3VtbWFyaWVzLmxlbmd0aCkge1xuXHRcdFx0Y250ID0gdGhpcy5yZW5kZXJFbXB0eSgpXG5cdFx0fSBlbHNlIHtcblx0XHRcdGNudCA9IHRoaXMucmVuZGVyQ29udGVudCgpXG5cdFx0fVxuXHRcdHJldHVybiA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT57Y250fTwvZGl2PlxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShHcmlkQ29udGFpbmVyKVxuIiwiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uLy4uL2xpYi9jb2xvcnMnXG5cbmNvbnN0IHN0eWxlID0ge1xuXHR3aWR0aDogJzYwcHgnLFxuICBoZWlnaHQ6ICc2MHB4JyxcbiAgYmFja2dyb3VuZDogY29sb3JzLnJlZDUwMCxcbiAgYW5pbWF0aW9uOiAnc2stcm90YXRlcGxhbmUgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dCdcbn1cblxuY29uc3QgTG9hZGVyID0gKHByb3BzKSA9PiA8ZGl2IHN0eWxlPXtbc3R5bGUsIHByb3BzLnN0eWxlXX0gLz5cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKExvYWRlcilcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuaW1wb3J0IE1hc29ucnkgZnJvbSAnbWFzb25yeS1sYXlvdXQnXG5pbXBvcnQgaW1hZ2VzTG9hZGVkIGZyb20gJ2ltYWdlc2xvYWRlZCdcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuaW1wb3J0IFV0aWxzIGZyb20gJy4uLy4uL2xpYi9VdGlscydcblxuY29uc3Qgc3R5bGVzID0ge1xuXHRncmlkOiB7XG5cdFx0d2lkdGg6ICcxMDAlJ1xuXHR9LFxuXHRzaXplcjoge1xuXHRcdHdpZHRoOiAnMjUlJ1xuXHR9XG59XG5cbmNsYXNzIE1hc29ucnlHcmlkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLmdyaWRMYXlvdXQoKVxuXHR9XG5cdGNvbXBvbmVudERpZFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuXHRcdHRoaXMuZ3JpZExheW91dCgpXG5cdH1cblx0Lypjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuXHRcdHRoaXMuZ3JpZExheW91dCgpXG5cdH0qL1xuXHRncmlkTGF5b3V0KCkge1xuXHRcdGxldCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hc29ucnlHcmlkJylcblx0XHRVdGlscy5yZXBvc2l0aW9uKClcblx0XHRpbWFnZXNMb2FkZWQoZ3JpZCwgKCkgPT4gVXRpbHMucmVwb3NpdGlvbigpKVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J21hc29ucnlHcmlkJyBzdHlsZT17c3R5bGVzLmdyaWR9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZ3JpZFNpemVyJyBzdHlsZT17c3R5bGVzLnNpemVyfSAvPlxuXHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oTWFzb25yeUdyaWQpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi9saWIvY29sb3JzJ1xuXG5pbXBvcnQgU2VhcmNoSW5wdXQgZnJvbSAnLi9TZWFyY2hJbnB1dCdcblxuY29uc3Qgc3R5bGVzID0ge1xuXHRjb250YWluZXI6IHtcblx0XHRiYWNrZ3JvdW5kOiAnIzFiMTcxOCcsXG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRoZWlnaHQ6IDcwLFxuXHRcdGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuXHRcdHBhZGRpbmc6ICcxNXB4IDQwcHgnLFxuXHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxuXHRcdHRvcDogMCxcblx0XHRsZWZ0OiAwLFxuXHRcdHpJbmRleDogMTAwXG5cdH0sXG5cdGxvZ286IHtcblx0XHRoZWlnaHQ6IDQwLFxuXHRcdGN1cnNvcjogJ3BvaW50ZXInXG5cdH0sXG5cdGlucHV0OiB7XG5cdFx0d2lkdGg6IDQwMCxcblx0XHRoZWlnaHQ6IDQwLFxuXHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuXHRcdHBhZGRpbmc6IDAsXG5cdFx0ZmxvYXQ6ICdyaWdodCdcblx0fSxcblx0aW5wOiB7XG5cdFx0Ym9yZGVyOiBgMXB4IHNvbGlkICR7Y29sb3JzLndoaXRlfWAsXG5cdFx0Jzpmb2N1cyc6IHtcblx0XHRcdGJvcmRlcjogYDFweCBzb2xpZCAke2NvbG9ycy53aGl0ZX1gXG5cdFx0fVxuXHR9XG59XG5cbmNsYXNzIE5hdiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8bmF2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cblx0XHRcdFx0PGltZyBzcmM9Jy9pbWcvZjFfbG9nb19kYXJrLnBuZycgb25DbGljaz17dGhpcy5wcm9wcy5vbkhvbWV9IHN0eWxlPXtzdHlsZXMubG9nb30gLz5cblx0XHRcdFx0PGRpdiBzdHlsZT17c3R5bGVzLmlucHV0fT48U2VhcmNoSW5wdXQgaW5wU3R5bGU9e1tzdHlsZXMuaW5wXX0gcmVjb21tZW5kPXt0aGlzLnByb3BzLnJlY29tbWVuZH0gdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfSBvbkVudGVyPXt0aGlzLnByb3BzLm9uRW50ZXJ9IG9uVGFiPXt0aGlzLnByb3BzLm9uVGFifSAvPjwvZGl2PlxuXHRcdFx0PC9uYXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShOYXYpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi9saWIvY29sb3JzJ1xuXG5jb25zdCBzdHlsZSA9IHtcblx0d2lkdGg6ICcxMDAlJyxcblx0YmFja2dyb3VuZDogY29sb3JzLndoaXRlLFxuXHRib3hTaGFkb3c6ICcwIC0xcHggMCAjZTVlNWU1LCAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgLjEyKSwgMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgLjI0KSdcbn1cblxuY29uc3QgUGFwZXIgPSAocHJvcHMpID0+IDxkaXYgc3R5bGU9e1tzdHlsZSwgcHJvcHMuc3R5bGVdfT57cHJvcHMuY2hpbGRyZW59PC9kaXY+XG5cblBhcGVyLmRlZmF1bHRQcm9wcyA9IHtcblx0c3R5bGU6IHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShQYXBlcilcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uLy4uL2xpYi9jb2xvcnMnXG5cbmNvbnN0IHN0eWxlID0ge1xuXHRkaXNwbGF5OiAnYmxvY2snLFxuXHRib3JkZXI6ICdub25lJyxcblx0bWFyZ2luOiAwLFxuXHRwYWRkaW5nOiAnMTBweCcsXG5cdGNvbG9yOiBjb2xvcnMud2hpdGUsXG5cdGJhY2tncm91bmQ6IGNvbG9ycy5yZWQ1MDAsXG5cdGZvbnRTaXplOiAnLjhyZW0nLFxuXHRmb250V2VpZ2h0OiA0MDAsXG5cdGZvbnRGYW1pbHk6ICdpbmhlcml0Jyxcblx0Y3Vyc29yOiAncG9pbnRlcicsXG5cdHRyYW5zaXRpb246ICdhbGwgMC4xcyBlYXNlLWluLW91dCcsXG5cdCc6aG92ZXInOiB7XG5cdFx0YmFja2dyb3VuZDogY29sb3JzLnJlZDcwMFxuXHR9XG59XG5cbmNvbnN0IFBhcGVyQnRuID0gKHByb3BzKSA9PiA8YSBocmVmPXtwcm9wcy5ocmVmfSB0YXJnZXQ9J19ibGFuayc+PGJ1dHRvbiBzdHlsZT17c3R5bGV9Pntwcm9wcy5jaGlsZHJlbn08L2J1dHRvbj48L2E+XG5cblBhcGVyQnRuLmRlZmF1bHRQcm9wcyA9IHtcblx0c3R5bGU6IHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShQYXBlckJ0bilcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5jb25zdCBzdHlsZSA9IHtcblx0d2lkdGg6ICcxMDAlJyxcblx0Ym94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG5cdHBhZGRpbmc6IDIwXG59XG5cbmNvbnN0IFBhcGVyQ29udGVudCA9IChwcm9wcykgPT4gPGRpdiBzdHlsZT17c3R5bGV9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKFBhcGVyQ29udGVudClcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uLy4uL2xpYi9jb2xvcnMnXG5cbmNvbnN0IHN0eWxlID0ge1xuXHR3aWR0aDogJzEwMCUnLFxuXHRkaXNwbGF5OiAnYmxvY2snLFxuXHRmb250U2l6ZTogJzFyZW0nLFxuXHRmb250V2VpZ2h0OiAzMDAsXG5cdG1hcmdpbjogMCxcblx0cGFkZGluZzogJzEwcHggMjBweCcsXG5cdGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuXHRiYWNrZ3JvdW5kOiAnIzFiMTcxOCcsXG5cdGNvbG9yOiBjb2xvcnMud2hpdGVcbn1cblxuY29uc3QgUGFwZXJIZWFkZXIgPSAocHJvcHMpID0+IDxoMSBzdHlsZT17c3R5bGV9Pntwcm9wcy5jaGlsZHJlbn08L2gxPlxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oUGFwZXJIZWFkZXIpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuY29uc3Qgc3R5bGUgPSB7XG5cdHdpZHRoOiAnMTAwJScsXG5cdGRpc3BsYXk6ICdibG9jaydcbn1cblxuY29uc3QgUGFwZXJJbWcgPSAocHJvcHMpID0+IDxpbWcgc3JjPXtwcm9wcy5zcmN9IHN0eWxlPXtzdHlsZX0gLz5cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKFBhcGVySW1nKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmNvbnN0IHN0eWxlcyA9IHtcblx0Y29udGFpbmVyOiB7XG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRmb250V2VpZ2h0OiAzMDAsXG5cdFx0bWFyZ2luQm90dG9tOiAxMCxcblx0XHRmbG9hdDogJ2xlZnQnXG5cdH0sXG5cdGgyOiB7XG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRtYXJnaW46IDAsXG5cdFx0cGFkZGluZzogMCxcblx0XHRmb250U2l6ZTogJy44cmVtJyxcblx0XHRmb250V2VpZ2h0OiA0MDBcblx0fSxcblx0dHh0OiB7XG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRmb250U2l6ZTogJy44cmVtJyxcblx0XHR3b3JkV3JhcDogJ2JyZWFrLXdvcmQnXG5cdH1cbn1cblxuY29uc3QgUGFwZXJMaSA9IChwcm9wcykgPT4gPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+PGgyIHN0eWxlPXtzdHlsZXMuaDJ9Pntwcm9wcy5oZWFkfTwvaDI+PGRpdiBzdHlsZT17c3R5bGVzLnR4dH0+e3Byb3BzLmNoaWxkcmVufTwvZGl2PjwvZGl2PlxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oUGFwZXJMaSlcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uLy4uL2xpYi9jb2xvcnMnXG5cbmNvbnN0IHN0eWxlID0ge1xuXHR3aWR0aDogJzEwMCUnLFxuXHRkaXNwbGF5OiAnYmxvY2snLFxuXHRiYWNrZ3JvdW5kOiBjb2xvcnMuZ3JleTIwMCxcblx0aGVpZ2h0OiAxLFxuXHRtYXJnaW46ICcxMHB4IDAgMjBweCAwJ1xufVxuXG5jb25zdCBQYXBlckxpbmUgPSAocHJvcHMpID0+IDxkaXYgc3R5bGU9e3N0eWxlfSAvPlxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oUGFwZXJMaW5lKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmNvbnN0IHN0eWxlID0ge1xuXHR3aWR0aDogJzEwMCUnLFxuXHRkaXNwbGF5OiAnYmxvY2snXG59XG5cbmNvbnN0IFBhcGVyVWwgPSAocHJvcHMpID0+IDxkaXYgY2xhc3NOYW1lPSdjbGVhcicgc3R5bGU9e3N0eWxlfT57cHJvcHMuY2hpbGRyZW59PC9kaXY+XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShQYXBlclVsKVxuIiwiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uLy4uL2xpYi9jb2xvcnMnXG5pbXBvcnQgRW50aXR5U2VydmljZSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9FbnRpdHkuU2VydmljZSdcbmltcG9ydCBGMVNlcnZpY2UgZnJvbSAnLi4vLi4vc2VydmljZXMvRjEuU2VydmljZSdcbmltcG9ydCBVdGlscyBmcm9tICcuLi8uLi9saWIvVXRpbHMnXG5cbmltcG9ydCBQYXBlciBmcm9tICcuL1BhcGVyJ1xuaW1wb3J0IFBhcGVyQ29udGVudCBmcm9tICcuL1BhcGVyQ29udGVudCdcbmltcG9ydCBQYXBlckltZyBmcm9tICcuL1BhcGVySW1nJ1xuaW1wb3J0IFBhcGVySGVhZGVyIGZyb20gJy4vUGFwZXJIZWFkZXInXG5pbXBvcnQgUGFwZXJVbCBmcm9tICcuL1BhcGVyVWwnXG5pbXBvcnQgUGFwZXJMaSBmcm9tICcuL1BhcGVyTGknXG5pbXBvcnQgUGFwZXJMaW5lIGZyb20gJy4vUGFwZXJMaW5lJ1xuaW1wb3J0IFBhcGVyQnRuIGZyb20gJy4vUGFwZXJCdG4nXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJ1xuaW1wb3J0IENlbnRlckNvbnRhaW5lciBmcm9tICcuL0NlbnRlckNvbnRhaW5lcidcblxuY29uc3QgZXhjbHVkZSA9IFsndGh1bWJuYWlsJywgJ2RlcGljdGlvbicsICdiaXJ0aFBsYWNlJywgJ3dpa2lQYWdlSUQnLCAnYWJzdHJhY3QnLCAnbG9jYXRpb24nXVxuXG5jb25zdCBzdHlsZXMgPSB7XG5cdHJlbG9hZDoge1xuXHRcdGN1cnNvcjogJ3BvaW50ZXInLFxuXHRcdCc6aG92ZXInOiB7XG5cdFx0XHRjb2xvcjogY29sb3JzLnJlZDUwMFxuXHRcdH1cblx0fSxcblx0Y29udGFpbmVyOiB7XG5cdFx0cGFkZGluZzogMjAsXG5cdFx0Ym94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG5cdFx0d2lkdGg6ICcxMDAlJ1xuXHR9XG59XG5cbmNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRlbnRpdHk6IG51bGwsXG5cdFx0XHRlcnI6IGZhbHNlXG5cdFx0fVxuXHRcdHRoaXMucmVsb2FkID0gdGhpcy5yZWxvYWQuYmluZCh0aGlzKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHRpZih0aGlzLnByb3BzLmVudGl0eS5kYXRhKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtlbnRpdHk6IHRoaXMucHJvcHMuZW50aXR5LmRhdGF9KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmZldGNoU3BhcnFsKClcblx0XHR9XG5cdH1cblx0cmVsb2FkKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0ZW50aXR5OiBudWxsLFxuXHRcdFx0ZXJyOiBmYWxzZVxuXHRcdH0pXG5cdFx0dGhpcy5mZXRjaFNwYXJxbCgpXG5cdH1cblx0ZmV0Y2hTcGFycWwoKSB7XG5cdFx0RW50aXR5U2VydmljZS5nZXRFbnRpdHkodGhpcy5wcm9wcy5lbnRpdHksIChlcnIsIHJlcykgPT4ge1xuXHRcdFx0aWYoZXJyIHx8ICFyZXMuYm9keS5yZXN1bHRzLmJpbmRpbmdzLmxlbmd0aCkgcmV0dXJuIHRoaXMuZmV0Y2hBcGkoKVxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7ZW50aXR5OiByZXMuYm9keS5yZXN1bHRzLmJpbmRpbmdzWzBdfSlcblx0XHR9KVxuXHR9XG5cdGZldGNoQXBpKCkge1xuXHRcdEYxU2VydmljZS5nZXRFbnRpdHkodGhpcy5wcm9wcy5lbnRpdHksIChlcnIsIHJlcykgPT4ge1xuXHRcdFx0aWYoZXJyKSByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7ZW50aXR5OiBudWxsLCBlcnI6IHRydWV9KVxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGVudGl0eTogcmVzLFxuXHRcdFx0XHRlcnI6IGZhbHNlXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblx0cmVuZGVyTG9hZGVyKCkge1xuXHRcdHJldHVybiA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT48UGFwZXI+PFBhcGVyQ29udGVudD48Q2VudGVyQ29udGFpbmVyPjxMb2FkZXIgLz48L0NlbnRlckNvbnRhaW5lcj48L1BhcGVyQ29udGVudD48L1BhcGVyPjwvZGl2PlxuXHR9XG5cdHJlbmRlckNvbnRlbnQoKSB7XG5cdFx0bGV0IHtlbnRpdHl9ID0gdGhpcy5zdGF0ZVxuXHRcdGxldCBpbWcgPSBfLmhhcyhlbnRpdHksICdkZXBpY3Rpb24nKSA/IDxQYXBlckltZyBzcmM9e2VudGl0eS5kZXBpY3Rpb24udmFsdWV9IC8+IDogbnVsbFxuXHRcdGxldCBocmVmID0gXy5oYXMoZW50aXR5LCAnd2lraVBhZ2VJRCcpID8gPGRpdj48UGFwZXJMaW5lIC8+PFBhcGVyQnRuIGhyZWY9e2BodHRwczovL2VuLndpa2lwZWRpYS5vcmcvP2N1cmlkPSR7ZW50aXR5Lndpa2lQYWdlSUQudmFsdWV9YH0+UmVhZCBNb3JlPC9QYXBlckJ0bj48L2Rpdj4gOiBudWxsXG5cdFx0bGV0IGtleXMgPSBfKGVudGl0eSkua2V5cygpLmZpbHRlcihrID0+IF8uaW5kZXhPZihleGNsdWRlLCBrKT09LTEpLnZhbHVlKClcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG5cdFx0XHRcdDxQYXBlcj5cblx0XHRcdFx0XHR7aW1nfVxuXHRcdFx0XHRcdDxQYXBlckhlYWRlcj57dGhpcy5wcm9wcy5lbnRpdHkubmFtZX08L1BhcGVySGVhZGVyPlxuXHRcdFx0XHRcdDxQYXBlckNvbnRlbnQ+XG5cdFx0XHRcdFx0XHQ8UGFwZXJVbD5cblx0XHRcdFx0XHRcdFx0e2tleXMubWFwKGsgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiA8UGFwZXJMaSBrZXk9e2Ake3RoaXMucHJvcHMuZW50aXR5Ll9pZH0tJHtrfWB9IGhlYWQ9e1V0aWxzLmNhcGl0YWxpemUoayl9PntVdGlscy5mb3JtYXRFbnRpdHlTdHJpbmcoZW50aXR5W2tdLnZhbHVlKX08L1BhcGVyTGk+XG5cdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0PC9QYXBlclVsPlxuXHRcdFx0XHRcdFx0e2hyZWZ9XG5cdFx0XHRcdFx0PC9QYXBlckNvbnRlbnQ+XG5cdFx0XHRcdDwvUGFwZXI+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblx0cmVuZGVyQWdhaW5CdG4oKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxQYXBlcj5cblx0XHRcdFx0PFBhcGVyQ29udGVudD5cblx0XHRcdFx0XHQ8UGFwZXJIZWFkZXI+e3RoaXMucHJvcHMuZW50aXR5Lm5hbWV9PC9QYXBlckhlYWRlcj5cblx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17c3R5bGVzLnJlbG9hZH0gb25DbGljaz17dGhpcy5yZWxvYWR9PkNvdWxkIG5vdCBmZXRjaCBkYXRhLiBDbGljayB0byB0cnkgYWdhaW48L3NwYW4+XG5cdFx0XHRcdDwvUGFwZXJDb250ZW50PlxuXHRcdFx0PC9QYXBlcj5cblx0XHQpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGlmKHRoaXMuc3RhdGUuZXJyKSByZXR1cm4gdGhpcy5yZW5kZXJBZ2FpbkJ0bigpXG5cdFx0aWYoIXRoaXMuc3RhdGUuZW50aXR5KSByZXR1cm4gdGhpcy5yZW5kZXJMb2FkZXIoKVxuXHRcdHJldHVybiB0aGlzLnJlbmRlckNvbnRlbnQoKVxuXHR9XG59XG5cblByb2ZpbGUucHJvcFR5cGVzID0ge1xuXHRlbnRpdHk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oUHJvZmlsZSlcbiIsImltcG9ydCBSZWFjdCwge1Byb3BUeXBlc30gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi9saWIvY29sb3JzJ1xuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGNvbnRhaW5lcjoge1xuXHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0aGVpZ2h0OiAnMTAwJScsXG5cdFx0cG9zaXRpb246ICdyZWxhdGl2ZScsXG5cdFx0YmFja2dyb3VuZDogY29sb3JzLndoaXRlLFxuXHRcdG92ZXJmbG93OiAnaGlkZGVuJ1xuXHR9LFxuXHRpbnBDb250YWluZXI6IHtcblx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcblx0XHR0b3A6IDAsXG5cdFx0bGVmdDogMCxcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdGhlaWdodDogJzEwMCUnLFxuXHRcdGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuXHRcdGJhY2tncm91bmQ6ICdub25lJyxcblx0XHRib3JkZXI6IGAxcHggc29saWQgJHtjb2xvcnMud2hpdGV9YCxcblx0XHRmb250V2VpZ2h0OiAzMDAsXG5cdFx0cGFkZGluZzogJzVweCA0NXB4IDVweCA1cHgnLFxuXHRcdGZvbnRTaXplOiAnMXJlbScsXG5cdFx0dGV4dEFsaWduOiAnbGVmdCcsXG5cdFx0Zm9udEZhbWlseTogJ1JvYm90bycsXG5cdFx0bWFyZ2luOiAwLFxuXHRcdCc6Zm9jdXMnOiB7XG5cdFx0XHRvdXRsaW5lOiAnbm9uZScsXG5cdFx0XHQvL2JvcmRlcjogYDFweCBzb2xpZCAke2NvbG9ycy5ncmV5ODAwfWBcblx0XHR9XG5cdH0sXG5cdHJlY29tbWVuZDoge1xuXHRcdGNvbG9yOiBjb2xvcnMuZ3JleTUwMCxcblx0XHRwYWRkaW5nVG9wOiA5XG5cdH0sXG5cdGVhc2U6IHtcblx0XHR0cmFuc2l0aW9uOiAnYWxsIDAuMXMgZWFzZS1pbi1vdXQnXG5cdH0sXG5cdHdoaXRlU3BhY2U6IHtcblx0XHRjb2xvcjogY29sb3JzLndoaXRlXG5cdH0sXG5cdGljb246IHtcblx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcblx0XHR3aWR0aDogNDAsXG5cdFx0aGVpZ2h0OiA0MCxcblx0XHR0b3A6IDAsXG5cdFx0cmlnaHQ6IDAsXG5cdFx0ZGlzcGxheTogJ2Jsb2NrJyxcblx0XHRmb250U2l6ZTogJzFlbScsXG5cdFx0YmFja2dyb3VuZDogY29sb3JzLmdyZXk4MDAsXG5cdFx0Y29sb3I6IGNvbG9ycy53aGl0ZSxcblx0XHRib3JkZXI6ICdub25lJyxcblx0XHRwYWRkaW5nOiAwLFxuXHRcdGN1cnNvcjogJ3BvaW50ZXInLFxuXHRcdCc6aG92ZXInOiB7XG5cdFx0XHRjb2xvcjogY29sb3JzLmdyZXk1MDBcblx0XHR9XG5cdH1cbn1cblxuY2xhc3MgU2VhcmNoSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMub25LZXkgPSB0aGlzLm9uS2V5LmJpbmQodGhpcylcblx0XHR0aGlzLm9uS2V5RG93biA9IHRoaXMub25LZXlEb3duLmJpbmQodGhpcylcblx0fVxuXHRvbktleShlKSB7XG5cdFx0aWYoZS5rZXkgPT0gJ0VudGVyJykgdGhpcy5wcm9wcy5vbkVudGVyKClcblx0fVxuXHRvbktleURvd24oZSkge1xuXHRcdGlmKGUua2V5ID09ICdUYWInKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdHRoaXMucHJvcHMub25UYWIoKVxuXHRcdH1cblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e1tzdHlsZXMuY29udGFpbmVyLCB0aGlzLnByb3BzLnN0eWxlXX0+XG5cdFx0XHRcdDxkaXYgc3R5bGU9e1tzdHlsZXMuaW5wQ29udGFpbmVyLCBzdHlsZXMucmVjb21tZW5kLCB0aGlzLnByb3BzLmlucFN0eWxlXX0+PHNwYW4gc3R5bGU9e3N0eWxlcy53aGl0ZVNwYWNlfT57dGhpcy5wcm9wcy52YWx1ZX08L3NwYW4+e3RoaXMucHJvcHMucmVjb21tZW5kfTwvZGl2PlxuXHRcdFx0XHQ8aW5wdXQga2V5PSdpbnB1dFNyYycgdHlwZT0ndGV4dCcgc3R5bGU9e1tzdHlsZXMuZWFzZSwgc3R5bGVzLmlucENvbnRhaW5lciwgdGhpcy5wcm9wcy5pbnBTdHlsZV19IHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfSBvbkNoYW5nZT17ZSA9PiB0aGlzLnByb3BzLm9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX0gb25LZXlQcmVzcz17dGhpcy5vbktleX0gb25LZXlEb3duPXt0aGlzLm9uS2V5RG93bn0gLz5cblx0XHRcdFx0PGJ1dHRvbiBzdHlsZT17W3N0eWxlcy5pY29uLCBzdHlsZXMuZWFzZV19IGtleT0naW50ZXJuYWxTcmNCdXR0b24nIG9uQ2xpY2s9e2UgPT4gdGhpcy5wcm9wcy5vbkVudGVyKCl9PjxpIGNsYXNzTmFtZT0nZmEgZmEtc2VhcmNoJyAvPjwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cblNlYXJjaElucHV0LmRlZmF1bHRQcm9wcyA9IHtcblx0c3R5bGU6IHt9LFxuXHR2YWx1ZTogJycsXG5cdHJlY29tbWVuZDogJycsXG5cdGlucFN0eWxlOiB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oU2VhcmNoSW5wdXQpXG4iLCJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXN9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vLi4vbGliL2NvbG9ycydcbmltcG9ydCBGMVNlcnZpY2UgZnJvbSAnLi4vLi4vc2VydmljZXMvRjEuU2VydmljZSdcbmltcG9ydCBVdGlscyBmcm9tICcuLi8uLi9saWIvVXRpbHMnXG5cbmltcG9ydCBQYXBlciBmcm9tICcuL1BhcGVyJ1xuaW1wb3J0IFBhcGVyQ29udGVudCBmcm9tICcuL1BhcGVyQ29udGVudCdcbmltcG9ydCBQYXBlckhlYWRlciBmcm9tICcuL1BhcGVySGVhZGVyJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcidcbmltcG9ydCBDZW50ZXJDb250YWluZXIgZnJvbSAnLi9DZW50ZXJDb250YWluZXInXG5pbXBvcnQgVGFibGUgZnJvbSAnLi9UYWJsZSdcblxuY29uc3Qgc3R5bGUgPSB7XG5cdHBhZGRpbmc6IDIwLFxuXHRib3hTaXppbmc6ICdib3JkZXItYm94Jyxcblx0d2lkdGg6ICcxMDAlJ1xufVxuXG5jbGFzcyBTdW1tYXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0ZGF0YTogW10sXG5cdFx0XHRlcnJvcjogZmFsc2UsXG5cdFx0XHRsb2FkaW5nOiB0cnVlLFxuXHRcdFx0dGhzOiBbXVxuXHRcdH1cblx0XHR0aGlzLm1vdW50ZWQgPSBmYWxzZVxuXHR9XG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHR0aGlzLm1vdW50ZWQgPSB0cnVlXG5cdFx0RjFTZXJ2aWNlLmdldFN1bW1hcnkodGhpcy5wcm9wcy5zdW1tYXJ5LCAoZXJyLCBkYXRhKSA9PiB7XG5cdFx0XHRpZighdGhpcy5tb3VudGVkKSByZXR1cm4gZmFsc2Vcblx0XHRcdGlmKGVycikge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IHRydWV9KVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGV0IHRocyA9IEYxU2VydmljZS5yZXN1bHRzRm9ybWF0ZXIodGhpcy5wcm9wcy5zdW1tYXJ5LnR5cGUpXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IGZhbHNlLCBlcnJvcjogZmFsc2UsIGRhdGEsIHRoc30pXG5cdFx0XHRcdFV0aWxzLnJlcG9zaXRpb24oKVxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0dGhpcy5tb3VudGVkID0gZmFsc2Vcblx0fVxuXHRyZW5kZXJMb2FkZXIoKSB7XG5cdFx0cmV0dXJuIDxkaXYgc3R5bGU9e3N0eWxlfT48UGFwZXI+PFBhcGVySGVhZGVyPnt0aGlzLnByb3BzLnN1bW1hcnkubmFtZX08L1BhcGVySGVhZGVyPjxQYXBlckNvbnRlbnQ+PENlbnRlckNvbnRhaW5lcj48TG9hZGVyIC8+PC9DZW50ZXJDb250YWluZXI+PC9QYXBlckNvbnRlbnQ+PC9QYXBlcj48L2Rpdj5cblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge2xvYWRpbmcsIGRhdGEsIGVycm9yLCB0aHN9ID0gdGhpcy5zdGF0ZVxuXHRcdGlmKGxvYWRpbmcpIHJldHVybiB0aGlzLnJlbmRlckxvYWRlcigpXG5cdFx0aWYoZXJyb3IpIHJldHVybiBudWxsXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3N0eWxlfT5cblx0XHRcdFx0PFBhcGVyPlxuXHRcdFx0XHRcdDxQYXBlckhlYWRlcj57dGhpcy5wcm9wcy5zdW1tYXJ5Lm5hbWV9PC9QYXBlckhlYWRlcj5cblx0XHRcdFx0XHQ8UGFwZXJDb250ZW50PlxuXHRcdFx0XHRcdFx0PFRhYmxlIGhlYWRlcnM9e3Roc30gZGF0YT17ZGF0YX0gLz5cblx0XHRcdFx0XHQ8L1BhcGVyQ29udGVudD5cblx0XHRcdFx0PC9QYXBlcj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5TdW1tYXJ5LnByb3BUeXBlcyA9IHtcblx0c3VtbWFyeTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShTdW1tYXJ5KVxuIiwiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuaW1wb3J0IHV1aWQgZnJvbSAnbm9kZS11dWlkJ1xuXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uLy4uL2xpYi9jb2xvcnMnXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vLi4vbGliL1V0aWxzJ1xuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGNvbnRhaW5lcjoge1xuXHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0Zm9udFNpemU6ICcuOGVtJyxcblx0XHRkaXNwbGF5OiAndGFibGUnXG5cdH0sXG5cdHJvdzoge1xuXHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0cGFkZGluZzogMCxcblx0XHRtYXJnaW46IDAsXG5cdFx0ZGlzcGxheTogJ3RhYmxlLXJvdycsXG5cdFx0Jzpob3Zlcic6IHtcblx0XHRcdGJhY2tncm91bmQ6IGNvbG9ycy5ncmV5MjAwXG5cdFx0fVxuXHR9LFxuXHRoZWFkZXI6IHtcblx0XHR0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcblx0XHRjb2xvcjogY29sb3JzLmdyZXk4MDBcblx0fSxcblx0b2RkOiB7XG5cdFx0YmFja2dyb3VuZDogY29sb3JzLmdyZXkxMDAsXG5cdFx0Jzpob3Zlcic6IHtcblx0XHRcdGJhY2tncm91bmQ6IGNvbG9ycy5ncmV5MjAwXG5cdFx0fVxuXHR9LFxuXHRjZWxsOiB7XG5cdFx0cGFkZGluZzogMTAsXG5cdFx0ZGlzcGxheTogJ3RhYmxlLWNlbGwnLFxuXHRcdHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuXHRcdHdvcmRXcmFwOiAnYnJlYWstd29yZCdcblx0fVxufVxuXG5jb25zdCBUYWJsZSA9IChwcm9wcykgPT4ge1xuXHRsZXQgY250ID0gMFxuXHRsZXQgd2lkdGggPSB7d2lkdGg6IGAkezEwMC9wcm9wcy5oZWFkZXJzLmxlbmd0aH0lYH1cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2xlYXInIHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cblx0XHRcdDxkaXYgc3R5bGU9e1tzdHlsZXMucm93LCBzdHlsZXMuaGVhZGVyXX0ga2V5PXt1dWlkLnY0KCl9Pntwcm9wcy5oZWFkZXJzLm1hcChoID0+IDxkaXYga2V5PXt1dWlkLnY0KCl9IHN0eWxlPXtbc3R5bGVzLmNlbGxdfT57aC5uYW1lfTwvZGl2Pil9PC9kaXY+XG5cdFx0XHR7cHJvcHMuZGF0YS5tYXAoZCA9PiB7XG5cdFx0XHRcdGNudCsrXG5cdFx0XHRcdGxldCBvZGQgPSBjbnQlMiA/IHN0eWxlcy5vZGQgOiB7fVxuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxkaXYga2V5PXt1dWlkLnY0KCl9IHN0eWxlPXtbc3R5bGVzLnJvdywgb2RkXX0+XG5cdFx0XHRcdFx0XHR7cHJvcHMuaGVhZGVycy5tYXAoaCA9PiA8ZGl2IGtleT17dXVpZC52NCgpfSBzdHlsZT17W3N0eWxlcy5jZWxsXX0+e1V0aWxzLmZvcm1hdEVudGl0eVN0cmluZyhVdGlscy5wbHVja1ZhbHVlKGQsIGgua2V5KSl9PC9kaXY+KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KVxuXHRcdFx0fSl9XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuVGFibGUucHJvcFR5cGVzID0ge1xuXHRoZWFkZXJzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcblx0ZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKFRhYmxlKVxuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IGFzeW5jIGZyb20gJ2FzeW5jJ1xuaW1wb3J0IENvbWJpbmF0b3JpY3MgZnJvbSAnanMtY29tYmluYXRvcmljcydcbmltcG9ydCB7c3BlY2lhbEtleXdvcmRzfSBmcm9tICcuL0tleXdvcmRzJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5cbmltcG9ydCBVdGlscyBmcm9tICcuL1V0aWxzJ1xuaW1wb3J0IEYxU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9GMS5TZXJ2aWNlJ1xuXG5jbGFzcyBBbmFseXNlciB7XG5cdHN0YXRpYyBwYXJzZUVudGl0aWVzKHF1ZXJ5LCBlbnRpdGllcywgY2IpIHtcblx0XHRsZXQgZGF0ZXMgPSBfKGVudGl0aWVzKS5maWx0ZXIoZSA9PiBlLnR5cGU9PSdkYXRlJykubWFwKCduYW1lJykudmFsdWUoKVxuXHRcdGxldCBfcHJvZmlsZXMgPSBfLmZpbHRlcihlbnRpdGllcywgZSA9PiBlLnR5cGUhPSdkYXRlJylcblx0XHRBbmFseXNlci5ldmFsdWF0ZVByb2ZpbGVzKHF1ZXJ5LCBfcHJvZmlsZXMsIHByb2ZpbGVzID0+IHtcblx0XHRcdEFuYWx5c2VyLmRhdGFDYXNlKHF1ZXJ5LCBwcm9maWxlcywgZGF0ZXMsIChzdW1tYXJpZXMsIF9lbnRzKSA9PiB7XG5cdFx0XHRcdGlmKF9lbnRzIT11bmRlZmluZWQgJiYgIV9lbnRzKSBwcm9maWxlcyA9IFtdXG5cdFx0XHRcdGNiKHtkYXRlcywgcHJvZmlsZXMsIHN1bW1hcmllc30pXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHRzdGF0aWMgZXZhbHVhdGVQcm9maWxlcyhxdWVyeSwgcHJvZmlsZXMsIGNiKSB7XG5cdFx0bGV0IGtleXMgPSBfKHF1ZXJ5LnNwbGl0KCcgJykpLm1hcChrID0+IF8uZGVidXJyKGsudG9Mb3dlckNhc2UoKSkpLnVuaXEoKS52YWx1ZSgpXG5cdFx0bGV0IGNvbWJpbmF0aW9ucyA9IFV0aWxzLm5hdHVyYWxLZXl3b3JkQ29tYmluYXRpb25zKGtleXMpXG5cdFx0bGV0IHBzID0gXyhwcm9maWxlcykubWFwKHAgPT4ge1xuXHRcdFx0bGV0IGtleXdvcmRzID0gXyhVdGlscy5uYXR1cmFsS2V5d29yZENvbWJpbmF0aW9ucyhwLmtleXdvcmRzKSkuZmxhdHRlbkRlZXAoKS5tYXAoayA9PiBfLmRlYnVycihrKSkudW5pcSgpLnZhbHVlKClcblx0XHRcdGxldCBpbnRlcnNlY3QgPSBfLmludGVyc2VjdGlvbihrZXlzLCBrZXl3b3Jkcylcblx0XHRcdHAuY29uZmlkZW50ID0gaW50ZXJzZWN0Lmxlbmd0aFxuXHRcdFx0cC5pbnRlcnNlY3QgPSBpbnRlcnNlY3Rcblx0XHRcdGlmKF8uaW5kZXhPZihjb21iaW5hdGlvbnMsIF8uZGVidXJyKHAubmFtZS50b0xvd2VyQ2FzZSgpKSk+LTEpIHAuY29uZmlkZW50PTEwMFxuXHRcdFx0cmV0dXJuIHBcblx0XHR9KS5vcmRlckJ5KFsnY29uZmlkZW50JywgJ25hbWUnXSwgWydkZXNjJywgJ2FzYyddKS52YWx1ZSgpXG5cdFx0QW5hbHlzZXIuY3JlYXRlRGVwZW5kZW5jeUdyYXBoKHBzLCBjYilcblx0fVxuXG5cdHN0YXRpYyBjcmVhdGVEZXBlbmRlbmN5R3JhcGgocHJvZmlsZXMsIGNiKSB7XG5cdFx0bGV0IHByb2ZzID0gXy5ncm91cEJ5KHByb2ZpbGVzLCAndHlwZScpXG5cdFx0cHJvZnMuX2tleXMgPSBfLmtleXMocHJvZnMpXG5cdFx0cHJvZnMgPSBfLm1hcChwcm9mcy5fa2V5cywgayA9PiB7XG5cdFx0XHRsZXQgcCA9IHByb2ZzW2tdXG5cdFx0XHRsZXQgZ3JvdXAgPSBfLmdyb3VwQnkocCwgJ2ludGVyc2VjdCcpXG5cdFx0XHRsZXQga2V5cyA9IF8ua2V5cyhncm91cClcblx0XHRcdHJldHVybiB7X2tleXM6IGtleXMsIGRhdGE6IGdyb3VwfVxuXHRcdH0pXG5cdFx0cHJvZnMgPSBfKHByb2ZzKS5tYXAocCA9PiB7XG5cdFx0XHRyZXR1cm4gXyhwLl9rZXlzKS5tYXAoayA9PiB7XG5cdFx0XHRcdGxldCBwciA9IHAuZGF0YVtrXVxuXHRcdFx0XHRsZXQgbWF4ID0gXy5tYXhCeShwciwgJ2NvbmZpZGVudCcpLmNvbmZpZGVudFxuXHRcdFx0XHRyZXR1cm4gXyhwcikuZmlsdGVyKF9wID0+IF9wLmNvbmZpZGVudCA9PSBtYXgpLmZsYXR0ZW4oKS52YWx1ZSgpXG5cdFx0XHR9KS5mbGF0dGVuKCkudmFsdWUoKVxuXHRcdH0pLmZsYXR0ZW4oKS5vcmRlckJ5KFsnY29uZmlkZW50JywgJ3R5cGUnLCAnbmFtZSddLCBbJ2Rlc2MnLCAnYXNjJywgJ2FzYyddKS51bmlxQnkoJ19pZCcpLnZhbHVlKClcblx0XHRjYihwcm9mcylcblx0fVxuXG5cdHN0YXRpYyBkYXRhQ2FzZShxdWVyeSwgcHJvZmlsZXMsIGRhdGVzLCBjYikge1xuXHRcdGxldCBrZXl3b3JkcyA9IF8ocXVlcnkuc3BsaXQoJyAnKSkubWFwKGsgPT4gXy5kZWJ1cnIoay50b0xvd2VyQ2FzZSgpKSkudmFsdWUoKVxuXHRcdGxldCBjb21iaW5hdGlvbnMgPSBVdGlscy5uYXR1cmFsS2V5d29yZENvbWJpbmF0aW9ucyhrZXl3b3Jkcylcblx0XHRsZXQgd29yZHMgPSBfKHNwZWNpYWxLZXl3b3JkcykuZmlsdGVyKHNrID0+IF8uaW50ZXJzZWN0aW9uKHNrLndvcmRzLCBjb21iaW5hdGlvbnMpLmxlbmd0aCkubWFwKCdrZXknKS51bmlxKCkudmFsdWUoKVxuXHRcdGxldCBncm91cGVkID0gXy5ncm91cEJ5KHByb2ZpbGVzLCAndHlwZScpXG5cdFx0bGV0IGtleXMgPSBfLmtleXMoZ3JvdXBlZClcblx0XHRpZihkYXRlcy5sZW5ndGgpIHtcblx0XHRcdGlmKHByb2ZpbGVzLmxlbmd0aCkge1xuXHRcdFx0XHRpZihVdGlscy5vbmx5SW5BcnJheShrZXlzLCBbJ2RyaXZlciddKSkge1xuXHRcdFx0XHRcdGxldCBhcGlEYXRhID0gQW5hbHlzZXIuaW5zcGVjdERyaXZlckRhdGEod29yZHMpXG5cdFx0XHRcdFx0YXBpRGF0YSA9IGFwaURhdGEubWFwKGEgPT4gYCR7YX1CeVllYXJgKVxuXHRcdFx0XHRcdGxldCBjb21ib3MgPSBbXVxuXHRcdFx0XHRcdF8uZm9yRWFjaChkYXRlcywgZCA9PiB7Xy5mb3JFYWNoKGdyb3VwZWQuZHJpdmVyLCBkciA9PiBjb21ib3MucHVzaCh7ZGF0ZTogZCwgZHJpdmVyOiBkcn0pKX0pXG5cdFx0XHRcdFx0cmV0dXJuIEFuYWx5c2VyLmdldERhdGFJbmZvKGNvbWJvcywgYXBpRGF0YSwgY2IpXG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZihVdGlscy5vbmx5SW5BcnJheShrZXlzLCBbJ3RlYW0nXSkpIHtcblx0XHRcdFx0XHRsZXQgYXBpRGF0YSA9IEFuYWx5c2VyLmluc3BlY3RUZWFtRGF0YSh3b3Jkcylcblx0XHRcdFx0XHRhcGlEYXRhID0gYXBpRGF0YS5tYXAoYSA9PiBgJHthfUJ5WWVhcmApXG5cdFx0XHRcdFx0bGV0IGNvbWJvcyA9IFtdXG5cdFx0XHRcdFx0Xy5mb3JFYWNoKGRhdGVzLCBkID0+IHtfLmZvckVhY2goZ3JvdXBlZC50ZWFtLCB0bSA9PiBjb21ib3MucHVzaCh7ZGF0ZTogZCwgdGVhbTogdG19KSl9KVxuXHRcdFx0XHRcdHJldHVybiBBbmFseXNlci5nZXREYXRhSW5mbyhjb21ib3MsIGFwaURhdGEsIGNiKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYoVXRpbHMub25seUluQXJyYXkoa2V5cywgWyd0cmFjayddKSkgcmV0dXJuIEFuYWx5c2VyLmdldERhdGFJbmZvKGdyb3VwZWQudHJhY2ssIEFuYWx5c2VyLmluc3BlY3RUcmFja0RhdGEod29yZHMpLCBjYilcblx0XHRcdFx0ZWxzZSBpZihVdGlscy5vbmx5SW5BcnJheShrZXlzLCBbJ2RyaXZlcicsICd0ZWFtJ10pKSB7XG5cdFx0XHRcdFx0bGV0IGRyaXZlckRhdGEgPSBBbmFseXNlci5pbnNwZWN0RHJpdmVyRGF0YSh3b3JkcywgdHJ1ZSlcblx0XHRcdFx0XHRsZXQgdGVhbURhdGEgPSBBbmFseXNlci5pbnNwZWN0VGVhbURhdGEod29yZHMsIHRydWUpXG5cdFx0XHRcdFx0bGV0IGNvbWJvcyA9IFtdXG5cdFx0XHRcdFx0Xy5mb3JFYWNoKGdyb3VwZWQuZHJpdmVyLCBkID0+IHtfLmZvckVhY2goZ3JvdXBlZC50ZWFtLCB0ID0+IGNvbWJvcy5wdXNoKHtkcml2ZXI6IGQsIHRlYW06IHR9KSl9KVxuXHRcdFx0XHRcdGxldCBzdW1tYXJpZXMgPSBbXVxuXHRcdFx0XHRcdHJldHVybiBhc3luYy5wYXJhbGxlbChbXG5cdFx0XHRcdFx0XHRjYjEgPT4gQW5hbHlzZXIuZ2V0RGF0YUluZm8oY29tYm9zLCBbJ2RyaXZlclJhY2VSZXN1bHRzQnlUZWFtJ10sIHN1bSA9PiB7XG5cdFx0XHRcdFx0XHRcdHN1bW1hcmllcy5wdXNoKHN1bSlcblx0XHRcdFx0XHRcdFx0Y2IxKClcblx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0Y2IxID0+IEFuYWx5c2VyLmdldERhdGFJbmZvKGdyb3VwZWQuZHJpdmVyLCBkcml2ZXJEYXRhLCBzdW0gPT4ge1xuXHRcdFx0XHRcdFx0XHRzdW1tYXJpZXMucHVzaChzdW0pXG5cdFx0XHRcdFx0XHRcdGNiMSgpXG5cdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdGNiMSA9PiBBbmFseXNlci5nZXREYXRhSW5mbyhncm91cGVkLnRlYW0sIHRlYW1EYXRhLCBzdW0gPT4ge1xuXHRcdFx0XHRcdFx0XHRzdW1tYXJpZXMucHVzaChzdW0pXG5cdFx0XHRcdFx0XHRcdGNiMSgpXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdF0sICgpID0+IHtcblx0XHRcdFx0XHRcdGNiKF8uZmxhdHRlbihzdW1tYXJpZXMpKVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZihVdGlscy5vbmx5SW5BcnJheShrZXlzLCBbJ2RyaXZlcicsICd0cmFjayddKSkge1xuXHRcdFx0XHRcdGxldCBkcml2ZXJEYXRhID0gQW5hbHlzZXIuaW5zcGVjdERyaXZlckRhdGEod29yZHMsIHRydWUpXG5cdFx0XHRcdFx0bGV0IHRyYWNrRGF0YSA9IEFuYWx5c2VyLmluc3BlY3RUcmFja0RhdGEod29yZHMsIHRydWUpXG5cdFx0XHRcdFx0bGV0IGNvbWJvcyA9IFtdXG5cdFx0XHRcdFx0Xy5mb3JFYWNoKGdyb3VwZWQuZHJpdmVyLCBkID0+IHtfLmZvckVhY2goZ3JvdXBlZC50cmFjaywgdCA9PiBjb21ib3MucHVzaCh7ZHJpdmVyOiBkLCB0cmFjazogdH0pKX0pXG5cdFx0XHRcdFx0bGV0IHN1bW1hcmllcyA9IFtdXG5cdFx0XHRcdFx0cmV0dXJuIGFzeW5jLnBhcmFsbGVsKFtcblx0XHRcdFx0XHRcdGNiMSA9PiBBbmFseXNlci5nZXREYXRhSW5mbyhjb21ib3MsIFsnZHJpdmVyUmFjZVJlc3VsdHNCeVRyYWNrJ10sIHN1bSA9PiB7XG5cdFx0XHRcdFx0XHRcdHN1bW1hcmllcy5wdXNoKHN1bSlcblx0XHRcdFx0XHRcdFx0Y2IxKClcblx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0Y2IxID0+IEFuYWx5c2VyLmdldERhdGFJbmZvKGdyb3VwZWQuZHJpdmVyLCBkcml2ZXJEYXRhLCBzdW0gPT4ge1xuXHRcdFx0XHRcdFx0XHRzdW1tYXJpZXMucHVzaChzdW0pXG5cdFx0XHRcdFx0XHRcdGNiMSgpXG5cdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdGNiMSA9PiBBbmFseXNlci5nZXREYXRhSW5mbyhncm91cGVkLnRyYWNrLCB0cmFja0RhdGEsIHN1bSA9PiB7XG5cdFx0XHRcdFx0XHRcdHN1bW1hcmllcy5wdXNoKHN1bSlcblx0XHRcdFx0XHRcdFx0Y2IxKClcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XSwgKCkgPT4ge1xuXHRcdFx0XHRcdFx0Y2IoXy5mbGF0dGVuKHN1bW1hcmllcykpXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmKFV0aWxzLm9ubHlJbkFycmF5KGtleXMsIFsndGVhbScsICd0cmFjayddKSkge1xuXHRcdFx0XHRcdGxldCB0ZWFtRGF0YSA9IEFuYWx5c2VyLmluc3BlY3RUZWFtRGF0YSh3b3JkcywgdHJ1ZSlcblx0XHRcdFx0XHRsZXQgdHJhY2tEYXRhID0gQW5hbHlzZXIuaW5zcGVjdFRyYWNrRGF0YSh3b3JkcywgdHJ1ZSlcblx0XHRcdFx0XHRsZXQgY29tYm9zID0gW11cblx0XHRcdFx0XHRfLmZvckVhY2goZ3JvdXBlZC50ZWFtLCBkID0+IHtfLmZvckVhY2goZ3JvdXBlZC50cmFjaywgdCA9PiBjb21ib3MucHVzaCh7dGVhbTogZCwgdHJhY2s6IHR9KSl9KVxuXHRcdFx0XHRcdGxldCBzdW1tYXJpZXMgPSBbXVxuXHRcdFx0XHRcdHJldHVybiBhc3luYy5wYXJhbGxlbChbXG5cdFx0XHRcdFx0XHRjYjEgPT4gQW5hbHlzZXIuZ2V0RGF0YUluZm8oY29tYm9zLCBbJ3RlYW1BdHRlbmRhbmNlQnlUcmFjayddLCBzdW0gPT4ge1xuXHRcdFx0XHRcdFx0XHRzdW1tYXJpZXMucHVzaChzdW0pXG5cdFx0XHRcdFx0XHRcdGNiMSgpXG5cdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdGNiMSA9PiBBbmFseXNlci5nZXREYXRhSW5mbyhncm91cGVkLnRlYW0sIHRlYW1EYXRhLCBzdW0gPT4ge1xuXHRcdFx0XHRcdFx0XHRzdW1tYXJpZXMucHVzaChzdW0pXG5cdFx0XHRcdFx0XHRcdGNiMSgpXG5cdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdGNiMSA9PiBBbmFseXNlci5nZXREYXRhSW5mbyhncm91cGVkLnRyYWNrLCB0cmFja0RhdGEsIHN1bSA9PiB7XG5cdFx0XHRcdFx0XHRcdHN1bW1hcmllcy5wdXNoKHN1bSlcblx0XHRcdFx0XHRcdFx0Y2IxKClcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XSwgKCkgPT4ge1xuXHRcdFx0XHRcdFx0Y2IoXy5mbGF0dGVuKHN1bW1hcmllcykpXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmKFV0aWxzLm9ubHlJbkFycmF5KGtleXMsIFsnZHJpdmVyJywgJ3RlYW0nLCAndHJhY2snXSkpIHtcblx0XHRcdFx0XHRsZXQgZHJpdmVyRGF0YSA9IEFuYWx5c2VyLmluc3BlY3REcml2ZXJEYXRhKHdvcmRzLCB0cnVlKVxuXHRcdFx0XHRcdGxldCB0ZWFtRGF0YSA9IEFuYWx5c2VyLmluc3BlY3RUZWFtRGF0YSh3b3JkcywgdHJ1ZSlcblx0XHRcdFx0XHRsZXQgdHJhY2tEYXRhID0gQW5hbHlzZXIuaW5zcGVjdFRyYWNrRGF0YSh3b3JkcywgdHJ1ZSlcblx0XHRcdFx0XHRsZXQgY29tYm9zID0gW11cblx0XHRcdFx0XHRfLmZvckVhY2goZ3JvdXBlZC5kcml2ZXIsIGQgPT4ge18uZm9yRWFjaChncm91cGVkLnRlYW0sIHQgPT4ge18uZm9yRWFjaChncm91cGVkLnRyYWNrLCB0ciA9PiBjb21ib3MucHVzaCh7ZHJpdmVyOiBkLCB0ZWFtOiB0LCB0cmFjazogdHJ9KSl9KX0pXG5cdFx0XHRcdFx0bGV0IHN1bW1hcmllcyA9IFtdXG5cdFx0XHRcdFx0cmV0dXJuIGFzeW5jLnBhcmFsbGVsKFtcblx0XHRcdFx0XHRcdGNiMSA9PiBBbmFseXNlci5nZXREYXRhSW5mbyhjb21ib3MsIFsnZHJpdmVyUmFjZVJlc3VsdHNCeVRlYW1BbmRUcmFjayddLCBzdW0gPT4ge1xuXHRcdFx0XHRcdFx0XHRzdW1tYXJpZXMucHVzaChzdW0pXG5cdFx0XHRcdFx0XHRcdGNiMSgpXG5cdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdGNiMSA9PiBBbmFseXNlci5nZXREYXRhSW5mbyhncm91cGVkLmRyaXZlciwgZHJpdmVyRGF0YSwgc3VtID0+IHtcblx0XHRcdFx0XHRcdFx0c3VtbWFyaWVzLnB1c2goc3VtKVxuXHRcdFx0XHRcdFx0XHRjYjEoKVxuXHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRjYjEgPT4gQW5hbHlzZXIuZ2V0RGF0YUluZm8oZ3JvdXBlZC50ZWFtLCB0ZWFtRGF0YSwgc3VtID0+IHtcblx0XHRcdFx0XHRcdFx0c3VtbWFyaWVzLnB1c2goc3VtKVxuXHRcdFx0XHRcdFx0XHRjYjEoKVxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRdLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRjYihfLmZsYXR0ZW4oc3VtbWFyaWVzKSlcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsZXQgYXBpRGF0YSA9IFsncmFjZUNhbGVuZGFyJywgJ2RyaXZlclN0YW5kaW5ncycsICdjb25zdHJ1Y3RvclN0YW5kaW5ncyddXG5cdFx0XHRcdGlmKFV0aWxzLm9uZU9mQ29tYmluYXRpb25zKHdvcmRzLCBbJ3NlYXNvbicsICdzdGFuZGluZyddKSkgYXBpRGF0YSA9IFsnZHJpdmVyU3RhbmRpbmdzJywgJ2NvbnN0cnVjdG9yU3RhbmRpbmdzJ11cblx0XHRcdFx0ZWxzZSBpZihVdGlscy5vbmVPZkNvbWJpbmF0aW9ucyh3b3JkcywgWydjYWxlbmRhcicsICdzZWFzb24nXSkpIGFwaURhdGEgPSBbJ3JhY2VDYWxlbmRhciddXG5cdFx0XHRcdGVsc2UgaWYoVXRpbHMub25lT2ZDb21iaW5hdGlvbnMod29yZHMsIFsnZHJpdmVyJywgJ3N0YW5kaW5nJywgJ3NlYXNvbiddKSkgYXBpRGF0YSA9IFsnZHJpdmVyU3RhbmRpbmdzJ11cblx0XHRcdFx0ZWxzZSBpZihVdGlscy5vbmVPZkNvbWJpbmF0aW9ucyh3b3JkcywgWyd0ZWFtJywgJ3N0YW5kaW5nJywgJ3NlYXNvbiddKSkgYXBpRGF0YSA9IFsnY29uc3RydWN0b3JTdGFuZGluZ3MnXVxuXHRcdFx0XHRyZXR1cm4gQW5hbHlzZXIuZ2V0RGF0YUluZm8oZGF0ZXMsIGFwaURhdGEsIGNiKVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZihVdGlscy5vbmx5SW5BcnJheShrZXlzLCBbJ2RyaXZlciddKSkgcmV0dXJuIEFuYWx5c2VyLmdldERhdGFJbmZvKGdyb3VwZWQuZHJpdmVyLCBBbmFseXNlci5pbnNwZWN0RHJpdmVyRGF0YSh3b3JkcyksIGNiKVxuXHRcdFx0ZWxzZSBpZihVdGlscy5vbmx5SW5BcnJheShrZXlzLCBbJ3RlYW0nXSkpIHJldHVybiBBbmFseXNlci5nZXREYXRhSW5mbyhncm91cGVkLnRlYW0sIEFuYWx5c2VyLmluc3BlY3RUZWFtRGF0YSh3b3JkcyksIGNiKVxuXHRcdFx0ZWxzZSBpZihVdGlscy5vbmx5SW5BcnJheShrZXlzLCBbJ3RyYWNrJ10pKSB7XG5cdFx0XHRcdGxldCBhcGlEYXRhID0gQW5hbHlzZXIuaW5zcGVjdFRyYWNrRGF0YSh3b3Jkcylcblx0XHRcdFx0bGV0IF9lbnRzID0gdHJ1ZVxuXHRcdFx0XHRpZihhcGlEYXRhLmxlbmd0aD09MSAmJiBfLmZpcnN0KGFwaURhdGEpPT0nZHJpdmVyc0J5TmF0aW9uYWxpdHknKSB7XG5cdFx0XHRcdFx0Z3JvdXBlZC50cmFjayA9IFtfLmZpcnN0KGdyb3VwZWQudHJhY2spXVxuXHRcdFx0XHRcdF9lbnRzID0gZmFsc2Vcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gQW5hbHlzZXIuZ2V0RGF0YUluZm8oZ3JvdXBlZC50cmFjaywgYXBpRGF0YSwgY2IsIF9lbnRzKVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZihVdGlscy5vbmx5SW5BcnJheShrZXlzLCBbJ2RyaXZlcicsICd0ZWFtJ10pKSB7XG5cdFx0XHRcdGxldCBkcml2ZXJEYXRhID0gQW5hbHlzZXIuaW5zcGVjdERyaXZlckRhdGEod29yZHMsIHRydWUpXG5cdFx0XHRcdGxldCB0ZWFtRGF0YSA9IEFuYWx5c2VyLmluc3BlY3RUZWFtRGF0YSh3b3JkcywgdHJ1ZSlcblx0XHRcdFx0bGV0IGNvbWJvcyA9IFtdXG5cdFx0XHRcdF8uZm9yRWFjaChncm91cGVkLmRyaXZlciwgZCA9PiB7Xy5mb3JFYWNoKGdyb3VwZWQudGVhbSwgdCA9PiBjb21ib3MucHVzaCh7ZHJpdmVyOiBkLCB0ZWFtOiB0fSkpfSlcblx0XHRcdFx0bGV0IHN1bW1hcmllcyA9IFtdXG5cdFx0XHRcdHJldHVybiBhc3luYy5wYXJhbGxlbChbXG5cdFx0XHRcdFx0Y2IxID0+IEFuYWx5c2VyLmdldERhdGFJbmZvKGNvbWJvcywgWydkcml2ZXJSYWNlUmVzdWx0c0J5VGVhbSddLCBzdW0gPT4ge1xuXHRcdFx0XHRcdFx0c3VtbWFyaWVzLnB1c2goc3VtKVxuXHRcdFx0XHRcdFx0Y2IxKClcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRjYjEgPT4gQW5hbHlzZXIuZ2V0RGF0YUluZm8oZ3JvdXBlZC5kcml2ZXIsIGRyaXZlckRhdGEsIHN1bSA9PiB7XG5cdFx0XHRcdFx0XHRzdW1tYXJpZXMucHVzaChzdW0pXG5cdFx0XHRcdFx0XHRjYjEoKVxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdGNiMSA9PiBBbmFseXNlci5nZXREYXRhSW5mbyhncm91cGVkLnRlYW0sIHRlYW1EYXRhLCBzdW0gPT4ge1xuXHRcdFx0XHRcdFx0c3VtbWFyaWVzLnB1c2goc3VtKVxuXHRcdFx0XHRcdFx0Y2IxKClcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRdLCAoKSA9PiB7XG5cdFx0XHRcdFx0Y2IoXy5mbGF0dGVuKHN1bW1hcmllcykpXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmKFV0aWxzLm9ubHlJbkFycmF5KGtleXMsIFsnZHJpdmVyJywgJ3RyYWNrJ10pKSB7XG5cdFx0XHRcdGxldCBkcml2ZXJEYXRhID0gQW5hbHlzZXIuaW5zcGVjdERyaXZlckRhdGEod29yZHMsIHRydWUpXG5cdFx0XHRcdGxldCB0cmFja0RhdGEgPSBBbmFseXNlci5pbnNwZWN0VHJhY2tEYXRhKHdvcmRzLCB0cnVlKVxuXHRcdFx0XHRsZXQgY29tYm9zID0gW11cblx0XHRcdFx0Xy5mb3JFYWNoKGdyb3VwZWQuZHJpdmVyLCBkID0+IHtfLmZvckVhY2goZ3JvdXBlZC50cmFjaywgdCA9PiBjb21ib3MucHVzaCh7ZHJpdmVyOiBkLCB0cmFjazogdH0pKX0pXG5cdFx0XHRcdGxldCBzdW1tYXJpZXMgPSBbXVxuXHRcdFx0XHRyZXR1cm4gYXN5bmMucGFyYWxsZWwoW1xuXHRcdFx0XHRcdGNiMSA9PiBBbmFseXNlci5nZXREYXRhSW5mbyhjb21ib3MsIFsnZHJpdmVyUmFjZVJlc3VsdHNCeVRyYWNrJ10sIHN1bSA9PiB7XG5cdFx0XHRcdFx0XHRzdW1tYXJpZXMucHVzaChzdW0pXG5cdFx0XHRcdFx0XHRjYjEoKVxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdGNiMSA9PiBBbmFseXNlci5nZXREYXRhSW5mbyhncm91cGVkLmRyaXZlciwgZHJpdmVyRGF0YSwgc3VtID0+IHtcblx0XHRcdFx0XHRcdHN1bW1hcmllcy5wdXNoKHN1bSlcblx0XHRcdFx0XHRcdGNiMSgpXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0Y2IxID0+IEFuYWx5c2VyLmdldERhdGFJbmZvKGdyb3VwZWQudHJhY2ssIHRyYWNrRGF0YSwgc3VtID0+IHtcblx0XHRcdFx0XHRcdHN1bW1hcmllcy5wdXNoKHN1bSlcblx0XHRcdFx0XHRcdGNiMSgpXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XSwgKCkgPT4ge1xuXHRcdFx0XHRcdGNiKF8uZmxhdHRlbihzdW1tYXJpZXMpKVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZihVdGlscy5vbmx5SW5BcnJheShrZXlzLCBbJ3RlYW0nLCAndHJhY2snXSkpIHtcblx0XHRcdFx0bGV0IHRlYW1EYXRhID0gQW5hbHlzZXIuaW5zcGVjdFRlYW1EYXRhKHdvcmRzLCB0cnVlKVxuXHRcdFx0XHRsZXQgdHJhY2tEYXRhID0gQW5hbHlzZXIuaW5zcGVjdFRyYWNrRGF0YSh3b3JkcywgdHJ1ZSlcblx0XHRcdFx0bGV0IGNvbWJvcyA9IFtdXG5cdFx0XHRcdF8uZm9yRWFjaChncm91cGVkLnRlYW0sIGQgPT4ge18uZm9yRWFjaChncm91cGVkLnRyYWNrLCB0ID0+IGNvbWJvcy5wdXNoKHt0ZWFtOiBkLCB0cmFjazogdH0pKX0pXG5cdFx0XHRcdGxldCBzdW1tYXJpZXMgPSBbXVxuXHRcdFx0XHRyZXR1cm4gYXN5bmMucGFyYWxsZWwoW1xuXHRcdFx0XHRcdGNiMSA9PiBBbmFseXNlci5nZXREYXRhSW5mbyhjb21ib3MsIFsndGVhbUF0dGVuZGFuY2VCeVRyYWNrJ10sIHN1bSA9PiB7XG5cdFx0XHRcdFx0XHRzdW1tYXJpZXMucHVzaChzdW0pXG5cdFx0XHRcdFx0XHRjYjEoKVxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdGNiMSA9PiBBbmFseXNlci5nZXREYXRhSW5mbyhncm91cGVkLnRlYW0sIHRlYW1EYXRhLCBzdW0gPT4ge1xuXHRcdFx0XHRcdFx0c3VtbWFyaWVzLnB1c2goc3VtKVxuXHRcdFx0XHRcdFx0Y2IxKClcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRjYjEgPT4gQW5hbHlzZXIuZ2V0RGF0YUluZm8oZ3JvdXBlZC50cmFjaywgdHJhY2tEYXRhLCBzdW0gPT4ge1xuXHRcdFx0XHRcdFx0c3VtbWFyaWVzLnB1c2goc3VtKVxuXHRcdFx0XHRcdFx0Y2IxKClcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRdLCAoKSA9PiB7XG5cdFx0XHRcdFx0Y2IoXy5mbGF0dGVuKHN1bW1hcmllcykpXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmKFV0aWxzLm9ubHlJbkFycmF5KGtleXMsIFsnZHJpdmVyJywgJ3RlYW0nLCAndHJhY2snXSkpIHtcblx0XHRcdFx0bGV0IGRyaXZlckRhdGEgPSBBbmFseXNlci5pbnNwZWN0RHJpdmVyRGF0YSh3b3JkcywgdHJ1ZSlcblx0XHRcdFx0bGV0IHRlYW1EYXRhID0gQW5hbHlzZXIuaW5zcGVjdFRlYW1EYXRhKHdvcmRzLCB0cnVlKVxuXHRcdFx0XHRsZXQgdHJhY2tEYXRhID0gQW5hbHlzZXIuaW5zcGVjdFRyYWNrRGF0YSh3b3JkcywgdHJ1ZSlcblx0XHRcdFx0bGV0IGNvbWJvcyA9IFtdXG5cdFx0XHRcdF8uZm9yRWFjaChncm91cGVkLmRyaXZlciwgZCA9PiB7Xy5mb3JFYWNoKGdyb3VwZWQudGVhbSwgdCA9PiB7Xy5mb3JFYWNoKGdyb3VwZWQudHJhY2ssIHRyID0+IGNvbWJvcy5wdXNoKHtkcml2ZXI6IGQsIHRlYW06IHQsIHRyYWNrOiB0cn0pKX0pfSlcblx0XHRcdFx0bGV0IHN1bW1hcmllcyA9IFtdXG5cdFx0XHRcdHJldHVybiBhc3luYy5wYXJhbGxlbChbXG5cdFx0XHRcdFx0Y2IxID0+IEFuYWx5c2VyLmdldERhdGFJbmZvKGNvbWJvcywgWydkcml2ZXJSYWNlUmVzdWx0c0J5VGVhbUFuZFRyYWNrJ10sIHN1bSA9PiB7XG5cdFx0XHRcdFx0XHRzdW1tYXJpZXMucHVzaChzdW0pXG5cdFx0XHRcdFx0XHRjYjEoKVxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdGNiMSA9PiBBbmFseXNlci5nZXREYXRhSW5mbyhncm91cGVkLmRyaXZlciwgZHJpdmVyRGF0YSwgc3VtID0+IHtcblx0XHRcdFx0XHRcdHN1bW1hcmllcy5wdXNoKHN1bSlcblx0XHRcdFx0XHRcdGNiMSgpXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0Y2IxID0+IEFuYWx5c2VyLmdldERhdGFJbmZvKGdyb3VwZWQudGVhbSwgdGVhbURhdGEsIHN1bSA9PiB7XG5cdFx0XHRcdFx0XHRzdW1tYXJpZXMucHVzaChzdW0pXG5cdFx0XHRcdFx0XHRjYjEoKVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdF0sICgpID0+IHtcblx0XHRcdFx0XHRjYihfLmZsYXR0ZW4oc3VtbWFyaWVzKSlcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYod29yZHMubGVuZ3RoKSB7XG5cdFx0XHRcdGlmKFV0aWxzLm9ubHlJbkFycmF5KHdvcmRzLCBbJ25leHQnXSkpIHJldHVybiBBbmFseXNlci5nZXREYXRhSW5mbyhbJ2N1cnJlbnQnXSwgWyduZXh0UmFjZSddLCBjYilcblx0XHRcdFx0ZWxzZSBpZihVdGlscy5vbmVPZkNvbWJpbmF0aW9ucyh3b3JkcywgWydjdXJyZW50JywgJ3NlYXNvbicsICdzdW1tYXJ5J10sIFsnY3VycmVudCcsICdzdW1tYXJ5J10pKSByZXR1cm4gQW5hbHlzZXIuZ2V0RGF0YUluZm8oWydjdXJyZW50J10sIFsnbmV4dFJhY2UnLCAncmFjZUNhbGVuZGFyJywnZHJpdmVyU3RhbmRpbmdzJywgJ2NvbnN0cnVjdG9yU3RhbmRpbmdzJ10sIGNiKVxuXHRcdFx0XHRlbHNlIGlmKFV0aWxzLm9uZU9mQ29tYmluYXRpb25zKHdvcmRzLCBbJ2N1cnJlbnQnLCAnc2Vhc29uJywgJ3N0YW5kaW5nJywgJ2RyaXZlciddLCBbJ2N1cnJlbnQnLCAnc3RhbmRpbmcnLCAnZHJpdmVyJ10pKSByZXR1cm4gQW5hbHlzZXIuZ2V0RGF0YUluZm8oWydjdXJyZW50J10sIFsnZHJpdmVyU3RhbmRpbmdzJ10sIGNiKVxuXHRcdFx0XHRlbHNlIGlmKFV0aWxzLm9uZU9mQ29tYmluYXRpb25zKHdvcmRzLCBbJ2N1cnJlbnQnLCAnc2Vhc29uJywgJ3N0YW5kaW5nJywgJ3RlYW0nXSwgWydjdXJyZW50JywgJ3N0YW5kaW5nJywgJ3RlYW0nXSkpIHJldHVybiBBbmFseXNlci5nZXREYXRhSW5mbyhbJ2N1cnJlbnQnXSwgWydjb25zdHJ1Y3RvclN0YW5kaW5ncyddLCBjYilcblx0XHRcdFx0ZWxzZSBpZihVdGlscy5vbmVPZkNvbWJpbmF0aW9ucyh3b3JkcywgWydjdXJyZW50JywgJ3NlYXNvbicsICdzdGFuZGluZyddLCBbJ2N1cnJlbnQnLCAnc3RhbmRpbmcnXSkpIHJldHVybiBBbmFseXNlci5nZXREYXRhSW5mbyhbJ2N1cnJlbnQnXSwgWydkcml2ZXJTdGFuZGluZ3MnLCAnY29uc3RydWN0b3JTdGFuZGluZ3MnXSwgY2IpXG5cdFx0XHRcdGVsc2UgaWYoVXRpbHMub25lT2ZDb21iaW5hdGlvbnMod29yZHMsIFsnY3VycmVudCcsICdzZWFzb24nLCAnY2FsZW5kYXInXSwgWydjdXJyZW50JywgJ2NhbGVuZGFyJ10pKSByZXR1cm4gQW5hbHlzZXIuZ2V0RGF0YUluZm8oWydjdXJyZW50J10sIFsncmFjZUNhbGVuZGFyJ10sIGNiKVxuXHRcdFx0XHRlbHNlIGlmKF8uaW5kZXhPZih3b3JkcywgJ2N1cnJlbnQnKT4tMSkge1xuXHRcdFx0XHRcdGxldCBhcGlEYXRhID0gW11cblx0XHRcdFx0XHRpZihfLmluZGV4T2Yod29yZHMsICduZXh0Jyk+LTEpIGFwaURhdGEucHVzaCgnbmV4dFJhY2UnKVxuXHRcdFx0XHRcdGlmKF8uaW5kZXhPZih3b3JkcywgJ3N0YW5kaW5nJyk+LTEgJiYgXy5pbmRleE9mKHdvcmRzLCAnZHJpdmVyJyk9PS0xICYmIF8uaW5kZXhPZih3b3JkcywgJ3RlYW0nKT09LTEpIGFwaURhdGEucHVzaChbJ2RyaXZlclN0YW5kaW5ncycsICdjb25zdHJ1Y3RvclN0YW5kaW5ncyddKVxuXHRcdFx0XHRcdGlmKF8uaW5kZXhPZih3b3JkcywgJ2RyaXZlcicpPi0xKSBhcGlEYXRhLnB1c2goJ2RyaXZlclN0YW5kaW5ncycpXG5cdFx0XHRcdFx0aWYoXy5pbmRleE9mKHdvcmRzLCAndGVhbScpPi0xKSBhcGlEYXRhLnB1c2goJ2NvbnN0cnVjdG9yU3RhbmRpbmdzJylcblx0XHRcdFx0XHRpZihfLmluZGV4T2Yod29yZHMsICdjYWxlbmRhcicpPi0xKSBhcGlEYXRhLnB1c2goJ3JhY2VDYWxlbmRhcicpXG5cdFx0XHRcdFx0YXBpRGF0YSA9IF8uZmxhdHRlbihhcGlEYXRhKVxuXHRcdFx0XHRcdGlmKGFwaURhdGEubGVuZ3RoKSByZXR1cm4gQW5hbHlzZXIuZ2V0RGF0YUluZm8oWydjdXJyZW50J10sIGFwaURhdGEsIGNiKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNiKFtdKVxuXHR9XG5cblx0c3RhdGljIGluc3BlY3REcml2ZXJEYXRhKHdvcmRzLCBlbXB0eSA9IGZhbHNlKSB7XG5cdFx0bGV0IGFwaURhdGEgPSBlbXB0eSA/IFtdIDogWydkcml2ZXJTZWFzb25TdGFuZGluZycsICdkcml2ZXJXb3JsZFRpdGxlcycsICdkcml2ZXJTZWFzb25GaW5pc2hlcycsICdkcml2ZXJUZWFtcyddXG5cdFx0aWYoVXRpbHMub25lT2ZDb21iaW5hdGlvbnMod29yZHMsIFsnY3VycmVudCcsICdzdGFuZGluZycsICdkcml2ZXInXSwgWydjdXJyZW50J10pKSBhcGlEYXRhID0gWydkcml2ZXJTZWFzb25TdGFuZGluZyddXG5cdFx0ZWxzZSBpZihVdGlscy5vbmVPZkNvbWJpbmF0aW9ucyh3b3JkcywgWyd0aXRsZScsICdkcml2ZXInXSwgWyd0aXRsZSddKSkgYXBpRGF0YSA9IFsnZHJpdmVyV29ybGRUaXRsZXMnXVxuXHRcdGVsc2UgaWYoVXRpbHMub25lT2ZDb21iaW5hdGlvbnMod29yZHMsIFsnc2Vhc29uJywgJ2RyaXZlcicsICdzdGFuZGluZyddLCBbJ3NlYXNvbiddKSkgYXBpRGF0YSA9IFsnZHJpdmVyU2Vhc29uRmluaXNoZXMnXVxuXHRcdGVsc2UgaWYoVXRpbHMub25lT2ZDb21iaW5hdGlvbnMod29yZHMsIFsndGVhbScsICdkcml2ZXInXSwgWyd0ZWFtJ10pKSBhcGlEYXRhID0gWydkcml2ZXJUZWFtcyddXG5cdFx0ZWxzZSB7XG5cdFx0XHRsZXQgX2FwaURhdGEgPSBbXVxuXHRcdFx0aWYoXy5pbmRleE9mKHdvcmRzLCAnY3VycmVudCcpPi0xKSBfYXBpRGF0YS5wdXNoKCdkcml2ZXJTZWFzb25TdGFuZGluZycpXG5cdFx0XHRpZihfLmluZGV4T2Yod29yZHMsICd0aXRsZScpPi0xKSBfYXBpRGF0YS5wdXNoKCdkcml2ZXJXb3JsZFRpdGxlcycpXG5cdFx0XHRpZihfLmluZGV4T2Yod29yZHMsICdzZWFzb24nKT4tMSkgX2FwaURhdGEucHVzaCgnZHJpdmVyU2Vhc29uRmluaXNoZXMnKVxuXHRcdFx0aWYoXy5pbmRleE9mKHdvcmRzLCAndGVhbScpPi0xKSBfYXBpRGF0YS5wdXNoKCdkcml2ZXJUZWFtcycpXG5cdFx0XHRhcGlEYXRhID0gX2FwaURhdGEubGVuZ3RoID8gX2FwaURhdGEgOiBhcGlEYXRhXG5cdFx0fVxuXHRcdHJldHVybiBhcGlEYXRhXG5cdH1cblxuXHRzdGF0aWMgaW5zcGVjdFRlYW1EYXRhKHdvcmRzLCBlbXB0eSA9IGZhbHNlKSB7XG5cdFx0bGV0IGFwaURhdGEgPSBlbXB0eSA/IFtdIDogWyd0ZWFtU2Vhc29uU3RhbmRpbmcnLCAndGVhbVdvcmxkVGl0bGVzJywgJ3RlYW1TZWFzb25GaW5pc2hlcycsICd0ZWFtRHJpdmVycyddXG5cdFx0aWYoVXRpbHMub25lT2ZDb21iaW5hdGlvbnMod29yZHMsIFsnY3VycmVudCcsICdzdGFuZGluZycsICd0ZWFtJ10sIFsnY3VycmVudCddKSkgYXBpRGF0YSA9IFsndGVhbVNlYXNvblN0YW5kaW5nJ11cblx0XHRlbHNlIGlmKFV0aWxzLm9uZU9mQ29tYmluYXRpb25zKHdvcmRzLCBbJ3RpdGxlJywgJ3RlYW0nXSwgWyd0aXRsZSddKSkgYXBpRGF0YSA9IFsndGVhbVdvcmxkVGl0bGVzJ11cblx0XHRlbHNlIGlmKFV0aWxzLm9uZU9mQ29tYmluYXRpb25zKHdvcmRzLCBbJ3NlYXNvbicsICd0ZWFtJywgJ3N0YW5kaW5nJ10sIFsnc2Vhc29uJ10pKSBhcGlEYXRhID0gWyd0ZWFtU2Vhc29uRmluaXNoZXMnXVxuXHRcdGVsc2UgaWYoVXRpbHMub25lT2ZDb21iaW5hdGlvbnMod29yZHMsIFsndGVhbScsICdkcml2ZXInXSwgWydkcml2ZXInXSkpIGFwaURhdGEgPSBbJ3RlYW1Ecml2ZXJzJ11cblx0XHRlbHNlIHtcblx0XHRcdGxldCBfYXBpRGF0YSA9IFtdXG5cdFx0XHRpZihfLmluZGV4T2Yod29yZHMsICdjdXJyZW50Jyk+LTEpIF9hcGlEYXRhLnB1c2goJ3RlYW1TZWFzb25TdGFuZGluZycpXG5cdFx0XHRpZihfLmluZGV4T2Yod29yZHMsICd0aXRsZScpPi0xKSBfYXBpRGF0YS5wdXNoKCd0ZWFtV29ybGRUaXRsZXMnKVxuXHRcdFx0aWYoXy5pbmRleE9mKHdvcmRzLCAnc2Vhc29uJyk+LTEpIF9hcGlEYXRhLnB1c2goJ3RlYW1TZWFzb25GaW5pc2hlcycpXG5cdFx0XHRpZihfLmluZGV4T2Yod29yZHMsICdkcml2ZXInKT4tMSkgX2FwaURhdGEucHVzaCgndGVhbURyaXZlcnMnKVxuXHRcdFx0YXBpRGF0YSA9IF9hcGlEYXRhLmxlbmd0aCA/IF9hcGlEYXRhIDogYXBpRGF0YVxuXHRcdH1cblx0XHRyZXR1cm4gYXBpRGF0YVxuXHR9XG5cblx0c3RhdGljIGluc3BlY3RUcmFja0RhdGEod29yZHMsIGVtcHR5ID0gZmFsc2UpIHtcblx0XHRsZXQgYXBpRGF0YSA9IGVtcHR5ID8gW10gOiBbJ3RyYWNrV2lubmVycyddXG5cdFx0aWYoVXRpbHMub25lT2ZDb21iaW5hdGlvbnMod29yZHMsIFsnY3VycmVudCcsICdzdGFuZGluZyddKSkgYXBpRGF0YSA9IFsnY3VycmVudFRyYWNrUmVzdWx0cyddXG5cdFx0ZWxzZSBpZighZW1wdHkgJiYgVXRpbHMub25lT2ZDb21iaW5hdGlvbnMod29yZHMsIFsnZHJpdmVyJywgJ25hdGlvbiddLCBbJ2RyaXZlciddKSkgYXBpRGF0YSA9IFsnZHJpdmVyc0J5TmF0aW9uYWxpdHknXVxuXHRcdHJldHVybiBhcGlEYXRhXG5cdH1cblxuXHRzdGF0aWMgZ2V0RGF0YUluZm8oZGF0YSwgc2VsZWN0aW9uLCBjYiwgZW50aXRpZXMgPSB0cnVlKSB7XG5cdFx0bGV0IHN1bW1hcmllcyA9IFtdXG5cdFx0YXN5bmMuZm9yRWFjaChkYXRhLCAoZCwgY2IxKSA9PiB7XG5cdFx0XHRkID0gZD09J2N1cnJlbnQnID8gbW9tZW50KCkuZm9ybWF0KCdZWVlZJykgOiBkXG5cdFx0XHRzdW1tYXJpZXMucHVzaChfLmZpbHRlcihbe1xuXHRcdFx0XHRuYW1lOiAnTmV4dCBSYWNlJywgdHlwZTogJ25leHRSYWNlJ1xuXHRcdFx0fSwge1xuXHRcdFx0XHRuYW1lOiBgJHtkfSBSYWNlIENhbGVuZGFyYCxcblx0XHRcdFx0dHlwZTogJ3JhY2VDYWxlbmRhcicsXG5cdFx0XHRcdHllYXI6IGRcblx0XHRcdH0sIHtcblx0XHRcdFx0bmFtZTogYCR7ZH0gRHJpdmVyIFN0YW5kaW5nc2AsXG5cdFx0XHRcdHR5cGU6ICdkcml2ZXJTdGFuZGluZ3MnLFxuXHRcdFx0XHR5ZWFyOiBkXG5cdFx0XHR9LCB7XG5cdFx0XHRcdG5hbWU6IGAke2R9IENvbnN0cnVjdG9yIFN0YW5kaW5nc2AsXG5cdFx0XHRcdHR5cGU6ICdjb25zdHJ1Y3RvclN0YW5kaW5ncycsXG5cdFx0XHRcdHllYXI6IGRcblx0XHRcdH0sIHtcblx0XHRcdFx0bmFtZTogYCR7ZC5uYW1lfSdzIEN1cnJlbnQgU2Vhc29uIEluZm9gLFxuXHRcdFx0XHR0eXBlOiAnZHJpdmVyU2Vhc29uU3RhbmRpbmcnLFxuXHRcdFx0XHRkcml2ZXI6IGQuZXJnYXN0SURcblx0XHRcdH0sIHtcblx0XHRcdFx0bmFtZTogYCR7ZC5uYW1lfSdzIFdvcmxkIFRpdGxlc2AsXG5cdFx0XHRcdHR5cGU6ICdkcml2ZXJXb3JsZFRpdGxlcycsXG5cdFx0XHRcdGRyaXZlcjogZC5lcmdhc3RJRFxuXHRcdFx0fSwge1xuXHRcdFx0XHRuYW1lOiBgJHtkLm5hbWV9J3MgU2Vhc29uIEZpbmlzaGVzYCxcblx0XHRcdFx0dHlwZTogJ2RyaXZlclNlYXNvbkZpbmlzaGVzJyxcblx0XHRcdFx0ZHJpdmVyOiBkLmVyZ2FzdElEXG5cdFx0XHR9LCB7XG5cdFx0XHRcdG5hbWU6IGAke2QubmFtZX0ncyBDb25zdHJ1Y3RvcnNgLFxuXHRcdFx0XHR0eXBlOiAnZHJpdmVyVGVhbXMnLFxuXHRcdFx0XHRkcml2ZXI6IGQuZXJnYXN0SURcblx0XHRcdH0sIHtcblx0XHRcdFx0bmFtZTogYCR7ZC5uYW1lfSdzIEN1cnJlbnQgU2Vhc29uIEluZm9gLFxuXHRcdFx0XHR0eXBlOiAndGVhbVNlYXNvblN0YW5kaW5nJyxcblx0XHRcdFx0dGVhbTogZC5lcmdhc3RJRFxuXHRcdFx0fSwge1xuXHRcdFx0XHRuYW1lOiBgJHtkLm5hbWV9J3MgV29ybGQgVGl0bGVzYCxcblx0XHRcdFx0dHlwZTogJ3RlYW1Xb3JsZFRpdGxlcycsXG5cdFx0XHRcdHRlYW06IGQuZXJnYXN0SURcblx0XHRcdH0sIHtcblx0XHRcdFx0bmFtZTogYCR7ZC5uYW1lfSdzIFNlYXNvbiBGaW5pc2hlc2AsXG5cdFx0XHRcdHR5cGU6ICd0ZWFtU2Vhc29uRmluaXNoZXMnLFxuXHRcdFx0XHR0ZWFtOiBkLmVyZ2FzdElEXG5cdFx0XHR9LCB7XG5cdFx0XHRcdG5hbWU6IGAke2QubmFtZX0ncyBEcml2ZXJzYCxcblx0XHRcdFx0dHlwZTogJ3RlYW1Ecml2ZXJzJyxcblx0XHRcdFx0dGVhbTogZC5lcmdhc3RJRFxuXHRcdFx0fSwge1xuXHRcdFx0XHRuYW1lOiBgJHtkLm5hbWV9IFdpbm5lcnNgLFxuXHRcdFx0XHR0eXBlOiAndHJhY2tXaW5uZXJzJyxcblx0XHRcdFx0dHJhY2s6IGQuZXJnYXN0SURcblx0XHRcdH0sIHtcblx0XHRcdFx0bmFtZTogYERyaXZlcnNgLFxuXHRcdFx0XHR0eXBlOiAnZHJpdmVyc0J5TmF0aW9uYWxpdHknLFxuXHRcdFx0XHR0cmFjazogZC5lcmdhc3RJRFxuXHRcdFx0fSwge1xuXHRcdFx0XHRuYW1lOiBgJHttb21lbnQoKS5mb3JtYXQoJ1lZWVknKX0gJHtkLm5hbWV9IFJlc3VsdHNgLFxuXHRcdFx0XHR0eXBlOiAnY3VycmVudFRyYWNrUmVzdWx0cycsXG5cdFx0XHRcdHRyYWNrOiBkLmVyZ2FzdElEXG5cdFx0XHR9LCB7XG5cdFx0XHRcdG5hbWU6IGAke2QuZHJpdmVyID8gZC5kcml2ZXIubmFtZSA6ICcnfSBpbiAke2QudGVhbSA/IGQudGVhbS5uYW1lIDogJyd9IFJhY2UgUmVzdWx0c2AsXG5cdFx0XHRcdHR5cGU6ICdkcml2ZXJSYWNlUmVzdWx0c0J5VGVhbScsXG5cdFx0XHRcdGRyaXZlcjogZC5kcml2ZXIgPyBkLmRyaXZlci5lcmdhc3RJRCA6IG51bGwsXG5cdFx0XHRcdHRlYW06IGQudGVhbSA/IGQudGVhbS5lcmdhc3RJRCA6IG51bGxcblx0XHRcdH0sIHtcblx0XHRcdFx0bmFtZTogYCR7ZC5kcml2ZXIgPyBkLmRyaXZlci5uYW1lIDogJyd9IGluICR7ZC50cmFjayA/IGQudHJhY2submFtZSA6ICcnfSBSYWNlIFJlc3VsdHNgLFxuXHRcdFx0XHR0eXBlOiAnZHJpdmVyUmFjZVJlc3VsdHNCeVRyYWNrJyxcblx0XHRcdFx0ZHJpdmVyOiBkLmRyaXZlciA/IGQuZHJpdmVyLmVyZ2FzdElEIDogbnVsbCxcblx0XHRcdFx0dHJhY2s6IGQudHJhY2sgPyBkLnRyYWNrLmVyZ2FzdElEIDogbnVsbFxuXHRcdFx0fSwge1xuXHRcdFx0XHRuYW1lOiBgJHtkLnRlYW0gPyBkLnRlYW0ubmFtZSA6ICcnfSBpbiAke2QudHJhY2sgPyBkLnRyYWNrLm5hbWUgOiAnJ30gQXR0ZW5kYW5jZWAsXG5cdFx0XHRcdHR5cGU6ICd0ZWFtQXR0ZW5kYW5jZUJ5VHJhY2snLFxuXHRcdFx0XHR0ZWFtOiBkLnRlYW0gPyBkLnRlYW0uZXJnYXN0SUQgOiBudWxsLFxuXHRcdFx0XHR0cmFjazogZC50cmFjayA/IGQudHJhY2suZXJnYXN0SUQgOiBudWxsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdG5hbWU6IGAke2QuZHJpdmVyID8gZC5kcml2ZXIubmFtZSA6ICcnfSBpbiAke2QudGVhbSA/IGQudGVhbS5uYW1lIDogJyd9ICR7ZC50cmFjayA/IGQudHJhY2submFtZSA6ICcnfSBSYWNlIFJlc3VsdHNgLFxuXHRcdFx0XHR0eXBlOiAnZHJpdmVyUmFjZVJlc3VsdHNCeVRlYW1BbmRUcmFjaycsXG5cdFx0XHRcdGRyaXZlcjogZC5kcml2ZXIgPyBkLmRyaXZlci5lcmdhc3RJRCA6IG51bGwsXG5cdFx0XHRcdHRlYW06IGQudGVhbSA/IGQudGVhbS5lcmdhc3RJRCA6IG51bGwsXG5cdFx0XHRcdHRyYWNrOiBkLnRyYWNrID8gZC50cmFjay5lcmdhc3RJRCA6IG51bGxcblx0XHRcdH0sIHtcblx0XHRcdFx0bmFtZTogYCR7ZC5kYXRlfSAke2QuZHJpdmVyID8gZC5kcml2ZXIubmFtZSA6ICcnfSBTZWFzb24gSW5mb2AsXG5cdFx0XHRcdHR5cGU6ICdkcml2ZXJTZWFzb25TdGFuZGluZ0J5WWVhcicsXG5cdFx0XHRcdHllYXI6IGQuZGF0ZSxcblx0XHRcdFx0ZHJpdmVyOiBkLmRyaXZlciA/IGQuZHJpdmVyLmVyZ2FzdElEIDogbnVsbFxuXHRcdFx0fSwge1xuXHRcdFx0XHRuYW1lOiBgJHtkLmRhdGV9ICR7ZC5kcml2ZXIgPyBkLmRyaXZlci5uYW1lIDogJyd9IFdvcmxkIFRpdGxlYCxcblx0XHRcdFx0dHlwZTogJ2RyaXZlcldvcmxkVGl0bGVzQnlZZWFyJyxcblx0XHRcdFx0eWVhcjogZC5kYXRlLFxuXHRcdFx0XHRkcml2ZXI6IGQuZHJpdmVyID8gZC5kcml2ZXIuZXJnYXN0SUQgOiBudWxsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdG5hbWU6IGAke2QuZGF0ZX0gJHtkLmRyaXZlciA/IGQuZHJpdmVyLm5hbWUgOiAnJ30ncyBTZWFzb24gRmluaXNoZXNgLFxuXHRcdFx0XHR0eXBlOiAnZHJpdmVyU2Vhc29uRmluaXNoZXNCeVllYXInLFxuXHRcdFx0XHR5ZWFyOiBkLmRhdGUsXG5cdFx0XHRcdGRyaXZlcjogZC5kcml2ZXIgPyBkLmRyaXZlci5lcmdhc3RJRCA6IG51bGxcblx0XHRcdH0sIHtcblx0XHRcdFx0bmFtZTogYCR7ZC5kYXRlfSAke2QuZHJpdmVyID8gZC5kcml2ZXIubmFtZSA6ICcnfSdzIENvbnN0cnVjdG9yYCxcblx0XHRcdFx0dHlwZTogJ2RyaXZlclRlYW1zQnlZZWFyJyxcblx0XHRcdFx0eWVhcjogZC5kYXRlLFxuXHRcdFx0XHRkcml2ZXI6IGQuZHJpdmVyID8gZC5kcml2ZXIuZXJnYXN0SUQgOiBudWxsXG5cdFx0XHR9XSwgX2QgPT4gXy5pbmRleE9mKHNlbGVjdGlvbiwgX2QudHlwZSk+LTEpKVxuXHRcdFx0Y2IxKClcblx0XHR9LCBlcnIgPT4gY2IoXy5mbGF0dGVuKHN1bW1hcmllcyksIGVudGl0aWVzKSlcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbmFseXNlclxuIiwiZXhwb3J0IGNvbnN0IHNwZWNpYWxLZXl3b3JkcyA9IFt7XG5cdGtleTogJ2RyaXZlcicsXG5cdHdvcmRzOiBbJ2RyaXZlcicsICdkcml2ZXJzJ11cbn0sIHtcblx0a2V5OiAndGVhbScsXG5cdHdvcmRzOiBbJ2NvbnN0cnVjdG9yJywgJ2NvbnN0cnVjdG9ycycsICd0ZWFtJywgJ3RlYW1zJ11cbn0sIHtcblx0a2V5OiAnc2Vhc29uJyxcblx0d29yZHM6IFsnc2Vhc29uJywgJ3NlYXNvbnMnXVxufSwge1xuXHRrZXk6ICdzdGFuZGluZycsXG5cdHdvcmRzOiBbJ3N0YW5kaW5nJywgJ3N0YW5kaW5ncycsICdyZXN1bHQnLCAncmVzdWx0cyddXG59LCB7XG5cdGtleTogJ2NhbGVuZGFyJyxcblx0d29yZHM6IFsnY2FsZW5kYXInLCAnY2FsZW5kYXJzJywgJ3NjaGVkdWxlJywgJ3NjaGVkdWxlcicsICdzY2hlZHVsZXMnXVxufSwge1xuXHRrZXk6ICdjdXJyZW50Jyxcblx0d29yZHM6IFsnY3VycmVudCcsICdyaWdodCBub3cnLCAnY3VycmVudGx5JywgJ3RoaXMgeWVhcicsICd0aGlzIHllYXJzJywgJ3RoaXMgeWVhclxcJ3MnXVxufSwge1xuXHRrZXk6ICdzdW1tYXJ5Jyxcblx0d29yZHM6IFsnc3VtbWFyeScsICdzdW1tYXJpZXMnLCAnb3ZlcnZpZXcnLCAnb3ZlcnZpZXdzJywgJ2V2ZXJ5dGhpbmcnXVxufSwge1xuXHRrZXk6ICduZXh0Jyxcblx0d29yZHM6IFsnbmV4dCByYWNlJywgJ25leHQgcmFjZXMnLCAnbmV4dCBncCcsICduZXh0IGdyYW5kIHByaXgnLCAnbmV4dCB2ZW51ZScsICduZXh0IHZlbnVlcycsICduZXh0IGNpcmN1aXQnLCAnbmV4dCB0cmFjaycsICduZXh0IHRyYWNrcycsICduZXh0IGNpcmN1aXRzJ11cbn0sIHtcblx0a2V5OiAndGl0bGUnLFxuXHR3b3JkczogWyd0aXRsZScsICd0aXRsZXMnLCAnd29ybGQgdGl0bGUnLCAnd29ybGQgY2hhbXBpb25zaGlwJywgJ3dvcmxkIGNoYW1waW9uc2hpcHMnLCAnY2hhbXBpb24gb2YgdGhlIHdvcmxkJywgJ2NoYW1waW9uc2hpcCcsICdjaGFtcGlvbnNoaXBzJ11cbn0sIHtcblx0a2V5OiAnbmF0aW9uJyxcblx0d29yZHM6IFsnbmF0aW9uJywgJ25hdGlvbmFsaXR5JywgJ2NvdW50cnknLCAnY291bnRyaWVzJ11cbn1dXG4iLCJpbXBvcnQge0RPTX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCBNYXNvbnJ5IGZyb20gJ21hc29ucnktbGF5b3V0J1xuXG5sZXQgcXVlcnkgPSAnJ1xuXG5jbGFzcyBVdGlscyB7XG5cdHN0YXRpYyBjYXBpdGFsaXplKHN0cikge1xuXHRcdHJldHVybiBfKHN0ci5zcGxpdCgvKD89W0EtWl0pLykpLm1hcCh0eHQgPT4gdHh0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHh0LnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpKS52YWx1ZSgpLmpvaW4oJyAnKVxuXHR9XG5cblx0c3RhdGljIGZvcm1hdEVudGl0eVN0cmluZyhlKSB7XG5cdFx0aWYoZS5zdGFydHNXaXRoKCdodHRwOi8vJykgfHwgZS5zdGFydHNXaXRoKCdodHRwczovLycpKSB7XG5cdFx0XHRyZXR1cm4gRE9NLmEoe2hyZWY6IGUsIHRhcmdldDogJ19ibGFuayd9LCBlKVxuXHRcdH1cblx0XHRpZigvXihcXGR7NH0pLShcXGR7MSwyfSktKFxcZHsxLDJ9KSQvLnRlc3QoZSkpIHtcblx0XHRcdHJldHVybiBtb21lbnQoZSwgJ1lZWVktTU0tREQnKS5mb3JtYXQoJ0xMJylcblx0XHR9XG5cdFx0cmV0dXJuIGVcblx0fVxuXG5cdHN0YXRpYyBuYXR1cmFsS2V5d29yZENvbWJpbmF0aW9ucyhrZXlzKSB7XG5cdFx0bGV0IGNodW5rcyA9IGtleXMubGVuZ3RoXG5cdFx0bGV0IHJldCA9IFtdXG5cdFx0Zm9yKGxldCB4PTE7eDw9Y2h1bmtzO3grKykge1xuXHRcdFx0Zm9yKGxldCB5PTE7eTw9KGNodW5rcy14KzEpO3krKykge1xuXHRcdFx0XHRyZXQucHVzaChfLnNsaWNlKGtleXMsIHktMSwgKHktMSt4KSkuam9pbignICcpKVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmV0XG5cdH1cblxuXHRzdGF0aWMgYXJyYXlDb21iaW5hdGlvbnMoYSwgbWluID0gMSkge1xuICAgIHZhciBmbiA9IChuLCBzcmMsIGdvdCwgYWxsKSA9PiB7XG4gICAgICAgIGlmIChuID09IDApIHtcbiAgICAgICAgICAgIGlmIChnb3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGFsbFthbGwubGVuZ3RoXSA9IGdvdFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgZm9yKHZhciBqPTA7ajxzcmMubGVuZ3RoO2orKykge1xuICAgICAgICAgICAgZm4obiAtIDEsIHNyYy5zbGljZShqICsgMSksIGdvdC5jb25jYXQoW3NyY1tqXV0pLCBhbGwpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHZhciBhbGwgPSBbXVxuICAgIGZvcih2YXIgaT1taW47aTxhLmxlbmd0aDtpKyspIHtcbiAgICAgICAgZm4oaSwgYSwgW10sIGFsbClcbiAgICB9XG4gICAgYWxsLnB1c2goYSlcbiAgICByZXR1cm4gYWxsXG5cdH1cblxuXHRzdGF0aWMgb25seUluQXJyYXkoYXJyYXksIHNob3VsZEJlSW4pIHtcblx0XHRpZihhcnJheS5sZW5ndGggIT0gc2hvdWxkQmVJbi5sZW5ndGgpIHJldHVybiBmYWxzZVxuXHRcdGxldCByZXQgPSB0cnVlXG5cdFx0Xy5mb3JFYWNoKHNob3VsZEJlSW4sIHNiaSA9PiB7XG5cdFx0XHRpZihfLmluZGV4T2YoYXJyYXksIHNiaSk9PS0xKSByZXQgPSBmYWxzZVxuXHRcdH0pXG5cdFx0cmV0dXJuIHJldFxuXHR9XG5cblx0c3RhdGljIG9uZU9mQ29tYmluYXRpb25zKGFycmF5LCB3b3JkcywgaW1wb3J0YW50ID0gW10pIHtcblx0XHRsZXQgY29tYmluYXRpb25zID0gVXRpbHMuYXJyYXlDb21iaW5hdGlvbnMod29yZHMpXG5cdFx0bGV0IHJldCA9IGZhbHNlXG5cdFx0Xy5mb3JFYWNoKGNvbWJpbmF0aW9ucywgd29yZCA9PiB7XG5cdFx0XHRpZihVdGlscy5vbmx5SW5BcnJheShhcnJheSwgd29yZCkpIHtcblx0XHRcdFx0aWYoaW1wb3J0YW50Lmxlbmd0aCkge1xuXHRcdFx0XHRcdGlmKF8uaW50ZXJzZWN0aW9uKHdvcmQsIGltcG9ydGFudCkubGVuZ3RoID09IGltcG9ydGFudC5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdHJldCA9IHRydWVcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXQgPSB0cnVlXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KVxuXHRcdHJldHVybiByZXRcblx0fVxuXG5cdHN0YXRpYyBwbHVja1ZhbHVlKGRhdGEsIGtleXMpIHtcblx0XHRfLmZvckVhY2goa2V5cywgayA9PiB7XG5cdFx0XHRkYXRhID0gZGF0YVtrXVxuXHRcdFx0aWYoXy5pc0FycmF5KGRhdGEpKSBkYXRhID0gXy5maXJzdChkYXRhKVxuXHRcdH0pXG5cdFx0cmV0dXJuIGRhdGFcblx0fVxuXG5cdHN0YXRpYyByZXBvc2l0aW9uKCkge1xuXHRcdGxldCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hc29ucnlHcmlkJylcblx0XHRuZXcgTWFzb25yeShncmlkLCB7XG5cdCAgXHRpdGVtU2VsZWN0b3I6ICcuZ3JpZEl0ZW0nLFxuXHQgIFx0Y29sdW1uV2lkdGg6ICcuZ3JpZFNpemVyJyxcblx0XHQgIHBlcmNlbnRQb3NpdGlvbjogdHJ1ZVxuXHQgIH0pXG5cdH1cblxuXHRzdGF0aWMgc2V0UXVlcnkocSkge1xuXHRcdHF1ZXJ5ID0gcVxuXHR9XG5cblx0c3RhdGljIGdldFF1ZXJ5KCkge1xuXHRcdHJldHVybiBxdWVyeVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWxzXG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIHJlZDUwOiAnI2ZmZWJlZScsXG4gIHJlZDEwMDogJyNmZmNkZDInLFxuICByZWQyMDA6ICcjZWY5YTlhJyxcbiAgcmVkMzAwOiAnI2U1NzM3MycsXG4gIHJlZDQwMDogJyNlZjUzNTAnLFxuICByZWQ1MDA6ICcjZjQ0MzM2JyxcbiAgcmVkNjAwOiAnI2U1MzkzNScsXG4gIHJlZDcwMDogJyNkMzJmMmYnLFxuICByZWQ4MDA6ICcjYzYyODI4JyxcbiAgcmVkOTAwOiAnI2I3MWMxYycsXG4gIHJlZEExMDA6ICcjZmY4YTgwJyxcbiAgcmVkQTIwMDogJyNmZjUyNTInLFxuICByZWRBNDAwOiAnI2ZmMTc0NCcsXG4gIHJlZEE3MDA6ICcjZDUwMDAwJyxcblxuICBwaW5rNTA6ICcjZmNlNGVjJyxcbiAgcGluazEwMDogJyNmOGJiZDAnLFxuICBwaW5rMjAwOiAnI2Y0OGZiMScsXG4gIHBpbmszMDA6ICcjZjA2MjkyJyxcbiAgcGluazQwMDogJyNlYzQwN2EnLFxuICBwaW5rNTAwOiAnI2U5MWU2MycsXG4gIHBpbms2MDA6ICcjZDgxYjYwJyxcbiAgcGluazcwMDogJyNjMjE4NWInLFxuICBwaW5rODAwOiAnI2FkMTQ1NycsXG4gIHBpbms5MDA6ICcjODgwZTRmJyxcbiAgcGlua0ExMDA6ICcjZmY4MGFiJyxcbiAgcGlua0EyMDA6ICcjZmY0MDgxJyxcbiAgcGlua0E0MDA6ICcjZjUwMDU3JyxcbiAgcGlua0E3MDA6ICcjYzUxMTYyJyxcblxuICBwdXJwbGU1MDogJyNmM2U1ZjUnLFxuICBwdXJwbGUxMDA6ICcjZTFiZWU3JyxcbiAgcHVycGxlMjAwOiAnI2NlOTNkOCcsXG4gIHB1cnBsZTMwMDogJyNiYTY4YzgnLFxuICBwdXJwbGU0MDA6ICcjYWI0N2JjJyxcbiAgcHVycGxlNTAwOiAnIzljMjdiMCcsXG4gIHB1cnBsZTYwMDogJyM4ZTI0YWEnLFxuICBwdXJwbGU3MDA6ICcjN2IxZmEyJyxcbiAgcHVycGxlODAwOiAnIzZhMWI5YScsXG4gIHB1cnBsZTkwMDogJyM0YTE0OGMnLFxuICBwdXJwbGVBMTAwOiAnI2VhODBmYycsXG4gIHB1cnBsZUEyMDA6ICcjZTA0MGZiJyxcbiAgcHVycGxlQTQwMDogJyNkNTAwZjknLFxuICBwdXJwbGVBNzAwOiAnI2FhMDBmZicsXG5cbiAgZGVlcFB1cnBsZTUwOiAnI2VkZTdmNicsXG4gIGRlZXBQdXJwbGUxMDA6ICcjZDFjNGU5JyxcbiAgZGVlcFB1cnBsZTIwMDogJyNiMzlkZGInLFxuICBkZWVwUHVycGxlMzAwOiAnIzk1NzVjZCcsXG4gIGRlZXBQdXJwbGU0MDA6ICcjN2U1N2MyJyxcbiAgZGVlcFB1cnBsZTUwMDogJyM2NzNhYjcnLFxuICBkZWVwUHVycGxlNjAwOiAnIzVlMzViMScsXG4gIGRlZXBQdXJwbGU3MDA6ICcjNTEyZGE4JyxcbiAgZGVlcFB1cnBsZTgwMDogJyM0NTI3YTAnLFxuICBkZWVwUHVycGxlOTAwOiAnIzMxMWI5MicsXG4gIGRlZXBQdXJwbGVBMTAwOiAnI2IzODhmZicsXG4gIGRlZXBQdXJwbGVBMjAwOiAnIzdjNGRmZicsXG4gIGRlZXBQdXJwbGVBNDAwOiAnIzY1MWZmZicsXG4gIGRlZXBQdXJwbGVBNzAwOiAnIzYyMDBlYScsXG5cbiAgaW5kaWdvNTA6ICcjZThlYWY2JyxcbiAgaW5kaWdvMTAwOiAnI2M1Y2FlOScsXG4gIGluZGlnbzIwMDogJyM5ZmE4ZGEnLFxuICBpbmRpZ28zMDA6ICcjNzk4NmNiJyxcbiAgaW5kaWdvNDAwOiAnIzVjNmJjMCcsXG4gIGluZGlnbzUwMDogJyMzZjUxYjUnLFxuICBpbmRpZ282MDA6ICcjMzk0OWFiJyxcbiAgaW5kaWdvNzAwOiAnIzMwM2Y5ZicsXG4gIGluZGlnbzgwMDogJyMyODM1OTMnLFxuICBpbmRpZ285MDA6ICcjMWEyMzdlJyxcbiAgaW5kaWdvQTEwMDogJyM4YzllZmYnLFxuICBpbmRpZ29BMjAwOiAnIzUzNmRmZScsXG4gIGluZGlnb0E0MDA6ICcjM2Q1YWZlJyxcbiAgaW5kaWdvQTcwMDogJyMzMDRmZmUnLFxuXG4gIGJsdWU1MDogJyNlM2YyZmQnLFxuICBibHVlMTAwOiAnI2JiZGVmYicsXG4gIGJsdWUyMDA6ICcjOTBjYWY5JyxcbiAgYmx1ZTMwMDogJyM2NGI1ZjYnLFxuICBibHVlNDAwOiAnIzQyYTVmNScsXG4gIGJsdWU1MDA6ICcjMjE5NmYzJyxcbiAgYmx1ZTYwMDogJyMxZTg4ZTUnLFxuICBibHVlNzAwOiAnIzE5NzZkMicsXG4gIGJsdWU4MDA6ICcjMTU2NWMwJyxcbiAgYmx1ZTkwMDogJyMwZDQ3YTEnLFxuICBibHVlQTEwMDogJyM4MmIxZmYnLFxuICBibHVlQTIwMDogJyM0NDhhZmYnLFxuICBibHVlQTQwMDogJyMyOTc5ZmYnLFxuICBibHVlQTcwMDogJyMyOTYyZmYnLFxuXG4gIGxpZ2h0Qmx1ZTUwOiAnI2UxZjVmZScsXG4gIGxpZ2h0Qmx1ZTEwMDogJyNiM2U1ZmMnLFxuICBsaWdodEJsdWUyMDA6ICcjODFkNGZhJyxcbiAgbGlnaHRCbHVlMzAwOiAnIzRmYzNmNycsXG4gIGxpZ2h0Qmx1ZTQwMDogJyMyOWI2ZjYnLFxuICBsaWdodEJsdWU1MDA6ICcjMDNhOWY0JyxcbiAgbGlnaHRCbHVlNjAwOiAnIzAzOWJlNScsXG4gIGxpZ2h0Qmx1ZTcwMDogJyMwMjg4ZDEnLFxuICBsaWdodEJsdWU4MDA6ICcjMDI3N2JkJyxcbiAgbGlnaHRCbHVlOTAwOiAnIzAxNTc5YicsXG4gIGxpZ2h0Qmx1ZUExMDA6ICcjODBkOGZmJyxcbiAgbGlnaHRCbHVlQTIwMDogJyM0MGM0ZmYnLFxuICBsaWdodEJsdWVBNDAwOiAnIzAwYjBmZicsXG4gIGxpZ2h0Qmx1ZUE3MDA6ICcjMDA5MWVhJyxcblxuICBjeWFuNTA6ICcjZTBmN2ZhJyxcbiAgY3lhbjEwMDogJyNiMmViZjInLFxuICBjeWFuMjAwOiAnIzgwZGVlYScsXG4gIGN5YW4zMDA6ICcjNGRkMGUxJyxcbiAgY3lhbjQwMDogJyMyNmM2ZGEnLFxuICBjeWFuNTAwOiAnIzAwYmNkNCcsXG4gIGN5YW42MDA6ICcjMDBhY2MxJyxcbiAgY3lhbjcwMDogJyMwMDk3YTcnLFxuICBjeWFuODAwOiAnIzAwODM4ZicsXG4gIGN5YW45MDA6ICcjMDA2MDY0JyxcbiAgY3lhbkExMDA6ICcjODRmZmZmJyxcbiAgY3lhbkEyMDA6ICcjMThmZmZmJyxcbiAgY3lhbkE0MDA6ICcjMDBlNWZmJyxcbiAgY3lhbkE3MDA6ICcjMDBiOGQ0JyxcblxuICB0ZWFsNTA6ICcjZTBmMmYxJyxcbiAgdGVhbDEwMDogJyNiMmRmZGInLFxuICB0ZWFsMjAwOiAnIzgwY2JjNCcsXG4gIHRlYWwzMDA6ICcjNGRiNmFjJyxcbiAgdGVhbDQwMDogJyMyNmE2OWEnLFxuICB0ZWFsNTAwOiAnIzAwOTY4OCcsXG4gIHRlYWw2MDA6ICcjMDA4OTdiJyxcbiAgdGVhbDcwMDogJyMwMDc5NmInLFxuICB0ZWFsODAwOiAnIzAwNjk1YycsXG4gIHRlYWw5MDA6ICcjMDA0ZDQwJyxcbiAgdGVhbEExMDA6ICcjYTdmZmViJyxcbiAgdGVhbEEyMDA6ICcjNjRmZmRhJyxcbiAgdGVhbEE0MDA6ICcjMWRlOWI2JyxcbiAgdGVhbEE3MDA6ICcjMDBiZmE1JyxcblxuICBncmVlbjUwOiAnI2U4ZjVlOScsXG4gIGdyZWVuMTAwOiAnI2M4ZTZjOScsXG4gIGdyZWVuMjAwOiAnI2E1ZDZhNycsXG4gIGdyZWVuMzAwOiAnIzgxYzc4NCcsXG4gIGdyZWVuNDAwOiAnIzY2YmI2YScsXG4gIGdyZWVuNTAwOiAnIzRjYWY1MCcsXG4gIGdyZWVuNjAwOiAnIzQzYTA0NycsXG4gIGdyZWVuNzAwOiAnIzM4OGUzYycsXG4gIGdyZWVuODAwOiAnIzJlN2QzMicsXG4gIGdyZWVuOTAwOiAnIzFiNWUyMCcsXG4gIGdyZWVuQTEwMDogJyNiOWY2Y2EnLFxuICBncmVlbkEyMDA6ICcjNjlmMGFlJyxcbiAgZ3JlZW5BNDAwOiAnIzAwZTY3NicsXG4gIGdyZWVuQTcwMDogJyMwMGM4NTMnLFxuXG4gIGxpZ2h0R3JlZW41MDogJyNmMWY4ZTknLFxuICBsaWdodEdyZWVuMTAwOiAnI2RjZWRjOCcsXG4gIGxpZ2h0R3JlZW4yMDA6ICcjYzVlMWE1JyxcbiAgbGlnaHRHcmVlbjMwMDogJyNhZWQ1ODEnLFxuICBsaWdodEdyZWVuNDAwOiAnIzljY2M2NScsXG4gIGxpZ2h0R3JlZW41MDA6ICcjOGJjMzRhJyxcbiAgbGlnaHRHcmVlbjYwMDogJyM3Y2IzNDInLFxuICBsaWdodEdyZWVuNzAwOiAnIzY4OWYzOCcsXG4gIGxpZ2h0R3JlZW44MDA6ICcjNTU4YjJmJyxcbiAgbGlnaHRHcmVlbjkwMDogJyMzMzY5MWUnLFxuICBsaWdodEdyZWVuQTEwMDogJyNjY2ZmOTAnLFxuICBsaWdodEdyZWVuQTIwMDogJyNiMmZmNTknLFxuICBsaWdodEdyZWVuQTQwMDogJyM3NmZmMDMnLFxuICBsaWdodEdyZWVuQTcwMDogJyM2NGRkMTcnLFxuXG4gIGxpbWU1MDogJyNmOWZiZTcnLFxuICBsaW1lMTAwOiAnI2YwZjRjMycsXG4gIGxpbWUyMDA6ICcjZTZlZTljJyxcbiAgbGltZTMwMDogJyNkY2U3NzUnLFxuICBsaW1lNDAwOiAnI2Q0ZTE1NycsXG4gIGxpbWU1MDA6ICcjY2RkYzM5JyxcbiAgbGltZTYwMDogJyNjMGNhMzMnLFxuICBsaW1lNzAwOiAnI2FmYjQyYicsXG4gIGxpbWU4MDA6ICcjOWU5ZDI0JyxcbiAgbGltZTkwMDogJyM4Mjc3MTcnLFxuICBsaW1lQTEwMDogJyNmNGZmODEnLFxuICBsaW1lQTIwMDogJyNlZWZmNDEnLFxuICBsaW1lQTQwMDogJyNjNmZmMDAnLFxuICBsaW1lQTcwMDogJyNhZWVhMDAnLFxuXG4gIHllbGxvdzUwOiAnI2ZmZmRlNycsXG4gIHllbGxvdzEwMDogJyNmZmY5YzQnLFxuICB5ZWxsb3cyMDA6ICcjZmZmNTlkJyxcbiAgeWVsbG93MzAwOiAnI2ZmZjE3NicsXG4gIHllbGxvdzQwMDogJyNmZmVlNTgnLFxuICB5ZWxsb3c1MDA6ICcjZmZlYjNiJyxcbiAgeWVsbG93NjAwOiAnI2ZkZDgzNScsXG4gIHllbGxvdzcwMDogJyNmYmMwMmQnLFxuICB5ZWxsb3c4MDA6ICcjZjlhODI1JyxcbiAgeWVsbG93OTAwOiAnI2Y1N2YxNycsXG4gIHllbGxvd0ExMDA6ICcjZmZmZjhkJyxcbiAgeWVsbG93QTIwMDogJyNmZmZmMDAnLFxuICB5ZWxsb3dBNDAwOiAnI2ZmZWEwMCcsXG4gIHllbGxvd0E3MDA6ICcjZmZkNjAwJyxcblxuICBhbWJlcjUwOiAnI2ZmZjhlMScsXG4gIGFtYmVyMTAwOiAnI2ZmZWNiMycsXG4gIGFtYmVyMjAwOiAnI2ZmZTA4MicsXG4gIGFtYmVyMzAwOiAnI2ZmZDU0ZicsXG4gIGFtYmVyNDAwOiAnI2ZmY2EyOCcsXG4gIGFtYmVyNTAwOiAnI2ZmYzEwNycsXG4gIGFtYmVyNjAwOiAnI2ZmYjMwMCcsXG4gIGFtYmVyNzAwOiAnI2ZmYTAwMCcsXG4gIGFtYmVyODAwOiAnI2ZmOGYwMCcsXG4gIGFtYmVyOTAwOiAnI2ZmNmYwMCcsXG4gIGFtYmVyQTEwMDogJyNmZmU1N2YnLFxuICBhbWJlckEyMDA6ICcjZmZkNzQwJyxcbiAgYW1iZXJBNDAwOiAnI2ZmYzQwMCcsXG4gIGFtYmVyQTcwMDogJyNmZmFiMDAnLFxuXG4gIG9yYW5nZTUwOiAnI2ZmZjNlMCcsXG4gIG9yYW5nZTEwMDogJyNmZmUwYjInLFxuICBvcmFuZ2UyMDA6ICcjZmZjYzgwJyxcbiAgb3JhbmdlMzAwOiAnI2ZmYjc0ZCcsXG4gIG9yYW5nZTQwMDogJyNmZmE3MjYnLFxuICBvcmFuZ2U1MDA6ICcjZmY5ODAwJyxcbiAgb3JhbmdlNjAwOiAnI2ZiOGMwMCcsXG4gIG9yYW5nZTcwMDogJyNmNTdjMDAnLFxuICBvcmFuZ2U4MDA6ICcjZWY2YzAwJyxcbiAgb3JhbmdlOTAwOiAnI2U2NTEwMCcsXG4gIG9yYW5nZUExMDA6ICcjZmZkMTgwJyxcbiAgb3JhbmdlQTIwMDogJyNmZmFiNDAnLFxuICBvcmFuZ2VBNDAwOiAnI2ZmOTEwMCcsXG4gIG9yYW5nZUE3MDA6ICcjZmY2ZDAwJyxcblxuICBkZWVwT3JhbmdlNTA6ICcjZmJlOWU3JyxcbiAgZGVlcE9yYW5nZTEwMDogJyNmZmNjYmMnLFxuICBkZWVwT3JhbmdlMjAwOiAnI2ZmYWI5MScsXG4gIGRlZXBPcmFuZ2UzMDA6ICcjZmY4YTY1JyxcbiAgZGVlcE9yYW5nZTQwMDogJyNmZjcwNDMnLFxuICBkZWVwT3JhbmdlNTAwOiAnI2ZmNTcyMicsXG4gIGRlZXBPcmFuZ2U2MDA6ICcjZjQ1MTFlJyxcbiAgZGVlcE9yYW5nZTcwMDogJyNlNjRhMTknLFxuICBkZWVwT3JhbmdlODAwOiAnI2Q4NDMxNScsXG4gIGRlZXBPcmFuZ2U5MDA6ICcjYmYzNjBjJyxcbiAgZGVlcE9yYW5nZUExMDA6ICcjZmY5ZTgwJyxcbiAgZGVlcE9yYW5nZUEyMDA6ICcjZmY2ZTQwJyxcbiAgZGVlcE9yYW5nZUE0MDA6ICcjZmYzZDAwJyxcbiAgZGVlcE9yYW5nZUE3MDA6ICcjZGQyYzAwJyxcblxuICBicm93bjUwOiAnI2VmZWJlOScsXG4gIGJyb3duMTAwOiAnI2Q3Y2NjOCcsXG4gIGJyb3duMjAwOiAnI2JjYWFhNCcsXG4gIGJyb3duMzAwOiAnI2ExODg3ZicsXG4gIGJyb3duNDAwOiAnIzhkNmU2MycsXG4gIGJyb3duNTAwOiAnIzc5NTU0OCcsXG4gIGJyb3duNjAwOiAnIzZkNGM0MScsXG4gIGJyb3duNzAwOiAnIzVkNDAzNycsXG4gIGJyb3duODAwOiAnIzRlMzQyZScsXG4gIGJyb3duOTAwOiAnIzNlMjcyMycsXG5cbiAgYmx1ZUdyZXk1MDogJyNlY2VmZjEnLFxuICBibHVlR3JleTEwMDogJyNjZmQ4ZGMnLFxuICBibHVlR3JleTIwMDogJyNiMGJlYzUnLFxuICBibHVlR3JleTMwMDogJyM5MGE0YWUnLFxuICBibHVlR3JleTQwMDogJyM3ODkwOWMnLFxuICBibHVlR3JleTUwMDogJyM2MDdkOGInLFxuICBibHVlR3JleTYwMDogJyM1NDZlN2EnLFxuICBibHVlR3JleTcwMDogJyM0NTVhNjQnLFxuICBibHVlR3JleTgwMDogJyMzNzQ3NGYnLFxuICBibHVlR3JleTkwMDogJyMyNjMyMzgnLFxuXG4gIGdyZXk1MDogJyNmYWZhZmEnLFxuICBncmV5MTAwOiAnI2Y1ZjVmNScsXG4gIGdyZXkyMDA6ICcjZWVlZWVlJyxcbiAgZ3JleTMwMDogJyNlMGUwZTAnLFxuICBncmV5NDAwOiAnI2JkYmRiZCcsXG4gIGdyZXk1MDA6ICcjOWU5ZTllJyxcbiAgZ3JleTYwMDogJyM3NTc1NzUnLFxuICBncmV5NzAwOiAnIzYxNjE2MScsXG4gIGdyZXk4MDA6ICcjNDI0MjQyJyxcbiAgZ3JleTkwMDogJyMyMTIxMjEnLFxuXG4gIGJsYWNrOiAnIzAwMDAwMCcsXG4gIHdoaXRlOiAnI2ZmZmZmZicsXG5cbiAgdHJhbnNwYXJlbnQ6ICdyZ2JhKDAsIDAsIDAsIDApJyxcbiAgZnVsbEJsYWNrOiAncmdiYSgwLCAwLCAwLCAxKScsXG4gIGRhcmtCbGFjazogJ3JnYmEoMCwgMCwgMCwgMC44NyknLFxuICBsaWdodEJsYWNrOiAncmdiYSgwLCAwLCAwLCAwLjU0KScsXG4gIG1pbkJsYWNrOiAncmdiYSgwLCAwLCAwLCAwLjI2KScsXG4gIGZhaW50QmxhY2s6ICdyZ2JhKDAsIDAsIDAsIDAuMTIpJyxcbiAgZnVsbFdoaXRlOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXG4gIGRhcmtXaGl0ZTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC44NyknLFxuICBsaWdodFdoaXRlOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0KSdcbn1cbiIsImltcG9ydCAkIGZyb20gJ3N1cGVyYWdlbnQnXG5cbmNsYXNzIEVudGl0eVNlcnZpY2Uge1xuXHRzdGF0aWMgZ2V0RW50aXR5KGVudGl0eSwgY2IpIHtcblx0XHQkLnBvc3QoJy9haS9lbnRpdHknKVxuXHRcdC5zZW5kKGVudGl0eSlcblx0XHQuZW5kKChlcnIsIHJlcykgPT4ge1xuXHRcdFx0Y2IoZXJyLCByZXMpXG5cdFx0fSlcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbnRpdHlTZXJ2aWNlXG4iLCJpbXBvcnQgJCBmcm9tICdzdXBlcmFnZW50J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IGFzeW5jIGZyb20gJ2FzeW5jJ1xuXG5jbGFzcyBGMVNlcnZpY2Uge1xuXHRzdGF0aWMgZ2V0RW50aXR5KGVudGl0eSwgY2IpIHtcblx0XHRsZXQgdHlwZSA9ICdkcml2ZXJzJ1xuXHRcdGlmKGVudGl0eS50eXBlID09ICd0cmFjaycpIHtcblx0XHRcdHR5cGUgPSAnY2lyY3VpdHMnXG5cdFx0fSBlbHNlIGlmKGVudGl0eS50eXBlID09ICd0ZWFtJykge1xuXHRcdFx0dHlwZSA9ICdjb25zdHJ1Y3RvcnMnXG5cdFx0fVxuXHRcdCQuZ2V0KGBodHRwOi8vZXJnYXN0LmNvbS9hcGkvZjEvJHt0eXBlfS8ke2VudGl0eS5lcmdhc3RJRH0uanNvbj9saW1pdD0xMDAwYClcblx0XHQuZW5kKChlcnIsIHJlcykgPT4ge1xuXHRcdFx0aWYoZXJyKSByZXR1cm4gY2IoZXJyKVxuXHRcdFx0aWYoZW50aXR5LnR5cGU9PSdkcml2ZXInKSB7XG5cdFx0XHRcdGxldCBkYXRhID0gcmVzLmJvZHkuTVJEYXRhLkRyaXZlclRhYmxlLkRyaXZlcnNcblx0XHRcdFx0aWYoIWRhdGEubGVuZ3RoKSByZXR1cm4gY2IodHJ1ZSlcblx0XHRcdFx0ZGF0YSA9IF8uZmlyc3QoZGF0YSlcblx0XHRcdFx0cmV0dXJuIGNiKG51bGwsIHtcblx0XHRcdFx0XHRnaXZlbk5hbWU6IHt2YWx1ZTogZGF0YS5naXZlbk5hbWUgfHwgJ24vYSd9LFxuXHRcdFx0XHRcdGZhbWlseU5hbWU6IHt2YWx1ZTogZGF0YS5mYW1pbHlOYW1lIHx8ICduL2EnfSxcblx0XHRcdFx0XHRjb2RlOiB7dmFsdWU6IGRhdGEuY29kZSB8fCAnbi9hJ30sXG5cdFx0XHRcdFx0ZGF0ZU9mQmlydGg6IHt2YWx1ZTogZGF0YS5kYXRlT2ZCaXJ0aCB8fCAnbi9hJ30sXG5cdFx0XHRcdFx0bmF0aW9uYWxpdHk6IHt2YWx1ZTogZGF0YS5uYXRpb25hbGl0eSB8fCAnbi9hJ30sXG5cdFx0XHRcdFx0bnVtYmVyOiB7dmFsdWU6IGRhdGEucGVybWFuZW50TnVtYmVyIHx8ICduL2EnfSxcblx0XHRcdFx0XHR1cmw6IHt2YWx1ZTogZGF0YS51cmwgfHwgJ24vYSd9XG5cdFx0XHRcdH0pXG5cdFx0XHR9IGVsc2UgaWYoZW50aXR5LnR5cGU9PSd0cmFjaycpIHtcblx0XHRcdFx0bGV0IGRhdGEgPSByZXMuYm9keS5NUkRhdGEuQ2lyY3VpdFRhYmxlLkNpcmN1aXRzXG5cdFx0XHRcdGlmKCFkYXRhLmxlbmd0aCkgcmV0dXJuIGNiKHRydWUpXG5cdFx0XHRcdGRhdGEgPSBfLmZpcnN0KGRhdGEpXG5cdFx0XHRcdHJldHVybiBjYihudWxsLCB7XG5cdFx0XHRcdFx0bmFtZToge3ZhbHVlOiBkYXRhLmNpcmN1aXROYW1lIHx8ICduL2EnfSxcblx0XHRcdFx0XHRjaXR5OiB7dmFsdWU6IGRhdGEuTG9jYXRpb24uY2l0eSB8fCAnbi9hJ30sXG5cdFx0XHRcdFx0Y291bnRyeToge3ZhbHVlOiBkYXRhLkxvY2F0aW9uLmNvdW50cnkgfHwgJ24vYSd9LFxuXHRcdFx0XHRcdHVybDoge3ZhbHVlOiBkYXRhLnVybCB8fCAnbi9hJ31cblx0XHRcdFx0fSlcblx0XHRcdH0gZWxzZSBpZihlbnRpdHkudHlwZT09J3RlYW0nKSB7XG5cdFx0XHRcdGxldCBkYXRhID0gcmVzLmJvZHkuTVJEYXRhLkNvbnN0cnVjdG9yVGFibGUuQ29uc3RydWN0b3JzXG5cdFx0XHRcdGlmKCFkYXRhLmxlbmd0aCkgcmV0dXJuIGNiKHRydWUpXG5cdFx0XHRcdGRhdGEgPSBfLmZpcnN0KGRhdGEpXG5cdFx0XHRcdHJldHVybiBjYihudWxsLCB7XG5cdFx0XHRcdFx0bmFtZToge3ZhbHVlOiBkYXRhLm5hbWUgfHwgJ24vYSd9LFxuXHRcdFx0XHRcdG5hdGlvbmFsaXR5OiB7dmFsdWU6IGRhdGEubmF0aW9uYWxpdHkgfHwgJ24vYSd9LFxuXHRcdFx0XHRcdHVybDoge3ZhbHVlOiBkYXRhLnVybCB8fCAnbi9hJ31cblx0XHRcdFx0fSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjYih0cnVlKVxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cblxuXHRzdGF0aWMgZ2V0RHJpdmVyU2Vhc29uUmVzdWx0cyh5ZWFyLCBjYikge1xuXHRcdEYxU2VydmljZS5jYWxsQXBpKGBodHRwOi8vZXJnYXN0LmNvbS9hcGkvZjEvJHt5ZWFyfS9kcml2ZXJTdGFuZGluZ3MuanNvbj9saW1pdD0xMDAwYCwgWydTdGFuZGluZ3NUYWJsZScsICdTdGFuZGluZ3NMaXN0cycsICdEcml2ZXJTdGFuZGluZ3MnXSwgY2IpXG5cdH1cblxuXHRzdGF0aWMgZ2V0VGVhbVNlYXNvblJlc3VsdHMoeWVhciwgY2IpIHtcblx0XHRGMVNlcnZpY2UuY2FsbEFwaShgaHR0cDovL2VyZ2FzdC5jb20vYXBpL2YxLyR7eWVhcn0vY29uc3RydWN0b3JTdGFuZGluZ3MuanNvbj9saW1pdD0xMDAwYCwgWydTdGFuZGluZ3NUYWJsZScsICdTdGFuZGluZ3NMaXN0cycsICdDb25zdHJ1Y3RvclN0YW5kaW5ncyddLCBjYilcblx0fVxuXG5cdHN0YXRpYyBnZXRSYWNlQ2FsZW5kYXIoeWVhciwgY2IpIHtcblx0XHRGMVNlcnZpY2UuY2FsbEFwaShgaHR0cDovL2VyZ2FzdC5jb20vYXBpL2YxLyR7eWVhcn0uanNvbj9saW1pdD0xMDAwYCwgWydSYWNlVGFibGUnLCAnUmFjZXMnXSwgY2IpXG5cdH1cblxuXHRzdGF0aWMgZ2V0RHJpdmVyUmVzdWx0c0J5U2Vhc29uKGRyaXZlciwgeWVhciwgY2IpIHtcblx0XHRGMVNlcnZpY2UuY2FsbEFwaShgaHR0cDovL2VyZ2FzdC5jb20vYXBpL2YxLyR7eWVhcn0vZHJpdmVycy8ke2RyaXZlcn0vcmVzdWx0cy5qc29uP2xpbWl0PTEwMDBgLCBbJ1JhY2VUYWJsZScsICdSYWNlcyddLCBjYilcblx0fVxuXG5cdHN0YXRpYyBnZXREcml2ZXJXb3JsZFRpdGxlcyhkcml2ZXIsIGNiKSB7XG5cdFx0RjFTZXJ2aWNlLmNhbGxBcGkoYGh0dHA6Ly9lcmdhc3QuY29tL2FwaS9mMS9kcml2ZXJzLyR7ZHJpdmVyfS9kcml2ZXJTdGFuZGluZ3MvMS9zZWFzb25zLmpzb24/bGltaXQ9MTAwMGAsIFsnU2Vhc29uVGFibGUnLCAnU2Vhc29ucyddLCBjYilcblx0fVxuXG5cdHN0YXRpYyBnZXREcml2ZXJTZWFzb25GaW5pc2hlcyhkcml2ZXIsIGNiKSB7XG5cdFx0RjFTZXJ2aWNlLmNhbGxBcGkoYGh0dHA6Ly9lcmdhc3QuY29tL2FwaS9mMS9kcml2ZXJzLyR7ZHJpdmVyfS9kcml2ZXJTdGFuZGluZ3MuanNvbj9saW1pdD0xMDAwYCwgWydTdGFuZGluZ3NUYWJsZScsICdTdGFuZGluZ3NMaXN0cyddLCBjYilcblx0fVxuXG5cdHN0YXRpYyBnZXREcml2ZXJUZWFtcyhkcml2ZXIsIGNiKSB7XG5cdFx0RjFTZXJ2aWNlLmNhbGxBcGkoYGh0dHA6Ly9lcmdhc3QuY29tL2FwaS9mMS9kcml2ZXJzLyR7ZHJpdmVyfS9jb25zdHJ1Y3RvcnMuanNvbj9saW1pdD0xMDAwYCwgWydDb25zdHJ1Y3RvclRhYmxlJywgJ0NvbnN0cnVjdG9ycyddLCBjYilcblx0fVxuXG5cdHN0YXRpYyBnZXREcml2ZXJTZWFzb25TdGFuZGluZyhkcml2ZXIsIGNiKSB7XG5cdFx0RjFTZXJ2aWNlLmNhbGxBcGkoYGh0dHA6Ly9lcmdhc3QuY29tL2FwaS9mMS9jdXJyZW50L2RyaXZlcnMvJHtkcml2ZXJ9L2RyaXZlclN0YW5kaW5ncy5qc29uP2xpbWl0PTEwMDBgLCBbJ1N0YW5kaW5nc1RhYmxlJywgJ1N0YW5kaW5nc0xpc3RzJywgJ0RyaXZlclN0YW5kaW5ncyddLCBjYilcblx0fVxuXG5cdHN0YXRpYyBnZXROZXh0UmFjZShjYikge1xuXHRcdEYxU2VydmljZS5jYWxsQXBpKGBodHRwOi8vZXJnYXN0LmNvbS9hcGkvZjEvY3VycmVudC9uZXh0Lmpzb24/bGltaXQ9MTAwMGAsIFsnUmFjZVRhYmxlJywgJ1JhY2VzJ10sIGNiKVxuXHR9XG5cblx0c3RhdGljIGdldFRlYW1TZWFzb25TdGFuZGluZyh0ZWFtLCBjYikge1xuXHRcdEYxU2VydmljZS5jYWxsQXBpKGBodHRwOi8vZXJnYXN0LmNvbS9hcGkvZjEvY3VycmVudC9jb25zdHJ1Y3RvcnMvJHt0ZWFtfS9jb25zdHJ1Y3RvclN0YW5kaW5ncy5qc29uP2xpbWl0PTEwMDBgLCBbJ1N0YW5kaW5nc1RhYmxlJywgJ1N0YW5kaW5nc0xpc3RzJywgJ0NvbnN0cnVjdG9yU3RhbmRpbmdzJ10sIGNiKVxuXHR9XG5cblx0c3RhdGljIGdldFRlYW1Xb3JsZFRpdGxlcyh0ZWFtLCBjYikge1xuXHRcdEYxU2VydmljZS5jYWxsQXBpKGBodHRwOi8vZXJnYXN0LmNvbS9hcGkvZjEvY29uc3RydWN0b3JzLyR7dGVhbX0vY29uc3RydWN0b3JTdGFuZGluZ3MvMS9zZWFzb25zLmpzb24/bGltaXQ9MTAwMGAsIFsnU2Vhc29uVGFibGUnLCAnU2Vhc29ucyddLCBjYilcblx0fVxuXG5cdHN0YXRpYyBnZXRUZWFtU2Vhc29uRmluaXNoZXModGVhbSwgY2IpIHtcblx0XHRGMVNlcnZpY2UuY2FsbEFwaShgaHR0cDovL2VyZ2FzdC5jb20vYXBpL2YxL2NvbnN0cnVjdG9ycy8ke3RlYW19L2NvbnN0cnVjdG9yU3RhbmRpbmdzLmpzb24/bGltaXQ9MTAwMGAsIFsnU3RhbmRpbmdzVGFibGUnLCAnU3RhbmRpbmdzTGlzdHMnXSwgY2IpXG5cdH1cblxuXHRzdGF0aWMgZ2V0VGVhbURyaXZlcnModGVhbSwgY2IpIHtcblx0XHRGMVNlcnZpY2UuY2FsbEFwaShgaHR0cDovL2VyZ2FzdC5jb20vYXBpL2YxL2NvbnN0cnVjdG9ycy8ke3RlYW19L2RyaXZlcnMuanNvbj9saW1pdD0xMDAwYCwgWydEcml2ZXJUYWJsZScsICdEcml2ZXJzJ10sIGNiKVxuXHR9XG5cblx0c3RhdGljIGdldFRyYWNrV2lubmVycyh0cmFjaywgY2IpIHtcblx0XHRGMVNlcnZpY2UuY2FsbEFwaShgaHR0cDovL2VyZ2FzdC5jb20vYXBpL2YxL2NpcmN1aXRzLyR7dHJhY2t9L3Jlc3VsdHMvMS5qc29uP2xpbWl0PTEwMDBgLCBbJ1JhY2VUYWJsZScsICdSYWNlcyddLCBjYilcblx0fVxuXG5cdHN0YXRpYyBnZXRDdXJyZW50VHJhY2tSZXN1bHRzKHRyYWNrLCBjYikge1xuXHRcdEYxU2VydmljZS5jYWxsQXBpKGBodHRwOi8vZXJnYXN0LmNvbS9hcGkvZjEvY3VycmVudC9jaXJjdWl0cy8ke3RyYWNrfS9yZXN1bHRzLmpzb24/bGltaXQ9MTAwMGAsIFsnUmFjZVRhYmxlJywgJ1JhY2VzJywgJ1Jlc3VsdHMnXSwgY2IpXG5cdH1cblxuXHRzdGF0aWMgZ2V0RHJpdmVyUmFjZVJlc3VsdHNCeVRlYW0oZHJpdmVyLCB0ZWFtLCBjYikge1xuXHRcdEYxU2VydmljZS5jYWxsQXBpKGBodHRwOi8vZXJnYXN0LmNvbS9hcGkvZjEvY29uc3RydWN0b3JzLyR7dGVhbX0vZHJpdmVycy8ke2RyaXZlcn0vcmVzdWx0cy5qc29uP2xpbWl0PTEwMDBgLCBbJ1JhY2VUYWJsZScsICdSYWNlcyddLCBjYilcblx0fVxuXG5cdHN0YXRpYyBnZXREcml2ZXJSYWNlUmVzdWx0c0J5VHJhY2soZHJpdmVyLCB0cmFjaywgY2IpIHtcblx0XHRGMVNlcnZpY2UuY2FsbEFwaShgaHR0cDovL2VyZ2FzdC5jb20vYXBpL2YxL2NpcmN1aXRzLyR7dHJhY2t9L2RyaXZlcnMvJHtkcml2ZXJ9L3Jlc3VsdHMuanNvbj9saW1pdD0xMDAwYCwgWydSYWNlVGFibGUnLCAnUmFjZXMnXSwgY2IpXG5cdH1cblxuXHRzdGF0aWMgZ2V0VGVhbUF0dGVuZGFuY2VCeVRyYWNrKHRlYW0sIHRyYWNrLCBjYikge1xuXHRcdEYxU2VydmljZS5jYWxsQXBpKGBodHRwOi8vZXJnYXN0LmNvbS9hcGkvZjEvY2lyY3VpdHMvJHt0cmFja30vY29uc3RydWN0b3JzLyR7dGVhbX0vcmVzdWx0cy5qc29uP2xpbWl0PTEwMDBgLCBbJ1JhY2VUYWJsZScsICdSYWNlcyddLCBjYilcblx0fVxuXG5cdHN0YXRpYyBnZXREcml2ZXJSYWNlUmVzdWx0c0J5VGVhbUFuZFRyYWNrKGRyaXZlciwgdGVhbSwgdHJhY2ssIGNiKSB7XG5cdFx0RjFTZXJ2aWNlLmNhbGxBcGkoYGh0dHA6Ly9lcmdhc3QuY29tL2FwaS9mMS9jb25zdHJ1Y3RvcnMvJHt0ZWFtfS9kcml2ZXJzLyR7ZHJpdmVyfS9jaXJjdWl0cy8ke3RyYWNrfS9yZXN1bHRzLmpzb24/bGltaXQ9MTAwMGAsIFsnUmFjZVRhYmxlJywgJ1JhY2VzJ10sIGNiKVxuXHR9XG5cblx0c3RhdGljIGdldERyaXZlclNlYXNvblN0YW5kaW5nQnlZZWFyKHllYXIsIGRyaXZlciwgY2IpIHtcblx0XHRGMVNlcnZpY2UuY2FsbEFwaShgaHR0cDovL2VyZ2FzdC5jb20vYXBpL2YxLyR7eWVhcn0vZHJpdmVycy8ke2RyaXZlcn0vZHJpdmVyU3RhbmRpbmdzLmpzb24/bGltaXQ9MTAwMGAsIFsnU3RhbmRpbmdzVGFibGUnLCAnU3RhbmRpbmdzTGlzdHMnLCAnRHJpdmVyU3RhbmRpbmdzJ10sIGNiKVxuXHR9XG5cblx0c3RhdGljIGdldERyaXZlcldvcmxkVGl0bGVzQnlZZWFyKHllYXIsIGRyaXZlciwgY2IpIHtcblx0XHRGMVNlcnZpY2UuY2FsbEFwaShgaHR0cDovL2VyZ2FzdC5jb20vYXBpL2YxLyR7eWVhcn0vZHJpdmVycy8ke2RyaXZlcn0vZHJpdmVyU3RhbmRpbmdzLzEvc2Vhc29ucy5qc29uP2xpbWl0PTEwMDBgLCBbJ1NlYXNvblRhYmxlJywgJ1NlYXNvbnMnXSwgY2IpXG5cdH1cblxuXHRzdGF0aWMgZ2V0RHJpdmVyU2Vhc29uRmluaXNoZXNCeVllYXIoeWVhciwgZHJpdmVyLCBjYikge1xuXHRcdEYxU2VydmljZS5jYWxsQXBpKGBodHRwOi8vZXJnYXN0LmNvbS9hcGkvZjEvJHt5ZWFyfS9kcml2ZXJzLyR7ZHJpdmVyfS9yZXN1bHRzLmpzb24/bGltaXQ9MTAwMGAsIFsnUmFjZVRhYmxlJywgJ1JhY2VzJ10sIGNiKVxuXHR9XG5cblx0c3RhdGljIGdldERyaXZlclRlYW1zQnlZZWFyKHllYXIsIGRyaXZlciwgY2IpIHtcblx0XHRGMVNlcnZpY2UuY2FsbEFwaShgaHR0cDovL2VyZ2FzdC5jb20vYXBpL2YxLyR7eWVhcn0vZHJpdmVycy8ke2RyaXZlcn0vY29uc3RydWN0b3JzLmpzb24/bGltaXQ9MTAwMGAsIFsnQ29uc3RydWN0b3JUYWJsZScsICdDb25zdHJ1Y3RvcnMnXSwgY2IpXG5cdH1cblxuXHRzdGF0aWMgZ2V0RHJpdmVyc0J5TmF0aW9uYWxpdHkodHJhY2ssIGNiKSB7XG5cdFx0JC5wb3N0KGAvYWkvZW50aXR5L2xpc3RgKVxuXHRcdC5zZW5kKHtuYW1lOiB0cmFja30pXG5cdFx0LmVuZCgoZXJyLCByZXMpID0+IHtcblx0XHRcdGlmKGVyciB8fCAhcmVzLmJvZHkucmVzdWx0cy5iaW5kaW5ncy5sZW5ndGgpIHJldHVybiBjYih0cnVlKVxuXHRcdFx0Y2IobnVsbCwgcmVzLmJvZHkucmVzdWx0cy5iaW5kaW5ncylcblx0XHR9KVxuXHR9XG5cblx0c3RhdGljIGNhbGxBcGkobGluaywga2V5cywgY2IpIHtcblx0XHQkLmdldChsaW5rKVxuXHRcdC5lbmQoKGVyciwgcmVzKSA9PiB7XG5cdFx0XHRpZihlcnIpIHJldHVybiBjYih0cnVlKVxuXHRcdFx0bGV0IGRhdGEgPSByZXMuYm9keS5NUkRhdGFcblx0XHRcdGFzeW5jLmZvckVhY2hTZXJpZXMoa2V5cywgKGssIGNiMSkgPT4ge1xuXHRcdFx0XHRpZighZGF0YVtrXSkgcmV0dXJuIGNiMSh0cnVlKVxuXHRcdFx0XHRkYXRhID0gZGF0YVtrXVxuXHRcdFx0XHRpZihfLmlzQXJyYXkoZGF0YSkpIHtcblx0XHRcdFx0XHRpZighZGF0YS5sZW5ndGgpIHJldHVybiBjYjEodHJ1ZSlcblx0XHRcdFx0XHRpZihfLmxhc3Qoa2V5cykhPWspIGRhdGEgPSBfLmZpcnN0KGRhdGEpXG5cdFx0XHRcdH1cblx0XHRcdFx0Y2IxKClcblx0XHRcdH0sIGVyciA9PiBjYihlcnIsIGRhdGEpKVxuXHRcdH0pXG5cdH1cblxuXHRzdGF0aWMgZ2V0U3VtbWFyeShzdW1tYXJ5LCBjYikge1xuXHRcdHN3aXRjaChzdW1tYXJ5LnR5cGUpIHtcblx0XHRcdGNhc2UgJ3JhY2VDYWxlbmRhcic6XG5cdFx0XHRcdEYxU2VydmljZS5nZXRSYWNlQ2FsZW5kYXIoc3VtbWFyeS55ZWFyLCBjYilcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2RyaXZlclN0YW5kaW5ncyc6XG5cdFx0XHRcdEYxU2VydmljZS5nZXREcml2ZXJTZWFzb25SZXN1bHRzKHN1bW1hcnkueWVhciwgY2IpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdjb25zdHJ1Y3RvclN0YW5kaW5ncyc6XG5cdFx0XHRcdEYxU2VydmljZS5nZXRUZWFtU2Vhc29uUmVzdWx0cyhzdW1tYXJ5LnllYXIsIGNiKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnZHJpdmVyV29ybGRUaXRsZXMnOlxuXHRcdFx0XHRGMVNlcnZpY2UuZ2V0RHJpdmVyV29ybGRUaXRsZXMoc3VtbWFyeS5kcml2ZXIsIGNiKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnZHJpdmVyU2Vhc29uRmluaXNoZXMnOlxuXHRcdFx0XHRGMVNlcnZpY2UuZ2V0RHJpdmVyU2Vhc29uRmluaXNoZXMoc3VtbWFyeS5kcml2ZXIsIGNiKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnZHJpdmVyVGVhbXMnOlxuXHRcdFx0XHRGMVNlcnZpY2UuZ2V0RHJpdmVyVGVhbXMoc3VtbWFyeS5kcml2ZXIsIGNiKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnZHJpdmVyU2Vhc29uU3RhbmRpbmcnOlxuXHRcdFx0XHRGMVNlcnZpY2UuZ2V0RHJpdmVyU2Vhc29uU3RhbmRpbmcoc3VtbWFyeS5kcml2ZXIsIGNiKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnbmV4dFJhY2UnOlxuXHRcdFx0XHRGMVNlcnZpY2UuZ2V0TmV4dFJhY2UoY2IpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICd0ZWFtU2Vhc29uU3RhbmRpbmcnOlxuXHRcdFx0XHRGMVNlcnZpY2UuZ2V0VGVhbVNlYXNvblN0YW5kaW5nKHN1bW1hcnkudGVhbSwgY2IpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICd0ZWFtV29ybGRUaXRsZXMnOlxuXHRcdFx0XHRGMVNlcnZpY2UuZ2V0VGVhbVdvcmxkVGl0bGVzKHN1bW1hcnkudGVhbSwgY2IpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICd0ZWFtU2Vhc29uRmluaXNoZXMnOlxuXHRcdFx0XHRGMVNlcnZpY2UuZ2V0VGVhbVNlYXNvbkZpbmlzaGVzKHN1bW1hcnkudGVhbSwgY2IpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICd0ZWFtRHJpdmVycyc6XG5cdFx0XHRcdEYxU2VydmljZS5nZXRUZWFtRHJpdmVycyhzdW1tYXJ5LnRlYW0sIGNiKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAndHJhY2tXaW5uZXJzJzpcblx0XHRcdFx0RjFTZXJ2aWNlLmdldFRyYWNrV2lubmVycyhzdW1tYXJ5LnRyYWNrLCBjYilcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2N1cnJlbnRUcmFja1Jlc3VsdHMnOlxuXHRcdFx0XHRGMVNlcnZpY2UuZ2V0Q3VycmVudFRyYWNrUmVzdWx0cyhzdW1tYXJ5LnRyYWNrLCBjYilcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2RyaXZlclJhY2VSZXN1bHRzQnlUZWFtJzpcblx0XHRcdFx0RjFTZXJ2aWNlLmdldERyaXZlclJhY2VSZXN1bHRzQnlUZWFtKHN1bW1hcnkuZHJpdmVyLCBzdW1tYXJ5LnRlYW0sIGNiKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnZHJpdmVyUmFjZVJlc3VsdHNCeVRyYWNrJzpcblx0XHRcdFx0RjFTZXJ2aWNlLmdldERyaXZlclJhY2VSZXN1bHRzQnlUcmFjayhzdW1tYXJ5LmRyaXZlciwgc3VtbWFyeS50cmFjaywgY2IpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICd0ZWFtQXR0ZW5kYW5jZUJ5VHJhY2snOlxuXHRcdFx0XHRGMVNlcnZpY2UuZ2V0VGVhbUF0dGVuZGFuY2VCeVRyYWNrKHN1bW1hcnkudGVhbSwgc3VtbWFyeS50cmFjaywgY2IpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdkcml2ZXJSYWNlUmVzdWx0c0J5VGVhbUFuZFRyYWNrJzpcblx0XHRcdFx0RjFTZXJ2aWNlLmdldERyaXZlclJhY2VSZXN1bHRzQnlUZWFtQW5kVHJhY2soc3VtbWFyeS5kcml2ZXIsIHN1bW1hcnkudGVhbSwgc3VtbWFyeS50cmFjaywgY2IpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdkcml2ZXJzQnlOYXRpb25hbGl0eSc6XG5cdFx0XHRcdEYxU2VydmljZS5nZXREcml2ZXJzQnlOYXRpb25hbGl0eShzdW1tYXJ5LnRyYWNrLCBjYilcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2RyaXZlclNlYXNvblN0YW5kaW5nQnlZZWFyJzpcblx0XHRcdFx0RjFTZXJ2aWNlLmdldERyaXZlclNlYXNvblN0YW5kaW5nQnlZZWFyKHN1bW1hcnkueWVhciwgc3VtbWFyeS5kcml2ZXIsIGNiKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnZHJpdmVyV29ybGRUaXRsZXNCeVllYXInOlxuXHRcdFx0XHRGMVNlcnZpY2UuZ2V0RHJpdmVyV29ybGRUaXRsZXNCeVllYXIoc3VtbWFyeS55ZWFyLCBzdW1tYXJ5LmRyaXZlciwgY2IpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdkcml2ZXJTZWFzb25GaW5pc2hlc0J5WWVhcic6XG5cdFx0XHRcdEYxU2VydmljZS5nZXREcml2ZXJTZWFzb25GaW5pc2hlc0J5WWVhcihzdW1tYXJ5LnllYXIsIHN1bW1hcnkuZHJpdmVyLCBjYilcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2RyaXZlclRlYW1zQnlZZWFyJzpcblx0XHRcdFx0RjFTZXJ2aWNlLmdldERyaXZlclRlYW1zQnlZZWFyKHN1bW1hcnkueWVhciwgc3VtbWFyeS5kcml2ZXIsIGNiKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0Y2IodHJ1ZSlcblx0XHRcdFx0YnJlYWtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgcmVzdWx0c0Zvcm1hdGVyKHR5cGUpIHtcblx0XHRzd2l0Y2godHlwZSkge1xuXHRcdFx0Y2FzZSAncmFjZUNhbGVuZGFyJzpcblx0XHRcdFx0cmV0dXJuIFt7XG5cdFx0XHRcdFx0bmFtZTogJ1JvdW5kJyxcblx0XHRcdFx0XHRrZXk6IFsncm91bmQnXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ05hbWUnLFxuXHRcdFx0XHRcdGtleTogWydyYWNlTmFtZSddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnRGF0ZScsXG5cdFx0XHRcdFx0a2V5OiBbJ2RhdGUnXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ0NpcmN1aXQnLFxuXHRcdFx0XHRcdGtleTogWydDaXJjdWl0JywgJ2NpcmN1aXROYW1lJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdDb3VudHJ5Jyxcblx0XHRcdFx0XHRrZXk6IFsnQ2lyY3VpdCcsICdMb2NhdGlvbicsICdjb3VudHJ5J11cblx0XHRcdFx0fV1cblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2RyaXZlclN0YW5kaW5ncyc6XG5cdFx0XHRcdHJldHVybiBbe1xuXHRcdFx0XHRcdG5hbWU6ICdQb3NpdGlvbicsXG5cdFx0XHRcdFx0a2V5OiBbJ3Bvc2l0aW9uJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdGaXJzdCBOYW1lJyxcblx0XHRcdFx0XHRrZXk6IFsnRHJpdmVyJywgJ2dpdmVuTmFtZSddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnTGFzdCBOYW1lJyxcblx0XHRcdFx0XHRrZXk6IFsnRHJpdmVyJywgJ2ZhbWlseU5hbWUnXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ1RlYW0nLFxuXHRcdFx0XHRcdGtleTogWydDb25zdHJ1Y3RvcnMnLCAnbmFtZSddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnUG9pbnRzJyxcblx0XHRcdFx0XHRrZXk6IFsncG9pbnRzJ11cblx0XHRcdFx0fV1cblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2NvbnN0cnVjdG9yU3RhbmRpbmdzJzpcblx0XHRcdFx0cmV0dXJuIFt7XG5cdFx0XHRcdFx0bmFtZTogJ1Bvc2l0aW9uJyxcblx0XHRcdFx0XHRrZXk6IFsncG9zaXRpb24nXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ1RlYW0nLFxuXHRcdFx0XHRcdGtleTogWydDb25zdHJ1Y3RvcicsICduYW1lJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdQb2ludHMnLFxuXHRcdFx0XHRcdGtleTogWydwb2ludHMnXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ1dpbnMnLFxuXHRcdFx0XHRcdGtleTogWyd3aW5zJ11cblx0XHRcdFx0fV1cblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2RyaXZlcldvcmxkVGl0bGVzJzpcblx0XHRcdFx0cmV0dXJuIFt7XG5cdFx0XHRcdFx0bmFtZTogJ1NlYXNvbicsXG5cdFx0XHRcdFx0a2V5OiBbJ3NlYXNvbiddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnTW9yZSBpbmZvJyxcblx0XHRcdFx0XHRrZXk6IFsndXJsJ11cblx0XHRcdFx0fV1cblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2RyaXZlclNlYXNvbkZpbmlzaGVzJzpcblx0XHRcdFx0cmV0dXJuIFt7XG5cdFx0XHRcdFx0bmFtZTogJ1NlYXNvbicsXG5cdFx0XHRcdFx0a2V5OiBbJ3NlYXNvbiddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnUG9zaXRpb24nLFxuXHRcdFx0XHRcdGtleTogWydEcml2ZXJTdGFuZGluZ3MnLCAncG9zaXRpb24nXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ1BvaW50cycsXG5cdFx0XHRcdFx0a2V5OiBbJ0RyaXZlclN0YW5kaW5ncycsICdwb2ludHMnXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ1dpbnMnLFxuXHRcdFx0XHRcdGtleTogWydEcml2ZXJTdGFuZGluZ3MnLCAnd2lucyddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnVGVhbScsXG5cdFx0XHRcdFx0a2V5OiBbJ0RyaXZlclN0YW5kaW5ncycsICdDb25zdHJ1Y3RvcnMnLCAnbmFtZSddXG5cdFx0XHRcdH1dXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdkcml2ZXJUZWFtcyc6XG5cdFx0XHRcdHJldHVybiBbe1xuXHRcdFx0XHRcdG5hbWU6ICdUZWFtJyxcblx0XHRcdFx0XHRrZXk6IFsnbmFtZSddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnTmF0aW9uYWxpdHknLFxuXHRcdFx0XHRcdGtleTogWyduYXRpb25hbGl0eSddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnTW9yZSBJbmZvJyxcblx0XHRcdFx0XHRrZXk6IFsndXJsJ11cblx0XHRcdFx0fV1cblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2RyaXZlclNlYXNvblN0YW5kaW5nJzpcblx0XHRcdFx0cmV0dXJuIFt7XG5cdFx0XHRcdFx0bmFtZTogJ1Bvc2l0aW9uJyxcblx0XHRcdFx0XHRrZXk6IFsncG9zaXRpb24nXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ1BvaW50cycsXG5cdFx0XHRcdFx0a2V5OiBbJ3BvaW50cyddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnV2lucycsXG5cdFx0XHRcdFx0a2V5OiBbJ3dpbnMnXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ1RlYW0nLFxuXHRcdFx0XHRcdGtleTogWydDb25zdHJ1Y3RvcnMnLCAnbmFtZSddXG5cdFx0XHRcdH1dXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICduZXh0UmFjZSc6XG5cdFx0XHRcdHJldHVybiBbe1xuXHRcdFx0XHRcdG5hbWU6ICdSb3VuZCcsXG5cdFx0XHRcdFx0a2V5OiBbJ3JvdW5kJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdOYW1lJyxcblx0XHRcdFx0XHRrZXk6IFsncmFjZU5hbWUnXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ0RhdGUnLFxuXHRcdFx0XHRcdGtleTogWydkYXRlJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdDaXJjdWl0Jyxcblx0XHRcdFx0XHRrZXk6IFsnQ2lyY3VpdCcsICdjaXJjdWl0TmFtZSddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnQ291bnRyeScsXG5cdFx0XHRcdFx0a2V5OiBbJ0NpcmN1aXQnLCAnTG9jYXRpb24nLCAnY291bnRyeSddXG5cdFx0XHRcdH1dXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICd0ZWFtU2Vhc29uU3RhbmRpbmcnOlxuXHRcdFx0XHRyZXR1cm4gW3tcblx0XHRcdFx0XHRuYW1lOiAnUG9zaXRpb24nLFxuXHRcdFx0XHRcdGtleTogWydwb3NpdGlvbiddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnUG9pbnRzJyxcblx0XHRcdFx0XHRrZXk6IFsncG9pbnRzJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdXaW5zJyxcblx0XHRcdFx0XHRrZXk6IFsnd2lucyddXG5cdFx0XHRcdH1dXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICd0ZWFtV29ybGRUaXRsZXMnOlxuXHRcdFx0XHRyZXR1cm4gW3tcblx0XHRcdFx0XHRuYW1lOiAnU2Vhc29uJyxcblx0XHRcdFx0XHRrZXk6IFsnc2Vhc29uJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdNb3JlIGluZm8nLFxuXHRcdFx0XHRcdGtleTogWyd1cmwnXVxuXHRcdFx0XHR9XVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAndGVhbVNlYXNvbkZpbmlzaGVzJzpcblx0XHRcdFx0cmV0dXJuIFt7XG5cdFx0XHRcdFx0bmFtZTogJ1NlYXNvbicsXG5cdFx0XHRcdFx0a2V5OiBbJ3NlYXNvbiddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnUG9zaXRpb24nLFxuXHRcdFx0XHRcdGtleTogWydDb25zdHJ1Y3RvclN0YW5kaW5ncycsICdwb3NpdGlvbiddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnUG9pbnRzJyxcblx0XHRcdFx0XHRrZXk6IFsnQ29uc3RydWN0b3JTdGFuZGluZ3MnLCAncG9pbnRzJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdXaW5zJyxcblx0XHRcdFx0XHRrZXk6IFsnQ29uc3RydWN0b3JTdGFuZGluZ3MnLCAnd2lucyddXG5cdFx0XHRcdH1dXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICd0ZWFtRHJpdmVycyc6XG5cdFx0XHRcdHJldHVybiBbe1xuXHRcdFx0XHRcdG5hbWU6ICdGaXJzdCBOYW1lJyxcblx0XHRcdFx0XHRrZXk6IFsnZ2l2ZW5OYW1lJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdMYXN0IE5hbWUnLFxuXHRcdFx0XHRcdGtleTogWydmYW1pbHlOYW1lJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdCaXJ0aCBEYXRlJyxcblx0XHRcdFx0XHRrZXk6IFsnZGF0ZU9mQmlydGgnXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ05hdGlvbmFsaXR5Jyxcblx0XHRcdFx0XHRrZXk6IFsnbmF0aW9uYWxpdHknXVxuXHRcdFx0XHR9XVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAndHJhY2tXaW5uZXJzJzpcblx0XHRcdFx0cmV0dXJuIFt7XG5cdFx0XHRcdFx0bmFtZTogJ0RhdGUnLFxuXHRcdFx0XHRcdGtleTogWydkYXRlJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdGaXJzdCBuYW1lJyxcblx0XHRcdFx0XHRrZXk6IFsnUmVzdWx0cycsICdEcml2ZXInLCAnZ2l2ZW5OYW1lJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdMYXN0IG5hbWUnLFxuXHRcdFx0XHRcdGtleTogWydSZXN1bHRzJywgJ0RyaXZlcicsICdmYW1pbHlOYW1lJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdOYXRpb25hbGl0eScsXG5cdFx0XHRcdFx0a2V5OiBbJ1Jlc3VsdHMnLCAnRHJpdmVyJywgJ25hdGlvbmFsaXR5J11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdUZWFtJyxcblx0XHRcdFx0XHRrZXk6IFsnUmVzdWx0cycsICdDb25zdHJ1Y3RvcicsICduYW1lJ11cblx0XHRcdFx0fV1cblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2N1cnJlbnRUcmFja1Jlc3VsdHMnOlxuXHRcdFx0XHRyZXR1cm4gW3tcblx0XHRcdFx0XHRuYW1lOiAnUG9zaXRpb24nLFxuXHRcdFx0XHRcdGtleTogWydwb3NpdGlvbiddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnRmlyc3QgbmFtZScsXG5cdFx0XHRcdFx0a2V5OiBbJ0RyaXZlcicsICdnaXZlbk5hbWUnXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ0xhc3QgbmFtZScsXG5cdFx0XHRcdFx0a2V5OiBbJ0RyaXZlcicsICdmYW1pbHlOYW1lJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdOYXRpb25hbGl0eScsXG5cdFx0XHRcdFx0a2V5OiBbJ0RyaXZlcicsICduYXRpb25hbGl0eSddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnVGVhbScsXG5cdFx0XHRcdFx0a2V5OiBbJ0NvbnN0cnVjdG9yJywgJ25hbWUnXVxuXHRcdFx0XHR9XVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnZHJpdmVyUmFjZVJlc3VsdHNCeVRlYW0nOlxuXHRcdFx0XHRyZXR1cm4gW3tcblx0XHRcdFx0XHRuYW1lOiAnU2Vhc29uJyxcblx0XHRcdFx0XHRrZXk6IFsnc2Vhc29uJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdSYWNlJyxcblx0XHRcdFx0XHRrZXk6IFsncmFjZU5hbWUnXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ1Bvc2l0aW9uJyxcblx0XHRcdFx0XHRrZXk6IFsnUmVzdWx0cycsICdwb3NpdGlvbiddXG5cdFx0XHRcdH1dXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdkcml2ZXJSYWNlUmVzdWx0c0J5VHJhY2snOlxuXHRcdFx0XHRyZXR1cm4gW3tcblx0XHRcdFx0XHRuYW1lOiAnU2Vhc29uJyxcblx0XHRcdFx0XHRrZXk6IFsnc2Vhc29uJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdSYWNlJyxcblx0XHRcdFx0XHRrZXk6IFsncmFjZU5hbWUnXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ1Bvc2l0aW9uJyxcblx0XHRcdFx0XHRrZXk6IFsnUmVzdWx0cycsICdwb3NpdGlvbiddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnVGVhbScsXG5cdFx0XHRcdFx0a2V5OiBbJ1Jlc3VsdHMnLCAnQ29uc3RydWN0b3InLCAnbmFtZSddXG5cdFx0XHRcdH1dXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICd0ZWFtQXR0ZW5kYW5jZUJ5VHJhY2snOlxuXHRcdFx0XHRyZXR1cm4gW3tcblx0XHRcdFx0XHRuYW1lOiAnU2Vhc29uJyxcblx0XHRcdFx0XHRrZXk6IFsnc2Vhc29uJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdSYWNlJyxcblx0XHRcdFx0XHRrZXk6IFsncmFjZU5hbWUnXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ0RhdGUnLFxuXHRcdFx0XHRcdGtleTogWydkYXRlJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdSb3VuZCcsXG5cdFx0XHRcdFx0a2V5OiBbJ3JvdW5kJ11cblx0XHRcdFx0fV1cblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2RyaXZlclJhY2VSZXN1bHRzQnlUZWFtQW5kVHJhY2snOlxuXHRcdFx0XHRyZXR1cm4gW3tcblx0XHRcdFx0XHRuYW1lOiAnU2Vhc29uJyxcblx0XHRcdFx0XHRrZXk6IFsnc2Vhc29uJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdSYWNlJyxcblx0XHRcdFx0XHRrZXk6IFsncmFjZU5hbWUnXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ1Bvc2l0aW9uJyxcblx0XHRcdFx0XHRrZXk6IFsnUmVzdWx0cycsICdwb3NpdGlvbiddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnTW9yZSBpbmZvJyxcblx0XHRcdFx0XHRrZXk6IFsndXJsJ11cblx0XHRcdFx0fV1cblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2RyaXZlcnNCeU5hdGlvbmFsaXR5Jzpcblx0XHRcdFx0cmV0dXJuIFtdXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdkcml2ZXJTZWFzb25TdGFuZGluZ0J5WWVhcic6XG5cdFx0XHRcdHJldHVybiBbe1xuXHRcdFx0XHRcdG5hbWU6ICdQb3NpdGlvbicsXG5cdFx0XHRcdFx0a2V5OiBbJ3Bvc2l0aW9uJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdQb2ludHMnLFxuXHRcdFx0XHRcdGtleTogWydwb2ludHMnXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ1dpbnMnLFxuXHRcdFx0XHRcdGtleTogWyd3aW5zJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdUZWFtJyxcblx0XHRcdFx0XHRrZXk6IFsnQ29uc3RydWN0b3JzJywgJ25hbWUnXVxuXHRcdFx0XHR9XVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnZHJpdmVyV29ybGRUaXRsZXNCeVllYXInOlxuXHRcdFx0XHRyZXR1cm4gW3tcblx0XHRcdFx0XHRuYW1lOiAnU2Vhc29uJyxcblx0XHRcdFx0XHRrZXk6IFsnc2Vhc29uJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdNb3JlIGluZm8nLFxuXHRcdFx0XHRcdGtleTogWyd1cmwnXVxuXHRcdFx0XHR9XVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnZHJpdmVyU2Vhc29uRmluaXNoZXNCeVllYXInOlxuXHRcdFx0XHRyZXR1cm4gW3tcblx0XHRcdFx0XHRuYW1lOiAnUG9zaXRpb24nLFxuXHRcdFx0XHRcdGtleTogWydSZXN1bHRzJywgJ3Bvc2l0aW9uJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdSYWNlJyxcblx0XHRcdFx0XHRrZXk6IFsncmFjZU5hbWUnXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ0RhdGUnLFxuXHRcdFx0XHRcdGtleTogWydkYXRlJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdUZWFtJyxcblx0XHRcdFx0XHRrZXk6IFsnUmVzdWx0cycsICdDb25zdHJ1Y3RvcicsICduYW1lJ11cblx0XHRcdFx0fV1cblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2RyaXZlclRlYW1zQnlZZWFyJzpcblx0XHRcdFx0cmV0dXJuIFt7XG5cdFx0XHRcdFx0bmFtZTogJ1RlYW0nLFxuXHRcdFx0XHRcdGtleTogWyduYW1lJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdOYXRpb25hbGl0eScsXG5cdFx0XHRcdFx0a2V5OiBbJ25hdGlvbmFsaXR5J11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdNb3JlIEluZm8nLFxuXHRcdFx0XHRcdGtleTogWyd1cmwnXVxuXHRcdFx0XHR9XVxuXHRcdFx0XHRicmVha1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIFtdXG5cdFx0XHRcdGJyZWFrXG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEYxU2VydmljZVxuIiwiaW1wb3J0ICQgZnJvbSAnc3VwZXJhZ2VudCdcblxuY29uc3QgdGVtcCA9IFtcblx0J0xld2lzIEhhbWlsdG9uJyxcblx0J05pY28gUm9zYmVyZycsXG5cdCdTZWJhc3RpYW4gVmV0dGVsJyxcblx0J0tpbWkgUmFpa2tvbmVuJyxcblx0J0RhbmllbCBSaWNjaWFyZG8nLFxuXHQnTWF4IFZlcnN0YXBwZW4nLFxuXHQnRmVsaXBwZSBNYXNzYScsXG5cdCdWYWx0dGVyaSBCb3R0YXMnLFxuXHQnU2VyZ2lvIFBlcmV6Jyxcblx0J05pY28gSHVsa2VuYmVyZycsXG5cdCdEYW5paWwgS3Z5YXQnLFxuXHQnQ2FybG9zIFNhaW56Jyxcblx0J1JvbWFpbiBHcm9zamVhbicsXG5cdCdGZXJuYW5kbyBBbG9uc28nLFxuXHQnSmVuc29uIEJ1dHRvbicsXG5cdCdLZXZpbiBNYWdudXNzZW4nLFxuXHQnRXN0ZWJhbiBHdXRpZXJyZXonLFxuXHQnSm9seW9uIFBhbG1lcicsXG5cdCdNYXJjdXMgRXJpY3Nzb24nLFxuXHQnUGFzY2FsIFdlaHJsZWluJyxcblx0J0ZlbGlwZSBOYXNyJyxcblx0J1JpbyBIYXJ5YW50bydcbl1cblxuY2xhc3MgU3VnZ2VzdGlvblNlcnZpY2Uge1xuXHRzdGF0aWMgZ2V0U3VnZ2VzdGlvbnMoY2IpIHtcblx0XHQkLmdldCgnL2FpL3N1Z2dlc3Rpb25zJylcblx0XHQuZW5kKChlcnIsIHJlcykgPT4ge1xuXHRcdFx0Y2IoZXJyID8gW10gOiByZXMuYm9keSlcblx0XHR9KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1Z2dlc3Rpb25TZXJ2aWNlXG4iLCJpbXBvcnQgJCBmcm9tICdzdXBlcmFnZW50J1xuXG5jbGFzcyBUZXh0QW5hbHlzaXNTZXJ2aWNlIHtcblx0c3RhdGljIGFuYWx5c2UodHh0LCBjYikge1xuXHRcdCQucG9zdChgL2FpL2FuYWx5c2VgKVxuXHRcdC5zZW5kKHt0ZXh0OiB0eHR9KVxuXHRcdC5lbmQoKGVyciwgcmVzKSA9PiB7XG5cdFx0XHRjYihlcnIsIHJlcy5ib2R5IHx8IG51bGwpXG5cdFx0fSlcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0QW5hbHlzaXNTZXJ2aWNlXG4iXX0=
