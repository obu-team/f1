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

},{"../lib/colors":25,"../services/Suggestion.Service":28,"./UI/CenterContainer":6,"./UI/FullScreen":7,"./UI/Loader":9,"radium":"radium","react":"react"}],3:[function(require,module,exports){
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

			this.setState({
				src: src + recommend,
				recommend: ''
			});
		}
	}, {
		key: 'onHome',
		value: function onHome() {
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
			return _react2.default.createElement(_SearchGrid2.default, { query: this.state.src, onHome: this.onHome, recommend: this.state.recommend, value: this.state.src, onChange: this.onSrcChange, onEnter: this.search, onTab: this.onTab, entities: this.state.entities });
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

},{"../lib/colors":25,"../services/TextAnalysis.Service":29,"./SearchGrid":5,"./UI/CenterContainer":6,"./UI/FullScreen":7,"./UI/Loader":9,"./UI/SearchInput":21,"async":"async","lodash":"lodash","radium":"radium","react":"react"}],4:[function(require,module,exports){
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
				_react2.default.createElement(_GridContainer2.default, { query: this.props.query, entities: this.props.entities })
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

var _MasonryGrid = require('./MasonryGrid');

var _MasonryGrid2 = _interopRequireDefault(_MasonryGrid);

var _Paper = require('./Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _PaperContent = require('./PaperContent');

var _PaperContent2 = _interopRequireDefault(_PaperContent);

var _Profile = require('./Profile');

var _Profile2 = _interopRequireDefault(_Profile);

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
		padding: 20,
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
			summaries: []
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

			_Analyser2.default.parseEntities(this.props.query, props.entities, function (data) {
				return _this2.setState(data);
			});
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
		key: 'render',
		value: function render() {
			var cnt = this.props.entities.length ? this.renderContent() : this.renderEmpty();
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

},{"../../lib/Analyser":22,"../../lib/colors":25,"./MasonryGrid":10,"./Paper":12,"./PaperContent":14,"./Profile":20,"radium":"radium","react":"react"}],9:[function(require,module,exports){
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

},{"../../lib/colors":25,"radium":"radium","react":"react"}],10:[function(require,module,exports){
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

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MasonryGrid).call(this, props));

		_this.man = null;
		return _this;
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
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.gridLayout();
		}
	}, {
		key: 'gridLayout',
		value: function gridLayout() {
			var _this2 = this;

			var grid = document.querySelector('.masonryGrid');
			(0, _imagesloaded2.default)(grid, function () {
				_this2.man = new _masonryLayout2.default(grid, {
					itemSelector: '.gridItem',
					columnWidth: '.gridSizer',
					percentPosition: true
				});
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

},{"imagesloaded":"imagesloaded","jquery":"jquery","masonry-layout":"masonry-layout","radium":"radium","react":"react"}],11:[function(require,module,exports){
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

},{"../../lib/colors":25,"./SearchInput":21,"radium":"radium","react":"react"}],12:[function(require,module,exports){
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

},{"../../lib/colors":25,"radium":"radium","react":"react"}],13:[function(require,module,exports){
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

},{"../../lib/colors":25,"radium":"radium","react":"react"}],14:[function(require,module,exports){
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

},{"../../lib/colors":25,"radium":"radium","react":"react"}],16:[function(require,module,exports){
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

},{"../../lib/colors":25,"radium":"radium","react":"react"}],19:[function(require,module,exports){
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

},{"../../lib/Utils":24,"../../lib/colors":25,"../../services/Entity.Service":26,"../../services/F1.Service":27,"./CenterContainer":6,"./Loader":9,"./Paper":12,"./PaperBtn":13,"./PaperContent":14,"./PaperHeader":15,"./PaperImg":16,"./PaperLi":17,"./PaperLine":18,"./PaperUl":19,"lodash":"lodash","radium":"radium","react":"react"}],21:[function(require,module,exports){
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
		border: 'none',
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

},{"../../lib/colors":25,"radium":"radium","react":"react"}],22:[function(require,module,exports){
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
					console.log(summaries);
					cb({ dates: dates, profiles: profiles });
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
					if (words.length) {
						if (_Utils2.default.onlyInArray(words, ['calendar'])) return Analyser.getSeasonRaceCalendar(dates, cb);
						if (_Utils2.default.onlyInArray(words, ['driver'])) return Analyser.getSeasonDriverStandings(dates, cb);
						if (_Utils2.default.onlyInArray(words, ['team'])) return Analyser.getSeasonConstructorStandings(dates, cb);
					} else {
						return Analyser.getSeasonSummary(dates, cb);
					}
				}
			}
			cb([]);
		}
	}, {
		key: 'getSeasonSummary',
		value: function getSeasonSummary(dates, cb) {
			var summaries = [];
			_async2.default.forEach(dates, function (date, cb1) {
				summaries.push([{
					name: date + ' Race Calendar',
					type: 'raceCalendar',
					year: date
				}, {
					name: date + ' Driver Standings',
					type: 'driverStandings',
					year: date
				}, {
					name: date + ' Constructor Standings',
					type: 'constructorStandings',
					year: date
				}]);
				cb1();
			}, function (err) {
				return cb(_lodash2.default.flatten(summaries));
			});
		}
	}, {
		key: 'getSeasonRaceCalendar',
		value: function getSeasonRaceCalendar(dates, cb) {
			var summaries = [];
			_async2.default.forEach(dates, function (date, cb1) {
				summaries.push({
					name: date + ' Race Calendar',
					type: 'raceCalendar',
					year: date
				});
				cb1();
			}, function (err) {
				return cb(summaries);
			});
		}
	}, {
		key: 'getSeasonDriverStandings',
		value: function getSeasonDriverStandings(dates, cb) {
			var summaries = [];
			_async2.default.forEach(dates, function (date, cb1) {
				summaries.push({
					name: date + ' Driver Standings',
					type: 'driverStandings',
					year: date
				});
				cb1();
			}, function (err) {
				return cb(summaries);
			});
		}
	}, {
		key: 'getSeasonConstructorStandings',
		value: function getSeasonConstructorStandings(dates, cb) {
			var summaries = [];
			_async2.default.forEach(dates, function (date, cb1) {
				summaries.push({
					name: date + ' Constructor Standings',
					type: 'constructorStandings',
					year: date
				});
				cb1();
			}, function (err) {
				return cb(summaries);
			});
		}
	}]);

	return Analyser;
}();

exports.default = Analyser;

},{"../services/F1.Service":27,"./Keywords":23,"./Utils":24,"async":"async","js-combinatorics":"js-combinatorics","lodash":"lodash"}],23:[function(require,module,exports){
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
	words: ['standing', 'standings']
}, {
	key: 'calendar',
	words: ['calendar', 'calendars', 'schedule', 'scheduler', 'schedules']
}];

},{}],24:[function(require,module,exports){
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
		key: 'onlyInArray',
		value: function onlyInArray(array, shouldBeIn) {
			if (array.length != shouldBeIn.length) return false;
			var ret = true;
			_lodash2.default.forEach(shouldBeIn, function (sbi) {
				if (_lodash2.default.indexOf(array, sbi) == -1) ret = false;
			});
			return ret;
		}
	}]);

	return Utils;
}();

