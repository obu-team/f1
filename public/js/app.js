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
				Analyser.dataCase(query, profiles, dates, function (summaries) {
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
				if (profiles.length) {} else {
					var apiData = ['raceCalendar', 'driverStandings', 'constructorStandings'];
					if (_Utils2.default.oneOfCombinations(words, ['season', 'standing'])) apiData = ['driverStandings', 'constructorStandings'];else if (_Utils2.default.oneOfCombinations(words, ['calendar', 'season'])) apiData = ['raceCalendar'];else if (_Utils2.default.oneOfCombinations(words, ['driver', 'standing', 'season'])) apiData = ['driverStandings'];else if (_Utils2.default.oneOfCombinations(words, ['team', 'standing', 'season'])) apiData = ['constructorStandings'];
					return Analyser.getDataInfo(dates, apiData, cb);
				}
			} else {
				if (_Utils2.default.onlyInArray(keys, ['driver'])) return Analyser.getDataInfo(grouped.driver, Analyser.inspectDriverData(words), cb);else if (_Utils2.default.onlyInArray(keys, ['team'])) return Analyser.getDataInfo(grouped.team, Analyser.inspectTeamData(words), cb);else if (_Utils2.default.onlyInArray(keys, ['track'])) return Analyser.getDataInfo(grouped.track, Analyser.inspectTrackData(words), cb);else if (_Utils2.default.onlyInArray(keys, ['driver', 'team'])) {
					var _ret = function () {
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

					if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
				} else if (_Utils2.default.onlyInArray(keys, ['driver', 'track'])) {
					var _ret2 = function () {
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

					if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
				} else if (_Utils2.default.onlyInArray(keys, ['team', 'track'])) {
					var _ret3 = function () {
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

					if ((typeof _ret3 === 'undefined' ? 'undefined' : _typeof(_ret3)) === "object") return _ret3.v;
				} else if (_Utils2.default.onlyInArray(keys, ['driver', 'team', 'track'])) {
					var _ret4 = function () {
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

					if ((typeof _ret4 === 'undefined' ? 'undefined' : _typeof(_ret4)) === "object") return _ret4.v;
				} else if (words.length) {
					if (_Utils2.default.onlyInArray(words, ['next'])) return Analyser.getDataInfo(['current'], ['nextRace'], cb);else if (_Utils2.default.oneOfCombinations(words, ['current', 'season', 'summary'], ['current', 'summary'])) return Analyser.getDataInfo(['current'], ['nextRace', 'raceCalendar', 'driverStandings', 'constructorStandings'], cb);else if (_Utils2.default.oneOfCombinations(words, ['current', 'season', 'standing', 'driver'], ['current', 'standing', 'driver'])) return Analyser.getDataInfo(['current'], ['driverStandings'], cb);else if (_Utils2.default.oneOfCombinations(words, ['current', 'season', 'standing', 'team'], ['current', 'standing', 'team'])) return Analyser.getDataInfo(['current'], ['constructorStandings'], cb);else if (_Utils2.default.oneOfCombinations(words, ['current', 'season', 'standing'], ['current', 'standing'])) return Analyser.getDataInfo(['current'], ['driverStandings', 'constructorStandings'], cb);else if (_Utils2.default.oneOfCombinations(words, ['current', 'season', 'calendar'], ['current', 'calendar'])) return Analyser.getDataInfo(['current'], ['raceCalendar'], cb);else if (_lodash2.default.indexOf(words, 'current') > -1) {
						var _apiData2 = [];
						if (_lodash2.default.indexOf(words, 'next') > -1) _apiData2.push('nextRace');
						if (_lodash2.default.indexOf(words, 'standing') > -1 && _lodash2.default.indexOf(words, 'driver') == -1 && _lodash2.default.indexOf(words, 'team') == -1) _apiData2.push(['driverStandings', 'constructorStandings']);
						if (_lodash2.default.indexOf(words, 'driver') > -1) _apiData2.push('driverStandings');
						if (_lodash2.default.indexOf(words, 'team') > -1) _apiData2.push('constructorStandings');
						if (_lodash2.default.indexOf(words, 'calendar') > -1) _apiData2.push('raceCalendar');
						_apiData2 = _lodash2.default.flatten(_apiData2);
						if (_apiData2.length) return Analyser.getDataInfo(['current'], _apiData2, cb);
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
			if (_Utils2.default.oneOfCombinations(words, ['current', 'standing'])) apiData = ['currentTrackResults'];
			return apiData;
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
	words: ['summary', 'summaries', 'overview', 'overviews', 'everything']
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJyZWFjdC9hcHAuanMiLCJyZWFjdC9jb21wb25lbnRzL0FwcC5qcyIsInJlYWN0L2NvbXBvbmVudHMvRGFzaGJvYXJkLmpzIiwicmVhY3QvY29tcG9uZW50cy9Ob3RGb3VuZC5qcyIsInJlYWN0L2NvbXBvbmVudHMvU2VhcmNoR3JpZC5qcyIsInJlYWN0L2NvbXBvbmVudHMvVUkvQ2VudGVyQ29udGFpbmVyLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9GdWxsU2NyZWVuLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9HcmlkQ29udGFpbmVyLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9Mb2FkZXIuanMiLCJyZWFjdC9jb21wb25lbnRzL1VJL01hc29ucnlHcmlkLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9OYXYuanMiLCJyZWFjdC9jb21wb25lbnRzL1VJL1BhcGVyLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9QYXBlckJ0bi5qcyIsInJlYWN0L2NvbXBvbmVudHMvVUkvUGFwZXJDb250ZW50LmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9QYXBlckhlYWRlci5qcyIsInJlYWN0L2NvbXBvbmVudHMvVUkvUGFwZXJJbWcuanMiLCJyZWFjdC9jb21wb25lbnRzL1VJL1BhcGVyTGkuanMiLCJyZWFjdC9jb21wb25lbnRzL1VJL1BhcGVyTGluZS5qcyIsInJlYWN0L2NvbXBvbmVudHMvVUkvUGFwZXJVbC5qcyIsInJlYWN0L2NvbXBvbmVudHMvVUkvUHJvZmlsZS5qcyIsInJlYWN0L2NvbXBvbmVudHMvVUkvU2VhcmNoSW5wdXQuanMiLCJyZWFjdC9jb21wb25lbnRzL1VJL1N1bW1hcnkuanMiLCJyZWFjdC9jb21wb25lbnRzL1VJL1RhYmxlLmpzIiwicmVhY3QvbGliL0FuYWx5c2VyLmpzIiwicmVhY3QvbGliL0tleXdvcmRzLmpzIiwicmVhY3QvbGliL1V0aWxzLmpzIiwicmVhY3QvbGliL2NvbG9ycy5qcyIsInJlYWN0L3NlcnZpY2VzL0VudGl0eS5TZXJ2aWNlLmpzIiwicmVhY3Qvc2VydmljZXMvRjEuU2VydmljZS5qcyIsInJlYWN0L3NlcnZpY2VzL1N1Z2dlc3Rpb24uU2VydmljZS5qcyIsInJlYWN0L3NlcnZpY2VzL1RleHRBbmFseXNpcy5TZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBSUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFKQTs7QUFNQSxzQkFDRTtBQUFBO0VBQUEsRUFBUSxvQ0FBUjtFQUNDO0FBQUE7SUFBQSxFQUFPLE1BQUssR0FBWixFQUFnQix3QkFBaEI7SUFDQyx5REFBWSw4QkFBWixHQUREO0lBRUMsb0RBQU8sTUFBSyxHQUFaLEVBQWdCLDZCQUFoQjtBQUZEO0FBREQsQ0FERixFQU9HLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQVBIOzs7Ozs7Ozs7OztBQ1hBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLFNBQVM7QUFDZCxTQUFRO0FBQ1AsY0FBWSxpQkFBTztBQURaLEVBRE07QUFJZCxLQUFJO0FBQ0gsY0FBWSwrQ0FEVDtBQUVILGtCQUFnQjtBQUZiO0FBSlUsQ0FBZjs7SUFVTSxHOzs7QUFDTCxjQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxxRkFDWixLQURZOztBQUVsQixRQUFLLEtBQUwsR0FBYTtBQUNaLFNBQU0sS0FETTtBQUVaLGdCQUFhO0FBRkQsR0FBYjtBQUZrQjtBQU1sQjs7Ozt1Q0FDb0I7QUFBQTs7QUFDcEIsd0JBQWtCLGNBQWxCLENBQWlDLGdCQUFRO0FBQ3hDLFdBQUssUUFBTCxDQUFjO0FBQ2IsV0FBTSxJQURPO0FBRWIsa0JBQWE7QUFGQSxLQUFkO0FBSUEsSUFMRDtBQU1BOzs7aUNBQ2M7QUFDZCxVQUFPO0FBQUE7SUFBQSxFQUFZLE9BQU8sQ0FBQyxPQUFPLEVB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QUFDLFNBQUQsRUFBWSxVQUFaO0FBRkgsTUFOSSxFQVNKO0FBQ0YsWUFBTSxXQURKO0FBRUYsV0FBSyxDQUFDLEtBQUQ7QUFGSCxNQVRJLENBQVA7QUFhQTtBQUNEO0FBQ0MsWUFBTyxFQUFQO0FBQ0E7QUE5UUY7QUFnUkE7Ozs7OztrQkFHYSxTOzs7Ozs7Ozs7OztBQ3BlZjs7Ozs7Ozs7QUFFQSxJQUFNLE9BQU8sQ0FDWixnQkFEWSxFQUVaLGNBRlksRUFHWixrQkFIWSxFQUlaLGdCQUpZLEVBS1osa0JBTFksRUFNWixnQkFOWSxFQU9aLGVBUFksRUFRWixpQkFSWSxFQVNaLGNBVFksRUFVWixpQkFWWSxFQVdaLGNBWFksRUFZWixjQVpZLEVBYVosaUJBYlksRUFjWixpQkFkWSxFQWVaLGVBZlksRUFnQlosaUJBaEJZLEVBaUJaLG1CQWpCWSxFQWtCWixlQWxCWSxFQW1CWixpQkFuQlksRUFvQlosaUJBcEJZLEVBcUJaLGFBckJZLEVBc0JaLGNBdEJZLENBQWI7O0lBeUJNLGlCOzs7Ozs7O2lDQUNpQixFLEVBQUk7QUFDekIsd0JBQUUsR0FBRixDQUFNLGlCQUFOLEVBQ0MsR0FERCxDQUNLLFVBQUMsR0FBRCxFQUFNLEdBQU4sRUFBYztBQUNsQixPQUFHLE1BQU0sRUFBTixHQUFXLElBQUksSUFBbEI7QUFDQSxJQUhEO0FBSUE7Ozs7OztrQkFHYSxpQjs7Ozs7Ozs7Ozs7QUNwQ2Y7Ozs7Ozs7O0lBRU0sbUI7Ozs7Ozs7MEJBQ1UsRyxFQUFLLEUsRUFBSTtBQUN2Qix3QkFBRSxJQUFGLGdCQUNDLElBREQsQ0FDTSxFQUFDLE1BQU0sR0FBUCxFQUROLEVBRUMsR0FGRCxDQUVLLFVBQUMsR0FBRCxFQUFNLEdBQU4sRUFBYztBQUNsQixPQUFHLEdBQUgsRUFBUSxJQUFJLElBQUosSUFBWSxJQUFwQjtBQUNBLElBSkQ7QUFLQTs7Ozs7O2tCQUdhLG1CIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQge1JvdXRlciwgUm91dGUsIEluZGV4Um91dGUsIGJyb3dzZXJIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgaW5qZWN0VGFwRXZlbnRQbHVnaW4gZnJvbSAncmVhY3QtdGFwLWV2ZW50LXBsdWdpbidcblxuaW5qZWN0VGFwRXZlbnRQbHVnaW4oKVxuXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnXG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJy4vY29tcG9uZW50cy9EYXNoYm9hcmQnXG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi9jb21wb25lbnRzL05vdEZvdW5kJ1xuXG5yZW5kZXIoKFxuICA8Um91dGVyIGhpc3Rvcnk9e2Jyb3dzZXJIaXN0b3J5fT5cbiAgXHQ8Um91dGUgcGF0aD0nLycgY29tcG9uZW50PXtBcHB9PlxuICBcdFx0PEluZGV4Um91dGUgY29tcG9uZW50PXtEYXNoYm9hcmR9IC8+XG4gIFx0XHQ8Um91dGUgcGF0aD0nKicgY29tcG9uZW50PXtOb3RGb3VuZH0gLz5cbiAgXHQ8L1JvdXRlPlxuICA8L1JvdXRlcj5cbiksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSlcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5pbXBvcnQgU3VnZ2VzdGlvblNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvU3VnZ2VzdGlvbi5TZXJ2aWNlJ1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9saWIvY29sb3JzJ1xuXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vVUkvTG9hZGVyJ1xuaW1wb3J0IEZ1bGxTY3JlZW4gZnJvbSAnLi9VSS9GdWxsU2NyZWVuJ1xuaW1wb3J0IENlbnRlckNvbnRhaW5lciBmcm9tICcuL1VJL0NlbnRlckNvbnRhaW5lcidcblxuY29uc3Qgc3R5bGVzID0ge1xuXHRsb2FkZXI6IHtcblx0XHRiYWNrZ3JvdW5kOiBjb2xvcnMucmVkNTAwXG5cdH0sXG5cdGJnOiB7XG5cdFx0YmFja2dyb3VuZDogJ3VybChcXCcvaW1nL2JnMi5qcGdcXCcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyJyxcblx0XHRiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ1xuXHR9XG59XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGluaXQ6IGZhbHNlLFxuXHRcdFx0c3VnZ2VzdGlvbnM6IFtdXG5cdFx0fVxuXHR9XG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHRTdWdnZXN0aW9uU2VydmljZS5nZXRTdWdnZXN0aW9ucyhkYXRhID0+IHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRpbml0OiB0cnVlLFxuXHRcdFx0XHRzdWdnZXN0aW9uczogZGF0YVxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cdHJlbmRlckxvYWRlcigpIHtcblx0XHRyZXR1cm4gPEZ1bGxTY3JlZW4gc3R5bGU9e1tzdHlsZXMuYmddfT48Q2VudGVyQ29udGFpbmVyPjxMb2FkZXIgc3R5bGU9e1tzdHlsZXMubG9hZGVyXX0gLz48L0NlbnRlckNvbnRhaW5lcj48L0Z1bGxTY3JlZW4+XG5cdH1cblx0cmVuZGVyQ29udGVudCgpIHtcblx0XHR2YXIgY2hpbGRyZW5XaXRoUHJvcHMgPSBSZWFjdC5DaGlsZHJlbi5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgY2hpbGQgPT4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgIFx0c3VnZ2VzdGlvbnM6IHRoaXMuc3RhdGUuc3VnZ2VzdGlvbnNcbiAgICAgICAgfSkpXG5cdFx0cmV0dXJuIDxkaXY+e2NoaWxkcmVuV2l0aFByb3BzfTwvZGl2PlxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRpZighdGhpcy5zdGF0ZS5pbml0KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yZW5kZXJMb2FkZXIoKVxuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5yZW5kZXJDb250ZW50KClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oQXBwKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgYXN5bmMgZnJvbSAnYXN5bmMnXG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vbGliL2NvbG9ycydcbmltcG9ydCBUZXh0QW5hbHlzaXNTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL1RleHRBbmFseXNpcy5TZXJ2aWNlJ1xuaW1wb3J0IFV0aWxzIGZyb20gJy4uL2xpYi9VdGlscydcblxuaW1wb3J0IExvYWRlciBmcm9tICcuL1VJL0xvYWRlcidcbmltcG9ydCBGdWxsU2NyZWVuIGZyb20gJy4vVUkvRnVsbFNjcmVlbidcbmltcG9ydCBDZW50ZXJDb250YWluZXIgZnJvbSAnLi9VSS9DZW50ZXJDb250YWluZXInXG5pbXBvcnQgU2VhcmNoSW5wdXQgZnJvbSAnLi9VSS9TZWFyY2hJbnB1dCdcbmltcG9ydCBTZWFyY2hHcmlkIGZyb20gJy4vU2VhcmNoR3JpZCdcblxuY29uc3Qgc3R5bGVzID0ge1xuXHRsb2dvOiB7XG5cdFx0aGVpZ2h0OiAxMDBcblx0fSxcblx0aW5wdXQ6IHtcblx0XHR3aWR0aDogNTUwLFxuXHRcdGhlaWdodDogNDAsXG5cdFx0ZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG5cdFx0bWFyZ2luVG9wOiAzNFxuXHR9LFxuXHRlYXNlOiB7XG5cdFx0dHJhbnNpdGlvbjogJ2FsbCAwLjFzIGVhc2UtaW4tb3V0J1xuXHR9LFxuXHRibHVyOiB7XG5cdFx0ZmlsdGVyOiAnYmx1cigxMHB4KSdcblx0fSxcblx0bG9hZGVyOiB7XG5cdFx0Y29udGFpbmVyOiB7XG5cdFx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcblx0XHRcdHRvcDogMCxcblx0XHRcdGxlZnQ6IDAsXG5cdFx0XHR6SW5kZXg6IDEwMDAwXG5cdFx0fSxcblx0XHRsb2FkZXI6IHtcblx0XHRcdGJhY2tncm91bmQ6IGNvbG9ycy5yZWQ1MDBcblx0XHR9XG5cdH0sXG5cdGJnOiB7XG5cdFx0YmFja2dyb3VuZDogJ3VybChcXCcvaW1nL2JnMi5qcGdcXCcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyJyxcblx0XHRiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ1xuXHR9XG59XG5cbmNsYXNzIERhc2hib2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNlYXJjaDogZmFsc2UsXG5cdFx0XHRtb2RhbDogZmFsc2UsXG5cdFx0XHRzcmM6ICcnLFxuXHRcdFx0cmVjb21tZW5kOiAnJyxcblx0XHRcdGVudGl0aWVzOiBbXVxuXHRcdH1cblx0XHR0aGlzLm9uU3JjQ2hhbmdlID0gdGhpcy5vblNyY0NoYW5nZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5zZWFyY2ggPSB0aGlzLnNlYXJjaC5iaW5kKHRoaXMpXG5cdFx0dGhpcy5vblRhYiA9IHRoaXMub25UYWIuYmluZCh0aGlzKVxuXHRcdHRoaXMub25Ib21lID0gdGhpcy5vbkhvbWUuYmluZCh0aGlzKVxuXHR9XG5cdG9uU3JjQ2hhbmdlKHYpIHtcblx0XHRsZXQgcmVjID0gJydcblx0XHRsZXQgd29yZHMgPSB2LnNwbGl0KCcgJylcblx0XHRsZXQgd29yZCA9IF8ubGFzdCh3b3Jkcylcblx0XHRpZih3b3JkICYmIHdvcmQubGVuZ3RoPj0yKSB7XG5cdFx0XHRsZXQgciA9IF8uZmluZCh0aGlzLnByb3BzLnN1Z2dlc3Rpb25zLCBzID0+IHtcblx0XHRcdFx0cmV0dXJuIHMudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKHdvcmQudG9Mb3dlckNhc2UoKSlcblx0XHRcdH0pXG5cdFx0XHRyID0gciB8fCAnJ1xuXHRcdFx0aWYocikgcmVjID0gci5zdWJzdHJpbmcod29yZC5sZW5ndGgpXG5cdFx0fVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c3JjOiB2LFxuXHRcdFx0cmVjb21tZW5kOiByZWNcblx0XHR9KVxuXHR9XG5cdG9uVGFiKCkge1xuXHRcdGxldCB7c3JjLCByZWNvbW1lbmR9ID0gdGhpcy5zdGF0ZVxuXHRcdGxldCBuZXdTcmMgPSBzcmMgKyByZWNvbW1lbmRcblx0XHRVdGlscy5zZXRRdWVyeShuZXdTcmMpXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzcmM6IG5ld1NyYyxcblx0XHRcdHJlY29tbWVuZDogJydcblx0XHR9KVxuXHR9XG5cdG9uSG9tZSgpIHtcblx0XHRVdGlscy5zZXRRdWVyeSgnJylcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHNlYXJjaDogZmFsc2UsXG5cdFx0XHRtb2RhbDogZmFsc2UsXG5cdFx0XHRzcmM6ICcnLFxuXHRcdFx0cmVjb21tZW5kOiAnJyxcblx0XHRcdGVudGl0aWVzOiBbXVxuXHRcdH0pXG5cdH1cblx0c2VhcmNoKCkge1xuXHRcdGlmKCF0aGlzLnN0YXRlLnNyYykgcmV0dXJuIGZhbHNlXG5cdFx0bGV0IHNyYyA9IHRoaXMuc3RhdGUuc3JjICsgdGhpcy5zdGF0ZS5yZWNvbW1lbmRcblx0XHRVdGlscy5zZXRRdWVyeShzcmMpXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzZWFyY2g6IHRydWUsXG5cdFx0XHRzcmM6IHNyYyxcblx0XHRcdHJlY29tbWVuZDogJydcblx0XHR9KVxuXHRcdFRleHRBbmFseXNpc1NlcnZpY2UuYW5hbHlzZShzcmMsIChlcnIsIHJlcykgPT4ge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHNlYXJjaDogZmFsc2UsXG5cdFx0XHRcdGVudGl0aWVzOiByZXMsXG5cdFx0XHRcdG1vZGFsOiB0cnVlXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblx0cmVuZGVyRnVsbFNyYygpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEZ1bGxTY3JlZW4gc3R5bGU9e1tzdHlsZXMuYmddfT5cblx0XHRcdFx0PENlbnRlckNvbnRhaW5lcj5cblx0XHRcdFx0XHQ8aW1nIHNyYz0nL2ltZy9mMV9sb2dvX2JyaWdodC5wbmcnIHN0eWxlPXtzdHlsZXMubG9nb30gLz48YnIvPlxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3N0eWxlcy5pbnB1dH0+PFNlYXJjaElucHV0IHJlY29tbWVuZD17dGhpcy5zdGF0ZS5yZWNvbW1lbmR9IHZhbHVlPXt0aGlzLnN0YXRlLnNyY30gb25DaGFuZ2U9e3RoaXMub25TcmNDaGFuZ2V9IG9uRW50ZXI9e3RoaXMuc2VhcmNofSBvblRhYj17dGhpcy5vblRhYn0gLz48L2Rpdj48YnIvPlxuXHRcdFx0XHQ8L0NlbnRlckNvbnRhaW5lcj5cblx0XHRcdDwvRnVsbFNjcmVlbj5cblx0XHQpXG5cdH1cblx0cmVuZGVyR3JpZCgpIHtcblx0XHRyZXR1cm4gPFNlYXJjaEdyaWQgb25Ib21lPXt0aGlzLm9uSG9tZX0gcmVjb21tZW5kPXt0aGlzLnN0YXRlLnJlY29tbWVuZH0gdmFsdWU9e3RoaXMuc3RhdGUuc3JjfSBvbkNoYW5nZT17dGhpcy5vblNyY0NoYW5nZX0gb25FbnRlcj17dGhpcy5zZWFyY2h9IG9uVGFiPXt0aGlzLm9uVGFifSBlbnRpdGllcz17dGhpcy5zdGF0ZS5lbnRpdGllc30gLz5cblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge3NlYXJjaCwgbW9kYWx9ID0gdGhpcy5zdGF0ZVxuXHRcdGNvbnN0IGxvYWRlciA9IHRoaXMuc3RhdGUuc2VhcmNoID8gPEZ1bGxTY3JlZW4gc3R5bGU9e1tzdHlsZXMubG9hZGVyLmNvbnRhaW5lcl19PjxDZW50ZXJDb250YWluZXI+PExvYWRlciBzdHlsZT17W3N0eWxlcy5sb2FkZXIubG9hZGVyXX0gLz48L0NlbnRlckNvbnRhaW5lcj48L0Z1bGxTY3JlZW4+IDogbnVsbFxuXHRcdGxldCBjbnQgPSB0aGlzLnN0YXRlLm1vZGFsID8gdGhpcy5yZW5kZXJHcmlkKCkgOiB0aGlzLnJlbmRlckZ1bGxTcmMoKVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHR7bG9hZGVyfVxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXtbc3R5bGVzLmVhc2UsIHNlYXJjaCA/IHN0eWxlcy5ibHVyIDogbnVsbF19PlxuXHRcdFx0XHRcdHtjbnR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShEYXNoYm9hcmQpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuaW1wb3J0IEZ1bGxTY3JlZW4gZnJvbSAnLi9VSS9GdWxsU2NyZWVuJ1xuaW1wb3J0IENlbnRlckNvbnRhaW5lciBmcm9tICcuL1VJL0NlbnRlckNvbnRhaW5lcidcblxuY29uc3QgTm90Rm91bmQgPSAocHJvcHMpID0+IDxGdWxsU2NyZWVuPjxDZW50ZXJDb250YWluZXI+Tm90IGZvdW5kPC9DZW50ZXJDb250YWluZXI+PC9GdWxsU2NyZWVuPlxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oTm90Rm91bmQpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuaW1wb3J0IE5hdiBmcm9tICcuL1VJL05hdidcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gJy4vVUkvR3JpZENvbnRhaW5lcidcblxuY2xhc3MgU2VhcmNoR3JpZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8TmF2IG9uSG9tZT17dGhpcy5wcm9wcy5vbkhvbWV9IHJlY29tbWVuZD17dGhpcy5wcm9wcy5yZWNvbW1lbmR9IHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoYW5nZX0gb25FbnRlcj17dGhpcy5wcm9wcy5vbkVudGVyfSBvblRhYj17dGhpcy5wcm9wcy5vblRhYn0gLz5cblx0XHRcdFx0PEdyaWRDb250YWluZXIgZW50aXRpZXM9e3RoaXMucHJvcHMuZW50aXRpZXN9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoR3JpZFxuIiwiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5jb25zdCBzdHlsZSA9IHtcblx0Y2VudGVyQmxvY2tTdHlsZToge1xuXHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0aGVpZ2h0OiAnMTAwJScsXG5cdFx0bWF4SGVpZ2h0OiAnMTAwJScsXG5cdFx0b3ZlcmZsb3c6ICdhdXRvJyxcblx0XHR0ZXh0QWxpZ246ICdjZW50ZXInXG5cdH0sXG5cdGNlbnRlckNvbnRlbnRTdHlsZToge1xuXHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuXHRcdHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuXHRcdGJveFNpemluZzogJ2JvcmRlci1ib3gnXG5cdH1cbn1cblxuY29uc3QgQ2VudGVyQ29udGFpbmVyID0gKHByb3BzKSA9PiA8ZGl2IHN0eWxlPXtbc3R5bGUuY2VudGVyQmxvY2tTdHlsZSwgLi4ucHJvcHMuc3R5bGVdfSBpZD0nY2VudGVyQ29udGVudCc+PGRpdiBzdHlsZT17W3N0eWxlLmNlbnRlckNvbnRlbnRTdHlsZSwgLi4ucHJvcHMuYm94U3R5bGVdfT57cHJvcHMuY2hpbGRyZW59PC9kaXY+PC9kaXY+XG5cbkNlbnRlckNvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIHN0eWxlOiB7fSxcbiAgYm94U3R5bGU6IHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShDZW50ZXJDb250YWluZXIpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuY29uc3Qgc3R5bGUgPSB7XG5cdHdpZHRoOiAnMTAwJScsXG5cdGhlaWdodDogJzEwMHZoJ1xufVxuXG5jb25zdCBGdWxsU2NyZWVuID0gKHByb3BzKSA9PiA8ZGl2IHN0eWxlPXtbc3R5bGUsIC4uLnByb3BzLnN0eWxlXX0+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuXG5GdWxsU2NyZWVuLmRlZmF1bHRQcm9wcyA9IHtcbiAgc3R5bGU6IHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShGdWxsU2NyZWVuKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vLi4vbGliL2NvbG9ycydcbmltcG9ydCBBbmFseXNlciBmcm9tICcuLi8uLi9saWIvQW5hbHlzZXInXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vLi4vbGliL1V0aWxzJ1xuXG5pbXBvcnQgTWFzb25yeUdyaWQgZnJvbSAnLi9NYXNvbnJ5R3JpZCdcbmltcG9ydCBQYXBlciBmcm9tICcuL1BhcGVyJ1xuaW1wb3J0IFBhcGVyQ29udGVudCBmcm9tICcuL1BhcGVyQ29udGVudCdcbmltcG9ydCBQcm9maWxlIGZyb20gJy4vUHJvZmlsZSdcbmltcG9ydCBTdW1tYXJ5IGZyb20gJy4vU3VtbWFyeSdcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInXG5pbXBvcnQgQ2VudGVyQ29udGFpbmVyIGZyb20gJy4vQ2VudGVyQ29udGFpbmVyJ1xuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGNvbnRhaW5lcjoge1xuXHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0bWluSGVpZ2h0OiAnMTAwdmgnLFxuXHRcdGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuXHRcdHBhZGRpbmc6ICc4MHB4IDIwcHggMjBweCAyMHB4Jyxcblx0XHRiYWNrZ3JvdW5kOiBjb2xvcnMuZ3JleTIwMFxuXHR9LFxuXHRtYW5zb3J5OiB7XG5cdFx0Ym94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG5cdFx0d2lkdGg6ICcyNSUnXG5cdH0sXG5cdHN1bW1hcnk6IHtcblx0XHR3aWR0aDogJzUwJSdcblx0fVxufVxuXG5jbGFzcyBHcmlkQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0cHJvZmlsZXM6IFtdLFxuXHRcdFx0ZGF0ZXM6IFtdLFxuXHRcdFx0c3VtbWFyaWVzOiBbXSxcblx0XHRcdGVudGl0aWVzOiBbXSxcblx0XHRcdGxvYWRlZDogZmFsc2Vcblx0XHR9XG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdHRoaXMucGFyc2VFbnRpdGllcyh0aGlzLnByb3BzKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG5cdFx0dGhpcy5wYXJzZUVudGl0aWVzKG5leHRQcm9wcylcblx0fVxuXHRwYXJzZUVudGl0aWVzKHByb3BzKSB7XG5cdFx0Ly9pZighXy5pc0VxdWFsKHRoaXMuc3RhdGUuZW50aXRpZXMsIHByb3BzLmVudGl0aWVzKSkge1xuXHRcdFx0QW5hbHlzZXIucGFyc2VFbnRpdGllcyhVdGlscy5nZXRRdWVyeSgpLCBwcm9wcy5lbnRpdGllcywgZGF0YSA9PiB0aGlzLnNldFN0YXRlKHtwcm9maWxlczogZGF0YS5wcm9maWxlcywgZGF0ZXM6IGRhdGEuZGF0ZXMsIHN1bW1hcmllczogZGF0YS5zdW1tYXJpZXMsIGVudGl0aWVzOiBwcm9wcy5lbnRpdGllcywgbG9hZGVkOiB0cnVlfSkpXG5cdFx0Ly99XG5cdH1cblx0cmVuZGVyRW1wdHkoKSB7XG5cdFx0cmV0dXJuIDxNYXNvbnJ5R3JpZD48ZGl2IHN0eWxlPXtzdHlsZXMubWFuc29yeX0gY2xhc3NOYW1lPSdncmlkSXRlbSc+PFBhcGVyPjxQYXBlckNvbnRlbnQ+PHNwYW4gY2xhc3NOYW1lPSdsbnIgbG5yLWNyb3NzJyAvPiBObyByZXN1bHRzIGZvdW5kPC9QYXBlckNvbnRlbnQ+PC9QYXBlcj48L2Rpdj48L01hc29ucnlHcmlkPlxuXHR9XG5cdHJlbmRlckNvbnRlbnQoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxNYXNvbnJ5R3JpZD5cblx0XHRcdFx0e3RoaXMuc3RhdGUuc3VtbWFyaWVzLm1hcChzID0+IDxkaXYgY2xhc3NOYW1lPSdncmlkSXRlbScga2V5PXtzLm5hbWUrcy50eXBlfSBzdHlsZT17W3N0eWxlcy5tYW5zb3J5LCBzdHlsZXMuc3VtbWFyeV19PjxTdW1tYXJ5IHN1bW1hcnk9e3N9IC8+PC9kaXY+KX1cblx0XHRcdFx0e3RoaXMuc3RhdGUucHJvZmlsZXMubWFwKHAgPT4gPGRpdiBjbGFzc05hbWU9J2dyaWRJdGVtJyBrZXk9e3AuX2lkfSBzdHlsZT17c3R5bGVzLm1hbnNvcnl9PjxQcm9maWxlIGVudGl0eT17cH0gLz48L2Rpdj4pfVxuXHRcdFx0PC9NYXNvbnJ5R3JpZD5cblx0XHQpXG5cdH1cblx0cmVuZGVyTG9hZGVyKCkge1xuXHRcdHJldHVybiA8TWFzb25yeUdyaWQ+PGRpdiBzdHlsZT17c3R5bGVzLm1hbnNvcnl9IGNsYXNzTmFtZT0nZ3JpZEl0ZW0nPjxQYXBlcj48UGFwZXJDb250ZW50PjxDZW50ZXJDb250YWluZXI+PExvYWRlciAvPjwvQ2VudGVyQ29udGFpbmVyPjwvUGFwZXJDb250ZW50PjwvUGFwZXI+PC9kaXY+PC9NYXNvbnJ5R3JpZD5cblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHtwcm9maWxlcywgc3VtbWFyaWVzLCBsb2FkZWR9ID0gdGhpcy5zdGF0ZVxuXHRcdGxldCBjbnQgPSBudWxsXG5cdFx0aWYoIWxvYWRlZCkge1xuXHRcdFx0Y250ID0gdGhpcy5yZW5kZXJMb2FkZXIoKVxuXHRcdH0gZWxzZSBpZighcHJvZmlsZXMubGVuZ3RoICYmICFzdW1tYXJpZXMubGVuZ3RoKSB7XG5cdFx0XHRjbnQgPSB0aGlzLnJlbmRlckVtcHR5KClcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y250ID0gdGhpcy5yZW5kZXJDb250ZW50KClcblx0XHR9XG5cdFx0cmV0dXJuIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PntjbnR9PC9kaXY+XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKEdyaWRDb250YWluZXIpXG4iLCJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXN9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vLi4vbGliL2NvbG9ycydcblxuY29uc3Qgc3R5bGUgPSB7XG5cdHdpZHRoOiAnNjBweCcsXG4gIGhlaWdodDogJzYwcHgnLFxuICBiYWNrZ3JvdW5kOiBjb2xvcnMucmVkNTAwLFxuICBhbmltYXRpb246ICdzay1yb3RhdGVwbGFuZSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0J1xufVxuXG5jb25zdCBMb2FkZXIgPSAocHJvcHMpID0+IDxkaXYgc3R5bGU9e1tzdHlsZSwgcHJvcHMuc3R5bGVdfSAvPlxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oTG9hZGVyKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5pbXBvcnQgTWFzb25yeSBmcm9tICdtYXNvbnJ5LWxheW91dCdcbmltcG9ydCBpbWFnZXNMb2FkZWQgZnJvbSAnaW1hZ2VzbG9hZGVkJ1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vLi4vbGliL1V0aWxzJ1xuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGdyaWQ6IHtcblx0XHR3aWR0aDogJzEwMCUnXG5cdH0sXG5cdHNpemVyOiB7XG5cdFx0d2lkdGg6ICcyNSUnXG5cdH1cbn1cblxuY2xhc3MgTWFzb25yeUdyaWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMuZ3JpZExheW91dCgpXG5cdH1cblx0Y29tcG9uZW50RGlkVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG5cdFx0dGhpcy5ncmlkTGF5b3V0KClcblx0fVxuXHQvKmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG5cdFx0dGhpcy5ncmlkTGF5b3V0KClcblx0fSovXG5cdGdyaWRMYXlvdXQoKSB7XG5cdFx0bGV0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFzb25yeUdyaWQnKVxuXHRcdFV0aWxzLnJlcG9zaXRpb24oKVxuXHRcdGltYWdlc0xvYWRlZChncmlkLCAoKSA9PiBVdGlscy5yZXBvc2l0aW9uKCkpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWFzb25yeUdyaWQnIHN0eWxlPXtzdHlsZXMuZ3JpZH0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdncmlkU2l6ZXInIHN0eWxlPXtzdHlsZXMuc2l6ZXJ9IC8+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShNYXNvbnJ5R3JpZClcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uLy4uL2xpYi9jb2xvcnMnXG5cbmltcG9ydCBTZWFyY2hJbnB1dCBmcm9tICcuL1NlYXJjaElucHV0J1xuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGNvbnRhaW5lcjoge1xuXHRcdGJhY2tncm91bmQ6ICcjMWIxNzE4Jyxcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdGhlaWdodDogNzAsXG5cdFx0Ym94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG5cdFx0cGFkZGluZzogJzE1cHggNDBweCcsXG5cdFx0cG9zaXRpb246ICdmaXhlZCcsXG5cdFx0dG9wOiAwLFxuXHRcdGxlZnQ6IDAsXG5cdFx0ekluZGV4OiAxMDBcblx0fSxcblx0bG9nbzoge1xuXHRcdGhlaWdodDogNDAsXG5cdFx0Y3Vyc29yOiAncG9pbnRlcidcblx0fSxcblx0aW5wdXQ6IHtcblx0XHR3aWR0aDogNDAwLFxuXHRcdGhlaWdodDogNDAsXG5cdFx0ZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG5cdFx0cGFkZGluZzogMCxcblx0XHRmbG9hdDogJ3JpZ2h0J1xuXHR9LFxuXHRpbnA6IHtcblx0XHRib3JkZXI6IGAxcHggc29saWQgJHtjb2xvcnMud2hpdGV9YCxcblx0XHQnOmZvY3VzJzoge1xuXHRcdFx0Ym9yZGVyOiBgMXB4IHNvbGlkICR7Y29sb3JzLndoaXRlfWBcblx0XHR9XG5cdH1cbn1cblxuY2xhc3MgTmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxuYXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuXHRcdFx0XHQ8aW1nIHNyYz0nL2ltZy9mMV9sb2dvX2RhcmsucG5nJyBvbkNsaWNrPXt0aGlzLnByb3BzLm9uSG9tZX0gc3R5bGU9e3N0eWxlcy5sb2dvfSAvPlxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXtzdHlsZXMuaW5wdXR9PjxTZWFyY2hJbnB1dCBpbnBTdHlsZT17W3N0eWxlcy5pbnBdfSByZWNvbW1lbmQ9e3RoaXMucHJvcHMucmVjb21tZW5kfSB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX0gb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2V9IG9uRW50ZXI9e3RoaXMucHJvcHMub25FbnRlcn0gb25UYWI9e3RoaXMucHJvcHMub25UYWJ9IC8+PC9kaXY+XG5cdFx0XHQ8L25hdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKE5hdilcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uLy4uL2xpYi9jb2xvcnMnXG5cbmNvbnN0IHN0eWxlID0ge1xuXHR3aWR0aDogJzEwMCUnLFxuXHRiYWNrZ3JvdW5kOiBjb2xvcnMud2hpdGUsXG5cdGJveFNoYWRvdzogJzAgLTFweCAwICNlNWU1ZTUsIDAgMCAycHggcmdiYSgwLCAwLCAwLCAuMTIpLCAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAuMjQpJ1xufVxuXG5jb25zdCBQYXBlciA9IChwcm9wcykgPT4gPGRpdiBzdHlsZT17W3N0eWxlLCBwcm9wcy5zdHlsZV19Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cblxuUGFwZXIuZGVmYXVsdFByb3BzID0ge1xuXHRzdHlsZToge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKFBhcGVyKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vLi4vbGliL2NvbG9ycydcblxuY29uc3Qgc3R5bGUgPSB7XG5cdGRpc3BsYXk6ICdibG9jaycsXG5cdGJvcmRlcjogJ25vbmUnLFxuXHRtYXJnaW46IDAsXG5cdHBhZGRpbmc6ICcxMHB4Jyxcblx0Y29sb3I6IGNvbG9ycy53aGl0ZSxcblx0YmFja2dyb3VuZDogY29sb3JzLnJlZDUwMCxcblx0Zm9udFNpemU6ICcuOHJlbScsXG5cdGZvbnRXZWlnaHQ6IDQwMCxcblx0Zm9udEZhbWlseTogJ2luaGVyaXQnLFxuXHRjdXJzb3I6ICdwb2ludGVyJyxcblx0dHJhbnNpdGlvbjogJ2FsbCAwLjFzIGVhc2UtaW4tb3V0Jyxcblx0Jzpob3Zlcic6IHtcblx0XHRiYWNrZ3JvdW5kOiBjb2xvcnMucmVkNzAwXG5cdH1cbn1cblxuY29uc3QgUGFwZXJCdG4gPSAocHJvcHMpID0+IDxhIGhyZWY9e3Byb3BzLmhyZWZ9IHRhcmdldD0nX2JsYW5rJz48YnV0dG9uIHN0eWxlPXtzdHlsZX0+e3Byb3BzLmNoaWxkcmVufTwvYnV0dG9uPjwvYT5cblxuUGFwZXJCdG4uZGVmYXVsdFByb3BzID0ge1xuXHRzdHlsZToge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKFBhcGVyQnRuKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmNvbnN0IHN0eWxlID0ge1xuXHR3aWR0aDogJzEwMCUnLFxuXHRib3hTaXppbmc6ICdib3JkZXItYm94Jyxcblx0cGFkZGluZzogMjBcbn1cblxuY29uc3QgUGFwZXJDb250ZW50ID0gKHByb3BzKSA9PiA8ZGl2IHN0eWxlPXtzdHlsZX0+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oUGFwZXJDb250ZW50KVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vLi4vbGliL2NvbG9ycydcblxuY29uc3Qgc3R5bGUgPSB7XG5cdHdpZHRoOiAnMTAwJScsXG5cdGRpc3BsYXk6ICdibG9jaycsXG5cdGZvbnRTaXplOiAnMXJlbScsXG5cdGZvbnRXZWlnaHQ6IDMwMCxcblx0bWFyZ2luOiAwLFxuXHRwYWRkaW5nOiAnMTBweCAyMHB4Jyxcblx0Ym94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG5cdGJhY2tncm91bmQ6ICcjMWIxNzE4Jyxcblx0Y29sb3I6IGNvbG9ycy53aGl0ZVxufVxuXG5jb25zdCBQYXBlckhlYWRlciA9IChwcm9wcykgPT4gPGgxIHN0eWxlPXtzdHlsZX0+e3Byb3BzLmNoaWxkcmVufTwvaDE+XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShQYXBlckhlYWRlcilcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5jb25zdCBzdHlsZSA9IHtcblx0d2lkdGg6ICcxMDAlJyxcblx0ZGlzcGxheTogJ2Jsb2NrJ1xufVxuXG5jb25zdCBQYXBlckltZyA9IChwcm9wcykgPT4gPGltZyBzcmM9e3Byb3BzLnNyY30gc3R5bGU9e3N0eWxlfSAvPlxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oUGFwZXJJbWcpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuY29uc3Qgc3R5bGVzID0ge1xuXHRjb250YWluZXI6IHtcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdGZvbnRXZWlnaHQ6IDMwMCxcblx0XHRtYXJnaW5Cb3R0b206IDEwLFxuXHRcdGZsb2F0OiAnbGVmdCdcblx0fSxcblx0aDI6IHtcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdG1hcmdpbjogMCxcblx0XHRwYWRkaW5nOiAwLFxuXHRcdGZvbnRTaXplOiAnLjhyZW0nLFxuXHRcdGZvbnRXZWlnaHQ6IDQwMFxuXHR9LFxuXHR0eHQ6IHtcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdGZvbnRTaXplOiAnLjhyZW0nLFxuXHRcdHdvcmRXcmFwOiAnYnJlYWstd29yZCdcblx0fVxufVxuXG5jb25zdCBQYXBlckxpID0gKHByb3BzKSA9PiA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT48aDIgc3R5bGU9e3N0eWxlcy5oMn0+e3Byb3BzLmhlYWR9PC9oMj48ZGl2IHN0eWxlPXtzdHlsZXMudHh0fT57cHJvcHMuY2hpbGRyZW59PC9kaXY+PC9kaXY+XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShQYXBlckxpKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vLi4vbGliL2NvbG9ycydcblxuY29uc3Qgc3R5bGUgPSB7XG5cdHdpZHRoOiAnMTAwJScsXG5cdGRpc3BsYXk6ICdibG9jaycsXG5cdGJhY2tncm91bmQ6IGNvbG9ycy5ncmV5MjAwLFxuXHRoZWlnaHQ6IDEsXG5cdG1hcmdpbjogJzEwcHggMCAyMHB4IDAnXG59XG5cbmNvbnN0IFBhcGVyTGluZSA9IChwcm9wcykgPT4gPGRpdiBzdHlsZT17c3R5bGV9IC8+XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShQYXBlckxpbmUpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuY29uc3Qgc3R5bGUgPSB7XG5cdHdpZHRoOiAnMTAwJScsXG5cdGRpc3BsYXk6ICdibG9jaydcbn1cblxuY29uc3QgUGFwZXJVbCA9IChwcm9wcykgPT4gPGRpdiBjbGFzc05hbWU9J2NsZWFyJyBzdHlsZT17c3R5bGV9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKFBhcGVyVWwpXG4iLCJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXN9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vLi4vbGliL2NvbG9ycydcbmltcG9ydCBFbnRpdHlTZXJ2aWNlIGZyb20gJy4uLy4uL3NlcnZpY2VzL0VudGl0eS5TZXJ2aWNlJ1xuaW1wb3J0IEYxU2VydmljZSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9GMS5TZXJ2aWNlJ1xuaW1wb3J0IFV0aWxzIGZyb20gJy4uLy4uL2xpYi9VdGlscydcblxuaW1wb3J0IFBhcGVyIGZyb20gJy4vUGFwZXInXG5pbXBvcnQgUGFwZXJDb250ZW50IGZyb20gJy4vUGFwZXJDb250ZW50J1xuaW1wb3J0IFBhcGVySW1nIGZyb20gJy4vUGFwZXJJbWcnXG5pbXBvcnQgUGFwZXJIZWFkZXIgZnJvbSAnLi9QYXBlckhlYWRlcidcbmltcG9ydCBQYXBlclVsIGZyb20gJy4vUGFwZXJVbCdcbmltcG9ydCBQYXBlckxpIGZyb20gJy4vUGFwZXJMaSdcbmltcG9ydCBQYXBlckxpbmUgZnJvbSAnLi9QYXBlckxpbmUnXG5pbXBvcnQgUGFwZXJCdG4gZnJvbSAnLi9QYXBlckJ0bidcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInXG5pbXBvcnQgQ2VudGVyQ29udGFpbmVyIGZyb20gJy4vQ2VudGVyQ29udGFpbmVyJ1xuXG5jb25zdCBleGNsdWRlID0gWyd0aHVtYm5haWwnLCAnZGVwaWN0aW9uJywgJ2JpcnRoUGxhY2UnLCAnd2lraVBhZ2VJRCcsICdhYnN0cmFjdCcsICdsb2NhdGlvbiddXG5cbmNvbnN0IHN0eWxlcyA9IHtcblx0cmVsb2FkOiB7XG5cdFx0Y3Vyc29yOiAncG9pbnRlcicsXG5cdFx0Jzpob3Zlcic6IHtcblx0XHRcdGNvbG9yOiBjb2xvcnMucmVkNTAwXG5cdFx0fVxuXHR9LFxuXHRjb250YWluZXI6IHtcblx0XHRwYWRkaW5nOiAyMCxcblx0XHRib3hTaXppbmc6ICdib3JkZXItYm94Jyxcblx0XHR3aWR0aDogJzEwMCUnXG5cdH1cbn1cblxuY2xhc3MgUHJvZmlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGVudGl0eTogbnVsbCxcblx0XHRcdGVycjogZmFsc2Vcblx0XHR9XG5cdFx0dGhpcy5yZWxvYWQgPSB0aGlzLnJlbG9hZC5iaW5kKHRoaXMpXG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdGlmKHRoaXMucHJvcHMuZW50aXR5LmRhdGEpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe2VudGl0eTogdGhpcy5wcm9wcy5lbnRpdHkuZGF0YX0pXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZmV0Y2hTcGFycWwoKVxuXHRcdH1cblx0fVxuXHRyZWxvYWQoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRlbnRpdHk6IG51bGwsXG5cdFx0XHRlcnI6IGZhbHNlXG5cdFx0fSlcblx0XHR0aGlzLmZldGNoU3BhcnFsKClcblx0fVxuXHRmZXRjaFNwYXJxbCgpIHtcblx0XHRFbnRpdHlTZXJ2aWNlLmdldEVudGl0eSh0aGlzLnByb3BzLmVudGl0eSwgKGVyciwgcmVzKSA9PiB7XG5cdFx0XHRpZihlcnIgfHwgIXJlcy5ib2R5LnJlc3VsdHMuYmluZGluZ3MubGVuZ3RoKSByZXR1cm4gdGhpcy5mZXRjaEFwaSgpXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtlbnRpdHk6IHJlcy5ib2R5LnJlc3VsdHMuYmluZGluZ3NbMF19KVxuXHRcdH0pXG5cdH1cblx0ZmV0Y2hBcGkoKSB7XG5cdFx0RjFTZXJ2aWNlLmdldEVudGl0eSh0aGlzLnByb3BzLmVudGl0eSwgKGVyciwgcmVzKSA9PiB7XG5cdFx0XHRpZihlcnIpIHJldHVybiB0aGlzLnNldFN0YXRlKHtlbnRpdHk6IG51bGwsIGVycjogdHJ1ZX0pXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0ZW50aXR5OiByZXMsXG5cdFx0XHRcdGVycjogZmFsc2Vcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXHRyZW5kZXJMb2FkZXIoKSB7XG5cdFx0cmV0dXJuIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PjxQYXBlcj48UGFwZXJDb250ZW50PjxDZW50ZXJDb250YWluZXI+PExvYWRlciAvPjwvQ2VudGVyQ29udGFpbmVyPjwvUGFwZXJDb250ZW50PjwvUGFwZXI+PC9kaXY+XG5cdH1cblx0cmVuZGVyQ29udGVudCgpIHtcblx0XHRsZXQge2VudGl0eX0gPSB0aGlzLnN0YXRlXG5cdFx0bGV0IGltZyA9IF8uaGFzKGVudGl0eSwgJ2RlcGljdGlvbicpID8gPFBhcGVySW1nIHNyYz17ZW50aXR5LmRlcGljdGlvbi52YWx1ZX0gLz4gOiBudWxsXG5cdFx0bGV0IGhyZWYgPSBfLmhhcyhlbnRpdHksICd3aWtpUGFnZUlEJykgPyA8ZGl2PjxQYXBlckxpbmUgLz48UGFwZXJCdG4gaHJlZj17YGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy8/Y3VyaWQ9JHtlbnRpdHkud2lraVBhZ2VJRC52YWx1ZX1gfT5SZWFkIE1vcmU8L1BhcGVyQnRuPjwvZGl2PiA6IG51bGxcblx0XHRsZXQga2V5cyA9IF8oZW50aXR5KS5rZXlzKCkuZmlsdGVyKGsgPT4gXy5pbmRleE9mKGV4Y2x1ZGUsIGspPT0tMSkudmFsdWUoKVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cblx0XHRcdFx0PFBhcGVyPlxuXHRcdFx0XHRcdHtpbWd9XG5cdFx0XHRcdFx0PFBhcGVySGVhZGVyPnt0aGlzLnByb3BzLmVudGl0eS5uYW1lfTwvUGFwZXJIZWFkZXI+XG5cdFx0XHRcdFx0PFBhcGVyQ29udGVudD5cblx0XHRcdFx0XHRcdDxQYXBlclVsPlxuXHRcdFx0XHRcdFx0XHR7a2V5cy5tYXAoayA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxQYXBlckxpIGtleT17YCR7dGhpcy5wcm9wcy5lbnRpdHkuX2lkfS0ke2t9YH0gaGVhZD17VXRpbHMuY2FwaXRhbGl6ZShrKX0+e1V0aWxzLmZvcm1hdEVudGl0eVN0cmluZyhlbnRpdHlba10udmFsdWUpfTwvUGFwZXJMaT5cblx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHQ8L1BhcGVyVWw+XG5cdFx0XHRcdFx0XHR7aHJlZn1cblx0XHRcdFx0XHQ8L1BhcGVyQ29udGVudD5cblx0XHRcdFx0PC9QYXBlcj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXHRyZW5kZXJBZ2FpbkJ0bigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PFBhcGVyPlxuXHRcdFx0XHQ8UGFwZXJDb250ZW50PlxuXHRcdFx0XHRcdDxQYXBlckhlYWRlcj57dGhpcy5wcm9wcy5lbnRpdHkubmFtZX08L1BhcGVySGVhZGVyPlxuXHRcdFx0XHRcdDxzcGFuIHN0eWxlPXtzdHlsZXMucmVsb2FkfSBvbkNsaWNrPXt0aGlzLnJlbG9hZH0+Q291bGQgbm90IGZldGNoIGRhdGEuIENsaWNrIHRvIHRyeSBhZ2Fpbjwvc3Bhbj5cblx0XHRcdFx0PC9QYXBlckNvbnRlbnQ+XG5cdFx0XHQ8L1BhcGVyPlxuXHRcdClcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0aWYodGhpcy5zdGF0ZS5lcnIpIHJldHVybiB0aGlzLnJlbmRlckFnYWluQnRuKClcblx0XHRpZighdGhpcy5zdGF0ZS5lbnRpdHkpIHJldHVybiB0aGlzLnJlbmRlckxvYWRlcigpXG5cdFx0cmV0dXJuIHRoaXMucmVuZGVyQ29udGVudCgpXG5cdH1cbn1cblxuUHJvZmlsZS5wcm9wVHlwZXMgPSB7XG5cdGVudGl0eTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShQcm9maWxlKVxuIiwiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uLy4uL2xpYi9jb2xvcnMnXG5cbmNvbnN0IHN0eWxlcyA9IHtcblx0Y29udGFpbmVyOiB7XG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRoZWlnaHQ6ICcxMDAlJyxcblx0XHRwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblx0XHRiYWNrZ3JvdW5kOiBjb2xvcnMud2hpdGUsXG5cdFx0b3ZlcmZsb3c6ICdoaWRkZW4nXG5cdH0sXG5cdGlucENvbnRhaW5lcjoge1xuXHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHRcdHRvcDogMCxcblx0XHRsZWZ0OiAwLFxuXHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0aGVpZ2h0OiAnMTAwJScsXG5cdFx0Ym94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG5cdFx0YmFja2dyb3VuZDogJ25vbmUnLFxuXHRcdGJvcmRlcjogYDFweCBzb2xpZCAke2NvbG9ycy53aGl0ZX1gLFxuXHRcdGZvbnRXZWlnaHQ6IDMwMCxcblx0XHRwYWRkaW5nOiAnNXB4IDQ1cHggNXB4IDVweCcsXG5cdFx0Zm9udFNpemU6ICcxcmVtJyxcblx0XHR0ZXh0QWxpZ246ICdsZWZ0Jyxcblx0XHRmb250RmFtaWx5OiAnUm9ib3RvJyxcblx0XHRtYXJnaW46IDAsXG5cdFx0Jzpmb2N1cyc6IHtcblx0XHRcdG91dGxpbmU6ICdub25lJyxcblx0XHRcdC8vYm9yZGVyOiBgMXB4IHNvbGlkICR7Y29sb3JzLmdyZXk4MDB9YFxuXHRcdH1cblx0fSxcblx0cmVjb21tZW5kOiB7XG5cdFx0Y29sb3I6IGNvbG9ycy5ncmV5NTAwLFxuXHRcdHBhZGRpbmdUb3A6IDlcblx0fSxcblx0ZWFzZToge1xuXHRcdHRyYW5zaXRpb246ICdhbGwgMC4xcyBlYXNlLWluLW91dCdcblx0fSxcblx0d2hpdGVTcGFjZToge1xuXHRcdGNvbG9yOiBjb2xvcnMud2hpdGVcblx0fSxcblx0aWNvbjoge1xuXHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHRcdHdpZHRoOiA0MCxcblx0XHRoZWlnaHQ6IDQwLFxuXHRcdHRvcDogMCxcblx0XHRyaWdodDogMCxcblx0XHRkaXNwbGF5OiAnYmxvY2snLFxuXHRcdGZvbnRTaXplOiAnMWVtJyxcblx0XHRiYWNrZ3JvdW5kOiBjb2xvcnMuZ3JleTgwMCxcblx0XHRjb2xvcjogY29sb3JzLndoaXRlLFxuXHRcdGJvcmRlcjogJ25vbmUnLFxuXHRcdHBhZGRpbmc6IDAsXG5cdFx0Y3Vyc29yOiAncG9pbnRlcicsXG5cdFx0Jzpob3Zlcic6IHtcblx0XHRcdGNvbG9yOiBjb2xvcnMuZ3JleTUwMFxuXHRcdH1cblx0fVxufVxuXG5jbGFzcyBTZWFyY2hJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5vbktleSA9IHRoaXMub25LZXkuYmluZCh0aGlzKVxuXHRcdHRoaXMub25LZXlEb3duID0gdGhpcy5vbktleURvd24uYmluZCh0aGlzKVxuXHR9XG5cdG9uS2V5KGUpIHtcblx0XHRpZihlLmtleSA9PSAnRW50ZXInKSB0aGlzLnByb3BzLm9uRW50ZXIoKVxuXHR9XG5cdG9uS2V5RG93bihlKSB7XG5cdFx0aWYoZS5rZXkgPT0gJ1RhYicpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0dGhpcy5wcm9wcy5vblRhYigpXG5cdFx0fVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17W3N0eWxlcy5jb250YWluZXIsIHRoaXMucHJvcHMuc3R5bGVdfT5cblx0XHRcdFx0PGRpdiBzdHlsZT17W3N0eWxlcy5pbnBDb250YWluZXIsIHN0eWxlcy5yZWNvbW1lbmQsIHRoaXMucHJvcHMuaW5wU3R5bGVdfT48c3BhbiBzdHlsZT17c3R5bGVzLndoaXRlU3BhY2V9Pnt0aGlzLnByb3BzLnZhbHVlfTwvc3Bhbj57dGhpcy5wcm9wcy5yZWNvbW1lbmR9PC9kaXY+XG5cdFx0XHRcdDxpbnB1dCBrZXk9J2lucHV0U3JjJyB0eXBlPSd0ZXh0JyBzdHlsZT17W3N0eWxlcy5lYXNlLCBzdHlsZXMuaW5wQ29udGFpbmVyLCB0aGlzLnByb3BzLmlucFN0eWxlXX0gdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9IG9uQ2hhbmdlPXtlID0+IHRoaXMucHJvcHMub25DaGFuZ2UoZS50YXJnZXQudmFsdWUpfSBvbktleVByZXNzPXt0aGlzLm9uS2V5fSBvbktleURvd249e3RoaXMub25LZXlEb3dufSAvPlxuXHRcdFx0XHQ8YnV0dG9uIHN0eWxlPXtbc3R5bGVzLmljb24sIHN0eWxlcy5lYXNlXX0ga2V5PSdpbnRlcm5hbFNyY0J1dHRvbicgb25DbGljaz17ZSA9PiB0aGlzLnByb3BzLm9uRW50ZXIoKX0+PGkgY2xhc3NOYW1lPSdmYSBmYS1zZWFyY2gnIC8+PC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuU2VhcmNoSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuXHRzdHlsZToge30sXG5cdHZhbHVlOiAnJyxcblx0cmVjb21tZW5kOiAnJyxcblx0aW5wU3R5bGU6IHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShTZWFyY2hJbnB1dClcbiIsImltcG9ydCBSZWFjdCwge1Byb3BUeXBlc30gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi9saWIvY29sb3JzJ1xuaW1wb3J0IEYxU2VydmljZSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9GMS5TZXJ2aWNlJ1xuaW1wb3J0IFV0aWxzIGZyb20gJy4uLy4uL2xpYi9VdGlscydcblxuaW1wb3J0IFBhcGVyIGZyb20gJy4vUGFwZXInXG5pbXBvcnQgUGFwZXJDb250ZW50IGZyb20gJy4vUGFwZXJDb250ZW50J1xuaW1wb3J0IFBhcGVySGVhZGVyIGZyb20gJy4vUGFwZXJIZWFkZXInXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJ1xuaW1wb3J0IENlbnRlckNvbnRhaW5lciBmcm9tICcuL0NlbnRlckNvbnRhaW5lcidcbmltcG9ydCBUYWJsZSBmcm9tICcuL1RhYmxlJ1xuXG5jb25zdCBzdHlsZSA9IHtcblx0cGFkZGluZzogMjAsXG5cdGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuXHR3aWR0aDogJzEwMCUnXG59XG5cbmNsYXNzIFN1bW1hcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRkYXRhOiBbXSxcblx0XHRcdGVycm9yOiBmYWxzZSxcblx0XHRcdGxvYWRpbmc6IHRydWUsXG5cdFx0XHR0aHM6IFtdXG5cdFx0fVxuXHRcdHRoaXMubW91bnRlZCA9IGZhbHNlXG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdHRoaXMubW91bnRlZCA9IHRydWVcblx0XHRGMVNlcnZpY2UuZ2V0U3VtbWFyeSh0aGlzLnByb3BzLnN1bW1hcnksIChlcnIsIGRhdGEpID0+IHtcblx0XHRcdGlmKCF0aGlzLm1vdW50ZWQpIHJldHVybiBmYWxzZVxuXHRcdFx0aWYoZXJyKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IGZhbHNlLCBlcnJvcjogdHJ1ZX0pXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsZXQgdGhzID0gRjFTZXJ2aWNlLnJlc3VsdHNGb3JtYXRlcih0aGlzLnByb3BzLnN1bW1hcnkudHlwZSlcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogZmFsc2UsIGVycm9yOiBmYWxzZSwgZGF0YSwgdGhzfSlcblx0XHRcdFx0VXRpbHMucmVwb3NpdGlvbigpXG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHR0aGlzLm1vdW50ZWQgPSBmYWxzZVxuXHR9XG5cdHJlbmRlckxvYWRlcigpIHtcblx0XHRyZXR1cm4gPGRpdiBzdHlsZT17c3R5bGV9PjxQYXBlcj48UGFwZXJIZWFkZXI+e3RoaXMucHJvcHMuc3VtbWFyeS5uYW1lfTwvUGFwZXJIZWFkZXI+PFBhcGVyQ29udGVudD48Q2VudGVyQ29udGFpbmVyPjxMb2FkZXIgLz48L0NlbnRlckNvbnRhaW5lcj48L1BhcGVyQ29udGVudD48L1BhcGVyPjwvZGl2PlxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7bG9hZGluZywgZGF0YSwgZXJyb3IsIHRoc30gPSB0aGlzLnN0YXRlXG5cdFx0aWYobG9hZGluZykgcmV0dXJuIHRoaXMucmVuZGVyTG9hZGVyKClcblx0XHRpZihlcnJvcikgcmV0dXJuIG51bGxcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17c3R5bGV9PlxuXHRcdFx0XHQ8UGFwZXI+XG5cdFx0XHRcdFx0PFBhcGVySGVhZGVyPnt0aGlzLnByb3BzLnN1bW1hcnkubmFtZX08L1BhcGVySGVhZGVyPlxuXHRcdFx0XHRcdDxQYXBlckNvbnRlbnQ+XG5cdFx0XHRcdFx0XHQ8VGFibGUgaGVhZGVycz17dGhzfSBkYXRhPXtkYXRhfSAvPlxuXHRcdFx0XHRcdDwvUGFwZXJDb250ZW50PlxuXHRcdFx0XHQ8L1BhcGVyPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cblN1bW1hcnkucHJvcFR5cGVzID0ge1xuXHRzdW1tYXJ5OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKFN1bW1hcnkpXG4iLCJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXN9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5pbXBvcnQgdXVpZCBmcm9tICdub2RlLXV1aWQnXG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vLi4vbGliL2NvbG9ycydcbmltcG9ydCBVdGlscyBmcm9tICcuLi8uLi9saWIvVXRpbHMnXG5cbmNvbnN0IHN0eWxlcyA9IHtcblx0Y29udGFpbmVyOiB7XG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRmb250U2l6ZTogJy44ZW0nLFxuXHRcdGRpc3BsYXk6ICd0YWJsZSdcblx0fSxcblx0cm93OiB7XG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRwYWRkaW5nOiAwLFxuXHRcdG1hcmdpbjogMCxcblx0XHRkaXNwbGF5OiAndGFibGUtcm93Jyxcblx0XHQnOmhvdmVyJzoge1xuXHRcdFx0YmFja2dyb3VuZDogY29sb3JzLmdyZXkyMDBcblx0XHR9XG5cdH0sXG5cdGhlYWRlcjoge1xuXHRcdHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuXHRcdGNvbG9yOiBjb2xvcnMuZ3JleTgwMFxuXHR9LFxuXHRvZGQ6IHtcblx0XHRiYWNrZ3JvdW5kOiBjb2xvcnMuZ3JleTEwMCxcblx0XHQnOmhvdmVyJzoge1xuXHRcdFx0YmFja2dyb3VuZDogY29sb3JzLmdyZXkyMDBcblx0XHR9XG5cdH0sXG5cdGNlbGw6IHtcblx0XHRwYWRkaW5nOiAxMCxcblx0XHRkaXNwbGF5OiAndGFibGUtY2VsbCcsXG5cdFx0dmVydGljYWxBbGlnbjogJ21pZGRsZScsXG5cdFx0d29yZFdyYXA6ICdicmVhay13b3JkJ1xuXHR9XG59XG5cbmNvbnN0IFRhYmxlID0gKHByb3BzKSA9PiB7XG5cdGxldCBjbnQgPSAwXG5cdGxldCB3aWR0aCA9IHt3aWR0aDogYCR7MTAwL3Byb3BzLmhlYWRlcnMubGVuZ3RofSVgfVxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjbGVhcicgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuXHRcdFx0PGRpdiBzdHlsZT17W3N0eWxlcy5yb3csIHN0eWxlcy5oZWFkZXJdfSBrZXk9e3V1aWQudjQoKX0+e3Byb3BzLmhlYWRlcnMubWFwKGggPT4gPGRpdiBrZXk9e3V1aWQudjQoKX0gc3R5bGU9e1tzdHlsZXMuY2VsbF19PntoLm5hbWV9PC9kaXY+KX08L2Rpdj5cblx0XHRcdHtwcm9wcy5kYXRhLm1hcChkID0+IHtcblx0XHRcdFx0Y250Kytcblx0XHRcdFx0bGV0IG9kZCA9IGNudCUyID8gc3R5bGVzLm9kZCA6IHt9XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGRpdiBrZXk9e3V1aWQudjQoKX0gc3R5bGU9e1tzdHlsZXMucm93LCBvZGRdfT5cblx0XHRcdFx0XHRcdHtwcm9wcy5oZWFkZXJzLm1hcChoID0+IDxkaXYga2V5PXt1dWlkLnY0KCl9IHN0eWxlPXtbc3R5bGVzLmNlbGxdfT57VXRpbHMuZm9ybWF0RW50aXR5U3RyaW5nKFV0aWxzLnBsdWNrVmFsdWUoZCwgaC5rZXkpKX08L2Rpdj4pfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpXG5cdFx0XHR9KX1cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5UYWJsZS5wcm9wVHlwZXMgPSB7XG5cdGhlYWRlcnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuXHRkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oVGFibGUpXG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgYXN5bmMgZnJvbSAnYXN5bmMnXG5pbXBvcnQgQ29tYmluYXRvcmljcyBmcm9tICdqcy1jb21iaW5hdG9yaWNzJ1xuaW1wb3J0IHtzcGVjaWFsS2V5d29yZHN9IGZyb20gJy4vS2V5d29yZHMnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcblxuaW1wb3J0IFV0aWxzIGZyb20gJy4vVXRpbHMnXG5pbXBvcnQgRjFTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL0YxLlNlcnZpY2UnXG5cbmNsYXNzIEFuYWx5c2VyIHtcblx0c3RhdGljIHBhcnNlRW50aXRpZXMocXVlcnksIGVudGl0aWVzLCBjYikge1xuXHRcdGxldCBkYXRlcyA9IF8oZW50aXRpZXMpLmZpbHRlcihlID0+IGUudHlwZT09J2RhdGUnKS5tYXAoJ25hbWUnKS52YWx1ZSgpXG5cdFx0bGV0IF9wcm9maWxlcyA9IF8uZmlsdGVyKGVudGl0aWVzLCBlID0+IGUudHlwZSE9J2RhdGUnKVxuXHRcdEFuYWx5c2VyLmV2YWx1YXRlUHJvZmlsZXMocXVlcnksIF9wcm9maWxlcywgcHJvZmlsZXMgPT4ge1xuXHRcdFx0QW5hbHlzZXIuZGF0YUNhc2UocXVlcnksIHByb2ZpbGVzLCBkYXRlcywgc3VtbWFyaWVzID0+IHtcblx0XHRcdFx0Y2Ioe2RhdGVzLCBwcm9maWxlcywgc3VtbWFyaWVzfSlcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdHN0YXRpYyBldmFsdWF0ZVByb2ZpbGVzKHF1ZXJ5LCBwcm9maWxlcywgY2IpIHtcblx0XHRsZXQga2V5cyA9IF8ocXVlcnkuc3BsaXQoJyAnKSkubWFwKGsgPT4gXy5kZWJ1cnIoay50b0xvd2VyQ2FzZSgpKSkudW5pcSgpLnZhbHVlKClcblx0XHRsZXQgY29tYmluYXRpb25zID0gVXRpbHMubmF0dXJhbEtleXdvcmRDb21iaW5hdGlvbnMoa2V5cylcblx0XHRsZXQgcHMgPSBfKHByb2ZpbGVzKS5tYXAocCA9PiB7XG5cdFx0XHRsZXQga2V5d29yZHMgPSBfKFV0aWxzLm5hdHVyYWxLZXl3b3JkQ29tYmluYXRpb25zKHAua2V5d29yZHMpKS5mbGF0dGVuRGVlcCgpLm1hcChrID0+IF8uZGVidXJyKGspKS51bmlxKCkudmFsdWUoKVxuXHRcdFx0bGV0IGludGVyc2VjdCA9IF8uaW50ZXJzZWN0aW9uKGtleXMsIGtleXdvcmRzKVxuXHRcdFx0cC5jb25maWRlbnQgPSBpbnRlcnNlY3QubGVuZ3RoXG5cdFx0XHRwLmludGVyc2VjdCA9IGludGVyc2VjdFxuXHRcdFx0aWYoXy5pbmRleE9mKGNvbWJpbmF0aW9ucywgXy5kZWJ1cnIocC5uYW1lLnRvTG93ZXJDYXNlKCkpKT4tMSkgcC5jb25maWRlbnQ9MTAwXG5cdFx0XHRyZXR1cm4gcFxuXHRcdH0pLm9yZGVyQnkoWydjb25maWRlbnQnLCAnbmFtZSddLCBbJ2Rlc2MnLCAnYXNjJ10pLnZhbHVlKClcblx0XHRBbmFseXNlci5jcmVhdGVEZXBlbmRlbmN5R3JhcGgocHMsIGNiKVxuXHR9XG5cblx0c3RhdGljIGNyZWF0ZURlcGVuZGVuY3lHcmFwaChwcm9maWxlcywgY2IpIHtcblx0XHRsZXQgcHJvZnMgPSBfLmdyb3VwQnkocHJvZmlsZXMsICd0eXBlJylcblx0XHRwcm9mcy5fa2V5cyA9IF8ua2V5cyhwcm9mcylcblx0XHRwcm9mcyA9IF8ubWFwKHByb2ZzLl9rZXlzLCBrID0+IHtcblx0XHRcdGxldCBwID0gcHJvZnNba11cblx0XHRcdGxldCBncm91cCA9IF8uZ3JvdXBCeShwLCAnaW50ZXJzZWN0Jylcblx0XHRcdGxldCBrZXlzID0gXy5rZXlzKGdyb3VwKVxuXHRcdFx0cmV0dXJuIHtfa2V5czoga2V5cywgZGF0YTogZ3JvdXB9XG5cdFx0fSlcblx0XHRwcm9mcyA9IF8ocHJvZnMpLm1hcChwID0+IHtcblx0XHRcdHJldHVybiBfKHAuX2tleXMpLm1hcChrID0+IHtcblx0XHRcdFx0bGV0IHByID0gcC5kYXRhW2tdXG5cdFx0XHRcdGxldCBtYXggPSBfLm1heEJ5KHByLCAnY29uZmlkZW50JykuY29uZmlkZW50XG5cdFx0XHRcdHJldHVybiBfKHByKS5maWx0ZXIoX3AgPT4gX3AuY29uZmlkZW50ID09IG1heCkuZmxhdHRlbigpLnZhbHVlKClcblx0XHRcdH0pLmZsYXR0ZW4oKS52YWx1ZSgpXG5cdFx0fSkuZmxhdHRlbigpLm9yZGVyQnkoWydjb25maWRlbnQnLCAndHlwZScsICduYW1lJ10sIFsnZGVzYycsICdhc2MnLCAnYXNjJ10pLnVuaXFCeSgnX2lkJykudmFsdWUoKVxuXHRcdGNiKHByb2ZzKVxuXHR9XG5cblx0c3RhdGljIGRhdGFDYXNlKHF1ZXJ5LCBwcm9maWxlcywgZGF0ZXMsIGNiKSB7XG5cdFx0bGV0IGtleXdvcmRzID0gXyhxdWVyeS5zcGxpdCgnICcpKS5tYXAoayA9PiBfLmRlYnVycihrLnRvTG93ZXJDYXNlKCkpKS52YWx1ZSgpXG5cdFx0bGV0IGNvbWJpbmF0aW9ucyA9IFV0aWxzLm5hdHVyYWxLZXl3b3JkQ29tYmluYXRpb25zKGtleXdvcmRzKVxuXHRcdGxldCB3b3JkcyA9IF8oc3BlY2lhbEtleXdvcmRzKS5maWx0ZXIoc2sgPT4gXy5pbnRlcnNlY3Rpb24oc2sud29yZHMsIGNvbWJpbmF0aW9ucykubGVuZ3RoKS5tYXAoJ2tleScpLnVuaXEoKS52YWx1ZSgpXG5cdFx0bGV0IGdyb3VwZWQgPSBfLmdyb3VwQnkocHJvZmlsZXMsICd0eXBlJylcblx0XHRsZXQga2V5cyA9IF8ua2V5cyhncm91cGVkKVxuXHRcdGlmKGRhdGVzLmxlbmd0aCkge1xuXHRcdFx0aWYocHJvZmlsZXMubGVuZ3RoKSB7XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCBhcGlEYXRhID0gWydyYWNlQ2FsZW5kYXInLCAnZHJpdmVyU3RhbmRpbmdzJywgJ2NvbnN0cnVjdG9yU3RhbmRpbmdzJ11cblx0XHRcdFx0aWYoVXRpbHMub25lT2ZDb21iaW5hdGlvbnMod29yZHMsIFsnc2Vhc29uJywgJ3N0YW5kaW5nJ10pKSBhcGlEYXRhID0gWydkcml2ZXJTdGFuZGluZ3MnLCAnY29uc3RydWN0b3JTdGFuZGluZ3MnXVxuXHRcdFx0XHRlbHNlIGlmKFV0aWxzLm9uZU9mQ29tYmluYXRpb25zKHdvcmRzLCBbJ2NhbGVuZGFyJywgJ3NlYXNvbiddKSkgYXBpRGF0YSA9IFsncmFjZUNhbGVuZGFyJ11cblx0XHRcdFx0ZWxzZSBpZihVdGlscy5vbmVPZkNvbWJpbmF0aW9ucyh3b3JkcywgWydkcml2ZXInLCAnc3RhbmRpbmcnLCAnc2Vhc29uJ10pKSBhcGlEYXRhID0gWydkcml2ZXJTdGFuZGluZ3MnXVxuXHRcdFx0XHRlbHNlIGlmKFV0aWxzLm9uZU9mQ29tYmluYXRpb25zKHdvcmRzLCBbJ3RlYW0nLCAnc3RhbmRpbmcnLCAnc2Vhc29uJ10pKSBhcGlEYXRhID0gWydjb25zdHJ1Y3RvclN0YW5kaW5ncyddXG5cdFx0XHRcdHJldHVybiBBbmFseXNlci5nZXREYXRhSW5mbyhkYXRlcywgYXBpRGF0YSwgY2IpXG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmKFV0aWxzLm9ubHlJbkFycmF5KGtleXMsIFsnZHJpdmVyJ10pKSByZXR1cm4gQW5hbHlzZXIuZ2V0RGF0YUluZm8oZ3JvdXBlZC5kcml2ZXIsIEFuYWx5c2VyLmluc3BlY3REcml2ZXJEYXRhKHdvcmRzKSwgY2IpXG5cdFx0XHRlbHNlIGlmKFV0aWxzLm9ubHlJbkFycmF5KGtleXMsIFsndGVhbSddKSkgcmV0dXJuIEFuYWx5c2VyLmdldERhdGFJbmZvKGdyb3VwZWQudGVhbSwgQW5hbHlzZXIuaW5zcGVjdFRlYW1EYXRhKHdvcmRzKSwgY2IpXG5cdFx0XHRlbHNlIGlmKFV0aWxzLm9ubHlJbkFycmF5KGtleXMsIFsndHJhY2snXSkpIHJldHVybiBBbmFseXNlci5nZXREYXRhSW5mbyhncm91cGVkLnRyYWNrLCBBbmFseXNlci5pbnNwZWN0VHJhY2tEYXRhKHdvcmRzKSwgY2IpXG5cdFx0XHRlbHNlIGlmKFV0aWxzLm9ubHlJbkFycmF5KGtleXMsIFsnZHJpdmVyJywgJ3RlYW0nXSkpIHtcblx0XHRcdFx0bGV0IGRyaXZlckRhdGEgPSBBbmFseXNlci5pbnNwZWN0RHJpdmVyRGF0YSh3b3JkcywgdHJ1ZSlcblx0XHRcdFx0bGV0IHRlYW1EYXRhID0gQW5hbHlzZXIuaW5zcGVjdFRlYW1EYXRhKHdvcmRzLCB0cnVlKVxuXHRcdFx0XHRsZXQgY29tYm9zID0gW11cblx0XHRcdFx0Xy5mb3JFYWNoKGdyb3VwZWQuZHJpdmVyLCBkID0+IHtfLmZvckVhY2goZ3JvdXBlZC50ZWFtLCB0ID0+IGNvbWJvcy5wdXNoKHtkcml2ZXI6IGQsIHRlYW06IHR9KSl9KVxuXHRcdFx0XHRsZXQgc3VtbWFyaWVzID0gW11cblx0XHRcdFx0cmV0dXJuIGFzeW5jLnBhcmFsbGVsKFtcblx0XHRcdFx0XHRjYjEgPT4gQW5hbHlzZXIuZ2V0RGF0YUluZm8oY29tYm9zLCBbJ2RyaXZlclJhY2VSZXN1bHRzQnlUZWFtJ10sIHN1bSA9PiB7XG5cdFx0XHRcdFx0XHRzdW1tYXJpZXMucHVzaChzdW0pXG5cdFx0XHRcdFx0XHRjYjEoKVxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdGNiMSA9PiBBbmFseXNlci5nZXREYXRhSW5mbyhncm91cGVkLmRyaXZlciwgZHJpdmVyRGF0YSwgc3VtID0+IHtcblx0XHRcdFx0XHRcdHN1bW1hcmllcy5wdXNoKHN1bSlcblx0XHRcdFx0XHRcdGNiMSgpXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0Y2IxID0+IEFuYWx5c2VyLmdldERhdGFJbmZvKGdyb3VwZWQudGVhbSwgdGVhbURhdGEsIHN1bSA9PiB7XG5cdFx0XHRcdFx0XHRzdW1tYXJpZXMucHVzaChzdW0pXG5cdFx0XHRcdFx0XHRjYjEoKVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdF0sICgpID0+IHtcblx0XHRcdFx0XHRjYihfLmZsYXR0ZW4oc3VtbWFyaWVzKSlcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYoVXRpbHMub25seUluQXJyYXkoa2V5cywgWydkcml2ZXInLCAndHJhY2snXSkpIHtcblx0XHRcdFx0bGV0IGRyaXZlckRhdGEgPSBBbmFseXNlci5pbnNwZWN0RHJpdmVyRGF0YSh3b3JkcywgdHJ1ZSlcblx0XHRcdFx0bGV0IHRyYWNrRGF0YSA9IEFuYWx5c2VyLmluc3BlY3RUcmFja0RhdGEod29yZHMsIHRydWUpXG5cdFx0XHRcdGxldCBjb21ib3MgPSBbXVxuXHRcdFx0XHRfLmZvckVhY2goZ3JvdXBlZC5kcml2ZXIsIGQgPT4ge18uZm9yRWFjaChncm91cGVkLnRyYWNrLCB0ID0+IGNvbWJvcy5wdXNoKHtkcml2ZXI6IGQsIHRyYWNrOiB0fSkpfSlcblx0XHRcdFx0bGV0IHN1bW1hcmllcyA9IFtdXG5cdFx0XHRcdHJldHVybiBhc3luYy5wYXJhbGxlbChbXG5cdFx0XHRcdFx0Y2IxID0+IEFuYWx5c2VyLmdldERhdGFJbmZvKGNvbWJvcywgWydkcml2ZXJSYWNlUmVzdWx0c0J5VHJhY2snXSwgc3VtID0+IHtcblx0XHRcdFx0XHRcdHN1bW1hcmllcy5wdXNoKHN1bSlcblx0XHRcdFx0XHRcdGNiMSgpXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0Y2IxID0+IEFuYWx5c2VyLmdldERhdGFJbmZvKGdyb3VwZWQuZHJpdmVyLCBkcml2ZXJEYXRhLCBzdW0gPT4ge1xuXHRcdFx0XHRcdFx0c3VtbWFyaWVzLnB1c2goc3VtKVxuXHRcdFx0XHRcdFx0Y2IxKClcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRjYjEgPT4gQW5hbHlzZXIuZ2V0RGF0YUluZm8oZ3JvdXBlZC50cmFjaywgdHJhY2tEYXRhLCBzdW0gPT4ge1xuXHRcdFx0XHRcdFx0c3VtbWFyaWVzLnB1c2goc3VtKVxuXHRcdFx0XHRcdFx0Y2IxKClcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRdLCAoKSA9PiB7XG5cdFx0XHRcdFx0Y2IoXy5mbGF0dGVuKHN1bW1hcmllcykpXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmKFV0aWxzLm9ubHlJbkFycmF5KGtleXMsIFsndGVhbScsICd0cmFjayddKSkge1xuXHRcdFx0XHRsZXQgdGVhbURhdGEgPSBBbmFseXNlci5pbnNwZWN0VGVhbURhdGEod29yZHMsIHRydWUpXG5cdFx0XHRcdGxldCB0cmFja0RhdGEgPSBBbmFseXNlci5pbnNwZWN0VHJhY2tEYXRhKHdvcmRzLCB0cnVlKVxuXHRcdFx0XHRsZXQgY29tYm9zID0gW11cblx0XHRcdFx0Xy5mb3JFYWNoKGdyb3VwZWQudGVhbSwgZCA9PiB7Xy5mb3JFYWNoKGdyb3VwZWQudHJhY2ssIHQgPT4gY29tYm9zLnB1c2goe3RlYW06IGQsIHRyYWNrOiB0fSkpfSlcblx0XHRcdFx0bGV0IHN1bW1hcmllcyA9IFtdXG5cdFx0XHRcdHJldHVybiBhc3luYy5wYXJhbGxlbChbXG5cdFx0XHRcdFx0Y2IxID0+IEFuYWx5c2VyLmdldERhdGFJbmZvKGNvbWJvcywgWyd0ZWFtQXR0ZW5kYW5jZUJ5VHJhY2snXSwgc3VtID0+IHtcblx0XHRcdFx0XHRcdHN1bW1hcmllcy5wdXNoKHN1bSlcblx0XHRcdFx0XHRcdGNiMSgpXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0Y2IxID0+IEFuYWx5c2VyLmdldERhdGFJbmZvKGdyb3VwZWQudGVhbSwgdGVhbURhdGEsIHN1bSA9PiB7XG5cdFx0XHRcdFx0XHRzdW1tYXJpZXMucHVzaChzdW0pXG5cdFx0XHRcdFx0XHRjYjEoKVxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdGNiMSA9PiBBbmFseXNlci5nZXREYXRhSW5mbyhncm91cGVkLnRyYWNrLCB0cmFja0RhdGEsIHN1bSA9PiB7XG5cdFx0XHRcdFx0XHRzdW1tYXJpZXMucHVzaChzdW0pXG5cdFx0XHRcdFx0XHRjYjEoKVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdF0sICgpID0+IHtcblx0XHRcdFx0XHRjYihfLmZsYXR0ZW4oc3VtbWFyaWVzKSlcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYoVXRpbHMub25seUluQXJyYXkoa2V5cywgWydkcml2ZXInLCAndGVhbScsICd0cmFjayddKSkge1xuXHRcdFx0XHRsZXQgZHJpdmVyRGF0YSA9IEFuYWx5c2VyLmluc3BlY3REcml2ZXJEYXRhKHdvcmRzLCB0cnVlKVxuXHRcdFx0XHRsZXQgdGVhbURhdGEgPSBBbmFseXNlci5pbnNwZWN0VGVhbURhdGEod29yZHMsIHRydWUpXG5cdFx0XHRcdGxldCB0cmFja0RhdGEgPSBBbmFseXNlci5pbnNwZWN0VHJhY2tEYXRhKHdvcmRzLCB0cnVlKVxuXHRcdFx0XHRsZXQgY29tYm9zID0gW11cblx0XHRcdFx0Xy5mb3JFYWNoKGdyb3VwZWQuZHJpdmVyLCBkID0+IHtfLmZvckVhY2goZ3JvdXBlZC50ZWFtLCB0ID0+IHtfLmZvckVhY2goZ3JvdXBlZC50cmFjaywgdHIgPT4gY29tYm9zLnB1c2goe2RyaXZlcjogZCwgdGVhbTogdCwgdHJhY2s6IHRyfSkpfSl9KVxuXHRcdFx0XHRsZXQgc3VtbWFyaWVzID0gW11cblx0XHRcdFx0cmV0dXJuIGFzeW5jLnBhcmFsbGVsKFtcblx0XHRcdFx0XHRjYjEgPT4gQW5hbHlzZXIuZ2V0RGF0YUluZm8oY29tYm9zLCBbJ2RyaXZlclJhY2VSZXN1bHRzQnlUZWFtQW5kVHJhY2snXSwgc3VtID0+IHtcblx0XHRcdFx0XHRcdHN1bW1hcmllcy5wdXNoKHN1bSlcblx0XHRcdFx0XHRcdGNiMSgpXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0Y2IxID0+IEFuYWx5c2VyLmdldERhdGFJbmZvKGdyb3VwZWQuZHJpdmVyLCBkcml2ZXJEYXRhLCBzdW0gPT4ge1xuXHRcdFx0XHRcdFx0c3VtbWFyaWVzLnB1c2goc3VtKVxuXHRcdFx0XHRcdFx0Y2IxKClcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRjYjEgPT4gQW5hbHlzZXIuZ2V0RGF0YUluZm8oZ3JvdXBlZC50ZWFtLCB0ZWFtRGF0YSwgc3VtID0+IHtcblx0XHRcdFx0XHRcdHN1bW1hcmllcy5wdXNoKHN1bSlcblx0XHRcdFx0XHRcdGNiMSgpXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XSwgKCkgPT4ge1xuXHRcdFx0XHRcdGNiKF8uZmxhdHRlbihzdW1tYXJpZXMpKVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZih3b3Jkcy5sZW5ndGgpIHtcblx0XHRcdFx0aWYoVXRpbHMub25seUluQXJyYXkod29yZHMsIFsnbmV4dCddKSkgcmV0dXJuIEFuYWx5c2VyLmdldERhdGFJbmZvKFsnY3VycmVudCddLCBbJ25leHRSYWNlJ10sIGNiKVxuXHRcdFx0XHRlbHNlIGlmKFV0aWxzLm9uZU9mQ29tYmluYXRpb25zKHdvcmRzLCBbJ2N1cnJlbnQnLCAnc2Vhc29uJywgJ3N1bW1hcnknXSwgWydjdXJyZW50JywgJ3N1bW1hcnknXSkpIHJldHVybiBBbmFseXNlci5nZXREYXRhSW5mbyhbJ2N1cnJlbnQnXSwgWyduZXh0UmFjZScsICdyYWNlQ2FsZW5kYXInLCdkcml2ZXJTdGFuZGluZ3MnLCAnY29uc3RydWN0b3JTdGFuZGluZ3MnXSwgY2IpXG5cdFx0XHRcdGVsc2UgaWYoVXRpbHMub25lT2ZDb21iaW5hdGlvbnMod29yZHMsIFsnY3VycmVudCcsICdzZWFzb24nLCAnc3RhbmRpbmcnLCAnZHJpdmVyJ10sIFsnY3VycmVudCcsICdzdGFuZGluZycsICdkcml2ZXInXSkpIHJldHVybiBBbmFseXNlci5nZXREYXRhSW5mbyhbJ2N1cnJlbnQnXSwgWydkcml2ZXJTdGFuZGluZ3MnXSwgY2IpXG5cdFx0XHRcdGVsc2UgaWYoVXRpbHMub25lT2ZDb21iaW5hdGlvbnMod29yZHMsIFsnY3VycmVudCcsICdzZWFzb24nLCAnc3RhbmRpbmcnLCAndGVhbSddLCBbJ2N1cnJlbnQnLCAnc3RhbmRpbmcnLCAndGVhbSddKSkgcmV0dXJuIEFuYWx5c2VyLmdldERhdGFJbmZvKFsnY3VycmVudCddLCBbJ2NvbnN0cnVjdG9yU3RhbmRpbmdzJ10sIGNiKVxuXHRcdFx0XHRlbHNlIGlmKFV0aWxzLm9uZU9mQ29tYmluYXRpb25zKHdvcmRzLCBbJ2N1cnJlbnQnLCAnc2Vhc29uJywgJ3N0YW5kaW5nJ10sIFsnY3VycmVudCcsICdzdGFuZGluZyddKSkgcmV0dXJuIEFuYWx5c2VyLmdldERhdGFJbmZvKFsnY3VycmVudCddLCBbJ2RyaXZlclN0YW5kaW5ncycsICdjb25zdHJ1Y3RvclN0YW5kaW5ncyddLCBjYilcblx0XHRcdFx0ZWxzZSBpZihVdGlscy5vbmVPZkNvbWJpbmF0aW9ucyh3b3JkcywgWydjdXJyZW50JywgJ3NlYXNvbicsICdjYWxlbmRhciddLCBbJ2N1cnJlbnQnLCAnY2FsZW5kYXInXSkpIHJldHVybiBBbmFseXNlci5nZXREYXRhSW5mbyhbJ2N1cnJlbnQnXSwgWydyYWNlQ2FsZW5kYXInXSwgY2IpXG5cdFx0XHRcdGVsc2UgaWYoXy5pbmRleE9mKHdvcmRzLCAnY3VycmVudCcpPi0xKSB7XG5cdFx0XHRcdFx0bGV0IGFwaURhdGEgPSBbXVxuXHRcdFx0XHRcdGlmKF8uaW5kZXhPZih3b3JkcywgJ25leHQnKT4tMSkgYXBpRGF0YS5wdXNoKCduZXh0UmFjZScpXG5cdFx0XHRcdFx0aWYoXy5pbmRleE9mKHdvcmRzLCAnc3RhbmRpbmcnKT4tMSAmJiBfLmluZGV4T2Yod29yZHMsICdkcml2ZXInKT09LTEgJiYgXy5pbmRleE9mKHdvcmRzLCAndGVhbScpPT0tMSkgYXBpRGF0YS5wdXNoKFsnZHJpdmVyU3RhbmRpbmdzJywgJ2NvbnN0cnVjdG9yU3RhbmRpbmdzJ10pXG5cdFx0XHRcdFx0aWYoXy5pbmRleE9mKHdvcmRzLCAnZHJpdmVyJyk+LTEpIGFwaURhdGEucHVzaCgnZHJpdmVyU3RhbmRpbmdzJylcblx0XHRcdFx0XHRpZihfLmluZGV4T2Yod29yZHMsICd0ZWFtJyk+LTEpIGFwaURhdGEucHVzaCgnY29uc3RydWN0b3JTdGFuZGluZ3MnKVxuXHRcdFx0XHRcdGlmKF8uaW5kZXhPZih3b3JkcywgJ2NhbGVuZGFyJyk+LTEpIGFwaURhdGEucHVzaCgncmFjZUNhbGVuZGFyJylcblx0XHRcdFx0XHRhcGlEYXRhID0gXy5mbGF0dGVuKGFwaURhdGEpXG5cdFx0XHRcdFx0aWYoYXBpRGF0YS5sZW5ndGgpIHJldHVybiBBbmFseXNlci5nZXREYXRhSW5mbyhbJ2N1cnJlbnQnXSwgYXBpRGF0YSwgY2IpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y2IoW10pXG5cdH1cblxuXHRzdGF0aWMgaW5zcGVjdERyaXZlckRhdGEod29yZHMsIGVtcHR5ID0gZmFsc2UpIHtcblx0XHRsZXQgYXBpRGF0YSA9IGVtcHR5ID8gW10gOiBbJ2RyaXZlclNlYXNvblN0YW5kaW5nJywgJ2RyaXZlcldvcmxkVGl0bGVzJywgJ2RyaXZlclNlYXNvbkZpbmlzaGVzJywgJ2RyaXZlclRlYW1zJ11cblx0XHRpZihVdGlscy5vbmVPZkNvbWJpbmF0aW9ucyh3b3JkcywgWydjdXJyZW50JywgJ3N0YW5kaW5nJywgJ2RyaXZlciddLCBbJ2N1cnJlbnQnXSkpIGFwaURhdGEgPSBbJ2RyaXZlclNlYXNvblN0YW5kaW5nJ11cblx0XHRlbHNlIGlmKFV0aWxzLm9uZU9mQ29tYmluYXRpb25zKHdvcmRzLCBbJ3RpdGxlJywgJ2RyaXZlciddLCBbJ3RpdGxlJ10pKSBhcGlEYXRhID0gWydkcml2ZXJXb3JsZFRpdGxlcyddXG5cdFx0ZWxzZSBpZihVdGlscy5vbmVPZkNvbWJpbmF0aW9ucyh3b3JkcywgWydzZWFzb24nLCAnZHJpdmVyJywgJ3N0YW5kaW5nJ10sIFsnc2Vhc29uJ10pKSBhcGlEYXRhID0gWydkcml2ZXJTZWFzb25GaW5pc2hlcyddXG5cdFx0ZWxzZSBpZihVdGlscy5vbmVPZkNvbWJpbmF0aW9ucyh3b3JkcywgWyd0ZWFtJywgJ2RyaXZlciddLCBbJ3RlYW0nXSkpIGFwaURhdGEgPSBbJ2RyaXZlclRlYW1zJ11cblx0XHRlbHNlIHtcblx0XHRcdGxldCBfYXBpRGF0YSA9IFtdXG5cdFx0XHRpZihfLmluZGV4T2Yod29yZHMsICdjdXJyZW50Jyk+LTEpIF9hcGlEYXRhLnB1c2goJ2RyaXZlclNlYXNvblN0YW5kaW5nJylcblx0XHRcdGlmKF8uaW5kZXhPZih3b3JkcywgJ3RpdGxlJyk+LTEpIF9hcGlEYXRhLnB1c2goJ2RyaXZlcldvcmxkVGl0bGVzJylcblx0XHRcdGlmKF8uaW5kZXhPZih3b3JkcywgJ3NlYXNvbicpPi0xKSBfYXBpRGF0YS5wdXNoKCdkcml2ZXJTZWFzb25GaW5pc2hlcycpXG5cdFx0XHRpZihfLmluZGV4T2Yod29yZHMsICd0ZWFtJyk+LTEpIF9hcGlEYXRhLnB1c2goJ2RyaXZlclRlYW1zJylcblx0XHRcdGFwaURhdGEgPSBfYXBpRGF0YS5sZW5ndGggPyBfYXBpRGF0YSA6IGFwaURhdGFcblx0XHR9XG5cdFx0cmV0dXJuIGFwaURhdGFcblx0fVxuXG5cdHN0YXRpYyBpbnNwZWN0VGVhbURhdGEod29yZHMsIGVtcHR5ID0gZmFsc2UpIHtcblx0XHRsZXQgYXBpRGF0YSA9IGVtcHR5ID8gW10gOiBbJ3RlYW1TZWFzb25TdGFuZGluZycsICd0ZWFtV29ybGRUaXRsZXMnLCAndGVhbVNlYXNvbkZpbmlzaGVzJywgJ3RlYW1Ecml2ZXJzJ11cblx0XHRpZihVdGlscy5vbmVPZkNvbWJpbmF0aW9ucyh3b3JkcywgWydjdXJyZW50JywgJ3N0YW5kaW5nJywgJ3RlYW0nXSwgWydjdXJyZW50J10pKSBhcGlEYXRhID0gWyd0ZWFtU2Vhc29uU3RhbmRpbmcnXVxuXHRcdGVsc2UgaWYoVXRpbHMub25lT2ZDb21iaW5hdGlvbnMod29yZHMsIFsndGl0bGUnLCAndGVhbSddLCBbJ3RpdGxlJ10pKSBhcGlEYXRhID0gWyd0ZWFtV29ybGRUaXRsZXMnXVxuXHRcdGVsc2UgaWYoVXRpbHMub25lT2ZDb21iaW5hdGlvbnMod29yZHMsIFsnc2Vhc29uJywgJ3RlYW0nLCAnc3RhbmRpbmcnXSwgWydzZWFzb24nXSkpIGFwaURhdGEgPSBbJ3RlYW1TZWFzb25GaW5pc2hlcyddXG5cdFx0ZWxzZSBpZihVdGlscy5vbmVPZkNvbWJpbmF0aW9ucyh3b3JkcywgWyd0ZWFtJywgJ2RyaXZlciddLCBbJ2RyaXZlciddKSkgYXBpRGF0YSA9IFsndGVhbURyaXZlcnMnXVxuXHRcdGVsc2Uge1xuXHRcdFx0bGV0IF9hcGlEYXRhID0gW11cblx0XHRcdGlmKF8uaW5kZXhPZih3b3JkcywgJ2N1cnJlbnQnKT4tMSkgX2FwaURhdGEucHVzaCgndGVhbVNlYXNvblN0YW5kaW5nJylcblx0XHRcdGlmKF8uaW5kZXhPZih3b3JkcywgJ3RpdGxlJyk+LTEpIF9hcGlEYXRhLnB1c2goJ3RlYW1Xb3JsZFRpdGxlcycpXG5cdFx0XHRpZihfLmluZGV4T2Yod29yZHMsICdzZWFzb24nKT4tMSkgX2FwaURhdGEucHVzaCgndGVhbVNlYXNvbkZpbmlzaGVzJylcblx0XHRcdGlmKF8uaW5kZXhPZih3b3JkcywgJ2RyaXZlcicpPi0xKSBfYXBpRGF0YS5wdXNoKCd0ZWFtRHJpdmVycycpXG5cdFx0XHRhcGlEYXRhID0gX2FwaURhdGEubGVuZ3RoID8gX2FwaURhdGEgOiBhcGlEYXRhXG5cdFx0fVxuXHRcdHJldHVybiBhcGlEYXRhXG5cdH1cblxuXHRzdGF0aWMgaW5zcGVjdFRyYWNrRGF0YSh3b3JkcywgZW1wdHkgPSBmYWxzZSkge1xuXHRcdGxldCBhcGlEYXRhID0gZW1wdHkgPyBbXSA6IFsndHJhY2tXaW5uZXJzJ11cblx0XHRpZihVdGlscy5vbmVPZkNvbWJpbmF0aW9ucyh3b3JkcywgWydjdXJyZW50JywgJ3N0YW5kaW5nJ10pKSBhcGlEYXRhID0gWydjdXJyZW50VHJhY2tSZXN1bHRzJ11cblx0XHRyZXR1cm4gYXBpRGF0YVxuXHR9XG5cblx0c3RhdGljIGdldERhdGFJbmZvKGRhdGEsIHNlbGVjdGlvbiwgY2IpIHtcblx0XHRsZXQgc3VtbWFyaWVzID0gW11cblx0XHRhc3luYy5mb3JFYWNoKGRhdGEsIChkLCBjYjEpID0+IHtcblx0XHRcdGQgPSBkPT0nY3VycmVudCcgPyBtb21lbnQoKS5mb3JtYXQoJ1lZWVknKSA6IGRcblx0XHRcdHN1bW1hcmllcy5wdXNoKF8uZmlsdGVyKFt7XG5cdFx0XHRcdG5hbWU6ICdOZXh0IFJhY2UnLCB0eXBlOiAnbmV4dFJhY2UnXG5cdFx0XHR9LCB7XG5cdFx0XHRcdG5hbWU6IGAke2R9IFJhY2UgQ2FsZW5kYXJgLFxuXHRcdFx0XHR0eXBlOiAncmFjZUNhbGVuZGFyJyxcblx0XHRcdFx0eWVhcjogZFxuXHRcdFx0fSwge1xuXHRcdFx0XHRuYW1lOiBgJHtkfSBEcml2ZXIgU3RhbmRpbmdzYCxcblx0XHRcdFx0dHlwZTogJ2RyaXZlclN0YW5kaW5ncycsXG5cdFx0XHRcdHllYXI6IGRcblx0XHRcdH0sIHtcblx0XHRcdFx0bmFtZTogYCR7ZH0gQ29uc3RydWN0b3IgU3RhbmRpbmdzYCxcblx0XHRcdFx0dHlwZTogJ2NvbnN0cnVjdG9yU3RhbmRpbmdzJyxcblx0XHRcdFx0eWVhcjogZFxuXHRcdFx0fSwge1xuXHRcdFx0XHRuYW1lOiBgJHtkLm5hbWV9J3MgQ3VycmVudCBTZWFzb24gSW5mb2AsXG5cdFx0XHRcdHR5cGU6ICdkcml2ZXJTZWFzb25TdGFuZGluZycsXG5cdFx0XHRcdGRyaXZlcjogZC5lcmdhc3RJRFxuXHRcdFx0fSwge1xuXHRcdFx0XHRuYW1lOiBgJHtkLm5hbWV9J3MgV29ybGQgVGl0bGVzYCxcblx0XHRcdFx0dHlwZTogJ2RyaXZlcldvcmxkVGl0bGVzJyxcblx0XHRcdFx0ZHJpdmVyOiBkLmVyZ2FzdElEXG5cdFx0XHR9LCB7XG5cdFx0XHRcdG5hbWU6IGAke2QubmFtZX0ncyBTZWFzb24gRmluaXNoZXNgLFxuXHRcdFx0XHR0eXBlOiAnZHJpdmVyU2Vhc29uRmluaXNoZXMnLFxuXHRcdFx0XHRkcml2ZXI6IGQuZXJnYXN0SURcblx0XHRcdH0sIHtcblx0XHRcdFx0bmFtZTogYCR7ZC5uYW1lfSdzIENvbnN0cnVjdG9yc2AsXG5cdFx0XHRcdHR5cGU6ICdkcml2ZXJUZWFtcycsXG5cdFx0XHRcdGRyaXZlcjogZC5lcmdhc3RJRFxuXHRcdFx0fSwge1xuXHRcdFx0XHRuYW1lOiBgJHtkLm5hbWV9J3MgQ3VycmVudCBTZWFzb24gSW5mb2AsXG5cdFx0XHRcdHR5cGU6ICd0ZWFtU2Vhc29uU3RhbmRpbmcnLFxuXHRcdFx0XHR0ZWFtOiBkLmVyZ2FzdElEXG5cdFx0XHR9LCB7XG5cdFx0XHRcdG5hbWU6IGAke2QubmFtZX0ncyBXb3JsZCBUaXRsZXNgLFxuXHRcdFx0XHR0eXBlOiAndGVhbVdvcmxkVGl0bGVzJyxcblx0XHRcdFx0dGVhbTogZC5lcmdhc3RJRFxuXHRcdFx0fSwge1xuXHRcdFx0XHRuYW1lOiBgJHtkLm5hbWV9J3MgU2Vhc29uIEZpbmlzaGVzYCxcblx0XHRcdFx0dHlwZTogJ3RlYW1TZWFzb25GaW5pc2hlcycsXG5cdFx0XHRcdHRlYW06IGQuZXJnYXN0SURcblx0XHRcdH0sIHtcblx0XHRcdFx0bmFtZTogYCR7ZC5uYW1lfSdzIERyaXZlcnNgLFxuXHRcdFx0XHR0eXBlOiAndGVhbURyaXZlcnMnLFxuXHRcdFx0XHR0ZWFtOiBkLmVyZ2FzdElEXG5cdFx0XHR9LCB7XG5cdFx0XHRcdG5hbWU6IGAke2QubmFtZX0gV2lubmVyc2AsXG5cdFx0XHRcdHR5cGU6ICd0cmFja1dpbm5lcnMnLFxuXHRcdFx0XHR0cmFjazogZC5lcmdhc3RJRFxuXHRcdFx0fSwge1xuXHRcdFx0XHRuYW1lOiBgJHttb21lbnQoKS5mb3JtYXQoJ1lZWVknKX0gJHtkLm5hbWV9IFJlc3VsdHNgLFxuXHRcdFx0XHR0eXBlOiAnY3VycmVudFRyYWNrUmVzdWx0cycsXG5cdFx0XHRcdHRyYWNrOiBkLmVyZ2FzdElEXG5cdFx0XHR9LCB7XG5cdFx0XHRcdG5hbWU6IGAke2QuZHJpdmVyID8gZC5kcml2ZXIubmFtZSA6ICcnfSBpbiAke2QudGVhbSA/IGQudGVhbS5uYW1lIDogJyd9IFJhY2UgUmVzdWx0c2AsXG5cdFx0XHRcdHR5cGU6ICdkcml2ZXJSYWNlUmVzdWx0c0J5VGVhbScsXG5cdFx0XHRcdGRyaXZlcjogZC5kcml2ZXIgPyBkLmRyaXZlci5lcmdhc3RJRCA6IG51bGwsXG5cdFx0XHRcdHRlYW06IGQudGVhbSA/IGQudGVhbS5lcmdhc3RJRCA6IG51bGxcblx0XHRcdH0sIHtcblx0XHRcdFx0bmFtZTogYCR7ZC5kcml2ZXIgPyBkLmRyaXZlci5uYW1lIDogJyd9IGluICR7ZC50cmFjayA/IGQudHJhY2submFtZSA6ICcnfSBSYWNlIFJlc3VsdHNgLFxuXHRcdFx0XHR0eXBlOiAnZHJpdmVyUmFjZVJlc3VsdHNCeVRyYWNrJyxcblx0XHRcdFx0ZHJpdmVyOiBkLmRyaXZlciA/IGQuZHJpdmVyLmVyZ2FzdElEIDogbnVsbCxcblx0XHRcdFx0dHJhY2s6IGQudHJhY2sgPyBkLnRyYWNrLmVyZ2FzdElEIDogbnVsbFxuXHRcdFx0fSwge1xuXHRcdFx0XHRuYW1lOiBgJHtkLnRlYW0gPyBkLnRlYW0ubmFtZSA6ICcnfSBpbiAke2QudHJhY2sgPyBkLnRyYWNrLm5hbWUgOiAnJ30gQXR0ZW5kYW5jZWAsXG5cdFx0XHRcdHR5cGU6ICd0ZWFtQXR0ZW5kYW5jZUJ5VHJhY2snLFxuXHRcdFx0XHR0ZWFtOiBkLnRlYW0gPyBkLnRlYW0uZXJnYXN0SUQgOiBudWxsLFxuXHRcdFx0XHR0cmFjazogZC50cmFjayA/IGQudHJhY2suZXJnYXN0SUQgOiBudWxsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdG5hbWU6IGAke2QuZHJpdmVyID8gZC5kcml2ZXIubmFtZSA6ICcnfSBpbiAke2QudGVhbSA/IGQudGVhbS5uYW1lIDogJyd9ICR7ZC50cmFjayA/IGQudHJhY2submFtZSA6ICcnfSBSYWNlIFJlc3VsdHNgLFxuXHRcdFx0XHR0eXBlOiAnZHJpdmVyUmFjZVJlc3VsdHNCeVRlYW1BbmRUcmFjaycsXG5cdFx0XHRcdGRyaXZlcjogZC5kcml2ZXIgPyBkLmRyaXZlci5lcmdhc3RJRCA6IG51bGwsXG5cdFx0XHRcdHRlYW06IGQudGVhbSA/IGQudGVhbS5lcmdhc3RJRCA6IG51bGwsXG5cdFx0XHRcdHRyYWNrOiBkLnRyYWNrID8gZC50cmFjay5lcmdhc3RJRCA6IG51bGxcblx0XHRcdH1dLCBfZCA9PiBfLmluZGV4T2Yoc2VsZWN0aW9uLCBfZC50eXBlKT4tMSkpXG5cdFx0XHRjYjEoKVxuXHRcdH0sIGVyciA9PiBjYihfLmZsYXR0ZW4oc3VtbWFyaWVzKSkpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5hbHlzZXJcbiIsImV4cG9ydCBjb25zdCBzcGVjaWFsS2V5d29yZHMgPSBbe1xuXHRrZXk6ICdkcml2ZXInLFxuXHR3b3JkczogWydkcml2ZXInLCAnZHJpdmVycyddXG59LCB7XG5cdGtleTogJ3RlYW0nLFxuXHR3b3JkczogWydjb25zdHJ1Y3RvcicsICdjb25zdHJ1Y3RvcnMnLCAndGVhbScsICd0ZWFtcyddXG59LCB7XG5cdGtleTogJ3NlYXNvbicsXG5cdHdvcmRzOiBbJ3NlYXNvbicsICdzZWFzb25zJ11cbn0sIHtcblx0a2V5OiAnc3RhbmRpbmcnLFxuXHR3b3JkczogWydzdGFuZGluZycsICdzdGFuZGluZ3MnLCAncmVzdWx0JywgJ3Jlc3VsdHMnXVxufSwge1xuXHRrZXk6ICdjYWxlbmRhcicsXG5cdHdvcmRzOiBbJ2NhbGVuZGFyJywgJ2NhbGVuZGFycycsICdzY2hlZHVsZScsICdzY2hlZHVsZXInLCAnc2NoZWR1bGVzJ11cbn0sIHtcblx0a2V5OiAnY3VycmVudCcsXG5cdHdvcmRzOiBbJ2N1cnJlbnQnLCAncmlnaHQgbm93JywgJ2N1cnJlbnRseScsICd0aGlzIHllYXInLCAndGhpcyB5ZWFycycsICd0aGlzIHllYXJcXCdzJ11cbn0sIHtcblx0a2V5OiAnc3VtbWFyeScsXG5cdHdvcmRzOiBbJ3N1bW1hcnknLCAnc3VtbWFyaWVzJywgJ292ZXJ2aWV3JywgJ292ZXJ2aWV3cycsICdldmVyeXRoaW5nJ11cbn0sIHtcblx0a2V5OiAnbmV4dCcsXG5cdHdvcmRzOiBbJ25leHQgcmFjZScsICduZXh0IHJhY2VzJywgJ25leHQgZ3AnLCAnbmV4dCBncmFuZCBwcml4JywgJ25leHQgdmVudWUnLCAnbmV4dCB2ZW51ZXMnLCAnbmV4dCBjaXJjdWl0JywgJ25leHQgdHJhY2snLCAnbmV4dCB0cmFja3MnLCAnbmV4dCBjaXJjdWl0cyddXG59LCB7XG5cdGtleTogJ3RpdGxlJyxcblx0d29yZHM6IFsndGl0bGUnLCAndGl0bGVzJywgJ3dvcmxkIHRpdGxlJywgJ3dvcmxkIGNoYW1waW9uc2hpcCcsICd3b3JsZCBjaGFtcGlvbnNoaXBzJywgJ2NoYW1waW9uIG9mIHRoZSB3b3JsZCcsICdjaGFtcGlvbnNoaXAnLCAnY2hhbXBpb25zaGlwcyddXG59XVxuIiwiaW1wb3J0IHtET019IGZyb20gJ3JlYWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgTWFzb25yeSBmcm9tICdtYXNvbnJ5LWxheW91dCdcblxubGV0IHF1ZXJ5ID0gJydcblxuY2xhc3MgVXRpbHMge1xuXHRzdGF0aWMgY2FwaXRhbGl6ZShzdHIpIHtcblx0XHRyZXR1cm4gXyhzdHIuc3BsaXQoLyg/PVtBLVpdKS8pKS5tYXAodHh0ID0+IHR4dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR4dC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKSkudmFsdWUoKS5qb2luKCcgJylcblx0fVxuXG5cdHN0YXRpYyBmb3JtYXRFbnRpdHlTdHJpbmcoZSkge1xuXHRcdGlmKGUuc3RhcnRzV2l0aCgnaHR0cDovLycpIHx8IGUuc3RhcnRzV2l0aCgnaHR0cHM6Ly8nKSkge1xuXHRcdFx0cmV0dXJuIERPTS5hKHtocmVmOiBlLCB0YXJnZXQ6ICdfYmxhbmsnfSwgZSlcblx0XHR9XG5cdFx0aWYoL14oXFxkezR9KS0oXFxkezEsMn0pLShcXGR7MSwyfSkkLy50ZXN0KGUpKSB7XG5cdFx0XHRyZXR1cm4gbW9tZW50KGUsICdZWVlZLU1NLUREJykuZm9ybWF0KCdMTCcpXG5cdFx0fVxuXHRcdHJldHVybiBlXG5cdH1cblxuXHRzdGF0aWMgbmF0dXJhbEtleXdvcmRDb21iaW5hdGlvbnMoa2V5cykge1xuXHRcdGxldCBjaHVua3MgPSBrZXlzLmxlbmd0aFxuXHRcdGxldCByZXQgPSBbXVxuXHRcdGZvcihsZXQgeD0xO3g8PWNodW5rczt4KyspIHtcblx0XHRcdGZvcihsZXQgeT0xO3k8PShjaHVua3MteCsxKTt5KyspIHtcblx0XHRcdFx0cmV0LnB1c2goXy5zbGljZShrZXlzLCB5LTEsICh5LTEreCkpLmpvaW4oJyAnKSlcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJldFxuXHR9XG5cblx0c3RhdGljIGFycmF5Q29tYmluYXRpb25zKGEsIG1pbiA9IDEpIHtcbiAgICB2YXIgZm4gPSAobiwgc3JjLCBnb3QsIGFsbCkgPT4ge1xuICAgICAgICBpZiAobiA9PSAwKSB7XG4gICAgICAgICAgICBpZiAoZ290Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBhbGxbYWxsLmxlbmd0aF0gPSBnb3RcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGZvcih2YXIgaj0wO2o8c3JjLmxlbmd0aDtqKyspIHtcbiAgICAgICAgICAgIGZuKG4gLSAxLCBzcmMuc2xpY2UoaiArIDEpLCBnb3QuY29uY2F0KFtzcmNbal1dKSwgYWxsKVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICB2YXIgYWxsID0gW11cbiAgICBmb3IodmFyIGk9bWluO2k8YS5sZW5ndGg7aSsrKSB7XG4gICAgICAgIGZuKGksIGEsIFtdLCBhbGwpXG4gICAgfVxuICAgIGFsbC5wdXNoKGEpXG4gICAgcmV0dXJuIGFsbFxuXHR9XG5cblx0c3RhdGljIG9ubHlJbkFycmF5KGFycmF5LCBzaG91bGRCZUluKSB7XG5cdFx0aWYoYXJyYXkubGVuZ3RoICE9IHNob3VsZEJlSW4ubGVuZ3RoKSByZXR1cm4gZmFsc2Vcblx0XHRsZXQgcmV0ID0gdHJ1ZVxuXHRcdF8uZm9yRWFjaChzaG91bGRCZUluLCBzYmkgPT4ge1xuXHRcdFx0aWYoXy5pbmRleE9mKGFycmF5LCBzYmkpPT0tMSkgcmV0ID0gZmFsc2Vcblx0XHR9KVxuXHRcdHJldHVybiByZXRcblx0fVxuXG5cdHN0YXRpYyBvbmVPZkNvbWJpbmF0aW9ucyhhcnJheSwgd29yZHMsIGltcG9ydGFudCA9IFtdKSB7XG5cdFx0bGV0IGNvbWJpbmF0aW9ucyA9IFV0aWxzLmFycmF5Q29tYmluYXRpb25zKHdvcmRzKVxuXHRcdGxldCByZXQgPSBmYWxzZVxuXHRcdF8uZm9yRWFjaChjb21iaW5hdGlvbnMsIHdvcmQgPT4ge1xuXHRcdFx0aWYoVXRpbHMub25seUluQXJyYXkoYXJyYXksIHdvcmQpKSB7XG5cdFx0XHRcdGlmKGltcG9ydGFudC5sZW5ndGgpIHtcblx0XHRcdFx0XHRpZihfLmludGVyc2VjdGlvbih3b3JkLCBpbXBvcnRhbnQpLmxlbmd0aCA9PSBpbXBvcnRhbnQubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRyZXQgPSB0cnVlXG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2Vcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0ID0gdHJ1ZVxuXHRcdFx0XHRcdHJldHVybiBmYWxzZVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSlcblx0XHRyZXR1cm4gcmV0XG5cdH1cblxuXHRzdGF0aWMgcGx1Y2tWYWx1ZShkYXRhLCBrZXlzKSB7XG5cdFx0Xy5mb3JFYWNoKGtleXMsIGsgPT4ge1xuXHRcdFx0ZGF0YSA9IGRhdGFba11cblx0XHRcdGlmKF8uaXNBcnJheShkYXRhKSkgZGF0YSA9IF8uZmlyc3QoZGF0YSlcblx0XHR9KVxuXHRcdHJldHVybiBkYXRhXG5cdH1cblxuXHRzdGF0aWMgcmVwb3NpdGlvbigpIHtcblx0XHRsZXQgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXNvbnJ5R3JpZCcpXG5cdFx0bmV3IE1hc29ucnkoZ3JpZCwge1xuXHQgIFx0aXRlbVNlbGVjdG9yOiAnLmdyaWRJdGVtJyxcblx0ICBcdGNvbHVtbldpZHRoOiAnLmdyaWRTaXplcicsXG5cdFx0ICBwZXJjZW50UG9zaXRpb246IHRydWVcblx0ICB9KVxuXHR9XG5cblx0c3RhdGljIHNldFF1ZXJ5KHEpIHtcblx0XHRxdWVyeSA9IHFcblx0fVxuXG5cdHN0YXRpYyBnZXRRdWVyeSgpIHtcblx0XHRyZXR1cm4gcXVlcnlcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBVdGlsc1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICByZWQ1MDogJyNmZmViZWUnLFxuICByZWQxMDA6ICcjZmZjZGQyJyxcbiAgcmVkMjAwOiAnI2VmOWE5YScsXG4gIHJlZDMwMDogJyNlNTczNzMnLFxuICByZWQ0MDA6ICcjZWY1MzUwJyxcbiAgcmVkNTAwOiAnI2Y0NDMzNicsXG4gIHJlZDYwMDogJyNlNTM5MzUnLFxuICByZWQ3MDA6ICcjZDMyZjJmJyxcbiAgcmVkODAwOiAnI2M2MjgyOCcsXG4gIHJlZDkwMDogJyNiNzFjMWMnLFxuICByZWRBMTAwOiAnI2ZmOGE4MCcsXG4gIHJlZEEyMDA6ICcjZmY1MjUyJyxcbiAgcmVkQTQwMDogJyNmZjE3NDQnLFxuICByZWRBNzAwOiAnI2Q1MDAwMCcsXG5cbiAgcGluazUwOiAnI2ZjZTRlYycsXG4gIHBpbmsxMDA6ICcjZjhiYmQwJyxcbiAgcGluazIwMDogJyNmNDhmYjEnLFxuICBwaW5rMzAwOiAnI2YwNjI5MicsXG4gIHBpbms0MDA6ICcjZWM0MDdhJyxcbiAgcGluazUwMDogJyNlOTFlNjMnLFxuICBwaW5rNjAwOiAnI2Q4MWI2MCcsXG4gIHBpbms3MDA6ICcjYzIxODViJyxcbiAgcGluazgwMDogJyNhZDE0NTcnLFxuICBwaW5rOTAwOiAnIzg4MGU0ZicsXG4gIHBpbmtBMTAwOiAnI2ZmODBhYicsXG4gIHBpbmtBMjAwOiAnI2ZmNDA4MScsXG4gIHBpbmtBNDAwOiAnI2Y1MDA1NycsXG4gIHBpbmtBNzAwOiAnI2M1MTE2MicsXG5cbiAgcHVycGxlNTA6ICcjZjNlNWY1JyxcbiAgcHVycGxlMTAwOiAnI2UxYmVlNycsXG4gIHB1cnBsZTIwMDogJyNjZTkzZDgnLFxuICBwdXJwbGUzMDA6ICcjYmE2OGM4JyxcbiAgcHVycGxlNDAwOiAnI2FiNDdiYycsXG4gIHB1cnBsZTUwMDogJyM5YzI3YjAnLFxuICBwdXJwbGU2MDA6ICcjOGUyNGFhJyxcbiAgcHVycGxlNzAwOiAnIzdiMWZhMicsXG4gIHB1cnBsZTgwMDogJyM2YTFiOWEnLFxuICBwdXJwbGU5MDA6ICcjNGExNDhjJyxcbiAgcHVycGxlQTEwMDogJyNlYTgwZmMnLFxuICBwdXJwbGVBMjAwOiAnI2UwNDBmYicsXG4gIHB1cnBsZUE0MDA6ICcjZDUwMGY5JyxcbiAgcHVycGxlQTcwMDogJyNhYTAwZmYnLFxuXG4gIGRlZXBQdXJwbGU1MDogJyNlZGU3ZjYnLFxuICBkZWVwUHVycGxlMTAwOiAnI2QxYzRlOScsXG4gIGRlZXBQdXJwbGUyMDA6ICcjYjM5ZGRiJyxcbiAgZGVlcFB1cnBsZTMwMDogJyM5NTc1Y2QnLFxuICBkZWVwUHVycGxlNDAwOiAnIzdlNTdjMicsXG4gIGRlZXBQdXJwbGU1MDA6ICcjNjczYWI3JyxcbiAgZGVlcFB1cnBsZTYwMDogJyM1ZTM1YjEnLFxuICBkZWVwUHVycGxlNzAwOiAnIzUxMmRhOCcsXG4gIGRlZXBQdXJwbGU4MDA6ICcjNDUyN2EwJyxcbiAgZGVlcFB1cnBsZTkwMDogJyMzMTFiOTInLFxuICBkZWVwUHVycGxlQTEwMDogJyNiMzg4ZmYnLFxuICBkZWVwUHVycGxlQTIwMDogJyM3YzRkZmYnLFxuICBkZWVwUHVycGxlQTQwMDogJyM2NTFmZmYnLFxuICBkZWVwUHVycGxlQTcwMDogJyM2MjAwZWEnLFxuXG4gIGluZGlnbzUwOiAnI2U4ZWFmNicsXG4gIGluZGlnbzEwMDogJyNjNWNhZTknLFxuICBpbmRpZ28yMDA6ICcjOWZhOGRhJyxcbiAgaW5kaWdvMzAwOiAnIzc5ODZjYicsXG4gIGluZGlnbzQwMDogJyM1YzZiYzAnLFxuICBpbmRpZ281MDA6ICcjM2Y1MWI1JyxcbiAgaW5kaWdvNjAwOiAnIzM5NDlhYicsXG4gIGluZGlnbzcwMDogJyMzMDNmOWYnLFxuICBpbmRpZ284MDA6ICcjMjgzNTkzJyxcbiAgaW5kaWdvOTAwOiAnIzFhMjM3ZScsXG4gIGluZGlnb0ExMDA6ICcjOGM5ZWZmJyxcbiAgaW5kaWdvQTIwMDogJyM1MzZkZmUnLFxuICBpbmRpZ29BNDAwOiAnIzNkNWFmZScsXG4gIGluZGlnb0E3MDA6ICcjMzA0ZmZlJyxcblxuICBibHVlNTA6ICcjZTNmMmZkJyxcbiAgYmx1ZTEwMDogJyNiYmRlZmInLFxuICBibHVlMjAwOiAnIzkwY2FmOScsXG4gIGJsdWUzMDA6ICcjNjRiNWY2JyxcbiAgYmx1ZTQwMDogJyM0MmE1ZjUnLFxuICBibHVlNTAwOiAnIzIxOTZmMycsXG4gIGJsdWU2MDA6ICcjMWU4OGU1JyxcbiAgYmx1ZTcwMDogJyMxOTc2ZDInLFxuICBibHVlODAwOiAnIzE1NjVjMCcsXG4gIGJsdWU5MDA6ICcjMGQ0N2ExJyxcbiAgYmx1ZUExMDA6ICcjODJiMWZmJyxcbiAgYmx1ZUEyMDA6ICcjNDQ4YWZmJyxcbiAgYmx1ZUE0MDA6ICcjMjk3OWZmJyxcbiAgYmx1ZUE3MDA6ICcjMjk2MmZmJyxcblxuICBsaWdodEJsdWU1MDogJyNlMWY1ZmUnLFxuICBsaWdodEJsdWUxMDA6ICcjYjNlNWZjJyxcbiAgbGlnaHRCbHVlMjAwOiAnIzgxZDRmYScsXG4gIGxpZ2h0Qmx1ZTMwMDogJyM0ZmMzZjcnLFxuICBsaWdodEJsdWU0MDA6ICcjMjliNmY2JyxcbiAgbGlnaHRCbHVlNTAwOiAnIzAzYTlmNCcsXG4gIGxpZ2h0Qmx1ZTYwMDogJyMwMzliZTUnLFxuICBsaWdodEJsdWU3MDA6ICcjMDI4OGQxJyxcbiAgbGlnaHRCbHVlODAwOiAnIzAyNzdiZCcsXG4gIGxpZ2h0Qmx1ZTkwMDogJyMwMTU3OWInLFxuICBsaWdodEJsdWVBMTAwOiAnIzgwZDhmZicsXG4gIGxpZ2h0Qmx1ZUEyMDA6ICcjNDBjNGZmJyxcbiAgbGlnaHRCbHVlQTQwMDogJyMwMGIwZmYnLFxuICBsaWdodEJsdWVBNzAwOiAnIzAwOTFlYScsXG5cbiAgY3lhbjUwOiAnI2UwZjdmYScsXG4gIGN5YW4xMDA6ICcjYjJlYmYyJyxcbiAgY3lhbjIwMDogJyM4MGRlZWEnLFxuICBjeWFuMzAwOiAnIzRkZDBlMScsXG4gIGN5YW40MDA6ICcjMjZjNmRhJyxcbiAgY3lhbjUwMDogJyMwMGJjZDQnLFxuICBjeWFuNjAwOiAnIzAwYWNjMScsXG4gIGN5YW43MDA6ICcjMDA5N2E3JyxcbiAgY3lhbjgwMDogJyMwMDgzOGYnLFxuICBjeWFuOTAwOiAnIzAwNjA2NCcsXG4gIGN5YW5BMTAwOiAnIzg0ZmZmZicsXG4gIGN5YW5BMjAwOiAnIzE4ZmZmZicsXG4gIGN5YW5BNDAwOiAnIzAwZTVmZicsXG4gIGN5YW5BNzAwOiAnIzAwYjhkNCcsXG5cbiAgdGVhbDUwOiAnI2UwZjJmMScsXG4gIHRlYWwxMDA6ICcjYjJkZmRiJyxcbiAgdGVhbDIwMDogJyM4MGNiYzQnLFxuICB0ZWFsMzAwOiAnIzRkYjZhYycsXG4gIHRlYWw0MDA6ICcjMjZhNjlhJyxcbiAgdGVhbDUwMDogJyMwMDk2ODgnLFxuICB0ZWFsNjAwOiAnIzAwODk3YicsXG4gIHRlYWw3MDA6ICcjMDA3OTZiJyxcbiAgdGVhbDgwMDogJyMwMDY5NWMnLFxuICB0ZWFsOTAwOiAnIzAwNGQ0MCcsXG4gIHRlYWxBMTAwOiAnI2E3ZmZlYicsXG4gIHRlYWxBMjAwOiAnIzY0ZmZkYScsXG4gIHRlYWxBNDAwOiAnIzFkZTliNicsXG4gIHRlYWxBNzAwOiAnIzAwYmZhNScsXG5cbiAgZ3JlZW41MDogJyNlOGY1ZTknLFxuICBncmVlbjEwMDogJyNjOGU2YzknLFxuICBncmVlbjIwMDogJyNhNWQ2YTcnLFxuICBncmVlbjMwMDogJyM4MWM3ODQnLFxuICBncmVlbjQwMDogJyM2NmJiNmEnLFxuICBncmVlbjUwMDogJyM0Y2FmNTAnLFxuICBncmVlbjYwMDogJyM0M2EwNDcnLFxuICBncmVlbjcwMDogJyMzODhlM2MnLFxuICBncmVlbjgwMDogJyMyZTdkMzInLFxuICBncmVlbjkwMDogJyMxYjVlMjAnLFxuICBncmVlbkExMDA6ICcjYjlmNmNhJyxcbiAgZ3JlZW5BMjAwOiAnIzY5ZjBhZScsXG4gIGdyZWVuQTQwMDogJyMwMGU2NzYnLFxuICBncmVlbkE3MDA6ICcjMDBjODUzJyxcblxuICBsaWdodEdyZWVuNTA6ICcjZjFmOGU5JyxcbiAgbGlnaHRHcmVlbjEwMDogJyNkY2VkYzgnLFxuICBsaWdodEdyZWVuMjAwOiAnI2M1ZTFhNScsXG4gIGxpZ2h0R3JlZW4zMDA6ICcjYWVkNTgxJyxcbiAgbGlnaHRHcmVlbjQwMDogJyM5Y2NjNjUnLFxuICBsaWdodEdyZWVuNTAwOiAnIzhiYzM0YScsXG4gIGxpZ2h0R3JlZW42MDA6ICcjN2NiMzQyJyxcbiAgbGlnaHRHcmVlbjcwMDogJyM2ODlmMzgnLFxuICBsaWdodEdyZWVuODAwOiAnIzU1OGIyZicsXG4gIGxpZ2h0R3JlZW45MDA6ICcjMzM2OTFlJyxcbiAgbGlnaHRHcmVlbkExMDA6ICcjY2NmZjkwJyxcbiAgbGlnaHRHcmVlbkEyMDA6ICcjYjJmZjU5JyxcbiAgbGlnaHRHcmVlbkE0MDA6ICcjNzZmZjAzJyxcbiAgbGlnaHRHcmVlbkE3MDA6ICcjNjRkZDE3JyxcblxuICBsaW1lNTA6ICcjZjlmYmU3JyxcbiAgbGltZTEwMDogJyNmMGY0YzMnLFxuICBsaW1lMjAwOiAnI2U2ZWU5YycsXG4gIGxpbWUzMDA6ICcjZGNlNzc1JyxcbiAgbGltZTQwMDogJyNkNGUxNTcnLFxuICBsaW1lNTAwOiAnI2NkZGMzOScsXG4gIGxpbWU2MDA6ICcjYzBjYTMzJyxcbiAgbGltZTcwMDogJyNhZmI0MmInLFxuICBsaW1lODAwOiAnIzllOWQyNCcsXG4gIGxpbWU5MDA6ICcjODI3NzE3JyxcbiAgbGltZUExMDA6ICcjZjRmZjgxJyxcbiAgbGltZUEyMDA6ICcjZWVmZjQxJyxcbiAgbGltZUE0MDA6ICcjYzZmZjAwJyxcbiAgbGltZUE3MDA6ICcjYWVlYTAwJyxcblxuICB5ZWxsb3c1MDogJyNmZmZkZTcnLFxuICB5ZWxsb3cxMDA6ICcjZmZmOWM0JyxcbiAgeWVsbG93MjAwOiAnI2ZmZjU5ZCcsXG4gIHllbGxvdzMwMDogJyNmZmYxNzYnLFxuICB5ZWxsb3c0MDA6ICcjZmZlZTU4JyxcbiAgeWVsbG93NTAwOiAnI2ZmZWIzYicsXG4gIHllbGxvdzYwMDogJyNmZGQ4MzUnLFxuICB5ZWxsb3c3MDA6ICcjZmJjMDJkJyxcbiAgeWVsbG93ODAwOiAnI2Y5YTgyNScsXG4gIHllbGxvdzkwMDogJyNmNTdmMTcnLFxuICB5ZWxsb3dBMTAwOiAnI2ZmZmY4ZCcsXG4gIHllbGxvd0EyMDA6ICcjZmZmZjAwJyxcbiAgeWVsbG93QTQwMDogJyNmZmVhMDAnLFxuICB5ZWxsb3dBNzAwOiAnI2ZmZDYwMCcsXG5cbiAgYW1iZXI1MDogJyNmZmY4ZTEnLFxuICBhbWJlcjEwMDogJyNmZmVjYjMnLFxuICBhbWJlcjIwMDogJyNmZmUwODInLFxuICBhbWJlcjMwMDogJyNmZmQ1NGYnLFxuICBhbWJlcjQwMDogJyNmZmNhMjgnLFxuICBhbWJlcjUwMDogJyNmZmMxMDcnLFxuICBhbWJlcjYwMDogJyNmZmIzMDAnLFxuICBhbWJlcjcwMDogJyNmZmEwMDAnLFxuICBhbWJlcjgwMDogJyNmZjhmMDAnLFxuICBhbWJlcjkwMDogJyNmZjZmMDAnLFxuICBhbWJlckExMDA6ICcjZmZlNTdmJyxcbiAgYW1iZXJBMjAwOiAnI2ZmZDc0MCcsXG4gIGFtYmVyQTQwMDogJyNmZmM0MDAnLFxuICBhbWJlckE3MDA6ICcjZmZhYjAwJyxcblxuICBvcmFuZ2U1MDogJyNmZmYzZTAnLFxuICBvcmFuZ2UxMDA6ICcjZmZlMGIyJyxcbiAgb3JhbmdlMjAwOiAnI2ZmY2M4MCcsXG4gIG9yYW5nZTMwMDogJyNmZmI3NGQnLFxuICBvcmFuZ2U0MDA6ICcjZmZhNzI2JyxcbiAgb3JhbmdlNTAwOiAnI2ZmOTgwMCcsXG4gIG9yYW5nZTYwMDogJyNmYjhjMDAnLFxuICBvcmFuZ2U3MDA6ICcjZjU3YzAwJyxcbiAgb3JhbmdlODAwOiAnI2VmNmMwMCcsXG4gIG9yYW5nZTkwMDogJyNlNjUxMDAnLFxuICBvcmFuZ2VBMTAwOiAnI2ZmZDE4MCcsXG4gIG9yYW5nZUEyMDA6ICcjZmZhYjQwJyxcbiAgb3JhbmdlQTQwMDogJyNmZjkxMDAnLFxuICBvcmFuZ2VBNzAwOiAnI2ZmNmQwMCcsXG5cbiAgZGVlcE9yYW5nZTUwOiAnI2ZiZTllNycsXG4gIGRlZXBPcmFuZ2UxMDA6ICcjZmZjY2JjJyxcbiAgZGVlcE9yYW5nZTIwMDogJyNmZmFiOTEnLFxuICBkZWVwT3JhbmdlMzAwOiAnI2ZmOGE2NScsXG4gIGRlZXBPcmFuZ2U0MDA6ICcjZmY3MDQzJyxcbiAgZGVlcE9yYW5nZTUwMDogJyNmZjU3MjInLFxuICBkZWVwT3JhbmdlNjAwOiAnI2Y0NTExZScsXG4gIGRlZXBPcmFuZ2U3MDA6ICcjZTY0YTE5JyxcbiAgZGVlcE9yYW5nZTgwMDogJyNkODQzMTUnLFxuICBkZWVwT3JhbmdlOTAwOiAnI2JmMzYwYycsXG4gIGRlZXBPcmFuZ2VBMTAwOiAnI2ZmOWU4MCcsXG4gIGRlZXBPcmFuZ2VBMjAwOiAnI2ZmNmU0MCcsXG4gIGRlZXBPcmFuZ2VBNDAwOiAnI2ZmM2QwMCcsXG4gIGRlZXBPcmFuZ2VBNzAwOiAnI2RkMmMwMCcsXG5cbiAgYnJvd241MDogJyNlZmViZTknLFxuICBicm93bjEwMDogJyNkN2NjYzgnLFxuICBicm93bjIwMDogJyNiY2FhYTQnLFxuICBicm93bjMwMDogJyNhMTg4N2YnLFxuICBicm93bjQwMDogJyM4ZDZlNjMnLFxuICBicm93bjUwMDogJyM3OTU1NDgnLFxuICBicm93bjYwMDogJyM2ZDRjNDEnLFxuICBicm93bjcwMDogJyM1ZDQwMzcnLFxuICBicm93bjgwMDogJyM0ZTM0MmUnLFxuICBicm93bjkwMDogJyMzZTI3MjMnLFxuXG4gIGJsdWVHcmV5NTA6ICcjZWNlZmYxJyxcbiAgYmx1ZUdyZXkxMDA6ICcjY2ZkOGRjJyxcbiAgYmx1ZUdyZXkyMDA6ICcjYjBiZWM1JyxcbiAgYmx1ZUdyZXkzMDA6ICcjOTBhNGFlJyxcbiAgYmx1ZUdyZXk0MDA6ICcjNzg5MDljJyxcbiAgYmx1ZUdyZXk1MDA6ICcjNjA3ZDhiJyxcbiAgYmx1ZUdyZXk2MDA6ICcjNTQ2ZTdhJyxcbiAgYmx1ZUdyZXk3MDA6ICcjNDU1YTY0JyxcbiAgYmx1ZUdyZXk4MDA6ICcjMzc0NzRmJyxcbiAgYmx1ZUdyZXk5MDA6ICcjMjYzMjM4JyxcblxuICBncmV5NTA6ICcjZmFmYWZhJyxcbiAgZ3JleTEwMDogJyNmNWY1ZjUnLFxuICBncmV5MjAwOiAnI2VlZWVlZScsXG4gIGdyZXkzMDA6ICcjZTBlMGUwJyxcbiAgZ3JleTQwMDogJyNiZGJkYmQnLFxuICBncmV5NTAwOiAnIzllOWU5ZScsXG4gIGdyZXk2MDA6ICcjNzU3NTc1JyxcbiAgZ3JleTcwMDogJyM2MTYxNjEnLFxuICBncmV5ODAwOiAnIzQyNDI0MicsXG4gIGdyZXk5MDA6ICcjMjEyMTIxJyxcblxuICBibGFjazogJyMwMDAwMDAnLFxuICB3aGl0ZTogJyNmZmZmZmYnLFxuXG4gIHRyYW5zcGFyZW50OiAncmdiYSgwLCAwLCAwLCAwKScsXG4gIGZ1bGxCbGFjazogJ3JnYmEoMCwgMCwgMCwgMSknLFxuICBkYXJrQmxhY2s6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJyxcbiAgbGlnaHRCbGFjazogJ3JnYmEoMCwgMCwgMCwgMC41NCknLFxuICBtaW5CbGFjazogJ3JnYmEoMCwgMCwgMCwgMC4yNiknLFxuICBmYWludEJsYWNrOiAncmdiYSgwLCAwLCAwLCAwLjEyKScsXG4gIGZ1bGxXaGl0ZTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxuICBkYXJrV2hpdGU6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODcpJyxcbiAgbGlnaHRXaGl0ZTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41NCknXG59XG4iLCJpbXBvcnQgJCBmcm9tICdzdXBlcmFnZW50J1xuXG5jbGFzcyBFbnRpdHlTZXJ2aWNlIHtcblx0c3RhdGljIGdldEVudGl0eShlbnRpdHksIGNiKSB7XG5cdFx0JC5wb3N0KCcvYWkvZW50aXR5Jylcblx0XHQuc2VuZChlbnRpdHkpXG5cdFx0LmVuZCgoZXJyLCByZXMpID0+IHtcblx0XHRcdGNiKGVyciwgcmVzKVxuXHRcdH0pXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW50aXR5U2VydmljZVxuIiwiaW1wb3J0ICQgZnJvbSAnc3VwZXJhZ2VudCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBhc3luYyBmcm9tICdhc3luYydcblxuY2xhc3MgRjFTZXJ2aWNlIHtcblx0c3RhdGljIGdldEVudGl0eShlbnRpdHksIGNiKSB7XG5cdFx0bGV0IHR5cGUgPSAnZHJpdmVycydcblx0XHRpZihlbnRpdHkudHlwZSA9PSAndHJhY2snKSB7XG5cdFx0XHR0eXBlID0gJ2NpcmN1aXRzJ1xuXHRcdH0gZWxzZSBpZihlbnRpdHkudHlwZSA9PSAndGVhbScpIHtcblx0XHRcdHR5cGUgPSAnY29uc3RydWN0b3JzJ1xuXHRcdH1cblx0XHQkLmdldChgaHR0cDovL2VyZ2FzdC5jb20vYXBpL2YxLyR7dHlwZX0vJHtlbnRpdHkuZXJnYXN0SUR9Lmpzb24/bGltaXQ9MTAwMGApXG5cdFx0LmVuZCgoZXJyLCByZXMpID0+IHtcblx0XHRcdGlmKGVycikgcmV0dXJuIGNiKGVycilcblx0XHRcdGlmKGVudGl0eS50eXBlPT0nZHJpdmVyJykge1xuXHRcdFx0XHRsZXQgZGF0YSA9IHJlcy5ib2R5Lk1SRGF0YS5Ecml2ZXJUYWJsZS5Ecml2ZXJzXG5cdFx0XHRcdGlmKCFkYXRhLmxlbmd0aCkgcmV0dXJuIGNiKHRydWUpXG5cdFx0XHRcdGRhdGEgPSBfLmZpcnN0KGRhdGEpXG5cdFx0XHRcdHJldHVybiBjYihudWxsLCB7XG5cdFx0XHRcdFx0Z2l2ZW5OYW1lOiB7dmFsdWU6IGRhdGEuZ2l2ZW5OYW1lIHx8ICduL2EnfSxcblx0XHRcdFx0XHRmYW1pbHlOYW1lOiB7dmFsdWU6IGRhdGEuZmFtaWx5TmFtZSB8fCAnbi9hJ30sXG5cdFx0XHRcdFx0Y29kZToge3ZhbHVlOiBkYXRhLmNvZGUgfHwgJ24vYSd9LFxuXHRcdFx0XHRcdGRhdGVPZkJpcnRoOiB7dmFsdWU6IGRhdGEuZGF0ZU9mQmlydGggfHwgJ24vYSd9LFxuXHRcdFx0XHRcdG5hdGlvbmFsaXR5OiB7dmFsdWU6IGRhdGEubmF0aW9uYWxpdHkgfHwgJ24vYSd9LFxuXHRcdFx0XHRcdG51bWJlcjoge3ZhbHVlOiBkYXRhLnBlcm1hbmVudE51bWJlciB8fCAnbi9hJ30sXG5cdFx0XHRcdFx0dXJsOiB7dmFsdWU6IGRhdGEudXJsIHx8ICduL2EnfVxuXHRcdFx0XHR9KVxuXHRcdFx0fSBlbHNlIGlmKGVudGl0eS50eXBlPT0ndHJhY2snKSB7XG5cdFx0XHRcdGxldCBkYXRhID0gcmVzLmJvZHkuTVJEYXRhLkNpcmN1aXRUYWJsZS5DaXJjdWl0c1xuXHRcdFx0XHRpZighZGF0YS5sZW5ndGgpIHJldHVybiBjYih0cnVlKVxuXHRcdFx0XHRkYXRhID0gXy5maXJzdChkYXRhKVxuXHRcdFx0XHRyZXR1cm4gY2IobnVsbCwge1xuXHRcdFx0XHRcdG5hbWU6IHt2YWx1ZTogZGF0YS5jaXJjdWl0TmFtZSB8fCAnbi9hJ30sXG5cdFx0XHRcdFx0Y2l0eToge3ZhbHVlOiBkYXRhLkxvY2F0aW9uLmNpdHkgfHwgJ24vYSd9LFxuXHRcdFx0XHRcdGNvdW50cnk6IHt2YWx1ZTogZGF0YS5Mb2NhdGlvbi5jb3VudHJ5IHx8ICduL2EnfSxcblx0XHRcdFx0XHR1cmw6IHt2YWx1ZTogZGF0YS51cmwgfHwgJ24vYSd9XG5cdFx0XHRcdH0pXG5cdFx0XHR9IGVsc2UgaWYoZW50aXR5LnR5cGU9PSd0ZWFtJykge1xuXHRcdFx0XHRsZXQgZGF0YSA9IHJlcy5ib2R5Lk1SRGF0YS5Db25zdHJ1Y3RvclRhYmxlLkNvbnN0cnVjdG9yc1xuXHRcdFx0XHRpZighZGF0YS5sZW5ndGgpIHJldHVybiBjYih0cnVlKVxuXHRcdFx0XHRkYXRhID0gXy5maXJzdChkYXRhKVxuXHRcdFx0XHRyZXR1cm4gY2IobnVsbCwge1xuXHRcdFx0XHRcdG5hbWU6IHt2YWx1ZTogZGF0YS5uYW1lIHx8ICduL2EnfSxcblx0XHRcdFx0XHRuYXRpb25hbGl0eToge3ZhbHVlOiBkYXRhLm5hdGlvbmFsaXR5IHx8ICduL2EnfSxcblx0XHRcdFx0XHR1cmw6IHt2YWx1ZTogZGF0YS51cmwgfHwgJ24vYSd9XG5cdFx0XHRcdH0pXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY2IodHJ1ZSlcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cblx0c3RhdGljIGdldERyaXZlclNlYXNvblJlc3VsdHMoeWVhciwgY2IpIHtcblx0XHRGMVNlcnZpY2UuY2FsbEFwaShgaHR0cDovL2VyZ2FzdC5jb20vYXBpL2YxLyR7eWVhcn0vZHJpdmVyU3RhbmRpbmdzLmpzb24/bGltaXQ9MTAwMGAsIFsnU3RhbmRpbmdzVGFibGUnLCAnU3RhbmRpbmdzTGlzdHMnLCAnRHJpdmVyU3RhbmRpbmdzJ10sIGNiKVxuXHR9XG5cblx0c3RhdGljIGdldFRlYW1TZWFzb25SZXN1bHRzKHllYXIsIGNiKSB7XG5cdFx0RjFTZXJ2aWNlLmNhbGxBcGkoYGh0dHA6Ly9lcmdhc3QuY29tL2FwaS9mMS8ke3llYXJ9L2NvbnN0cnVjdG9yU3RhbmRpbmdzLmpzb24/bGltaXQ9MTAwMGAsIFsnU3RhbmRpbmdzVGFibGUnLCAnU3RhbmRpbmdzTGlzdHMnLCAnQ29uc3RydWN0b3JTdGFuZGluZ3MnXSwgY2IpXG5cdH1cblxuXHRzdGF0aWMgZ2V0UmFjZUNhbGVuZGFyKHllYXIsIGNiKSB7XG5cdFx0RjFTZXJ2aWNlLmNhbGxBcGkoYGh0dHA6Ly9lcmdhc3QuY29tL2FwaS9mMS8ke3llYXJ9Lmpzb24/bGltaXQ9MTAwMGAsIFsnUmFjZVRhYmxlJywgJ1JhY2VzJ10sIGNiKVxuXHR9XG5cblx0c3RhdGljIGdldERyaXZlclJlc3VsdHNCeVNlYXNvbihkcml2ZXIsIHllYXIsIGNiKSB7XG5cdFx0RjFTZXJ2aWNlLmNhbGxBcGkoYGh0dHA6Ly9lcmdhc3QuY29tL2FwaS9mMS8ke3llYXJ9L2RyaXZlcnMvJHtkcml2ZXJ9L3Jlc3VsdHMuanNvbj9saW1pdD0xMDAwYCwgWydSYWNlVGFibGUnLCAnUmFjZXMnXSwgY2IpXG5cdH1cblxuXHRzdGF0aWMgZ2V0RHJpdmVyV29ybGRUaXRsZXMoZHJpdmVyLCBjYikge1xuXHRcdEYxU2VydmljZS5jYWxsQXBpKGBodHRwOi8vZXJnYXN0LmNvbS9hcGkvZjEvZHJpdmVycy8ke2RyaXZlcn0vZHJpdmVyU3RhbmRpbmdzLzEvc2Vhc29ucy5qc29uP2xpbWl0PTEwMDBgLCBbJ1NlYXNvblRhYmxlJywgJ1NlYXNvbnMnXSwgY2IpXG5cdH1cblxuXHRzdGF0aWMgZ2V0RHJpdmVyU2Vhc29uRmluaXNoZXMoZHJpdmVyLCBjYikge1xuXHRcdEYxU2VydmljZS5jYWxsQXBpKGBodHRwOi8vZXJnYXN0LmNvbS9hcGkvZjEvZHJpdmVycy8ke2RyaXZlcn0vZHJpdmVyU3RhbmRpbmdzLmpzb24/bGltaXQ9MTAwMGAsIFsnU3RhbmRpbmdzVGFibGUnLCAnU3RhbmRpbmdzTGlzdHMnXSwgY2IpXG5cdH1cblxuXHRzdGF0aWMgZ2V0RHJpdmVyVGVhbXMoZHJpdmVyLCBjYikge1xuXHRcdEYxU2VydmljZS5jYWxsQXBpKGBodHRwOi8vZXJnYXN0LmNvbS9hcGkvZjEvZHJpdmVycy8ke2RyaXZlcn0vY29uc3RydWN0b3JzLmpzb24/bGltaXQ9MTAwMGAsIFsnQ29uc3RydWN0b3JUYWJsZScsICdDb25zdHJ1Y3RvcnMnXSwgY2IpXG5cdH1cblxuXHRzdGF0aWMgZ2V0RHJpdmVyU2Vhc29uU3RhbmRpbmcoZHJpdmVyLCBjYikge1xuXHRcdEYxU2VydmljZS5jYWxsQXBpKGBodHRwOi8vZXJnYXN0LmNvbS9hcGkvZjEvY3VycmVudC9kcml2ZXJzLyR7ZHJpdmVyfS9kcml2ZXJTdGFuZGluZ3MuanNvbj9saW1pdD0xMDAwYCwgWydTdGFuZGluZ3NUYWJsZScsICdTdGFuZGluZ3NMaXN0cycsICdEcml2ZXJTdGFuZGluZ3MnXSwgY2IpXG5cdH1cblxuXHRzdGF0aWMgZ2V0TmV4dFJhY2UoY2IpIHtcblx0XHRGMVNlcnZpY2UuY2FsbEFwaShgaHR0cDovL2VyZ2FzdC5jb20vYXBpL2YxL2N1cnJlbnQvbmV4dC5qc29uP2xpbWl0PTEwMDBgLCBbJ1JhY2VUYWJsZScsICdSYWNlcyddLCBjYilcblx0fVxuXG5cdHN0YXRpYyBnZXRUZWFtU2Vhc29uU3RhbmRpbmcodGVhbSwgY2IpIHtcblx0XHRGMVNlcnZpY2UuY2FsbEFwaShgaHR0cDovL2VyZ2FzdC5jb20vYXBpL2YxL2N1cnJlbnQvY29uc3RydWN0b3JzLyR7dGVhbX0vY29uc3RydWN0b3JTdGFuZGluZ3MuanNvbj9saW1pdD0xMDAwYCwgWydTdGFuZGluZ3NUYWJsZScsICdTdGFuZGluZ3NMaXN0cycsICdDb25zdHJ1Y3RvclN0YW5kaW5ncyddLCBjYilcblx0fVxuXG5cdHN0YXRpYyBnZXRUZWFtV29ybGRUaXRsZXModGVhbSwgY2IpIHtcblx0XHRGMVNlcnZpY2UuY2FsbEFwaShgaHR0cDovL2VyZ2FzdC5jb20vYXBpL2YxL2NvbnN0cnVjdG9ycy8ke3RlYW19L2NvbnN0cnVjdG9yU3RhbmRpbmdzLzEvc2Vhc29ucy5qc29uP2xpbWl0PTEwMDBgLCBbJ1NlYXNvblRhYmxlJywgJ1NlYXNvbnMnXSwgY2IpXG5cdH1cblxuXHRzdGF0aWMgZ2V0VGVhbVNlYXNvbkZpbmlzaGVzKHRlYW0sIGNiKSB7XG5cdFx0RjFTZXJ2aWNlLmNhbGxBcGkoYGh0dHA6Ly9lcmdhc3QuY29tL2FwaS9mMS9jb25zdHJ1Y3RvcnMvJHt0ZWFtfS9jb25zdHJ1Y3RvclN0YW5kaW5ncy5qc29uP2xpbWl0PTEwMDBgLCBbJ1N0YW5kaW5nc1RhYmxlJywgJ1N0YW5kaW5nc0xpc3RzJ10sIGNiKVxuXHR9XG5cblx0c3RhdGljIGdldFRlYW1Ecml2ZXJzKHRlYW0sIGNiKSB7XG5cdFx0RjFTZXJ2aWNlLmNhbGxBcGkoYGh0dHA6Ly9lcmdhc3QuY29tL2FwaS9mMS9jb25zdHJ1Y3RvcnMvJHt0ZWFtfS9kcml2ZXJzLmpzb24/bGltaXQ9MTAwMGAsIFsnRHJpdmVyVGFibGUnLCAnRHJpdmVycyddLCBjYilcblx0fVxuXG5cdHN0YXRpYyBnZXRUcmFja1dpbm5lcnModHJhY2ssIGNiKSB7XG5cdFx0RjFTZXJ2aWNlLmNhbGxBcGkoYGh0dHA6Ly9lcmdhc3QuY29tL2FwaS9mMS9jaXJjdWl0cy8ke3RyYWNrfS9yZXN1bHRzLzEuanNvbj9saW1pdD0xMDAwYCwgWydSYWNlVGFibGUnLCAnUmFjZXMnXSwgY2IpXG5cdH1cblxuXHRzdGF0aWMgZ2V0Q3VycmVudFRyYWNrUmVzdWx0cyh0cmFjaywgY2IpIHtcblx0XHRGMVNlcnZpY2UuY2FsbEFwaShgaHR0cDovL2VyZ2FzdC5jb20vYXBpL2YxL2N1cnJlbnQvY2lyY3VpdHMvJHt0cmFja30vcmVzdWx0cy5qc29uP2xpbWl0PTEwMDBgLCBbJ1JhY2VUYWJsZScsICdSYWNlcycsICdSZXN1bHRzJ10sIGNiKVxuXHR9XG5cblx0c3RhdGljIGdldERyaXZlclJhY2VSZXN1bHRzQnlUZWFtKGRyaXZlciwgdGVhbSwgY2IpIHtcblx0XHRGMVNlcnZpY2UuY2FsbEFwaShgaHR0cDovL2VyZ2FzdC5jb20vYXBpL2YxL2NvbnN0cnVjdG9ycy8ke3RlYW19L2RyaXZlcnMvJHtkcml2ZXJ9L3Jlc3VsdHMuanNvbj9saW1pdD0xMDAwYCwgWydSYWNlVGFibGUnLCAnUmFjZXMnXSwgY2IpXG5cdH1cblxuXHRzdGF0aWMgZ2V0RHJpdmVyUmFjZVJlc3VsdHNCeVRyYWNrKGRyaXZlciwgdHJhY2ssIGNiKSB7XG5cdFx0RjFTZXJ2aWNlLmNhbGxBcGkoYGh0dHA6Ly9lcmdhc3QuY29tL2FwaS9mMS9jaXJjdWl0cy8ke3RyYWNrfS9kcml2ZXJzLyR7ZHJpdmVyfS9yZXN1bHRzLmpzb24/bGltaXQ9MTAwMGAsIFsnUmFjZVRhYmxlJywgJ1JhY2VzJ10sIGNiKVxuXHR9XG5cblx0c3RhdGljIGdldFRlYW1BdHRlbmRhbmNlQnlUcmFjayh0ZWFtLCB0cmFjaywgY2IpIHtcblx0XHRGMVNlcnZpY2UuY2FsbEFwaShgaHR0cDovL2VyZ2FzdC5jb20vYXBpL2YxL2NpcmN1aXRzLyR7dHJhY2t9L2NvbnN0cnVjdG9ycy8ke3RlYW19L3Jlc3VsdHMuanNvbj9saW1pdD0xMDAwYCwgWydSYWNlVGFibGUnLCAnUmFjZXMnXSwgY2IpXG5cdH1cblxuXHRzdGF0aWMgZ2V0RHJpdmVyUmFjZVJlc3VsdHNCeVRlYW1BbmRUcmFjayhkcml2ZXIsIHRlYW0sIHRyYWNrLCBjYikge1xuXHRcdEYxU2VydmljZS5jYWxsQXBpKGBodHRwOi8vZXJnYXN0LmNvbS9hcGkvZjEvY29uc3RydWN0b3JzLyR7dGVhbX0vZHJpdmVycy8ke2RyaXZlcn0vY2lyY3VpdHMvJHt0cmFja30vcmVzdWx0cy5qc29uP2xpbWl0PTEwMDBgLCBbJ1JhY2VUYWJsZScsICdSYWNlcyddLCBjYilcblx0fVxuXG5cdHN0YXRpYyBjYWxsQXBpKGxpbmssIGtleXMsIGNiKSB7XG5cdFx0JC5nZXQobGluaylcblx0XHQuZW5kKChlcnIsIHJlcykgPT4ge1xuXHRcdFx0aWYoZXJyKSByZXR1cm4gY2IodHJ1ZSlcblx0XHRcdGxldCBkYXRhID0gcmVzLmJvZHkuTVJEYXRhXG5cdFx0XHRhc3luYy5mb3JFYWNoU2VyaWVzKGtleXMsIChrLCBjYjEpID0+IHtcblx0XHRcdFx0aWYoIWRhdGFba10pIHJldHVybiBjYjEodHJ1ZSlcblx0XHRcdFx0ZGF0YSA9IGRhdGFba11cblx0XHRcdFx0aWYoXy5pc0FycmF5KGRhdGEpKSB7XG5cdFx0XHRcdFx0aWYoIWRhdGEubGVuZ3RoKSByZXR1cm4gY2IxKHRydWUpXG5cdFx0XHRcdFx0aWYoXy5sYXN0KGtleXMpIT1rKSBkYXRhID0gXy5maXJzdChkYXRhKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGNiMSgpXG5cdFx0XHR9LCBlcnIgPT4gY2IoZXJyLCBkYXRhKSlcblx0XHR9KVxuXHR9XG5cblx0c3RhdGljIGdldFN1bW1hcnkoc3VtbWFyeSwgY2IpIHtcblx0XHRzd2l0Y2goc3VtbWFyeS50eXBlKSB7XG5cdFx0XHRjYXNlICdyYWNlQ2FsZW5kYXInOlxuXHRcdFx0XHRGMVNlcnZpY2UuZ2V0UmFjZUNhbGVuZGFyKHN1bW1hcnkueWVhciwgY2IpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdkcml2ZXJTdGFuZGluZ3MnOlxuXHRcdFx0XHRGMVNlcnZpY2UuZ2V0RHJpdmVyU2Vhc29uUmVzdWx0cyhzdW1tYXJ5LnllYXIsIGNiKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnY29uc3RydWN0b3JTdGFuZGluZ3MnOlxuXHRcdFx0XHRGMVNlcnZpY2UuZ2V0VGVhbVNlYXNvblJlc3VsdHMoc3VtbWFyeS55ZWFyLCBjYilcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2RyaXZlcldvcmxkVGl0bGVzJzpcblx0XHRcdFx0RjFTZXJ2aWNlLmdldERyaXZlcldvcmxkVGl0bGVzKHN1bW1hcnkuZHJpdmVyLCBjYilcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2RyaXZlclNlYXNvbkZpbmlzaGVzJzpcblx0XHRcdFx0RjFTZXJ2aWNlLmdldERyaXZlclNlYXNvbkZpbmlzaGVzKHN1bW1hcnkuZHJpdmVyLCBjYilcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2RyaXZlclRlYW1zJzpcblx0XHRcdFx0RjFTZXJ2aWNlLmdldERyaXZlclRlYW1zKHN1bW1hcnkuZHJpdmVyLCBjYilcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2RyaXZlclNlYXNvblN0YW5kaW5nJzpcblx0XHRcdFx0RjFTZXJ2aWNlLmdldERyaXZlclNlYXNvblN0YW5kaW5nKHN1bW1hcnkuZHJpdmVyLCBjYilcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ25leHRSYWNlJzpcblx0XHRcdFx0RjFTZXJ2aWNlLmdldE5leHRSYWNlKGNiKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAndGVhbVNlYXNvblN0YW5kaW5nJzpcblx0XHRcdFx0RjFTZXJ2aWNlLmdldFRlYW1TZWFzb25TdGFuZGluZyhzdW1tYXJ5LnRlYW0sIGNiKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAndGVhbVdvcmxkVGl0bGVzJzpcblx0XHRcdFx0RjFTZXJ2aWNlLmdldFRlYW1Xb3JsZFRpdGxlcyhzdW1tYXJ5LnRlYW0sIGNiKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAndGVhbVNlYXNvbkZpbmlzaGVzJzpcblx0XHRcdFx0RjFTZXJ2aWNlLmdldFRlYW1TZWFzb25GaW5pc2hlcyhzdW1tYXJ5LnRlYW0sIGNiKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAndGVhbURyaXZlcnMnOlxuXHRcdFx0XHRGMVNlcnZpY2UuZ2V0VGVhbURyaXZlcnMoc3VtbWFyeS50ZWFtLCBjYilcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ3RyYWNrV2lubmVycyc6XG5cdFx0XHRcdEYxU2VydmljZS5nZXRUcmFja1dpbm5lcnMoc3VtbWFyeS50cmFjaywgY2IpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdjdXJyZW50VHJhY2tSZXN1bHRzJzpcblx0XHRcdFx0RjFTZXJ2aWNlLmdldEN1cnJlbnRUcmFja1Jlc3VsdHMoc3VtbWFyeS50cmFjaywgY2IpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdkcml2ZXJSYWNlUmVzdWx0c0J5VGVhbSc6XG5cdFx0XHRcdEYxU2VydmljZS5nZXREcml2ZXJSYWNlUmVzdWx0c0J5VGVhbShzdW1tYXJ5LmRyaXZlciwgc3VtbWFyeS50ZWFtLCBjYilcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2RyaXZlclJhY2VSZXN1bHRzQnlUcmFjayc6XG5cdFx0XHRcdEYxU2VydmljZS5nZXREcml2ZXJSYWNlUmVzdWx0c0J5VHJhY2soc3VtbWFyeS5kcml2ZXIsIHN1bW1hcnkudHJhY2ssIGNiKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAndGVhbUF0dGVuZGFuY2VCeVRyYWNrJzpcblx0XHRcdFx0RjFTZXJ2aWNlLmdldFRlYW1BdHRlbmRhbmNlQnlUcmFjayhzdW1tYXJ5LnRlYW0sIHN1bW1hcnkudHJhY2ssIGNiKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnZHJpdmVyUmFjZVJlc3VsdHNCeVRlYW1BbmRUcmFjayc6XG5cdFx0XHRcdEYxU2VydmljZS5nZXREcml2ZXJSYWNlUmVzdWx0c0J5VGVhbUFuZFRyYWNrKHN1bW1hcnkuZHJpdmVyLCBzdW1tYXJ5LnRlYW0sIHN1bW1hcnkudHJhY2ssIGNiKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0Y2IodHJ1ZSlcblx0XHRcdFx0YnJlYWtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgcmVzdWx0c0Zvcm1hdGVyKHR5cGUpIHtcblx0XHRzd2l0Y2godHlwZSkge1xuXHRcdFx0Y2FzZSAncmFjZUNhbGVuZGFyJzpcblx0XHRcdFx0cmV0dXJuIFt7XG5cdFx0XHRcdFx0bmFtZTogJ1JvdW5kJyxcblx0XHRcdFx0XHRrZXk6IFsncm91bmQnXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ05hbWUnLFxuXHRcdFx0XHRcdGtleTogWydyYWNlTmFtZSddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnRGF0ZScsXG5cdFx0XHRcdFx0a2V5OiBbJ2RhdGUnXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ0NpcmN1aXQnLFxuXHRcdFx0XHRcdGtleTogWydDaXJjdWl0JywgJ2NpcmN1aXROYW1lJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdDb3VudHJ5Jyxcblx0XHRcdFx0XHRrZXk6IFsnQ2lyY3VpdCcsICdMb2NhdGlvbicsICdjb3VudHJ5J11cblx0XHRcdFx0fV1cblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2RyaXZlclN0YW5kaW5ncyc6XG5cdFx0XHRcdHJldHVybiBbe1xuXHRcdFx0XHRcdG5hbWU6ICdQb3NpdGlvbicsXG5cdFx0XHRcdFx0a2V5OiBbJ3Bvc2l0aW9uJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdGaXJzdCBOYW1lJyxcblx0XHRcdFx0XHRrZXk6IFsnRHJpdmVyJywgJ2dpdmVuTmFtZSddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnTGFzdCBOYW1lJyxcblx0XHRcdFx0XHRrZXk6IFsnRHJpdmVyJywgJ2ZhbWlseU5hbWUnXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ1RlYW0nLFxuXHRcdFx0XHRcdGtleTogWydDb25zdHJ1Y3RvcnMnLCAnbmFtZSddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnUG9pbnRzJyxcblx0XHRcdFx0XHRrZXk6IFsncG9pbnRzJ11cblx0XHRcdFx0fV1cblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2NvbnN0cnVjdG9yU3RhbmRpbmdzJzpcblx0XHRcdFx0cmV0dXJuIFt7XG5cdFx0XHRcdFx0bmFtZTogJ1Bvc2l0aW9uJyxcblx0XHRcdFx0XHRrZXk6IFsncG9zaXRpb24nXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ1RlYW0nLFxuXHRcdFx0XHRcdGtleTogWydDb25zdHJ1Y3RvcicsICduYW1lJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdQb2ludHMnLFxuXHRcdFx0XHRcdGtleTogWydwb2ludHMnXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ1dpbnMnLFxuXHRcdFx0XHRcdGtleTogWyd3aW5zJ11cblx0XHRcdFx0fV1cblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2RyaXZlcldvcmxkVGl0bGVzJzpcblx0XHRcdFx0cmV0dXJuIFt7XG5cdFx0XHRcdFx0bmFtZTogJ1NlYXNvbicsXG5cdFx0XHRcdFx0a2V5OiBbJ3NlYXNvbiddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnTW9yZSBpbmZvJyxcblx0XHRcdFx0XHRrZXk6IFsndXJsJ11cblx0XHRcdFx0fV1cblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2RyaXZlclNlYXNvbkZpbmlzaGVzJzpcblx0XHRcdFx0cmV0dXJuIFt7XG5cdFx0XHRcdFx0bmFtZTogJ1NlYXNvbicsXG5cdFx0XHRcdFx0a2V5OiBbJ3NlYXNvbiddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnUG9zaXRpb24nLFxuXHRcdFx0XHRcdGtleTogWydEcml2ZXJTdGFuZGluZ3MnLCAncG9zaXRpb24nXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ1BvaW50cycsXG5cdFx0XHRcdFx0a2V5OiBbJ0RyaXZlclN0YW5kaW5ncycsICdwb2ludHMnXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ1dpbnMnLFxuXHRcdFx0XHRcdGtleTogWydEcml2ZXJTdGFuZGluZ3MnLCAnd2lucyddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnVGVhbScsXG5cdFx0XHRcdFx0a2V5OiBbJ0RyaXZlclN0YW5kaW5ncycsICdDb25zdHJ1Y3RvcnMnLCAnbmFtZSddXG5cdFx0XHRcdH1dXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdkcml2ZXJUZWFtcyc6XG5cdFx0XHRcdHJldHVybiBbe1xuXHRcdFx0XHRcdG5hbWU6ICdUZWFtJyxcblx0XHRcdFx0XHRrZXk6IFsnbmFtZSddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnTmF0aW9uYWxpdHknLFxuXHRcdFx0XHRcdGtleTogWyduYXRpb25hbGl0eSddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnTW9yZSBJbmZvJyxcblx0XHRcdFx0XHRrZXk6IFsndXJsJ11cblx0XHRcdFx0fV1cblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2RyaXZlclNlYXNvblN0YW5kaW5nJzpcblx0XHRcdFx0cmV0dXJuIFt7XG5cdFx0XHRcdFx0bmFtZTogJ1Bvc2l0aW9uJyxcblx0XHRcdFx0XHRrZXk6IFsncG9zaXRpb24nXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ1BvaW50cycsXG5cdFx0XHRcdFx0a2V5OiBbJ3BvaW50cyddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnV2lucycsXG5cdFx0XHRcdFx0a2V5OiBbJ3dpbnMnXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ1RlYW0nLFxuXHRcdFx0XHRcdGtleTogWydDb25zdHJ1Y3RvcnMnLCAnbmFtZSddXG5cdFx0XHRcdH1dXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICduZXh0UmFjZSc6XG5cdFx0XHRcdHJldHVybiBbe1xuXHRcdFx0XHRcdG5hbWU6ICdSb3VuZCcsXG5cdFx0XHRcdFx0a2V5OiBbJ3JvdW5kJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdOYW1lJyxcblx0XHRcdFx0XHRrZXk6IFsncmFjZU5hbWUnXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ0RhdGUnLFxuXHRcdFx0XHRcdGtleTogWydkYXRlJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdDaXJjdWl0Jyxcblx0XHRcdFx0XHRrZXk6IFsnQ2lyY3VpdCcsICdjaXJjdWl0TmFtZSddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnQ291bnRyeScsXG5cdFx0XHRcdFx0a2V5OiBbJ0NpcmN1aXQnLCAnTG9jYXRpb24nLCAnY291bnRyeSddXG5cdFx0XHRcdH1dXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICd0ZWFtU2Vhc29uU3RhbmRpbmcnOlxuXHRcdFx0XHRyZXR1cm4gW3tcblx0XHRcdFx0XHRuYW1lOiAnUG9zaXRpb24nLFxuXHRcdFx0XHRcdGtleTogWydwb3NpdGlvbiddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnUG9pbnRzJyxcblx0XHRcdFx0XHRrZXk6IFsncG9pbnRzJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdXaW5zJyxcblx0XHRcdFx0XHRrZXk6IFsnd2lucyddXG5cdFx0XHRcdH1dXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICd0ZWFtV29ybGRUaXRsZXMnOlxuXHRcdFx0XHRyZXR1cm4gW3tcblx0XHRcdFx0XHRuYW1lOiAnU2Vhc29uJyxcblx0XHRcdFx0XHRrZXk6IFsnc2Vhc29uJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdNb3JlIGluZm8nLFxuXHRcdFx0XHRcdGtleTogWyd1cmwnXVxuXHRcdFx0XHR9XVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAndGVhbVNlYXNvbkZpbmlzaGVzJzpcblx0XHRcdFx0cmV0dXJuIFt7XG5cdFx0XHRcdFx0bmFtZTogJ1NlYXNvbicsXG5cdFx0XHRcdFx0a2V5OiBbJ3NlYXNvbiddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnUG9zaXRpb24nLFxuXHRcdFx0XHRcdGtleTogWydDb25zdHJ1Y3RvclN0YW5kaW5ncycsICdwb3NpdGlvbiddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnUG9pbnRzJyxcblx0XHRcdFx0XHRrZXk6IFsnQ29uc3RydWN0b3JTdGFuZGluZ3MnLCAncG9pbnRzJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdXaW5zJyxcblx0XHRcdFx0XHRrZXk6IFsnQ29uc3RydWN0b3JTdGFuZGluZ3MnLCAnd2lucyddXG5cdFx0XHRcdH1dXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICd0ZWFtRHJpdmVycyc6XG5cdFx0XHRcdHJldHVybiBbe1xuXHRcdFx0XHRcdG5hbWU6ICdGaXJzdCBOYW1lJyxcblx0XHRcdFx0XHRrZXk6IFsnZ2l2ZW5OYW1lJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdMYXN0IE5hbWUnLFxuXHRcdFx0XHRcdGtleTogWydmYW1pbHlOYW1lJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdCaXJ0aCBEYXRlJyxcblx0XHRcdFx0XHRrZXk6IFsnZGF0ZU9mQmlydGgnXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ05hdGlvbmFsaXR5Jyxcblx0XHRcdFx0XHRrZXk6IFsnbmF0aW9uYWxpdHknXVxuXHRcdFx0XHR9XVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAndHJhY2tXaW5uZXJzJzpcblx0XHRcdFx0cmV0dXJuIFt7XG5cdFx0XHRcdFx0bmFtZTogJ0RhdGUnLFxuXHRcdFx0XHRcdGtleTogWydkYXRlJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdGaXJzdCBuYW1lJyxcblx0XHRcdFx0XHRrZXk6IFsnUmVzdWx0cycsICdEcml2ZXInLCAnZ2l2ZW5OYW1lJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdMYXN0IG5hbWUnLFxuXHRcdFx0XHRcdGtleTogWydSZXN1bHRzJywgJ0RyaXZlcicsICdmYW1pbHlOYW1lJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdOYXRpb25hbGl0eScsXG5cdFx0XHRcdFx0a2V5OiBbJ1Jlc3VsdHMnLCAnRHJpdmVyJywgJ25hdGlvbmFsaXR5J11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdUZWFtJyxcblx0XHRcdFx0XHRrZXk6IFsnUmVzdWx0cycsICdDb25zdHJ1Y3RvcicsICduYW1lJ11cblx0XHRcdFx0fV1cblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2N1cnJlbnRUcmFja1Jlc3VsdHMnOlxuXHRcdFx0XHRyZXR1cm4gW3tcblx0XHRcdFx0XHRuYW1lOiAnUG9zaXRpb24nLFxuXHRcdFx0XHRcdGtleTogWydwb3NpdGlvbiddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnRmlyc3QgbmFtZScsXG5cdFx0XHRcdFx0a2V5OiBbJ0RyaXZlcicsICdnaXZlbk5hbWUnXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ0xhc3QgbmFtZScsXG5cdFx0XHRcdFx0a2V5OiBbJ0RyaXZlcicsICdmYW1pbHlOYW1lJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdOYXRpb25hbGl0eScsXG5cdFx0XHRcdFx0a2V5OiBbJ0RyaXZlcicsICduYXRpb25hbGl0eSddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnVGVhbScsXG5cdFx0XHRcdFx0a2V5OiBbJ0NvbnN0cnVjdG9yJywgJ25hbWUnXVxuXHRcdFx0XHR9XVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnZHJpdmVyUmFjZVJlc3VsdHNCeVRlYW0nOlxuXHRcdFx0XHRyZXR1cm4gW3tcblx0XHRcdFx0XHRuYW1lOiAnU2Vhc29uJyxcblx0XHRcdFx0XHRrZXk6IFsnc2Vhc29uJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdSYWNlJyxcblx0XHRcdFx0XHRrZXk6IFsncmFjZU5hbWUnXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ1Bvc2l0aW9uJyxcblx0XHRcdFx0XHRrZXk6IFsnUmVzdWx0cycsICdwb3NpdGlvbiddXG5cdFx0XHRcdH1dXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdkcml2ZXJSYWNlUmVzdWx0c0J5VHJhY2snOlxuXHRcdFx0XHRyZXR1cm4gW3tcblx0XHRcdFx0XHRuYW1lOiAnU2Vhc29uJyxcblx0XHRcdFx0XHRrZXk6IFsnc2Vhc29uJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdSYWNlJyxcblx0XHRcdFx0XHRrZXk6IFsncmFjZU5hbWUnXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ1Bvc2l0aW9uJyxcblx0XHRcdFx0XHRrZXk6IFsnUmVzdWx0cycsICdwb3NpdGlvbiddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnVGVhbScsXG5cdFx0XHRcdFx0a2V5OiBbJ1Jlc3VsdHMnLCAnQ29uc3RydWN0b3InLCAnbmFtZSddXG5cdFx0XHRcdH1dXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICd0ZWFtQXR0ZW5kYW5jZUJ5VHJhY2snOlxuXHRcdFx0XHRyZXR1cm4gW3tcblx0XHRcdFx0XHRuYW1lOiAnU2Vhc29uJyxcblx0XHRcdFx0XHRrZXk6IFsnc2Vhc29uJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdSYWNlJyxcblx0XHRcdFx0XHRrZXk6IFsncmFjZU5hbWUnXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ0RhdGUnLFxuXHRcdFx0XHRcdGtleTogWydkYXRlJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdSb3VuZCcsXG5cdFx0XHRcdFx0a2V5OiBbJ3JvdW5kJ11cblx0XHRcdFx0fV1cblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2RyaXZlclJhY2VSZXN1bHRzQnlUZWFtQW5kVHJhY2snOlxuXHRcdFx0XHRyZXR1cm4gW3tcblx0XHRcdFx0XHRuYW1lOiAnU2Vhc29uJyxcblx0XHRcdFx0XHRrZXk6IFsnc2Vhc29uJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdSYWNlJyxcblx0XHRcdFx0XHRrZXk6IFsncmFjZU5hbWUnXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ1Bvc2l0aW9uJyxcblx0XHRcdFx0XHRrZXk6IFsnUmVzdWx0cycsICdwb3NpdGlvbiddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnTW9yZSBpbmZvJyxcblx0XHRcdFx0XHRrZXk6IFsndXJsJ11cblx0XHRcdFx0fV1cblx0XHRcdFx0YnJlYWtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBbXVxuXHRcdFx0XHRicmVha1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBGMVNlcnZpY2VcbiIsImltcG9ydCAkIGZyb20gJ3N1cGVyYWdlbnQnXG5cbmNvbnN0IHRlbXAgPSBbXG5cdCdMZXdpcyBIYW1pbHRvbicsXG5cdCdOaWNvIFJvc2JlcmcnLFxuXHQnU2ViYXN0aWFuIFZldHRlbCcsXG5cdCdLaW1pIFJhaWtrb25lbicsXG5cdCdEYW5pZWwgUmljY2lhcmRvJyxcblx0J01heCBWZXJzdGFwcGVuJyxcblx0J0ZlbGlwcGUgTWFzc2EnLFxuXHQnVmFsdHRlcmkgQm90dGFzJyxcblx0J1NlcmdpbyBQZXJleicsXG5cdCdOaWNvIEh1bGtlbmJlcmcnLFxuXHQnRGFuaWlsIEt2eWF0Jyxcblx0J0NhcmxvcyBTYWlueicsXG5cdCdSb21haW4gR3Jvc2plYW4nLFxuXHQnRmVybmFuZG8gQWxvbnNvJyxcblx0J0plbnNvbiBCdXR0b24nLFxuXHQnS2V2aW4gTWFnbnVzc2VuJyxcblx0J0VzdGViYW4gR3V0aWVycmV6Jyxcblx0J0pvbHlvbiBQYWxtZXInLFxuXHQnTWFyY3VzIEVyaWNzc29uJyxcblx0J1Bhc2NhbCBXZWhybGVpbicsXG5cdCdGZWxpcGUgTmFzcicsXG5cdCdSaW8gSGFyeWFudG8nXG5dXG5cbmNsYXNzIFN1Z2dlc3Rpb25TZXJ2aWNlIHtcblx0c3RhdGljIGdldFN1Z2dlc3Rpb25zKGNiKSB7XG5cdFx0JC5nZXQoJy9haS9zdWdnZXN0aW9ucycpXG5cdFx0LmVuZCgoZXJyLCByZXMpID0+IHtcblx0XHRcdGNiKGVyciA/IFtdIDogcmVzLmJvZHkpXG5cdFx0fSlcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdWdnZXN0aW9uU2VydmljZVxuIiwiaW1wb3J0ICQgZnJvbSAnc3VwZXJhZ2VudCdcblxuY2xhc3MgVGV4dEFuYWx5c2lzU2VydmljZSB7XG5cdHN0YXRpYyBhbmFseXNlKHR4dCwgY2IpIHtcblx0XHQkLnBvc3QoYC9haS9hbmFseXNlYClcblx0XHQuc2VuZCh7dGV4dDogdHh0fSlcblx0XHQuZW5kKChlcnIsIHJlcykgPT4ge1xuXHRcdFx0Y2IoZXJyLCByZXMuYm9keSB8fCBudWxsKVxuXHRcdH0pXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dEFuYWx5c2lzU2VydmljZVxuIl19
