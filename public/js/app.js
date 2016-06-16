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

},{"../lib/colors":24,"../services/Suggestion.Service":27,"./UI/CenterContainer":6,"./UI/FullScreen":7,"./UI/Loader":9,"radium":"radium","react":"react"}],3:[function(require,module,exports){
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
				null,
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

},{"../lib/colors":24,"../services/TextAnalysis.Service":28,"./SearchGrid":5,"./UI/CenterContainer":6,"./UI/FullScreen":7,"./UI/Loader":9,"./UI/SearchInput":20,"async":"async","lodash":"lodash","radium":"radium","react":"react"}],4:[function(require,module,exports){
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

},{"./UI/GridContainer":8,"./UI/Nav":10,"radium":"radium","react":"react"}],6:[function(require,module,exports){
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

var _reactMasonryComponent = require('react-masonry-component');

var _reactMasonryComponent2 = _interopRequireDefault(_reactMasonryComponent);

var _colors = require('../../lib/colors');

var _colors2 = _interopRequireDefault(_colors);

var _Analyser = require('../../lib/Analyser');

var _Analyser2 = _interopRequireDefault(_Analyser);

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
				_reactMasonryComponent2.default,
				{ elementType: 'div' },
				_react2.default.createElement(
					'div',
					{ style: styles.mansory },
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
				_reactMasonryComponent2.default,
				{ elementType: 'div' },
				this.state.profiles.map(function (p) {
					return _react2.default.createElement(
						'div',
						{ key: p._id, style: styles.mansory },
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

},{"../../lib/Analyser":21,"../../lib/colors":24,"./Paper":11,"./PaperContent":13,"./Profile":19,"radium":"radium","react":"react","react-masonry-component":"react-masonry-component"}],9:[function(require,module,exports){
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

},{"../../lib/colors":24,"radium":"radium","react":"react"}],10:[function(require,module,exports){
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

},{"../../lib/colors":24,"./SearchInput":20,"radium":"radium","react":"react"}],11:[function(require,module,exports){
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

},{"../../lib/colors":24,"radium":"radium","react":"react"}],12:[function(require,module,exports){
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

},{"../../lib/colors":24,"radium":"radium","react":"react"}],13:[function(require,module,exports){
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

},{"radium":"radium","react":"react"}],14:[function(require,module,exports){
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

},{"../../lib/colors":24,"radium":"radium","react":"react"}],15:[function(require,module,exports){
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

},{"radium":"radium","react":"react"}],16:[function(require,module,exports){
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

},{"radium":"radium","react":"react"}],17:[function(require,module,exports){
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

},{"../../lib/colors":24,"radium":"radium","react":"react"}],18:[function(require,module,exports){
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

},{"radium":"radium","react":"react"}],19:[function(require,module,exports){
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

},{"../../lib/Utils":23,"../../lib/colors":24,"../../services/Entity.Service":25,"../../services/F1.Service":26,"./CenterContainer":6,"./Loader":9,"./Paper":11,"./PaperBtn":12,"./PaperContent":13,"./PaperHeader":14,"./PaperImg":15,"./PaperLi":16,"./PaperLine":17,"./PaperUl":18,"lodash":"lodash","radium":"radium","react":"react"}],20:[function(require,module,exports){
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
		border: '1px solid ' + _colors2.default.grey500,
		fontWeight: 300,
		padding: '5px 45px 5px 5px',
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

},{"../../lib/colors":24,"radium":"radium","react":"react"}],21:[function(require,module,exports){
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Analyser = function () {
	function Analyser() {
		_classCallCheck(this, Analyser);
	}

	_createClass(Analyser, null, [{
		key: 'parseEntities',
		value: function parseEntities(query, entities, cb) {
			var dates = _lodash2.default.filter(entities, function (e) {
				return e.type == 'date';
			});
			var _profiles = _lodash2.default.filter(entities, function (e) {
				return e.type != 'date';
			});
			Analyser.evaluateProfiles(query, _profiles, function (profiles) {
				Analyser.dataCase(profiles, dates, function (summaries) {
					return cb({ dates: dates, profiles: profiles });
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
		value: function dataCase(profiles, dates, cb) {
			var summaries = [];
			var grouped = _lodash2.default.groupBy(profiles, 'type');
			var keys = _lodash2.default.keys(grouped);
			if (dates.length) {
				if (profiles.length) {} else {}
			}
			cb(summaries);
		}
	}]);

	return Analyser;
}();

exports.default = Analyser;

},{"./Keywords":22,"./Utils":23,"async":"async","js-combinatorics":"js-combinatorics","lodash":"lodash"}],22:[function(require,module,exports){
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
}];

},{}],23:[function(require,module,exports){
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
	}]);

	return Utils;
}();

exports.default = Utils;

},{"lodash":"lodash","moment":"moment","react":"react"}],24:[function(require,module,exports){
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

},{}],25:[function(require,module,exports){
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

},{"superagent":"superagent"}],26:[function(require,module,exports){
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
	}]);

	return F1Service;
}();

exports.default = F1Service;

},{"async":"async","lodash":"lodash","superagent":"superagent"}],27:[function(require,module,exports){
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

},{"superagent":"superagent"}],28:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJyZWFjdC9hcHAuanMiLCJyZWFjdC9jb21wb25lbnRzL0FwcC5qcyIsInJlYWN0L2NvbXBvbmVudHMvRGFzaGJvYXJkLmpzIiwicmVhY3QvY29tcG9uZW50cy9Ob3RGb3VuZC5qcyIsInJlYWN0L2NvbXBvbmVudHMvU2VhcmNoR3JpZC5qcyIsInJlYWN0L2NvbXBvbmVudHMvVUkvQ2VudGVyQ29udGFpbmVyLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9GdWxsU2NyZWVuLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9HcmlkQ29udGFpbmVyLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9Mb2FkZXIuanMiLCJyZWFjdC9jb21wb25lbnRzL1VJL05hdi5qcyIsInJlYWN0L2NvbXBvbmVudHMvVUkvUGFwZXIuanMiLCJyZWFjdC9jb21wb25lbnRzL1VJL1BhcGVyQnRuLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9QYXBlckNvbnRlbnQuanMiLCJyZWFjdC9jb21wb25lbnRzL1VJL1BhcGVySGVhZGVyLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9QYXBlckltZy5qcyIsInJlYWN0L2NvbXBvbmVudHMvVUkvUGFwZXJMaS5qcyIsInJlYWN0L2NvbXBvbmVudHMvVUkvUGFwZXJMaW5lLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9QYXBlclVsLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9Qcm9maWxlLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9TZWFyY2hJbnB1dC5qcyIsInJlYWN0L2xpYi9BbmFseXNlci5qcyIsInJlYWN0L2xpYi9LZXl3b3Jkcy5qcyIsInJlYWN0L2xpYi9VdGlscy5qcyIsInJlYWN0L2xpYi9jb2xvcnMuanMiLCJyZWFjdC9zZXJ2aWNlcy9FbnRpdHkuU2VydmljZS5qcyIsInJlYWN0L3NlcnZpY2VzL0YxLlNlcnZpY2UuanMiLCJyZWFjdC9zZXJ2aWNlcy9TdWdnZXN0aW9uLlNlcnZpY2UuanMiLCJyZWFjdC9zZXJ2aWNlcy9UZXh0QW5hbHlzaXMuU2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUlBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBSkE7O0FBTUEsc0JBQ0U7QUFBQTtFQUFBLEVBQVEsb0NBQVI7RUFDQztBQUFBO0lBQUEsRUFBTyxNQUFLLEdBQVosRUFBZ0Isd0JBQWhCO0lBQ0MseURBQVksOEJBQVosR0FERDtJQUVDLG9EQUFPLE1BQUssR0FBWixFQUFnQiw2QkFBaEI7QUFGRDtBQURELENBREYsRUFPRyxTQUFTLGNBQVQsQ0FBd0IsS0FBeEIsQ0FQSDs7Ozs7Ozs7Ozs7QUNYQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxTQUFTO0FBQ2QsU0FBUTtBQUNQLGNBQVksaUJBQU87QUFEWjtBQURNLENBQWY7O0lBTU0sRzs7O0FBQ0wsY0FBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEscUZBQ1osS0FEWTs7QUFFbEIsUUFBSyxLQUFMLEdBQWE7QUFDWixTQUFNLEtBRE07QUFFWixnQkFBYTtBQUZELEdBQWI7QUFGa0I7QUFNbEI7Ozs7dUNBQ29CO0FBQUE7O0FBQ3BCLHdCQUFrQixjQUFsQixDQUFpQyxnQkFBUTtBQUN4QyxXQUFLLFFBQUwsQ0FBYztBQUNiLFdBQU0sSUFETztBQUViLGtCQUFhO0FBRkEsS0FBZDtBQUlBLElBTEQ7QUFNQTs7O2lDQUNjO0FBQ2QsVUFBTztBQUFBO0lBQUE7SUFBWTtBQUFBO0tBQUE7S0FBaUIsa0RBQVEsT0FBTyxDQUFDLE9BQU8sTUFBUixDQUFmO0FBQWpCO0FBQVosSUFBUDtBQUNBOzs7a0NBQ2U7QUFBQTs7QUFDZixPQUFJLG9CQUFvQixnQkFBTSxRQUFOLENBQWUsR0FBZixDQUFtQixLQUFLLEtBQUwsQ0FBVyxRQUE5QixFQUF3QztBQUFBLFdBQVMsZ0JB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QUFNLE9BQU8sQ0FDWixnQkFEWSxFQUVaLGNBRlksRUFHWixrQkFIWSxFQUlaLGdCQUpZLEVBS1osa0JBTFksRUFNWixnQkFOWSxFQU9aLGVBUFksRUFRWixpQkFSWSxFQVNaLGNBVFksRUFVWixpQkFWWSxFQVdaLGNBWFksRUFZWixjQVpZLEVBYVosaUJBYlksRUFjWixpQkFkWSxFQWVaLGVBZlksRUFnQlosaUJBaEJZLEVBaUJaLG1CQWpCWSxFQWtCWixlQWxCWSxFQW1CWixpQkFuQlksRUFvQlosaUJBcEJZLEVBcUJaLGFBckJZLEVBc0JaLGNBdEJZLENBQWI7O0lBeUJNLGlCOzs7Ozs7O2lDQUNpQixFLEVBQUk7QUFDekIsd0JBQUUsR0FBRixDQUFNLGlCQUFOLEVBQ0MsR0FERCxDQUNLLFVBQUMsR0FBRCxFQUFNLEdBQU4sRUFBYztBQUNsQixPQUFHLE1BQU0sRUFBTixHQUFXLElBQUksSUFBbEI7QUFDQSxJQUhEO0FBSUE7Ozs7OztrQkFHYSxpQjs7Ozs7Ozs7Ozs7QUNwQ2Y7Ozs7Ozs7O0lBRU0sbUI7Ozs7Ozs7MEJBQ1UsRyxFQUFLLEUsRUFBSTtBQUN2Qix3QkFBRSxJQUFGLGdCQUNDLElBREQsQ0FDTSxFQUFDLE1BQU0sR0FBUCxFQUROLEVBRUMsR0FGRCxDQUVLLFVBQUMsR0FBRCxFQUFNLEdBQU4sRUFBYztBQUNsQixPQUFHLEdBQUgsRUFBUSxJQUFJLElBQUosSUFBWSxJQUFwQjtBQUNBLElBSkQ7QUFLQTs7Ozs7O2tCQUdhLG1CIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQge1JvdXRlciwgUm91dGUsIEluZGV4Um91dGUsIGJyb3dzZXJIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgaW5qZWN0VGFwRXZlbnRQbHVnaW4gZnJvbSAncmVhY3QtdGFwLWV2ZW50LXBsdWdpbidcblxuaW5qZWN0VGFwRXZlbnRQbHVnaW4oKVxuXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnXG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJy4vY29tcG9uZW50cy9EYXNoYm9hcmQnXG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi9jb21wb25lbnRzL05vdEZvdW5kJ1xuXG5yZW5kZXIoKFxuICA8Um91dGVyIGhpc3Rvcnk9e2Jyb3dzZXJIaXN0b3J5fT5cbiAgXHQ8Um91dGUgcGF0aD0nLycgY29tcG9uZW50PXtBcHB9PlxuICBcdFx0PEluZGV4Um91dGUgY29tcG9uZW50PXtEYXNoYm9hcmR9IC8+XG4gIFx0XHQ8Um91dGUgcGF0aD0nKicgY29tcG9uZW50PXtOb3RGb3VuZH0gLz5cbiAgXHQ8L1JvdXRlPlxuICA8L1JvdXRlcj5cbiksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSlcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5pbXBvcnQgU3VnZ2VzdGlvblNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvU3VnZ2VzdGlvbi5TZXJ2aWNlJ1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9saWIvY29sb3JzJ1xuXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vVUkvTG9hZGVyJ1xuaW1wb3J0IEZ1bGxTY3JlZW4gZnJvbSAnLi9VSS9GdWxsU2NyZWVuJ1xuaW1wb3J0IENlbnRlckNvbnRhaW5lciBmcm9tICcuL1VJL0NlbnRlckNvbnRhaW5lcidcblxuY29uc3Qgc3R5bGVzID0ge1xuXHRsb2FkZXI6IHtcblx0XHRiYWNrZ3JvdW5kOiBjb2xvcnMucmVkNTAwXG5cdH1cbn1cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aW5pdDogZmFsc2UsXG5cdFx0XHRzdWdnZXN0aW9uczogW11cblx0XHR9XG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdFN1Z2dlc3Rpb25TZXJ2aWNlLmdldFN1Z2dlc3Rpb25zKGRhdGEgPT4ge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGluaXQ6IHRydWUsXG5cdFx0XHRcdHN1Z2dlc3Rpb25zOiBkYXRhXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblx0cmVuZGVyTG9hZGVyKCkge1xuXHRcdHJldHVybiA8RnVsbFNjcmVlbj48Q2VudGVyQ29udGFpbmVyPjxMb2FkZXIgc3R5bGU9e1tzdHlsZXMubG9hZGVyXX0gLz48L0NlbnRlckNvbnRhaW5lcj48L0Z1bGxTY3JlZW4+XG5cdH1cblx0cmVuZGVyQ29udGVudCgpIHtcblx0XHR2YXIgY2hpbGRyZW5XaXRoUHJvcHMgPSBSZWFjdC5DaGlsZHJlbi5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgY2hpbGQgPT4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgIFx0c3VnZ2VzdGlvbnM6IHRoaXMuc3RhdGUuc3VnZ2VzdGlvbnNcbiAgICAgICAgfSkpXG5cdFx0cmV0dXJuIDxkaXY+e2NoaWxkcmVuV2l0aFByb3BzfTwvZGl2PlxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRpZighdGhpcy5zdGF0ZS5pbml0KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yZW5kZXJMb2FkZXIoKVxuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5yZW5kZXJDb250ZW50KClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oQXBwKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgYXN5bmMgZnJvbSAnYXN5bmMnXG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vbGliL2NvbG9ycydcbmltcG9ydCBUZXh0QW5hbHlzaXNTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL1RleHRBbmFseXNpcy5TZXJ2aWNlJ1xuXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vVUkvTG9hZGVyJ1xuaW1wb3J0IEZ1bGxTY3JlZW4gZnJvbSAnLi9VSS9GdWxsU2NyZWVuJ1xuaW1wb3J0IENlbnRlckNvbnRhaW5lciBmcm9tICcuL1VJL0NlbnRlckNvbnRhaW5lcidcbmltcG9ydCBTZWFyY2hJbnB1dCBmcm9tICcuL1VJL1NlYXJjaElucHV0J1xuaW1wb3J0IFNlYXJjaEdyaWQgZnJvbSAnLi9TZWFyY2hHcmlkJ1xuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGxvZ286IHtcblx0XHRoZWlnaHQ6IDEwMFxuXHR9LFxuXHRpbnB1dDoge1xuXHRcdHdpZHRoOiA1NTAsXG5cdFx0aGVpZ2h0OiA0MCxcblx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcblx0XHRtYXJnaW5Ub3A6IDM0XG5cdH0sXG5cdGVhc2U6IHtcblx0XHR0cmFuc2l0aW9uOiAnYWxsIDAuMXMgZWFzZS1pbi1vdXQnXG5cdH0sXG5cdGJsdXI6IHtcblx0XHRmaWx0ZXI6ICdibHVyKDEwcHgpJ1xuXHR9LFxuXHRsb2FkZXI6IHtcblx0XHRjb250YWluZXI6IHtcblx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxuXHRcdFx0dG9wOiAwLFxuXHRcdFx0bGVmdDogMCxcblx0XHRcdHpJbmRleDogMTAwMDBcblx0XHR9LFxuXHRcdGxvYWRlcjoge1xuXHRcdFx0YmFja2dyb3VuZDogY29sb3JzLnJlZDUwMFxuXHRcdH1cblx0fVxufVxuXG5jbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzZWFyY2g6IGZhbHNlLFxuXHRcdFx0bW9kYWw6IGZhbHNlLFxuXHRcdFx0c3JjOiAnJyxcblx0XHRcdHJlY29tbWVuZDogJycsXG5cdFx0XHRlbnRpdGllczogW11cblx0XHR9XG5cdFx0dGhpcy5vblNyY0NoYW5nZSA9IHRoaXMub25TcmNDaGFuZ2UuYmluZCh0aGlzKVxuXHRcdHRoaXMuc2VhcmNoID0gdGhpcy5zZWFyY2guYmluZCh0aGlzKVxuXHRcdHRoaXMub25UYWIgPSB0aGlzLm9uVGFiLmJpbmQodGhpcylcblx0XHR0aGlzLm9uSG9tZSA9IHRoaXMub25Ib21lLmJpbmQodGhpcylcblx0fVxuXHRvblNyY0NoYW5nZSh2KSB7XG5cdFx0bGV0IHJlYyA9ICcnXG5cdFx0bGV0IHdvcmRzID0gdi5zcGxpdCgnICcpXG5cdFx0bGV0IHdvcmQgPSBfLmxhc3Qod29yZHMpXG5cdFx0aWYod29yZCAmJiB3b3JkLmxlbmd0aD49Mikge1xuXHRcdFx0bGV0IHIgPSBfLmZpbmQodGhpcy5wcm9wcy5zdWdnZXN0aW9ucywgcyA9PiB7XG5cdFx0XHRcdHJldHVybiBzLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aCh3b3JkLnRvTG93ZXJDYXNlKCkpXG5cdFx0XHR9KVxuXHRcdFx0ciA9IHIgfHwgJydcblx0XHRcdGlmKHIpIHJlYyA9IHIuc3Vic3RyaW5nKHdvcmQubGVuZ3RoKVxuXHRcdH1cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHNyYzogdixcblx0XHRcdHJlY29tbWVuZDogcmVjXG5cdFx0fSlcblx0fVxuXHRvblRhYigpIHtcblx0XHRsZXQge3NyYywgcmVjb21tZW5kfSA9IHRoaXMuc3RhdGVcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHNyYzogc3JjICsgcmVjb21tZW5kLFxuXHRcdFx0cmVjb21tZW5kOiAnJ1xuXHRcdH0pXG5cdH1cblx0b25Ib21lKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c2VhcmNoOiBmYWxzZSxcblx0XHRcdG1vZGFsOiBmYWxzZSxcblx0XHRcdHNyYzogJycsXG5cdFx0XHRyZWNvbW1lbmQ6ICcnLFxuXHRcdFx0ZW50aXRpZXM6IFtdXG5cdFx0fSlcblx0fVxuXHRzZWFyY2goKSB7XG5cdFx0aWYoIXRoaXMuc3RhdGUuc3JjKSByZXR1cm4gZmFsc2Vcblx0XHRsZXQgc3JjID0gdGhpcy5zdGF0ZS5zcmMgKyB0aGlzLnN0YXRlLnJlY29tbWVuZFxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c2VhcmNoOiB0cnVlLFxuXHRcdFx0c3JjOiBzcmMsXG5cdFx0XHRyZWNvbW1lbmQ6ICcnXG5cdFx0fSlcblx0XHRUZXh0QW5hbHlzaXNTZXJ2aWNlLmFuYWx5c2Uoc3JjLCAoZXJyLCByZXMpID0+IHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRzZWFyY2g6IGZhbHNlLFxuXHRcdFx0XHRlbnRpdGllczogcmVzLFxuXHRcdFx0XHRtb2RhbDogdHJ1ZVxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cdHJlbmRlckZ1bGxTcmMoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxGdWxsU2NyZWVuPlxuXHRcdFx0XHQ8Q2VudGVyQ29udGFpbmVyPlxuXHRcdFx0XHRcdDxpbWcgc3JjPScvaW1nL2YxX2xvZ28ucG5nJyBzdHlsZT17c3R5bGVzLmxvZ299IC8+PGJyLz5cblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXtzdHlsZXMuaW5wdXR9PjxTZWFyY2hJbnB1dCByZWNvbW1lbmQ9e3RoaXMuc3RhdGUucmVjb21tZW5kfSB2YWx1ZT17dGhpcy5zdGF0ZS5zcmN9IG9uQ2hhbmdlPXt0aGlzLm9uU3JjQ2hhbmdlfSBvbkVudGVyPXt0aGlzLnNlYXJjaH0gb25UYWI9e3RoaXMub25UYWJ9IC8+PC9kaXY+PGJyLz5cblx0XHRcdFx0PC9DZW50ZXJDb250YWluZXI+XG5cdFx0XHQ8L0Z1bGxTY3JlZW4+XG5cdFx0KVxuXHR9XG5cdHJlbmRlckdyaWQoKSB7XG5cdFx0cmV0dXJuIDxTZWFyY2hHcmlkIHF1ZXJ5PXt0aGlzLnN0YXRlLnNyY30gb25Ib21lPXt0aGlzLm9uSG9tZX0gcmVjb21tZW5kPXt0aGlzLnN0YXRlLnJlY29tbWVuZH0gdmFsdWU9e3RoaXMuc3RhdGUuc3JjfSBvbkNoYW5nZT17dGhpcy5vblNyY0NoYW5nZX0gb25FbnRlcj17dGhpcy5zZWFyY2h9IG9uVGFiPXt0aGlzLm9uVGFifSBlbnRpdGllcz17dGhpcy5zdGF0ZS5lbnRpdGllc30gLz5cblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge3NlYXJjaCwgbW9kYWx9ID0gdGhpcy5zdGF0ZVxuXHRcdGNvbnN0IGxvYWRlciA9IHRoaXMuc3RhdGUuc2VhcmNoID8gPEZ1bGxTY3JlZW4gc3R5bGU9e1tzdHlsZXMubG9hZGVyLmNvbnRhaW5lcl19PjxDZW50ZXJDb250YWluZXI+PExvYWRlciBzdHlsZT17W3N0eWxlcy5sb2FkZXIubG9hZGVyXX0gLz48L0NlbnRlckNvbnRhaW5lcj48L0Z1bGxTY3JlZW4+IDogbnVsbFxuXHRcdGxldCBjbnQgPSB0aGlzLnN0YXRlLm1vZGFsID8gdGhpcy5yZW5kZXJHcmlkKCkgOiB0aGlzLnJlbmRlckZ1bGxTcmMoKVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHR7bG9hZGVyfVxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXtbc3R5bGVzLmVhc2UsIHNlYXJjaCA/IHN0eWxlcy5ibHVyIDogbnVsbF19PlxuXHRcdFx0XHRcdHtjbnR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShEYXNoYm9hcmQpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuaW1wb3J0IEZ1bGxTY3JlZW4gZnJvbSAnLi9VSS9GdWxsU2NyZWVuJ1xuaW1wb3J0IENlbnRlckNvbnRhaW5lciBmcm9tICcuL1VJL0NlbnRlckNvbnRhaW5lcidcblxuY29uc3QgTm90Rm91bmQgPSAocHJvcHMpID0+IDxGdWxsU2NyZWVuPjxDZW50ZXJDb250YWluZXI+Tm90IGZvdW5kPC9DZW50ZXJDb250YWluZXI+PC9GdWxsU2NyZWVuPlxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oTm90Rm91bmQpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuaW1wb3J0IE5hdiBmcm9tICcuL1VJL05hdidcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gJy4vVUkvR3JpZENvbnRhaW5lcidcblxuY2xhc3MgU2VhcmNoR3JpZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8TmF2IG9uSG9tZT17dGhpcy5wcm9wcy5vbkhvbWV9IHJlY29tbWVuZD17dGhpcy5wcm9wcy5yZWNvbW1lbmR9IHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoYW5nZX0gb25FbnRlcj17dGhpcy5wcm9wcy5vbkVudGVyfSBvblRhYj17dGhpcy5wcm9wcy5vblRhYn0gLz5cblx0XHRcdFx0PEdyaWRDb250YWluZXIgcXVlcnk9e3RoaXMucHJvcHMucXVlcnl9IGVudGl0aWVzPXt0aGlzLnByb3BzLmVudGl0aWVzfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEdyaWRcbiIsImltcG9ydCBSZWFjdCwge1Byb3BUeXBlc30gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuY29uc3Qgc3R5bGUgPSB7XG5cdGNlbnRlckJsb2NrU3R5bGU6IHtcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdGhlaWdodDogJzEwMCUnLFxuXHRcdG1heEhlaWdodDogJzEwMCUnLFxuXHRcdG92ZXJmbG93OiAnYXV0bycsXG5cdFx0dGV4dEFsaWduOiAnY2VudGVyJ1xuXHR9LFxuXHRjZW50ZXJDb250ZW50U3R5bGU6IHtcblx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcblx0XHR2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcblx0XHRib3hTaXppbmc6ICdib3JkZXItYm94J1xuXHR9XG59XG5cbmNvbnN0IENlbnRlckNvbnRhaW5lciA9IChwcm9wcykgPT4gPGRpdiBzdHlsZT17W3N0eWxlLmNlbnRlckJsb2NrU3R5bGUsIC4uLnByb3BzLnN0eWxlXX0gaWQ9J2NlbnRlckNvbnRlbnQnPjxkaXYgc3R5bGU9e1tzdHlsZS5jZW50ZXJDb250ZW50U3R5bGUsIC4uLnByb3BzLmJveFN0eWxlXX0+e3Byb3BzLmNoaWxkcmVufTwvZGl2PjwvZGl2PlxuXG5DZW50ZXJDb250YWluZXIuZGVmYXVsdFByb3BzID0ge1xuICBzdHlsZToge30sXG4gIGJveFN0eWxlOiB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oQ2VudGVyQ29udGFpbmVyKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmNvbnN0IHN0eWxlID0ge1xuXHR3aWR0aDogJzEwMCUnLFxuXHRoZWlnaHQ6ICcxMDB2aCdcbn1cblxuY29uc3QgRnVsbFNjcmVlbiA9IChwcm9wcykgPT4gPGRpdiBzdHlsZT17W3N0eWxlLCAuLi5wcm9wcy5zdHlsZV19Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cblxuRnVsbFNjcmVlbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHN0eWxlOiB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oRnVsbFNjcmVlbilcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuaW1wb3J0IE1hc29ucnkgZnJvbSAncmVhY3QtbWFzb25yeS1jb21wb25lbnQnXG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vLi4vbGliL2NvbG9ycydcbmltcG9ydCBBbmFseXNlciBmcm9tICcuLi8uLi9saWIvQW5hbHlzZXInXG5cbmltcG9ydCBQYXBlciBmcm9tICcuL1BhcGVyJ1xuaW1wb3J0IFBhcGVyQ29udGVudCBmcm9tICcuL1BhcGVyQ29udGVudCdcbmltcG9ydCBQcm9maWxlIGZyb20gJy4vUHJvZmlsZSdcblxuY29uc3Qgc3R5bGVzID0ge1xuXHRjb250YWluZXI6IHtcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdG1pbkhlaWdodDogJzEwMHZoJyxcblx0XHRib3hTaXppbmc6ICdib3JkZXItYm94Jyxcblx0XHRwYWRkaW5nOiAnODBweCAyMHB4IDIwcHggMjBweCcsXG5cdFx0YmFja2dyb3VuZDogY29sb3JzLmdyZXkyMDBcblx0fSxcblx0bWFuc29yeToge1xuXHRcdHBhZGRpbmc6IDIwLFxuXHRcdGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuXHRcdHdpZHRoOiAnMjUlJ1xuXHR9XG59XG5cbmNsYXNzIEdyaWRDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRwcm9maWxlczogW10sXG5cdFx0XHRkYXRlczogW10sXG5cdFx0XHRzdW1tYXJpZXM6IFtdXG5cdFx0fVxuXHR9XG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHR0aGlzLnBhcnNlRW50aXRpZXModGhpcy5wcm9wcylcblx0fVxuXHRjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuXHRcdHRoaXMucGFyc2VFbnRpdGllcyhuZXh0UHJvcHMpXG5cdH1cblx0cGFyc2VFbnRpdGllcyhwcm9wcykge1xuXHRcdEFuYWx5c2VyLnBhcnNlRW50aXRpZXModGhpcy5wcm9wcy5xdWVyeSwgcHJvcHMuZW50aXRpZXMsIGRhdGEgPT4gdGhpcy5zZXRTdGF0ZShkYXRhKSlcblx0fVxuXHRyZW5kZXJFbXB0eSgpIHtcblx0XHRyZXR1cm4gPE1hc29ucnkgZWxlbWVudFR5cGU9eydkaXYnfT48ZGl2IHN0eWxlPXtzdHlsZXMubWFuc29yeX0+PFBhcGVyPjxQYXBlckNvbnRlbnQ+PHNwYW4gY2xhc3NOYW1lPSdsbnIgbG5yLWNyb3NzJyAvPiBObyByZXN1bHRzIGZvdW5kPC9QYXBlckNvbnRlbnQ+PC9QYXBlcj48L2Rpdj48L01hc29ucnk+XG5cdH1cblx0cmVuZGVyQ29udGVudCgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PE1hc29ucnkgZWxlbWVudFR5cGU9eydkaXYnfT5cblx0XHRcdFx0e3RoaXMuc3RhdGUucHJvZmlsZXMubWFwKHAgPT4gPGRpdiBrZXk9e3AuX2lkfSBzdHlsZT17c3R5bGVzLm1hbnNvcnl9PjxQcm9maWxlIGVudGl0eT17cH0gLz48L2Rpdj4pfVxuXHRcdFx0PC9NYXNvbnJ5PlxuXHRcdClcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IGNudCA9IHRoaXMucHJvcHMuZW50aXRpZXMubGVuZ3RoID8gdGhpcy5yZW5kZXJDb250ZW50KCkgOiB0aGlzLnJlbmRlckVtcHR5KClcblx0XHRyZXR1cm4gPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+e2NudH08L2Rpdj5cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oR3JpZENvbnRhaW5lcilcbiIsImltcG9ydCBSZWFjdCwge1Byb3BUeXBlc30gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi9saWIvY29sb3JzJ1xuXG5jb25zdCBzdHlsZSA9IHtcblx0d2lkdGg6ICc2MHB4JyxcbiAgaGVpZ2h0OiAnNjBweCcsXG4gIGJhY2tncm91bmQ6IGNvbG9ycy5yZWQ1MDAsXG4gIGFuaW1hdGlvbjogJ3NrLXJvdGF0ZXBsYW5lIDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQnXG59XG5cbmNvbnN0IExvYWRlciA9IChwcm9wcykgPT4gPGRpdiBzdHlsZT17W3N0eWxlLCBwcm9wcy5zdHlsZV19IC8+XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShMb2FkZXIpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi9saWIvY29sb3JzJ1xuXG5pbXBvcnQgU2VhcmNoSW5wdXQgZnJvbSAnLi9TZWFyY2hJbnB1dCdcblxuY29uc3Qgc3R5bGVzID0ge1xuXHRjb250YWluZXI6IHtcblx0XHRiYWNrZ3JvdW5kOiAnIzFiMTcxOCcsXG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRoZWlnaHQ6IDcwLFxuXHRcdGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuXHRcdHBhZGRpbmc6ICcxNXB4IDQwcHgnLFxuXHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxuXHRcdHRvcDogMCxcblx0XHRsZWZ0OiAwLFxuXHRcdHpJbmRleDogMTAwXG5cdH0sXG5cdGxvZ286IHtcblx0XHRoZWlnaHQ6IDQwLFxuXHRcdGN1cnNvcjogJ3BvaW50ZXInXG5cdH0sXG5cdGlucHV0OiB7XG5cdFx0d2lkdGg6IDQwMCxcblx0XHRoZWlnaHQ6IDQwLFxuXHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuXHRcdHBhZGRpbmc6IDAsXG5cdFx0ZmxvYXQ6ICdyaWdodCdcblx0fSxcblx0aW5wOiB7XG5cdFx0Ym9yZGVyOiBgMXB4IHNvbGlkICR7Y29sb3JzLndoaXRlfWAsXG5cdFx0Jzpmb2N1cyc6IHtcblx0XHRcdGJvcmRlcjogYDFweCBzb2xpZCAke2NvbG9ycy53aGl0ZX1gXG5cdFx0fVxuXHR9XG59XG5cbmNsYXNzIE5hdiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8bmF2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cblx0XHRcdFx0PGltZyBzcmM9Jy9pbWcvZjFfbG9nb19kYXJrLnBuZycgb25DbGljaz17dGhpcy5wcm9wcy5vbkhvbWV9IHN0eWxlPXtzdHlsZXMubG9nb30gLz5cblx0XHRcdFx0PGRpdiBzdHlsZT17c3R5bGVzLmlucHV0fT48U2VhcmNoSW5wdXQgaW5wU3R5bGU9e1tzdHlsZXMuaW5wXX0gcmVjb21tZW5kPXt0aGlzLnByb3BzLnJlY29tbWVuZH0gdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfSBvbkVudGVyPXt0aGlzLnByb3BzLm9uRW50ZXJ9IG9uVGFiPXt0aGlzLnByb3BzLm9uVGFifSAvPjwvZGl2PlxuXHRcdFx0PC9uYXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShOYXYpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi9saWIvY29sb3JzJ1xuXG5jb25zdCBzdHlsZSA9IHtcblx0d2lkdGg6ICcxMDAlJyxcblx0YmFja2dyb3VuZDogY29sb3JzLndoaXRlLFxuXHRib3hTaGFkb3c6ICcwIC0xcHggMCAjZTVlNWU1LCAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgLjEyKSwgMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgLjI0KSdcbn1cblxuY29uc3QgUGFwZXIgPSAocHJvcHMpID0+IDxkaXYgc3R5bGU9e1tzdHlsZSwgcHJvcHMuc3R5bGVdfT57cHJvcHMuY2hpbGRyZW59PC9kaXY+XG5cblBhcGVyLmRlZmF1bHRQcm9wcyA9IHtcblx0c3R5bGU6IHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShQYXBlcilcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uLy4uL2xpYi9jb2xvcnMnXG5cbmNvbnN0IHN0eWxlID0ge1xuXHRkaXNwbGF5OiAnYmxvY2snLFxuXHRib3JkZXI6ICdub25lJyxcblx0bWFyZ2luOiAwLFxuXHRwYWRkaW5nOiAnMTBweCcsXG5cdGNvbG9yOiBjb2xvcnMud2hpdGUsXG5cdGJhY2tncm91bmQ6IGNvbG9ycy5yZWQ1MDAsXG5cdGZvbnRTaXplOiAnLjhyZW0nLFxuXHRmb250V2VpZ2h0OiA0MDAsXG5cdGZvbnRGYW1pbHk6ICdpbmhlcml0Jyxcblx0Y3Vyc29yOiAncG9pbnRlcicsXG5cdHRyYW5zaXRpb246ICdhbGwgMC4xcyBlYXNlLWluLW91dCcsXG5cdCc6aG92ZXInOiB7XG5cdFx0YmFja2dyb3VuZDogY29sb3JzLnJlZDcwMFxuXHR9XG59XG5cbmNvbnN0IFBhcGVyQnRuID0gKHByb3BzKSA9PiA8YSBocmVmPXtwcm9wcy5ocmVmfSB0YXJnZXQ9J19ibGFuayc+PGJ1dHRvbiBzdHlsZT17c3R5bGV9Pntwcm9wcy5jaGlsZHJlbn08L2J1dHRvbj48L2E+XG5cblBhcGVyQnRuLmRlZmF1bHRQcm9wcyA9IHtcblx0c3R5bGU6IHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShQYXBlckJ0bilcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5jb25zdCBzdHlsZSA9IHtcblx0d2lkdGg6ICcxMDAlJyxcblx0Ym94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG5cdHBhZGRpbmc6IDIwXG59XG5cbmNvbnN0IFBhcGVyQ29udGVudCA9IChwcm9wcykgPT4gPGRpdiBzdHlsZT17c3R5bGV9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKFBhcGVyQ29udGVudClcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uLy4uL2xpYi9jb2xvcnMnXG5cbmNvbnN0IHN0eWxlID0ge1xuXHR3aWR0aDogJzEwMCUnLFxuXHRkaXNwbGF5OiAnYmxvY2snLFxuXHRmb250U2l6ZTogJzFyZW0nLFxuXHRmb250V2VpZ2h0OiAzMDAsXG5cdG1hcmdpbjogMCxcblx0cGFkZGluZzogJzEwcHggMjBweCcsXG5cdGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuXHRiYWNrZ3JvdW5kOiAnIzFiMTcxOCcsXG5cdGNvbG9yOiBjb2xvcnMud2hpdGVcbn1cblxuY29uc3QgUGFwZXJIZWFkZXIgPSAocHJvcHMpID0+IDxoMSBzdHlsZT17c3R5bGV9Pntwcm9wcy5jaGlsZHJlbn08L2gxPlxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oUGFwZXJIZWFkZXIpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuY29uc3Qgc3R5bGUgPSB7XG5cdHdpZHRoOiAnMTAwJScsXG5cdGRpc3BsYXk6ICdibG9jaydcbn1cblxuY29uc3QgUGFwZXJJbWcgPSAocHJvcHMpID0+IDxpbWcgc3JjPXtwcm9wcy5zcmN9IHN0eWxlPXtzdHlsZX0gLz5cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKFBhcGVySW1nKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmNvbnN0IHN0eWxlcyA9IHtcblx0Y29udGFpbmVyOiB7XG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRmb250V2VpZ2h0OiAzMDAsXG5cdFx0bWFyZ2luQm90dG9tOiAxMCxcblx0XHRmbG9hdDogJ2xlZnQnXG5cdH0sXG5cdGgyOiB7XG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRtYXJnaW46IDAsXG5cdFx0cGFkZGluZzogMCxcblx0XHRmb250U2l6ZTogJy44cmVtJyxcblx0XHRmb250V2VpZ2h0OiA0MDBcblx0fSxcblx0dHh0OiB7XG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRmb250U2l6ZTogJy44cmVtJyxcblx0XHR3b3JkV3JhcDogJ2JyZWFrLXdvcmQnXG5cdH1cbn1cblxuY29uc3QgUGFwZXJMaSA9IChwcm9wcykgPT4gPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+PGgyIHN0eWxlPXtzdHlsZXMuaDJ9Pntwcm9wcy5oZWFkfTwvaDI+PGRpdiBzdHlsZT17c3R5bGVzLnR4dH0+e3Byb3BzLmNoaWxkcmVufTwvZGl2PjwvZGl2PlxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oUGFwZXJMaSlcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uLy4uL2xpYi9jb2xvcnMnXG5cbmNvbnN0IHN0eWxlID0ge1xuXHR3aWR0aDogJzEwMCUnLFxuXHRkaXNwbGF5OiAnYmxvY2snLFxuXHRiYWNrZ3JvdW5kOiBjb2xvcnMuZ3JleTIwMCxcblx0aGVpZ2h0OiAxLFxuXHRtYXJnaW46ICcxMHB4IDAgMjBweCAwJ1xufVxuXG5jb25zdCBQYXBlckxpbmUgPSAocHJvcHMpID0+IDxkaXYgc3R5bGU9e3N0eWxlfSAvPlxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oUGFwZXJMaW5lKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmNvbnN0IHN0eWxlID0ge1xuXHR3aWR0aDogJzEwMCUnLFxuXHRkaXNwbGF5OiAnYmxvY2snXG59XG5cbmNvbnN0IFBhcGVyVWwgPSAocHJvcHMpID0+IDxkaXYgY2xhc3NOYW1lPSdjbGVhcicgc3R5bGU9e3N0eWxlfT57cHJvcHMuY2hpbGRyZW59PC9kaXY+XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShQYXBlclVsKVxuIiwiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uLy4uL2xpYi9jb2xvcnMnXG5pbXBvcnQgRW50aXR5U2VydmljZSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9FbnRpdHkuU2VydmljZSdcbmltcG9ydCBGMVNlcnZpY2UgZnJvbSAnLi4vLi4vc2VydmljZXMvRjEuU2VydmljZSdcbmltcG9ydCBVdGlscyBmcm9tICcuLi8uLi9saWIvVXRpbHMnXG5cbmltcG9ydCBQYXBlciBmcm9tICcuL1BhcGVyJ1xuaW1wb3J0IFBhcGVyQ29udGVudCBmcm9tICcuL1BhcGVyQ29udGVudCdcbmltcG9ydCBQYXBlckltZyBmcm9tICcuL1BhcGVySW1nJ1xuaW1wb3J0IFBhcGVySGVhZGVyIGZyb20gJy4vUGFwZXJIZWFkZXInXG5pbXBvcnQgUGFwZXJVbCBmcm9tICcuL1BhcGVyVWwnXG5pbXBvcnQgUGFwZXJMaSBmcm9tICcuL1BhcGVyTGknXG5pbXBvcnQgUGFwZXJMaW5lIGZyb20gJy4vUGFwZXJMaW5lJ1xuaW1wb3J0IFBhcGVyQnRuIGZyb20gJy4vUGFwZXJCdG4nXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJ1xuaW1wb3J0IENlbnRlckNvbnRhaW5lciBmcm9tICcuL0NlbnRlckNvbnRhaW5lcidcblxuY29uc3QgZXhjbHVkZSA9IFsndGh1bWJuYWlsJywgJ2RlcGljdGlvbicsICdiaXJ0aFBsYWNlJywgJ3dpa2lQYWdlSUQnLCAnYWJzdHJhY3QnLCAnbG9jYXRpb24nXVxuXG5jb25zdCBzdHlsZXMgPSB7XG5cdHJlbG9hZDoge1xuXHRcdGN1cnNvcjogJ3BvaW50ZXInLFxuXHRcdCc6aG92ZXInOiB7XG5cdFx0XHRjb2xvcjogY29sb3JzLnJlZDUwMFxuXHRcdH1cblx0fVxufVxuXG5jbGFzcyBQcm9maWxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0ZW50aXR5OiBudWxsLFxuXHRcdFx0ZXJyOiBmYWxzZVxuXHRcdH1cblx0XHR0aGlzLnJlbG9hZCA9IHRoaXMucmVsb2FkLmJpbmQodGhpcylcblx0fVxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0aWYodGhpcy5wcm9wcy5lbnRpdHkuZGF0YSkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7ZW50aXR5OiB0aGlzLnByb3BzLmVudGl0eS5kYXRhfSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5mZXRjaFNwYXJxbCgpXG5cdFx0fVxuXHR9XG5cdHJlbG9hZCgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGVudGl0eTogbnVsbCxcblx0XHRcdGVycjogZmFsc2Vcblx0XHR9KVxuXHRcdHRoaXMuZmV0Y2hTcGFycWwoKVxuXHR9XG5cdGZldGNoU3BhcnFsKCkge1xuXHRcdEVudGl0eVNlcnZpY2UuZ2V0RW50aXR5KHRoaXMucHJvcHMuZW50aXR5LCAoZXJyLCByZXMpID0+IHtcblx0XHRcdGlmKGVyciB8fCAhcmVzLmJvZHkucmVzdWx0cy5iaW5kaW5ncy5sZW5ndGgpIHJldHVybiB0aGlzLmZldGNoQXBpKClcblx0XHRcdHRoaXMuc2V0U3RhdGUoe2VudGl0eTogcmVzLmJvZHkucmVzdWx0cy5iaW5kaW5nc1swXX0pXG5cdFx0fSlcblx0fVxuXHRmZXRjaEFwaSgpIHtcblx0XHRGMVNlcnZpY2UuZ2V0RW50aXR5KHRoaXMucHJvcHMuZW50aXR5LCAoZXJyLCByZXMpID0+IHtcblx0XHRcdGlmKGVycikgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe2VudGl0eTogbnVsbCwgZXJyOiB0cnVlfSlcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRlbnRpdHk6IHJlcyxcblx0XHRcdFx0ZXJyOiBmYWxzZVxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cdHJlbmRlckxvYWRlcigpIHtcblx0XHRyZXR1cm4gPFBhcGVyPjxQYXBlckNvbnRlbnQ+PENlbnRlckNvbnRhaW5lcj48TG9hZGVyIC8+PC9DZW50ZXJDb250YWluZXI+PC9QYXBlckNvbnRlbnQ+PC9QYXBlcj5cblx0fVxuXHRyZW5kZXJDb250ZW50KCkge1xuXHRcdGxldCB7ZW50aXR5fSA9IHRoaXMuc3RhdGVcblx0XHRsZXQgaW1nID0gXy5oYXMoZW50aXR5LCAnZGVwaWN0aW9uJykgPyA8UGFwZXJJbWcgc3JjPXtlbnRpdHkuZGVwaWN0aW9uLnZhbHVlfSAvPiA6IG51bGxcblx0XHRsZXQgaHJlZiA9IF8uaGFzKGVudGl0eSwgJ3dpa2lQYWdlSUQnKSA/IDxkaXY+PFBhcGVyTGluZSAvPjxQYXBlckJ0biBocmVmPXtgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnLz9jdXJpZD0ke2VudGl0eS53aWtpUGFnZUlELnZhbHVlfWB9PlJlYWQgTW9yZTwvUGFwZXJCdG4+PC9kaXY+IDogbnVsbFxuXHRcdGxldCBrZXlzID0gXyhlbnRpdHkpLmtleXMoKS5maWx0ZXIoayA9PiBfLmluZGV4T2YoZXhjbHVkZSwgayk9PS0xKS52YWx1ZSgpXG5cdFx0cmV0dXJuIChcblx0XHRcdDxQYXBlcj5cblx0XHRcdFx0e2ltZ31cblx0XHRcdFx0PFBhcGVySGVhZGVyPnt0aGlzLnByb3BzLmVudGl0eS5uYW1lfTwvUGFwZXJIZWFkZXI+XG5cdFx0XHRcdDxQYXBlckNvbnRlbnQ+XG5cdFx0XHRcdFx0PFBhcGVyVWw+XG5cdFx0XHRcdFx0XHR7a2V5cy5tYXAoayA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiA8UGFwZXJMaSBrZXk9e2Ake3RoaXMucHJvcHMuZW50aXR5Ll9pZH0tJHtrfWB9IGhlYWQ9e1V0aWxzLmNhcGl0YWxpemUoayl9PntVdGlscy5mb3JtYXRFbnRpdHlTdHJpbmcoZW50aXR5W2tdLnZhbHVlKX08L1BhcGVyTGk+XG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8L1BhcGVyVWw+XG5cdFx0XHRcdFx0e2hyZWZ9XG5cdFx0XHRcdDwvUGFwZXJDb250ZW50PlxuXHRcdFx0PC9QYXBlcj5cblx0XHQpXG5cdH1cblx0cmVuZGVyQWdhaW5CdG4oKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxQYXBlcj5cblx0XHRcdFx0PFBhcGVyQ29udGVudD5cblx0XHRcdFx0XHQ8UGFwZXJIZWFkZXI+e3RoaXMucHJvcHMuZW50aXR5Lm5hbWV9PC9QYXBlckhlYWRlcj5cblx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17c3R5bGVzLnJlbG9hZH0gb25DbGljaz17dGhpcy5yZWxvYWR9PkNvdWxkIG5vdCBmZXRjaCBkYXRhLiBDbGljayB0byB0cnkgYWdhaW48L3NwYW4+XG5cdFx0XHRcdDwvUGFwZXJDb250ZW50PlxuXHRcdFx0PC9QYXBlcj5cblx0XHQpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGlmKHRoaXMuc3RhdGUuZXJyKSByZXR1cm4gdGhpcy5yZW5kZXJBZ2FpbkJ0bigpXG5cdFx0aWYoIXRoaXMuc3RhdGUuZW50aXR5KSByZXR1cm4gdGhpcy5yZW5kZXJMb2FkZXIoKVxuXHRcdHJldHVybiB0aGlzLnJlbmRlckNvbnRlbnQoKVxuXHR9XG59XG5cblByb2ZpbGUucHJvcFR5cGVzID0ge1xuXHRlbnRpdHk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oUHJvZmlsZSlcbiIsImltcG9ydCBSZWFjdCwge1Byb3BUeXBlc30gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi9saWIvY29sb3JzJ1xuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGNvbnRhaW5lcjoge1xuXHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0aGVpZ2h0OiAnMTAwJScsXG5cdFx0cG9zaXRpb246ICdyZWxhdGl2ZScsXG5cdFx0YmFja2dyb3VuZDogY29sb3JzLndoaXRlLFxuXHRcdG92ZXJmbG93OiAnaGlkZGVuJ1xuXHR9LFxuXHRpbnBDb250YWluZXI6IHtcblx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcblx0XHR0b3A6IDAsXG5cdFx0bGVmdDogMCxcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdGhlaWdodDogJzEwMCUnLFxuXHRcdGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuXHRcdGJhY2tncm91bmQ6ICdub25lJyxcblx0XHRib3JkZXI6IGAxcHggc29saWQgJHtjb2xvcnMuZ3JleTUwMH1gLFxuXHRcdGZvbnRXZWlnaHQ6IDMwMCxcblx0XHRwYWRkaW5nOiAnNXB4IDQ1cHggNXB4IDVweCcsXG5cdFx0Zm9udFNpemU6ICcxcmVtJyxcblx0XHR0ZXh0QWxpZ246ICdsZWZ0Jyxcblx0XHRmb250RmFtaWx5OiAnUm9ib3RvJyxcblx0XHRtYXJnaW46IDAsXG5cdFx0Jzpmb2N1cyc6IHtcblx0XHRcdG91dGxpbmU6ICdub25lJyxcblx0XHRcdGJvcmRlcjogYDFweCBzb2xpZCAke2NvbG9ycy5ncmV5ODAwfWBcblx0XHR9XG5cdH0sXG5cdHJlY29tbWVuZDoge1xuXHRcdGNvbG9yOiBjb2xvcnMuZ3JleTUwMCxcblx0XHRwYWRkaW5nVG9wOiA5XG5cdH0sXG5cdGVhc2U6IHtcblx0XHR0cmFuc2l0aW9uOiAnYWxsIDAuMXMgZWFzZS1pbi1vdXQnXG5cdH0sXG5cdHdoaXRlU3BhY2U6IHtcblx0XHRjb2xvcjogY29sb3JzLndoaXRlXG5cdH0sXG5cdGljb246IHtcblx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcblx0XHR3aWR0aDogNDAsXG5cdFx0aGVpZ2h0OiA0MCxcblx0XHR0b3A6IDAsXG5cdFx0cmlnaHQ6IDAsXG5cdFx0ZGlzcGxheTogJ2Jsb2NrJyxcblx0XHRmb250U2l6ZTogJzFlbScsXG5cdFx0YmFja2dyb3VuZDogY29sb3JzLmdyZXk4MDAsXG5cdFx0Y29sb3I6IGNvbG9ycy53aGl0ZSxcblx0XHRib3JkZXI6ICdub25lJyxcblx0XHRwYWRkaW5nOiAwLFxuXHRcdGN1cnNvcjogJ3BvaW50ZXInLFxuXHRcdCc6aG92ZXInOiB7XG5cdFx0XHRjb2xvcjogY29sb3JzLmdyZXk1MDBcblx0XHR9XG5cdH1cbn1cblxuY2xhc3MgU2VhcmNoSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMub25LZXkgPSB0aGlzLm9uS2V5LmJpbmQodGhpcylcblx0XHR0aGlzLm9uS2V5RG93biA9IHRoaXMub25LZXlEb3duLmJpbmQodGhpcylcblx0fVxuXHRvbktleShlKSB7XG5cdFx0aWYoZS5rZXkgPT0gJ0VudGVyJykgdGhpcy5wcm9wcy5vbkVudGVyKClcblx0fVxuXHRvbktleURvd24oZSkge1xuXHRcdGlmKGUua2V5ID09ICdUYWInKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdHRoaXMucHJvcHMub25UYWIoKVxuXHRcdH1cblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e1tzdHlsZXMuY29udGFpbmVyLCB0aGlzLnByb3BzLnN0eWxlXX0+XG5cdFx0XHRcdDxkaXYgc3R5bGU9e1tzdHlsZXMuaW5wQ29udGFpbmVyLCBzdHlsZXMucmVjb21tZW5kLCB0aGlzLnByb3BzLmlucFN0eWxlXX0+PHNwYW4gc3R5bGU9e3N0eWxlcy53aGl0ZVNwYWNlfT57dGhpcy5wcm9wcy52YWx1ZX08L3NwYW4+e3RoaXMucHJvcHMucmVjb21tZW5kfTwvZGl2PlxuXHRcdFx0XHQ8aW5wdXQga2V5PSdpbnB1dFNyYycgdHlwZT0ndGV4dCcgc3R5bGU9e1tzdHlsZXMuZWFzZSwgc3R5bGVzLmlucENvbnRhaW5lciwgdGhpcy5wcm9wcy5pbnBTdHlsZV19IHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfSBvbkNoYW5nZT17ZSA9PiB0aGlzLnByb3BzLm9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX0gb25LZXlQcmVzcz17dGhpcy5vbktleX0gb25LZXlEb3duPXt0aGlzLm9uS2V5RG93bn0gLz5cblx0XHRcdFx0PGJ1dHRvbiBzdHlsZT17W3N0eWxlcy5pY29uLCBzdHlsZXMuZWFzZV19IGtleT0naW50ZXJuYWxTcmNCdXR0b24nIG9uQ2xpY2s9e2UgPT4gdGhpcy5wcm9wcy5vbkVudGVyKCl9PjxpIGNsYXNzTmFtZT0nZmEgZmEtc2VhcmNoJyAvPjwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cblNlYXJjaElucHV0LmRlZmF1bHRQcm9wcyA9IHtcblx0c3R5bGU6IHt9LFxuXHR2YWx1ZTogJycsXG5cdHJlY29tbWVuZDogJycsXG5cdGlucFN0eWxlOiB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oU2VhcmNoSW5wdXQpXG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgYXN5bmMgZnJvbSAnYXN5bmMnXG5pbXBvcnQgQ29tYmluYXRvcmljcyBmcm9tICdqcy1jb21iaW5hdG9yaWNzJ1xuaW1wb3J0IHtzcGVjaWFsS2V5d29yZHN9IGZyb20gJy4vS2V5d29yZHMnXG5cbmltcG9ydCBVdGlscyBmcm9tICcuL1V0aWxzJ1xuXG5jbGFzcyBBbmFseXNlciB7XG5cdHN0YXRpYyBwYXJzZUVudGl0aWVzKHF1ZXJ5LCBlbnRpdGllcywgY2IpIHtcblx0XHRsZXQgZGF0ZXMgPSBfLmZpbHRlcihlbnRpdGllcywgZSA9PiBlLnR5cGU9PSdkYXRlJylcblx0XHRsZXQgX3Byb2ZpbGVzID0gXy5maWx0ZXIoZW50aXRpZXMsIGUgPT4gZS50eXBlIT0nZGF0ZScpXG5cdFx0QW5hbHlzZXIuZXZhbHVhdGVQcm9maWxlcyhxdWVyeSwgX3Byb2ZpbGVzLCBwcm9maWxlcyA9PiB7XG5cdFx0XHRBbmFseXNlci5kYXRhQ2FzZShwcm9maWxlcywgZGF0ZXMsIHN1bW1hcmllcyA9PiBjYih7ZGF0ZXMsIHByb2ZpbGVzfSkpXG5cdFx0fSlcblx0fVxuXG5cdHN0YXRpYyBldmFsdWF0ZVByb2ZpbGVzKHF1ZXJ5LCBwcm9maWxlcywgY2IpIHtcblx0XHRsZXQga2V5cyA9IF8ocXVlcnkuc3BsaXQoJyAnKSkubWFwKGsgPT4gXy5kZWJ1cnIoay50b0xvd2VyQ2FzZSgpKSkudW5pcSgpLnZhbHVlKClcblx0XHRsZXQgY29tYmluYXRpb25zID0gVXRpbHMubmF0dXJhbEtleXdvcmRDb21iaW5hdGlvbnMoa2V5cylcblx0XHRsZXQgcHMgPSBfKHByb2ZpbGVzKS5tYXAocCA9PiB7XG5cdFx0XHRsZXQga2V5d29yZHMgPSBfKFV0aWxzLm5hdHVyYWxLZXl3b3JkQ29tYmluYXRpb25zKHAua2V5d29yZHMpKS5mbGF0dGVuRGVlcCgpLm1hcChrID0+IF8uZGVidXJyKGspKS51bmlxKCkudmFsdWUoKVxuXHRcdFx0bGV0IGludGVyc2VjdCA9IF8uaW50ZXJzZWN0aW9uKGtleXMsIGtleXdvcmRzKVxuXHRcdFx0cC5jb25maWRlbnQgPSBpbnRlcnNlY3QubGVuZ3RoXG5cdFx0XHRwLmludGVyc2VjdCA9IGludGVyc2VjdFxuXHRcdFx0aWYoXy5pbmRleE9mKGNvbWJpbmF0aW9ucywgXy5kZWJ1cnIocC5uYW1lLnRvTG93ZXJDYXNlKCkpKT4tMSkgcC5jb25maWRlbnQ9MTAwXG5cdFx0XHRyZXR1cm4gcFxuXHRcdH0pLm9yZGVyQnkoWydjb25maWRlbnQnLCAnbmFtZSddLCBbJ2Rlc2MnLCAnYXNjJ10pLnZhbHVlKClcblx0XHRBbmFseXNlci5jcmVhdGVEZXBlbmRlbmN5R3JhcGgocHMsIGNiKVxuXHR9XG5cblx0c3RhdGljIGNyZWF0ZURlcGVuZGVuY3lHcmFwaChwcm9maWxlcywgY2IpIHtcblx0XHRsZXQgcHJvZnMgPSBfLmdyb3VwQnkocHJvZmlsZXMsICd0eXBlJylcblx0XHRwcm9mcy5fa2V5cyA9IF8ua2V5cyhwcm9mcylcblx0XHRwcm9mcyA9IF8ubWFwKHByb2ZzLl9rZXlzLCBrID0+IHtcblx0XHRcdGxldCBwID0gcHJvZnNba11cblx0XHRcdGxldCBncm91cCA9IF8uZ3JvdXBCeShwLCAnaW50ZXJzZWN0Jylcblx0XHRcdGxldCBrZXlzID0gXy5rZXlzKGdyb3VwKVxuXHRcdFx0cmV0dXJuIHtfa2V5czoga2V5cywgZGF0YTogZ3JvdXB9XG5cdFx0fSlcblx0XHRwcm9mcyA9IF8ocHJvZnMpLm1hcChwID0+IHtcblx0XHRcdHJldHVybiBfKHAuX2tleXMpLm1hcChrID0+IHtcblx0XHRcdFx0bGV0IHByID0gcC5kYXRhW2tdXG5cdFx0XHRcdGxldCBtYXggPSBfLm1heEJ5KHByLCAnY29uZmlkZW50JykuY29uZmlkZW50XG5cdFx0XHRcdHJldHVybiBfKHByKS5maWx0ZXIoX3AgPT4gX3AuY29uZmlkZW50ID09IG1heCkuZmxhdHRlbigpLnZhbHVlKClcblx0XHRcdH0pLmZsYXR0ZW4oKS52YWx1ZSgpXG5cdFx0fSkuZmxhdHRlbigpLm9yZGVyQnkoWydjb25maWRlbnQnLCAndHlwZScsICduYW1lJ10sIFsnZGVzYycsICdhc2MnLCAnYXNjJ10pLnVuaXFCeSgnX2lkJykudmFsdWUoKVxuXHRcdGNiKHByb2ZzKVxuXHR9XG5cblx0c3RhdGljIGRhdGFDYXNlKHByb2ZpbGVzLCBkYXRlcywgY2IpIHtcblx0XHRsZXQgc3VtbWFyaWVzID0gW11cblx0XHRsZXQgZ3JvdXBlZCA9IF8uZ3JvdXBCeShwcm9maWxlcywgJ3R5cGUnKVxuXHRcdGxldCBrZXlzID0gXy5rZXlzKGdyb3VwZWQpXG5cdFx0aWYoZGF0ZXMubGVuZ3RoKSB7XG5cdFx0XHRpZihwcm9maWxlcy5sZW5ndGgpIHtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0fVxuXHRcdH1cblx0XHRjYihzdW1tYXJpZXMpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5hbHlzZXJcbiIsImV4cG9ydCBjb25zdCBzcGVjaWFsS2V5d29yZHMgPSBbe1xuXHRrZXk6ICdkcml2ZXInLFxuXHR3b3JkczogWydkcml2ZXInLCAnZHJpdmVycyddXG59LCB7XG5cdGtleTogJ3RlYW0nLFxuXHR3b3JkczogWydjb25zdHJ1Y3RvcicsICdjb25zdHJ1Y3RvcnMnLCAndGVhbScsICd0ZWFtcyddXG59XVxuIiwiaW1wb3J0IHtET019IGZyb20gJ3JlYWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5cbmNsYXNzIFV0aWxzIHtcblx0c3RhdGljIGNhcGl0YWxpemUoc3RyKSB7XG5cdFx0cmV0dXJuIF8oc3RyLnNwbGl0KC8oPz1bQS1aXSkvKSkubWFwKHR4dCA9PiB0eHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eHQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKCkpLnZhbHVlKCkuam9pbignICcpXG5cdH1cblxuXHRzdGF0aWMgZm9ybWF0RW50aXR5U3RyaW5nKGUpIHtcblx0XHRpZihlLnN0YXJ0c1dpdGgoJ2h0dHA6Ly8nKSB8fCBlLnN0YXJ0c1dpdGgoJ2h0dHBzOi8vJykpIHtcblx0XHRcdHJldHVybiBET00uYSh7aHJlZjogZSwgdGFyZ2V0OiAnX2JsYW5rJ30sIGUpXG5cdFx0fVxuXHRcdGlmKC9eKFxcZHs0fSktKFxcZHsxLDJ9KS0oXFxkezEsMn0pJC8udGVzdChlKSkge1xuXHRcdFx0cmV0dXJuIG1vbWVudChlLCAnWVlZWS1NTS1ERCcpLmZvcm1hdCgnTEwnKVxuXHRcdH1cblx0XHRyZXR1cm4gZVxuXHR9XG5cblx0c3RhdGljIG5hdHVyYWxLZXl3b3JkQ29tYmluYXRpb25zKGtleXMpIHtcblx0XHRsZXQgY2h1bmtzID0ga2V5cy5sZW5ndGhcblx0XHRsZXQgcmV0ID0gW11cblx0XHRmb3IobGV0IHg9MTt4PD1jaHVua3M7eCsrKSB7XG5cdFx0XHRmb3IobGV0IHk9MTt5PD0oY2h1bmtzLXgrMSk7eSsrKSB7XG5cdFx0XHRcdHJldC5wdXNoKF8uc2xpY2Uoa2V5cywgeS0xLCAoeS0xK3gpKS5qb2luKCcgJykpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXRcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBVdGlsc1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICByZWQ1MDogJyNmZmViZWUnLFxuICByZWQxMDA6ICcjZmZjZGQyJyxcbiAgcmVkMjAwOiAnI2VmOWE5YScsXG4gIHJlZDMwMDogJyNlNTczNzMnLFxuICByZWQ0MDA6ICcjZWY1MzUwJyxcbiAgcmVkNTAwOiAnI2Y0NDMzNicsXG4gIHJlZDYwMDogJyNlNTM5MzUnLFxuICByZWQ3MDA6ICcjZDMyZjJmJyxcbiAgcmVkODAwOiAnI2M2MjgyOCcsXG4gIHJlZDkwMDogJyNiNzFjMWMnLFxuICByZWRBMTAwOiAnI2ZmOGE4MCcsXG4gIHJlZEEyMDA6ICcjZmY1MjUyJyxcbiAgcmVkQTQwMDogJyNmZjE3NDQnLFxuICByZWRBNzAwOiAnI2Q1MDAwMCcsXG5cbiAgcGluazUwOiAnI2ZjZTRlYycsXG4gIHBpbmsxMDA6ICcjZjhiYmQwJyxcbiAgcGluazIwMDogJyNmNDhmYjEnLFxuICBwaW5rMzAwOiAnI2YwNjI5MicsXG4gIHBpbms0MDA6ICcjZWM0MDdhJyxcbiAgcGluazUwMDogJyNlOTFlNjMnLFxuICBwaW5rNjAwOiAnI2Q4MWI2MCcsXG4gIHBpbms3MDA6ICcjYzIxODViJyxcbiAgcGluazgwMDogJyNhZDE0NTcnLFxuICBwaW5rOTAwOiAnIzg4MGU0ZicsXG4gIHBpbmtBMTAwOiAnI2ZmODBhYicsXG4gIHBpbmtBMjAwOiAnI2ZmNDA4MScsXG4gIHBpbmtBNDAwOiAnI2Y1MDA1NycsXG4gIHBpbmtBNzAwOiAnI2M1MTE2MicsXG5cbiAgcHVycGxlNTA6ICcjZjNlNWY1JyxcbiAgcHVycGxlMTAwOiAnI2UxYmVlNycsXG4gIHB1cnBsZTIwMDogJyNjZTkzZDgnLFxuICBwdXJwbGUzMDA6ICcjYmE2OGM4JyxcbiAgcHVycGxlNDAwOiAnI2FiNDdiYycsXG4gIHB1cnBsZTUwMDogJyM5YzI3YjAnLFxuICBwdXJwbGU2MDA6ICcjOGUyNGFhJyxcbiAgcHVycGxlNzAwOiAnIzdiMWZhMicsXG4gIHB1cnBsZTgwMDogJyM2YTFiOWEnLFxuICBwdXJwbGU5MDA6ICcjNGExNDhjJyxcbiAgcHVycGxlQTEwMDogJyNlYTgwZmMnLFxuICBwdXJwbGVBMjAwOiAnI2UwNDBmYicsXG4gIHB1cnBsZUE0MDA6ICcjZDUwMGY5JyxcbiAgcHVycGxlQTcwMDogJyNhYTAwZmYnLFxuXG4gIGRlZXBQdXJwbGU1MDogJyNlZGU3ZjYnLFxuICBkZWVwUHVycGxlMTAwOiAnI2QxYzRlOScsXG4gIGRlZXBQdXJwbGUyMDA6ICcjYjM5ZGRiJyxcbiAgZGVlcFB1cnBsZTMwMDogJyM5NTc1Y2QnLFxuICBkZWVwUHVycGxlNDAwOiAnIzdlNTdjMicsXG4gIGRlZXBQdXJwbGU1MDA6ICcjNjczYWI3JyxcbiAgZGVlcFB1cnBsZTYwMDogJyM1ZTM1YjEnLFxuICBkZWVwUHVycGxlNzAwOiAnIzUxMmRhOCcsXG4gIGRlZXBQdXJwbGU4MDA6ICcjNDUyN2EwJyxcbiAgZGVlcFB1cnBsZTkwMDogJyMzMTFiOTInLFxuICBkZWVwUHVycGxlQTEwMDogJyNiMzg4ZmYnLFxuICBkZWVwUHVycGxlQTIwMDogJyM3YzRkZmYnLFxuICBkZWVwUHVycGxlQTQwMDogJyM2NTFmZmYnLFxuICBkZWVwUHVycGxlQTcwMDogJyM2MjAwZWEnLFxuXG4gIGluZGlnbzUwOiAnI2U4ZWFmNicsXG4gIGluZGlnbzEwMDogJyNjNWNhZTknLFxuICBpbmRpZ28yMDA6ICcjOWZhOGRhJyxcbiAgaW5kaWdvMzAwOiAnIzc5ODZjYicsXG4gIGluZGlnbzQwMDogJyM1YzZiYzAnLFxuICBpbmRpZ281MDA6ICcjM2Y1MWI1JyxcbiAgaW5kaWdvNjAwOiAnIzM5NDlhYicsXG4gIGluZGlnbzcwMDogJyMzMDNmOWYnLFxuICBpbmRpZ284MDA6ICcjMjgzNTkzJyxcbiAgaW5kaWdvOTAwOiAnIzFhMjM3ZScsXG4gIGluZGlnb0ExMDA6ICcjOGM5ZWZmJyxcbiAgaW5kaWdvQTIwMDogJyM1MzZkZmUnLFxuICBpbmRpZ29BNDAwOiAnIzNkNWFmZScsXG4gIGluZGlnb0E3MDA6ICcjMzA0ZmZlJyxcblxuICBibHVlNTA6ICcjZTNmMmZkJyxcbiAgYmx1ZTEwMDogJyNiYmRlZmInLFxuICBibHVlMjAwOiAnIzkwY2FmOScsXG4gIGJsdWUzMDA6ICcjNjRiNWY2JyxcbiAgYmx1ZTQwMDogJyM0MmE1ZjUnLFxuICBibHVlNTAwOiAnIzIxOTZmMycsXG4gIGJsdWU2MDA6ICcjMWU4OGU1JyxcbiAgYmx1ZTcwMDogJyMxOTc2ZDInLFxuICBibHVlODAwOiAnIzE1NjVjMCcsXG4gIGJsdWU5MDA6ICcjMGQ0N2ExJyxcbiAgYmx1ZUExMDA6ICcjODJiMWZmJyxcbiAgYmx1ZUEyMDA6ICcjNDQ4YWZmJyxcbiAgYmx1ZUE0MDA6ICcjMjk3OWZmJyxcbiAgYmx1ZUE3MDA6ICcjMjk2MmZmJyxcblxuICBsaWdodEJsdWU1MDogJyNlMWY1ZmUnLFxuICBsaWdodEJsdWUxMDA6ICcjYjNlNWZjJyxcbiAgbGlnaHRCbHVlMjAwOiAnIzgxZDRmYScsXG4gIGxpZ2h0Qmx1ZTMwMDogJyM0ZmMzZjcnLFxuICBsaWdodEJsdWU0MDA6ICcjMjliNmY2JyxcbiAgbGlnaHRCbHVlNTAwOiAnIzAzYTlmNCcsXG4gIGxpZ2h0Qmx1ZTYwMDogJyMwMzliZTUnLFxuICBsaWdodEJsdWU3MDA6ICcjMDI4OGQxJyxcbiAgbGlnaHRCbHVlODAwOiAnIzAyNzdiZCcsXG4gIGxpZ2h0Qmx1ZTkwMDogJyMwMTU3OWInLFxuICBsaWdodEJsdWVBMTAwOiAnIzgwZDhmZicsXG4gIGxpZ2h0Qmx1ZUEyMDA6ICcjNDBjNGZmJyxcbiAgbGlnaHRCbHVlQTQwMDogJyMwMGIwZmYnLFxuICBsaWdodEJsdWVBNzAwOiAnIzAwOTFlYScsXG5cbiAgY3lhbjUwOiAnI2UwZjdmYScsXG4gIGN5YW4xMDA6ICcjYjJlYmYyJyxcbiAgY3lhbjIwMDogJyM4MGRlZWEnLFxuICBjeWFuMzAwOiAnIzRkZDBlMScsXG4gIGN5YW40MDA6ICcjMjZjNmRhJyxcbiAgY3lhbjUwMDogJyMwMGJjZDQnLFxuICBjeWFuNjAwOiAnIzAwYWNjMScsXG4gIGN5YW43MDA6ICcjMDA5N2E3JyxcbiAgY3lhbjgwMDogJyMwMDgzOGYnLFxuICBjeWFuOTAwOiAnIzAwNjA2NCcsXG4gIGN5YW5BMTAwOiAnIzg0ZmZmZicsXG4gIGN5YW5BMjAwOiAnIzE4ZmZmZicsXG4gIGN5YW5BNDAwOiAnIzAwZTVmZicsXG4gIGN5YW5BNzAwOiAnIzAwYjhkNCcsXG5cbiAgdGVhbDUwOiAnI2UwZjJmMScsXG4gIHRlYWwxMDA6ICcjYjJkZmRiJyxcbiAgdGVhbDIwMDogJyM4MGNiYzQnLFxuICB0ZWFsMzAwOiAnIzRkYjZhYycsXG4gIHRlYWw0MDA6ICcjMjZhNjlhJyxcbiAgdGVhbDUwMDogJyMwMDk2ODgnLFxuICB0ZWFsNjAwOiAnIzAwODk3YicsXG4gIHRlYWw3MDA6ICcjMDA3OTZiJyxcbiAgdGVhbDgwMDogJyMwMDY5NWMnLFxuICB0ZWFsOTAwOiAnIzAwNGQ0MCcsXG4gIHRlYWxBMTAwOiAnI2E3ZmZlYicsXG4gIHRlYWxBMjAwOiAnIzY0ZmZkYScsXG4gIHRlYWxBNDAwOiAnIzFkZTliNicsXG4gIHRlYWxBNzAwOiAnIzAwYmZhNScsXG5cbiAgZ3JlZW41MDogJyNlOGY1ZTknLFxuICBncmVlbjEwMDogJyNjOGU2YzknLFxuICBncmVlbjIwMDogJyNhNWQ2YTcnLFxuICBncmVlbjMwMDogJyM4MWM3ODQnLFxuICBncmVlbjQwMDogJyM2NmJiNmEnLFxuICBncmVlbjUwMDogJyM0Y2FmNTAnLFxuICBncmVlbjYwMDogJyM0M2EwNDcnLFxuICBncmVlbjcwMDogJyMzODhlM2MnLFxuICBncmVlbjgwMDogJyMyZTdkMzInLFxuICBncmVlbjkwMDogJyMxYjVlMjAnLFxuICBncmVlbkExMDA6ICcjYjlmNmNhJyxcbiAgZ3JlZW5BMjAwOiAnIzY5ZjBhZScsXG4gIGdyZWVuQTQwMDogJyMwMGU2NzYnLFxuICBncmVlbkE3MDA6ICcjMDBjODUzJyxcblxuICBsaWdodEdyZWVuNTA6ICcjZjFmOGU5JyxcbiAgbGlnaHRHcmVlbjEwMDogJyNkY2VkYzgnLFxuICBsaWdodEdyZWVuMjAwOiAnI2M1ZTFhNScsXG4gIGxpZ2h0R3JlZW4zMDA6ICcjYWVkNTgxJyxcbiAgbGlnaHRHcmVlbjQwMDogJyM5Y2NjNjUnLFxuICBsaWdodEdyZWVuNTAwOiAnIzhiYzM0YScsXG4gIGxpZ2h0R3JlZW42MDA6ICcjN2NiMzQyJyxcbiAgbGlnaHRHcmVlbjcwMDogJyM2ODlmMzgnLFxuICBsaWdodEdyZWVuODAwOiAnIzU1OGIyZicsXG4gIGxpZ2h0R3JlZW45MDA6ICcjMzM2OTFlJyxcbiAgbGlnaHRHcmVlbkExMDA6ICcjY2NmZjkwJyxcbiAgbGlnaHRHcmVlbkEyMDA6ICcjYjJmZjU5JyxcbiAgbGlnaHRHcmVlbkE0MDA6ICcjNzZmZjAzJyxcbiAgbGlnaHRHcmVlbkE3MDA6ICcjNjRkZDE3JyxcblxuICBsaW1lNTA6ICcjZjlmYmU3JyxcbiAgbGltZTEwMDogJyNmMGY0YzMnLFxuICBsaW1lMjAwOiAnI2U2ZWU5YycsXG4gIGxpbWUzMDA6ICcjZGNlNzc1JyxcbiAgbGltZTQwMDogJyNkNGUxNTcnLFxuICBsaW1lNTAwOiAnI2NkZGMzOScsXG4gIGxpbWU2MDA6ICcjYzBjYTMzJyxcbiAgbGltZTcwMDogJyNhZmI0MmInLFxuICBsaW1lODAwOiAnIzllOWQyNCcsXG4gIGxpbWU5MDA6ICcjODI3NzE3JyxcbiAgbGltZUExMDA6ICcjZjRmZjgxJyxcbiAgbGltZUEyMDA6ICcjZWVmZjQxJyxcbiAgbGltZUE0MDA6ICcjYzZmZjAwJyxcbiAgbGltZUE3MDA6ICcjYWVlYTAwJyxcblxuICB5ZWxsb3c1MDogJyNmZmZkZTcnLFxuICB5ZWxsb3cxMDA6ICcjZmZmOWM0JyxcbiAgeWVsbG93MjAwOiAnI2ZmZjU5ZCcsXG4gIHllbGxvdzMwMDogJyNmZmYxNzYnLFxuICB5ZWxsb3c0MDA6ICcjZmZlZTU4JyxcbiAgeWVsbG93NTAwOiAnI2ZmZWIzYicsXG4gIHllbGxvdzYwMDogJyNmZGQ4MzUnLFxuICB5ZWxsb3c3MDA6ICcjZmJjMDJkJyxcbiAgeWVsbG93ODAwOiAnI2Y5YTgyNScsXG4gIHllbGxvdzkwMDogJyNmNTdmMTcnLFxuICB5ZWxsb3dBMTAwOiAnI2ZmZmY4ZCcsXG4gIHllbGxvd0EyMDA6ICcjZmZmZjAwJyxcbiAgeWVsbG93QTQwMDogJyNmZmVhMDAnLFxuICB5ZWxsb3dBNzAwOiAnI2ZmZDYwMCcsXG5cbiAgYW1iZXI1MDogJyNmZmY4ZTEnLFxuICBhbWJlcjEwMDogJyNmZmVjYjMnLFxuICBhbWJlcjIwMDogJyNmZmUwODInLFxuICBhbWJlcjMwMDogJyNmZmQ1NGYnLFxuICBhbWJlcjQwMDogJyNmZmNhMjgnLFxuICBhbWJlcjUwMDogJyNmZmMxMDcnLFxuICBhbWJlcjYwMDogJyNmZmIzMDAnLFxuICBhbWJlcjcwMDogJyNmZmEwMDAnLFxuICBhbWJlcjgwMDogJyNmZjhmMDAnLFxuICBhbWJlcjkwMDogJyNmZjZmMDAnLFxuICBhbWJlckExMDA6ICcjZmZlNTdmJyxcbiAgYW1iZXJBMjAwOiAnI2ZmZDc0MCcsXG4gIGFtYmVyQTQwMDogJyNmZmM0MDAnLFxuICBhbWJlckE3MDA6ICcjZmZhYjAwJyxcblxuICBvcmFuZ2U1MDogJyNmZmYzZTAnLFxuICBvcmFuZ2UxMDA6ICcjZmZlMGIyJyxcbiAgb3JhbmdlMjAwOiAnI2ZmY2M4MCcsXG4gIG9yYW5nZTMwMDogJyNmZmI3NGQnLFxuICBvcmFuZ2U0MDA6ICcjZmZhNzI2JyxcbiAgb3JhbmdlNTAwOiAnI2ZmOTgwMCcsXG4gIG9yYW5nZTYwMDogJyNmYjhjMDAnLFxuICBvcmFuZ2U3MDA6ICcjZjU3YzAwJyxcbiAgb3JhbmdlODAwOiAnI2VmNmMwMCcsXG4gIG9yYW5nZTkwMDogJyNlNjUxMDAnLFxuICBvcmFuZ2VBMTAwOiAnI2ZmZDE4MCcsXG4gIG9yYW5nZUEyMDA6ICcjZmZhYjQwJyxcbiAgb3JhbmdlQTQwMDogJyNmZjkxMDAnLFxuICBvcmFuZ2VBNzAwOiAnI2ZmNmQwMCcsXG5cbiAgZGVlcE9yYW5nZTUwOiAnI2ZiZTllNycsXG4gIGRlZXBPcmFuZ2UxMDA6ICcjZmZjY2JjJyxcbiAgZGVlcE9yYW5nZTIwMDogJyNmZmFiOTEnLFxuICBkZWVwT3JhbmdlMzAwOiAnI2ZmOGE2NScsXG4gIGRlZXBPcmFuZ2U0MDA6ICcjZmY3MDQzJyxcbiAgZGVlcE9yYW5nZTUwMDogJyNmZjU3MjInLFxuICBkZWVwT3JhbmdlNjAwOiAnI2Y0NTExZScsXG4gIGRlZXBPcmFuZ2U3MDA6ICcjZTY0YTE5JyxcbiAgZGVlcE9yYW5nZTgwMDogJyNkODQzMTUnLFxuICBkZWVwT3JhbmdlOTAwOiAnI2JmMzYwYycsXG4gIGRlZXBPcmFuZ2VBMTAwOiAnI2ZmOWU4MCcsXG4gIGRlZXBPcmFuZ2VBMjAwOiAnI2ZmNmU0MCcsXG4gIGRlZXBPcmFuZ2VBNDAwOiAnI2ZmM2QwMCcsXG4gIGRlZXBPcmFuZ2VBNzAwOiAnI2RkMmMwMCcsXG5cbiAgYnJvd241MDogJyNlZmViZTknLFxuICBicm93bjEwMDogJyNkN2NjYzgnLFxuICBicm93bjIwMDogJyNiY2FhYTQnLFxuICBicm93bjMwMDogJyNhMTg4N2YnLFxuICBicm93bjQwMDogJyM4ZDZlNjMnLFxuICBicm93bjUwMDogJyM3OTU1NDgnLFxuICBicm93bjYwMDogJyM2ZDRjNDEnLFxuICBicm93bjcwMDogJyM1ZDQwMzcnLFxuICBicm93bjgwMDogJyM0ZTM0MmUnLFxuICBicm93bjkwMDogJyMzZTI3MjMnLFxuXG4gIGJsdWVHcmV5NTA6ICcjZWNlZmYxJyxcbiAgYmx1ZUdyZXkxMDA6ICcjY2ZkOGRjJyxcbiAgYmx1ZUdyZXkyMDA6ICcjYjBiZWM1JyxcbiAgYmx1ZUdyZXkzMDA6ICcjOTBhNGFlJyxcbiAgYmx1ZUdyZXk0MDA6ICcjNzg5MDljJyxcbiAgYmx1ZUdyZXk1MDA6ICcjNjA3ZDhiJyxcbiAgYmx1ZUdyZXk2MDA6ICcjNTQ2ZTdhJyxcbiAgYmx1ZUdyZXk3MDA6ICcjNDU1YTY0JyxcbiAgYmx1ZUdyZXk4MDA6ICcjMzc0NzRmJyxcbiAgYmx1ZUdyZXk5MDA6ICcjMjYzMjM4JyxcblxuICBncmV5NTA6ICcjZmFmYWZhJyxcbiAgZ3JleTEwMDogJyNmNWY1ZjUnLFxuICBncmV5MjAwOiAnI2VlZWVlZScsXG4gIGdyZXkzMDA6ICcjZTBlMGUwJyxcbiAgZ3JleTQwMDogJyNiZGJkYmQnLFxuICBncmV5NTAwOiAnIzllOWU5ZScsXG4gIGdyZXk2MDA6ICcjNzU3NTc1JyxcbiAgZ3JleTcwMDogJyM2MTYxNjEnLFxuICBncmV5ODAwOiAnIzQyNDI0MicsXG4gIGdyZXk5MDA6ICcjMjEyMTIxJyxcblxuICBibGFjazogJyMwMDAwMDAnLFxuICB3aGl0ZTogJyNmZmZmZmYnLFxuXG4gIHRyYW5zcGFyZW50OiAncmdiYSgwLCAwLCAwLCAwKScsXG4gIGZ1bGxCbGFjazogJ3JnYmEoMCwgMCwgMCwgMSknLFxuICBkYXJrQmxhY2s6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJyxcbiAgbGlnaHRCbGFjazogJ3JnYmEoMCwgMCwgMCwgMC41NCknLFxuICBtaW5CbGFjazogJ3JnYmEoMCwgMCwgMCwgMC4yNiknLFxuICBmYWludEJsYWNrOiAncmdiYSgwLCAwLCAwLCAwLjEyKScsXG4gIGZ1bGxXaGl0ZTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxuICBkYXJrV2hpdGU6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODcpJyxcbiAgbGlnaHRXaGl0ZTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41NCknXG59XG4iLCJpbXBvcnQgJCBmcm9tICdzdXBlcmFnZW50J1xuXG5jbGFzcyBFbnRpdHlTZXJ2aWNlIHtcblx0c3RhdGljIGdldEVudGl0eShlbnRpdHksIGNiKSB7XG5cdFx0JC5wb3N0KCcvYWkvZW50aXR5Jylcblx0XHQuc2VuZChlbnRpdHkpXG5cdFx0LmVuZCgoZXJyLCByZXMpID0+IHtcblx0XHRcdGNiKGVyciwgcmVzKVxuXHRcdH0pXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW50aXR5U2VydmljZVxuIiwiaW1wb3J0ICQgZnJvbSAnc3VwZXJhZ2VudCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBhc3luYyBmcm9tICdhc3luYydcblxuY2xhc3MgRjFTZXJ2aWNlIHtcblx0c3RhdGljIGdldEVudGl0eShlbnRpdHksIGNiKSB7XG5cdFx0bGV0IHR5cGUgPSAnZHJpdmVycydcblx0XHRpZihlbnRpdHkudHlwZSA9PSAndHJhY2snKSB7XG5cdFx0XHR0eXBlID0gJ2NpcmN1aXRzJ1xuXHRcdH0gZWxzZSBpZihlbnRpdHkudHlwZSA9PSAndGVhbScpIHtcblx0XHRcdHR5cGUgPSAnY29uc3RydWN0b3JzJ1xuXHRcdH1cblx0XHQkLmdldChgaHR0cDovL2VyZ2FzdC5jb20vYXBpL2YxLyR7dHlwZX0vJHtlbnRpdHkuZXJnYXN0SUR9Lmpzb25gKVxuXHRcdC5lbmQoKGVyciwgcmVzKSA9PiB7XG5cdFx0XHRpZihlcnIpIHJldHVybiBjYihlcnIpXG5cdFx0XHRpZihlbnRpdHkudHlwZT09J2RyaXZlcicpIHtcblx0XHRcdFx0bGV0IGRhdGEgPSByZXMuYm9keS5NUkRhdGEuRHJpdmVyVGFibGUuRHJpdmVyc1xuXHRcdFx0XHRpZighZGF0YS5sZW5ndGgpIHJldHVybiBjYih0cnVlKVxuXHRcdFx0XHRkYXRhID0gXy5maXJzdChkYXRhKVxuXHRcdFx0XHRyZXR1cm4gY2IobnVsbCwge1xuXHRcdFx0XHRcdGdpdmVuTmFtZToge3ZhbHVlOiBkYXRhLmdpdmVuTmFtZSB8fCAnbi9hJ30sXG5cdFx0XHRcdFx0ZmFtaWx5TmFtZToge3ZhbHVlOiBkYXRhLmZhbWlseU5hbWUgfHwgJ24vYSd9LFxuXHRcdFx0XHRcdGNvZGU6IHt2YWx1ZTogZGF0YS5jb2RlIHx8ICduL2EnfSxcblx0XHRcdFx0XHRkYXRlT2ZCaXJ0aDoge3ZhbHVlOiBkYXRhLmRhdGVPZkJpcnRoIHx8ICduL2EnfSxcblx0XHRcdFx0XHRuYXRpb25hbGl0eToge3ZhbHVlOiBkYXRhLm5hdGlvbmFsaXR5IHx8ICduL2EnfSxcblx0XHRcdFx0XHRudW1iZXI6IHt2YWx1ZTogZGF0YS5wZXJtYW5lbnROdW1iZXIgfHwgJ24vYSd9LFxuXHRcdFx0XHRcdHVybDoge3ZhbHVlOiBkYXRhLnVybCB8fCAnbi9hJ31cblx0XHRcdFx0fSlcblx0XHRcdH0gZWxzZSBpZihlbnRpdHkudHlwZT09J3RyYWNrJykge1xuXHRcdFx0XHRsZXQgZGF0YSA9IHJlcy5ib2R5Lk1SRGF0YS5DaXJjdWl0VGFibGUuQ2lyY3VpdHNcblx0XHRcdFx0aWYoIWRhdGEubGVuZ3RoKSByZXR1cm4gY2IodHJ1ZSlcblx0XHRcdFx0ZGF0YSA9IF8uZmlyc3QoZGF0YSlcblx0XHRcdFx0cmV0dXJuIGNiKG51bGwsIHtcblx0XHRcdFx0XHRuYW1lOiB7dmFsdWU6IGRhdGEuY2lyY3VpdE5hbWUgfHwgJ24vYSd9LFxuXHRcdFx0XHRcdGNpdHk6IHt2YWx1ZTogZGF0YS5Mb2NhdGlvbi5jaXR5IHx8ICduL2EnfSxcblx0XHRcdFx0XHRjb3VudHJ5OiB7dmFsdWU6IGRhdGEuTG9jYXRpb24uY291bnRyeSB8fCAnbi9hJ30sXG5cdFx0XHRcdFx0dXJsOiB7dmFsdWU6IGRhdGEudXJsIHx8ICduL2EnfVxuXHRcdFx0XHR9KVxuXHRcdFx0fSBlbHNlIGlmKGVudGl0eS50eXBlPT0ndGVhbScpIHtcblx0XHRcdFx0bGV0IGRhdGEgPSByZXMuYm9keS5NUkRhdGEuQ29uc3RydWN0b3JUYWJsZS5Db25zdHJ1Y3RvcnNcblx0XHRcdFx0aWYoIWRhdGEubGVuZ3RoKSByZXR1cm4gY2IodHJ1ZSlcblx0XHRcdFx0ZGF0YSA9IF8uZmlyc3QoZGF0YSlcblx0XHRcdFx0cmV0dXJuIGNiKG51bGwsIHtcblx0XHRcdFx0XHRuYW1lOiB7dmFsdWU6IGRhdGEubmFtZSB8fCAnbi9hJ30sXG5cdFx0XHRcdFx0bmF0aW9uYWxpdHk6IHt2YWx1ZTogZGF0YS5uYXRpb25hbGl0eSB8fCAnbi9hJ30sXG5cdFx0XHRcdFx0dXJsOiB7dmFsdWU6IGRhdGEudXJsIHx8ICduL2EnfVxuXHRcdFx0XHR9KVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNiKHRydWUpXG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXG5cdHN0YXRpYyBnZXREcml2ZXJTZWFzb25SZXN1bHRzKHllYXIsIGNiKSB7XG5cdFx0RjFTZXJ2aWNlLmNhbGxBcGkoYGh0dHA6Ly9lcmdhc3QuY29tL2FwaS9mMS8ke3llYXJ9L2RyaXZlclN0YW5kaW5ncy5qc29uYCwgWydTdGFuZGluZ3NUYWJsZScsICdTdGFuZGluZ3NMaXN0cycsICdEcml2ZXJTdGFuZGluZ3MnXSwgY2IpXG5cdH1cblxuXHRzdGF0aWMgZ2V0VGVhbVNlYXNvblJlc3VsdHMoeWVhciwgY2IpIHtcblx0XHRGMVNlcnZpY2UuY2FsbEFwaShgaHR0cDovL2VyZ2FzdC5jb20vYXBpL2YxLyR7eWVhcn0vY29uc3RydWN0b3JTdGFuZGluZ3MuanNvbmAsIFsnU3RhbmRpbmdzVGFibGUnLCAnU3RhbmRpbmdzTGlzdHMnLCAnQ29uc3RydWN0b3JTdGFuZGluZ3MnXSwgY2IpXG5cdH1cblxuXHRzdGF0aWMgZ2V0UmFjZUNhbGVuZGFyKHllYXIsIGNiKSB7XG5cdFx0RjFTZXJ2aWNlLmNhbGxBcGkoYGh0dHA6Ly9lcmdhc3QuY29tL2FwaS9mMS8ke3llYXJ9Lmpzb25gLCBbJ1JhY2VUYWJsZScsICdSYWNlcyddLCBjYilcblx0fVxuXG5cdHN0YXRpYyBnZXREcml2ZXJSZXN1bHRzQnlTZWFzb24oZHJpdmVyLCB5ZWFyLCBjYikge1xuXHRcdEYxU2VydmljZS5jYWxsQXBpKGBodHRwOi8vZXJnYXN0LmNvbS9hcGkvZjEvJHt5ZWFyfS9kcml2ZXJzLyR7ZHJpdmVyfS9yZXN1bHRzLmpzb25gLCBbJ1JhY2VUYWJsZScsICdSYWNlcyddLCBjYilcblx0fVxuXG5cdHN0YXRpYyBjYWxsQXBpKGxpbmssIGtleXMsIGNiKSB7XG5cdFx0JC5nZXQobGluaylcblx0XHQuZW5kKChlcnIsIHJlcykgPT4ge1xuXHRcdFx0aWYoZXJyKSByZXR1cm4gY2IodHJ1ZSlcblx0XHRcdGxldCBkYXRhID0gcmVzLmJvZHkuTVJEYXRhXG5cdFx0XHRhc3luYy5mb3JFYWNoU2VyaWVzKGtleXMsIChrLCBjYjEpID0+IHtcblx0XHRcdFx0aWYoIWRhdGFba10pIHJldHVybiBjYjEodHJ1ZSlcblx0XHRcdFx0ZGF0YSA9IGRhdGFba11cblx0XHRcdFx0aWYoXy5pc0FycmF5KGRhdGEpKSB7XG5cdFx0XHRcdFx0aWYoIWRhdGEubGVuZ3RoKSByZXR1cm4gY2IxKHRydWUpXG5cdFx0XHRcdFx0aWYoXy5sYXN0KGtleXMpIT1rKSBkYXRhID0gXy5maXJzdChkYXRhKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGNiMSgpXG5cdFx0XHR9LCBlcnIgPT4gY2IoZXJyLCBkYXRhKSlcblx0XHR9KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEYxU2VydmljZVxuIiwiaW1wb3J0ICQgZnJvbSAnc3VwZXJhZ2VudCdcblxuY29uc3QgdGVtcCA9IFtcblx0J0xld2lzIEhhbWlsdG9uJyxcblx0J05pY28gUm9zYmVyZycsXG5cdCdTZWJhc3RpYW4gVmV0dGVsJyxcblx0J0tpbWkgUmFpa2tvbmVuJyxcblx0J0RhbmllbCBSaWNjaWFyZG8nLFxuXHQnTWF4IFZlcnN0YXBwZW4nLFxuXHQnRmVsaXBwZSBNYXNzYScsXG5cdCdWYWx0dGVyaSBCb3R0YXMnLFxuXHQnU2VyZ2lvIFBlcmV6Jyxcblx0J05pY28gSHVsa2VuYmVyZycsXG5cdCdEYW5paWwgS3Z5YXQnLFxuXHQnQ2FybG9zIFNhaW56Jyxcblx0J1JvbWFpbiBHcm9zamVhbicsXG5cdCdGZXJuYW5kbyBBbG9uc28nLFxuXHQnSmVuc29uIEJ1dHRvbicsXG5cdCdLZXZpbiBNYWdudXNzZW4nLFxuXHQnRXN0ZWJhbiBHdXRpZXJyZXonLFxuXHQnSm9seW9uIFBhbG1lcicsXG5cdCdNYXJjdXMgRXJpY3Nzb24nLFxuXHQnUGFzY2FsIFdlaHJsZWluJyxcblx0J0ZlbGlwZSBOYXNyJyxcblx0J1JpbyBIYXJ5YW50bydcbl1cblxuY2xhc3MgU3VnZ2VzdGlvblNlcnZpY2Uge1xuXHRzdGF0aWMgZ2V0U3VnZ2VzdGlvbnMoY2IpIHtcblx0XHQkLmdldCgnL2FpL3N1Z2dlc3Rpb25zJylcblx0XHQuZW5kKChlcnIsIHJlcykgPT4ge1xuXHRcdFx0Y2IoZXJyID8gW10gOiByZXMuYm9keSlcblx0XHR9KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1Z2dlc3Rpb25TZXJ2aWNlXG4iLCJpbXBvcnQgJCBmcm9tICdzdXBlcmFnZW50J1xuXG5jbGFzcyBUZXh0QW5hbHlzaXNTZXJ2aWNlIHtcblx0c3RhdGljIGFuYWx5c2UodHh0LCBjYikge1xuXHRcdCQucG9zdChgL2FpL2FuYWx5c2VgKVxuXHRcdC5zZW5kKHt0ZXh0OiB0eHR9KVxuXHRcdC5lbmQoKGVyciwgcmVzKSA9PiB7XG5cdFx0XHRjYihlcnIsIHJlcy5ib2R5IHx8IG51bGwpXG5cdFx0fSlcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0QW5hbHlzaXNTZXJ2aWNlXG4iXX0=