exports.default = Utils;

},{"lodash":"lodash","moment":"moment","react":"react"}],25:[function(require,module,exports){
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

},{}],26:[function(require,module,exports){
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

},{"superagent":"superagent"}],27:[function(require,module,exports){
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
						key: ['Constructors', 'name']
					}, {
						name: 'Points',
						key: ['points']
					}, {
						name: 'Wins',
						key: ['wins']
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

},{"async":"async","lodash":"lodash","superagent":"superagent"}],28:[function(require,module,exports){
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

},{"superagent":"superagent"}],29:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJyZWFjdC9hcHAuanMiLCJyZWFjdC9jb21wb25lbnRzL0FwcC5qcyIsInJlYWN0L2NvbXBvbmVudHMvRGFzaGJvYXJkLmpzIiwicmVhY3QvY29tcG9uZW50cy9Ob3RGb3VuZC5qcyIsInJlYWN0L2NvbXBvbmVudHMvU2VhcmNoR3JpZC5qcyIsInJlYWN0L2NvbXBvbmVudHMvVUkvQ2VudGVyQ29udGFpbmVyLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9GdWxsU2NyZWVuLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9HcmlkQ29udGFpbmVyLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9Mb2FkZXIuanMiLCJyZWFjdC9jb21wb25lbnRzL1VJL01hc29ucnlHcmlkLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9OYXYuanMiLCJyZWFjdC9jb21wb25lbnRzL1VJL1BhcGVyLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9QYXBlckJ0bi5qcyIsInJlYWN0L2NvbXBvbmVudHMvVUkvUGFwZXJDb250ZW50LmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9QYXBlckhlYWRlci5qcyIsInJlYWN0L2NvbXBvbmVudHMvVUkvUGFwZXJJbWcuanMiLCJyZWFjdC9jb21wb25lbnRzL1VJL1BhcGVyTGkuanMiLCJyZWFjdC9jb21wb25lbnRzL1VJL1BhcGVyTGluZS5qcyIsInJlYWN0L2NvbXBvbmVudHMvVUkvUGFwZXJVbC5qcyIsInJlYWN0L2NvbXBvbmVudHMvVUkvUHJvZmlsZS5qcyIsInJlYWN0L2NvbXBvbmVudHMvVUkvU2VhcmNoSW5wdXQuanMiLCJyZWFjdC9saWIvQW5hbHlzZXIuanMiLCJyZWFjdC9saWIvS2V5d29yZHMuanMiLCJyZWFjdC9saWIvVXRpbHMuanMiLCJyZWFjdC9saWIvY29sb3JzLmpzIiwicmVhY3Qvc2VydmljZXMvRW50aXR5LlNlcnZpY2UuanMiLCJyZWFjdC9zZXJ2aWNlcy9GMS5TZXJ2aWNlLmpzIiwicmVhY3Qvc2VydmljZXMvU3VnZ2VzdGlvbi5TZXJ2aWNlLmpzIiwicmVhY3Qvc2VydmljZXMvVGV4dEFuYWx5c2lzLlNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFJQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUpBOztBQU1BLHNCQUNFO0FBQUE7RUFBQSxFQUFRLG9DQUFSO0VBQ0M7QUFBQTtJQUFBLEVBQU8sTUFBSyxHQUFaLEVBQWdCLHdCQUFoQjtJQUNDLHlEQUFZLDhCQUFaLEdBREQ7SUFFQyxvREFBTyxNQUFLLEdBQVosRUFBZ0IsNkJBQWhCO0FBRkQ7QUFERCxDQURGLEVBT0csU0FBUyxjQUFULENBQXdCLEtBQXhCLENBUEg7Ozs7Ozs7Ozs7O0FDWEE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU0sU0FBUztBQUNkLFNBQVE7QUFDUCxjQUFZLGlCQUFPO0FBRFosRUFETTtBQUlkLEtBQUk7QUFDSCxjQUFZLCtDQURUO0FBRUgsa0JBQWdCO0FBRmI7QUFKVSxDQUFmOztJQVVNLEc7OztBQUNMLGNBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLHFGQUNaLEtBRFk7O0FBRWxCLFFBQUssS0FBTCxHQUFhO0FBQ1osU0FBTSxLQURNO0FBRVosZ0JBQWE7QUFGRCxHQUFiO0FBRmtCO0FBTWxCOzs7O3VDQUNvQjtBQUFBOztBQUNwQix3QkFBa0IsY0FBbEIsQ0FBaUMsZ0JBQVE7QUFDeEMsV0FBSyxRQUFMLENBQWM7QUFDYixXQUFNLElBRE87QUFFYixrQkFBYTtBQUZBLEtBQWQ7QUFJQSxJQUxEO0FBTUE7OztpQ0FDYztBQUNkLFVBQU87QUFBQTtJQUFBLEVBQVksT0FBTyxDQUFDLE9BQU8sRUFBUixDQUFuQjtJQUFnQztBQUFBO0tBQUE7S0FBaUIsa0RBQVEsT0FBTyxDQUFDLE9BQU8sTUFBUixDQUFmO0FB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QlksRUFrQlosZUFsQlksRUFtQlosaUJBbkJZLEVBb0JaLGlCQXBCWSxFQXFCWixhQXJCWSxFQXNCWixjQXRCWSxDQUFiOztJQXlCTSxpQjs7Ozs7OztpQ0FDaUIsRSxFQUFJO0FBQ3pCLHdCQUFFLEdBQUYsQ0FBTSxpQkFBTixFQUNDLEdBREQsQ0FDSyxVQUFDLEdBQUQsRUFBTSxHQUFOLEVBQWM7QUFDbEIsT0FBRyxNQUFNLEVBQU4sR0FBVyxJQUFJLElBQWxCO0FBQ0EsSUFIRDtBQUlBOzs7Ozs7a0JBR2EsaUI7Ozs7Ozs7Ozs7O0FDcENmOzs7Ozs7OztJQUVNLG1COzs7Ozs7OzBCQUNVLEcsRUFBSyxFLEVBQUk7QUFDdkIsd0JBQUUsSUFBRixnQkFDQyxJQURELENBQ00sRUFBQyxNQUFNLEdBQVAsRUFETixFQUVDLEdBRkQsQ0FFSyxVQUFDLEdBQUQsRUFBTSxHQUFOLEVBQWM7QUFDbEIsT0FBRyxHQUFILEVBQVEsSUFBSSxJQUFKLElBQVksSUFBcEI7QUFDQSxJQUpEO0FBS0E7Ozs7OztrQkFHYSxtQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHtSb3V0ZXIsIFJvdXRlLCBJbmRleFJvdXRlLCBicm93c2VySGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IGluamVjdFRhcEV2ZW50UGx1Z2luIGZyb20gJ3JlYWN0LXRhcC1ldmVudC1wbHVnaW4nXG5cbmluamVjdFRhcEV2ZW50UGx1Z2luKClcblxuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwJ1xuaW1wb3J0IERhc2hib2FyZCBmcm9tICcuL2NvbXBvbmVudHMvRGFzaGJvYXJkJ1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4vY29tcG9uZW50cy9Ob3RGb3VuZCdcblxucmVuZGVyKChcbiAgPFJvdXRlciBoaXN0b3J5PXticm93c2VySGlzdG9yeX0+XG4gIFx0PFJvdXRlIHBhdGg9Jy8nIGNvbXBvbmVudD17QXBwfT5cbiAgXHRcdDxJbmRleFJvdXRlIGNvbXBvbmVudD17RGFzaGJvYXJkfSAvPlxuICBcdFx0PFJvdXRlIHBhdGg9JyonIGNvbXBvbmVudD17Tm90Rm91bmR9IC8+XG4gIFx0PC9Sb3V0ZT5cbiAgPC9Sb3V0ZXI+XG4pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuaW1wb3J0IFN1Z2dlc3Rpb25TZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL1N1Z2dlc3Rpb24uU2VydmljZSdcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vbGliL2NvbG9ycydcblxuaW1wb3J0IExvYWRlciBmcm9tICcuL1VJL0xvYWRlcidcbmltcG9ydCBGdWxsU2NyZWVuIGZyb20gJy4vVUkvRnVsbFNjcmVlbidcbmltcG9ydCBDZW50ZXJDb250YWluZXIgZnJvbSAnLi9VSS9DZW50ZXJDb250YWluZXInXG5cbmNvbnN0IHN0eWxlcyA9IHtcblx0bG9hZGVyOiB7XG5cdFx0YmFja2dyb3VuZDogY29sb3JzLnJlZDUwMFxuXHR9LFxuXHRiZzoge1xuXHRcdGJhY2tncm91bmQ6ICd1cmwoXFwnL2ltZy9iZzIuanBnXFwnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcicsXG5cdFx0YmFja2dyb3VuZFNpemU6ICdjb3Zlcidcblx0fVxufVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRpbml0OiBmYWxzZSxcblx0XHRcdHN1Z2dlc3Rpb25zOiBbXVxuXHRcdH1cblx0fVxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0U3VnZ2VzdGlvblNlcnZpY2UuZ2V0U3VnZ2VzdGlvbnMoZGF0YSA9PiB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0aW5pdDogdHJ1ZSxcblx0XHRcdFx0c3VnZ2VzdGlvbnM6IGRhdGFcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXHRyZW5kZXJMb2FkZXIoKSB7XG5cdFx0cmV0dXJuIDxGdWxsU2NyZWVuIHN0eWxlPXtbc3R5bGVzLmJnXX0+PENlbnRlckNvbnRhaW5lcj48TG9hZGVyIHN0eWxlPXtbc3R5bGVzLmxvYWRlcl19IC8+PC9DZW50ZXJDb250YWluZXI+PC9GdWxsU2NyZWVuPlxuXHR9XG5cdHJlbmRlckNvbnRlbnQoKSB7XG5cdFx0dmFyIGNoaWxkcmVuV2l0aFByb3BzID0gUmVhY3QuQ2hpbGRyZW4ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIGNoaWxkID0+IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICBcdHN1Z2dlc3Rpb25zOiB0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zXG4gICAgICAgIH0pKVxuXHRcdHJldHVybiA8ZGl2PntjaGlsZHJlbldpdGhQcm9wc308L2Rpdj5cblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0aWYoIXRoaXMuc3RhdGUuaW5pdCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmVuZGVyTG9hZGVyKClcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMucmVuZGVyQ29udGVudCgpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKEFwcClcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IGFzeW5jIGZyb20gJ2FzeW5jJ1xuXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2xpYi9jb2xvcnMnXG5pbXBvcnQgVGV4dEFuYWx5c2lzU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9UZXh0QW5hbHlzaXMuU2VydmljZSdcblxuaW1wb3J0IExvYWRlciBmcm9tICcuL1VJL0xvYWRlcidcbmltcG9ydCBGdWxsU2NyZWVuIGZyb20gJy4vVUkvRnVsbFNjcmVlbidcbmltcG9ydCBDZW50ZXJDb250YWluZXIgZnJvbSAnLi9VSS9DZW50ZXJDb250YWluZXInXG5pbXBvcnQgU2VhcmNoSW5wdXQgZnJvbSAnLi9VSS9TZWFyY2hJbnB1dCdcbmltcG9ydCBTZWFyY2hHcmlkIGZyb20gJy4vU2VhcmNoR3JpZCdcblxuY29uc3Qgc3R5bGVzID0ge1xuXHRsb2dvOiB7XG5cdFx0aGVpZ2h0OiAxMDBcblx0fSxcblx0aW5wdXQ6IHtcblx0XHR3aWR0aDogNTUwLFxuXHRcdGhlaWdodDogNDAsXG5cdFx0ZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG5cdFx0bWFyZ2luVG9wOiAzNFxuXHR9LFxuXHRlYXNlOiB7XG5cdFx0dHJhbnNpdGlvbjogJ2FsbCAwLjFzIGVhc2UtaW4tb3V0J1xuXHR9LFxuXHRibHVyOiB7XG5cdFx0ZmlsdGVyOiAnYmx1cigxMHB4KSdcblx0fSxcblx0bG9hZGVyOiB7XG5cdFx0Y29udGFpbmVyOiB7XG5cdFx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcblx0XHRcdHRvcDogMCxcblx0XHRcdGxlZnQ6IDAsXG5cdFx0XHR6SW5kZXg6IDEwMDAwXG5cdFx0fSxcblx0XHRsb2FkZXI6IHtcblx0XHRcdGJhY2tncm91bmQ6IGNvbG9ycy5yZWQ1MDBcblx0XHR9XG5cdH0sXG5cdGJnOiB7XG5cdFx0YmFja2dyb3VuZDogJ3VybChcXCcvaW1nL2JnMi5qcGdcXCcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyJyxcblx0XHRiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ1xuXHR9XG59XG5cbmNsYXNzIERhc2hib2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNlYXJjaDogZmFsc2UsXG5cdFx0XHRtb2RhbDogZmFsc2UsXG5cdFx0XHRzcmM6ICcnLFxuXHRcdFx0cmVjb21tZW5kOiAnJyxcblx0XHRcdGVudGl0aWVzOiBbXVxuXHRcdH1cblx0XHR0aGlzLm9uU3JjQ2hhbmdlID0gdGhpcy5vblNyY0NoYW5nZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5zZWFyY2ggPSB0aGlzLnNlYXJjaC5iaW5kKHRoaXMpXG5cdFx0dGhpcy5vblRhYiA9IHRoaXMub25UYWIuYmluZCh0aGlzKVxuXHRcdHRoaXMub25Ib21lID0gdGhpcy5vbkhvbWUuYmluZCh0aGlzKVxuXHR9XG5cdG9uU3JjQ2hhbmdlKHYpIHtcblx0XHRsZXQgcmVjID0gJydcblx0XHRsZXQgd29yZHMgPSB2LnNwbGl0KCcgJylcblx0XHRsZXQgd29yZCA9IF8ubGFzdCh3b3Jkcylcblx0XHRpZih3b3JkICYmIHdvcmQubGVuZ3RoPj0yKSB7XG5cdFx0XHRsZXQgciA9IF8uZmluZCh0aGlzLnByb3BzLnN1Z2dlc3Rpb25zLCBzID0+IHtcblx0XHRcdFx0cmV0dXJuIHMudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKHdvcmQudG9Mb3dlckNhc2UoKSlcblx0XHRcdH0pXG5cdFx0XHRyID0gciB8fCAnJ1xuXHRcdFx0aWYocikgcmVjID0gci5zdWJzdHJpbmcod29yZC5sZW5ndGgpXG5cdFx0fVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c3JjOiB2LFxuXHRcdFx0cmVjb21tZW5kOiByZWNcblx0XHR9KVxuXHR9XG5cdG9uVGFiKCkge1xuXHRcdGxldCB7c3JjLCByZWNvbW1lbmR9ID0gdGhpcy5zdGF0ZVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c3JjOiBzcmMgKyByZWNvbW1lbmQsXG5cdFx0XHRyZWNvbW1lbmQ6ICcnXG5cdFx0fSlcblx0fVxuXHRvbkhvbWUoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzZWFyY2g6IGZhbHNlLFxuXHRcdFx0bW9kYWw6IGZhbHNlLFxuXHRcdFx0c3JjOiAnJyxcblx0XHRcdHJlY29tbWVuZDogJycsXG5cdFx0XHRlbnRpdGllczogW11cblx0XHR9KVxuXHR9XG5cdHNlYXJjaCgpIHtcblx0XHRpZighdGhpcy5zdGF0ZS5zcmMpIHJldHVybiBmYWxzZVxuXHRcdGxldCBzcmMgPSB0aGlzLnN0YXRlLnNyYyArIHRoaXMuc3RhdGUucmVjb21tZW5kXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzZWFyY2g6IHRydWUsXG5cdFx0XHRzcmM6IHNyYyxcblx0XHRcdHJlY29tbWVuZDogJydcblx0XHR9KVxuXHRcdFRleHRBbmFseXNpc1NlcnZpY2UuYW5hbHlzZShzcmMsIChlcnIsIHJlcykgPT4ge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHNlYXJjaDogZmFsc2UsXG5cdFx0XHRcdGVudGl0aWVzOiByZXMsXG5cdFx0XHRcdG1vZGFsOiB0cnVlXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblx0cmVuZGVyRnVsbFNyYygpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEZ1bGxTY3JlZW4gc3R5bGU9e1tzdHlsZXMuYmddfT5cblx0XHRcdFx0PENlbnRlckNvbnRhaW5lcj5cblx0XHRcdFx0XHQ8aW1nIHNyYz0nL2ltZy9mMV9sb2dvX2JyaWdodC5wbmcnIHN0eWxlPXtzdHlsZXMubG9nb30gLz48YnIvPlxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3N0eWxlcy5pbnB1dH0+PFNlYXJjaElucHV0IHJlY29tbWVuZD17dGhpcy5zdGF0ZS5yZWNvbW1lbmR9IHZhbHVlPXt0aGlzLnN0YXRlLnNyY30gb25DaGFuZ2U9e3RoaXMub25TcmNDaGFuZ2V9IG9uRW50ZXI9e3RoaXMuc2VhcmNofSBvblRhYj17dGhpcy5vblRhYn0gLz48L2Rpdj48YnIvPlxuXHRcdFx0XHQ8L0NlbnRlckNvbnRhaW5lcj5cblx0XHRcdDwvRnVsbFNjcmVlbj5cblx0XHQpXG5cdH1cblx0cmVuZGVyR3JpZCgpIHtcblx0XHRyZXR1cm4gPFNlYXJjaEdyaWQgcXVlcnk9e3RoaXMuc3RhdGUuc3JjfSBvbkhvbWU9e3RoaXMub25Ib21lfSByZWNvbW1lbmQ9e3RoaXMuc3RhdGUucmVjb21tZW5kfSB2YWx1ZT17dGhpcy5zdGF0ZS5zcmN9IG9uQ2hhbmdlPXt0aGlzLm9uU3JjQ2hhbmdlfSBvbkVudGVyPXt0aGlzLnNlYXJjaH0gb25UYWI9e3RoaXMub25UYWJ9IGVudGl0aWVzPXt0aGlzLnN0YXRlLmVudGl0aWVzfSAvPlxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7c2VhcmNoLCBtb2RhbH0gPSB0aGlzLnN0YXRlXG5cdFx0Y29uc3QgbG9hZGVyID0gdGhpcy5zdGF0ZS5zZWFyY2ggPyA8RnVsbFNjcmVlbiBzdHlsZT17W3N0eWxlcy5sb2FkZXIuY29udGFpbmVyXX0+PENlbnRlckNvbnRhaW5lcj48TG9hZGVyIHN0eWxlPXtbc3R5bGVzLmxvYWRlci5sb2FkZXJdfSAvPjwvQ2VudGVyQ29udGFpbmVyPjwvRnVsbFNjcmVlbj4gOiBudWxsXG5cdFx0bGV0IGNudCA9IHRoaXMuc3RhdGUubW9kYWwgPyB0aGlzLnJlbmRlckdyaWQoKSA6IHRoaXMucmVuZGVyRnVsbFNyYygpXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdHtsb2FkZXJ9XG5cdFx0XHRcdDxkaXYgc3R5bGU9e1tzdHlsZXMuZWFzZSwgc2VhcmNoID8gc3R5bGVzLmJsdXIgOiBudWxsXX0+XG5cdFx0XHRcdFx0e2NudH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKERhc2hib2FyZClcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5pbXBvcnQgRnVsbFNjcmVlbiBmcm9tICcuL1VJL0Z1bGxTY3JlZW4nXG5pbXBvcnQgQ2VudGVyQ29udGFpbmVyIGZyb20gJy4vVUkvQ2VudGVyQ29udGFpbmVyJ1xuXG5jb25zdCBOb3RGb3VuZCA9IChwcm9wcykgPT4gPEZ1bGxTY3JlZW4+PENlbnRlckNvbnRhaW5lcj5Ob3QgZm91bmQ8L0NlbnRlckNvbnRhaW5lcj48L0Z1bGxTY3JlZW4+XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShOb3RGb3VuZClcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5pbXBvcnQgTmF2IGZyb20gJy4vVUkvTmF2J1xuaW1wb3J0IEdyaWRDb250YWluZXIgZnJvbSAnLi9VSS9HcmlkQ29udGFpbmVyJ1xuXG5jbGFzcyBTZWFyY2hHcmlkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxOYXYgb25Ib21lPXt0aGlzLnByb3BzLm9uSG9tZX0gcmVjb21tZW5kPXt0aGlzLnByb3BzLnJlY29tbWVuZH0gdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfSBvbkVudGVyPXt0aGlzLnByb3BzLm9uRW50ZXJ9IG9uVGFiPXt0aGlzLnByb3BzLm9uVGFifSAvPlxuXHRcdFx0XHQ8R3JpZENvbnRhaW5lciBxdWVyeT17dGhpcy5wcm9wcy5xdWVyeX0gZW50aXRpZXM9e3RoaXMucHJvcHMuZW50aXRpZXN9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoR3JpZFxuIiwiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5jb25zdCBzdHlsZSA9IHtcblx0Y2VudGVyQmxvY2tTdHlsZToge1xuXHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0aGVpZ2h0OiAnMTAwJScsXG5cdFx0bWF4SGVpZ2h0OiAnMTAwJScsXG5cdFx0b3ZlcmZsb3c6ICdhdXRvJyxcblx0XHR0ZXh0QWxpZ246ICdjZW50ZXInXG5cdH0sXG5cdGNlbnRlckNvbnRlbnRTdHlsZToge1xuXHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuXHRcdHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuXHRcdGJveFNpemluZzogJ2JvcmRlci1ib3gnXG5cdH1cbn1cblxuY29uc3QgQ2VudGVyQ29udGFpbmVyID0gKHByb3BzKSA9PiA8ZGl2IHN0eWxlPXtbc3R5bGUuY2VudGVyQmxvY2tTdHlsZSwgLi4ucHJvcHMuc3R5bGVdfSBpZD0nY2VudGVyQ29udGVudCc+PGRpdiBzdHlsZT17W3N0eWxlLmNlbnRlckNvbnRlbnRTdHlsZSwgLi4ucHJvcHMuYm94U3R5bGVdfT57cHJvcHMuY2hpbGRyZW59PC9kaXY+PC9kaXY+XG5cbkNlbnRlckNvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIHN0eWxlOiB7fSxcbiAgYm94U3R5bGU6IHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShDZW50ZXJDb250YWluZXIpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuY29uc3Qgc3R5bGUgPSB7XG5cdHdpZHRoOiAnMTAwJScsXG5cdGhlaWdodDogJzEwMHZoJ1xufVxuXG5jb25zdCBGdWxsU2NyZWVuID0gKHByb3BzKSA9PiA8ZGl2IHN0eWxlPXtbc3R5bGUsIC4uLnByb3BzLnN0eWxlXX0+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuXG5GdWxsU2NyZWVuLmRlZmF1bHRQcm9wcyA9IHtcbiAgc3R5bGU6IHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShGdWxsU2NyZWVuKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vLi4vbGliL2NvbG9ycydcbmltcG9ydCBBbmFseXNlciBmcm9tICcuLi8uLi9saWIvQW5hbHlzZXInXG5cbmltcG9ydCBNYXNvbnJ5R3JpZCBmcm9tICcuL01hc29ucnlHcmlkJ1xuaW1wb3J0IFBhcGVyIGZyb20gJy4vUGFwZXInXG5pbXBvcnQgUGFwZXJDb250ZW50IGZyb20gJy4vUGFwZXJDb250ZW50J1xuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi9Qcm9maWxlJ1xuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGNvbnRhaW5lcjoge1xuXHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0bWluSGVpZ2h0OiAnMTAwdmgnLFxuXHRcdGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuXHRcdHBhZGRpbmc6ICc4MHB4IDIwcHggMjBweCAyMHB4Jyxcblx0XHRiYWNrZ3JvdW5kOiBjb2xvcnMuZ3JleTIwMFxuXHR9LFxuXHRtYW5zb3J5OiB7XG5cdFx0cGFkZGluZzogMjAsXG5cdFx0Ym94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG5cdFx0d2lkdGg6ICcyNSUnXG5cdH0sXG5cdHN1bW1hcnk6IHtcblx0XHR3aWR0aDogJzUwJSdcblx0fVxufVxuXG5jbGFzcyBHcmlkQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0cHJvZmlsZXM6IFtdLFxuXHRcdFx0ZGF0ZXM6IFtdLFxuXHRcdFx0c3VtbWFyaWVzOiBbXVxuXHRcdH1cblx0fVxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0dGhpcy5wYXJzZUVudGl0aWVzKHRoaXMucHJvcHMpXG5cdH1cblx0Y29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcblx0XHR0aGlzLnBhcnNlRW50aXRpZXMobmV4dFByb3BzKVxuXHR9XG5cdHBhcnNlRW50aXRpZXMocHJvcHMpIHtcblx0XHRBbmFseXNlci5wYXJzZUVudGl0aWVzKHRoaXMucHJvcHMucXVlcnksIHByb3BzLmVudGl0aWVzLCBkYXRhID0+IHRoaXMuc2V0U3RhdGUoZGF0YSkpXG5cdH1cblx0cmVuZGVyRW1wdHkoKSB7XG5cdFx0cmV0dXJuIDxNYXNvbnJ5R3JpZD48ZGl2IHN0eWxlPXtzdHlsZXMubWFuc29yeX0gY2xhc3NOYW1lPSdncmlkSXRlbSc+PFBhcGVyPjxQYXBlckNvbnRlbnQ+PHNwYW4gY2xhc3NOYW1lPSdsbnIgbG5yLWNyb3NzJyAvPiBObyByZXN1bHRzIGZvdW5kPC9QYXBlckNvbnRlbnQ+PC9QYXBlcj48L2Rpdj48L01hc29ucnlHcmlkPlxuXHR9XG5cdHJlbmRlckNvbnRlbnQoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxNYXNvbnJ5R3JpZD5cblx0XHRcdFx0e3RoaXMuc3RhdGUucHJvZmlsZXMubWFwKHAgPT4gPGRpdiBjbGFzc05hbWU9J2dyaWRJdGVtJyBrZXk9e3AuX2lkfSBzdHlsZT17c3R5bGVzLm1hbnNvcnl9PjxQcm9maWxlIGVudGl0eT17cH0gLz48L2Rpdj4pfVxuXHRcdFx0PC9NYXNvbnJ5R3JpZD5cblx0XHQpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGxldCBjbnQgPSB0aGlzLnByb3BzLmVudGl0aWVzLmxlbmd0aCA/IHRoaXMucmVuZGVyQ29udGVudCgpIDogdGhpcy5yZW5kZXJFbXB0eSgpXG5cdFx0cmV0dXJuIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PntjbnR9PC9kaXY+XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKEdyaWRDb250YWluZXIpXG4iLCJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXN9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vLi4vbGliL2NvbG9ycydcblxuY29uc3Qgc3R5bGUgPSB7XG5cdHdpZHRoOiAnNjBweCcsXG4gIGhlaWdodDogJzYwcHgnLFxuICBiYWNrZ3JvdW5kOiBjb2xvcnMucmVkNTAwLFxuICBhbmltYXRpb246ICdzay1yb3RhdGVwbGFuZSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0J1xufVxuXG5jb25zdCBMb2FkZXIgPSAocHJvcHMpID0+IDxkaXYgc3R5bGU9e1tzdHlsZSwgcHJvcHMuc3R5bGVdfSAvPlxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oTG9hZGVyKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5pbXBvcnQgTWFzb25yeSBmcm9tICdtYXNvbnJ5LWxheW91dCdcbmltcG9ydCBpbWFnZXNMb2FkZWQgZnJvbSAnaW1hZ2VzbG9hZGVkJ1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGdyaWQ6IHtcblx0XHR3aWR0aDogJzEwMCUnXG5cdH0sXG5cdHNpemVyOiB7XG5cdFx0d2lkdGg6ICcyNSUnXG5cdH1cbn1cblxuY2xhc3MgTWFzb25yeUdyaWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMubWFuID0gbnVsbFxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMuZ3JpZExheW91dCgpXG5cdH1cblx0Y29tcG9uZW50RGlkVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG5cdFx0dGhpcy5ncmlkTGF5b3V0KClcblx0fVxuXHRjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuXHRcdHRoaXMuZ3JpZExheW91dCgpXG5cdH1cblx0Z3JpZExheW91dCgpIHtcblx0XHRsZXQgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXNvbnJ5R3JpZCcpXG5cdFx0aW1hZ2VzTG9hZGVkKGdyaWQsICgpID0+IHtcblx0XHRcdHRoaXMubWFuID0gbmV3IE1hc29ucnkoZ3JpZCwge1xuXHRcdCAgXHRpdGVtU2VsZWN0b3I6ICcuZ3JpZEl0ZW0nLFxuXHRcdCAgXHRjb2x1bW5XaWR0aDogJy5ncmlkU2l6ZXInLFxuXHRcdFx0ICBwZXJjZW50UG9zaXRpb246IHRydWVcblx0XHQgIH0pXG5cdFx0fSlcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtYXNvbnJ5R3JpZCcgc3R5bGU9e3N0eWxlcy5ncmlkfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2dyaWRTaXplcicgc3R5bGU9e3N0eWxlcy5zaXplcn0gLz5cblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKE1hc29ucnlHcmlkKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vLi4vbGliL2NvbG9ycydcblxuaW1wb3J0IFNlYXJjaElucHV0IGZyb20gJy4vU2VhcmNoSW5wdXQnXG5cbmNvbnN0IHN0eWxlcyA9IHtcblx0Y29udGFpbmVyOiB7XG5cdFx0YmFja2dyb3VuZDogJyMxYjE3MTgnLFxuXHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0aGVpZ2h0OiA3MCxcblx0XHRib3hTaXppbmc6ICdib3JkZXItYm94Jyxcblx0XHRwYWRkaW5nOiAnMTVweCA0MHB4Jyxcblx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcblx0XHR0b3A6IDAsXG5cdFx0bGVmdDogMCxcblx0XHR6SW5kZXg6IDEwMFxuXHR9LFxuXHRsb2dvOiB7XG5cdFx0aGVpZ2h0OiA0MCxcblx0XHRjdXJzb3I6ICdwb2ludGVyJ1xuXHR9LFxuXHRpbnB1dDoge1xuXHRcdHdpZHRoOiA0MDAsXG5cdFx0aGVpZ2h0OiA0MCxcblx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcblx0XHRwYWRkaW5nOiAwLFxuXHRcdGZsb2F0OiAncmlnaHQnXG5cdH0sXG5cdGlucDoge1xuXHRcdGJvcmRlcjogYDFweCBzb2xpZCAke2NvbG9ycy53aGl0ZX1gLFxuXHRcdCc6Zm9jdXMnOiB7XG5cdFx0XHRib3JkZXI6IGAxcHggc29saWQgJHtjb2xvcnMud2hpdGV9YFxuXHRcdH1cblx0fVxufVxuXG5jbGFzcyBOYXYgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PG5hdiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG5cdFx0XHRcdDxpbWcgc3JjPScvaW1nL2YxX2xvZ29fZGFyay5wbmcnIG9uQ2xpY2s9e3RoaXMucHJvcHMub25Ib21lfSBzdHlsZT17c3R5bGVzLmxvZ299IC8+XG5cdFx0XHRcdDxkaXYgc3R5bGU9e3N0eWxlcy5pbnB1dH0+PFNlYXJjaElucHV0IGlucFN0eWxlPXtbc3R5bGVzLmlucF19IHJlY29tbWVuZD17dGhpcy5wcm9wcy5yZWNvbW1lbmR9IHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoYW5nZX0gb25FbnRlcj17dGhpcy5wcm9wcy5vbkVudGVyfSBvblRhYj17dGhpcy5wcm9wcy5vblRhYn0gLz48L2Rpdj5cblx0XHRcdDwvbmF2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oTmF2KVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vLi4vbGliL2NvbG9ycydcblxuY29uc3Qgc3R5bGUgPSB7XG5cdHdpZHRoOiAnMTAwJScsXG5cdGJhY2tncm91bmQ6IGNvbG9ycy53aGl0ZSxcblx0Ym94U2hhZG93OiAnMCAtMXB4IDAgI2U1ZTVlNSwgMCAwIDJweCByZ2JhKDAsIDAsIDAsIC4xMiksIDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIC4yNCknXG59XG5cbmNvbnN0IFBhcGVyID0gKHByb3BzKSA9PiA8ZGl2IHN0eWxlPXtbc3R5bGUsIHByb3BzLnN0eWxlXX0+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuXG5QYXBlci5kZWZhdWx0UHJvcHMgPSB7XG5cdHN0eWxlOiB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oUGFwZXIpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi9saWIvY29sb3JzJ1xuXG5jb25zdCBzdHlsZSA9IHtcblx0ZGlzcGxheTogJ2Jsb2NrJyxcblx0Ym9yZGVyOiAnbm9uZScsXG5cdG1hcmdpbjogMCxcblx0cGFkZGluZzogJzEwcHgnLFxuXHRjb2xvcjogY29sb3JzLndoaXRlLFxuXHRiYWNrZ3JvdW5kOiBjb2xvcnMucmVkNTAwLFxuXHRmb250U2l6ZTogJy44cmVtJyxcblx0Zm9udFdlaWdodDogNDAwLFxuXHRmb250RmFtaWx5OiAnaW5oZXJpdCcsXG5cdGN1cnNvcjogJ3BvaW50ZXInLFxuXHR0cmFuc2l0aW9uOiAnYWxsIDAuMXMgZWFzZS1pbi1vdXQnLFxuXHQnOmhvdmVyJzoge1xuXHRcdGJhY2tncm91bmQ6IGNvbG9ycy5yZWQ3MDBcblx0fVxufVxuXG5jb25zdCBQYXBlckJ0biA9IChwcm9wcykgPT4gPGEgaHJlZj17cHJvcHMuaHJlZn0gdGFyZ2V0PSdfYmxhbmsnPjxidXR0b24gc3R5bGU9e3N0eWxlfT57cHJvcHMuY2hpbGRyZW59PC9idXR0b24+PC9hPlxuXG5QYXBlckJ0bi5kZWZhdWx0UHJvcHMgPSB7XG5cdHN0eWxlOiB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oUGFwZXJCdG4pXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuY29uc3Qgc3R5bGUgPSB7XG5cdHdpZHRoOiAnMTAwJScsXG5cdGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuXHRwYWRkaW5nOiAyMFxufVxuXG5jb25zdCBQYXBlckNvbnRlbnQgPSAocHJvcHMpID0+IDxkaXYgc3R5bGU9e3N0eWxlfT57cHJvcHMuY2hpbGRyZW59PC9kaXY+XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShQYXBlckNvbnRlbnQpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi9saWIvY29sb3JzJ1xuXG5jb25zdCBzdHlsZSA9IHtcblx0d2lkdGg6ICcxMDAlJyxcblx0ZGlzcGxheTogJ2Jsb2NrJyxcblx0Zm9udFNpemU6ICcxcmVtJyxcblx0Zm9udFdlaWdodDogMzAwLFxuXHRtYXJnaW46IDAsXG5cdHBhZGRpbmc6ICcxMHB4IDIwcHgnLFxuXHRib3hTaXppbmc6ICdib3JkZXItYm94Jyxcblx0YmFja2dyb3VuZDogJyMxYjE3MTgnLFxuXHRjb2xvcjogY29sb3JzLndoaXRlXG59XG5cbmNvbnN0IFBhcGVySGVhZGVyID0gKHByb3BzKSA9PiA8aDEgc3R5bGU9e3N0eWxlfT57cHJvcHMuY2hpbGRyZW59PC9oMT5cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKFBhcGVySGVhZGVyKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmNvbnN0IHN0eWxlID0ge1xuXHR3aWR0aDogJzEwMCUnLFxuXHRkaXNwbGF5OiAnYmxvY2snXG59XG5cbmNvbnN0IFBhcGVySW1nID0gKHByb3BzKSA9PiA8aW1nIHNyYz17cHJvcHMuc3JjfSBzdHlsZT17c3R5bGV9IC8+XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShQYXBlckltZylcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGNvbnRhaW5lcjoge1xuXHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0Zm9udFdlaWdodDogMzAwLFxuXHRcdG1hcmdpbkJvdHRvbTogMTAsXG5cdFx0ZmxvYXQ6ICdsZWZ0J1xuXHR9LFxuXHRoMjoge1xuXHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0bWFyZ2luOiAwLFxuXHRcdHBhZGRpbmc6IDAsXG5cdFx0Zm9udFNpemU6ICcuOHJlbScsXG5cdFx0Zm9udFdlaWdodDogNDAwXG5cdH0sXG5cdHR4dDoge1xuXHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0Zm9udFNpemU6ICcuOHJlbScsXG5cdFx0d29yZFdyYXA6ICdicmVhay13b3JkJ1xuXHR9XG59XG5cbmNvbnN0IFBhcGVyTGkgPSAocHJvcHMpID0+IDxkaXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PjxoMiBzdHlsZT17c3R5bGVzLmgyfT57cHJvcHMuaGVhZH08L2gyPjxkaXYgc3R5bGU9e3N0eWxlcy50eHR9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj48L2Rpdj5cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKFBhcGVyTGkpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi9saWIvY29sb3JzJ1xuXG5jb25zdCBzdHlsZSA9IHtcblx0d2lkdGg6ICcxMDAlJyxcblx0ZGlzcGxheTogJ2Jsb2NrJyxcblx0YmFja2dyb3VuZDogY29sb3JzLmdyZXkyMDAsXG5cdGhlaWdodDogMSxcblx0bWFyZ2luOiAnMTBweCAwIDIwcHggMCdcbn1cblxuY29uc3QgUGFwZXJMaW5lID0gKHByb3BzKSA9PiA8ZGl2IHN0eWxlPXtzdHlsZX0gLz5cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKFBhcGVyTGluZSlcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5jb25zdCBzdHlsZSA9IHtcblx0d2lkdGg6ICcxMDAlJyxcblx0ZGlzcGxheTogJ2Jsb2NrJ1xufVxuXG5jb25zdCBQYXBlclVsID0gKHByb3BzKSA9PiA8ZGl2IGNsYXNzTmFtZT0nY2xlYXInIHN0eWxlPXtzdHlsZX0+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oUGFwZXJVbClcbiIsImltcG9ydCBSZWFjdCwge1Byb3BUeXBlc30gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi9saWIvY29sb3JzJ1xuaW1wb3J0IEVudGl0eVNlcnZpY2UgZnJvbSAnLi4vLi4vc2VydmljZXMvRW50aXR5LlNlcnZpY2UnXG5pbXBvcnQgRjFTZXJ2aWNlIGZyb20gJy4uLy4uL3NlcnZpY2VzL0YxLlNlcnZpY2UnXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vLi4vbGliL1V0aWxzJ1xuXG5pbXBvcnQgUGFwZXIgZnJvbSAnLi9QYXBlcidcbmltcG9ydCBQYXBlckNvbnRlbnQgZnJvbSAnLi9QYXBlckNvbnRlbnQnXG5pbXBvcnQgUGFwZXJJbWcgZnJvbSAnLi9QYXBlckltZydcbmltcG9ydCBQYXBlckhlYWRlciBmcm9tICcuL1BhcGVySGVhZGVyJ1xuaW1wb3J0IFBhcGVyVWwgZnJvbSAnLi9QYXBlclVsJ1xuaW1wb3J0IFBhcGVyTGkgZnJvbSAnLi9QYXBlckxpJ1xuaW1wb3J0IFBhcGVyTGluZSBmcm9tICcuL1BhcGVyTGluZSdcbmltcG9ydCBQYXBlckJ0biBmcm9tICcuL1BhcGVyQnRuJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcidcbmltcG9ydCBDZW50ZXJDb250YWluZXIgZnJvbSAnLi9DZW50ZXJDb250YWluZXInXG5cbmNvbnN0IGV4Y2x1ZGUgPSBbJ3RodW1ibmFpbCcsICdkZXBpY3Rpb24nLCAnYmlydGhQbGFjZScsICd3aWtpUGFnZUlEJywgJ2Fic3RyYWN0JywgJ2xvY2F0aW9uJ11cblxuY29uc3Qgc3R5bGVzID0ge1xuXHRyZWxvYWQ6IHtcblx0XHRjdXJzb3I6ICdwb2ludGVyJyxcblx0XHQnOmhvdmVyJzoge1xuXHRcdFx0Y29sb3I6IGNvbG9ycy5yZWQ1MDBcblx0XHR9XG5cdH1cbn1cblxuY2xhc3MgUHJvZmlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGVudGl0eTogbnVsbCxcblx0XHRcdGVycjogZmFsc2Vcblx0XHR9XG5cdFx0dGhpcy5yZWxvYWQgPSB0aGlzLnJlbG9hZC5iaW5kKHRoaXMpXG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdGlmKHRoaXMucHJvcHMuZW50aXR5LmRhdGEpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe2VudGl0eTogdGhpcy5wcm9wcy5lbnRpdHkuZGF0YX0pXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZmV0Y2hTcGFycWwoKVxuXHRcdH1cblx0fVxuXHRyZWxvYWQoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRlbnRpdHk6IG51bGwsXG5cdFx0XHRlcnI6IGZhbHNlXG5cdFx0fSlcblx0XHR0aGlzLmZldGNoU3BhcnFsKClcblx0fVxuXHRmZXRjaFNwYXJxbCgpIHtcblx0XHRFbnRpdHlTZXJ2aWNlLmdldEVudGl0eSh0aGlzLnByb3BzLmVudGl0eSwgKGVyciwgcmVzKSA9PiB7XG5cdFx0XHRpZihlcnIgfHwgIXJlcy5ib2R5LnJlc3VsdHMuYmluZGluZ3MubGVuZ3RoKSByZXR1cm4gdGhpcy5mZXRjaEFwaSgpXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtlbnRpdHk6IHJlcy5ib2R5LnJlc3VsdHMuYmluZGluZ3NbMF19KVxuXHRcdH0pXG5cdH1cblx0ZmV0Y2hBcGkoKSB7XG5cdFx0RjFTZXJ2aWNlLmdldEVudGl0eSh0aGlzLnByb3BzLmVudGl0eSwgKGVyciwgcmVzKSA9PiB7XG5cdFx0XHRpZihlcnIpIHJldHVybiB0aGlzLnNldFN0YXRlKHtlbnRpdHk6IG51bGwsIGVycjogdHJ1ZX0pXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0ZW50aXR5OiByZXMsXG5cdFx0XHRcdGVycjogZmFsc2Vcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXHRyZW5kZXJMb2FkZXIoKSB7XG5cdFx0cmV0dXJuIDxQYXBlcj48UGFwZXJDb250ZW50PjxDZW50ZXJDb250YWluZXI+PExvYWRlciAvPjwvQ2VudGVyQ29udGFpbmVyPjwvUGFwZXJDb250ZW50PjwvUGFwZXI+XG5cdH1cblx0cmVuZGVyQ29udGVudCgpIHtcblx0XHRsZXQge2VudGl0eX0gPSB0aGlzLnN0YXRlXG5cdFx0bGV0IGltZyA9IF8uaGFzKGVudGl0eSwgJ2RlcGljdGlvbicpID8gPFBhcGVySW1nIHNyYz17ZW50aXR5LmRlcGljdGlvbi52YWx1ZX0gLz4gOiBudWxsXG5cdFx0bGV0IGhyZWYgPSBfLmhhcyhlbnRpdHksICd3aWtpUGFnZUlEJykgPyA8ZGl2PjxQYXBlckxpbmUgLz48UGFwZXJCdG4gaHJlZj17YGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy8/Y3VyaWQ9JHtlbnRpdHkud2lraVBhZ2VJRC52YWx1ZX1gfT5SZWFkIE1vcmU8L1BhcGVyQnRuPjwvZGl2PiA6IG51bGxcblx0XHRsZXQga2V5cyA9IF8oZW50aXR5KS5rZXlzKCkuZmlsdGVyKGsgPT4gXy5pbmRleE9mKGV4Y2x1ZGUsIGspPT0tMSkudmFsdWUoKVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8UGFwZXI+XG5cdFx0XHRcdHtpbWd9XG5cdFx0XHRcdDxQYXBlckhlYWRlcj57dGhpcy5wcm9wcy5lbnRpdHkubmFtZX08L1BhcGVySGVhZGVyPlxuXHRcdFx0XHQ8UGFwZXJDb250ZW50PlxuXHRcdFx0XHRcdDxQYXBlclVsPlxuXHRcdFx0XHRcdFx0e2tleXMubWFwKGsgPT4ge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gPFBhcGVyTGkga2V5PXtgJHt0aGlzLnByb3BzLmVudGl0eS5faWR9LSR7a31gfSBoZWFkPXtVdGlscy5jYXBpdGFsaXplKGspfT57VXRpbHMuZm9ybWF0RW50aXR5U3RyaW5nKGVudGl0eVtrXS52YWx1ZSl9PC9QYXBlckxpPlxuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0PC9QYXBlclVsPlxuXHRcdFx0XHRcdHtocmVmfVxuXHRcdFx0XHQ8L1BhcGVyQ29udGVudD5cblx0XHRcdDwvUGFwZXI+XG5cdFx0KVxuXHR9XG5cdHJlbmRlckFnYWluQnRuKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8UGFwZXI+XG5cdFx0XHRcdDxQYXBlckNvbnRlbnQ+XG5cdFx0XHRcdFx0PFBhcGVySGVhZGVyPnt0aGlzLnByb3BzLmVudGl0eS5uYW1lfTwvUGFwZXJIZWFkZXI+XG5cdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3N0eWxlcy5yZWxvYWR9IG9uQ2xpY2s9e3RoaXMucmVsb2FkfT5Db3VsZCBub3QgZmV0Y2ggZGF0YS4gQ2xpY2sgdG8gdHJ5IGFnYWluPC9zcGFuPlxuXHRcdFx0XHQ8L1BhcGVyQ29udGVudD5cblx0XHRcdDwvUGFwZXI+XG5cdFx0KVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRpZih0aGlzLnN0YXRlLmVycikgcmV0dXJuIHRoaXMucmVuZGVyQWdhaW5CdG4oKVxuXHRcdGlmKCF0aGlzLnN0YXRlLmVudGl0eSkgcmV0dXJuIHRoaXMucmVuZGVyTG9hZGVyKClcblx0XHRyZXR1cm4gdGhpcy5yZW5kZXJDb250ZW50KClcblx0fVxufVxuXG5Qcm9maWxlLnByb3BUeXBlcyA9IHtcblx0ZW50aXR5OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKFByb2ZpbGUpXG4iLCJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXN9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vLi4vbGliL2NvbG9ycydcblxuY29uc3Qgc3R5bGVzID0ge1xuXHRjb250YWluZXI6IHtcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdGhlaWdodDogJzEwMCUnLFxuXHRcdHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXHRcdGJhY2tncm91bmQ6IGNvbG9ycy53aGl0ZSxcblx0XHRvdmVyZmxvdzogJ2hpZGRlbidcblx0fSxcblx0aW5wQ29udGFpbmVyOiB7XG5cdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsXG5cdFx0dG9wOiAwLFxuXHRcdGxlZnQ6IDAsXG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRoZWlnaHQ6ICcxMDAlJyxcblx0XHRib3hTaXppbmc6ICdib3JkZXItYm94Jyxcblx0XHRiYWNrZ3JvdW5kOiAnbm9uZScsXG5cdFx0Ym9yZGVyOiBgbm9uZWAsXG5cdFx0Zm9udFdlaWdodDogMzAwLFxuXHRcdHBhZGRpbmc6ICc1cHggNDVweCA1cHggNXB4Jyxcblx0XHRmb250U2l6ZTogJzFyZW0nLFxuXHRcdHRleHRBbGlnbjogJ2xlZnQnLFxuXHRcdGZvbnRGYW1pbHk6ICdSb2JvdG8nLFxuXHRcdG1hcmdpbjogMCxcblx0XHQnOmZvY3VzJzoge1xuXHRcdFx0b3V0bGluZTogJ25vbmUnLFxuXHRcdFx0Ly9ib3JkZXI6IGAxcHggc29saWQgJHtjb2xvcnMuZ3JleTgwMH1gXG5cdFx0fVxuXHR9LFxuXHRyZWNvbW1lbmQ6IHtcblx0XHRjb2xvcjogY29sb3JzLmdyZXk1MDAsXG5cdFx0cGFkZGluZ1RvcDogOVxuXHR9LFxuXHRlYXNlOiB7XG5cdFx0dHJhbnNpdGlvbjogJ2FsbCAwLjFzIGVhc2UtaW4tb3V0J1xuXHR9LFxuXHR3aGl0ZVNwYWNlOiB7XG5cdFx0Y29sb3I6IGNvbG9ycy53aGl0ZVxuXHR9LFxuXHRpY29uOiB7XG5cdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsXG5cdFx0d2lkdGg6IDQwLFxuXHRcdGhlaWdodDogNDAsXG5cdFx0dG9wOiAwLFxuXHRcdHJpZ2h0OiAwLFxuXHRcdGRpc3BsYXk6ICdibG9jaycsXG5cdFx0Zm9udFNpemU6ICcxZW0nLFxuXHRcdGJhY2tncm91bmQ6IGNvbG9ycy5ncmV5ODAwLFxuXHRcdGNvbG9yOiBjb2xvcnMud2hpdGUsXG5cdFx0Ym9yZGVyOiAnbm9uZScsXG5cdFx0cGFkZGluZzogMCxcblx0XHRjdXJzb3I6ICdwb2ludGVyJyxcblx0XHQnOmhvdmVyJzoge1xuXHRcdFx0Y29sb3I6IGNvbG9ycy5ncmV5NTAwXG5cdFx0fVxuXHR9XG59XG5cbmNsYXNzIFNlYXJjaElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLm9uS2V5ID0gdGhpcy5vbktleS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5vbktleURvd24gPSB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpXG5cdH1cblx0b25LZXkoZSkge1xuXHRcdGlmKGUua2V5ID09ICdFbnRlcicpIHRoaXMucHJvcHMub25FbnRlcigpXG5cdH1cblx0b25LZXlEb3duKGUpIHtcblx0XHRpZihlLmtleSA9PSAnVGFiJykge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHR0aGlzLnByb3BzLm9uVGFiKClcblx0XHR9XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXtbc3R5bGVzLmNvbnRhaW5lciwgdGhpcy5wcm9wcy5zdHlsZV19PlxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXtbc3R5bGVzLmlucENvbnRhaW5lciwgc3R5bGVzLnJlY29tbWVuZCwgdGhpcy5wcm9wcy5pbnBTdHlsZV19PjxzcGFuIHN0eWxlPXtzdHlsZXMud2hpdGVTcGFjZX0+e3RoaXMucHJvcHMudmFsdWV9PC9zcGFuPnt0aGlzLnByb3BzLnJlY29tbWVuZH08L2Rpdj5cblx0XHRcdFx0PGlucHV0IGtleT0naW5wdXRTcmMnIHR5cGU9J3RleHQnIHN0eWxlPXtbc3R5bGVzLmVhc2UsIHN0eWxlcy5pbnBDb250YWluZXIsIHRoaXMucHJvcHMuaW5wU3R5bGVdfSB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX0gb25DaGFuZ2U9e2UgPT4gdGhpcy5wcm9wcy5vbkNoYW5nZShlLnRhcmdldC52YWx1ZSl9IG9uS2V5UHJlc3M9e3RoaXMub25LZXl9IG9uS2V5RG93bj17dGhpcy5vbktleURvd259IC8+XG5cdFx0XHRcdDxidXR0b24gc3R5bGU9e1tzdHlsZXMuaWNvbiwgc3R5bGVzLmVhc2VdfSBrZXk9J2ludGVybmFsU3JjQnV0dG9uJyBvbkNsaWNrPXtlID0+IHRoaXMucHJvcHMub25FbnRlcigpfT48aSBjbGFzc05hbWU9J2ZhIGZhLXNlYXJjaCcgLz48L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5TZWFyY2hJbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG5cdHN0eWxlOiB7fSxcblx0dmFsdWU6ICcnLFxuXHRyZWNvbW1lbmQ6ICcnLFxuXHRpbnBTdHlsZToge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKFNlYXJjaElucHV0KVxuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IGFzeW5jIGZyb20gJ2FzeW5jJ1xuaW1wb3J0IENvbWJpbmF0b3JpY3MgZnJvbSAnanMtY29tYmluYXRvcmljcydcbmltcG9ydCB7c3BlY2lhbEtleXdvcmRzfSBmcm9tICcuL0tleXdvcmRzJ1xuXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi9VdGlscydcbmltcG9ydCBGMVNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvRjEuU2VydmljZSdcblxuY2xhc3MgQW5hbHlzZXIge1xuXHRzdGF0aWMgcGFyc2VFbnRpdGllcyhxdWVyeSwgZW50aXRpZXMsIGNiKSB7XG5cdFx0bGV0IGRhdGVzID0gXyhlbnRpdGllcykuZmlsdGVyKGUgPT4gZS50eXBlPT0nZGF0ZScpLm1hcCgnbmFtZScpLnZhbHVlKClcblx0XHRsZXQgX3Byb2ZpbGVzID0gXy5maWx0ZXIoZW50aXRpZXMsIGUgPT4gZS50eXBlIT0nZGF0ZScpXG5cdFx0QW5hbHlzZXIuZXZhbHVhdGVQcm9maWxlcyhxdWVyeSwgX3Byb2ZpbGVzLCBwcm9maWxlcyA9PiB7XG5cdFx0XHRBbmFseXNlci5kYXRhQ2FzZShxdWVyeSwgcHJvZmlsZXMsIGRhdGVzLCBzdW1tYXJpZXMgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhzdW1tYXJpZXMpXG5cdFx0XHRcdGNiKHtkYXRlcywgcHJvZmlsZXN9KVxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0c3RhdGljIGV2YWx1YXRlUHJvZmlsZXMocXVlcnksIHByb2ZpbGVzLCBjYikge1xuXHRcdGxldCBrZXlzID0gXyhxdWVyeS5zcGxpdCgnICcpKS5tYXAoayA9PiBfLmRlYnVycihrLnRvTG93ZXJDYXNlKCkpKS51bmlxKCkudmFsdWUoKVxuXHRcdGxldCBjb21iaW5hdGlvbnMgPSBVdGlscy5uYXR1cmFsS2V5d29yZENvbWJpbmF0aW9ucyhrZXlzKVxuXHRcdGxldCBwcyA9IF8ocHJvZmlsZXMpLm1hcChwID0+IHtcblx0XHRcdGxldCBrZXl3b3JkcyA9IF8oVXRpbHMubmF0dXJhbEtleXdvcmRDb21iaW5hdGlvbnMocC5rZXl3b3JkcykpLmZsYXR0ZW5EZWVwKCkubWFwKGsgPT4gXy5kZWJ1cnIoaykpLnVuaXEoKS52YWx1ZSgpXG5cdFx0XHRsZXQgaW50ZXJzZWN0ID0gXy5pbnRlcnNlY3Rpb24oa2V5cywga2V5d29yZHMpXG5cdFx0XHRwLmNvbmZpZGVudCA9IGludGVyc2VjdC5sZW5ndGhcblx0XHRcdHAuaW50ZXJzZWN0ID0gaW50ZXJzZWN0XG5cdFx0XHRpZihfLmluZGV4T2YoY29tYmluYXRpb25zLCBfLmRlYnVycihwLm5hbWUudG9Mb3dlckNhc2UoKSkpPi0xKSBwLmNvbmZpZGVudD0xMDBcblx0XHRcdHJldHVybiBwXG5cdFx0fSkub3JkZXJCeShbJ2NvbmZpZGVudCcsICduYW1lJ10sIFsnZGVzYycsICdhc2MnXSkudmFsdWUoKVxuXHRcdEFuYWx5c2VyLmNyZWF0ZURlcGVuZGVuY3lHcmFwaChwcywgY2IpXG5cdH1cblxuXHRzdGF0aWMgY3JlYXRlRGVwZW5kZW5jeUdyYXBoKHByb2ZpbGVzLCBjYikge1xuXHRcdGxldCBwcm9mcyA9IF8uZ3JvdXBCeShwcm9maWxlcywgJ3R5cGUnKVxuXHRcdHByb2ZzLl9rZXlzID0gXy5rZXlzKHByb2ZzKVxuXHRcdHByb2ZzID0gXy5tYXAocHJvZnMuX2tleXMsIGsgPT4ge1xuXHRcdFx0bGV0IHAgPSBwcm9mc1trXVxuXHRcdFx0bGV0IGdyb3VwID0gXy5ncm91cEJ5KHAsICdpbnRlcnNlY3QnKVxuXHRcdFx0bGV0IGtleXMgPSBfLmtleXMoZ3JvdXApXG5cdFx0XHRyZXR1cm4ge19rZXlzOiBrZXlzLCBkYXRhOiBncm91cH1cblx0XHR9KVxuXHRcdHByb2ZzID0gXyhwcm9mcykubWFwKHAgPT4ge1xuXHRcdFx0cmV0dXJuIF8ocC5fa2V5cykubWFwKGsgPT4ge1xuXHRcdFx0XHRsZXQgcHIgPSBwLmRhdGFba11cblx0XHRcdFx0bGV0IG1heCA9IF8ubWF4QnkocHIsICdjb25maWRlbnQnKS5jb25maWRlbnRcblx0XHRcdFx0cmV0dXJuIF8ocHIpLmZpbHRlcihfcCA9PiBfcC5jb25maWRlbnQgPT0gbWF4KS5mbGF0dGVuKCkudmFsdWUoKVxuXHRcdFx0fSkuZmxhdHRlbigpLnZhbHVlKClcblx0XHR9KS5mbGF0dGVuKCkub3JkZXJCeShbJ2NvbmZpZGVudCcsICd0eXBlJywgJ25hbWUnXSwgWydkZXNjJywgJ2FzYycsICdhc2MnXSkudW5pcUJ5KCdfaWQnKS52YWx1ZSgpXG5cdFx0Y2IocHJvZnMpXG5cdH1cblxuXHRzdGF0aWMgZGF0YUNhc2UocXVlcnksIHByb2ZpbGVzLCBkYXRlcywgY2IpIHtcblx0XHRsZXQga2V5d29yZHMgPSBfKHF1ZXJ5LnNwbGl0KCcgJykpLm1hcChrID0+IF8uZGVidXJyKGsudG9Mb3dlckNhc2UoKSkpLnVuaXEoKS52YWx1ZSgpXG5cdFx0bGV0IGNvbWJpbmF0aW9ucyA9IFV0aWxzLm5hdHVyYWxLZXl3b3JkQ29tYmluYXRpb25zKGtleXdvcmRzKVxuXHRcdGxldCB3b3JkcyA9IF8oc3BlY2lhbEtleXdvcmRzKS5maWx0ZXIoc2sgPT4gXy5pbnRlcnNlY3Rpb24oc2sud29yZHMsIGNvbWJpbmF0aW9ucykubGVuZ3RoKS5tYXAoJ2tleScpLnVuaXEoKS52YWx1ZSgpXG5cdFx0bGV0IGdyb3VwZWQgPSBfLmdyb3VwQnkocHJvZmlsZXMsICd0eXBlJylcblx0XHRsZXQga2V5cyA9IF8ua2V5cyhncm91cGVkKVxuXHRcdGlmKGRhdGVzLmxlbmd0aCkge1xuXHRcdFx0aWYocHJvZmlsZXMubGVuZ3RoKSB7XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKHdvcmRzLmxlbmd0aCkge1xuXHRcdFx0XHRcdGlmKFV0aWxzLm9ubHlJbkFycmF5KHdvcmRzLCBbJ2NhbGVuZGFyJ10pKSByZXR1cm4gQW5hbHlzZXIuZ2V0U2Vhc29uUmFjZUNhbGVuZGFyKGRhdGVzLCBjYilcblx0XHRcdFx0XHRpZihVdGlscy5vbmx5SW5BcnJheSh3b3JkcywgWydkcml2ZXInXSkpIHJldHVybiBBbmFseXNlci5nZXRTZWFzb25Ecml2ZXJTdGFuZGluZ3MoZGF0ZXMsIGNiKVxuXHRcdFx0XHRcdGlmKFV0aWxzLm9ubHlJbkFycmF5KHdvcmRzLCBbJ3RlYW0nXSkpIHJldHVybiBBbmFseXNlci5nZXRTZWFzb25Db25zdHJ1Y3RvclN0YW5kaW5ncyhkYXRlcywgY2IpXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIEFuYWx5c2VyLmdldFNlYXNvblN1bW1hcnkoZGF0ZXMsIGNiKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNiKFtdKVxuXHR9XG5cblx0c3RhdGljIGdldFNlYXNvblN1bW1hcnkoZGF0ZXMsIGNiKSB7XG5cdFx0bGV0IHN1bW1hcmllcyA9IFtdXG5cdFx0YXN5bmMuZm9yRWFjaChkYXRlcywgKGRhdGUsIGNiMSkgPT4ge1xuXHRcdFx0c3VtbWFyaWVzLnB1c2goW3tcblx0XHRcdFx0bmFtZTogYCR7ZGF0ZX0gUmFjZSBDYWxlbmRhcmAsXG5cdFx0XHRcdHR5cGU6ICdyYWNlQ2FsZW5kYXInLFxuXHRcdFx0XHR5ZWFyOiBkYXRlXG5cdFx0XHR9LCB7XG5cdFx0XHRcdG5hbWU6IGAke2RhdGV9IERyaXZlciBTdGFuZGluZ3NgLFxuXHRcdFx0XHR0eXBlOiAnZHJpdmVyU3RhbmRpbmdzJyxcblx0XHRcdFx0eWVhcjogZGF0ZVxuXHRcdFx0fSwge1xuXHRcdFx0XHRuYW1lOiBgJHtkYXRlfSBDb25zdHJ1Y3RvciBTdGFuZGluZ3NgLFxuXHRcdFx0XHR0eXBlOiAnY29uc3RydWN0b3JTdGFuZGluZ3MnLFxuXHRcdFx0XHR5ZWFyOiBkYXRlXG5cdFx0XHR9XSlcblx0XHRcdGNiMSgpXG5cdFx0fSwgZXJyID0+IGNiKF8uZmxhdHRlbihzdW1tYXJpZXMpKSlcblx0fVxuXG5cdHN0YXRpYyBnZXRTZWFzb25SYWNlQ2FsZW5kYXIoZGF0ZXMsIGNiKSB7XG5cdFx0bGV0IHN1bW1hcmllcyA9IFtdXG5cdFx0YXN5bmMuZm9yRWFjaChkYXRlcywgKGRhdGUsIGNiMSkgPT4ge1xuXHRcdFx0c3VtbWFyaWVzLnB1c2goe1xuXHRcdFx0XHRuYW1lOiBgJHtkYXRlfSBSYWNlIENhbGVuZGFyYCxcblx0XHRcdFx0dHlwZTogJ3JhY2VDYWxlbmRhcicsXG5cdFx0XHRcdHllYXI6IGRhdGVcblx0XHRcdH0pXG5cdFx0XHRjYjEoKVxuXHRcdH0sIGVyciA9PiBjYihzdW1tYXJpZXMpKVxuXHR9XG5cblx0c3RhdGljIGdldFNlYXNvbkRyaXZlclN0YW5kaW5ncyhkYXRlcywgY2IpIHtcblx0XHRsZXQgc3VtbWFyaWVzID0gW11cblx0XHRhc3luYy5mb3JFYWNoKGRhdGVzLCAoZGF0ZSwgY2IxKSA9PiB7XG5cdFx0XHRzdW1tYXJpZXMucHVzaCh7XG5cdFx0XHRcdG5hbWU6IGAke2RhdGV9IERyaXZlciBTdGFuZGluZ3NgLFxuXHRcdFx0XHR0eXBlOiAnZHJpdmVyU3RhbmRpbmdzJyxcblx0XHRcdFx0eWVhcjogZGF0ZVxuXHRcdFx0fSlcblx0XHRcdGNiMSgpXG5cdFx0fSwgZXJyID0+IGNiKHN1bW1hcmllcykpXG5cdH1cblxuXHRzdGF0aWMgZ2V0U2Vhc29uQ29uc3RydWN0b3JTdGFuZGluZ3MoZGF0ZXMsIGNiKSB7XG5cdFx0bGV0IHN1bW1hcmllcyA9IFtdXG5cdFx0YXN5bmMuZm9yRWFjaChkYXRlcywgKGRhdGUsIGNiMSkgPT4ge1xuXHRcdFx0c3VtbWFyaWVzLnB1c2goe1xuXHRcdFx0XHRuYW1lOiBgJHtkYXRlfSBDb25zdHJ1Y3RvciBTdGFuZGluZ3NgLFxuXHRcdFx0XHR0eXBlOiAnY29uc3RydWN0b3JTdGFuZGluZ3MnLFxuXHRcdFx0XHR5ZWFyOiBkYXRlXG5cdFx0XHR9KVxuXHRcdFx0Y2IxKClcblx0XHR9LCBlcnIgPT4gY2Ioc3VtbWFyaWVzKSlcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbmFseXNlclxuIiwiZXhwb3J0IGNvbnN0IHNwZWNpYWxLZXl3b3JkcyA9IFt7XG5cdGtleTogJ2RyaXZlcicsXG5cdHdvcmRzOiBbJ2RyaXZlcicsICdkcml2ZXJzJ11cbn0sIHtcblx0a2V5OiAndGVhbScsXG5cdHdvcmRzOiBbJ2NvbnN0cnVjdG9yJywgJ2NvbnN0cnVjdG9ycycsICd0ZWFtJywgJ3RlYW1zJ11cbn0sIHtcblx0a2V5OiAnc2Vhc29uJyxcblx0d29yZHM6IFsnc2Vhc29uJywgJ3NlYXNvbnMnXVxufSwge1xuXHRrZXk6ICdzdGFuZGluZycsXG5cdHdvcmRzOiBbJ3N0YW5kaW5nJywgJ3N0YW5kaW5ncyddXG59LCB7XG5cdGtleTogJ2NhbGVuZGFyJyxcblx0d29yZHM6IFsnY2FsZW5kYXInLCAnY2FsZW5kYXJzJywgJ3NjaGVkdWxlJywgJ3NjaGVkdWxlcicsICdzY2hlZHVsZXMnXVxufV1cbiIsImltcG9ydCB7RE9NfSBmcm9tICdyZWFjdCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuXG5jbGFzcyBVdGlscyB7XG5cdHN0YXRpYyBjYXBpdGFsaXplKHN0cikge1xuXHRcdHJldHVybiBfKHN0ci5zcGxpdCgvKD89W0EtWl0pLykpLm1hcCh0eHQgPT4gdHh0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHh0LnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpKS52YWx1ZSgpLmpvaW4oJyAnKVxuXHR9XG5cblx0c3RhdGljIGZvcm1hdEVudGl0eVN0cmluZyhlKSB7XG5cdFx0aWYoZS5zdGFydHNXaXRoKCdodHRwOi8vJykgfHwgZS5zdGFydHNXaXRoKCdodHRwczovLycpKSB7XG5cdFx0XHRyZXR1cm4gRE9NLmEoe2hyZWY6IGUsIHRhcmdldDogJ19ibGFuayd9LCBlKVxuXHRcdH1cblx0XHRpZigvXihcXGR7NH0pLShcXGR7MSwyfSktKFxcZHsxLDJ9KSQvLnRlc3QoZSkpIHtcblx0XHRcdHJldHVybiBtb21lbnQoZSwgJ1lZWVktTU0tREQnKS5mb3JtYXQoJ0xMJylcblx0XHR9XG5cdFx0cmV0dXJuIGVcblx0fVxuXG5cdHN0YXRpYyBuYXR1cmFsS2V5d29yZENvbWJpbmF0aW9ucyhrZXlzKSB7XG5cdFx0bGV0IGNodW5rcyA9IGtleXMubGVuZ3RoXG5cdFx0bGV0IHJldCA9IFtdXG5cdFx0Zm9yKGxldCB4PTE7eDw9Y2h1bmtzO3grKykge1xuXHRcdFx0Zm9yKGxldCB5PTE7eTw9KGNodW5rcy14KzEpO3krKykge1xuXHRcdFx0XHRyZXQucHVzaChfLnNsaWNlKGtleXMsIHktMSwgKHktMSt4KSkuam9pbignICcpKVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmV0XG5cdH1cblxuXHRzdGF0aWMgb25seUluQXJyYXkoYXJyYXksIHNob3VsZEJlSW4pIHtcblx0XHRpZihhcnJheS5sZW5ndGggIT0gc2hvdWxkQmVJbi5sZW5ndGgpIHJldHVybiBmYWxzZVxuXHRcdGxldCByZXQgPSB0cnVlXG5cdFx0Xy5mb3JFYWNoKHNob3VsZEJlSW4sIHNiaSA9PiB7XG5cdFx0XHRpZihfLmluZGV4T2YoYXJyYXksIHNiaSk9PS0xKSByZXQgPSBmYWxzZVxuXHRcdH0pXG5cdFx0cmV0dXJuIHJldFxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWxzXG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIHJlZDUwOiAnI2ZmZWJlZScsXG4gIHJlZDEwMDogJyNmZmNkZDInLFxuICByZWQyMDA6ICcjZWY5YTlhJyxcbiAgcmVkMzAwOiAnI2U1NzM3MycsXG4gIHJlZDQwMDogJyNlZjUzNTAnLFxuICByZWQ1MDA6ICcjZjQ0MzM2JyxcbiAgcmVkNjAwOiAnI2U1MzkzNScsXG4gIHJlZDcwMDogJyNkMzJmMmYnLFxuICByZWQ4MDA6ICcjYzYyODI4JyxcbiAgcmVkOTAwOiAnI2I3MWMxYycsXG4gIHJlZEExMDA6ICcjZmY4YTgwJyxcbiAgcmVkQTIwMDogJyNmZjUyNTInLFxuICByZWRBNDAwOiAnI2ZmMTc0NCcsXG4gIHJlZEE3MDA6ICcjZDUwMDAwJyxcblxuICBwaW5rNTA6ICcjZmNlNGVjJyxcbiAgcGluazEwMDogJyNmOGJiZDAnLFxuICBwaW5rMjAwOiAnI2Y0OGZiMScsXG4gIHBpbmszMDA6ICcjZjA2MjkyJyxcbiAgcGluazQwMDogJyNlYzQwN2EnLFxuICBwaW5rNTAwOiAnI2U5MWU2MycsXG4gIHBpbms2MDA6ICcjZDgxYjYwJyxcbiAgcGluazcwMDogJyNjMjE4NWInLFxuICBwaW5rODAwOiAnI2FkMTQ1NycsXG4gIHBpbms5MDA6ICcjODgwZTRmJyxcbiAgcGlua0ExMDA6ICcjZmY4MGFiJyxcbiAgcGlua0EyMDA6ICcjZmY0MDgxJyxcbiAgcGlua0E0MDA6ICcjZjUwMDU3JyxcbiAgcGlua0E3MDA6ICcjYzUxMTYyJyxcblxuICBwdXJwbGU1MDogJyNmM2U1ZjUnLFxuICBwdXJwbGUxMDA6ICcjZTFiZWU3JyxcbiAgcHVycGxlMjAwOiAnI2NlOTNkOCcsXG4gIHB1cnBsZTMwMDogJyNiYTY4YzgnLFxuICBwdXJwbGU0MDA6ICcjYWI0N2JjJyxcbiAgcHVycGxlNTAwOiAnIzljMjdiMCcsXG4gIHB1cnBsZTYwMDogJyM4ZTI0YWEnLFxuICBwdXJwbGU3MDA6ICcjN2IxZmEyJyxcbiAgcHVycGxlODAwOiAnIzZhMWI5YScsXG4gIHB1cnBsZTkwMDogJyM0YTE0OGMnLFxuICBwdXJwbGVBMTAwOiAnI2VhODBmYycsXG4gIHB1cnBsZUEyMDA6ICcjZTA0MGZiJyxcbiAgcHVycGxlQTQwMDogJyNkNTAwZjknLFxuICBwdXJwbGVBNzAwOiAnI2FhMDBmZicsXG5cbiAgZGVlcFB1cnBsZTUwOiAnI2VkZTdmNicsXG4gIGRlZXBQdXJwbGUxMDA6ICcjZDFjNGU5JyxcbiAgZGVlcFB1cnBsZTIwMDogJyNiMzlkZGInLFxuICBkZWVwUHVycGxlMzAwOiAnIzk1NzVjZCcsXG4gIGRlZXBQdXJwbGU0MDA6ICcjN2U1N2MyJyxcbiAgZGVlcFB1cnBsZTUwMDogJyM2NzNhYjcnLFxuICBkZWVwUHVycGxlNjAwOiAnIzVlMzViMScsXG4gIGRlZXBQdXJwbGU3MDA6ICcjNTEyZGE4JyxcbiAgZGVlcFB1cnBsZTgwMDogJyM0NTI3YTAnLFxuICBkZWVwUHVycGxlOTAwOiAnIzMxMWI5MicsXG4gIGRlZXBQdXJwbGVBMTAwOiAnI2IzODhmZicsXG4gIGRlZXBQdXJwbGVBMjAwOiAnIzdjNGRmZicsXG4gIGRlZXBQdXJwbGVBNDAwOiAnIzY1MWZmZicsXG4gIGRlZXBQdXJwbGVBNzAwOiAnIzYyMDBlYScsXG5cbiAgaW5kaWdvNTA6ICcjZThlYWY2JyxcbiAgaW5kaWdvMTAwOiAnI2M1Y2FlOScsXG4gIGluZGlnbzIwMDogJyM5ZmE4ZGEnLFxuICBpbmRpZ28zMDA6ICcjNzk4NmNiJyxcbiAgaW5kaWdvNDAwOiAnIzVjNmJjMCcsXG4gIGluZGlnbzUwMDogJyMzZjUxYjUnLFxuICBpbmRpZ282MDA6ICcjMzk0OWFiJyxcbiAgaW5kaWdvNzAwOiAnIzMwM2Y5ZicsXG4gIGluZGlnbzgwMDogJyMyODM1OTMnLFxuICBpbmRpZ285MDA6ICcjMWEyMzdlJyxcbiAgaW5kaWdvQTEwMDogJyM4YzllZmYnLFxuICBpbmRpZ29BMjAwOiAnIzUzNmRmZScsXG4gIGluZGlnb0E0MDA6ICcjM2Q1YWZlJyxcbiAgaW5kaWdvQTcwMDogJyMzMDRmZmUnLFxuXG4gIGJsdWU1MDogJyNlM2YyZmQnLFxuICBibHVlMTAwOiAnI2JiZGVmYicsXG4gIGJsdWUyMDA6ICcjOTBjYWY5JyxcbiAgYmx1ZTMwMDogJyM2NGI1ZjYnLFxuICBibHVlNDAwOiAnIzQyYTVmNScsXG4gIGJsdWU1MDA6ICcjMjE5NmYzJyxcbiAgYmx1ZTYwMDogJyMxZTg4ZTUnLFxuICBibHVlNzAwOiAnIzE5NzZkMicsXG4gIGJsdWU4MDA6ICcjMTU2NWMwJyxcbiAgYmx1ZTkwMDogJyMwZDQ3YTEnLFxuICBibHVlQTEwMDogJyM4MmIxZmYnLFxuICBibHVlQTIwMDogJyM0NDhhZmYnLFxuICBibHVlQTQwMDogJyMyOTc5ZmYnLFxuICBibHVlQTcwMDogJyMyOTYyZmYnLFxuXG4gIGxpZ2h0Qmx1ZTUwOiAnI2UxZjVmZScsXG4gIGxpZ2h0Qmx1ZTEwMDogJyNiM2U1ZmMnLFxuICBsaWdodEJsdWUyMDA6ICcjODFkNGZhJyxcbiAgbGlnaHRCbHVlMzAwOiAnIzRmYzNmNycsXG4gIGxpZ2h0Qmx1ZTQwMDogJyMyOWI2ZjYnLFxuICBsaWdodEJsdWU1MDA6ICcjMDNhOWY0JyxcbiAgbGlnaHRCbHVlNjAwOiAnIzAzOWJlNScsXG4gIGxpZ2h0Qmx1ZTcwMDogJyMwMjg4ZDEnLFxuICBsaWdodEJsdWU4MDA6ICcjMDI3N2JkJyxcbiAgbGlnaHRCbHVlOTAwOiAnIzAxNTc5YicsXG4gIGxpZ2h0Qmx1ZUExMDA6ICcjODBkOGZmJyxcbiAgbGlnaHRCbHVlQTIwMDogJyM0MGM0ZmYnLFxuICBsaWdodEJsdWVBNDAwOiAnIzAwYjBmZicsXG4gIGxpZ2h0Qmx1ZUE3MDA6ICcjMDA5MWVhJyxcblxuICBjeWFuNTA6ICcjZTBmN2ZhJyxcbiAgY3lhbjEwMDogJyNiMmViZjInLFxuICBjeWFuMjAwOiAnIzgwZGVlYScsXG4gIGN5YW4zMDA6ICcjNGRkMGUxJyxcbiAgY3lhbjQwMDogJyMyNmM2ZGEnLFxuICBjeWFuNTAwOiAnIzAwYmNkNCcsXG4gIGN5YW42MDA6ICcjMDBhY2MxJyxcbiAgY3lhbjcwMDogJyMwMDk3YTcnLFxuICBjeWFuODAwOiAnIzAwODM4ZicsXG4gIGN5YW45MDA6ICcjMDA2MDY0JyxcbiAgY3lhbkExMDA6ICcjODRmZmZmJyxcbiAgY3lhbkEyMDA6ICcjMThmZmZmJyxcbiAgY3lhbkE0MDA6ICcjMDBlNWZmJyxcbiAgY3lhbkE3MDA6ICcjMDBiOGQ0JyxcblxuICB0ZWFsNTA6ICcjZTBmMmYxJyxcbiAgdGVhbDEwMDogJyNiMmRmZGInLFxuICB0ZWFsMjAwOiAnIzgwY2JjNCcsXG4gIHRlYWwzMDA6ICcjNGRiNmFjJyxcbiAgdGVhbDQwMDogJyMyNmE2OWEnLFxuICB0ZWFsNTAwOiAnIzAwOTY4OCcsXG4gIHRlYWw2MDA6ICcjMDA4OTdiJyxcbiAgdGVhbDcwMDogJyMwMDc5NmInLFxuICB0ZWFsODAwOiAnIzAwNjk1YycsXG4gIHRlYWw5MDA6ICcjMDA0ZDQwJyxcbiAgdGVhbEExMDA6ICcjYTdmZmViJyxcbiAgdGVhbEEyMDA6ICcjNjRmZmRhJyxcbiAgdGVhbEE0MDA6ICcjMWRlOWI2JyxcbiAgdGVhbEE3MDA6ICcjMDBiZmE1JyxcblxuICBncmVlbjUwOiAnI2U4ZjVlOScsXG4gIGdyZWVuMTAwOiAnI2M4ZTZjOScsXG4gIGdyZWVuMjAwOiAnI2E1ZDZhNycsXG4gIGdyZWVuMzAwOiAnIzgxYzc4NCcsXG4gIGdyZWVuNDAwOiAnIzY2YmI2YScsXG4gIGdyZWVuNTAwOiAnIzRjYWY1MCcsXG4gIGdyZWVuNjAwOiAnIzQzYTA0NycsXG4gIGdyZWVuNzAwOiAnIzM4OGUzYycsXG4gIGdyZWVuODAwOiAnIzJlN2QzMicsXG4gIGdyZWVuOTAwOiAnIzFiNWUyMCcsXG4gIGdyZWVuQTEwMDogJyNiOWY2Y2EnLFxuICBncmVlbkEyMDA6ICcjNjlmMGFlJyxcbiAgZ3JlZW5BNDAwOiAnIzAwZTY3NicsXG4gIGdyZWVuQTcwMDogJyMwMGM4NTMnLFxuXG4gIGxpZ2h0R3JlZW41MDogJyNmMWY4ZTknLFxuICBsaWdodEdyZWVuMTAwOiAnI2RjZWRjOCcsXG4gIGxpZ2h0R3JlZW4yMDA6ICcjYzVlMWE1JyxcbiAgbGlnaHRHcmVlbjMwMDogJyNhZWQ1ODEnLFxuICBsaWdodEdyZWVuNDAwOiAnIzljY2M2NScsXG4gIGxpZ2h0R3JlZW41MDA6ICcjOGJjMzRhJyxcbiAgbGlnaHRHcmVlbjYwMDogJyM3Y2IzNDInLFxuICBsaWdodEdyZWVuNzAwOiAnIzY4OWYzOCcsXG4gIGxpZ2h0R3JlZW44MDA6ICcjNTU4YjJmJyxcbiAgbGlnaHRHcmVlbjkwMDogJyMzMzY5MWUnLFxuICBsaWdodEdyZWVuQTEwMDogJyNjY2ZmOTAnLFxuICBsaWdodEdyZWVuQTIwMDogJyNiMmZmNTknLFxuICBsaWdodEdyZWVuQTQwMDogJyM3NmZmMDMnLFxuICBsaWdodEdyZWVuQTcwMDogJyM2NGRkMTcnLFxuXG4gIGxpbWU1MDogJyNmOWZiZTcnLFxuICBsaW1lMTAwOiAnI2YwZjRjMycsXG4gIGxpbWUyMDA6ICcjZTZlZTljJyxcbiAgbGltZTMwMDogJyNkY2U3NzUnLFxuICBsaW1lNDAwOiAnI2Q0ZTE1NycsXG4gIGxpbWU1MDA6ICcjY2RkYzM5JyxcbiAgbGltZTYwMDogJyNjMGNhMzMnLFxuICBsaW1lNzAwOiAnI2FmYjQyYicsXG4gIGxpbWU4MDA6ICcjOWU5ZDI0JyxcbiAgbGltZTkwMDogJyM4Mjc3MTcnLFxuICBsaW1lQTEwMDogJyNmNGZmODEnLFxuICBsaW1lQTIwMDogJyNlZWZmNDEnLFxuICBsaW1lQTQwMDogJyNjNmZmMDAnLFxuICBsaW1lQTcwMDogJyNhZWVhMDAnLFxuXG4gIHllbGxvdzUwOiAnI2ZmZmRlNycsXG4gIHllbGxvdzEwMDogJyNmZmY5YzQnLFxuICB5ZWxsb3cyMDA6ICcjZmZmNTlkJyxcbiAgeWVsbG93MzAwOiAnI2ZmZjE3NicsXG4gIHllbGxvdzQwMDogJyNmZmVlNTgnLFxuICB5ZWxsb3c1MDA6ICcjZmZlYjNiJyxcbiAgeWVsbG93NjAwOiAnI2ZkZDgzNScsXG4gIHllbGxvdzcwMDogJyNmYmMwMmQnLFxuICB5ZWxsb3c4MDA6ICcjZjlhODI1JyxcbiAgeWVsbG93OTAwOiAnI2Y1N2YxNycsXG4gIHllbGxvd0ExMDA6ICcjZmZmZjhkJyxcbiAgeWVsbG93QTIwMDogJyNmZmZmMDAnLFxuICB5ZWxsb3dBNDAwOiAnI2ZmZWEwMCcsXG4gIHllbGxvd0E3MDA6ICcjZmZkNjAwJyxcblxuICBhbWJlcjUwOiAnI2ZmZjhlMScsXG4gIGFtYmVyMTAwOiAnI2ZmZWNiMycsXG4gIGFtYmVyMjAwOiAnI2ZmZTA4MicsXG4gIGFtYmVyMzAwOiAnI2ZmZDU0ZicsXG4gIGFtYmVyNDAwOiAnI2ZmY2EyOCcsXG4gIGFtYmVyNTAwOiAnI2ZmYzEwNycsXG4gIGFtYmVyNjAwOiAnI2ZmYjMwMCcsXG4gIGFtYmVyNzAwOiAnI2ZmYTAwMCcsXG4gIGFtYmVyODAwOiAnI2ZmOGYwMCcsXG4gIGFtYmVyOTAwOiAnI2ZmNmYwMCcsXG4gIGFtYmVyQTEwMDogJyNmZmU1N2YnLFxuICBhbWJlckEyMDA6ICcjZmZkNzQwJyxcbiAgYW1iZXJBNDAwOiAnI2ZmYzQwMCcsXG4gIGFtYmVyQTcwMDogJyNmZmFiMDAnLFxuXG4gIG9yYW5nZTUwOiAnI2ZmZjNlMCcsXG4gIG9yYW5nZTEwMDogJyNmZmUwYjInLFxuICBvcmFuZ2UyMDA6ICcjZmZjYzgwJyxcbiAgb3JhbmdlMzAwOiAnI2ZmYjc0ZCcsXG4gIG9yYW5nZTQwMDogJyNmZmE3MjYnLFxuICBvcmFuZ2U1MDA6ICcjZmY5ODAwJyxcbiAgb3JhbmdlNjAwOiAnI2ZiOGMwMCcsXG4gIG9yYW5nZTcwMDogJyNmNTdjMDAnLFxuICBvcmFuZ2U4MDA6ICcjZWY2YzAwJyxcbiAgb3JhbmdlOTAwOiAnI2U2NTEwMCcsXG4gIG9yYW5nZUExMDA6ICcjZmZkMTgwJyxcbiAgb3JhbmdlQTIwMDogJyNmZmFiNDAnLFxuICBvcmFuZ2VBNDAwOiAnI2ZmOTEwMCcsXG4gIG9yYW5nZUE3MDA6ICcjZmY2ZDAwJyxcblxuICBkZWVwT3JhbmdlNTA6ICcjZmJlOWU3JyxcbiAgZGVlcE9yYW5nZTEwMDogJyNmZmNjYmMnLFxuICBkZWVwT3JhbmdlMjAwOiAnI2ZmYWI5MScsXG4gIGRlZXBPcmFuZ2UzMDA6ICcjZmY4YTY1JyxcbiAgZGVlcE9yYW5nZTQwMDogJyNmZjcwNDMnLFxuICBkZWVwT3JhbmdlNTAwOiAnI2ZmNTcyMicsXG4gIGRlZXBPcmFuZ2U2MDA6ICcjZjQ1MTFlJyxcbiAgZGVlcE9yYW5nZTcwMDogJyNlNjRhMTknLFxuICBkZWVwT3JhbmdlODAwOiAnI2Q4NDMxNScsXG4gIGRlZXBPcmFuZ2U5MDA6ICcjYmYzNjBjJyxcbiAgZGVlcE9yYW5nZUExMDA6ICcjZmY5ZTgwJyxcbiAgZGVlcE9yYW5nZUEyMDA6ICcjZmY2ZTQwJyxcbiAgZGVlcE9yYW5nZUE0MDA6ICcjZmYzZDAwJyxcbiAgZGVlcE9yYW5nZUE3MDA6ICcjZGQyYzAwJyxcblxuICBicm93bjUwOiAnI2VmZWJlOScsXG4gIGJyb3duMTAwOiAnI2Q3Y2NjOCcsXG4gIGJyb3duMjAwOiAnI2JjYWFhNCcsXG4gIGJyb3duMzAwOiAnI2ExODg3ZicsXG4gIGJyb3duNDAwOiAnIzhkNmU2MycsXG4gIGJyb3duNTAwOiAnIzc5NTU0OCcsXG4gIGJyb3duNjAwOiAnIzZkNGM0MScsXG4gIGJyb3duNzAwOiAnIzVkNDAzNycsXG4gIGJyb3duODAwOiAnIzRlMzQyZScsXG4gIGJyb3duOTAwOiAnIzNlMjcyMycsXG5cbiAgYmx1ZUdyZXk1MDogJyNlY2VmZjEnLFxuICBibHVlR3JleTEwMDogJyNjZmQ4ZGMnLFxuICBibHVlR3JleTIwMDogJyNiMGJlYzUnLFxuICBibHVlR3JleTMwMDogJyM5MGE0YWUnLFxuICBibHVlR3JleTQwMDogJyM3ODkwOWMnLFxuICBibHVlR3JleTUwMDogJyM2MDdkOGInLFxuICBibHVlR3JleTYwMDogJyM1NDZlN2EnLFxuICBibHVlR3JleTcwMDogJyM0NTVhNjQnLFxuICBibHVlR3JleTgwMDogJyMzNzQ3NGYnLFxuICBibHVlR3JleTkwMDogJyMyNjMyMzgnLFxuXG4gIGdyZXk1MDogJyNmYWZhZmEnLFxuICBncmV5MTAwOiAnI2Y1ZjVmNScsXG4gIGdyZXkyMDA6ICcjZWVlZWVlJyxcbiAgZ3JleTMwMDogJyNlMGUwZTAnLFxuICBncmV5NDAwOiAnI2JkYmRiZCcsXG4gIGdyZXk1MDA6ICcjOWU5ZTllJyxcbiAgZ3JleTYwMDogJyM3NTc1NzUnLFxuICBncmV5NzAwOiAnIzYxNjE2MScsXG4gIGdyZXk4MDA6ICcjNDI0MjQyJyxcbiAgZ3JleTkwMDogJyMyMTIxMjEnLFxuXG4gIGJsYWNrOiAnIzAwMDAwMCcsXG4gIHdoaXRlOiAnI2ZmZmZmZicsXG5cbiAgdHJhbnNwYXJlbnQ6ICdyZ2JhKDAsIDAsIDAsIDApJyxcbiAgZnVsbEJsYWNrOiAncmdiYSgwLCAwLCAwLCAxKScsXG4gIGRhcmtCbGFjazogJ3JnYmEoMCwgMCwgMCwgMC44NyknLFxuICBsaWdodEJsYWNrOiAncmdiYSgwLCAwLCAwLCAwLjU0KScsXG4gIG1pbkJsYWNrOiAncmdiYSgwLCAwLCAwLCAwLjI2KScsXG4gIGZhaW50QmxhY2s6ICdyZ2JhKDAsIDAsIDAsIDAuMTIpJyxcbiAgZnVsbFdoaXRlOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXG4gIGRhcmtXaGl0ZTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC44NyknLFxuICBsaWdodFdoaXRlOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0KSdcbn1cbiIsImltcG9ydCAkIGZyb20gJ3N1cGVyYWdlbnQnXG5cbmNsYXNzIEVudGl0eVNlcnZpY2Uge1xuXHRzdGF0aWMgZ2V0RW50aXR5KGVudGl0eSwgY2IpIHtcblx0XHQkLnBvc3QoJy9haS9lbnRpdHknKVxuXHRcdC5zZW5kKGVudGl0eSlcblx0XHQuZW5kKChlcnIsIHJlcykgPT4ge1xuXHRcdFx0Y2IoZXJyLCByZXMpXG5cdFx0fSlcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbnRpdHlTZXJ2aWNlXG4iLCJpbXBvcnQgJCBmcm9tICdzdXBlcmFnZW50J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IGFzeW5jIGZyb20gJ2FzeW5jJ1xuXG5jbGFzcyBGMVNlcnZpY2Uge1xuXHRzdGF0aWMgZ2V0RW50aXR5KGVudGl0eSwgY2IpIHtcblx0XHRsZXQgdHlwZSA9ICdkcml2ZXJzJ1xuXHRcdGlmKGVudGl0eS50eXBlID09ICd0cmFjaycpIHtcblx0XHRcdHR5cGUgPSAnY2lyY3VpdHMnXG5cdFx0fSBlbHNlIGlmKGVudGl0eS50eXBlID09ICd0ZWFtJykge1xuXHRcdFx0dHlwZSA9ICdjb25zdHJ1Y3RvcnMnXG5cdFx0fVxuXHRcdCQuZ2V0KGBodHRwOi8vZXJnYXN0LmNvbS9hcGkvZjEvJHt0eXBlfS8ke2VudGl0eS5lcmdhc3RJRH0uanNvbmApXG5cdFx0LmVuZCgoZXJyLCByZXMpID0+IHtcblx0XHRcdGlmKGVycikgcmV0dXJuIGNiKGVycilcblx0XHRcdGlmKGVudGl0eS50eXBlPT0nZHJpdmVyJykge1xuXHRcdFx0XHRsZXQgZGF0YSA9IHJlcy5ib2R5Lk1SRGF0YS5Ecml2ZXJUYWJsZS5Ecml2ZXJzXG5cdFx0XHRcdGlmKCFkYXRhLmxlbmd0aCkgcmV0dXJuIGNiKHRydWUpXG5cdFx0XHRcdGRhdGEgPSBfLmZpcnN0KGRhdGEpXG5cdFx0XHRcdHJldHVybiBjYihudWxsLCB7XG5cdFx0XHRcdFx0Z2l2ZW5OYW1lOiB7dmFsdWU6IGRhdGEuZ2l2ZW5OYW1lIHx8ICduL2EnfSxcblx0XHRcdFx0XHRmYW1pbHlOYW1lOiB7dmFsdWU6IGRhdGEuZmFtaWx5TmFtZSB8fCAnbi9hJ30sXG5cdFx0XHRcdFx0Y29kZToge3ZhbHVlOiBkYXRhLmNvZGUgfHwgJ24vYSd9LFxuXHRcdFx0XHRcdGRhdGVPZkJpcnRoOiB7dmFsdWU6IGRhdGEuZGF0ZU9mQmlydGggfHwgJ24vYSd9LFxuXHRcdFx0XHRcdG5hdGlvbmFsaXR5OiB7dmFsdWU6IGRhdGEubmF0aW9uYWxpdHkgfHwgJ24vYSd9LFxuXHRcdFx0XHRcdG51bWJlcjoge3ZhbHVlOiBkYXRhLnBlcm1hbmVudE51bWJlciB8fCAnbi9hJ30sXG5cdFx0XHRcdFx0dXJsOiB7dmFsdWU6IGRhdGEudXJsIHx8ICduL2EnfVxuXHRcdFx0XHR9KVxuXHRcdFx0fSBlbHNlIGlmKGVudGl0eS50eXBlPT0ndHJhY2snKSB7XG5cdFx0XHRcdGxldCBkYXRhID0gcmVzLmJvZHkuTVJEYXRhLkNpcmN1aXRUYWJsZS5DaXJjdWl0c1xuXHRcdFx0XHRpZighZGF0YS5sZW5ndGgpIHJldHVybiBjYih0cnVlKVxuXHRcdFx0XHRkYXRhID0gXy5maXJzdChkYXRhKVxuXHRcdFx0XHRyZXR1cm4gY2IobnVsbCwge1xuXHRcdFx0XHRcdG5hbWU6IHt2YWx1ZTogZGF0YS5jaXJjdWl0TmFtZSB8fCAnbi9hJ30sXG5cdFx0XHRcdFx0Y2l0eToge3ZhbHVlOiBkYXRhLkxvY2F0aW9uLmNpdHkgfHwgJ24vYSd9LFxuXHRcdFx0XHRcdGNvdW50cnk6IHt2YWx1ZTogZGF0YS5Mb2NhdGlvbi5jb3VudHJ5IHx8ICduL2EnfSxcblx0XHRcdFx0XHR1cmw6IHt2YWx1ZTogZGF0YS51cmwgfHwgJ24vYSd9XG5cdFx0XHRcdH0pXG5cdFx0XHR9IGVsc2UgaWYoZW50aXR5LnR5cGU9PSd0ZWFtJykge1xuXHRcdFx0XHRsZXQgZGF0YSA9IHJlcy5ib2R5Lk1SRGF0YS5Db25zdHJ1Y3RvclRhYmxlLkNvbnN0cnVjdG9yc1xuXHRcdFx0XHRpZighZGF0YS5sZW5ndGgpIHJldHVybiBjYih0cnVlKVxuXHRcdFx0XHRkYXRhID0gXy5maXJzdChkYXRhKVxuXHRcdFx0XHRyZXR1cm4gY2IobnVsbCwge1xuXHRcdFx0XHRcdG5hbWU6IHt2YWx1ZTogZGF0YS5uYW1lIHx8ICduL2EnfSxcblx0XHRcdFx0XHRuYXRpb25hbGl0eToge3ZhbHVlOiBkYXRhLm5hdGlvbmFsaXR5IHx8ICduL2EnfSxcblx0XHRcdFx0XHR1cmw6IHt2YWx1ZTogZGF0YS51cmwgfHwgJ24vYSd9XG5cdFx0XHRcdH0pXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY2IodHJ1ZSlcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cblx0c3RhdGljIGdldERyaXZlclNlYXNvblJlc3VsdHMoeWVhciwgY2IpIHtcblx0XHRGMVNlcnZpY2UuY2FsbEFwaShgaHR0cDovL2VyZ2FzdC5jb20vYXBpL2YxLyR7eWVhcn0vZHJpdmVyU3RhbmRpbmdzLmpzb25gLCBbJ1N0YW5kaW5nc1RhYmxlJywgJ1N0YW5kaW5nc0xpc3RzJywgJ0RyaXZlclN0YW5kaW5ncyddLCBjYilcblx0fVxuXG5cdHN0YXRpYyBnZXRUZWFtU2Vhc29uUmVzdWx0cyh5ZWFyLCBjYikge1xuXHRcdEYxU2VydmljZS5jYWxsQXBpKGBodHRwOi8vZXJnYXN0LmNvbS9hcGkvZjEvJHt5ZWFyfS9jb25zdHJ1Y3RvclN0YW5kaW5ncy5qc29uYCwgWydTdGFuZGluZ3NUYWJsZScsICdTdGFuZGluZ3NMaXN0cycsICdDb25zdHJ1Y3RvclN0YW5kaW5ncyddLCBjYilcblx0fVxuXG5cdHN0YXRpYyBnZXRSYWNlQ2FsZW5kYXIoeWVhciwgY2IpIHtcblx0XHRGMVNlcnZpY2UuY2FsbEFwaShgaHR0cDovL2VyZ2FzdC5jb20vYXBpL2YxLyR7eWVhcn0uanNvbmAsIFsnUmFjZVRhYmxlJywgJ1JhY2VzJ10sIGNiKVxuXHR9XG5cblx0c3RhdGljIGdldERyaXZlclJlc3VsdHNCeVNlYXNvbihkcml2ZXIsIHllYXIsIGNiKSB7XG5cdFx0RjFTZXJ2aWNlLmNhbGxBcGkoYGh0dHA6Ly9lcmdhc3QuY29tL2FwaS9mMS8ke3llYXJ9L2RyaXZlcnMvJHtkcml2ZXJ9L3Jlc3VsdHMuanNvbmAsIFsnUmFjZVRhYmxlJywgJ1JhY2VzJ10sIGNiKVxuXHR9XG5cblx0c3RhdGljIGNhbGxBcGkobGluaywga2V5cywgY2IpIHtcblx0XHQkLmdldChsaW5rKVxuXHRcdC5lbmQoKGVyciwgcmVzKSA9PiB7XG5cdFx0XHRpZihlcnIpIHJldHVybiBjYih0cnVlKVxuXHRcdFx0bGV0IGRhdGEgPSByZXMuYm9keS5NUkRhdGFcblx0XHRcdGFzeW5jLmZvckVhY2hTZXJpZXMoa2V5cywgKGssIGNiMSkgPT4ge1xuXHRcdFx0XHRpZighZGF0YVtrXSkgcmV0dXJuIGNiMSh0cnVlKVxuXHRcdFx0XHRkYXRhID0gZGF0YVtrXVxuXHRcdFx0XHRpZihfLmlzQXJyYXkoZGF0YSkpIHtcblx0XHRcdFx0XHRpZighZGF0YS5sZW5ndGgpIHJldHVybiBjYjEodHJ1ZSlcblx0XHRcdFx0XHRpZihfLmxhc3Qoa2V5cykhPWspIGRhdGEgPSBfLmZpcnN0KGRhdGEpXG5cdFx0XHRcdH1cblx0XHRcdFx0Y2IxKClcblx0XHRcdH0sIGVyciA9PiBjYihlcnIsIGRhdGEpKVxuXHRcdH0pXG5cdH1cblxuXHRzdGF0aWMgcmVzdWx0c0Zvcm1hdGVyKHR5cGUpIHtcblx0XHRzd2l0Y2godHlwZSkge1xuXHRcdFx0Y2FzZSAncmFjZUNhbGVuZGFyJzpcblx0XHRcdFx0cmV0dXJuIFt7XG5cdFx0XHRcdFx0bmFtZTogJ1JvdW5kJyxcblx0XHRcdFx0XHRrZXk6IFsncm91bmQnXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ05hbWUnLFxuXHRcdFx0XHRcdGtleTogWydyYWNlTmFtZSddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnRGF0ZScsXG5cdFx0XHRcdFx0a2V5OiBbJ2RhdGUnXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ0NpcmN1aXQnLFxuXHRcdFx0XHRcdGtleTogWydDaXJjdWl0JywgJ2NpcmN1aXROYW1lJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdDb3VudHJ5Jyxcblx0XHRcdFx0XHRrZXk6IFsnQ2lyY3VpdCcsICdMb2NhdGlvbicsICdjb3VudHJ5J11cblx0XHRcdFx0fV1cblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2RyaXZlclN0YW5kaW5ncyc6XG5cdFx0XHRcdHJldHVybiBbe1xuXHRcdFx0XHRcdG5hbWU6ICdQb3NpdGlvbicsXG5cdFx0XHRcdFx0a2V5OiBbJ3Bvc2l0aW9uJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdGaXJzdCBOYW1lJyxcblx0XHRcdFx0XHRrZXk6IFsnRHJpdmVyJywgJ2dpdmVuTmFtZSddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnTGFzdCBOYW1lJyxcblx0XHRcdFx0XHRrZXk6IFsnRHJpdmVyJywgJ2ZhbWlseU5hbWUnXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ1RlYW0nLFxuXHRcdFx0XHRcdGtleTogWydDb25zdHJ1Y3RvcnMnLCAnbmFtZSddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnUG9pbnRzJyxcblx0XHRcdFx0XHRrZXk6IFsncG9pbnRzJ11cblx0XHRcdFx0fV1cblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2NvbnN0cnVjdG9yU3RhbmRpbmdzJzpcblx0XHRcdFx0cmV0dXJuIFt7XG5cdFx0XHRcdFx0bmFtZTogJ1Bvc2l0aW9uJyxcblx0XHRcdFx0XHRrZXk6IFsncG9zaXRpb24nXVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogJ1RlYW0nLFxuXHRcdFx0XHRcdGtleTogWydDb25zdHJ1Y3RvcnMnLCAnbmFtZSddXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiAnUG9pbnRzJyxcblx0XHRcdFx0XHRrZXk6IFsncG9pbnRzJ11cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6ICdXaW5zJyxcblx0XHRcdFx0XHRrZXk6IFsnd2lucyddXG5cdFx0XHRcdH1dXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gW11cblx0XHRcdFx0YnJlYWtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRjFTZXJ2aWNlXG4iLCJpbXBvcnQgJCBmcm9tICdzdXBlcmFnZW50J1xuXG5jb25zdCB0ZW1wID0gW1xuXHQnTGV3aXMgSGFtaWx0b24nLFxuXHQnTmljbyBSb3NiZXJnJyxcblx0J1NlYmFzdGlhbiBWZXR0ZWwnLFxuXHQnS2ltaSBSYWlra29uZW4nLFxuXHQnRGFuaWVsIFJpY2NpYXJkbycsXG5cdCdNYXggVmVyc3RhcHBlbicsXG5cdCdGZWxpcHBlIE1hc3NhJyxcblx0J1ZhbHR0ZXJpIEJvdHRhcycsXG5cdCdTZXJnaW8gUGVyZXonLFxuXHQnTmljbyBIdWxrZW5iZXJnJyxcblx0J0RhbmlpbCBLdnlhdCcsXG5cdCdDYXJsb3MgU2FpbnonLFxuXHQnUm9tYWluIEdyb3NqZWFuJyxcblx0J0Zlcm5hbmRvIEFsb25zbycsXG5cdCdKZW5zb24gQnV0dG9uJyxcblx0J0tldmluIE1hZ251c3NlbicsXG5cdCdFc3RlYmFuIEd1dGllcnJleicsXG5cdCdKb2x5b24gUGFsbWVyJyxcblx0J01hcmN1cyBFcmljc3NvbicsXG5cdCdQYXNjYWwgV2VocmxlaW4nLFxuXHQnRmVsaXBlIE5hc3InLFxuXHQnUmlvIEhhcnlhbnRvJ1xuXVxuXG5jbGFzcyBTdWdnZXN0aW9uU2VydmljZSB7XG5cdHN0YXRpYyBnZXRTdWdnZXN0aW9ucyhjYikge1xuXHRcdCQuZ2V0KCcvYWkvc3VnZ2VzdGlvbnMnKVxuXHRcdC5lbmQoKGVyciwgcmVzKSA9PiB7XG5cdFx0XHRjYihlcnIgPyBbXSA6IHJlcy5ib2R5KVxuXHRcdH0pXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3VnZ2VzdGlvblNlcnZpY2VcbiIsImltcG9ydCAkIGZyb20gJ3N1cGVyYWdlbnQnXG5cbmNsYXNzIFRleHRBbmFseXNpc1NlcnZpY2Uge1xuXHRzdGF0aWMgYW5hbHlzZSh0eHQsIGNiKSB7XG5cdFx0JC5wb3N0KGAvYWkvYW5hbHlzZWApXG5cdFx0LnNlbmQoe3RleHQ6IHR4dH0pXG5cdFx0LmVuZCgoZXJyLCByZXMpID0+IHtcblx0XHRcdGNiKGVyciwgcmVzLmJvZHkgfHwgbnVsbClcblx0XHR9KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRBbmFseXNpc1NlcnZpY2VcbiJdfQ==
