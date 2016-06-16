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
			summary: null
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
			var grouped = _lodash2.default.groupBy(_profiles, 'type');
			var keys = _lodash2.default.keys(grouped);
			Analyser.evaluateProfiles(query, _profiles, function (profiles) {
				Analyser.dataCase(profiles, dates, function (summary) {
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
				var keywords = (0, _lodash2.default)(p.keywords).map(function (k) {
					return k.split(' ');
				}).flattenDeep().map(function (k) {
					return _lodash2.default.deburr(k);
				}).uniq().value();
				p.confident = _lodash2.default.intersection(keys, keywords).length / keywords.length;
				if (_lodash2.default.indexOf(combinations, _lodash2.default.deburr(p.name.toLowerCase())) > -1) p.confident += 1;
				return p;
			}).orderBy(['confident', 'name'], ['desc', 'asc']).value();
			cb(ps);
		}
	}, {
		key: 'dataCase',
		value: function dataCase(profiles, dates, cb) {
			cb();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJyZWFjdC9hcHAuanMiLCJyZWFjdC9jb21wb25lbnRzL0FwcC5qcyIsInJlYWN0L2NvbXBvbmVudHMvRGFzaGJvYXJkLmpzIiwicmVhY3QvY29tcG9uZW50cy9Ob3RGb3VuZC5qcyIsInJlYWN0L2NvbXBvbmVudHMvU2VhcmNoR3JpZC5qcyIsInJlYWN0L2NvbXBvbmVudHMvVUkvQ2VudGVyQ29udGFpbmVyLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9GdWxsU2NyZWVuLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9HcmlkQ29udGFpbmVyLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9Mb2FkZXIuanMiLCJyZWFjdC9jb21wb25lbnRzL1VJL05hdi5qcyIsInJlYWN0L2NvbXBvbmVudHMvVUkvUGFwZXIuanMiLCJyZWFjdC9jb21wb25lbnRzL1VJL1BhcGVyQnRuLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9QYXBlckNvbnRlbnQuanMiLCJyZWFjdC9jb21wb25lbnRzL1VJL1BhcGVySGVhZGVyLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9QYXBlckltZy5qcyIsInJlYWN0L2NvbXBvbmVudHMvVUkvUGFwZXJMaS5qcyIsInJlYWN0L2NvbXBvbmVudHMvVUkvUGFwZXJMaW5lLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9QYXBlclVsLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9Qcm9maWxlLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9TZWFyY2hJbnB1dC5qcyIsInJlYWN0L2xpYi9BbmFseXNlci5qcyIsInJlYWN0L2xpYi9LZXl3b3Jkcy5qcyIsInJlYWN0L2xpYi9VdGlscy5qcyIsInJlYWN0L2xpYi9jb2xvcnMuanMiLCJyZWFjdC9zZXJ2aWNlcy9FbnRpdHkuU2VydmljZS5qcyIsInJlYWN0L3NlcnZpY2VzL0YxLlNlcnZpY2UuanMiLCJyZWFjdC9zZXJ2aWNlcy9TdWdnZXN0aW9uLlNlcnZpY2UuanMiLCJyZWFjdC9zZXJ2aWNlcy9UZXh0QW5hbHlzaXMuU2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUlBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBSkE7O0FBTUEsc0JBQ0U7QUFBQTtFQUFBLEVBQVEsb0NBQVI7RUFDQztBQUFBO0lBQUEsRUFBTyxNQUFLLEdBQVosRUFBZ0Isd0JBQWhCO0lBQ0MseURBQVksOEJBQVosR0FERDtJQUVDLG9EQUFPLE1BQUssR0FBWixFQUFnQiw2QkFBaEI7QUFGRDtBQURELENBREYsRUFPRyxTQUFTLGNBQVQsQ0FBd0IsS0FBeEIsQ0FQSDs7Ozs7Ozs7Ozs7QUNYQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxTQUFTO0FBQ2QsU0FBUTtBQUNQLGNBQVksaUJBQU87QUFEWjtBQURNLENBQWY7O0lBTU0sRzs7O0FBQ0wsY0FBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEscUZBQ1osS0FEWTs7QUFFbEIsUUFBSyxLQUFMLEdBQWE7QUFDWixTQUFNLEtBRE07QUFFWixnQkFBYTtBQUZELEdBQWI7QUFGa0I7QUFNbEI7Ozs7dUNBQ29CO0FBQUE7O0FBQ3BCLHdCQUFrQixjQUFsQixDQUFpQyxnQkFBUTtBQUN4QyxXQUFLLFFBQUwsQ0FBYztBQUNiLFdBQU0sSUFETztBQUViLGtCQUFhO0FBRkEsS0FBZDtBQUlBLElBTEQ7QUFNQTs7O2lDQUNjO0FBQ2QsVUFBTztBQUFBO0lBQUE7SUFBWTtBQUFBO0tBQUE7S0FBaUIsa0RBQVEsT0FBTyxDQUFDLE9BQU8sTUFBUixDQUFmO0FBQWpCO0FBQVosSUFBUDtBQUNBOzs7a0NBQ2U7QUFBQTs7QUFDZixPQUFJLG9CQUFvQixnQkFBTSxRQUFOLENBQWUsR0FBZixDQUFtQixLQUFLLEtBQUwsQ0FBVyxRQUE5QixFQUF3QztBQUFBLFdBQVMsZ0JB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QVFaLGlCQVJZLEVBU1osY0FUWSxFQVVaLGlCQVZZLEVBV1osY0FYWSxFQVlaLGNBWlksRUFhWixpQkFiWSxFQWNaLGlCQWRZLEVBZVosZUFmWSxFQWdCWixpQkFoQlksRUFpQlosbUJBakJZLEVBa0JaLGVBbEJZLEVBbUJaLGlCQW5CWSxFQW9CWixpQkFwQlksRUFxQlosYUFyQlksRUFzQlosY0F0QlksQ0FBYjs7SUF5Qk0saUI7Ozs7Ozs7aUNBQ2lCLEUsRUFBSTtBQUN6Qix3QkFBRSxHQUFGLENBQU0saUJBQU4sRUFDQyxHQURELENBQ0ssVUFBQyxHQUFELEVBQU0sR0FBTixFQUFjO0FBQ2xCLE9BQUcsTUFBTSxFQUFOLEdBQVcsSUFBSSxJQUFsQjtBQUNBLElBSEQ7QUFJQTs7Ozs7O2tCQUdhLGlCOzs7Ozs7Ozs7OztBQ3BDZjs7Ozs7Ozs7SUFFTSxtQjs7Ozs7OzswQkFDVSxHLEVBQUssRSxFQUFJO0FBQ3ZCLHdCQUFFLElBQUYsZ0JBQ0MsSUFERCxDQUNNLEVBQUMsTUFBTSxHQUFQLEVBRE4sRUFFQyxHQUZELENBRUssVUFBQyxHQUFELEVBQU0sR0FBTixFQUFjO0FBQ2xCLE9BQUcsR0FBSCxFQUFRLElBQUksSUFBSixJQUFZLElBQXBCO0FBQ0EsSUFKRDtBQUtBOzs7Ozs7a0JBR2EsbUIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7Um91dGVyLCBSb3V0ZSwgSW5kZXhSb3V0ZSwgYnJvd3Nlckhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBpbmplY3RUYXBFdmVudFBsdWdpbiBmcm9tICdyZWFjdC10YXAtZXZlbnQtcGx1Z2luJ1xuXG5pbmplY3RUYXBFdmVudFBsdWdpbigpXG5cbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCdcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi9jb21wb25lbnRzL0Rhc2hib2FyZCdcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL2NvbXBvbmVudHMvTm90Rm91bmQnXG5cbnJlbmRlcigoXG4gIDxSb3V0ZXIgaGlzdG9yeT17YnJvd3Nlckhpc3Rvcnl9PlxuICBcdDxSb3V0ZSBwYXRoPScvJyBjb21wb25lbnQ9e0FwcH0+XG4gIFx0XHQ8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0Rhc2hib2FyZH0gLz5cbiAgXHRcdDxSb3V0ZSBwYXRoPScqJyBjb21wb25lbnQ9e05vdEZvdW5kfSAvPlxuICBcdDwvUm91dGU+XG4gIDwvUm91dGVyPlxuKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmltcG9ydCBTdWdnZXN0aW9uU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9TdWdnZXN0aW9uLlNlcnZpY2UnXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2xpYi9jb2xvcnMnXG5cbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9VSS9Mb2FkZXInXG5pbXBvcnQgRnVsbFNjcmVlbiBmcm9tICcuL1VJL0Z1bGxTY3JlZW4nXG5pbXBvcnQgQ2VudGVyQ29udGFpbmVyIGZyb20gJy4vVUkvQ2VudGVyQ29udGFpbmVyJ1xuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGxvYWRlcjoge1xuXHRcdGJhY2tncm91bmQ6IGNvbG9ycy5yZWQ1MDBcblx0fVxufVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRpbml0OiBmYWxzZSxcblx0XHRcdHN1Z2dlc3Rpb25zOiBbXVxuXHRcdH1cblx0fVxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0U3VnZ2VzdGlvblNlcnZpY2UuZ2V0U3VnZ2VzdGlvbnMoZGF0YSA9PiB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0aW5pdDogdHJ1ZSxcblx0XHRcdFx0c3VnZ2VzdGlvbnM6IGRhdGFcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXHRyZW5kZXJMb2FkZXIoKSB7XG5cdFx0cmV0dXJuIDxGdWxsU2NyZWVuPjxDZW50ZXJDb250YWluZXI+PExvYWRlciBzdHlsZT17W3N0eWxlcy5sb2FkZXJdfSAvPjwvQ2VudGVyQ29udGFpbmVyPjwvRnVsbFNjcmVlbj5cblx0fVxuXHRyZW5kZXJDb250ZW50KCkge1xuXHRcdHZhciBjaGlsZHJlbldpdGhQcm9wcyA9IFJlYWN0LkNoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCBjaGlsZCA9PiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgXHRzdWdnZXN0aW9uczogdGhpcy5zdGF0ZS5zdWdnZXN0aW9uc1xuICAgICAgICB9KSlcblx0XHRyZXR1cm4gPGRpdj57Y2hpbGRyZW5XaXRoUHJvcHN9PC9kaXY+XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGlmKCF0aGlzLnN0YXRlLmluaXQpIHtcblx0XHRcdHJldHVybiB0aGlzLnJlbmRlckxvYWRlcigpXG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnJlbmRlckNvbnRlbnQoKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShBcHApXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBhc3luYyBmcm9tICdhc3luYydcblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9saWIvY29sb3JzJ1xuaW1wb3J0IFRleHRBbmFseXNpc1NlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvVGV4dEFuYWx5c2lzLlNlcnZpY2UnXG5cbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9VSS9Mb2FkZXInXG5pbXBvcnQgRnVsbFNjcmVlbiBmcm9tICcuL1VJL0Z1bGxTY3JlZW4nXG5pbXBvcnQgQ2VudGVyQ29udGFpbmVyIGZyb20gJy4vVUkvQ2VudGVyQ29udGFpbmVyJ1xuaW1wb3J0IFNlYXJjaElucHV0IGZyb20gJy4vVUkvU2VhcmNoSW5wdXQnXG5pbXBvcnQgU2VhcmNoR3JpZCBmcm9tICcuL1NlYXJjaEdyaWQnXG5cbmNvbnN0IHN0eWxlcyA9IHtcblx0bG9nbzoge1xuXHRcdGhlaWdodDogMTAwXG5cdH0sXG5cdGlucHV0OiB7XG5cdFx0d2lkdGg6IDU1MCxcblx0XHRoZWlnaHQ6IDQwLFxuXHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuXHRcdG1hcmdpblRvcDogMzRcblx0fSxcblx0ZWFzZToge1xuXHRcdHRyYW5zaXRpb246ICdhbGwgMC4xcyBlYXNlLWluLW91dCdcblx0fSxcblx0Ymx1cjoge1xuXHRcdGZpbHRlcjogJ2JsdXIoMTBweCknXG5cdH0sXG5cdGxvYWRlcjoge1xuXHRcdGNvbnRhaW5lcjoge1xuXHRcdFx0cG9zaXRpb246ICdmaXhlZCcsXG5cdFx0XHR0b3A6IDAsXG5cdFx0XHRsZWZ0OiAwLFxuXHRcdFx0ekluZGV4OiAxMDAwMFxuXHRcdH0sXG5cdFx0bG9hZGVyOiB7XG5cdFx0XHRiYWNrZ3JvdW5kOiBjb2xvcnMucmVkNTAwXG5cdFx0fVxuXHR9XG59XG5cbmNsYXNzIERhc2hib2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNlYXJjaDogZmFsc2UsXG5cdFx0XHRtb2RhbDogZmFsc2UsXG5cdFx0XHRzcmM6ICcnLFxuXHRcdFx0cmVjb21tZW5kOiAnJyxcblx0XHRcdGVudGl0aWVzOiBbXVxuXHRcdH1cblx0XHR0aGlzLm9uU3JjQ2hhbmdlID0gdGhpcy5vblNyY0NoYW5nZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5zZWFyY2ggPSB0aGlzLnNlYXJjaC5iaW5kKHRoaXMpXG5cdFx0dGhpcy5vblRhYiA9IHRoaXMub25UYWIuYmluZCh0aGlzKVxuXHRcdHRoaXMub25Ib21lID0gdGhpcy5vbkhvbWUuYmluZCh0aGlzKVxuXHR9XG5cdG9uU3JjQ2hhbmdlKHYpIHtcblx0XHRsZXQgcmVjID0gJydcblx0XHRsZXQgd29yZHMgPSB2LnNwbGl0KCcgJylcblx0XHRsZXQgd29yZCA9IF8ubGFzdCh3b3Jkcylcblx0XHRpZih3b3JkICYmIHdvcmQubGVuZ3RoPj0yKSB7XG5cdFx0XHRsZXQgciA9IF8uZmluZCh0aGlzLnByb3BzLnN1Z2dlc3Rpb25zLCBzID0+IHtcblx0XHRcdFx0cmV0dXJuIHMudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKHdvcmQudG9Mb3dlckNhc2UoKSlcblx0XHRcdH0pXG5cdFx0XHRyID0gciB8fCAnJ1xuXHRcdFx0aWYocikgcmVjID0gci5zdWJzdHJpbmcod29yZC5sZW5ndGgpXG5cdFx0fVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c3JjOiB2LFxuXHRcdFx0cmVjb21tZW5kOiByZWNcblx0XHR9KVxuXHR9XG5cdG9uVGFiKCkge1xuXHRcdGxldCB7c3JjLCByZWNvbW1lbmR9ID0gdGhpcy5zdGF0ZVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c3JjOiBzcmMgKyByZWNvbW1lbmQsXG5cdFx0XHRyZWNvbW1lbmQ6ICcnXG5cdFx0fSlcblx0fVxuXHRvbkhvbWUoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzZWFyY2g6IGZhbHNlLFxuXHRcdFx0bW9kYWw6IGZhbHNlLFxuXHRcdFx0c3JjOiAnJyxcblx0XHRcdHJlY29tbWVuZDogJycsXG5cdFx0XHRlbnRpdGllczogW11cblx0XHR9KVxuXHR9XG5cdHNlYXJjaCgpIHtcblx0XHRpZighdGhpcy5zdGF0ZS5zcmMpIHJldHVybiBmYWxzZVxuXHRcdGxldCBzcmMgPSB0aGlzLnN0YXRlLnNyYyArIHRoaXMuc3RhdGUucmVjb21tZW5kXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzZWFyY2g6IHRydWUsXG5cdFx0XHRzcmM6IHNyYyxcblx0XHRcdHJlY29tbWVuZDogJydcblx0XHR9KVxuXHRcdFRleHRBbmFseXNpc1NlcnZpY2UuYW5hbHlzZShzcmMsIChlcnIsIHJlcykgPT4ge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHNlYXJjaDogZmFsc2UsXG5cdFx0XHRcdGVudGl0aWVzOiByZXMsXG5cdFx0XHRcdG1vZGFsOiB0cnVlXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblx0cmVuZGVyRnVsbFNyYygpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEZ1bGxTY3JlZW4+XG5cdFx0XHRcdDxDZW50ZXJDb250YWluZXI+XG5cdFx0XHRcdFx0PGltZyBzcmM9Jy9pbWcvZjFfbG9nby5wbmcnIHN0eWxlPXtzdHlsZXMubG9nb30gLz48YnIvPlxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3N0eWxlcy5pbnB1dH0+PFNlYXJjaElucHV0IHJlY29tbWVuZD17dGhpcy5zdGF0ZS5yZWNvbW1lbmR9IHZhbHVlPXt0aGlzLnN0YXRlLnNyY30gb25DaGFuZ2U9e3RoaXMub25TcmNDaGFuZ2V9IG9uRW50ZXI9e3RoaXMuc2VhcmNofSBvblRhYj17dGhpcy5vblRhYn0gLz48L2Rpdj48YnIvPlxuXHRcdFx0XHQ8L0NlbnRlckNvbnRhaW5lcj5cblx0XHRcdDwvRnVsbFNjcmVlbj5cblx0XHQpXG5cdH1cblx0cmVuZGVyR3JpZCgpIHtcblx0XHRyZXR1cm4gPFNlYXJjaEdyaWQgcXVlcnk9e3RoaXMuc3RhdGUuc3JjfSBvbkhvbWU9e3RoaXMub25Ib21lfSByZWNvbW1lbmQ9e3RoaXMuc3RhdGUucmVjb21tZW5kfSB2YWx1ZT17dGhpcy5zdGF0ZS5zcmN9IG9uQ2hhbmdlPXt0aGlzLm9uU3JjQ2hhbmdlfSBvbkVudGVyPXt0aGlzLnNlYXJjaH0gb25UYWI9e3RoaXMub25UYWJ9IGVudGl0aWVzPXt0aGlzLnN0YXRlLmVudGl0aWVzfSAvPlxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7c2VhcmNoLCBtb2RhbH0gPSB0aGlzLnN0YXRlXG5cdFx0Y29uc3QgbG9hZGVyID0gdGhpcy5zdGF0ZS5zZWFyY2ggPyA8RnVsbFNjcmVlbiBzdHlsZT17W3N0eWxlcy5sb2FkZXIuY29udGFpbmVyXX0+PENlbnRlckNvbnRhaW5lcj48TG9hZGVyIHN0eWxlPXtbc3R5bGVzLmxvYWRlci5sb2FkZXJdfSAvPjwvQ2VudGVyQ29udGFpbmVyPjwvRnVsbFNjcmVlbj4gOiBudWxsXG5cdFx0bGV0IGNudCA9IHRoaXMuc3RhdGUubW9kYWwgPyB0aGlzLnJlbmRlckdyaWQoKSA6IHRoaXMucmVuZGVyRnVsbFNyYygpXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdHtsb2FkZXJ9XG5cdFx0XHRcdDxkaXYgc3R5bGU9e1tzdHlsZXMuZWFzZSwgc2VhcmNoID8gc3R5bGVzLmJsdXIgOiBudWxsXX0+XG5cdFx0XHRcdFx0e2NudH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKERhc2hib2FyZClcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5pbXBvcnQgRnVsbFNjcmVlbiBmcm9tICcuL1VJL0Z1bGxTY3JlZW4nXG5pbXBvcnQgQ2VudGVyQ29udGFpbmVyIGZyb20gJy4vVUkvQ2VudGVyQ29udGFpbmVyJ1xuXG5jb25zdCBOb3RGb3VuZCA9IChwcm9wcykgPT4gPEZ1bGxTY3JlZW4+PENlbnRlckNvbnRhaW5lcj5Ob3QgZm91bmQ8L0NlbnRlckNvbnRhaW5lcj48L0Z1bGxTY3JlZW4+XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShOb3RGb3VuZClcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5pbXBvcnQgTmF2IGZyb20gJy4vVUkvTmF2J1xuaW1wb3J0IEdyaWRDb250YWluZXIgZnJvbSAnLi9VSS9HcmlkQ29udGFpbmVyJ1xuXG5jbGFzcyBTZWFyY2hHcmlkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxOYXYgb25Ib21lPXt0aGlzLnByb3BzLm9uSG9tZX0gcmVjb21tZW5kPXt0aGlzLnByb3BzLnJlY29tbWVuZH0gdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfSBvbkVudGVyPXt0aGlzLnByb3BzLm9uRW50ZXJ9IG9uVGFiPXt0aGlzLnByb3BzLm9uVGFifSAvPlxuXHRcdFx0XHQ8R3JpZENvbnRhaW5lciBxdWVyeT17dGhpcy5wcm9wcy5xdWVyeX0gZW50aXRpZXM9e3RoaXMucHJvcHMuZW50aXRpZXN9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoR3JpZFxuIiwiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5jb25zdCBzdHlsZSA9IHtcblx0Y2VudGVyQmxvY2tTdHlsZToge1xuXHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0aGVpZ2h0OiAnMTAwJScsXG5cdFx0bWF4SGVpZ2h0OiAnMTAwJScsXG5cdFx0b3ZlcmZsb3c6ICdhdXRvJyxcblx0XHR0ZXh0QWxpZ246ICdjZW50ZXInXG5cdH0sXG5cdGNlbnRlckNvbnRlbnRTdHlsZToge1xuXHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuXHRcdHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuXHRcdGJveFNpemluZzogJ2JvcmRlci1ib3gnXG5cdH1cbn1cblxuY29uc3QgQ2VudGVyQ29udGFpbmVyID0gKHByb3BzKSA9PiA8ZGl2IHN0eWxlPXtbc3R5bGUuY2VudGVyQmxvY2tTdHlsZSwgLi4ucHJvcHMuc3R5bGVdfSBpZD0nY2VudGVyQ29udGVudCc+PGRpdiBzdHlsZT17W3N0eWxlLmNlbnRlckNvbnRlbnRTdHlsZSwgLi4ucHJvcHMuYm94U3R5bGVdfT57cHJvcHMuY2hpbGRyZW59PC9kaXY+PC9kaXY+XG5cbkNlbnRlckNvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIHN0eWxlOiB7fSxcbiAgYm94U3R5bGU6IHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShDZW50ZXJDb250YWluZXIpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuY29uc3Qgc3R5bGUgPSB7XG5cdHdpZHRoOiAnMTAwJScsXG5cdGhlaWdodDogJzEwMHZoJ1xufVxuXG5jb25zdCBGdWxsU2NyZWVuID0gKHByb3BzKSA9PiA8ZGl2IHN0eWxlPXtbc3R5bGUsIC4uLnByb3BzLnN0eWxlXX0+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuXG5GdWxsU2NyZWVuLmRlZmF1bHRQcm9wcyA9IHtcbiAgc3R5bGU6IHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShGdWxsU2NyZWVuKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5pbXBvcnQgTWFzb25yeSBmcm9tICdyZWFjdC1tYXNvbnJ5LWNvbXBvbmVudCdcblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi9saWIvY29sb3JzJ1xuaW1wb3J0IEFuYWx5c2VyIGZyb20gJy4uLy4uL2xpYi9BbmFseXNlcidcblxuaW1wb3J0IFBhcGVyIGZyb20gJy4vUGFwZXInXG5pbXBvcnQgUGFwZXJDb250ZW50IGZyb20gJy4vUGFwZXJDb250ZW50J1xuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi9Qcm9maWxlJ1xuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGNvbnRhaW5lcjoge1xuXHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0bWluSGVpZ2h0OiAnMTAwdmgnLFxuXHRcdGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuXHRcdHBhZGRpbmc6ICc4MHB4IDIwcHggMjBweCAyMHB4Jyxcblx0XHRiYWNrZ3JvdW5kOiBjb2xvcnMuZ3JleTIwMFxuXHR9LFxuXHRtYW5zb3J5OiB7XG5cdFx0cGFkZGluZzogMjAsXG5cdFx0Ym94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG5cdFx0d2lkdGg6ICcyNSUnXG5cdH1cbn1cblxuY2xhc3MgR3JpZENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHByb2ZpbGVzOiBbXSxcblx0XHRcdGRhdGVzOiBbXSxcblx0XHRcdHN1bW1hcnk6IG51bGxcblx0XHR9XG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdHRoaXMucGFyc2VFbnRpdGllcyh0aGlzLnByb3BzKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG5cdFx0dGhpcy5wYXJzZUVudGl0aWVzKG5leHRQcm9wcylcblx0fVxuXHRwYXJzZUVudGl0aWVzKHByb3BzKSB7XG5cdFx0QW5hbHlzZXIucGFyc2VFbnRpdGllcyh0aGlzLnByb3BzLnF1ZXJ5LCBwcm9wcy5lbnRpdGllcywgZGF0YSA9PiB0aGlzLnNldFN0YXRlKGRhdGEpKVxuXHR9XG5cdHJlbmRlckVtcHR5KCkge1xuXHRcdHJldHVybiA8TWFzb25yeSBlbGVtZW50VHlwZT17J2Rpdid9PjxkaXYgc3R5bGU9e3N0eWxlcy5tYW5zb3J5fT48UGFwZXI+PFBhcGVyQ29udGVudD48c3BhbiBjbGFzc05hbWU9J2xuciBsbnItY3Jvc3MnIC8+IE5vIHJlc3VsdHMgZm91bmQ8L1BhcGVyQ29udGVudD48L1BhcGVyPjwvZGl2PjwvTWFzb25yeT5cblx0fVxuXHRyZW5kZXJDb250ZW50KCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TWFzb25yeSBlbGVtZW50VHlwZT17J2Rpdid9PlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5wcm9maWxlcy5tYXAocCA9PiA8ZGl2IGtleT17cC5faWR9IHN0eWxlPXtzdHlsZXMubWFuc29yeX0+PFByb2ZpbGUgZW50aXR5PXtwfSAvPjwvZGl2Pil9XG5cdFx0XHQ8L01hc29ucnk+XG5cdFx0KVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRsZXQgY250ID0gdGhpcy5wcm9wcy5lbnRpdGllcy5sZW5ndGggPyB0aGlzLnJlbmRlckNvbnRlbnQoKSA6IHRoaXMucmVuZGVyRW1wdHkoKVxuXHRcdHJldHVybiA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT57Y250fTwvZGl2PlxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShHcmlkQ29udGFpbmVyKVxuIiwiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uLy4uL2xpYi9jb2xvcnMnXG5cbmNvbnN0IHN0eWxlID0ge1xuXHR3aWR0aDogJzYwcHgnLFxuICBoZWlnaHQ6ICc2MHB4JyxcbiAgYmFja2dyb3VuZDogY29sb3JzLnJlZDUwMCxcbiAgYW5pbWF0aW9uOiAnc2stcm90YXRlcGxhbmUgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dCdcbn1cblxuY29uc3QgTG9hZGVyID0gKHByb3BzKSA9PiA8ZGl2IHN0eWxlPXtbc3R5bGUsIHByb3BzLnN0eWxlXX0gLz5cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKExvYWRlcilcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uLy4uL2xpYi9jb2xvcnMnXG5cbmltcG9ydCBTZWFyY2hJbnB1dCBmcm9tICcuL1NlYXJjaElucHV0J1xuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGNvbnRhaW5lcjoge1xuXHRcdGJhY2tncm91bmQ6ICcjMWIxNzE4Jyxcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdGhlaWdodDogNzAsXG5cdFx0Ym94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG5cdFx0cGFkZGluZzogJzE1cHggNDBweCcsXG5cdFx0cG9zaXRpb246ICdmaXhlZCcsXG5cdFx0dG9wOiAwLFxuXHRcdGxlZnQ6IDAsXG5cdFx0ekluZGV4OiAxMDBcblx0fSxcblx0bG9nbzoge1xuXHRcdGhlaWdodDogNDAsXG5cdFx0Y3Vyc29yOiAncG9pbnRlcidcblx0fSxcblx0aW5wdXQ6IHtcblx0XHR3aWR0aDogNDAwLFxuXHRcdGhlaWdodDogNDAsXG5cdFx0ZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG5cdFx0cGFkZGluZzogMCxcblx0XHRmbG9hdDogJ3JpZ2h0J1xuXHR9LFxuXHRpbnA6IHtcblx0XHRib3JkZXI6IGAxcHggc29saWQgJHtjb2xvcnMud2hpdGV9YCxcblx0XHQnOmZvY3VzJzoge1xuXHRcdFx0Ym9yZGVyOiBgMXB4IHNvbGlkICR7Y29sb3JzLndoaXRlfWBcblx0XHR9XG5cdH1cbn1cblxuY2xhc3MgTmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxuYXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuXHRcdFx0XHQ8aW1nIHNyYz0nL2ltZy9mMV9sb2dvX2RhcmsucG5nJyBvbkNsaWNrPXt0aGlzLnByb3BzLm9uSG9tZX0gc3R5bGU9e3N0eWxlcy5sb2dvfSAvPlxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXtzdHlsZXMuaW5wdXR9PjxTZWFyY2hJbnB1dCBpbnBTdHlsZT17W3N0eWxlcy5pbnBdfSByZWNvbW1lbmQ9e3RoaXMucHJvcHMucmVjb21tZW5kfSB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX0gb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2V9IG9uRW50ZXI9e3RoaXMucHJvcHMub25FbnRlcn0gb25UYWI9e3RoaXMucHJvcHMub25UYWJ9IC8+PC9kaXY+XG5cdFx0XHQ8L25hdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKE5hdilcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uLy4uL2xpYi9jb2xvcnMnXG5cbmNvbnN0IHN0eWxlID0ge1xuXHR3aWR0aDogJzEwMCUnLFxuXHRiYWNrZ3JvdW5kOiBjb2xvcnMud2hpdGUsXG5cdGJveFNoYWRvdzogJzAgLTFweCAwICNlNWU1ZTUsIDAgMCAycHggcmdiYSgwLCAwLCAwLCAuMTIpLCAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAuMjQpJ1xufVxuXG5jb25zdCBQYXBlciA9IChwcm9wcykgPT4gPGRpdiBzdHlsZT17W3N0eWxlLCBwcm9wcy5zdHlsZV19Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cblxuUGFwZXIuZGVmYXVsdFByb3BzID0ge1xuXHRzdHlsZToge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKFBhcGVyKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vLi4vbGliL2NvbG9ycydcblxuY29uc3Qgc3R5bGUgPSB7XG5cdGRpc3BsYXk6ICdibG9jaycsXG5cdGJvcmRlcjogJ25vbmUnLFxuXHRtYXJnaW46IDAsXG5cdHBhZGRpbmc6ICcxMHB4Jyxcblx0Y29sb3I6IGNvbG9ycy53aGl0ZSxcblx0YmFja2dyb3VuZDogY29sb3JzLnJlZDUwMCxcblx0Zm9udFNpemU6ICcuOHJlbScsXG5cdGZvbnRXZWlnaHQ6IDQwMCxcblx0Zm9udEZhbWlseTogJ2luaGVyaXQnLFxuXHRjdXJzb3I6ICdwb2ludGVyJyxcblx0dHJhbnNpdGlvbjogJ2FsbCAwLjFzIGVhc2UtaW4tb3V0Jyxcblx0Jzpob3Zlcic6IHtcblx0XHRiYWNrZ3JvdW5kOiBjb2xvcnMucmVkNzAwXG5cdH1cbn1cblxuY29uc3QgUGFwZXJCdG4gPSAocHJvcHMpID0+IDxhIGhyZWY9e3Byb3BzLmhyZWZ9IHRhcmdldD0nX2JsYW5rJz48YnV0dG9uIHN0eWxlPXtzdHlsZX0+e3Byb3BzLmNoaWxkcmVufTwvYnV0dG9uPjwvYT5cblxuUGFwZXJCdG4uZGVmYXVsdFByb3BzID0ge1xuXHRzdHlsZToge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKFBhcGVyQnRuKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmNvbnN0IHN0eWxlID0ge1xuXHR3aWR0aDogJzEwMCUnLFxuXHRib3hTaXppbmc6ICdib3JkZXItYm94Jyxcblx0cGFkZGluZzogMjBcbn1cblxuY29uc3QgUGFwZXJDb250ZW50ID0gKHByb3BzKSA9PiA8ZGl2IHN0eWxlPXtzdHlsZX0+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oUGFwZXJDb250ZW50KVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vLi4vbGliL2NvbG9ycydcblxuY29uc3Qgc3R5bGUgPSB7XG5cdHdpZHRoOiAnMTAwJScsXG5cdGRpc3BsYXk6ICdibG9jaycsXG5cdGZvbnRTaXplOiAnMXJlbScsXG5cdGZvbnRXZWlnaHQ6IDMwMCxcblx0bWFyZ2luOiAwLFxuXHRwYWRkaW5nOiAnMTBweCAyMHB4Jyxcblx0Ym94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG5cdGJhY2tncm91bmQ6ICcjMWIxNzE4Jyxcblx0Y29sb3I6IGNvbG9ycy53aGl0ZVxufVxuXG5jb25zdCBQYXBlckhlYWRlciA9IChwcm9wcykgPT4gPGgxIHN0eWxlPXtzdHlsZX0+e3Byb3BzLmNoaWxkcmVufTwvaDE+XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShQYXBlckhlYWRlcilcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5jb25zdCBzdHlsZSA9IHtcblx0d2lkdGg6ICcxMDAlJyxcblx0ZGlzcGxheTogJ2Jsb2NrJ1xufVxuXG5jb25zdCBQYXBlckltZyA9IChwcm9wcykgPT4gPGltZyBzcmM9e3Byb3BzLnNyY30gc3R5bGU9e3N0eWxlfSAvPlxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oUGFwZXJJbWcpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuY29uc3Qgc3R5bGVzID0ge1xuXHRjb250YWluZXI6IHtcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdGZvbnRXZWlnaHQ6IDMwMCxcblx0XHRtYXJnaW5Cb3R0b206IDEwLFxuXHRcdGZsb2F0OiAnbGVmdCdcblx0fSxcblx0aDI6IHtcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdG1hcmdpbjogMCxcblx0XHRwYWRkaW5nOiAwLFxuXHRcdGZvbnRTaXplOiAnLjhyZW0nLFxuXHRcdGZvbnRXZWlnaHQ6IDQwMFxuXHR9LFxuXHR0eHQ6IHtcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdGZvbnRTaXplOiAnLjhyZW0nLFxuXHRcdHdvcmRXcmFwOiAnYnJlYWstd29yZCdcblx0fVxufVxuXG5jb25zdCBQYXBlckxpID0gKHByb3BzKSA9PiA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT48aDIgc3R5bGU9e3N0eWxlcy5oMn0+e3Byb3BzLmhlYWR9PC9oMj48ZGl2IHN0eWxlPXtzdHlsZXMudHh0fT57cHJvcHMuY2hpbGRyZW59PC9kaXY+PC9kaXY+XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShQYXBlckxpKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vLi4vbGliL2NvbG9ycydcblxuY29uc3Qgc3R5bGUgPSB7XG5cdHdpZHRoOiAnMTAwJScsXG5cdGRpc3BsYXk6ICdibG9jaycsXG5cdGJhY2tncm91bmQ6IGNvbG9ycy5ncmV5MjAwLFxuXHRoZWlnaHQ6IDEsXG5cdG1hcmdpbjogJzEwcHggMCAyMHB4IDAnXG59XG5cbmNvbnN0IFBhcGVyTGluZSA9IChwcm9wcykgPT4gPGRpdiBzdHlsZT17c3R5bGV9IC8+XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShQYXBlckxpbmUpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuY29uc3Qgc3R5bGUgPSB7XG5cdHdpZHRoOiAnMTAwJScsXG5cdGRpc3BsYXk6ICdibG9jaydcbn1cblxuY29uc3QgUGFwZXJVbCA9IChwcm9wcykgPT4gPGRpdiBjbGFzc05hbWU9J2NsZWFyJyBzdHlsZT17c3R5bGV9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKFBhcGVyVWwpXG4iLCJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXN9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vLi4vbGliL2NvbG9ycydcbmltcG9ydCBFbnRpdHlTZXJ2aWNlIGZyb20gJy4uLy4uL3NlcnZpY2VzL0VudGl0eS5TZXJ2aWNlJ1xuaW1wb3J0IEYxU2VydmljZSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9GMS5TZXJ2aWNlJ1xuaW1wb3J0IFV0aWxzIGZyb20gJy4uLy4uL2xpYi9VdGlscydcblxuaW1wb3J0IFBhcGVyIGZyb20gJy4vUGFwZXInXG5pbXBvcnQgUGFwZXJDb250ZW50IGZyb20gJy4vUGFwZXJDb250ZW50J1xuaW1wb3J0IFBhcGVySW1nIGZyb20gJy4vUGFwZXJJbWcnXG5pbXBvcnQgUGFwZXJIZWFkZXIgZnJvbSAnLi9QYXBlckhlYWRlcidcbmltcG9ydCBQYXBlclVsIGZyb20gJy4vUGFwZXJVbCdcbmltcG9ydCBQYXBlckxpIGZyb20gJy4vUGFwZXJMaSdcbmltcG9ydCBQYXBlckxpbmUgZnJvbSAnLi9QYXBlckxpbmUnXG5pbXBvcnQgUGFwZXJCdG4gZnJvbSAnLi9QYXBlckJ0bidcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInXG5pbXBvcnQgQ2VudGVyQ29udGFpbmVyIGZyb20gJy4vQ2VudGVyQ29udGFpbmVyJ1xuXG5jb25zdCBleGNsdWRlID0gWyd0aHVtYm5haWwnLCAnZGVwaWN0aW9uJywgJ2JpcnRoUGxhY2UnLCAnd2lraVBhZ2VJRCcsICdhYnN0cmFjdCcsICdsb2NhdGlvbiddXG5cbmNvbnN0IHN0eWxlcyA9IHtcblx0cmVsb2FkOiB7XG5cdFx0Y3Vyc29yOiAncG9pbnRlcicsXG5cdFx0Jzpob3Zlcic6IHtcblx0XHRcdGNvbG9yOiBjb2xvcnMucmVkNTAwXG5cdFx0fVxuXHR9XG59XG5cbmNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRlbnRpdHk6IG51bGwsXG5cdFx0XHRlcnI6IGZhbHNlXG5cdFx0fVxuXHRcdHRoaXMucmVsb2FkID0gdGhpcy5yZWxvYWQuYmluZCh0aGlzKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHRpZih0aGlzLnByb3BzLmVudGl0eS5kYXRhKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtlbnRpdHk6IHRoaXMucHJvcHMuZW50aXR5LmRhdGF9KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmZldGNoU3BhcnFsKClcblx0XHR9XG5cdH1cblx0cmVsb2FkKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0ZW50aXR5OiBudWxsLFxuXHRcdFx0ZXJyOiBmYWxzZVxuXHRcdH0pXG5cdFx0dGhpcy5mZXRjaFNwYXJxbCgpXG5cdH1cblx0ZmV0Y2hTcGFycWwoKSB7XG5cdFx0RW50aXR5U2VydmljZS5nZXRFbnRpdHkodGhpcy5wcm9wcy5lbnRpdHksIChlcnIsIHJlcykgPT4ge1xuXHRcdFx0aWYoZXJyIHx8ICFyZXMuYm9keS5yZXN1bHRzLmJpbmRpbmdzLmxlbmd0aCkgcmV0dXJuIHRoaXMuZmV0Y2hBcGkoKVxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7ZW50aXR5OiByZXMuYm9keS5yZXN1bHRzLmJpbmRpbmdzWzBdfSlcblx0XHR9KVxuXHR9XG5cdGZldGNoQXBpKCkge1xuXHRcdEYxU2VydmljZS5nZXRFbnRpdHkodGhpcy5wcm9wcy5lbnRpdHksIChlcnIsIHJlcykgPT4ge1xuXHRcdFx0aWYoZXJyKSByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7ZW50aXR5OiBudWxsLCBlcnI6IHRydWV9KVxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGVudGl0eTogcmVzLFxuXHRcdFx0XHRlcnI6IGZhbHNlXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblx0cmVuZGVyTG9hZGVyKCkge1xuXHRcdHJldHVybiA8UGFwZXI+PFBhcGVyQ29udGVudD48Q2VudGVyQ29udGFpbmVyPjxMb2FkZXIgLz48L0NlbnRlckNvbnRhaW5lcj48L1BhcGVyQ29udGVudD48L1BhcGVyPlxuXHR9XG5cdHJlbmRlckNvbnRlbnQoKSB7XG5cdFx0bGV0IHtlbnRpdHl9ID0gdGhpcy5zdGF0ZVxuXHRcdGxldCBpbWcgPSBfLmhhcyhlbnRpdHksICdkZXBpY3Rpb24nKSA/IDxQYXBlckltZyBzcmM9e2VudGl0eS5kZXBpY3Rpb24udmFsdWV9IC8+IDogbnVsbFxuXHRcdGxldCBocmVmID0gXy5oYXMoZW50aXR5LCAnd2lraVBhZ2VJRCcpID8gPGRpdj48UGFwZXJMaW5lIC8+PFBhcGVyQnRuIGhyZWY9e2BodHRwczovL2VuLndpa2lwZWRpYS5vcmcvP2N1cmlkPSR7ZW50aXR5Lndpa2lQYWdlSUQudmFsdWV9YH0+UmVhZCBNb3JlPC9QYXBlckJ0bj48L2Rpdj4gOiBudWxsXG5cdFx0bGV0IGtleXMgPSBfKGVudGl0eSkua2V5cygpLmZpbHRlcihrID0+IF8uaW5kZXhPZihleGNsdWRlLCBrKT09LTEpLnZhbHVlKClcblx0XHRyZXR1cm4gKFxuXHRcdFx0PFBhcGVyPlxuXHRcdFx0XHR7aW1nfVxuXHRcdFx0XHQ8UGFwZXJIZWFkZXI+e3RoaXMucHJvcHMuZW50aXR5Lm5hbWV9PC9QYXBlckhlYWRlcj5cblx0XHRcdFx0PFBhcGVyQ29udGVudD5cblx0XHRcdFx0XHQ8UGFwZXJVbD5cblx0XHRcdFx0XHRcdHtrZXlzLm1hcChrID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIDxQYXBlckxpIGtleT17YCR7dGhpcy5wcm9wcy5lbnRpdHkuX2lkfS0ke2t9YH0gaGVhZD17VXRpbHMuY2FwaXRhbGl6ZShrKX0+e1V0aWxzLmZvcm1hdEVudGl0eVN0cmluZyhlbnRpdHlba10udmFsdWUpfTwvUGFwZXJMaT5cblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdDwvUGFwZXJVbD5cblx0XHRcdFx0XHR7aHJlZn1cblx0XHRcdFx0PC9QYXBlckNvbnRlbnQ+XG5cdFx0XHQ8L1BhcGVyPlxuXHRcdClcblx0fVxuXHRyZW5kZXJBZ2FpbkJ0bigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PFBhcGVyPlxuXHRcdFx0XHQ8UGFwZXJDb250ZW50PlxuXHRcdFx0XHRcdDxQYXBlckhlYWRlcj57dGhpcy5wcm9wcy5lbnRpdHkubmFtZX08L1BhcGVySGVhZGVyPlxuXHRcdFx0XHRcdDxzcGFuIHN0eWxlPXtzdHlsZXMucmVsb2FkfSBvbkNsaWNrPXt0aGlzLnJlbG9hZH0+Q291bGQgbm90IGZldGNoIGRhdGEuIENsaWNrIHRvIHRyeSBhZ2Fpbjwvc3Bhbj5cblx0XHRcdFx0PC9QYXBlckNvbnRlbnQ+XG5cdFx0XHQ8L1BhcGVyPlxuXHRcdClcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0aWYodGhpcy5zdGF0ZS5lcnIpIHJldHVybiB0aGlzLnJlbmRlckFnYWluQnRuKClcblx0XHRpZighdGhpcy5zdGF0ZS5lbnRpdHkpIHJldHVybiB0aGlzLnJlbmRlckxvYWRlcigpXG5cdFx0cmV0dXJuIHRoaXMucmVuZGVyQ29udGVudCgpXG5cdH1cbn1cblxuUHJvZmlsZS5wcm9wVHlwZXMgPSB7XG5cdGVudGl0eTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShQcm9maWxlKVxuIiwiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uLy4uL2xpYi9jb2xvcnMnXG5cbmNvbnN0IHN0eWxlcyA9IHtcblx0Y29udGFpbmVyOiB7XG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRoZWlnaHQ6ICcxMDAlJyxcblx0XHRwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblx0XHRiYWNrZ3JvdW5kOiBjb2xvcnMud2hpdGUsXG5cdFx0b3ZlcmZsb3c6ICdoaWRkZW4nXG5cdH0sXG5cdGlucENvbnRhaW5lcjoge1xuXHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHRcdHRvcDogMCxcblx0XHRsZWZ0OiAwLFxuXHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0aGVpZ2h0OiAnMTAwJScsXG5cdFx0Ym94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG5cdFx0YmFja2dyb3VuZDogJ25vbmUnLFxuXHRcdGJvcmRlcjogYDFweCBzb2xpZCAke2NvbG9ycy5ncmV5NTAwfWAsXG5cdFx0Zm9udFdlaWdodDogMzAwLFxuXHRcdHBhZGRpbmc6ICc1cHggNDVweCA1cHggNXB4Jyxcblx0XHRmb250U2l6ZTogJzFyZW0nLFxuXHRcdHRleHRBbGlnbjogJ2xlZnQnLFxuXHRcdGZvbnRGYW1pbHk6ICdSb2JvdG8nLFxuXHRcdG1hcmdpbjogMCxcblx0XHQnOmZvY3VzJzoge1xuXHRcdFx0b3V0bGluZTogJ25vbmUnLFxuXHRcdFx0Ym9yZGVyOiBgMXB4IHNvbGlkICR7Y29sb3JzLmdyZXk4MDB9YFxuXHRcdH1cblx0fSxcblx0cmVjb21tZW5kOiB7XG5cdFx0Y29sb3I6IGNvbG9ycy5ncmV5NTAwLFxuXHRcdHBhZGRpbmdUb3A6IDlcblx0fSxcblx0ZWFzZToge1xuXHRcdHRyYW5zaXRpb246ICdhbGwgMC4xcyBlYXNlLWluLW91dCdcblx0fSxcblx0d2hpdGVTcGFjZToge1xuXHRcdGNvbG9yOiBjb2xvcnMud2hpdGVcblx0fSxcblx0aWNvbjoge1xuXHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHRcdHdpZHRoOiA0MCxcblx0XHRoZWlnaHQ6IDQwLFxuXHRcdHRvcDogMCxcblx0XHRyaWdodDogMCxcblx0XHRkaXNwbGF5OiAnYmxvY2snLFxuXHRcdGZvbnRTaXplOiAnMWVtJyxcblx0XHRiYWNrZ3JvdW5kOiBjb2xvcnMuZ3JleTgwMCxcblx0XHRjb2xvcjogY29sb3JzLndoaXRlLFxuXHRcdGJvcmRlcjogJ25vbmUnLFxuXHRcdHBhZGRpbmc6IDAsXG5cdFx0Y3Vyc29yOiAncG9pbnRlcicsXG5cdFx0Jzpob3Zlcic6IHtcblx0XHRcdGNvbG9yOiBjb2xvcnMuZ3JleTUwMFxuXHRcdH1cblx0fVxufVxuXG5jbGFzcyBTZWFyY2hJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5vbktleSA9IHRoaXMub25LZXkuYmluZCh0aGlzKVxuXHRcdHRoaXMub25LZXlEb3duID0gdGhpcy5vbktleURvd24uYmluZCh0aGlzKVxuXHR9XG5cdG9uS2V5KGUpIHtcblx0XHRpZihlLmtleSA9PSAnRW50ZXInKSB0aGlzLnByb3BzLm9uRW50ZXIoKVxuXHR9XG5cdG9uS2V5RG93bihlKSB7XG5cdFx0aWYoZS5rZXkgPT0gJ1RhYicpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0dGhpcy5wcm9wcy5vblRhYigpXG5cdFx0fVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17W3N0eWxlcy5jb250YWluZXIsIHRoaXMucHJvcHMuc3R5bGVdfT5cblx0XHRcdFx0PGRpdiBzdHlsZT17W3N0eWxlcy5pbnBDb250YWluZXIsIHN0eWxlcy5yZWNvbW1lbmQsIHRoaXMucHJvcHMuaW5wU3R5bGVdfT48c3BhbiBzdHlsZT17c3R5bGVzLndoaXRlU3BhY2V9Pnt0aGlzLnByb3BzLnZhbHVlfTwvc3Bhbj57dGhpcy5wcm9wcy5yZWNvbW1lbmR9PC9kaXY+XG5cdFx0XHRcdDxpbnB1dCBrZXk9J2lucHV0U3JjJyB0eXBlPSd0ZXh0JyBzdHlsZT17W3N0eWxlcy5lYXNlLCBzdHlsZXMuaW5wQ29udGFpbmVyLCB0aGlzLnByb3BzLmlucFN0eWxlXX0gdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9IG9uQ2hhbmdlPXtlID0+IHRoaXMucHJvcHMub25DaGFuZ2UoZS50YXJnZXQudmFsdWUpfSBvbktleVByZXNzPXt0aGlzLm9uS2V5fSBvbktleURvd249e3RoaXMub25LZXlEb3dufSAvPlxuXHRcdFx0XHQ8YnV0dG9uIHN0eWxlPXtbc3R5bGVzLmljb24sIHN0eWxlcy5lYXNlXX0ga2V5PSdpbnRlcm5hbFNyY0J1dHRvbicgb25DbGljaz17ZSA9PiB0aGlzLnByb3BzLm9uRW50ZXIoKX0+PGkgY2xhc3NOYW1lPSdmYSBmYS1zZWFyY2gnIC8+PC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuU2VhcmNoSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuXHRzdHlsZToge30sXG5cdHZhbHVlOiAnJyxcblx0cmVjb21tZW5kOiAnJyxcblx0aW5wU3R5bGU6IHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShTZWFyY2hJbnB1dClcbiIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBhc3luYyBmcm9tICdhc3luYydcbmltcG9ydCBDb21iaW5hdG9yaWNzIGZyb20gJ2pzLWNvbWJpbmF0b3JpY3MnXG5pbXBvcnQge3NwZWNpYWxLZXl3b3Jkc30gZnJvbSAnLi9LZXl3b3JkcydcblxuaW1wb3J0IFV0aWxzIGZyb20gJy4vVXRpbHMnXG5cbmNsYXNzIEFuYWx5c2VyIHtcblx0c3RhdGljIHBhcnNlRW50aXRpZXMocXVlcnksIGVudGl0aWVzLCBjYikge1xuXHRcdGxldCBkYXRlcyA9IF8uZmlsdGVyKGVudGl0aWVzLCBlID0+IGUudHlwZT09J2RhdGUnKVxuXHRcdGxldCBfcHJvZmlsZXMgPSBfLmZpbHRlcihlbnRpdGllcywgZSA9PiBlLnR5cGUhPSdkYXRlJylcblx0XHRsZXQgZ3JvdXBlZCA9IF8uZ3JvdXBCeShfcHJvZmlsZXMsICd0eXBlJylcblx0XHRsZXQga2V5cyA9IF8ua2V5cyhncm91cGVkKVxuXHRcdEFuYWx5c2VyLmV2YWx1YXRlUHJvZmlsZXMocXVlcnksIF9wcm9maWxlcywgcHJvZmlsZXMgPT4ge1xuXHRcdFx0QW5hbHlzZXIuZGF0YUNhc2UocHJvZmlsZXMsIGRhdGVzLCBzdW1tYXJ5ID0+IGNiKHtkYXRlcywgcHJvZmlsZXN9KSlcblx0XHR9KVxuXHR9XG5cblx0c3RhdGljIGV2YWx1YXRlUHJvZmlsZXMocXVlcnksIHByb2ZpbGVzLCBjYikge1xuXHRcdGxldCBrZXlzID0gXyhxdWVyeS5zcGxpdCgnICcpKS5tYXAoayA9PiBfLmRlYnVycihrLnRvTG93ZXJDYXNlKCkpKS51bmlxKCkudmFsdWUoKVxuXHRcdGxldCBjb21iaW5hdGlvbnMgPSBVdGlscy5uYXR1cmFsS2V5d29yZENvbWJpbmF0aW9ucyhrZXlzKVxuXHRcdGxldCBwcyA9IF8ocHJvZmlsZXMpLm1hcChwID0+IHtcblx0XHRcdGxldCBrZXl3b3JkcyA9IF8ocC5rZXl3b3JkcykubWFwKGsgPT4gay5zcGxpdCgnICcpKS5mbGF0dGVuRGVlcCgpLm1hcChrID0+IF8uZGVidXJyKGspKS51bmlxKCkudmFsdWUoKVxuXHRcdFx0cC5jb25maWRlbnQgPSBfLmludGVyc2VjdGlvbihrZXlzLCBrZXl3b3JkcykubGVuZ3RoIC8ga2V5d29yZHMubGVuZ3RoXG5cdFx0XHRpZihfLmluZGV4T2YoY29tYmluYXRpb25zLCBfLmRlYnVycihwLm5hbWUudG9Mb3dlckNhc2UoKSkpPi0xKSBwLmNvbmZpZGVudCs9MVxuXHRcdFx0cmV0dXJuIHBcblx0XHR9KS5vcmRlckJ5KFsnY29uZmlkZW50JywgJ25hbWUnXSwgWydkZXNjJywgJ2FzYyddKS52YWx1ZSgpXG5cdFx0Y2IocHMpXG5cdH1cblxuXHRzdGF0aWMgZGF0YUNhc2UocHJvZmlsZXMsIGRhdGVzLCBjYikge1xuXHRcdGNiKClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbmFseXNlclxuIiwiZXhwb3J0IGNvbnN0IHNwZWNpYWxLZXl3b3JkcyA9IFt7XG5cdGtleTogJ2RyaXZlcicsXG5cdHdvcmRzOiBbJ2RyaXZlcicsICdkcml2ZXJzJ11cbn0sIHtcblx0a2V5OiAndGVhbScsXG5cdHdvcmRzOiBbJ2NvbnN0cnVjdG9yJywgJ2NvbnN0cnVjdG9ycycsICd0ZWFtJywgJ3RlYW1zJ11cbn1dXG4iLCJpbXBvcnQge0RPTX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcblxuY2xhc3MgVXRpbHMge1xuXHRzdGF0aWMgY2FwaXRhbGl6ZShzdHIpIHtcblx0XHRyZXR1cm4gXyhzdHIuc3BsaXQoLyg/PVtBLVpdKS8pKS5tYXAodHh0ID0+IHR4dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR4dC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKSkudmFsdWUoKS5qb2luKCcgJylcblx0fVxuXG5cdHN0YXRpYyBmb3JtYXRFbnRpdHlTdHJpbmcoZSkge1xuXHRcdGlmKGUuc3RhcnRzV2l0aCgnaHR0cDovLycpIHx8IGUuc3RhcnRzV2l0aCgnaHR0cHM6Ly8nKSkge1xuXHRcdFx0cmV0dXJuIERPTS5hKHtocmVmOiBlLCB0YXJnZXQ6ICdfYmxhbmsnfSwgZSlcblx0XHR9XG5cdFx0aWYoL14oXFxkezR9KS0oXFxkezEsMn0pLShcXGR7MSwyfSkkLy50ZXN0KGUpKSB7XG5cdFx0XHRyZXR1cm4gbW9tZW50KGUsICdZWVlZLU1NLUREJykuZm9ybWF0KCdMTCcpXG5cdFx0fVxuXHRcdHJldHVybiBlXG5cdH1cblxuXHRzdGF0aWMgbmF0dXJhbEtleXdvcmRDb21iaW5hdGlvbnMoa2V5cykge1xuXHRcdGxldCBjaHVua3MgPSBrZXlzLmxlbmd0aFxuXHRcdGxldCByZXQgPSBbXVxuXHRcdGZvcihsZXQgeD0xO3g8PWNodW5rczt4KyspIHtcblx0XHRcdGZvcihsZXQgeT0xO3k8PShjaHVua3MteCsxKTt5KyspIHtcblx0XHRcdFx0cmV0LnB1c2goXy5zbGljZShrZXlzLCB5LTEsICh5LTEreCkpLmpvaW4oJyAnKSlcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJldFxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWxzXG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIHJlZDUwOiAnI2ZmZWJlZScsXG4gIHJlZDEwMDogJyNmZmNkZDInLFxuICByZWQyMDA6ICcjZWY5YTlhJyxcbiAgcmVkMzAwOiAnI2U1NzM3MycsXG4gIHJlZDQwMDogJyNlZjUzNTAnLFxuICByZWQ1MDA6ICcjZjQ0MzM2JyxcbiAgcmVkNjAwOiAnI2U1MzkzNScsXG4gIHJlZDcwMDogJyNkMzJmMmYnLFxuICByZWQ4MDA6ICcjYzYyODI4JyxcbiAgcmVkOTAwOiAnI2I3MWMxYycsXG4gIHJlZEExMDA6ICcjZmY4YTgwJyxcbiAgcmVkQTIwMDogJyNmZjUyNTInLFxuICByZWRBNDAwOiAnI2ZmMTc0NCcsXG4gIHJlZEE3MDA6ICcjZDUwMDAwJyxcblxuICBwaW5rNTA6ICcjZmNlNGVjJyxcbiAgcGluazEwMDogJyNmOGJiZDAnLFxuICBwaW5rMjAwOiAnI2Y0OGZiMScsXG4gIHBpbmszMDA6ICcjZjA2MjkyJyxcbiAgcGluazQwMDogJyNlYzQwN2EnLFxuICBwaW5rNTAwOiAnI2U5MWU2MycsXG4gIHBpbms2MDA6ICcjZDgxYjYwJyxcbiAgcGluazcwMDogJyNjMjE4NWInLFxuICBwaW5rODAwOiAnI2FkMTQ1NycsXG4gIHBpbms5MDA6ICcjODgwZTRmJyxcbiAgcGlua0ExMDA6ICcjZmY4MGFiJyxcbiAgcGlua0EyMDA6ICcjZmY0MDgxJyxcbiAgcGlua0E0MDA6ICcjZjUwMDU3JyxcbiAgcGlua0E3MDA6ICcjYzUxMTYyJyxcblxuICBwdXJwbGU1MDogJyNmM2U1ZjUnLFxuICBwdXJwbGUxMDA6ICcjZTFiZWU3JyxcbiAgcHVycGxlMjAwOiAnI2NlOTNkOCcsXG4gIHB1cnBsZTMwMDogJyNiYTY4YzgnLFxuICBwdXJwbGU0MDA6ICcjYWI0N2JjJyxcbiAgcHVycGxlNTAwOiAnIzljMjdiMCcsXG4gIHB1cnBsZTYwMDogJyM4ZTI0YWEnLFxuICBwdXJwbGU3MDA6ICcjN2IxZmEyJyxcbiAgcHVycGxlODAwOiAnIzZhMWI5YScsXG4gIHB1cnBsZTkwMDogJyM0YTE0OGMnLFxuICBwdXJwbGVBMTAwOiAnI2VhODBmYycsXG4gIHB1cnBsZUEyMDA6ICcjZTA0MGZiJyxcbiAgcHVycGxlQTQwMDogJyNkNTAwZjknLFxuICBwdXJwbGVBNzAwOiAnI2FhMDBmZicsXG5cbiAgZGVlcFB1cnBsZTUwOiAnI2VkZTdmNicsXG4gIGRlZXBQdXJwbGUxMDA6ICcjZDFjNGU5JyxcbiAgZGVlcFB1cnBsZTIwMDogJyNiMzlkZGInLFxuICBkZWVwUHVycGxlMzAwOiAnIzk1NzVjZCcsXG4gIGRlZXBQdXJwbGU0MDA6ICcjN2U1N2MyJyxcbiAgZGVlcFB1cnBsZTUwMDogJyM2NzNhYjcnLFxuICBkZWVwUHVycGxlNjAwOiAnIzVlMzViMScsXG4gIGRlZXBQdXJwbGU3MDA6ICcjNTEyZGE4JyxcbiAgZGVlcFB1cnBsZTgwMDogJyM0NTI3YTAnLFxuICBkZWVwUHVycGxlOTAwOiAnIzMxMWI5MicsXG4gIGRlZXBQdXJwbGVBMTAwOiAnI2IzODhmZicsXG4gIGRlZXBQdXJwbGVBMjAwOiAnIzdjNGRmZicsXG4gIGRlZXBQdXJwbGVBNDAwOiAnIzY1MWZmZicsXG4gIGRlZXBQdXJwbGVBNzAwOiAnIzYyMDBlYScsXG5cbiAgaW5kaWdvNTA6ICcjZThlYWY2JyxcbiAgaW5kaWdvMTAwOiAnI2M1Y2FlOScsXG4gIGluZGlnbzIwMDogJyM5ZmE4ZGEnLFxuICBpbmRpZ28zMDA6ICcjNzk4NmNiJyxcbiAgaW5kaWdvNDAwOiAnIzVjNmJjMCcsXG4gIGluZGlnbzUwMDogJyMzZjUxYjUnLFxuICBpbmRpZ282MDA6ICcjMzk0OWFiJyxcbiAgaW5kaWdvNzAwOiAnIzMwM2Y5ZicsXG4gIGluZGlnbzgwMDogJyMyODM1OTMnLFxuICBpbmRpZ285MDA6ICcjMWEyMzdlJyxcbiAgaW5kaWdvQTEwMDogJyM4YzllZmYnLFxuICBpbmRpZ29BMjAwOiAnIzUzNmRmZScsXG4gIGluZGlnb0E0MDA6ICcjM2Q1YWZlJyxcbiAgaW5kaWdvQTcwMDogJyMzMDRmZmUnLFxuXG4gIGJsdWU1MDogJyNlM2YyZmQnLFxuICBibHVlMTAwOiAnI2JiZGVmYicsXG4gIGJsdWUyMDA6ICcjOTBjYWY5JyxcbiAgYmx1ZTMwMDogJyM2NGI1ZjYnLFxuICBibHVlNDAwOiAnIzQyYTVmNScsXG4gIGJsdWU1MDA6ICcjMjE5NmYzJyxcbiAgYmx1ZTYwMDogJyMxZTg4ZTUnLFxuICBibHVlNzAwOiAnIzE5NzZkMicsXG4gIGJsdWU4MDA6ICcjMTU2NWMwJyxcbiAgYmx1ZTkwMDogJyMwZDQ3YTEnLFxuICBibHVlQTEwMDogJyM4MmIxZmYnLFxuICBibHVlQTIwMDogJyM0NDhhZmYnLFxuICBibHVlQTQwMDogJyMyOTc5ZmYnLFxuICBibHVlQTcwMDogJyMyOTYyZmYnLFxuXG4gIGxpZ2h0Qmx1ZTUwOiAnI2UxZjVmZScsXG4gIGxpZ2h0Qmx1ZTEwMDogJyNiM2U1ZmMnLFxuICBsaWdodEJsdWUyMDA6ICcjODFkNGZhJyxcbiAgbGlnaHRCbHVlMzAwOiAnIzRmYzNmNycsXG4gIGxpZ2h0Qmx1ZTQwMDogJyMyOWI2ZjYnLFxuICBsaWdodEJsdWU1MDA6ICcjMDNhOWY0JyxcbiAgbGlnaHRCbHVlNjAwOiAnIzAzOWJlNScsXG4gIGxpZ2h0Qmx1ZTcwMDogJyMwMjg4ZDEnLFxuICBsaWdodEJsdWU4MDA6ICcjMDI3N2JkJyxcbiAgbGlnaHRCbHVlOTAwOiAnIzAxNTc5YicsXG4gIGxpZ2h0Qmx1ZUExMDA6ICcjODBkOGZmJyxcbiAgbGlnaHRCbHVlQTIwMDogJyM0MGM0ZmYnLFxuICBsaWdodEJsdWVBNDAwOiAnIzAwYjBmZicsXG4gIGxpZ2h0Qmx1ZUE3MDA6ICcjMDA5MWVhJyxcblxuICBjeWFuNTA6ICcjZTBmN2ZhJyxcbiAgY3lhbjEwMDogJyNiMmViZjInLFxuICBjeWFuMjAwOiAnIzgwZGVlYScsXG4gIGN5YW4zMDA6ICcjNGRkMGUxJyxcbiAgY3lhbjQwMDogJyMyNmM2ZGEnLFxuICBjeWFuNTAwOiAnIzAwYmNkNCcsXG4gIGN5YW42MDA6ICcjMDBhY2MxJyxcbiAgY3lhbjcwMDogJyMwMDk3YTcnLFxuICBjeWFuODAwOiAnIzAwODM4ZicsXG4gIGN5YW45MDA6ICcjMDA2MDY0JyxcbiAgY3lhbkExMDA6ICcjODRmZmZmJyxcbiAgY3lhbkEyMDA6ICcjMThmZmZmJyxcbiAgY3lhbkE0MDA6ICcjMDBlNWZmJyxcbiAgY3lhbkE3MDA6ICcjMDBiOGQ0JyxcblxuICB0ZWFsNTA6ICcjZTBmMmYxJyxcbiAgdGVhbDEwMDogJyNiMmRmZGInLFxuICB0ZWFsMjAwOiAnIzgwY2JjNCcsXG4gIHRlYWwzMDA6ICcjNGRiNmFjJyxcbiAgdGVhbDQwMDogJyMyNmE2OWEnLFxuICB0ZWFsNTAwOiAnIzAwOTY4OCcsXG4gIHRlYWw2MDA6ICcjMDA4OTdiJyxcbiAgdGVhbDcwMDogJyMwMDc5NmInLFxuICB0ZWFsODAwOiAnIzAwNjk1YycsXG4gIHRlYWw5MDA6ICcjMDA0ZDQwJyxcbiAgdGVhbEExMDA6ICcjYTdmZmViJyxcbiAgdGVhbEEyMDA6ICcjNjRmZmRhJyxcbiAgdGVhbEE0MDA6ICcjMWRlOWI2JyxcbiAgdGVhbEE3MDA6ICcjMDBiZmE1JyxcblxuICBncmVlbjUwOiAnI2U4ZjVlOScsXG4gIGdyZWVuMTAwOiAnI2M4ZTZjOScsXG4gIGdyZWVuMjAwOiAnI2E1ZDZhNycsXG4gIGdyZWVuMzAwOiAnIzgxYzc4NCcsXG4gIGdyZWVuNDAwOiAnIzY2YmI2YScsXG4gIGdyZWVuNTAwOiAnIzRjYWY1MCcsXG4gIGdyZWVuNjAwOiAnIzQzYTA0NycsXG4gIGdyZWVuNzAwOiAnIzM4OGUzYycsXG4gIGdyZWVuODAwOiAnIzJlN2QzMicsXG4gIGdyZWVuOTAwOiAnIzFiNWUyMCcsXG4gIGdyZWVuQTEwMDogJyNiOWY2Y2EnLFxuICBncmVlbkEyMDA6ICcjNjlmMGFlJyxcbiAgZ3JlZW5BNDAwOiAnIzAwZTY3NicsXG4gIGdyZWVuQTcwMDogJyMwMGM4NTMnLFxuXG4gIGxpZ2h0R3JlZW41MDogJyNmMWY4ZTknLFxuICBsaWdodEdyZWVuMTAwOiAnI2RjZWRjOCcsXG4gIGxpZ2h0R3JlZW4yMDA6ICcjYzVlMWE1JyxcbiAgbGlnaHRHcmVlbjMwMDogJyNhZWQ1ODEnLFxuICBsaWdodEdyZWVuNDAwOiAnIzljY2M2NScsXG4gIGxpZ2h0R3JlZW41MDA6ICcjOGJjMzRhJyxcbiAgbGlnaHRHcmVlbjYwMDogJyM3Y2IzNDInLFxuICBsaWdodEdyZWVuNzAwOiAnIzY4OWYzOCcsXG4gIGxpZ2h0R3JlZW44MDA6ICcjNTU4YjJmJyxcbiAgbGlnaHRHcmVlbjkwMDogJyMzMzY5MWUnLFxuICBsaWdodEdyZWVuQTEwMDogJyNjY2ZmOTAnLFxuICBsaWdodEdyZWVuQTIwMDogJyNiMmZmNTknLFxuICBsaWdodEdyZWVuQTQwMDogJyM3NmZmMDMnLFxuICBsaWdodEdyZWVuQTcwMDogJyM2NGRkMTcnLFxuXG4gIGxpbWU1MDogJyNmOWZiZTcnLFxuICBsaW1lMTAwOiAnI2YwZjRjMycsXG4gIGxpbWUyMDA6ICcjZTZlZTljJyxcbiAgbGltZTMwMDogJyNkY2U3NzUnLFxuICBsaW1lNDAwOiAnI2Q0ZTE1NycsXG4gIGxpbWU1MDA6ICcjY2RkYzM5JyxcbiAgbGltZTYwMDogJyNjMGNhMzMnLFxuICBsaW1lNzAwOiAnI2FmYjQyYicsXG4gIGxpbWU4MDA6ICcjOWU5ZDI0JyxcbiAgbGltZTkwMDogJyM4Mjc3MTcnLFxuICBsaW1lQTEwMDogJyNmNGZmODEnLFxuICBsaW1lQTIwMDogJyNlZWZmNDEnLFxuICBsaW1lQTQwMDogJyNjNmZmMDAnLFxuICBsaW1lQTcwMDogJyNhZWVhMDAnLFxuXG4gIHllbGxvdzUwOiAnI2ZmZmRlNycsXG4gIHllbGxvdzEwMDogJyNmZmY5YzQnLFxuICB5ZWxsb3cyMDA6ICcjZmZmNTlkJyxcbiAgeWVsbG93MzAwOiAnI2ZmZjE3NicsXG4gIHllbGxvdzQwMDogJyNmZmVlNTgnLFxuICB5ZWxsb3c1MDA6ICcjZmZlYjNiJyxcbiAgeWVsbG93NjAwOiAnI2ZkZDgzNScsXG4gIHllbGxvdzcwMDogJyNmYmMwMmQnLFxuICB5ZWxsb3c4MDA6ICcjZjlhODI1JyxcbiAgeWVsbG93OTAwOiAnI2Y1N2YxNycsXG4gIHllbGxvd0ExMDA6ICcjZmZmZjhkJyxcbiAgeWVsbG93QTIwMDogJyNmZmZmMDAnLFxuICB5ZWxsb3dBNDAwOiAnI2ZmZWEwMCcsXG4gIHllbGxvd0E3MDA6ICcjZmZkNjAwJyxcblxuICBhbWJlcjUwOiAnI2ZmZjhlMScsXG4gIGFtYmVyMTAwOiAnI2ZmZWNiMycsXG4gIGFtYmVyMjAwOiAnI2ZmZTA4MicsXG4gIGFtYmVyMzAwOiAnI2ZmZDU0ZicsXG4gIGFtYmVyNDAwOiAnI2ZmY2EyOCcsXG4gIGFtYmVyNTAwOiAnI2ZmYzEwNycsXG4gIGFtYmVyNjAwOiAnI2ZmYjMwMCcsXG4gIGFtYmVyNzAwOiAnI2ZmYTAwMCcsXG4gIGFtYmVyODAwOiAnI2ZmOGYwMCcsXG4gIGFtYmVyOTAwOiAnI2ZmNmYwMCcsXG4gIGFtYmVyQTEwMDogJyNmZmU1N2YnLFxuICBhbWJlckEyMDA6ICcjZmZkNzQwJyxcbiAgYW1iZXJBNDAwOiAnI2ZmYzQwMCcsXG4gIGFtYmVyQTcwMDogJyNmZmFiMDAnLFxuXG4gIG9yYW5nZTUwOiAnI2ZmZjNlMCcsXG4gIG9yYW5nZTEwMDogJyNmZmUwYjInLFxuICBvcmFuZ2UyMDA6ICcjZmZjYzgwJyxcbiAgb3JhbmdlMzAwOiAnI2ZmYjc0ZCcsXG4gIG9yYW5nZTQwMDogJyNmZmE3MjYnLFxuICBvcmFuZ2U1MDA6ICcjZmY5ODAwJyxcbiAgb3JhbmdlNjAwOiAnI2ZiOGMwMCcsXG4gIG9yYW5nZTcwMDogJyNmNTdjMDAnLFxuICBvcmFuZ2U4MDA6ICcjZWY2YzAwJyxcbiAgb3JhbmdlOTAwOiAnI2U2NTEwMCcsXG4gIG9yYW5nZUExMDA6ICcjZmZkMTgwJyxcbiAgb3JhbmdlQTIwMDogJyNmZmFiNDAnLFxuICBvcmFuZ2VBNDAwOiAnI2ZmOTEwMCcsXG4gIG9yYW5nZUE3MDA6ICcjZmY2ZDAwJyxcblxuICBkZWVwT3JhbmdlNTA6ICcjZmJlOWU3JyxcbiAgZGVlcE9yYW5nZTEwMDogJyNmZmNjYmMnLFxuICBkZWVwT3JhbmdlMjAwOiAnI2ZmYWI5MScsXG4gIGRlZXBPcmFuZ2UzMDA6ICcjZmY4YTY1JyxcbiAgZGVlcE9yYW5nZTQwMDogJyNmZjcwNDMnLFxuICBkZWVwT3JhbmdlNTAwOiAnI2ZmNTcyMicsXG4gIGRlZXBPcmFuZ2U2MDA6ICcjZjQ1MTFlJyxcbiAgZGVlcE9yYW5nZTcwMDogJyNlNjRhMTknLFxuICBkZWVwT3JhbmdlODAwOiAnI2Q4NDMxNScsXG4gIGRlZXBPcmFuZ2U5MDA6ICcjYmYzNjBjJyxcbiAgZGVlcE9yYW5nZUExMDA6ICcjZmY5ZTgwJyxcbiAgZGVlcE9yYW5nZUEyMDA6ICcjZmY2ZTQwJyxcbiAgZGVlcE9yYW5nZUE0MDA6ICcjZmYzZDAwJyxcbiAgZGVlcE9yYW5nZUE3MDA6ICcjZGQyYzAwJyxcblxuICBicm93bjUwOiAnI2VmZWJlOScsXG4gIGJyb3duMTAwOiAnI2Q3Y2NjOCcsXG4gIGJyb3duMjAwOiAnI2JjYWFhNCcsXG4gIGJyb3duMzAwOiAnI2ExODg3ZicsXG4gIGJyb3duNDAwOiAnIzhkNmU2MycsXG4gIGJyb3duNTAwOiAnIzc5NTU0OCcsXG4gIGJyb3duNjAwOiAnIzZkNGM0MScsXG4gIGJyb3duNzAwOiAnIzVkNDAzNycsXG4gIGJyb3duODAwOiAnIzRlMzQyZScsXG4gIGJyb3duOTAwOiAnIzNlMjcyMycsXG5cbiAgYmx1ZUdyZXk1MDogJyNlY2VmZjEnLFxuICBibHVlR3JleTEwMDogJyNjZmQ4ZGMnLFxuICBibHVlR3JleTIwMDogJyNiMGJlYzUnLFxuICBibHVlR3JleTMwMDogJyM5MGE0YWUnLFxuICBibHVlR3JleTQwMDogJyM3ODkwOWMnLFxuICBibHVlR3JleTUwMDogJyM2MDdkOGInLFxuICBibHVlR3JleTYwMDogJyM1NDZlN2EnLFxuICBibHVlR3JleTcwMDogJyM0NTVhNjQnLFxuICBibHVlR3JleTgwMDogJyMzNzQ3NGYnLFxuICBibHVlR3JleTkwMDogJyMyNjMyMzgnLFxuXG4gIGdyZXk1MDogJyNmYWZhZmEnLFxuICBncmV5MTAwOiAnI2Y1ZjVmNScsXG4gIGdyZXkyMDA6ICcjZWVlZWVlJyxcbiAgZ3JleTMwMDogJyNlMGUwZTAnLFxuICBncmV5NDAwOiAnI2JkYmRiZCcsXG4gIGdyZXk1MDA6ICcjOWU5ZTllJyxcbiAgZ3JleTYwMDogJyM3NTc1NzUnLFxuICBncmV5NzAwOiAnIzYxNjE2MScsXG4gIGdyZXk4MDA6ICcjNDI0MjQyJyxcbiAgZ3JleTkwMDogJyMyMTIxMjEnLFxuXG4gIGJsYWNrOiAnIzAwMDAwMCcsXG4gIHdoaXRlOiAnI2ZmZmZmZicsXG5cbiAgdHJhbnNwYXJlbnQ6ICdyZ2JhKDAsIDAsIDAsIDApJyxcbiAgZnVsbEJsYWNrOiAncmdiYSgwLCAwLCAwLCAxKScsXG4gIGRhcmtCbGFjazogJ3JnYmEoMCwgMCwgMCwgMC44NyknLFxuICBsaWdodEJsYWNrOiAncmdiYSgwLCAwLCAwLCAwLjU0KScsXG4gIG1pbkJsYWNrOiAncmdiYSgwLCAwLCAwLCAwLjI2KScsXG4gIGZhaW50QmxhY2s6ICdyZ2JhKDAsIDAsIDAsIDAuMTIpJyxcbiAgZnVsbFdoaXRlOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXG4gIGRhcmtXaGl0ZTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC44NyknLFxuICBsaWdodFdoaXRlOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0KSdcbn1cbiIsImltcG9ydCAkIGZyb20gJ3N1cGVyYWdlbnQnXG5cbmNsYXNzIEVudGl0eVNlcnZpY2Uge1xuXHRzdGF0aWMgZ2V0RW50aXR5KGVudGl0eSwgY2IpIHtcblx0XHQkLnBvc3QoJy9haS9lbnRpdHknKVxuXHRcdC5zZW5kKGVudGl0eSlcblx0XHQuZW5kKChlcnIsIHJlcykgPT4ge1xuXHRcdFx0Y2IoZXJyLCByZXMpXG5cdFx0fSlcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbnRpdHlTZXJ2aWNlXG4iLCJpbXBvcnQgJCBmcm9tICdzdXBlcmFnZW50J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IGFzeW5jIGZyb20gJ2FzeW5jJ1xuXG5jbGFzcyBGMVNlcnZpY2Uge1xuXHRzdGF0aWMgZ2V0RW50aXR5KGVudGl0eSwgY2IpIHtcblx0XHRsZXQgdHlwZSA9ICdkcml2ZXJzJ1xuXHRcdGlmKGVudGl0eS50eXBlID09ICd0cmFjaycpIHtcblx0XHRcdHR5cGUgPSAnY2lyY3VpdHMnXG5cdFx0fSBlbHNlIGlmKGVudGl0eS50eXBlID09ICd0ZWFtJykge1xuXHRcdFx0dHlwZSA9ICdjb25zdHJ1Y3RvcnMnXG5cdFx0fVxuXHRcdCQuZ2V0KGBodHRwOi8vZXJnYXN0LmNvbS9hcGkvZjEvJHt0eXBlfS8ke2VudGl0eS5lcmdhc3RJRH0uanNvbmApXG5cdFx0LmVuZCgoZXJyLCByZXMpID0+IHtcblx0XHRcdGlmKGVycikgcmV0dXJuIGNiKGVycilcblx0XHRcdGlmKGVudGl0eS50eXBlPT0nZHJpdmVyJykge1xuXHRcdFx0XHRsZXQgZGF0YSA9IHJlcy5ib2R5Lk1SRGF0YS5Ecml2ZXJUYWJsZS5Ecml2ZXJzXG5cdFx0XHRcdGlmKCFkYXRhLmxlbmd0aCkgcmV0dXJuIGNiKHRydWUpXG5cdFx0XHRcdGRhdGEgPSBfLmZpcnN0KGRhdGEpXG5cdFx0XHRcdHJldHVybiBjYihudWxsLCB7XG5cdFx0XHRcdFx0Z2l2ZW5OYW1lOiB7dmFsdWU6IGRhdGEuZ2l2ZW5OYW1lIHx8ICduL2EnfSxcblx0XHRcdFx0XHRmYW1pbHlOYW1lOiB7dmFsdWU6IGRhdGEuZmFtaWx5TmFtZSB8fCAnbi9hJ30sXG5cdFx0XHRcdFx0Y29kZToge3ZhbHVlOiBkYXRhLmNvZGUgfHwgJ24vYSd9LFxuXHRcdFx0XHRcdGRhdGVPZkJpcnRoOiB7dmFsdWU6IGRhdGEuZGF0ZU9mQmlydGggfHwgJ24vYSd9LFxuXHRcdFx0XHRcdG5hdGlvbmFsaXR5OiB7dmFsdWU6IGRhdGEubmF0aW9uYWxpdHkgfHwgJ24vYSd9LFxuXHRcdFx0XHRcdG51bWJlcjoge3ZhbHVlOiBkYXRhLnBlcm1hbmVudE51bWJlciB8fCAnbi9hJ30sXG5cdFx0XHRcdFx0dXJsOiB7dmFsdWU6IGRhdGEudXJsIHx8ICduL2EnfVxuXHRcdFx0XHR9KVxuXHRcdFx0fSBlbHNlIGlmKGVudGl0eS50eXBlPT0ndHJhY2snKSB7XG5cdFx0XHRcdGxldCBkYXRhID0gcmVzLmJvZHkuTVJEYXRhLkNpcmN1aXRUYWJsZS5DaXJjdWl0c1xuXHRcdFx0XHRpZighZGF0YS5sZW5ndGgpIHJldHVybiBjYih0cnVlKVxuXHRcdFx0XHRkYXRhID0gXy5maXJzdChkYXRhKVxuXHRcdFx0XHRyZXR1cm4gY2IobnVsbCwge1xuXHRcdFx0XHRcdG5hbWU6IHt2YWx1ZTogZGF0YS5jaXJjdWl0TmFtZSB8fCAnbi9hJ30sXG5cdFx0XHRcdFx0Y2l0eToge3ZhbHVlOiBkYXRhLkxvY2F0aW9uLmNpdHkgfHwgJ24vYSd9LFxuXHRcdFx0XHRcdGNvdW50cnk6IHt2YWx1ZTogZGF0YS5Mb2NhdGlvbi5jb3VudHJ5IHx8ICduL2EnfSxcblx0XHRcdFx0XHR1cmw6IHt2YWx1ZTogZGF0YS51cmwgfHwgJ24vYSd9XG5cdFx0XHRcdH0pXG5cdFx0XHR9IGVsc2UgaWYoZW50aXR5LnR5cGU9PSd0ZWFtJykge1xuXHRcdFx0XHRsZXQgZGF0YSA9IHJlcy5ib2R5Lk1SRGF0YS5Db25zdHJ1Y3RvclRhYmxlLkNvbnN0cnVjdG9yc1xuXHRcdFx0XHRpZighZGF0YS5sZW5ndGgpIHJldHVybiBjYih0cnVlKVxuXHRcdFx0XHRkYXRhID0gXy5maXJzdChkYXRhKVxuXHRcdFx0XHRyZXR1cm4gY2IobnVsbCwge1xuXHRcdFx0XHRcdG5hbWU6IHt2YWx1ZTogZGF0YS5uYW1lIHx8ICduL2EnfSxcblx0XHRcdFx0XHRuYXRpb25hbGl0eToge3ZhbHVlOiBkYXRhLm5hdGlvbmFsaXR5IHx8ICduL2EnfSxcblx0XHRcdFx0XHR1cmw6IHt2YWx1ZTogZGF0YS51cmwgfHwgJ24vYSd9XG5cdFx0XHRcdH0pXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY2IodHJ1ZSlcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cblx0c3RhdGljIGdldERyaXZlclNlYXNvblJlc3VsdHMoeWVhciwgY2IpIHtcblx0XHRGMVNlcnZpY2UuY2FsbEFwaShgaHR0cDovL2VyZ2FzdC5jb20vYXBpL2YxLyR7eWVhcn0vZHJpdmVyU3RhbmRpbmdzLmpzb25gLCBbJ1N0YW5kaW5nc1RhYmxlJywgJ1N0YW5kaW5nc0xpc3RzJywgJ0RyaXZlclN0YW5kaW5ncyddLCBjYilcblx0fVxuXG5cdHN0YXRpYyBnZXRUZWFtU2Vhc29uUmVzdWx0cyh5ZWFyLCBjYikge1xuXHRcdEYxU2VydmljZS5jYWxsQXBpKGBodHRwOi8vZXJnYXN0LmNvbS9hcGkvZjEvJHt5ZWFyfS9jb25zdHJ1Y3RvclN0YW5kaW5ncy5qc29uYCwgWydTdGFuZGluZ3NUYWJsZScsICdTdGFuZGluZ3NMaXN0cycsICdDb25zdHJ1Y3RvclN0YW5kaW5ncyddLCBjYilcblx0fVxuXG5cdHN0YXRpYyBnZXRSYWNlQ2FsZW5kYXIoeWVhciwgY2IpIHtcblx0XHRGMVNlcnZpY2UuY2FsbEFwaShgaHR0cDovL2VyZ2FzdC5jb20vYXBpL2YxLyR7eWVhcn0uanNvbmAsIFsnUmFjZVRhYmxlJywgJ1JhY2VzJ10sIGNiKVxuXHR9XG5cblx0c3RhdGljIGdldERyaXZlclJlc3VsdHNCeVNlYXNvbihkcml2ZXIsIHllYXIsIGNiKSB7XG5cdFx0RjFTZXJ2aWNlLmNhbGxBcGkoYGh0dHA6Ly9lcmdhc3QuY29tL2FwaS9mMS8ke3llYXJ9L2RyaXZlcnMvJHtkcml2ZXJ9L3Jlc3VsdHMuanNvbmAsIFsnUmFjZVRhYmxlJywgJ1JhY2VzJ10sIGNiKVxuXHR9XG5cblx0c3RhdGljIGNhbGxBcGkobGluaywga2V5cywgY2IpIHtcblx0XHQkLmdldChsaW5rKVxuXHRcdC5lbmQoKGVyciwgcmVzKSA9PiB7XG5cdFx0XHRpZihlcnIpIHJldHVybiBjYih0cnVlKVxuXHRcdFx0bGV0IGRhdGEgPSByZXMuYm9keS5NUkRhdGFcblx0XHRcdGFzeW5jLmZvckVhY2hTZXJpZXMoa2V5cywgKGssIGNiMSkgPT4ge1xuXHRcdFx0XHRpZighZGF0YVtrXSkgcmV0dXJuIGNiMSh0cnVlKVxuXHRcdFx0XHRkYXRhID0gZGF0YVtrXVxuXHRcdFx0XHRpZihfLmlzQXJyYXkoZGF0YSkpIHtcblx0XHRcdFx0XHRpZighZGF0YS5sZW5ndGgpIHJldHVybiBjYjEodHJ1ZSlcblx0XHRcdFx0XHRpZihfLmxhc3Qoa2V5cykhPWspIGRhdGEgPSBfLmZpcnN0KGRhdGEpXG5cdFx0XHRcdH1cblx0XHRcdFx0Y2IxKClcblx0XHRcdH0sIGVyciA9PiBjYihlcnIsIGRhdGEpKVxuXHRcdH0pXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRjFTZXJ2aWNlXG4iLCJpbXBvcnQgJCBmcm9tICdzdXBlcmFnZW50J1xuXG5jb25zdCB0ZW1wID0gW1xuXHQnTGV3aXMgSGFtaWx0b24nLFxuXHQnTmljbyBSb3NiZXJnJyxcblx0J1NlYmFzdGlhbiBWZXR0ZWwnLFxuXHQnS2ltaSBSYWlra29uZW4nLFxuXHQnRGFuaWVsIFJpY2NpYXJkbycsXG5cdCdNYXggVmVyc3RhcHBlbicsXG5cdCdGZWxpcHBlIE1hc3NhJyxcblx0J1ZhbHR0ZXJpIEJvdHRhcycsXG5cdCdTZXJnaW8gUGVyZXonLFxuXHQnTmljbyBIdWxrZW5iZXJnJyxcblx0J0RhbmlpbCBLdnlhdCcsXG5cdCdDYXJsb3MgU2FpbnonLFxuXHQnUm9tYWluIEdyb3NqZWFuJyxcblx0J0Zlcm5hbmRvIEFsb25zbycsXG5cdCdKZW5zb24gQnV0dG9uJyxcblx0J0tldmluIE1hZ251c3NlbicsXG5cdCdFc3RlYmFuIEd1dGllcnJleicsXG5cdCdKb2x5b24gUGFsbWVyJyxcblx0J01hcmN1cyBFcmljc3NvbicsXG5cdCdQYXNjYWwgV2VocmxlaW4nLFxuXHQnRmVsaXBlIE5hc3InLFxuXHQnUmlvIEhhcnlhbnRvJ1xuXVxuXG5jbGFzcyBTdWdnZXN0aW9uU2VydmljZSB7XG5cdHN0YXRpYyBnZXRTdWdnZXN0aW9ucyhjYikge1xuXHRcdCQuZ2V0KCcvYWkvc3VnZ2VzdGlvbnMnKVxuXHRcdC5lbmQoKGVyciwgcmVzKSA9PiB7XG5cdFx0XHRjYihlcnIgPyBbXSA6IHJlcy5ib2R5KVxuXHRcdH0pXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3VnZ2VzdGlvblNlcnZpY2VcbiIsImltcG9ydCAkIGZyb20gJ3N1cGVyYWdlbnQnXG5cbmNsYXNzIFRleHRBbmFseXNpc1NlcnZpY2Uge1xuXHRzdGF0aWMgYW5hbHlzZSh0eHQsIGNiKSB7XG5cdFx0JC5wb3N0KGAvYWkvYW5hbHlzZWApXG5cdFx0LnNlbmQoe3RleHQ6IHR4dH0pXG5cdFx0LmVuZCgoZXJyLCByZXMpID0+IHtcblx0XHRcdGNiKGVyciwgcmVzLmJvZHkgfHwgbnVsbClcblx0XHR9KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRBbmFseXNpc1NlcnZpY2VcbiJdfQ==
