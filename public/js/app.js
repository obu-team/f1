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
				Analyser.dataCase(query, profiles, dates, function (summaries) {
					//console.log(summaries)
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
			}).uniq().value();
			var combinations = _Utils2.default.naturalKeywordCombinations(keywords);
			var words = (0, _lodash2.default)(_Keywords.specialKeywords).filter(function (sk) {
				return _lodash2.default.intersection(sk.words, combinations).length;
			}).map('key').uniq().value();
			var grouped = _lodash2.default.groupBy(profiles, 'type');
			var keys = _lodash2.default.keys(grouped);
			if (dates.length) {
				if (profiles.length) {} else {
					var apiData = ['raceCalendar', 'driverStandings', 'constructorStandings'];
					if (_Utils2.default.oneOfCombinations(words, ['season', 'standing'])) apiData = ['driverStandings', 'constructorStandings'];else if (_Utils2.default.oneOfCombinations(words, ['calendar', 'season'])) apiData = ['raceCalendar'];else if (_Utils2.default.oneOfCombinations(words, ['driver', 'standing', 'season'])) apiData = ['driverStandings'];else if (_Utils2.default.oneOfCombinations(words, ['team', 'standing', 'season'])) apiData = ['constructorStandings'];
					return Analyser.getDataInfo(dates, apiData, cb);
				}
			} else {
				if (_Utils2.default.onlyInArray(keys, ['driver'])) {
					var _apiData = ['driverSeasonStanding', 'driverWorldTitles', 'driverSeasonFinishes', 'driverTeams'];
					if (_Utils2.default.oneOfCombinations(words, ['current', 'standing', 'driver'], ['standing'])) _apiData = ['driverSeasonStanding'];else if (_Utils2.default.oneOfCombinations(words, ['title', 'driver'], ['title'])) _apiData = ['driverWorldTitles'];
					return Analyser.getDataInfo(grouped.driver, _apiData, cb);
				} else if (_Utils2.default.onlyInArray(keys, ['team'])) {} else if (_Utils2.default.onlyInArray(keys, ['track'])) {} else if (words.length) {
					if (_Utils2.default.onlyInArray(words, ['next'])) return Analyser.getDataInfo(['current'], ['nextRace'], cb);else if (_Utils2.default.oneOfCombinations(words, ['current', 'season', 'summary'], ['current', 'summary'])) return Analyser.getDataInfo(['current'], ['nextRace', 'raceCalendar', 'driverStandings', 'constructorStandings'], cb);else if (_Utils2.default.oneOfCombinations(words, ['current', 'season', 'standing'], ['current', 'standing'])) return Analyser.getDataInfo(['current'], ['driverStandings', 'constructorStandings'], cb);else if (_Utils2.default.oneOfCombinations(words, ['current', 'season', 'calendar'], ['current', 'calendar'])) return Analyser.getDataInfo(['current'], ['raceCalendar'], cb);
				}
			}
			cb([]);
		}
	}, {
		key: 'getDataInfo',
		value: function getDataInfo(data, selection, cb) {
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
				}], function (_d) {
					return _lodash2.default.indexOf(selection, _d.type) > -1;
				}));
				cb1();
			}, function (err) {
				return cb(_lodash2.default.flatten(summaries));
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
	words: ['summary', 'summaries', 'overview', 'overviews']
}, {
	key: 'next',
	words: ['next race', 'next races', 'next gp', 'next grand prix', 'next venue', 'next venues', 'next circuit', 'next track', 'next tracks', 'next circuits']
}, {
	key: 'title',
	words: ['title', 'titles', 'world title', 'world championship', 'world championships', 'champion of the world', 'championship', 'championships']
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
			_superagent2.default.get('http://ergast.com/api/f1/' + type + '/' + entity.ergastID + '.json').end(function (err, res) {
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
				default:
					cb(true);
					break;
			}
		}
	}, {
		key: 'getDriverSeasonResults',
		value: function getDriverSeasonResults(year, cb) {
			F1Service.callApi('http://ergast.com/api/f1/' + year + '/driverStandings.json', ['StandingsTable', 'StandingsLists', 'DriverStandings'], cb);
		}
	}, {
		key: 'getTeamSeasonResults',
		value: function getTeamSeasonResults(year, cb) {
			F1Service.callApi('http://ergast.com/api/f1/' + year + '/constructorStandings.json', ['StandingsTable', 'StandingsLists', 'ConstructorStandings'], cb);
		}
	}, {
		key: 'getRaceCalendar',
		value: function getRaceCalendar(year, cb) {
			F1Service.callApi('http://ergast.com/api/f1/' + year + '.json', ['RaceTable', 'Races'], cb);
		}
	}, {
		key: 'getDriverResultsBySeason',
		value: function getDriverResultsBySeason(driver, year, cb) {
			F1Service.callApi('http://ergast.com/api/f1/' + year + '/drivers/' + driver + '/results.json', ['RaceTable', 'Races'], cb);
		}
	}, {
		key: 'getDriverWorldTitles',
		value: function getDriverWorldTitles(driver, cb) {
			F1Service.callApi('http://ergast.com/api/f1/drivers/' + driver + '/driverStandings/1/seasons.json', ['SeasonTable', 'Seasons'], cb);
		}
	}, {
		key: 'getDriverSeasonFinishes',
		value: function getDriverSeasonFinishes(driver, cb) {
			F1Service.callApi('http://ergast.com/api/f1/drivers/' + driver + '/driverStandings.json', ['StandingsTable', 'StandingsLists'], cb);
		}
	}, {
		key: 'getDriverTeams',
		value: function getDriverTeams(driver, cb) {
			F1Service.callApi('http://ergast.com/api/f1/drivers/' + driver + '/constructors.json', ['ConstructorTable', 'Constructors'], cb);
		}
	}, {
		key: 'getDriverSeasonStanding',
		value: function getDriverSeasonStanding(driver, cb) {
			F1Service.callApi('http://ergast.com/api/f1/current/drivers/' + driver + '/driverStandings.json', ['StandingsTable', 'StandingsLists', 'DriverStandings'], cb);
		}
	}, {
		key: 'getNextRace',
		value: function getNextRace(cb) {
			F1Service.callApi('http://ergast.com/api/f1/current/next.json', ['RaceTable', 'Races'], cb);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJyZWFjdC9hcHAuanMiLCJyZWFjdC9jb21wb25lbnRzL0FwcC5qcyIsInJlYWN0L2NvbXBvbmVudHMvRGFzaGJvYXJkLmpzIiwicmVhY3QvY29tcG9uZW50cy9Ob3RGb3VuZC5qcyIsInJlYWN0L2NvbXBvbmVudHMvU2VhcmNoR3JpZC5qcyIsInJlYWN0L2NvbXBvbmVudHMvVUkvQ2VudGVyQ29udGFpbmVyLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9GdWxsU2NyZWVuLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9HcmlkQ29udGFpbmVyLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9Mb2FkZXIuanMiLCJyZWFjdC9jb21wb25lbnRzL1VJL01hc29ucnlHcmlkLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9OYXYuanMiLCJyZWFjdC9jb21wb25lbnRzL1VJL1BhcGVyLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9QYXBlckJ0bi5qcyIsInJlYWN0L2NvbXBvbmVudHMvVUkvUGFwZXJDb250ZW50LmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9QYXBlckhlYWRlci5qcyIsInJlYWN0L2NvbXBvbmVudHMvVUkvUGFwZXJJbWcuanMiLCJyZWFjdC9jb21wb25lbnRzL1VJL1BhcGVyTGkuanMiLCJyZWFjdC9jb21wb25lbnRzL1VJL1BhcGVyTGluZS5qcyIsInJlYWN0L2NvbXBvbmVudHMvVUkvUGFwZXJVbC5qcyIsInJlYWN0L2NvbXBvbmVudHMvVUkvUHJvZmlsZS5qcyIsInJlYWN0L2NvbXBvbmVudHMvVUkvU2VhcmNoSW5wdXQuanMiLCJyZWFjdC9jb21wb25lbnRzL1VJL1N1bW1hcnkuanMiLCJyZWFjdC9jb21wb25lbnRzL1VJL1RhYmxlLmpzIiwicmVhY3QvbGliL0FuYWx5c2VyLmpzIiwicmVhY3QvbGliL0tleXdvcmRzLmpzIiwicmVhY3QvbGliL1V0aWxzLmpzIiwicmVhY3QvbGliL2NvbG9ycy5qcyIsInJlYWN0L3NlcnZpY2VzL0VudGl0eS5TZXJ2aWNlLmpzIiwicmVhY3Qvc2VydmljZXMvRjEuU2VydmljZS5qcyIsInJlYWN0L3NlcnZpY2VzL1N1Z2dlc3Rpb24uU2VydmljZS5qcyIsInJlYWN0L3NlcnZpY2VzL1RleHRBbmFseXNpcy5TZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBSUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFKQTs7QUFNQSxzQkFDRTtBQUFBO0VBQUEsRUFBUSxvQ0FBUjtFQUNDO0FBQUE7SUFBQSxFQUFPLE1BQUssR0FBWixFQUFnQix3QkFBaEI7SUFDQyx5REFBWSw4QkFBWixHQUREO0lBRUMsb0RBQU8sTUFBSyxHQUFaLEVBQWdCLDZCQUFoQjtBQUZEO0FBREQsQ0FERixFQU9HLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQVBIOzs7Ozs7Ozs7OztBQ1hBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLFNBQVM7QUFDZCxTQUFRO0FBQ1AsY0FBWSxpQkFBTztBQURaLEVBRE07QUFJZCxLQUFJO0FBQ0gsY0FBWSwrQ0FEVDtBQUVILGtCQUFnQjtBQUZiO0FBSlUsQ0FBZjs7SUFVTSxHOzs7QUFDTCxjQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxxRkFDWixLQURZOztBQUVsQixRQUFLLEtBQUwsR0FBYTtBQUNaLFNBQU0sS0FETTtBQUVaLGdCQUFhO0FBRkQsR0FBYjtBQUZrQjtBQU1sQjs7Ozt1Q0FDb0I7QUFBQTs7QUFDcEIsd0JBQWtCLGNBQWxCLENBQWlDLGdCQUFRO0FBQ3hDLFdBQUssUUFBTCxDQUFjO0FBQ2IsV0FBTSxJQURPO0FBRWIsa0JBQWE7QUFGQSxLQUFkO0FBSUEsSUFMRDtBQU1BOzs7aUNBQ2M7QUFDZCxVQUFPO0FBQUE7SUFBQSxFQUFZLE9BQU8sQ0FBQyxPQUFPLEVB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QUcsR0FBSCxFQUFRLElBQUksSUFBSixJQUFZLElBQXBCO0FBQ0EsSUFKRDtBQUtBOzs7Ozs7a0JBR2EsbUIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7Um91dGVyLCBSb3V0ZSwgSW5kZXhSb3V0ZSwgYnJvd3Nlckhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBpbmplY3RUYXBFdmVudFBsdWdpbiBmcm9tICdyZWFjdC10YXAtZXZlbnQtcGx1Z2luJ1xuXG5pbmplY3RUYXBFdmVudFBsdWdpbigpXG5cbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCdcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi9jb21wb25lbnRzL0Rhc2hib2FyZCdcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL2NvbXBvbmVudHMvTm90Rm91bmQnXG5cbnJlbmRlcigoXG4gIDxSb3V0ZXIgaGlzdG9yeT17YnJvd3Nlckhpc3Rvcnl9PlxuICBcdDxSb3V0ZSBwYXRoPScvJyBjb21wb25lbnQ9e0FwcH0+XG4gIFx0XHQ8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0Rhc2hib2FyZH0gLz5cbiAgXHRcdDxSb3V0ZSBwYXRoPScqJyBjb21wb25lbnQ9e05vdEZvdW5kfSAvPlxuICBcdDwvUm91dGU+XG4gIDwvUm91dGVyPlxuKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmltcG9ydCBTdWdnZXN0aW9uU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9TdWdnZXN0aW9uLlNlcnZpY2UnXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2xpYi9jb2xvcnMnXG5cbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9VSS9Mb2FkZXInXG5pbXBvcnQgRnVsbFNjcmVlbiBmcm9tICcuL1VJL0Z1bGxTY3JlZW4nXG5pbXBvcnQgQ2VudGVyQ29udGFpbmVyIGZyb20gJy4vVUkvQ2VudGVyQ29udGFpbmVyJ1xuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGxvYWRlcjoge1xuXHRcdGJhY2tncm91bmQ6IGNvbG9ycy5yZWQ1MDBcblx0fSxcblx0Ymc6IHtcblx0XHRiYWNrZ3JvdW5kOiAndXJsKFxcJy9pbWcvYmcyLmpwZ1xcJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXInLFxuXHRcdGJhY2tncm91bmRTaXplOiAnY292ZXInXG5cdH1cbn1cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aW5pdDogZmFsc2UsXG5cdFx0XHRzdWdnZXN0aW9uczogW11cblx0XHR9XG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdFN1Z2dlc3Rpb25TZXJ2aWNlLmdldFN1Z2dlc3Rpb25zKGRhdGEgPT4ge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGluaXQ6IHRydWUsXG5cdFx0XHRcdHN1Z2dlc3Rpb25zOiBkYXRhXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblx0cmVuZGVyTG9hZGVyKCkge1xuXHRcdHJldHVybiA8RnVsbFNjcmVlbiBzdHlsZT17W3N0eWxlcy5iZ119PjxDZW50ZXJDb250YWluZXI+PExvYWRlciBzdHlsZT17W3N0eWxlcy5sb2FkZXJdfSAvPjwvQ2VudGVyQ29udGFpbmVyPjwvRnVsbFNjcmVlbj5cblx0fVxuXHRyZW5kZXJDb250ZW50KCkge1xuXHRcdHZhciBjaGlsZHJlbldpdGhQcm9wcyA9IFJlYWN0LkNoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCBjaGlsZCA9PiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgXHRzdWdnZXN0aW9uczogdGhpcy5zdGF0ZS5zdWdnZXN0aW9uc1xuICAgICAgICB9KSlcblx0XHRyZXR1cm4gPGRpdj57Y2hpbGRyZW5XaXRoUHJvcHN9PC9kaXY+XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGlmKCF0aGlzLnN0YXRlLmluaXQpIHtcblx0XHRcdHJldHVybiB0aGlzLnJlbmRlckxvYWRlcigpXG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnJlbmRlckNvbnRlbnQoKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShBcHApXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBhc3luYyBmcm9tICdhc3luYydcblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9saWIvY29sb3JzJ1xuaW1wb3J0IFRleHRBbmFseXNpc1NlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvVGV4dEFuYWx5c2lzLlNlcnZpY2UnXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vbGliL1V0aWxzJ1xuXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vVUkvTG9hZGVyJ1xuaW1wb3J0IEZ1bGxTY3JlZW4gZnJvbSAnLi9VSS9GdWxsU2NyZWVuJ1xuaW1wb3J0IENlbnRlckNvbnRhaW5lciBmcm9tICcuL1VJL0NlbnRlckNvbnRhaW5lcidcbmltcG9ydCBTZWFyY2hJbnB1dCBmcm9tICcuL1VJL1NlYXJjaElucHV0J1xuaW1wb3J0IFNlYXJjaEdyaWQgZnJvbSAnLi9TZWFyY2hHcmlkJ1xuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGxvZ286IHtcblx0XHRoZWlnaHQ6IDEwMFxuXHR9LFxuXHRpbnB1dDoge1xuXHRcdHdpZHRoOiA1NTAsXG5cdFx0aGVpZ2h0OiA0MCxcblx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcblx0XHRtYXJnaW5Ub3A6IDM0XG5cdH0sXG5cdGVhc2U6IHtcblx0XHR0cmFuc2l0aW9uOiAnYWxsIDAuMXMgZWFzZS1pbi1vdXQnXG5cdH0sXG5cdGJsdXI6IHtcblx0XHRmaWx0ZXI6ICdibHVyKDEwcHgpJ1xuXHR9LFxuXHRsb2FkZXI6IHtcblx0XHRjb250YWluZXI6IHtcblx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxuXHRcdFx0dG9wOiAwLFxuXHRcdFx0bGVmdDogMCxcblx0XHRcdHpJbmRleDogMTAwMDBcblx0XHR9LFxuXHRcdGxvYWRlcjoge1xuXHRcdFx0YmFja2dyb3VuZDogY29sb3JzLnJlZDUwMFxuXHRcdH1cblx0fSxcblx0Ymc6IHtcblx0XHRiYWNrZ3JvdW5kOiAndXJsKFxcJy9pbWcvYmcyLmpwZ1xcJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXInLFxuXHRcdGJhY2tncm91bmRTaXplOiAnY292ZXInXG5cdH1cbn1cblxuY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2VhcmNoOiBmYWxzZSxcblx0XHRcdG1vZGFsOiBmYWxzZSxcblx0XHRcdHNyYzogJycsXG5cdFx0XHRyZWNvbW1lbmQ6ICcnLFxuXHRcdFx0ZW50aXRpZXM6IFtdXG5cdFx0fVxuXHRcdHRoaXMub25TcmNDaGFuZ2UgPSB0aGlzLm9uU3JjQ2hhbmdlLmJpbmQodGhpcylcblx0XHR0aGlzLnNlYXJjaCA9IHRoaXMuc2VhcmNoLmJpbmQodGhpcylcblx0XHR0aGlzLm9uVGFiID0gdGhpcy5vblRhYi5iaW5kKHRoaXMpXG5cdFx0dGhpcy5vbkhvbWUgPSB0aGlzLm9uSG9tZS5iaW5kKHRoaXMpXG5cdH1cblx0b25TcmNDaGFuZ2Uodikge1xuXHRcdGxldCByZWMgPSAnJ1xuXHRcdGxldCB3b3JkcyA9IHYuc3BsaXQoJyAnKVxuXHRcdGxldCB3b3JkID0gXy5sYXN0KHdvcmRzKVxuXHRcdGlmKHdvcmQgJiYgd29yZC5sZW5ndGg+PTIpIHtcblx0XHRcdGxldCByID0gXy5maW5kKHRoaXMucHJvcHMuc3VnZ2VzdGlvbnMsIHMgPT4ge1xuXHRcdFx0XHRyZXR1cm4gcy50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgod29yZC50b0xvd2VyQ2FzZSgpKVxuXHRcdFx0fSlcblx0XHRcdHIgPSByIHx8ICcnXG5cdFx0XHRpZihyKSByZWMgPSByLnN1YnN0cmluZyh3b3JkLmxlbmd0aClcblx0XHR9XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzcmM6IHYsXG5cdFx0XHRyZWNvbW1lbmQ6IHJlY1xuXHRcdH0pXG5cdH1cblx0b25UYWIoKSB7XG5cdFx0bGV0IHtzcmMsIHJlY29tbWVuZH0gPSB0aGlzLnN0YXRlXG5cdFx0bGV0IG5ld1NyYyA9IHNyYyArIHJlY29tbWVuZFxuXHRcdFV0aWxzLnNldFF1ZXJ5KG5ld1NyYylcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHNyYzogbmV3U3JjLFxuXHRcdFx0cmVjb21tZW5kOiAnJ1xuXHRcdH0pXG5cdH1cblx0b25Ib21lKCkge1xuXHRcdFV0aWxzLnNldFF1ZXJ5KCcnKVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c2VhcmNoOiBmYWxzZSxcblx0XHRcdG1vZGFsOiBmYWxzZSxcblx0XHRcdHNyYzogJycsXG5cdFx0XHRyZWNvbW1lbmQ6ICcnLFxuXHRcdFx0ZW50aXRpZXM6IFtdXG5cdFx0fSlcblx0fVxuXHRzZWFyY2goKSB7XG5cdFx0aWYoIXRoaXMuc3RhdGUuc3JjKSByZXR1cm4gZmFsc2Vcblx0XHRsZXQgc3JjID0gdGhpcy5zdGF0ZS5zcmMgKyB0aGlzLnN0YXRlLnJlY29tbWVuZFxuXHRcdFV0aWxzLnNldFF1ZXJ5KHNyYylcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHNlYXJjaDogdHJ1ZSxcblx0XHRcdHNyYzogc3JjLFxuXHRcdFx0cmVjb21tZW5kOiAnJ1xuXHRcdH0pXG5cdFx0VGV4dEFuYWx5c2lzU2VydmljZS5hbmFseXNlKHNyYywgKGVyciwgcmVzKSA9PiB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0c2VhcmNoOiBmYWxzZSxcblx0XHRcdFx0ZW50aXRpZXM6IHJlcyxcblx0XHRcdFx0bW9kYWw6IHRydWVcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXHRyZW5kZXJGdWxsU3JjKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8RnVsbFNjcmVlbiBzdHlsZT17W3N0eWxlcy5iZ119PlxuXHRcdFx0XHQ8Q2VudGVyQ29udGFpbmVyPlxuXHRcdFx0XHRcdDxpbWcgc3JjPScvaW1nL2YxX2xvZ29fYnJpZ2h0LnBuZycgc3R5bGU9e3N0eWxlcy5sb2dvfSAvPjxici8+XG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17c3R5bGVzLmlucHV0fT48U2VhcmNoSW5wdXQgcmVjb21tZW5kPXt0aGlzLnN0YXRlLnJlY29tbWVuZH0gdmFsdWU9e3RoaXMuc3RhdGUuc3JjfSBvbkNoYW5nZT17dGhpcy5vblNyY0NoYW5nZX0gb25FbnRlcj17dGhpcy5zZWFyY2h9IG9uVGFiPXt0aGlzLm9uVGFifSAvPjwvZGl2Pjxici8+XG5cdFx0XHRcdDwvQ2VudGVyQ29udGFpbmVyPlxuXHRcdFx0PC9GdWxsU2NyZWVuPlxuXHRcdClcblx0fVxuXHRyZW5kZXJHcmlkKCkge1xuXHRcdHJldHVybiA8U2VhcmNoR3JpZCBvbkhvbWU9e3RoaXMub25Ib21lfSByZWNvbW1lbmQ9e3RoaXMuc3RhdGUucmVjb21tZW5kfSB2YWx1ZT17dGhpcy5zdGF0ZS5zcmN9IG9uQ2hhbmdlPXt0aGlzLm9uU3JjQ2hhbmdlfSBvbkVudGVyPXt0aGlzLnNlYXJjaH0gb25UYWI9e3RoaXMub25UYWJ9IGVudGl0aWVzPXt0aGlzLnN0YXRlLmVudGl0aWVzfSAvPlxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7c2VhcmNoLCBtb2RhbH0gPSB0aGlzLnN0YXRlXG5cdFx0Y29uc3QgbG9hZGVyID0gdGhpcy5zdGF0ZS5zZWFyY2ggPyA8RnVsbFNjcmVlbiBzdHlsZT17W3N0eWxlcy5sb2FkZXIuY29udGFpbmVyXX0+PENlbnRlckNvbnRhaW5lcj48TG9hZGVyIHN0eWxlPXtbc3R5bGVzLmxvYWRlci5sb2FkZXJdfSAvPjwvQ2VudGVyQ29udGFpbmVyPjwvRnVsbFNjcmVlbj4gOiBudWxsXG5cdFx0bGV0IGNudCA9IHRoaXMuc3RhdGUubW9kYWwgPyB0aGlzLnJlbmRlckdyaWQoKSA6IHRoaXMucmVuZGVyRnVsbFNyYygpXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdHtsb2FkZXJ9XG5cdFx0XHRcdDxkaXYgc3R5bGU9e1tzdHlsZXMuZWFzZSwgc2VhcmNoID8gc3R5bGVzLmJsdXIgOiBudWxsXX0+XG5cdFx0XHRcdFx0e2NudH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKERhc2hib2FyZClcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5pbXBvcnQgRnVsbFNjcmVlbiBmcm9tICcuL1VJL0Z1bGxTY3JlZW4nXG5pbXBvcnQgQ2VudGVyQ29udGFpbmVyIGZyb20gJy4vVUkvQ2VudGVyQ29udGFpbmVyJ1xuXG5jb25zdCBOb3RGb3VuZCA9IChwcm9wcykgPT4gPEZ1bGxTY3JlZW4+PENlbnRlckNvbnRhaW5lcj5Ob3QgZm91bmQ8L0NlbnRlckNvbnRhaW5lcj48L0Z1bGxTY3JlZW4+XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShOb3RGb3VuZClcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5pbXBvcnQgTmF2IGZyb20gJy4vVUkvTmF2J1xuaW1wb3J0IEdyaWRDb250YWluZXIgZnJvbSAnLi9VSS9HcmlkQ29udGFpbmVyJ1xuXG5jbGFzcyBTZWFyY2hHcmlkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxOYXYgb25Ib21lPXt0aGlzLnByb3BzLm9uSG9tZX0gcmVjb21tZW5kPXt0aGlzLnByb3BzLnJlY29tbWVuZH0gdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfSBvbkVudGVyPXt0aGlzLnByb3BzLm9uRW50ZXJ9IG9uVGFiPXt0aGlzLnByb3BzLm9uVGFifSAvPlxuXHRcdFx0XHQ8R3JpZENvbnRhaW5lciBlbnRpdGllcz17dGhpcy5wcm9wcy5lbnRpdGllc30gLz5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hHcmlkXG4iLCJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXN9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmNvbnN0IHN0eWxlID0ge1xuXHRjZW50ZXJCbG9ja1N0eWxlOiB7XG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRoZWlnaHQ6ICcxMDAlJyxcblx0XHRtYXhIZWlnaHQ6ICcxMDAlJyxcblx0XHRvdmVyZmxvdzogJ2F1dG8nLFxuXHRcdHRleHRBbGlnbjogJ2NlbnRlcidcblx0fSxcblx0Y2VudGVyQ29udGVudFN0eWxlOiB7XG5cdFx0ZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG5cdFx0dmVydGljYWxBbGlnbjogJ21pZGRsZScsXG5cdFx0Ym94U2l6aW5nOiAnYm9yZGVyLWJveCdcblx0fVxufVxuXG5jb25zdCBDZW50ZXJDb250YWluZXIgPSAocHJvcHMpID0+IDxkaXYgc3R5bGU9e1tzdHlsZS5jZW50ZXJCbG9ja1N0eWxlLCAuLi5wcm9wcy5zdHlsZV19IGlkPSdjZW50ZXJDb250ZW50Jz48ZGl2IHN0eWxlPXtbc3R5bGUuY2VudGVyQ29udGVudFN0eWxlLCAuLi5wcm9wcy5ib3hTdHlsZV19Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj48L2Rpdj5cblxuQ2VudGVyQ29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgc3R5bGU6IHt9LFxuICBib3hTdHlsZToge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKENlbnRlckNvbnRhaW5lcilcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5jb25zdCBzdHlsZSA9IHtcblx0d2lkdGg6ICcxMDAlJyxcblx0aGVpZ2h0OiAnMTAwdmgnXG59XG5cbmNvbnN0IEZ1bGxTY3JlZW4gPSAocHJvcHMpID0+IDxkaXYgc3R5bGU9e1tzdHlsZSwgLi4ucHJvcHMuc3R5bGVdfT57cHJvcHMuY2hpbGRyZW59PC9kaXY+XG5cbkZ1bGxTY3JlZW4uZGVmYXVsdFByb3BzID0ge1xuICBzdHlsZToge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKEZ1bGxTY3JlZW4pXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi9saWIvY29sb3JzJ1xuaW1wb3J0IEFuYWx5c2VyIGZyb20gJy4uLy4uL2xpYi9BbmFseXNlcidcbmltcG9ydCBVdGlscyBmcm9tICcuLi8uLi9saWIvVXRpbHMnXG5cbmltcG9ydCBNYXNvbnJ5R3JpZCBmcm9tICcuL01hc29ucnlHcmlkJ1xuaW1wb3J0IFBhcGVyIGZyb20gJy4vUGFwZXInXG5pbXBvcnQgUGFwZXJDb250ZW50IGZyb20gJy4vUGFwZXJDb250ZW50J1xuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi9Qcm9maWxlJ1xuaW1wb3J0IFN1bW1hcnkgZnJvbSAnLi9TdW1tYXJ5J1xuaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcidcbmltcG9ydCBDZW50ZXJDb250YWluZXIgZnJvbSAnLi9DZW50ZXJDb250YWluZXInXG5cbmNvbnN0IHN0eWxlcyA9IHtcblx0Y29udGFpbmVyOiB7XG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRtaW5IZWlnaHQ6ICcxMDB2aCcsXG5cdFx0Ym94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG5cdFx0cGFkZGluZzogJzgwcHggMjBweCAyMHB4IDIwcHgnLFxuXHRcdGJhY2tncm91bmQ6IGNvbG9ycy5ncmV5MjAwXG5cdH0sXG5cdG1hbnNvcnk6IHtcblx0XHRib3hTaXppbmc6ICdib3JkZXItYm94Jyxcblx0XHR3aWR0aDogJzI1JSdcblx0fSxcblx0c3VtbWFyeToge1xuXHRcdHdpZHRoOiAnNTAlJ1xuXHR9XG59XG5cbmNsYXNzIEdyaWRDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRwcm9maWxlczogW10sXG5cdFx0XHRkYXRlczogW10sXG5cdFx0XHRzdW1tYXJpZXM6IFtdLFxuXHRcdFx0ZW50aXRpZXM6IFtdLFxuXHRcdFx0bG9hZGVkOiBmYWxzZVxuXHRcdH1cblx0fVxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0dGhpcy5wYXJzZUVudGl0aWVzKHRoaXMucHJvcHMpXG5cdH1cblx0Y29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcblx0XHR0aGlzLnBhcnNlRW50aXRpZXMobmV4dFByb3BzKVxuXHR9XG5cdHBhcnNlRW50aXRpZXMocHJvcHMpIHtcblx0XHQvL2lmKCFfLmlzRXF1YWwodGhpcy5zdGF0ZS5lbnRpdGllcywgcHJvcHMuZW50aXRpZXMpKSB7XG5cdFx0XHRBbmFseXNlci5wYXJzZUVudGl0aWVzKFV0aWxzLmdldFF1ZXJ5KCksIHByb3BzLmVudGl0aWVzLCBkYXRhID0+IHRoaXMuc2V0U3RhdGUoe3Byb2ZpbGVzOiBkYXRhLnByb2ZpbGVzLCBkYXRlczogZGF0YS5kYXRlcywgc3VtbWFyaWVzOiBkYXRhLnN1bW1hcmllcywgZW50aXRpZXM6IHByb3BzLmVudGl0aWVzLCBsb2FkZWQ6IHRydWV9KSlcblx0XHQvL31cblx0fVxuXHRyZW5kZXJFbXB0eSgpIHtcblx0XHRyZXR1cm4gPE1hc29ucnlHcmlkPjxkaXYgc3R5bGU9e3N0eWxlcy5tYW5zb3J5fSBjbGFzc05hbWU9J2dyaWRJdGVtJz48UGFwZXI+PFBhcGVyQ29udGVudD48c3BhbiBjbGFzc05hbWU9J2xuciBsbnItY3Jvc3MnIC8+IE5vIHJlc3VsdHMgZm91bmQ8L1BhcGVyQ29udGVudD48L1BhcGVyPjwvZGl2PjwvTWFzb25yeUdyaWQ+XG5cdH1cblx0cmVuZGVyQ29udGVudCgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PE1hc29ucnlHcmlkPlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5zdW1tYXJpZXMubWFwKHMgPT4gPGRpdiBjbGFzc05hbWU9J2dyaWRJdGVtJyBrZXk9e3MubmFtZStzLnR5cGV9IHN0eWxlPXtbc3R5bGVzLm1hbnNvcnksIHN0eWxlcy5zdW1tYXJ5XX0+PFN1bW1hcnkgc3VtbWFyeT17c30gLz48L2Rpdj4pfVxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5wcm9maWxlcy5tYXAocCA9PiA8ZGl2IGNsYXNzTmFtZT0nZ3JpZEl0ZW0nIGtleT17cC5faWR9IHN0eWxlPXtzdHlsZXMubWFuc29yeX0+PFByb2ZpbGUgZW50aXR5PXtwfSAvPjwvZGl2Pil9XG5cdFx0XHQ8L01hc29ucnlHcmlkPlxuXHRcdClcblx0fVxuXHRyZW5kZXJMb2FkZXIoKSB7XG5cdFx0cmV0dXJuIDxNYXNvbnJ5R3JpZD48ZGl2IHN0eWxlPXtzdHlsZXMubWFuc29yeX0gY2xhc3NOYW1lPSdncmlkSXRlbSc+PFBhcGVyPjxQYXBlckNvbnRlbnQ+PENlbnRlckNvbnRhaW5lcj48TG9hZGVyIC8+PC9DZW50ZXJDb250YWluZXI+PC9QYXBlckNvbnRlbnQ+PC9QYXBlcj48L2Rpdj48L01hc29ucnlHcmlkPlxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRsZXQge3Byb2ZpbGVzLCBzdW1tYXJpZXMsIGxvYWRlZH0gPSB0aGlzLnN0YXRlXG5cdFx0bGV0IGNudCA9IG51bGxcblx0XHRpZighbG9hZGVkKSB7XG5cdFx0XHRjbnQgPSB0aGlzLnJlbmRlckxvYWRlcigpXG5cdFx0fSBlbHNlIGlmKCFwcm9maWxlcy5sZW5ndGggJiYgIXN1bW1hcmllcy5sZW5ndGgpIHtcblx0XHRcdGNudCA9IHRoaXMucmVuZGVyRW1wdHkoKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbnQgPSB0aGlzLnJlbmRlckNvbnRlbnQoKVxuXHRcdH1cblx0XHRyZXR1cm4gPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+e2NudH08L2Rpdj5cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oR3JpZENvbnRhaW5lcilcbiIsImltcG9ydCBSZWFjdCwge1Byb3BUeXBlc30gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi9saWIvY29sb3JzJ1xuXG5jb25zdCBzdHlsZSA9IHtcblx0d2lkdGg6ICc2MHB4JyxcbiAgaGVpZ2h0OiAnNjBweCcsXG4gIGJhY2tncm91bmQ6IGNvbG9ycy5yZWQ1MDAsXG4gIGFuaW1hdGlvbjogJ3NrLXJvdGF0ZXBsYW5lIDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQnXG59XG5cbmNvbnN0IExvYWRlciA9IChwcm9wcykgPT4gPGRpdiBzdHlsZT17W3N0eWxlLCBwcm9wcy5zdHlsZV19IC8+XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShMb2FkZXIpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcbmltcG9ydCBNYXNvbnJ5IGZyb20gJ21hc29ucnktbGF5b3V0J1xuaW1wb3J0IGltYWdlc0xvYWRlZCBmcm9tICdpbWFnZXNsb2FkZWQnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbmltcG9ydCBVdGlscyBmcm9tICcuLi8uLi9saWIvVXRpbHMnXG5cbmNvbnN0IHN0eWxlcyA9IHtcblx0Z3JpZDoge1xuXHRcdHdpZHRoOiAnMTAwJSdcblx0fSxcblx0c2l6ZXI6IHtcblx0XHR3aWR0aDogJzI1JSdcblx0fVxufVxuXG5jbGFzcyBNYXNvbnJ5R3JpZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5ncmlkTGF5b3V0KClcblx0fVxuXHRjb21wb25lbnREaWRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcblx0XHR0aGlzLmdyaWRMYXlvdXQoKVxuXHR9XG5cdC8qY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcblx0XHR0aGlzLmdyaWRMYXlvdXQoKVxuXHR9Ki9cblx0Z3JpZExheW91dCgpIHtcblx0XHRsZXQgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXNvbnJ5R3JpZCcpXG5cdFx0VXRpbHMucmVwb3NpdGlvbigpXG5cdFx0aW1hZ2VzTG9hZGVkKGdyaWQsICgpID0+IFV0aWxzLnJlcG9zaXRpb24oKSlcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtYXNvbnJ5R3JpZCcgc3R5bGU9e3N0eWxlcy5ncmlkfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2dyaWRTaXplcicgc3R5bGU9e3N0eWxlcy5zaXplcn0gLz5cblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKE1hc29ucnlHcmlkKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vLi4vbGliL2NvbG9ycydcblxuaW1wb3J0IFNlYXJjaElucHV0IGZyb20gJy4vU2VhcmNoSW5wdXQnXG5cbmNvbnN0IHN0eWxlcyA9IHtcblx0Y29udGFpbmVyOiB7XG5cdFx0YmFja2dyb3VuZDogJyMxYjE3MTgnLFxuXHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0aGVpZ2h0OiA3MCxcblx0XHRib3hTaXppbmc6ICdib3JkZXItYm94Jyxcblx0XHRwYWRkaW5nOiAnMTVweCA0MHB4Jyxcblx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcblx0XHR0b3A6IDAsXG5cdFx0bGVmdDogMCxcblx0XHR6SW5kZXg6IDEwMFxuXHR9LFxuXHRsb2dvOiB7XG5cdFx0aGVpZ2h0OiA0MCxcblx0XHRjdXJzb3I6ICdwb2ludGVyJ1xuXHR9LFxuXHRpbnB1dDoge1xuXHRcdHdpZHRoOiA0MDAsXG5cdFx0aGVpZ2h0OiA0MCxcblx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcblx0XHRwYWRkaW5nOiAwLFxuXHRcdGZsb2F0OiAncmlnaHQnXG5cdH0sXG5cdGlucDoge1xuXHRcdGJvcmRlcjogYDFweCBzb2xpZCAke2NvbG9ycy53aGl0ZX1gLFxuXHRcdCc6Zm9jdXMnOiB7XG5cdFx0XHRib3JkZXI6IGAxcHggc29saWQgJHtjb2xvcnMud2hpdGV9YFxuXHRcdH1cblx0fVxufVxuXG5jbGFzcyBOYXYgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PG5hdiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG5cdFx0XHRcdDxpbWcgc3JjPScvaW1nL2YxX2xvZ29fZGFyay5wbmcnIG9uQ2xpY2s9e3RoaXMucHJvcHMub25Ib21lfSBzdHlsZT17c3R5bGVzLmxvZ299IC8+XG5cdFx0XHRcdDxkaXYgc3R5bGU9e3N0eWxlcy5pbnB1dH0+PFNlYXJjaElucHV0IGlucFN0eWxlPXtbc3R5bGVzLmlucF19IHJlY29tbWVuZD17dGhpcy5wcm9wcy5yZWNvbW1lbmR9IHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoYW5nZX0gb25FbnRlcj17dGhpcy5wcm9wcy5vbkVudGVyfSBvblRhYj17dGhpcy5wcm9wcy5vblRhYn0gLz48L2Rpdj5cblx0XHRcdDwvbmF2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oTmF2KVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vLi4vbGliL2NvbG9ycydcblxuY29uc3Qgc3R5bGUgPSB7XG5cdHdpZHRoOiAnMTAwJScsXG5cdGJhY2tncm91bmQ6IGNvbG9ycy53aGl0ZSxcblx0Ym94U2hhZG93OiAnMCAtMXB4IDAgI2U1ZTVlNSwgMCAwIDJweCByZ2JhKDAsIDAsIDAsIC4xMiksIDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIC4yNCknXG59XG5cbmNvbnN0IFBhcGVyID0gKHByb3BzKSA9PiA8ZGl2IHN0eWxlPXtbc3R5bGUsIHByb3BzLnN0eWxlXX0+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuXG5QYXBlci5kZWZhdWx0UHJvcHMgPSB7XG5cdHN0eWxlOiB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oUGFwZXIpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi9saWIvY29sb3JzJ1xuXG5jb25zdCBzdHlsZSA9IHtcblx0ZGlzcGxheTogJ2Jsb2NrJyxcblx0Ym9yZGVyOiAnbm9uZScsXG5cdG1hcmdpbjogMCxcblx0cGFkZGluZzogJzEwcHgnLFxuXHRjb2xvcjogY29sb3JzLndoaXRlLFxuXHRiYWNrZ3JvdW5kOiBjb2xvcnMucmVkNTAwLFxuXHRmb250U2l6ZTogJy44cmVtJyxcblx0Zm9udFdlaWdodDogNDAwLFxuXHRmb250RmFtaWx5OiAnaW5oZXJpdCcsXG5cdGN1cnNvcjogJ3BvaW50ZXInLFxuXHR0cmFuc2l0aW9uOiAnYWxsIDAuMXMgZWFzZS1pbi1vdXQnLFxuXHQnOmhvdmVyJzoge1xuXHRcdGJhY2tncm91bmQ6IGNvbG9ycy5yZWQ3MDBcblx0fVxufVxuXG5jb25zdCBQYXBlckJ0biA9IChwcm9wcykgPT4gPGEgaHJlZj17cHJvcHMuaHJlZn0gdGFyZ2V0PSdfYmxhbmsnPjxidXR0b24gc3R5bGU9e3N0eWxlfT57cHJvcHMuY2hpbGRyZW59PC9idXR0b24+PC9hPlxuXG5QYXBlckJ0bi5kZWZhdWx0UHJvcHMgPSB7XG5cdHN0eWxlOiB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oUGFwZXJCdG4pXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuY29uc3Qgc3R5bGUgPSB7XG5cdHdpZHRoOiAnMTAwJScsXG5cdGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuXHRwYWRkaW5nOiAyMFxufVxuXG5jb25zdCBQYXBlckNvbnRlbnQgPSAocHJvcHMpID0+IDxkaXYgc3R5bGU9e3N0eWxlfT57cHJvcHMuY2hpbGRyZW59PC9kaXY+XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShQYXBlckNvbnRlbnQpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi9saWIvY29sb3JzJ1xuXG5jb25zdCBzdHlsZSA9IHtcblx0d2lkdGg6ICcxMDAlJyxcblx0ZGlzcGxheTogJ2Jsb2NrJyxcblx0Zm9udFNpemU6ICcxcmVtJyxcblx0Zm9udFdlaWdodDogMzAwLFxuXHRtYXJnaW46IDAsXG5cdHBhZGRpbmc6ICcxMHB4IDIwcHgnLFxuXHRib3hTaXppbmc6ICdib3JkZXItYm94Jyxcblx0YmFja2dyb3VuZDogJyMxYjE3MTgnLFxuXHRjb2xvcjogY29sb3JzLndoaXRlXG59XG5cbmNvbnN0IFBhcGVySGVhZGVyID0gKHByb3BzKSA9PiA8aDEgc3R5bGU9e3N0eWxlfT57cHJvcHMuY2hpbGRyZW59PC9oMT5cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKFBhcGVySGVhZGVyKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmNvbnN0IHN0eWxlID0ge1xuXHR3aWR0aDogJzEwMCUnLFxuXHRkaXNwbGF5OiAnYmxvY2snXG59XG5cbmNvbnN0IFBhcGVySW1nID0gKHByb3BzKSA9PiA8aW1nIHNyYz17cHJvcHMuc3JjfSBzdHlsZT17c3R5bGV9IC8+XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShQYXBlckltZylcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGNvbnRhaW5lcjoge1xuXHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0Zm9udFdlaWdodDogMzAwLFxuXHRcdG1hcmdpbkJvdHRvbTogMTAsXG5cdFx0ZmxvYXQ6ICdsZWZ0J1xuXHR9LFxuXHRoMjoge1xuXHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0bWFyZ2luOiAwLFxuXHRcdHBhZGRpbmc6IDAsXG5cdFx0Zm9udFNpemU6ICcuOHJlbScsXG5cdFx0Zm9udFdlaWdodDogNDAwXG5cdH0sXG5cdHR4dDoge1xuXHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0Zm9udFNpemU6ICcuOHJlbScsXG5cdFx0d29yZFdyYXA6ICdicmVhay13b3JkJ1xuXHR9XG59XG5cbmNvbnN0IFBhcGVyTGkgPSAocHJvcHMpID0+IDxkaXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PjxoMiBzdHlsZT17c3R5bGVzLmgyfT57cHJvcHMuaGVhZH08L2gyPjxkaXYgc3R5bGU9e3N0eWxlcy50eHR9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj48L2Rpdj5cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKFBhcGVyTGkpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi9saWIvY29sb3JzJ1xuXG5jb25zdCBzdHlsZSA9IHtcblx0d2lkdGg6ICcxMDAlJyxcblx0ZGlzcGxheTogJ2Jsb2NrJyxcblx0YmFja2dyb3VuZDogY29sb3JzLmdyZXkyMDAsXG5cdGhlaWdodDogMSxcblx0bWFyZ2luOiAnMTBweCAwIDIwcHggMCdcbn1cblxuY29uc3QgUGFwZXJMaW5lID0gKHByb3BzKSA9PiA8ZGl2IHN0eWxlPXtzdHlsZX0gLz5cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKFBhcGVyTGluZSlcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5jb25zdCBzdHlsZSA9IHtcblx0d2lkdGg6ICcxMDAlJyxcblx0ZGlzcGxheTogJ2Jsb2NrJ1xufVxuXG5jb25zdCBQYXBlclVsID0gKHByb3BzKSA9PiA8ZGl2IGNsYXNzTmFtZT0nY2xlYXInIHN0eWxlPXtzdHlsZX0+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oUGFwZXJVbClcbiIsImltcG9ydCBSZWFjdCwge1Byb3BUeXBlc30gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi9saWIvY29sb3JzJ1xuaW1wb3J0IEVudGl0eVNlcnZpY2UgZnJvbSAnLi4vLi4vc2VydmljZXMvRW50aXR5LlNlcnZpY2UnXG5pbXBvcnQgRjFTZXJ2aWNlIGZyb20gJy4uLy4uL3NlcnZpY2VzL0YxLlNlcnZpY2UnXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vLi4vbGliL1V0aWxzJ1xuXG5pbXBvcnQgUGFwZXIgZnJvbSAnLi9QYXBlcidcbmltcG9ydCBQYXBlckNvbnRlbnQgZnJvbSAnLi9QYXBlckNvbnRlbnQnXG5pbXBvcnQgUGFwZXJJbWcgZnJvbSAnLi9QYXBlckltZydcbmltcG9ydCBQYXBlckhlYWRlciBmcm9tICcuL1BhcGVySGVhZGVyJ1xuaW1wb3J0IFBhcGVyVWwgZnJvbSAnLi9QYXBlclVsJ1xuaW1wb3J0IFBhcGVyTGkgZnJvbSAnLi9QYXBlckxpJ1xuaW1wb3J0IFBhcGVyTGluZSBmcm9tICcuL1BhcGVyTGluZSdcbmltcG9ydCBQYXBlckJ0biBmcm9tICcuL1BhcGVyQnRuJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcidcbmltcG9ydCBDZW50ZXJDb250YWluZXIgZnJvbSAnLi9DZW50ZXJDb250YWluZXInXG5cbmNvbnN0IGV4Y2x1ZGUgPSBbJ3RodW1ibmFpbCcsICdkZXBpY3Rpb24nLCAnYmlydGhQbGFjZScsICd3aWtpUGFnZUlEJywgJ2Fic3RyYWN0JywgJ2xvY2F0aW9uJ11cblxuY29uc3Qgc3R5bGVzID0ge1xuXHRyZWxvYWQ6IHtcblx0XHRjdXJzb3I6ICdwb2ludGVyJyxcblx0XHQnOmhvdmVyJzoge1xuXHRcdFx0Y29sb3I6IGNvbG9ycy5yZWQ1MDBcblx0XHR9XG5cdH0sXG5cdGNvbnRhaW5lcjoge1xuXHRcdHBhZGRpbmc6IDIwLFxuXHRcdGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuXHRcdHdpZHRoOiAnMTAwJSdcblx0fVxufVxuXG5jbGFzcyBQcm9maWxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0ZW50aXR5OiBudWxsLFxuXHRcdFx0ZXJyOiBmYWxzZVxuXHRcdH1cblx0XHR0aGlzLnJlbG9hZCA9IHRoaXMucmVsb2FkLmJpbmQodGhpcylcblx0fVxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0aWYodGhpcy5wcm9wcy5lbnRpdHkuZGF0YSkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7ZW50aXR5OiB0aGlzLnByb3BzLmVudGl0eS5kYXRhfSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5mZXRjaFNwYXJxbCgpXG5cdFx0fVxuXHR9XG5cdHJlbG9hZCgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGVudGl0eTogbnVsbCxcblx0XHRcdGVycjogZmFsc2Vcblx0XHR9KVxuXHRcdHRoaXMuZmV0Y2hTcGFycWwoKVxuXHR9XG5cdGZldGNoU3BhcnFsKCkge1xuXHRcdEVudGl0eVNlcnZpY2UuZ2V0RW50aXR5KHRoaXMucHJvcHMuZW50aXR5LCAoZXJyLCByZXMpID0+IHtcblx0XHRcdGlmKGVyciB8fCAhcmVzLmJvZHkucmVzdWx0cy5iaW5kaW5ncy5sZW5ndGgpIHJldHVybiB0aGlzLmZldGNoQXBpKClcblx0XHRcdHRoaXMuc2V0U3RhdGUoe2VudGl0eTogcmVzLmJvZHkucmVzdWx0cy5iaW5kaW5nc1swXX0pXG5cdFx0fSlcblx0fVxuXHRmZXRjaEFwaSgpIHtcblx0XHRGMVNlcnZpY2UuZ2V0RW50aXR5KHRoaXMucHJvcHMuZW50aXR5LCAoZXJyLCByZXMpID0+IHtcblx0XHRcdGlmKGVycikgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe2VudGl0eTogbnVsbCwgZXJyOiB0cnVlfSlcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRlbnRpdHk6IHJlcyxcblx0XHRcdFx0ZXJyOiBmYWxzZVxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cdHJlbmRlckxvYWRlcigpIHtcblx0XHRyZXR1cm4gPFBhcGVyPjxQYXBlckNvbnRlbnQ+PENlbnRlckNvbnRhaW5lcj48TG9hZGVyIC8+PC9DZW50ZXJDb250YWluZXI+PC9QYXBlckNvbnRlbnQ+PC9QYXBlcj5cblx0fVxuXHRyZW5kZXJDb250ZW50KCkge1xuXHRcdGxldCB7ZW50aXR5fSA9IHRoaXMuc3RhdGVcblx0XHRsZXQgaW1nID0gXy5oYXMoZW50aXR5LCAnZGVwaWN0aW9uJykgPyA8UGFwZXJJbWcgc3JjPXtlbnRpdHkuZGVwaWN0aW9uLnZhbHVlfSAvPiA6IG51bGxcblx0XHRsZXQgaHJlZiA9IF8uaGFzKGVudGl0eSwgJ3dpa2lQYWdlSUQnKSA/IDxkaXY+PFBhcGVyTGluZSAvPjxQYXBlckJ0biBocmVmPXtgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnLz9jdXJpZD0ke2VudGl0eS53aWtpUGFnZUlELnZhbHVlfWB9PlJlYWQgTW9yZTwvUGFwZXJCdG4+PC9kaXY+IDogbnVsbFxuXHRcdGxldCBrZXlzID0gXyhlbnRpdHkpLmtleXMoKS5maWx0ZXIoayA9PiBfLmluZGV4T2YoZXhjbHVkZSwgayk9PS0xKS52YWx1ZSgpXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuXHRcdFx0XHQ8UGFwZXI+XG5cdFx0XHRcdFx0e2ltZ31cblx0XHRcdFx0XHQ8UGFwZXJIZWFkZXI+e3RoaXMucHJvcHMuZW50aXR5Lm5hbWV9PC9QYXBlckhlYWRlcj5cblx0XHRcdFx0XHQ8UGFwZXJDb250ZW50PlxuXHRcdFx0XHRcdFx0PFBhcGVyVWw+XG5cdFx0XHRcdFx0XHRcdHtrZXlzLm1hcChrID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPFBhcGVyTGkga2V5PXtgJHt0aGlzLnByb3BzLmVudGl0eS5faWR9LSR7a31gfSBoZWFkPXtVdGlscy5jYXBpdGFsaXplKGspfT57VXRpbHMuZm9ybWF0RW50aXR5U3RyaW5nKGVudGl0eVtrXS52YWx1ZSl9PC9QYXBlckxpPlxuXHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdDwvUGFwZXJVbD5cblx0XHRcdFx0XHRcdHtocmVmfVxuXHRcdFx0XHRcdDwvUGFwZXJDb250ZW50PlxuXHRcdFx0XHQ8L1BhcGVyPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cdHJlbmRlckFnYWluQnRuKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8UGFwZXI+XG5cdFx0XHRcdDxQYXBlckNvbnRlbnQ+XG5cdFx0XHRcdFx0PFBhcGVySGVhZGVyPnt0aGlzLnByb3BzLmVudGl0eS5uYW1lfTwvUGFwZXJIZWFkZXI+XG5cdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3N0eWxlcy5yZWxvYWR9IG9uQ2xpY2s9e3RoaXMucmVsb2FkfT5Db3VsZCBub3QgZmV0Y2ggZGF0YS4gQ2xpY2sgdG8gdHJ5IGFnYWluPC9zcGFuPlxuXHRcdFx0XHQ8L1BhcGVyQ29udGVudD5cblx0XHRcdDwvUGFwZXI+XG5cdFx0KVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRpZih0aGlzLnN0YXRlLmVycikgcmV0dXJuIHRoaXMucmVuZGVyQWdhaW5CdG4oKVxuXHRcdGlmKCF0aGlzLnN0YXRlLmVudGl0eSkgcmV0dXJuIHRoaXMucmVuZGVyTG9hZGVyKClcblx0XHRyZXR1cm4gdGhpcy5yZW5kZXJDb250ZW50KClcblx0fVxufVxuXG5Qcm9maWxlLnByb3BUeXBlcyA9IHtcblx0ZW50aXR5OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKFByb2ZpbGUpXG4iLCJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXN9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vLi4vbGliL2NvbG9ycydcblxuY29uc3Qgc3R5bGVzID0ge1xuXHRjb250YWluZXI6IHtcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdGhlaWdodDogJzEwMCUnLFxuXHRcdHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXHRcdGJhY2tncm91bmQ6IGNvbG9ycy53aGl0ZSxcblx0XHRvdmVyZmxvdzogJ2hpZGRlbidcblx0fSxcblx0aW5wQ29udGFpbmVyOiB7XG5cdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsXG5cdFx0dG9wOiAwLFxuXHRcdGxlZnQ6IDAsXG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRoZWlnaHQ6ICcxMDAlJyxcblx0XHRib3hTaXppbmc6ICdib3JkZXItYm94Jyxcblx0XHRiYWNrZ3JvdW5kOiAnbm9uZScsXG5cdFx0Ym9yZGVyOiBgMXB4IHNvbGlkICR7Y29sb3JzLndoaXRlfWAsXG5cdFx0Zm9udFdlaWdodDogMzAwLFxuXHRcdHBhZGRpbmc6ICc1cHggNDVweCA1cHggNXB4Jyxcblx0XHRmb250U2l6ZTogJzFyZW0nLFxuXHRcdHRleHRBbGlnbjogJ2xlZnQnLFxuXHRcdGZvbnRGYW1pbHk6ICdSb2JvdG8nLFxuXHRcdG1hcmdpbjogMCxcblx0XHQnOmZvY3VzJzoge1xuXHRcdFx0b3V0bGluZTogJ25vbmUnLFxuXHRcdFx0Ly9ib3JkZXI6IGAxcHggc29saWQgJHtjb2xvcnMuZ3JleTgwMH1gXG5cdFx0fVxuXHR9LFxuXHRyZWNvbW1lbmQ6IHtcblx0XHRjb2xvcjogY29sb3JzLmdyZXk1MDAsXG5cdFx0cGFkZGluZ1RvcDogOVxuXHR9LFxuXHRlYXNlOiB7XG5cdFx0dHJhbnNpdGlvbjogJ2FsbCAwLjFzIGVhc2UtaW4tb3V0J1xuXHR9LFxuXHR3aGl0ZVNwYWNlOiB7XG5cdFx0Y29sb3I6IGNvbG9ycy53aGl0ZVxuXHR9LFxuXHRpY29uOiB7XG5cdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsXG5cdFx0d2lkdGg6IDQwLFxuXHRcdGhlaWdodDogNDAsXG5cdFx0dG9wOiAwLFxuXHRcdHJpZ2h0OiAwLFxuXHRcdGRpc3BsYXk6ICdibG9jaycsXG5cdFx0Zm9udFNpemU6ICcxZW0nLFxuXHRcdGJhY2tncm91bmQ6IGNvbG9ycy5ncmV5ODAwLFxuXHRcdGNvbG9yOiBjb2xvcnMud2hpdGUsXG5cdFx0Ym9yZGVyOiAnbm9uZScsXG5cdFx0cGFkZGluZzogMCxcblx0XHRjdXJzb3I6ICdwb2ludGVyJyxcblx0XHQnOmhvdmVyJzoge1xuXHRcdFx0Y29sb3I6IGNvbG9ycy5ncmV5NTAwXG5cdFx0fVxuXHR9XG59XG5cbmNsYXNzIFNlYXJjaElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLm9uS2V5ID0gdGhpcy5vbktleS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5vbktleURvd24gPSB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpXG5cdH1cblx0b25LZXkoZSkge1xuXHRcdGlmKGUua2V5ID09ICdFbnRlcicpIHRoaXMucHJvcHMub25FbnRlcigpXG5cdH1cblx0b25LZXlEb3duKGUpIHtcblx0XHRpZihlLmtleSA9PSAnVGFiJykge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHR0aGlzLnByb3BzLm9uVGFiKClcblx0XHR9XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXtbc3R5bGVzLmNvbnRhaW5lciwgdGhpcy5wcm9wcy5zdHlsZV19PlxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXtbc3R5bGVzLmlucENvbnRhaW5lciwgc3R5bGVzLnJlY29tbWVuZCwgdGhpcy5wcm9wcy5pbnBTdHlsZV19PjxzcGFuIHN0eWxlPXtzdHlsZXMud2hpdGVTcGFjZX0+e3RoaXMucHJvcHMudmFsdWV9PC9zcGFuPnt0aGlzLnByb3BzLnJlY29tbWVuZH08L2Rpdj5cblx0XHRcdFx0PGlucHV0IGtleT0naW5wdXRTcmMnIHR5cGU9J3RleHQnIHN0eWxlPXtbc3R5bGVzLmVhc2UsIHN0eWxlcy5pbnBDb250YWluZXIsIHRoaXMucHJvcHMuaW5wU3R5bGVdfSB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX0gb25DaGFuZ2U9e2UgPT4gdGhpcy5wcm9wcy5vbkNoYW5nZShlLnRhcmdldC52YWx1ZSl9IG9uS2V5UHJlc3M9e3RoaXMub25LZXl9IG9uS2V5RG93bj17dGhpcy5vbktleURvd259IC8+XG5cdFx0XHRcdDxidXR0b24gc3R5bGU9e1tzdHlsZXMuaWNvbiwgc3R5bGVzLmVhc2VdfSBrZXk9J2ludGVybmFsU3JjQnV0dG9uJyBvbkNsaWNrPXtlID0+IHRoaXMucHJvcHMub25FbnRlcigpfT48aSBjbGFzc05hbWU9J2ZhIGZhLXNlYXJjaCcgLz48L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5TZWFyY2hJbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG5cdHN0eWxlOiB7fSxcblx0dmFsdWU6ICcnLFxuXHRyZWNvbW1lbmQ6ICcnLFxuXHRpbnBTdHlsZToge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKFNlYXJjaElucHV0KVxuIiwiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uLy4uL2xpYi9jb2xvcnMnXG5pbXBvcnQgRjFTZXJ2aWNlIGZyb20gJy4uLy4uL3NlcnZpY2VzL0YxLlNlcnZpY2UnXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vLi4vbGliL1V0aWxzJ1xuXG5pbXBvcnQgUGFwZXIgZnJvbSAnLi9QYXBlcidcbmltcG9ydCBQYXBlckNvbnRlbnQgZnJvbSAnLi9QYXBlckNvbnRlbnQnXG5pbXBvcnQgUGFwZXJIZWFkZXIgZnJvbSAnLi9QYXBlckhlYWRlcidcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInXG5pbXBvcnQgQ2VudGVyQ29udGFpbmVyIGZyb20gJy4vQ2VudGVyQ29udGFpbmVyJ1xuaW1wb3J0IFRhYmxlIGZyb20gJy4vVGFibGUnXG5cbmNvbnN0IHN0eWxlID0ge1xuXHRwYWRkaW5nOiAyMCxcblx0Ym94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG5cdHdpZHRoOiAnMTAwJSdcbn1cblxuY2xhc3MgU3VtbWFyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGRhdGE6IFtdLFxuXHRcdFx0ZXJyb3I6IGZhbHNlLFxuXHRcdFx0bG9hZGluZzogdHJ1ZSxcblx0XHRcdHRoczogW11cblx0XHR9XG5cdFx0dGhpcy5tb3VudGVkID0gZmFsc2Vcblx0fVxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0dGhpcy5tb3VudGVkID0gdHJ1ZVxuXHRcdEYxU2VydmljZS5nZXRTdW1tYXJ5KHRoaXMucHJvcHMuc3VtbWFyeSwgKGVyciwgZGF0YSkgPT4ge1xuXHRcdFx0aWYoIXRoaXMubW91bnRlZCkgcmV0dXJuIGZhbHNlXG5cdFx0XHRpZihlcnIpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogZmFsc2UsIGVycm9yOiB0cnVlfSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCB0aHMgPSBGMVNlcnZpY2UucmVzdWx0c0Zvcm1hdGVyKHRoaXMucHJvcHMuc3VtbWFyeS50eXBlKVxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IGZhbHNlLCBkYXRhLCB0aHN9KVxuXHRcdFx0XHRVdGlscy5yZXBvc2l0aW9uKClcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdHRoaXMubW91bnRlZCA9IGZhbHNlXG5cdH1cblx0cmVuZGVyTG9hZGVyKCkge1xuXHRcdHJldHVybiA8ZGl2IHN0eWxlPXtzdHlsZX0+PFBhcGVyPjxQYXBlckhlYWRlcj57dGhpcy5wcm9wcy5zdW1tYXJ5Lm5hbWV9PC9QYXBlckhlYWRlcj48UGFwZXJDb250ZW50PjxDZW50ZXJDb250YWluZXI+PExvYWRlciAvPjwvQ2VudGVyQ29udGFpbmVyPjwvUGFwZXJDb250ZW50PjwvUGFwZXI+PC9kaXY+XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtsb2FkaW5nLCBkYXRhLCBlcnJvciwgdGhzfSA9IHRoaXMuc3RhdGVcblx0XHRpZihsb2FkaW5nKSByZXR1cm4gdGhpcy5yZW5kZXJMb2FkZXIoKVxuXHRcdGlmKGVycm9yKSByZXR1cm4gbnVsbFxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXtzdHlsZX0+XG5cdFx0XHRcdDxQYXBlcj5cblx0XHRcdFx0XHQ8UGFwZXJIZWFkZXI+e3RoaXMucHJvcHMuc3VtbWFyeS5uYW1lfTwvUGFwZXJIZWFkZXI+XG5cdFx0XHRcdFx0PFBhcGVyQ29udGVudD5cblx0XHRcdFx0XHRcdDxUYWJsZSBoZWFkZXJzPXt0aHN9IGRhdGE9e2RhdGF9IC8+XG5cdFx0XHRcdFx0PC9QYXBlckNvbnRlbnQ+XG5cdFx0XHRcdDwvUGFwZXI+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuU3VtbWFyeS5wcm9wVHlwZXMgPSB7XG5cdHN1bW1hcnk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oU3VtbWFyeSlcbiIsImltcG9ydCBSZWFjdCwge1Byb3BUeXBlc30gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcbmltcG9ydCB1dWlkIGZyb20gJ25vZGUtdXVpZCdcblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi9saWIvY29sb3JzJ1xuaW1wb3J0IFV0aWxzIGZyb20gJy4uLy4uL2xpYi9VdGlscydcblxuY29uc3Qgc3R5bGVzID0ge1xuXHRjb250YWluZXI6IHtcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdGZvbnRTaXplOiAnLjhlbScsXG5cdFx0ZGlzcGxheTogJ3RhYmxlJ1xuXHR9LFxuXHRyb3c6IHtcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdHBhZGRpbmc6IDAsXG5cdFx0bWFyZ2luOiAwLFxuXHRcdGRpc3BsYXk6ICd0YWJsZS1yb3cnLFxuXHRcdCc6aG92ZXInOiB7XG5cdFx0XHRiYWNrZ3JvdW5kOiBjb2xvcnMuZ3JleTIwMFxuXHRcdH1cblx0fSxcblx0aGVhZGVyOiB7XG5cdFx0dGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG5cdFx0Y29sb3I6IGNvbG9ycy5ncmV5ODAwXG5cdH0sXG5cdG9kZDoge1xuXHRcdGJhY2tncm91bmQ6IGNvbG9ycy5ncmV5MTAwLFxuXHRcdCc6aG92ZXInOiB7XG5cdFx0XHRiYWNrZ3JvdW5kOiBjb2xvcnMuZ3JleTIwMFxuXHRcdH1cblx0fSxcblx0Y2VsbDoge1xuXHRcdHBhZGRpbmc6IDEwLFxuXHRcdGRpc3BsYXk6ICd0YWJsZS1jZWxsJyxcblx0XHR2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcblx0XHR3b3JkV3JhcDogJ2JyZWFrLXdvcmQnXG5cdH1cbn1cblxuY29uc3QgVGFibGUgPSAocHJvcHMpID0+IHtcblx0bGV0IGNudCA9IDBcblx0bGV0IHdpZHRoID0ge3dpZHRoOiBgJHsxMDAvcHJvcHMuaGVhZGVycy5sZW5ndGh9JWB9XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J2NsZWFyJyBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG5cdFx0XHQ8ZGl2IHN0eWxlPXtbc3R5bGVzLnJvdywgc3R5bGVzLmhlYWRlcl19IGtleT17dXVpZC52NCgpfT57cHJvcHMuaGVhZGVycy5tYXAoaCA9PiA8ZGl2IGtleT17dXVpZC52NCgpfSBzdHlsZT17W3N0eWxlcy5jZWxsXX0+e2gubmFtZX08L2Rpdj4pfTwvZGl2PlxuXHRcdFx0e3Byb3BzLmRhdGEubWFwKGQgPT4ge1xuXHRcdFx0XHRjbnQrK1xuXHRcdFx0XHRsZXQgb2RkID0gY250JTIgPyBzdHlsZXMub2RkIDoge31cblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8ZGl2IGtleT17dXVpZC52NCgpfSBzdHlsZT17W3N0eWxlcy5yb3csIG9kZF19PlxuXHRcdFx0XHRcdFx0e3Byb3BzLmhlYWRlcnMubWFwKGggPT4gPGRpdiBrZXk9e3V1aWQudjQoKX0gc3R5bGU9e1tzdHlsZXMuY2VsbF19PntVdGlscy5mb3JtYXRFbnRpdHlTdHJpbmcoVXRpbHMucGx1Y2tWYWx1ZShkLCBoLmtleSkpfTwvZGl2Pil9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdClcblx0XHRcdH0pfVxuXHRcdDwvZGl2PlxuXHQpXG59XG5cblRhYmxlLnByb3BUeXBlcyA9IHtcblx0aGVhZGVyczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG5cdGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShUYWJsZSlcbiIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBhc3luYyBmcm9tICdhc3luYydcbmltcG9ydCBDb21iaW5hdG9yaWNzIGZyb20gJ2pzLWNvbWJpbmF0b3JpY3MnXG5pbXBvcnQge3NwZWNpYWxLZXl3b3Jkc30gZnJvbSAnLi9LZXl3b3JkcydcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi9VdGlscydcbmltcG9ydCBGMVNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvRjEuU2VydmljZSdcblxuY2xhc3MgQW5hbHlzZXIge1xuXHRzdGF0aWMgcGFyc2VFbnRpdGllcyhxdWVyeSwgZW50aXRpZXMsIGNiKSB7XG5cdFx0bGV0IGRhdGVzID0gXyhlbnRpdGllcykuZmlsdGVyKGUgPT4gZS50eXBlPT0nZGF0ZScpLm1hcCgnbmFtZScpLnZhbHVlKClcblx0XHRsZXQgX3Byb2ZpbGVzID0gXy5maWx0ZXIoZW50aXRpZXMsIGUgPT4gZS50eXBlIT0nZGF0ZScpXG5cdFx0QW5hbHlzZXIuZXZhbHVhdGVQcm9maWxlcyhxdWVyeSwgX3Byb2ZpbGVzLCBwcm9maWxlcyA9PiB7XG5cdFx0XHRBbmFseXNlci5kYXRhQ2FzZShxdWVyeSwgcHJvZmlsZXMsIGRhdGVzLCBzdW1tYXJpZXMgPT4ge1xuXHRcdFx0XHQvL2NvbnNvbGUubG9nKHN1bW1hcmllcylcblx0XHRcdFx0Y2Ioe2RhdGVzLCBwcm9maWxlcywgc3VtbWFyaWVzfSlcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdHN0YXRpYyBldmFsdWF0ZVByb2ZpbGVzKHF1ZXJ5LCBwcm9maWxlcywgY2IpIHtcblx0XHRsZXQga2V5cyA9IF8ocXVlcnkuc3BsaXQoJyAnKSkubWFwKGsgPT4gXy5kZWJ1cnIoay50b0xvd2VyQ2FzZSgpKSkudW5pcSgpLnZhbHVlKClcblx0XHRsZXQgY29tYmluYXRpb25zID0gVXRpbHMubmF0dXJhbEtleXdvcmRDb21iaW5hdGlvbnMoa2V5cylcblx0XHRsZXQgcHMgPSBfKHByb2ZpbGVzKS5tYXAocCA9PiB7XG5cdFx0XHRsZXQga2V5d29yZHMgPSBfKFV0aWxzLm5hdHVyYWxLZXl3b3JkQ29tYmluYXRpb25zKHAua2V5d29yZHMpKS5mbGF0dGVuRGVlcCgpLm1hcChrID0+IF8uZGVidXJyKGspKS51bmlxKCkudmFsdWUoKVxuXHRcdFx0bGV0IGludGVyc2VjdCA9IF8uaW50ZXJzZWN0aW9uKGtleXMsIGtleXdvcmRzKVxuXHRcdFx0cC5jb25maWRlbnQgPSBpbnRlcnNlY3QubGVuZ3RoXG5cdFx0XHRwLmludGVyc2VjdCA9IGludGVyc2VjdFxuXHRcdFx0aWYoXy5pbmRleE9mKGNvbWJpbmF0aW9ucywgXy5kZWJ1cnIocC5uYW1lLnRvTG93ZXJDYXNlKCkpKT4tMSkgcC5jb25maWRlbnQ9MTAwXG5cdFx0XHRyZXR1cm4gcFxuXHRcdH0pLm9yZGVyQnkoWydjb25maWRlbnQnLCAnbmFtZSddLCBbJ2Rlc2MnLCAnYXNjJ10pLnZhbHVlKClcblx0XHRBbmFseXNlci5jcmVhdGVEZXBlbmRlbmN5R3JhcGgocHMsIGNiKVxuXHR9XG5cblx0c3RhdGljIGNyZWF0ZURlcGVuZGVuY3lHcmFwaChwcm9maWxlcywgY2IpIHtcblx0XHRsZXQgcHJvZnMgPSBfLmdyb3VwQnkocHJvZmlsZXMsICd0eXBlJylcblx0XHRwcm9mcy5fa2V5cyA9IF8ua2V5cyhwcm9mcylcblx0XHRwcm9mcyA9IF8ubWFwKHByb2ZzLl9rZXlzLCBrID0+IHtcblx0XHRcdGxldCBwID0gcHJvZnNba11cblx0XHRcdGxldCBncm91cCA9IF8uZ3JvdXBCeShwLCAnaW50ZXJzZWN0Jylcblx0XHRcdGxldCBrZXlzID0gXy5rZXlzKGdyb3VwKVxuXHRcdFx0cmV0dXJuIHtfa2V5czoga2V5cywgZGF0YTogZ3JvdXB9XG5cdFx0fSlcblx0XHRwcm9mcyA9IF8ocHJvZnMpLm1hcChwID0+IHtcblx0XHRcdHJldHVybiBfKHAuX2tleXMpLm1hcChrID0+IHtcblx0XHRcdFx0bGV0IHByID0gcC5kYXRhW2tdXG5cdFx0XHRcdGxldCBtYXggPSBfLm1heEJ5KHByLCAnY29uZmlkZW50JykuY29uZmlkZW50XG5cdFx0XHRcdHJldHVybiBfKHByKS5maWx0ZXIoX3AgPT4gX3AuY29uZmlkZW50ID09IG1heCkuZmxhdHRlbigpLnZhbHVlKClcblx0XHRcdH0pLmZsYXR0ZW4oKS52YWx1ZSgpXG5cdFx0fSkuZmxhdHRlbigpLm9yZGVyQnkoWydjb25maWRlbnQnLCAndHlwZScsICduYW1lJ10sIFsnZGVzYycsICdhc2MnLCAnYXNjJ10pLnVuaXFCeSgnX2lkJykudmFsdWUoKVxuXHRcdGNiKHByb2ZzKVxuXHR9XG5cblx0c3RhdGljIGRhdGFDYXNlKHF1ZXJ5LCBwcm9maWxlcywgZGF0ZXMsIGNiKSB7XG5cdFx0bGV0IGtleXdvcmRzID0gXyhxdWVyeS5zcGxpdCgnICcpKS5tYXAoayA9PiBfLmRlYnVycihrLnRvTG93ZXJDYXNlKCkpKS51bmlxKCkudmFsdWUoKVxuXHRcdGxldCBjb21iaW5hdGlvbnMgPSBVdGlscy5uYXR1cmFsS2V5d29yZENvbWJpbmF0aW9ucyhrZXl3b3Jkcylcblx0XHRsZXQgd29yZHMgPSBfKHNwZWNpYWxLZXl3b3JkcykuZmlsdGVyKHNrID0+IF8uaW50ZXJzZWN0aW9uKHNrLndvcmRzLCBjb21iaW5hdGlvbnMpLmxlbmd0aCkubWFwKCdrZXknKS51bmlxKCkudmFsdWUoKVxuXHRcdGxldCBncm91cGVkID0gXy5ncm91cEJ5KHByb2ZpbGVzLCAndHlwZScpXG5cdFx0bGV0IGtleXMgPSBfLmtleXMoZ3JvdXBlZClcblx0XHRpZihkYXRlcy5sZW5ndGgpIHtcblx0XHRcdGlmKHByb2ZpbGVzLmxlbmd0aCkge1xuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsZXQgYXBpRGF0YSA9IFsncmFjZUNhbGVuZGFyJywgJ2RyaXZlclN0YW5kaW5ncycsICdjb25zdHJ1Y3RvclN0YW5kaW5ncyddXG5cdFx0XHRcdGlmKFV0aWxzLm9uZU9mQ29tYmluYXRpb25zKHdvcmRzLCBbJ3NlYXNvbicsICdzdGFuZGluZyddKSkgYXBpRGF0YSA9IFsnZHJpdmVyU3RhbmRpbmdzJywgJ2NvbnN0cnVjdG9yU3RhbmRpbmdzJ11cblx0XHRcdFx0ZWxzZSBpZihVdGlscy5vbmVPZkNvbWJpbmF0aW9ucyh3b3JkcywgWydjYWxlbmRhcicsICdzZWFzb24nXSkpIGFwaURhdGEgPSBbJ3JhY2VDYWxlbmRhciddXG5cdFx0XHRcdGVsc2UgaWYoVXRpbHMub25lT2ZDb21iaW5hdGlvbnMod29yZHMsIFsnZHJpdmVyJywgJ3N0YW5kaW5nJywgJ3NlYXNvbiddKSkgYXBpRGF0YSA9IFsnZHJpdmVyU3RhbmRpbmdzJ11cblx0XHRcdFx0ZWxzZSBpZihVdGlscy5vbmVPZkNvbWJpbmF0aW9ucyh3b3JkcywgWyd0ZWFtJywgJ3N0YW5kaW5nJywgJ3NlYXNvbiddKSkgYXBpRGF0YSA9IFsnY29uc3RydWN0b3JTdGFuZGluZ3MnXVxuXHRcdFx0XHRyZXR1cm4gQW5hbHlzZXIuZ2V0RGF0YUluZm8oZGF0ZXMsIGFwaURhdGEsIGNiKVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZihVdGlscy5vbmx5SW5BcnJheShrZXlzLCBbJ2RyaXZlciddKSkge1xuXHRcdFx0XHRsZXQgYXBpRGF0YSA9IFsnZHJpdmVyU2Vhc29uU3RhbmRpbmcnLCAnZHJpdmVyV29ybGRUaXRsZXMnLCAnZHJpdmVyU2Vhc29uRmluaXNoZXMnLCAnZHJpdmVyVGVhbXMnXVxuXHRcdFx0XHRpZihVdGlscy5vbmVPZkNvbWJpbmF0aW9ucyh3b3JkcywgWydjdXJyZW50JywgJ3N0YW5kaW5nJywgJ2RyaXZlciddLCBbJ3N0YW5kaW5nJ10pKSBhcGlEYXRhID0gWydkcml2ZXJTZWFzb25TdGFuZGluZyddXG5cdFx0XHRcdGVsc2UgaWYoVXRpbHMub25lT2ZDb21iaW5hdGlvbnMod29yZHMsIFsndGl0bGUnLCAnZHJpdmVyJ10sIFsndGl0bGUnXSkpIGFwaURhdGEgPSBbJ2RyaXZlcldvcmxkVGl0bGVzJ11cblx0XHRcdFx0cmV0dXJuIEFuYWx5c2VyLmdldERhdGFJbmZvKGdyb3VwZWQuZHJpdmVyLCBhcGlEYXRhLCBjYilcblx0XHRcdH0gZWxzZSBpZihVdGlscy5vbmx5SW5BcnJheShrZXlzLCBbJ3RlYW0nXSkpIHtcblxuXHRcdFx0fSBlbHNlIGlmKFV0aWxzLm9ubHlJbkFycmF5KGtleXMsIFsndHJhY2snXSkpIHtcblxuXHRcdFx0fSBlbHNlIGlmKHdvcmRzLmxlbmd0aCkge1xuXHRcdFx0XHRpZihVdGlscy5vbmx5SW5BcnJheSh3b3JkcywgWyduZXh0J10pKSByZXR1cm4gQW5hbHlzZXIuZ2V0RGF0YUluZm8oWydjdXJyZW50J10sIFsnbmV4dFJhY2UnXSwgY2IpXG5cdFx0XHRcdGVsc2UgaWYoVXRpbHMub25lT2ZDb21iaW5hdGlvbnMod29yZHMsIFsnY3VycmVudCcsICdzZWFzb24nLCAnc3VtbWFyeSddLCBbJ2N1cnJlbnQnLCAnc3VtbWFyeSddKSkgcmV0dXJuIEFuYWx5c2VyLmdldERhdGFJbmZvKFsnY3VycmVudCddLCBbJ25leHRSYWNlJywgJ3JhY2VDYWxlbmRhcicsJ2RyaXZlclN0YW5kaW5ncycsICdjb25zdHJ1Y3RvclN0YW5kaW5ncyddLCBjYilcblx0XHRcdFx0ZWxzZSBpZihVdGlscy5vbmVPZkNvbWJpbmF0aW9ucyh3b3JkcywgWydjdXJyZW50JywgJ3NlYXNvbicsICdzdGFuZGluZyddLCBbJ2N1cnJlbnQnLCAnc3RhbmRpbmcnXSkpIHJldHVybiBBbmFseXNlci5nZXREYXRhSW5mbyhbJ2N1cnJlbnQnXSwgWydkcml2ZXJTdGFuZGluZ3MnLCAnY29uc3RydWN0b3JTdGFuZGluZ3MnXSwgY2IpXG5cdFx0XHRcdGVsc2UgaWYoVXRpbHMub25lT2ZDb21iaW5hdGlvbnMod29yZHMsIFsnY3VycmVudCcsICdzZWFzb24nLCAnY2FsZW5kYXInXSwgWydjdXJyZW50JywgJ2NhbGVuZGFyJ10pKSByZXR1cm4gQW5hbHlzZXIuZ2V0RGF0YUluZm8oWydjdXJyZW50J10sIFsncmFjZUNhbGVuZGFyJ10sIGNiKVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjYihbXSlcblx0fVxuXG5cdHN0YXRpYyBnZXREYXRhSW5mbyhkYXRhLCBzZWxlY3Rpb24sIGNiKSB7XG5cdFx0bGV0IHN1bW1hcmllcyA9IFtdXG5cdFx0YXN5bmMuZm9yRWFjaChkYXRhLCAoZCwgY2IxKSA9PiB7XG5cdFx0XHRkID0gZD09J2N1cnJlbnQnID8gbW9tZW50KCkuZm9ybWF0KCdZWVlZJykgOiBkXG5cdFx0XHRzdW1tYXJpZXMucHVzaChfLmZpbHRlcihbe1xuXHRcdFx0XHRuYW1lOiAnTmV4dCBSYWNlJywgdHlwZTogJ25leHRSYWNlJ1xuXHRcdFx0fSwge1xuXHRcdFx0XHRuYW1lOiBgJHtkfSBSYWNlIENhbGVuZGFyYCxcblx0XHRcdFx0dHlwZTogJ3JhY2VDYWxlbmRhcicsXG5cdFx0XHRcdHllYXI6IGRcblx0XHRcdH0sIHtcblx0XHRcdFx0bmFtZTogYCR7ZH0gRHJpdmVyIFN0YW5kaW5nc2AsXG5cdFx0XHRcdHR5cGU6ICdkcml2ZXJTdGFuZGluZ3MnLFxuXHRcdFx0XHR5ZWFyOiBkXG5cdFx0XHR9LCB7XG5cdFx0XHRcdG5hbWU6IGAke2R9IENvbnN0cnVjdG9yIFN0YW5kaW5nc2AsXG5cdFx0XHRcdHR5cGU6ICdjb25zdHJ1Y3RvclN0YW5kaW5ncycsXG5cdFx0XHRcdHllYXI6IGRcblx0XHRcdH0sIHtcblx0XHRcdFx0bmFtZTogYCR7ZC5uYW1lfSdzIEN1cnJlbnQgU2Vhc29uIEluZm9gLFxuXHRcdFx0XHR0eXBlOiAnZHJpdmVyU2Vhc29uU3RhbmRpbmcnLFxuXHRcdFx0XHRkcml2ZXI6IGQuZXJnYXN0SURcblx0XHRcdH0sIHtcblx0XHRcdFx0bmFtZTogYCR7ZC5uYW1lfSdzIFdvcmxkIFRpdGxlc2AsXG5cdFx0XHRcdHR5cGU6ICdkcml2ZXJXb3JsZFRpdGxlcycsXG5cdFx0XHRcdGRyaXZlcjogZC5lcmdhc3RJRFxuXHRcdFx0fSwge1xuXHRcdFx0XHRuYW1lOiBgJHtkLm5hbWV9J3MgU2Vhc29uIEZpbmlzaGVzYCxcblx0XHRcdFx0dHlwZTogJ2RyaXZlclNlYXNvbkZpbmlzaGVzJyxcblx0XHRcdFx0ZHJpdmVyOiBkLmVyZ2FzdElEXG5cdFx0XHR9LCB7XG5cdFx0XHRcdG5hbWU6IGAke2QubmFtZX0ncyBDb25zdHJ1Y3RvcnNgLFxuXHRcdFx0XHR0eXBlOiAnZHJpdmVyVGVhbXMnLFxuXHRcdFx0XHRkcml2ZXI6IGQuZXJnYXN0SURcblx0XHRcdH1dLCBfZCA9PiBfLmluZGV4T2Yoc2VsZWN0aW9uLCBfZC50eXBlKT4tMSkpXG5cdFx0XHRjYjEoKVxuXHRcdH0sIGVyciA9PiBjYihfLmZsYXR0ZW4oc3VtbWFyaWVzKSkpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5hbHlzZXJcbiIsImV4cG9ydCBjb25zdCBzcGVjaWFsS2V5d29yZHMgPSBbe1xuXHRrZXk6ICdkcml2ZXInLFxuXHR3b3JkczogWydkcml2ZXInLCAnZHJpdmVycyddXG59LCB7XG5cdGtleTogJ3RlYW0nLFxuXHR3b3JkczogWydjb25zdHJ1Y3RvcicsICdjb25zdHJ1Y3RvcnMnLCAndGVhbScsICd0ZWFtcyddXG59LCB7XG5cdGtleTogJ3NlYXNvbicsXG5cdHdvcmRzOiBbJ3NlYXNvbicsICdzZWFzb25zJ11cbn0sIHtcblx0a2V5OiAnc3RhbmRpbmcnLFxuXHR3b3JkczogWydzdGFuZGluZycsICdzdGFuZGluZ3MnLCAncmVzdWx0JywgJ3Jlc3VsdHMnXVxufSwge1xuXHRrZXk6ICdjYWxlbmRhcicsXG5cdHdvcmRzOiBbJ2NhbGVuZGFyJywgJ2NhbGVuZGFycycsICdzY2hlZHVsZScsICdzY2hlZHVsZXInLCAnc2NoZWR1bGVzJ11cbn0sIHtcblx0a2V5OiAnY3VycmVudCcsXG5cdHdvcmRzOiBbJ2N1cnJlbnQnLCAncmlnaHQgbm93JywgJ2N1cnJlbnRseScsICd0aGlzIHllYXInLCAndGhpcyB5ZWFycycsICd0aGlzIHllYXJcXCdzJ11cbn0sIHtcblx0a2V5OiAnc3VtbWFyeScsXG5cdHdvcmRzOiBbJ3N1bW1hcnknLCAnc3VtbWFyaWVzJywgJ292ZXJ2aWV3JywgJ292ZXJ2aWV3cyddXG59LCB7XG5cdGtleTogJ25leHQnLFxuXHR3b3JkczogWyduZXh0IHJhY2UnLCAnbmV4dCByYWNlcycsICduZXh0IGdwJywgJ25leHQgZ3JhbmQgcHJpeCcsICduZXh0IHZlbnVlJywgJ25leHQgdmVudWVzJywgJ25leHQgY2lyY3VpdCcsICduZXh0IHRyYWNrJywgJ25leHQgdHJhY2tzJywgJ25leHQgY2lyY3VpdHMnXVxufSwge1xuXHRrZXk6ICd0aXRsZScsXG5cdHdvcmRzOiBbJ3RpdGxlJywgJ3RpdGxlcycsICd3b3JsZCB0aXRsZScsICd3b3JsZCBjaGFtcGlvbnNoaXAnLCAnd29ybGQgY2hhbXBpb25zaGlwcycsICdjaGFtcGlvbiBvZiB0aGUgd29ybGQnLCAnY2hhbXBpb25zaGlwJywgJ2NoYW1waW9uc2hpcHMnXVxufV1cbiIsImltcG9ydCB7RE9NfSBmcm9tICdyZWFjdCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IE1hc29ucnkgZnJvbSAnbWFzb25yeS1sYXlvdXQnXG5cbmxldCBxdWVyeSA9ICcnXG5cbmNsYXNzIFV0aWxzIHtcblx0c3RhdGljIGNhcGl0YWxpemUoc3RyKSB7XG5cdFx0cmV0dXJuIF8oc3RyLnNwbGl0KC8oPz1bQS1aXSkvKSkubWFwKHR4dCA9PiB0eHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eHQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKCkpLnZhbHVlKCkuam9pbignICcpXG5cdH1cblxuXHRzdGF0aWMgZm9ybWF0RW50aXR5U3RyaW5nKGUpIHtcblx0XHRpZihlLnN0YXJ0c1dpdGgoJ2h0dHA6Ly8nKSB8fCBlLnN0YXJ0c1dpdGgoJ2h0dHBzOi8vJykpIHtcblx0XHRcdHJldHVybiBET00uYSh7aHJlZjogZSwgdGFyZ2V0OiAnX2JsYW5rJ30sIGUpXG5cdFx0fVxuXHRcdGlmKC9eKFxcZHs0fSktKFxcZHsxLDJ9KS0oXFxkezEsMn0pJC8udGVzdChlKSkge1xuXHRcdFx0cmV0dXJuIG1vbWVudChlLCAnWVlZWS1NTS1ERCcpLmZvcm1hdCgnTEwnKVxuXHRcdH1cblx0XHRyZXR1cm4gZVxuXHR9XG5cblx0c3RhdGljIG5hdHVyYWxLZXl3b3JkQ29tYmluYXRpb25zKGtleXMpIHtcblx0XHRsZXQgY2h1bmtzID0ga2V5cy5sZW5ndGhcblx0XHRsZXQgcmV0ID0gW11cblx0XHRmb3IobGV0IHg9MTt4PD1jaHVua3M7eCsrKSB7XG5cdFx0XHRmb3IobGV0IHk9MTt5PD0oY2h1bmtzLXgrMSk7eSsrKSB7XG5cdFx0XHRcdHJldC5wdXNoKF8uc2xpY2Uoa2V5cywgeS0xLCAoeS0xK3gpKS5qb2luKCcgJykpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXRcblx0fVxuXG5cdHN0YXRpYyBhcnJheUNvbWJpbmF0aW9ucyhhLCBtaW4gPSAxKSB7XG4gICAgdmFyIGZuID0gKG4sIHNyYywgZ290LCBhbGwpID0+IHtcbiAgICAgICAgaWYgKG4gPT0gMCkge1xuICAgICAgICAgICAgaWYgKGdvdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgYWxsW2FsbC5sZW5ndGhdID0gZ290XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBmb3IodmFyIGo9MDtqPHNyYy5sZW5ndGg7aisrKSB7XG4gICAgICAgICAgICBmbihuIC0gMSwgc3JjLnNsaWNlKGogKyAxKSwgZ290LmNvbmNhdChbc3JjW2pdXSksIGFsbClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgdmFyIGFsbCA9IFtdXG4gICAgZm9yKHZhciBpPW1pbjtpPGEubGVuZ3RoO2krKykge1xuICAgICAgICBmbihpLCBhLCBbXSwgYWxsKVxuICAgIH1cbiAgICBhbGwucHVzaChhKVxuICAgIHJldHVybiBhbGxcblx0fVxuXG5cdHN0YXRpYyBvbmx5SW5BcnJheShhcnJheSwgc2hvdWxkQmVJbikge1xuXHRcdGlmKGFycmF5Lmxlbmd0aCAhPSBzaG91bGRCZUluLmxlbmd0aCkgcmV0dXJuIGZhbHNlXG5cdFx0bGV0IHJldCA9IHRydWVcblx0XHRfLmZvckVhY2goc2hvdWxkQmVJbiwgc2JpID0+IHtcblx0XHRcdGlmKF8uaW5kZXhPZihhcnJheSwgc2JpKT09LTEpIHJldCA9IGZhbHNlXG5cdFx0fSlcblx0XHRyZXR1cm4gcmV0XG5cdH1cblxuXHRzdGF0aWMgb25lT2ZDb21iaW5hdGlvbnMoYXJyYXksIHdvcmRzLCBpbXBvcnRhbnQgPSBbXSkge1xuXHRcdGxldCBjb21iaW5hdGlvbnMgPSBVdGlscy5hcnJheUNvbWJpbmF0aW9ucyh3b3Jkcylcblx0XHRsZXQgcmV0ID0gZmFsc2Vcblx0XHRfLmZvckVhY2goY29tYmluYXRpb25zLCB3b3JkID0+IHtcblx0XHRcdGlmKFV0aWxzLm9ubHlJbkFycmF5KGFycmF5LCB3b3JkKSkge1xuXHRcdFx0XHRpZihpbXBvcnRhbnQubGVuZ3RoKSB7XG5cdFx0XHRcdFx0aWYoXy5pbnRlcnNlY3Rpb24od29yZCwgaW1wb3J0YW50KS5sZW5ndGggPT0gaW1wb3J0YW50Lmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0cmV0ID0gdHJ1ZVxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldCA9IHRydWVcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2Vcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0cmV0dXJuIHJldFxuXHR9XG5cblx0c3RhdGljIHBsdWNrVmFsdWUoZGF0YSwga2V5cykge1xuXHRcdF8uZm9yRWFjaChrZXlzLCBrID0+IHtcblx0XHRcdGRhdGEgPSBkYXRhW2tdXG5cdFx0XHRpZihfLmlzQXJyYXkoZGF0YSkpIGRhdGEgPSBfLmZpcnN0KGRhdGEpXG5cdFx0fSlcblx0XHRyZXR1cm4gZGF0YVxuXHR9XG5cblx0c3RhdGljIHJlcG9zaXRpb24oKSB7XG5cdFx0bGV0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFzb25yeUdyaWQnKVxuXHRcdG5ldyBNYXNvbnJ5KGdyaWQsIHtcblx0ICBcdGl0ZW1TZWxlY3RvcjogJy5ncmlkSXRlbScsXG5cdCAgXHRjb2x1bW5XaWR0aDogJy5ncmlkU2l6ZXInLFxuXHRcdCAgcGVyY2VudFBvc2l0aW9uOiB0cnVlXG5cdCAgfSlcblx0fVxuXG5cdHN0YXRpYyBzZXRRdWVyeShxKSB7XG5cdFx0cXVlcnkgPSBxXG5cdH1cblxuXHRzdGF0aWMgZ2V0UXVlcnkoKSB7XG5cdFx0cmV0dXJuIHF1ZXJ5XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXRpbHNcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgcmVkNTA6ICcjZmZlYmVlJyxcbiAgcmVkMTAwOiAnI2ZmY2RkMicsXG4gIHJlZDIwMDogJyNlZjlhOWEnLFxuICByZWQzMDA6ICcjZTU3MzczJyxcbiAgcmVkNDAwOiAnI2VmNTM1MCcsXG4gIHJlZDUwMDogJyNmNDQzMzYnLFxuICByZWQ2MDA6ICcjZTUzOTM1JyxcbiAgcmVkNzAwOiAnI2QzMmYyZicsXG4gIHJlZDgwMDogJyNjNjI4MjgnLFxuICByZWQ5MDA6ICcjYjcxYzFjJyxcbiAgcmVkQTEwMDogJyNmZjhhODAnLFxuICByZWRBMjAwOiAnI2ZmNTI1MicsXG4gIHJlZEE0MDA6ICcjZmYxNzQ0JyxcbiAgcmVkQTcwMDogJyNkNTAwMDAnLFxuXG4gIHBpbms1MDogJyNmY2U0ZWMnLFxuICBwaW5rMTAwOiAnI2Y4YmJkMCcsXG4gIHBpbmsyMDA6ICcjZjQ4ZmIxJyxcbiAgcGluazMwMDogJyNmMDYyOTInLFxuICBwaW5rNDAwOiAnI2VjNDA3YScsXG4gIHBpbms1MDA6ICcjZTkxZTYzJyxcbiAgcGluazYwMDogJyNkODFiNjAnLFxuICBwaW5rNzAwOiAnI2MyMTg1YicsXG4gIHBpbms4MDA6ICcjYWQxNDU3JyxcbiAgcGluazkwMDogJyM4ODBlNGYnLFxuICBwaW5rQTEwMDogJyNmZjgwYWInLFxuICBwaW5rQTIwMDogJyNmZjQwODEnLFxuICBwaW5rQTQwMDogJyNmNTAwNTcnLFxuICBwaW5rQTcwMDogJyNjNTExNjInLFxuXG4gIHB1cnBsZTUwOiAnI2YzZTVmNScsXG4gIHB1cnBsZTEwMDogJyNlMWJlZTcnLFxuICBwdXJwbGUyMDA6ICcjY2U5M2Q4JyxcbiAgcHVycGxlMzAwOiAnI2JhNjhjOCcsXG4gIHB1cnBsZTQwMDogJyNhYjQ3YmMnLFxuICBwdXJwbGU1MDA6ICcjOWMyN2IwJyxcbiAgcHVycGxlNjAwOiAnIzhlMjRhYScsXG4gIHB1cnBsZTcwMDogJyM3YjFmYTInLFxuICBwdXJwbGU4MDA6ICcjNmExYjlhJyxcbiAgcHVycGxlOTAwOiAnIzRhMTQ4YycsXG4gIHB1cnBsZUExMDA6ICcjZWE4MGZjJyxcbiAgcHVycGxlQTIwMDogJyNlMDQwZmInLFxuICBwdXJwbGVBNDAwOiAnI2Q1MDBmOScsXG4gIHB1cnBsZUE3MDA6ICcjYWEwMGZmJyxcblxuICBkZWVwUHVycGxlNTA6ICcjZWRlN2Y2JyxcbiAgZGVlcFB1cnBsZTEwMDogJyNkMWM0ZTknLFxuICBkZWVwUHVycGxlMjAwOiAnI2IzOWRkYicsXG4gIGRlZXBQdXJwbGUzMDA6ICcjOTU3NWNkJyxcbiAgZGVlcFB1cnBsZTQwMDogJyM3ZTU3YzInLFxuICBkZWVwUHVycGxlNTAwOiAnIzY3M2FiNycsXG4gIGRlZXBQdXJwbGU2MDA6ICcjNWUzNWIxJyxcbiAgZGVlcFB1cnBsZTcwMDogJyM1MTJkYTgnLFxuICBkZWVwUHVycGxlODAwOiAnIzQ1MjdhMCcsXG4gIGRlZXBQdXJwbGU5MDA6ICcjMzExYjkyJyxcbiAgZGVlcFB1cnBsZUExMDA6ICcjYjM4OGZmJyxcbiAgZGVlcFB1cnBsZUEyMDA6ICcjN2M0ZGZmJyxcbiAgZGVlcFB1cnBsZUE0MDA6ICcjNjUxZmZmJyxcbiAgZGVlcFB1cnBsZUE3MDA6ICcjNjIwMGVhJyxcblxuICBpbmRpZ281MDogJyNlOGVhZjYnLFxuICBpbmRpZ28xMDA6ICcjYzVjYWU5JyxcbiAgaW5kaWdvMjAwOiAnIzlmYThkYScsXG4gIGluZGlnbzMwMDogJyM3OTg2Y2InLFxuICBpbmRpZ280MDA6ICcjNWM2YmMwJyxcbiAgaW5kaWdvNTAwOiAnIzNmNTFiNScsXG4gIGluZGlnbzYwMDogJyMzOTQ5YWInLFxuICBpbmRpZ283MDA6ICcjMzAzZjlmJyxcbiAgaW5kaWdvODAwOiAnIzI4MzU5MycsXG4gIGluZGlnbzkwMDogJyMxYTIzN2UnLFxuICBpbmRpZ29BMTAwOiAnIzhjOWVmZicsXG4gIGluZGlnb0EyMDA6ICcjNTM2ZGZlJyxcbiAgaW5kaWdvQTQwMDogJyMzZDVhZmUnLFxuICBpbmRpZ29BNzAwOiAnIzMwNGZmZScsXG5cbiAgYmx1ZTUwOiAnI2UzZjJmZCcsXG4gIGJsdWUxMDA6ICcjYmJkZWZiJyxcbiAgYmx1ZTIwMDogJyM5MGNhZjknLFxuICBibHVlMzAwOiAnIzY0YjVmNicsXG4gIGJsdWU0MDA6ICcjNDJhNWY1JyxcbiAgYmx1ZTUwMDogJyMyMTk2ZjMnLFxuICBibHVlNjAwOiAnIzFlODhlNScsXG4gIGJsdWU3MDA6ICcjMTk3NmQyJyxcbiAgYmx1ZTgwMDogJyMxNTY1YzAnLFxuICBibHVlOTAwOiAnIzBkNDdhMScsXG4gIGJsdWVBMTAwOiAnIzgyYjFmZicsXG4gIGJsdWVBMjAwOiAnIzQ0OGFmZicsXG4gIGJsdWVBNDAwOiAnIzI5NzlmZicsXG4gIGJsdWVBNzAwOiAnIzI5NjJmZicsXG5cbiAgbGlnaHRCbHVlNTA6ICcjZTFmNWZlJyxcbiAgbGlnaHRCbHVlMTAwOiAnI2IzZTVmYycsXG4gIGxpZ2h0Qmx1ZTIwMDogJyM4MWQ0ZmEnLFxuICBsaWdodEJsdWUzMDA6ICcjNGZjM2Y3JyxcbiAgbGlnaHRCbHVlNDAwOiAnIzI5YjZmNicsXG4gIGxpZ2h0Qmx1ZTUwMDogJyMwM2E5ZjQnLFxuICBsaWdodEJsdWU2MDA6ICcjMDM5YmU1JyxcbiAgbGlnaHRCbHVlNzAwOiAnIzAyODhkMScsXG4gIGxpZ2h0Qmx1ZTgwMDogJyMwMjc3YmQnLFxuICBsaWdodEJsdWU5MDA6ICcjMDE1NzliJyxcbiAgbGlnaHRCbHVlQTEwMDogJyM4MGQ4ZmYnLFxuICBsaWdodEJsdWVBMjAwOiAnIzQwYzRmZicsXG4gIGxpZ2h0Qmx1ZUE0MDA6ICcjMDBiMGZmJyxcbiAgbGlnaHRCbHVlQTcwMDogJyMwMDkxZWEnLFxuXG4gIGN5YW41MDogJyNlMGY3ZmEnLFxuICBjeWFuMTAwOiAnI2IyZWJmMicsXG4gIGN5YW4yMDA6ICcjODBkZWVhJyxcbiAgY3lhbjMwMDogJyM0ZGQwZTEnLFxuICBjeWFuNDAwOiAnIzI2YzZkYScsXG4gIGN5YW41MDA6ICcjMDBiY2Q0JyxcbiAgY3lhbjYwMDogJyMwMGFjYzEnLFxuICBjeWFuNzAwOiAnIzAwOTdhNycsXG4gIGN5YW44MDA6ICcjMDA4MzhmJyxcbiAgY3lhbjkwMDogJyMwMDYwNjQnLFxuICBjeWFuQTEwMDogJyM4NGZmZmYnLFxuICBjeWFuQTIwMDogJyMxOGZmZmYnLFxuICBjeWFuQTQwMDogJyMwMGU1ZmYnLFxuICBjeWFuQTcwMDogJyMwMGI4ZDQnLFxuXG4gIHRlYWw1MDogJyNlMGYyZjEnLFxuICB0ZWFsMTAwOiAnI2IyZGZkYicsXG4gIHRlYWwyMDA6ICcjODBjYmM0JyxcbiAgdGVhbDMwMDogJyM0ZGI2YWMnLFxuICB0ZWFsNDAwOiAnIzI2YTY5YScsXG4gIHRlYWw1MDA6ICcjMDA5Njg4JyxcbiAgdGVhbDYwMDogJyMwMDg5N2InLFxuICB0ZWFsNzAwOiAnIzAwNzk2YicsXG4gIHRlYWw4MDA6ICcjMDA2OTVjJyxcbiAgdGVhbDkwMDogJyMwMDRkNDAnLFxuICB0ZWFsQTEwMDogJyNhN2ZmZWInLFxuICB0ZWFsQTIwMDogJyM2NGZmZGEnLFxuICB0ZWFsQTQwMDogJyMxZGU5YjYnLFxuICB0ZWFsQTcwMDogJyMwMGJmYTUnLFxuXG4gIGdyZWVuNTA6ICcjZThmNWU5JyxcbiAgZ3JlZW4xMDA6ICcjYzhlNmM5JyxcbiAgZ3JlZW4yMDA6ICcjYTVkNmE3JyxcbiAgZ3JlZW4zMDA6ICcjODFjNzg0JyxcbiAgZ3JlZW40MDA6ICcjNjZiYjZhJyxcbiAgZ3JlZW41MDA6ICcjNGNhZjUwJyxcbiAgZ3JlZW42MDA6ICcjNDNhMDQ3JyxcbiAgZ3JlZW43MDA6ICcjMzg4ZTNjJyxcbiAgZ3JlZW44MDA6ICcjMmU3ZDMyJyxcbiAgZ3JlZW45MDA6ICcjMWI1ZTIwJyxcbiAgZ3JlZW5BMTAwOiAnI2I5ZjZjYScsXG4gIGdyZWVuQTIwMDogJyM2OWYwYWUnLFxuICBncmVlbkE0MDA6ICcjMDBlNjc2JyxcbiAgZ3JlZW5BNzAwOiAnIzAwYzg1MycsXG5cbiAgbGlnaHRHcmVlbjUwOiAnI2YxZjhlOScsXG4gIGxpZ2h0R3JlZW4xMDA6ICcjZGNlZGM4JyxcbiAgbGlnaHRHcmVlbjIwMDogJyNjNWUxYTUnLFxuICBsaWdodEdyZWVuMzAwOiAnI2FlZDU4MScsXG4gIGxpZ2h0R3JlZW40MDA6ICcjOWNjYzY1JyxcbiAgbGlnaHRHcmVlbjUwMDogJyM4YmMzNGEnLFxuICBsaWdodEdyZWVuNjAwOiAnIzdjYjM0MicsXG4gIGxpZ2h0R3JlZW43MDA6ICcjNjg5ZjM4JyxcbiAgbGlnaHRHcmVlbjgwMDogJyM1NThiMmYnLFxuICBsaWdodEdyZWVuOTAwOiAnIzMzNjkxZScsXG4gIGxpZ2h0R3JlZW5BMTAwOiAnI2NjZmY5MCcsXG4gIGxpZ2h0R3JlZW5BMjAwOiAnI2IyZmY1OScsXG4gIGxpZ2h0R3JlZW5BNDAwOiAnIzc2ZmYwMycsXG4gIGxpZ2h0R3JlZW5BNzAwOiAnIzY0ZGQxNycsXG5cbiAgbGltZTUwOiAnI2Y5ZmJlNycsXG4gIGxpbWUxMDA6ICcjZjBmNGMzJyxcbiAgbGltZTIwMDogJyNlNmVlOWMnLFxuICBsaW1lMzAwOiAnI2RjZTc3NScsXG4gIGxpbWU0MDA6ICcjZDRlMTU3JyxcbiAgbGltZTUwMDogJyNjZGRjMzknLFxuICBsaW1lNjAwOiAnI2MwY2EzMycsXG4gIGxpbWU3MDA6ICcjYWZiNDJiJyxcbiAgbGltZTgwMDogJyM5ZTlkMjQnLFxuICBsaW1lOTAwOiAnIzgyNzcxNycsXG4gIGxpbWVBMTAwOiAnI2Y0ZmY4MScsXG4gIGxpbWVBMjAwOiAnI2VlZmY0MScsXG4gIGxpbWVBNDAwOiAnI2M2ZmYwMCcsXG4gIGxpbWVBNzAwOiAnI2FlZWEwMCcsXG5cbiAgeWVsbG93NTA6ICcjZmZmZGU3JyxcbiAgeWVsbG93MTAwOiAnI2ZmZjljNCcsXG4gIHllbGxvdzIwMDogJyNmZmY1OWQnLFxuICB5ZWxsb3czMDA6ICcjZmZmMTc2JyxcbiAgeWVsbG93NDAwOiAnI2ZmZWU1OCcsXG4gIHllbGxvdzUwMDogJyNmZmViM2InLFxuICB5ZWxsb3c2MDA6ICcjZmRkODM1JyxcbiAgeWVsbG93NzAwOiAnI2ZiYzAyZCcsXG4gIHllbGxvdzgwMDogJyNmOWE4MjUnLFxuICB5ZWxsb3c5MDA6ICcjZjU3ZjE3JyxcbiAgeWVsbG93QTEwMDogJyNmZmZmOGQnLFxuICB5ZWxsb3dBMjAwOiAnI2ZmZmYwMCcsXG4gIHllbGxvd0E0MDA6ICcjZmZlYTAwJyxcbiAgeWVsbG93QTcwMDogJyNmZmQ2MDAnLFxuXG4gIGFtYmVyNTA6ICcjZmZmOGUxJyxcbiAgYW1iZXIxMDA6ICcjZmZlY2IzJyxcbiAgYW1iZXIyMDA6ICcjZmZlMDgyJyxcbiAgYW1iZXIzMDA6ICcjZmZkNTRmJyxcbiAgYW1iZXI0MDA6ICcjZmZjYTI4JyxcbiAgYW1iZXI1MDA6ICcjZmZjMTA3JyxcbiAgYW1iZXI2MDA6ICcjZmZiMzAwJyxcbiAgYW1iZXI3MDA6ICcjZmZhMDAwJyxcbiAgYW1iZXI4MDA6ICcjZmY4ZjAwJyxcbiAgYW1iZXI5MDA6ICcjZmY2ZjAwJyxcbiAgYW1iZXJBMTAwOiAnI2ZmZTU3ZicsXG4gIGFtYmVyQTIwMDogJyNmZmQ3NDAnLFxuICBhbWJlckE0MDA6ICcjZmZjNDAwJyxcbiAgYW1iZXJBNzAwOiAnI2ZmYWIwMCcsXG5cbiAgb3JhbmdlNTA6ICcjZmZmM2UwJyxcbiAgb3JhbmdlMTAwOiAnI2ZmZTBiMicsXG4gIG9yYW5nZTIwMDogJyNmZmNjODAnLFxuICBvcmFuZ2UzMDA6ICcjZmZiNzRkJyxcbiAgb3JhbmdlNDAwOiAnI2ZmYTcyNicsXG4gIG9yYW5nZTUwMDogJyNmZjk4MDAnLFxuICBvcmFuZ2U2MDA6ICcjZmI4YzAwJyxcbiAgb3JhbmdlNzAwOiAnI2Y1N2MwMCcsXG4gIG9yYW5nZTgwMDogJyNlZjZjMDAnLFxuICBvcmFuZ2U5MDA6ICcjZTY1MTAwJyxcbiAgb3JhbmdlQTEwMDogJyNmZmQxODAnLFxuICBvcmFuZ2VBMjAwOiAnI2ZmYWI0MCcsXG4gIG9yYW5nZUE0MDA6ICcjZmY5MTAwJyxcbiAgb3JhbmdlQTcwMDogJyNmZjZkMDAnLFxuXG4gIGRlZXBPcmFuZ2U1MDogJyNmYmU5ZTcnLFxuICBkZWVwT3JhbmdlMTAwOiAnI2ZmY2NiYycsXG4gIGRlZXBPcmFuZ2UyMDA6ICcjZmZhYjkxJyxcbiAgZGVlcE9yYW5nZTMwMDogJyNmZjhhNjUnLFxuICBkZWVwT3JhbmdlNDAwOiAnI2ZmNzA0MycsXG4gIGRlZXBPcmFuZ2U1MDA6ICcjZmY1NzIyJyxcbiAgZGVlcE9yYW5nZTYwMDogJyNmNDUxMWUnLFxuICBkZWVwT3JhbmdlNzAwOiAnI2U2NGExOScsXG4gIGRlZXBPcmFuZ2U4MDA6ICcjZDg0MzE1JyxcbiAgZGVlcE9yYW5nZTkwMDogJyNiZjM2MGMnLFxuICBkZWVwT3JhbmdlQTEwMDogJyNmZjllODAnLFxuICBkZWVwT3JhbmdlQTIwMDogJyNmZjZlNDAnLFxuICBkZWVwT3JhbmdlQTQwMDogJyNmZjNkMDAnLFxuICBkZWVwT3JhbmdlQTcwMDogJyNkZDJjMDAnLFxuXG4gIGJyb3duNTA6ICcjZWZlYmU5JyxcbiAgYnJvd24xMDA6ICcjZDdjY2M4JyxcbiAgYnJvd24yMDA6ICcjYmNhYWE0JyxcbiAgYnJvd24zMDA6ICcjYTE4ODdmJyxcbiAgYnJvd240MDA6ICcjOGQ2ZTYzJyxcbiAgYnJvd241MDA6ICcjNzk1NTQ4JyxcbiAgYnJvd242MDA6ICcjNmQ0YzQxJyxcbiAgYnJvd243MDA6ICcjNWQ0MDM3JyxcbiAgYnJvd244MDA6ICcjNGUzNDJlJyxcbiAgYnJvd245MDA6ICcjM2UyNzIzJyxcblxuICBibHVlR3JleTUwOiAnI2VjZWZmMScsXG4gIGJsdWVHcmV5MTAwOiAnI2NmZDhkYycsXG4gIGJsdWVHcmV5MjAwOiAnI2IwYmVjNScsXG4gIGJsdWVHcmV5MzAwOiAnIzkwYTRhZScsXG4gIGJsdWVHcmV5NDAwOiAnIzc4OTA5YycsXG4gIGJsdWVHcmV5NTAwOiAnIzYwN2Q4YicsXG4gIGJsdWVHcmV5NjAwOiAnIzU0NmU3YScsXG4gIGJsdWVHcmV5NzAwOiAnIzQ1NWE2NCcsXG4gIGJsdWVHcmV5ODAwOiAnIzM3NDc0ZicsXG4gIGJsdWVHcmV5OTAwOiAnIzI2MzIzOCcsXG5cbiAgZ3JleTUwOiAnI2ZhZmFmYScsXG4gIGdyZXkxMDA6ICcjZjVmNWY1JyxcbiAgZ3JleTIwMDogJyNlZWVlZWUnLFxuICBncmV5MzAwOiAnI2UwZTBlMCcsXG4gIGdyZXk0MDA6ICcjYmRiZGJkJyxcbiAgZ3JleTUwMDogJyM5ZTllOWUnLFxuICBncmV5NjAwOiAnIzc1NzU3NScsXG4gIGdyZXk3MDA6ICcjNjE2MTYxJyxcbiAgZ3JleTgwMDogJyM0MjQyNDInLFxuICBncmV5OTAwOiAnIzIxMjEyMScsXG5cbiAgYmxhY2s6ICcjMDAwMDAwJyxcbiAgd2hpdGU6ICcjZmZmZmZmJyxcblxuICB0cmFuc3BhcmVudDogJ3JnYmEoMCwgMCwgMCwgMCknLFxuICBmdWxsQmxhY2s6ICdyZ2JhKDAsIDAsIDAsIDEpJyxcbiAgZGFya0JsYWNrOiAncmdiYSgwLCAwLCAwLCAwLjg3KScsXG4gIGxpZ2h0QmxhY2s6ICdyZ2JhKDAsIDAsIDAsIDAuNTQpJyxcbiAgbWluQmxhY2s6ICdyZ2JhKDAsIDAsIDAsIDAuMjYpJyxcbiAgZmFpbnRCbGFjazogJ3JnYmEoMCwgMCwgMCwgMC4xMiknLFxuICBmdWxsV2hpdGU6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcbiAgZGFya1doaXRlOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg3KScsXG4gIGxpZ2h0V2hpdGU6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTQpJ1xufVxuIiwiaW1wb3J0ICQgZnJvbSAnc3VwZXJhZ2VudCdcblxuY2xhc3MgRW50aXR5U2VydmljZSB7XG5cdHN0YXRpYyBnZXRFbnRpdHkoZW50aXR5LCBjYikge1xuXHRcdCQucG9zdCgnL2FpL2VudGl0eScpXG5cdFx0LnNlbmQoZW50aXR5KVxuXHRcdC5lbmQoKGVyciwgcmVzKSA9PiB7XG5cdFx0XHRjYihlcnIsIHJlcylcblx0XHR9KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVudGl0eVNlcnZpY2VcbiIsImltcG9ydCAkIGZyb20gJ3N1cGVyYWdlbnQnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgYXN5bmMgZnJvbSAnYXN5bmMnXG5cbmNsYXNzIEYxU2VydmljZSB7XG5cdHN0YXRpYyBnZXRFbnRpdHkoZW50aXR5LCBjYikge1xuXHRcdGxldCB0eXBlID0gJ2RyaXZlcnMnXG5cdFx0aWYoZW50aXR5LnR5cGUgPT0gJ3RyYWNrJykge1xuXHRcdFx0dHlwZSA9ICdjaXJjdWl0cydcblx0XHR9IGVsc2UgaWYoZW50aXR5LnR5cGUgPT0gJ3RlYW0nKSB7XG5cdFx0XHR0eXBlID0gJ2NvbnN0cnVjdG9ycydcblx0XHR9XG5cdFx0JC5nZXQoYGh0dHA6Ly9lcmdhc3QuY29tL2FwaS9mMS8ke3R5cGV9LyR7ZW50aXR5LmVyZ2FzdElEfS5qc29uYClcblx0XHQuZW5kKChlcnIsIHJlcykgPT4ge1xuXHRcdFx0aWYoZXJyKSByZXR1cm4gY2IoZXJyKVxuXHRcdFx0aWYoZW50aXR5LnR5cGU9PSdkcml2ZXInKSB7XG5cdFx0XHRcdGxldCBkYXRhID0gcmVzLmJvZHkuTVJEYXRhLkRyaXZlclRhYmxlLkRyaXZlcnNcblx0XHRcdFx0aWYoIWRhdGEubGVuZ3RoKSByZXR1cm4gY2IodHJ1ZSlcblx0XHRcdFx0ZGF0YSA9IF8uZmlyc3QoZGF0YSlcblx0XHRcdFx0cmV0dXJuIGNiKG51bGwsIHtcblx0XHRcdFx0XHRnaXZlbk5hbWU6IHt2YWx1ZTogZGF0YS5naXZlbk5hbWUgfHwgJ24vYSd9LFxuXHRcdFx0XHRcdGZhbWlseU5hbWU6IHt2YWx1ZTogZGF0YS5mYW1pbHlOYW1lIHx8ICduL2EnfSxcblx0XHRcdFx0XHRjb2RlOiB7dmFsdWU6IGRhdGEuY29kZSB8fCAnbi9hJ30sXG5cdFx0XHRcdFx0ZGF0ZU9mQmlydGg6IHt2YWx1ZTogZGF0YS5kYXRlT2ZCaXJ0aCB8fCAnbi9hJ30sXG5cdFx0XHRcdFx0bmF0aW9uYWxpdHk6IHt2YWx1ZTogZGF0YS5uYXRpb25hbGl0eSB8fCAnbi9hJ30sXG5cdFx0XHRcdFx0bnVtYmVyOiB7dmFsdWU6IGRhdGEucGVybWFuZW50TnVtYmVyIHx8ICduL2EnfSxcblx0XHRcdFx0XHR1cmw6IHt2YWx1ZTogZGF0YS51cmwgfHwgJ24vYSd9XG5cdFx0XHRcdH0pXG5cdFx0XHR9IGVsc2UgaWYoZW50aXR5LnR5cGU9PSd0cmFjaycpIHtcblx0XHRcdFx0bGV0IGRhdGEgPSByZXMuYm9keS5NUkRhdGEuQ2lyY3VpdFRhYmxlLkNpcmN1aXRzXG5cdFx0XHRcdGlmKCFkYXRhLmxlbmd0aCkgcmV0dXJuIGNiKHRydWUpXG5cdFx0XHRcdGRhdGEgPSBfLmZpcnN0KGRhdGEpXG5cdFx0XHRcdHJldHVybiBjYihudWxsLCB7XG5cdFx0XHRcdFx0bmFtZToge3ZhbHVlOiBkYXRhLmNpcmN1aXROYW1lIHx8ICduL2EnfSxcblx0XHRcdFx0XHRjaXR5OiB7dmFsdWU6IGRhdGEuTG9jYXRpb24uY2l0eSB8fCAnbi9hJ30sXG5cdFx0XHRcdFx0Y291bnRyeToge3ZhbHVlOiBkYXRhLkxvY2F0aW9uLmNvdW50cnkgfHwgJ24vYSd9LFxuXHRcdFx0XHRcdHVybDoge3ZhbHVlOiBkYXRhLnVybCB8fCAnbi9hJ31cblx0XHRcdFx0fSlcblx0XHRcdH0gZWxzZSBpZihlbnRpdHkudHlwZT09J3RlYW0nKSB7XG5cdFx0XHRcdGxldCBkYXRhID0gcmVzLmJvZHkuTVJEYXRhLkNvbnN0cnVjdG9yVGFibGUuQ29uc3RydWN0b3JzXG5cdFx0XHRcdGlmKCFkYXRhLmxlbmd0aCkgcmV0dXJuIGNiKHRydWUpXG5cdFx0XHRcdGRhdGEgPSBfLmZpcnN0KGRhdGEpXG5cdFx0XHRcdHJldHVybiBjYihudWxsLCB7XG5cdFx0XHRcdFx0bmFtZToge3ZhbHVlOiBkYXRhLm5hbWUgfHwgJ24vYSd9LFxuXHRcdFx0XHRcdG5hdGlvbmFsaXR5OiB7dmFsdWU6IGRhdGEubmF0aW9uYWxpdHkgfHwgJ24vYSd9LFxuXHRcdFx0XHRcdHVybDoge3ZhbHVlOiBkYXRhLnVybCB8fCAnbi9hJ31cblx0XHRcdFx0fSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjYih0cnVlKVxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cblxuXHRzdGF0aWMgZ2V0U3VtbWFyeShzdW1tYXJ5LCBjYikge1xuXHRcdHN3aXRjaChzdW1tYXJ5LnR5cGUpIHtcblx0XHRcdGNhc2UgJ3JhY2VDYWxlbmRhcic6XG5cdFx0XHRcdEYxU2VydmljZS5nZXRSYWNlQ2FsZW5kYXIoc3VtbWFyeS55ZWFyLCBjYilcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2RyaXZlclN0YW5kaW5ncyc6XG5cdFx0XHRcdEYxU2VydmljZS5nZXREcml2ZXJTZWFzb25SZXN1bHRzKHN1bW1hcnkueWVhciwgY2IpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdjb25zdHJ1Y3RvclN0YW5kaW5ncyc6XG5cdFx0XHRcdEYxU2VydmljZS5nZXRUZWFtU2Vhc29uUmVzdWx0cyhzdW1tYXJ5LnllYXIsIGNiKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnZHJpdmVyV29ybGRUaXRsZXMnOlxuXHRcdFx0XHRGMVNlcnZpY2UuZ2V0RHJpdmVyV29ybGRUaXRsZXMoc3VtbWFyeS5kcml2ZXIsIGNiKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnZHJpdmVyU2Vhc29uRmluaXNoZXMnOlxuXHRcdFx0XHRGMVNlcnZpY2UuZ2V0RHJpdmVyU2Vhc29uRmluaXNoZXMoc3VtbWFyeS5kcml2ZXIsIGNiKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnZHJpdmVyVGVhbXMnOlxuXHRcdFx0XHRGMVNlcnZpY2UuZ2V0RHJpdmVyVGVhbXMoc3VtbWFyeS5kcml2ZXIsIGNiKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnZHJpdmVyU2Vhc29uU3RhbmRpbmcnOlxuXHRcdFx0XHRGMVNlcnZpY2UuZ2V0RHJpdmVyU2Vhc29uU3RhbmRpbmcoc3VtbWFyeS5kcml2ZXIsIGNiKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnbmV4dFJhY2UnOlxuXHRcdFx0XHRGMVNlcnZpY2UuZ2V0TmV4dFJhY2UoY2IpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRjYih0cnVlKVxuXHRcdFx0XHRicmVha1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBnZXREcml2ZXJTZWFzb25SZXN1bHRzKHllYXIsIGNiKSB7XG5cdFx0RjFTZXJ2aWNlLmNhbGxBcGkoYGh0dHA6Ly9lcmdhc3QuY29tL2FwaS9mMS8ke3llYXJ9L2RyaXZlclN0YW5kaW5ncy5qc29uYCwgWydTdGFuZGluZ3NUYWJsZScsICdTdGFuZGluZ3NMaXN0cycsICdEcml2ZXJTdGFuZGluZ3MnXSwgY2IpXG5cdH1cblxuXHRzdGF0aWMgZ2V0VGVhbVNlYXNvblJlc3VsdHMoeWVhciwgY2IpIHtcblx0XHRGMVNlcnZpY2UuY2FsbEFwaShgaHR0cDovL2VyZ2FzdC5jb20vYXBpL2YxLyR7eWVhcn0vY29uc3RydWN0b3JTdGFuZGluZ3MuanNvbmAsIFsnU3RhbmRpbmdzVGFibGUnLCAnU3RhbmRpbmdzTGlzdHMnLCAnQ29uc3RydWN0b3JTdGFuZGluZ3MnXSwgY2IpXG5cdH1cblxuXHRzdGF0aWMgZ2V0UmFjZUNhbGVuZGFyKHllYXIsIGNiKSB7XG5cdFx0RjFTZXJ2aWNlLmNhbGxBcGkoYGh0dHA6Ly9lcmdhc3QuY29tL2FwaS9mMS8ke3llYXJ9Lmpzb25gLCBbJ1JhY2VUYWJsZScsICdSYWNlcyddLCBjYilcblx0fVxuXG5cdHN0YXRpYyBnZXREcml2ZXJSZXN1bHRzQnlTZWFzb24oZHJpdmVyLCB5ZWFyLCBjYikge1xuXHRcdEYxU2VydmljZS5jYWxsQXBpKGBodHRwOi8vZXJnYXN0LmNvbS9hcGkvZjEvJHt5ZWFyfS9kcml2ZXJzLyR7ZHJpdmVyfS9yZXN1bHRzLmpzb25gLCBbJ1JhY2VUYWJsZScsICdSYWNlcyddLCBjYilcblx0fVxuXG5cdHN0YXRpYyBnZXREcml2ZXJXb3JsZFRpdGxlcyhkcml2ZXIsIGNiKSB7XG5cdFx0RjFTZXJ2aWNlLmNhbGxBcGkoYGh0dHA6Ly9lcmdhc3QuY29tL2FwaS9mMS9kcml2ZXJzLyR7ZHJpdmVyfS9kcml2ZXJTdGFuZGluZ3MvMS9zZWFzb25zLmpzb25gLCBbJ1NlYXNvblRhYmxlJywgJ1NlYXNvbnMnXSwgY2IpXG5cdH1cblxuXHRzdGF0aWMgZ2V0RHJpdmVyU2Vhc29uRmluaXNoZXMoZHJpdmVyLCBjYikge1xuXHRcdEYxU2VydmljZS5jYWxsQXBpKGBodHRwOi8vZXJnYXN0LmNvbS9hcGkvZjEvZHJpdmVycy8ke2RyaXZlcn0vZHJpdmVyU3RhbmRpbmdzLmpzb25gLCBbJ1N0YW5kaW5nc1RhYmxlJywgJ1N0YW5kaW5nc0xpc3RzJ10sIGNiKVxuXHR9XG5cblx0c3RhdGljIGdldERyaXZlclRlYW1zKGRyaXZlciwgY2IpIHtcblx0XHRGMVNlcnZpY2UuY2FsbEFwaShgaHR0cDovL2VyZ2FzdC5jb20vYXBpL2YxL2RyaXZlcnMvJHtkcml2ZXJ9L2NvbnN0cnVjdG9ycy5qc29uYCwgWydDb25zdHJ1Y3RvclRhYmxlJywgJ0NvbnN0cnVjdG9ycyddLCBjYilcblx0fVxuXG5cdHN0YXRpYyBnZXREcml2ZXJTZWFzb25TdGFuZGluZyhkcml2ZXIsIGNiKSB7XG5cdFx0RjFTZXJ2aWNlLmNhbGxBcGkoYGh0dHA6Ly9lcmdhc3QuY29tL2FwaS9mMS9jdXJyZW50L2RyaXZlcnMvJHtkcml2ZXJ9L2RyaXZlclN0YW5kaW5ncy5qc29uYCwgWydTdGFuZGluZ3NUYWJsZScsICdTdGFuZGluZ3NMaXN0cycsICdEcml2ZXJTdGFuZGluZ3MnXSwgY2IpXG5cdH1cblxuXHRzdGF0aWMgZ2V0TmV4dFJhY2UoY2IpIHtcblx0XHRGMVNlcnZpY2UuY2FsbEFwaShgaHR0cDovL2VyZ2FzdC5jb20vYXBpL2YxL2N1cnJlbnQvbmV4dC5qc29uYCwgWydSYWNlVGFibGUnLCAnUmFjZXMnXSwgY2IpXG5cdH1cblxuXHRzdGF0aWMgY2FsbEFwaShsaW5rLCBrZXlzLCBjYikge1xuXHRcdCQuZ2V0KGxpbmspXG5cdFx0LmVuZCgoZXJyLCByZXMpID0+IHtcblx0XHRcdGlmKGVycikgcmV0dXJuIGNiKHRydWUpXG5cdFx0XHRsZXQgZGF0YSA9IHJlcy5ib2R5Lk1SRGF0YVxuXHRcdFx0YXN5bmMuZm9yRWFjaFNlcmllcyhrZXlzLCAoaywgY2IxKSA9PiB7XG5cdFx0XHRcdGlmKCFkYXRhW2tdKSByZXR1cm4gY2IxKHRydWUpXG5cdFx0XHRcdGRhdGEgPSBkYXRhW2tdXG5cdFx0XHRcdGlmKF8uaXNBcnJheShkYXRhKSkge1xuXHRcdFx0XHRcdGlmKCFkYXRhLmxlbmd0aCkgcmV0dXJuIGNiMSh0cnVlKVxuXHRcdFx0XHRcdGlmKF8ubGFzdChrZXlzKSE9aykgZGF0YSA9IF8uZmlyc3QoZGF0YSlcblx0XHRcdFx0fVxuXHRcdFx0XHRjYjEoKVxuXHRcdFx0fSwgZXJyID0+IGNiKGVyciwgZGF0YSkpXG5cdFx0fSlcblx0fVxuXG5cdHN0YXRpYyByZXN1bHRzRm9ybWF0ZXIodHlwZSkge1xuXHRcdHN3aXRjaCh0eXBlKSB7XG5cdFx0XHRjYXNlICdyYWNlQ2FsZW5kYXInOlxuXHRcdFx0XHRyZXR1cm4gW3tcblx0XHRcdFx0XHRuYW1lOiAnUm91bmQnLFxuXHRcdFx0XHRcdGtleTogWydyb3VuZCddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnTmFtZScsXG5cdFx0XHRcdFx0a2V5OiBbJ3JhY2VOYW1lJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdEYXRlJyxcblx0XHRcdFx0XHRrZXk6IFsnZGF0ZSddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnQ2lyY3VpdCcsXG5cdFx0XHRcdFx0a2V5OiBbJ0NpcmN1aXQnLCAnY2lyY3VpdE5hbWUnXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ0NvdW50cnknLFxuXHRcdFx0XHRcdGtleTogWydDaXJjdWl0JywgJ0xvY2F0aW9uJywgJ2NvdW50cnknXVxuXHRcdFx0XHR9XVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnZHJpdmVyU3RhbmRpbmdzJzpcblx0XHRcdFx0cmV0dXJuIFt7XG5cdFx0XHRcdFx0bmFtZTogJ1Bvc2l0aW9uJyxcblx0XHRcdFx0XHRrZXk6IFsncG9zaXRpb24nXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ0ZpcnN0IE5hbWUnLFxuXHRcdFx0XHRcdGtleTogWydEcml2ZXInLCAnZ2l2ZW5OYW1lJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdMYXN0IE5hbWUnLFxuXHRcdFx0XHRcdGtleTogWydEcml2ZXInLCAnZmFtaWx5TmFtZSddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnVGVhbScsXG5cdFx0XHRcdFx0a2V5OiBbJ0NvbnN0cnVjdG9ycycsICduYW1lJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdQb2ludHMnLFxuXHRcdFx0XHRcdGtleTogWydwb2ludHMnXVxuXHRcdFx0XHR9XVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnY29uc3RydWN0b3JTdGFuZGluZ3MnOlxuXHRcdFx0XHRyZXR1cm4gW3tcblx0XHRcdFx0XHRuYW1lOiAnUG9zaXRpb24nLFxuXHRcdFx0XHRcdGtleTogWydwb3NpdGlvbiddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnVGVhbScsXG5cdFx0XHRcdFx0a2V5OiBbJ0NvbnN0cnVjdG9yJywgJ25hbWUnXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ1BvaW50cycsXG5cdFx0XHRcdFx0a2V5OiBbJ3BvaW50cyddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnV2lucycsXG5cdFx0XHRcdFx0a2V5OiBbJ3dpbnMnXVxuXHRcdFx0XHR9XVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnZHJpdmVyV29ybGRUaXRsZXMnOlxuXHRcdFx0XHRyZXR1cm4gW3tcblx0XHRcdFx0XHRuYW1lOiAnU2Vhc29uJyxcblx0XHRcdFx0XHRrZXk6IFsnc2Vhc29uJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdNb3JlIGluZm8nLFxuXHRcdFx0XHRcdGtleTogWyd1cmwnXVxuXHRcdFx0XHR9XVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnZHJpdmVyU2Vhc29uRmluaXNoZXMnOlxuXHRcdFx0XHRyZXR1cm4gW3tcblx0XHRcdFx0XHRuYW1lOiAnU2Vhc29uJyxcblx0XHRcdFx0XHRrZXk6IFsnc2Vhc29uJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdQb3NpdGlvbicsXG5cdFx0XHRcdFx0a2V5OiBbJ0RyaXZlclN0YW5kaW5ncycsICdwb3NpdGlvbiddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnUG9pbnRzJyxcblx0XHRcdFx0XHRrZXk6IFsnRHJpdmVyU3RhbmRpbmdzJywgJ3BvaW50cyddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnV2lucycsXG5cdFx0XHRcdFx0a2V5OiBbJ0RyaXZlclN0YW5kaW5ncycsICd3aW5zJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdUZWFtJyxcblx0XHRcdFx0XHRrZXk6IFsnRHJpdmVyU3RhbmRpbmdzJywgJ0NvbnN0cnVjdG9ycycsICduYW1lJ11cblx0XHRcdFx0fV1cblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2RyaXZlclRlYW1zJzpcblx0XHRcdFx0cmV0dXJuIFt7XG5cdFx0XHRcdFx0bmFtZTogJ1RlYW0nLFxuXHRcdFx0XHRcdGtleTogWyduYW1lJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdOYXRpb25hbGl0eScsXG5cdFx0XHRcdFx0a2V5OiBbJ25hdGlvbmFsaXR5J11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdNb3JlIEluZm8nLFxuXHRcdFx0XHRcdGtleTogWyd1cmwnXVxuXHRcdFx0XHR9XVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnZHJpdmVyU2Vhc29uU3RhbmRpbmcnOlxuXHRcdFx0XHRyZXR1cm4gW3tcblx0XHRcdFx0XHRuYW1lOiAnUG9zaXRpb24nLFxuXHRcdFx0XHRcdGtleTogWydwb3NpdGlvbiddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnUG9pbnRzJyxcblx0XHRcdFx0XHRrZXk6IFsncG9pbnRzJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdXaW5zJyxcblx0XHRcdFx0XHRrZXk6IFsnd2lucyddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnVGVhbScsXG5cdFx0XHRcdFx0a2V5OiBbJ0NvbnN0cnVjdG9ycycsICduYW1lJ11cblx0XHRcdFx0fV1cblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ25leHRSYWNlJzpcblx0XHRcdFx0cmV0dXJuIFt7XG5cdFx0XHRcdFx0bmFtZTogJ1JvdW5kJyxcblx0XHRcdFx0XHRrZXk6IFsncm91bmQnXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ05hbWUnLFxuXHRcdFx0XHRcdGtleTogWydyYWNlTmFtZSddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnRGF0ZScsXG5cdFx0XHRcdFx0a2V5OiBbJ2RhdGUnXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ0NpcmN1aXQnLFxuXHRcdFx0XHRcdGtleTogWydDaXJjdWl0JywgJ2NpcmN1aXROYW1lJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdDb3VudHJ5Jyxcblx0XHRcdFx0XHRrZXk6IFsnQ2lyY3VpdCcsICdMb2NhdGlvbicsICdjb3VudHJ5J11cblx0XHRcdFx0fV1cblx0XHRcdFx0YnJlYWtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBbXVxuXHRcdFx0XHRicmVha1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBGMVNlcnZpY2VcbiIsImltcG9ydCAkIGZyb20gJ3N1cGVyYWdlbnQnXG5cbmNvbnN0IHRlbXAgPSBbXG5cdCdMZXdpcyBIYW1pbHRvbicsXG5cdCdOaWNvIFJvc2JlcmcnLFxuXHQnU2ViYXN0aWFuIFZldHRlbCcsXG5cdCdLaW1pIFJhaWtrb25lbicsXG5cdCdEYW5pZWwgUmljY2lhcmRvJyxcblx0J01heCBWZXJzdGFwcGVuJyxcblx0J0ZlbGlwcGUgTWFzc2EnLFxuXHQnVmFsdHRlcmkgQm90dGFzJyxcblx0J1NlcmdpbyBQZXJleicsXG5cdCdOaWNvIEh1bGtlbmJlcmcnLFxuXHQnRGFuaWlsIEt2eWF0Jyxcblx0J0NhcmxvcyBTYWlueicsXG5cdCdSb21haW4gR3Jvc2plYW4nLFxuXHQnRmVybmFuZG8gQWxvbnNvJyxcblx0J0plbnNvbiBCdXR0b24nLFxuXHQnS2V2aW4gTWFnbnVzc2VuJyxcblx0J0VzdGViYW4gR3V0aWVycmV6Jyxcblx0J0pvbHlvbiBQYWxtZXInLFxuXHQnTWFyY3VzIEVyaWNzc29uJyxcblx0J1Bhc2NhbCBXZWhybGVpbicsXG5cdCdGZWxpcGUgTmFzcicsXG5cdCdSaW8gSGFyeWFudG8nXG5dXG5cbmNsYXNzIFN1Z2dlc3Rpb25TZXJ2aWNlIHtcblx0c3RhdGljIGdldFN1Z2dlc3Rpb25zKGNiKSB7XG5cdFx0JC5nZXQoJy9haS9zdWdnZXN0aW9ucycpXG5cdFx0LmVuZCgoZXJyLCByZXMpID0+IHtcblx0XHRcdGNiKGVyciA/IFtdIDogcmVzLmJvZHkpXG5cdFx0fSlcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdWdnZXN0aW9uU2VydmljZVxuIiwiaW1wb3J0ICQgZnJvbSAnc3VwZXJhZ2VudCdcblxuY2xhc3MgVGV4dEFuYWx5c2lzU2VydmljZSB7XG5cdHN0YXRpYyBhbmFseXNlKHR4dCwgY2IpIHtcblx0XHQkLnBvc3QoYC9haS9hbmFseXNlYClcblx0XHQuc2VuZCh7dGV4dDogdHh0fSlcblx0XHQuZW5kKChlcnIsIHJlcykgPT4ge1xuXHRcdFx0Y2IoZXJyLCByZXMuYm9keSB8fCBudWxsKVxuXHRcdH0pXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dEFuYWx5c2lzU2VydmljZVxuIl19
