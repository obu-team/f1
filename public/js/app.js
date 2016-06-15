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

},{"../lib/colors":22,"../services/Suggestion.Service":24,"./UI/CenterContainer":6,"./UI/FullScreen":7,"./UI/Loader":9,"radium":"radium","react":"react"}],3:[function(require,module,exports){
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

},{"../lib/colors":22,"../services/TextAnalysis.Service":25,"./SearchGrid":5,"./UI/CenterContainer":6,"./UI/FullScreen":7,"./UI/Loader":9,"./UI/SearchInput":20,"async":"async","lodash":"lodash","radium":"radium","react":"react"}],4:[function(require,module,exports){
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

var _Utils = require('../../lib/Utils');

var _Utils2 = _interopRequireDefault(_Utils);

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
		padding: '100px 40px 40px 40px',
		background: _colors2.default.grey200
	},
	mansory: {
		padding: 20,
		boxSizing: 'border-box',
		width: '33.33%'
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
			this.setState(_Utils2.default.parseEntities(props.entities));
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

},{"../../lib/Utils":21,"../../lib/colors":22,"./Paper":11,"./PaperContent":13,"./Profile":19,"radium":"radium","react":"react","react-masonry-component":"react-masonry-component"}],9:[function(require,module,exports){
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

},{"../../lib/colors":22,"radium":"radium","react":"react"}],10:[function(require,module,exports){
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
		padding: '15px 20px',
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
		margin: '0px 30px',
		display: 'inline-block',
		padding: 0
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

},{"../../lib/colors":22,"./SearchInput":20,"radium":"radium","react":"react"}],11:[function(require,module,exports){
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

},{"../../lib/colors":22,"radium":"radium","react":"react"}],12:[function(require,module,exports){
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
	padding: '10px 20px',
	color: _colors2.default.white,
	background: _colors2.default.red500,
	fontSize: '1rem',
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

},{"../../lib/colors":22,"radium":"radium","react":"react"}],13:[function(require,module,exports){
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
	padding: 30
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
	width: '100%',
	display: 'block',
	fontSize: '1.5rem',
	fontWeight: 300,
	marginBottom: 30,
	padding: 0
};

var PaperHeader = function PaperHeader(props) {
	return _react2.default.createElement(
		'h1',
		{ style: style },
		props.children
	);
};

exports.default = (0, _radium2.default)(PaperHeader);

},{"radium":"radium","react":"react"}],15:[function(require,module,exports){
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
		marginBottom: 15,
		float: 'left'
	},
	h2: {
		width: '100%',
		margin: 0,
		padding: 0,
		fontSize: '1rem',
		fontWeight: 400
	},
	txt: {
		width: '100%',
		fontSize: '1rem',
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
	margin: '15px 0 30px 0'
};

var PaperLine = function PaperLine(props) {
	return _react2.default.createElement('div', { style: style });
};

exports.default = (0, _radium2.default)(PaperLine);

},{"../../lib/colors":22,"radium":"radium","react":"react"}],18:[function(require,module,exports){
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

var Profile = function (_React$Component) {
	_inherits(Profile, _React$Component);

	function Profile(props) {
		_classCallCheck(this, Profile);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Profile).call(this, props));

		_this.state = {
			entity: null,
			err: false
		};
		return _this;
	}

	_createClass(Profile, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			var _this2 = this;

			if (this.props.entity.data) {
				this.setState({ entity: this.props.entity.data });
			} else {
				_Entity2.default.getEntity(this.props.entity, function (err, res) {
					if (err) return _this2.setState({ entity: null, err: true });
					_this2.setState({ entity: res.body.results.bindings[0] });
				});
			}
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
			var _this3 = this;

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
					_PaperContent2.default,
					null,
					_react2.default.createElement(
						_PaperHeader2.default,
						null,
						this.props.entity.name
					),
					_react2.default.createElement(
						_PaperUl2.default,
						null,
						keys.map(function (k) {
							return _react2.default.createElement(
								_PaperLi2.default,
								{ key: _this3.props.entity._id + '-' + k, head: _Utils2.default.capitalize(k) },
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
						'span',
						null,
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

},{"../../lib/Utils":21,"../../lib/colors":22,"../../services/Entity.Service":23,"./CenterContainer":6,"./Loader":9,"./Paper":11,"./PaperBtn":12,"./PaperContent":13,"./PaperHeader":14,"./PaperImg":15,"./PaperLi":16,"./PaperLine":17,"./PaperUl":18,"lodash":"lodash","radium":"radium","react":"react"}],20:[function(require,module,exports){
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

},{"../../lib/colors":22,"radium":"radium","react":"react"}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function () {
	function Utils() {
		_classCallCheck(this, Utils);
	}

	_createClass(Utils, null, [{
		key: 'parseEntities',
		value: function parseEntities(entities) {
			var dates = _lodash2.default.filter(entities, function (e) {
				return e.type == 'date';
			});
			var profiles = _lodash2.default.filter(entities, function (e) {
				return e.type != 'date';
			});
			return { dates: dates, profiles: profiles };
		}
	}, {
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
			return e;
		}
	}]);

	return Utils;
}();

exports.default = Utils;

},{"lodash":"lodash","react":"react"}],22:[function(require,module,exports){
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

},{}],23:[function(require,module,exports){
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

},{"superagent":"superagent"}],24:[function(require,module,exports){
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

},{"superagent":"superagent"}],25:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJyZWFjdC9hcHAuanMiLCJyZWFjdC9jb21wb25lbnRzL0FwcC5qcyIsInJlYWN0L2NvbXBvbmVudHMvRGFzaGJvYXJkLmpzIiwicmVhY3QvY29tcG9uZW50cy9Ob3RGb3VuZC5qcyIsInJlYWN0L2NvbXBvbmVudHMvU2VhcmNoR3JpZC5qcyIsInJlYWN0L2NvbXBvbmVudHMvVUkvQ2VudGVyQ29udGFpbmVyLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9GdWxsU2NyZWVuLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9HcmlkQ29udGFpbmVyLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9Mb2FkZXIuanMiLCJyZWFjdC9jb21wb25lbnRzL1VJL05hdi5qcyIsInJlYWN0L2NvbXBvbmVudHMvVUkvUGFwZXIuanMiLCJyZWFjdC9jb21wb25lbnRzL1VJL1BhcGVyQnRuLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9QYXBlckNvbnRlbnQuanMiLCJyZWFjdC9jb21wb25lbnRzL1VJL1BhcGVySGVhZGVyLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9QYXBlckltZy5qcyIsInJlYWN0L2NvbXBvbmVudHMvVUkvUGFwZXJMaS5qcyIsInJlYWN0L2NvbXBvbmVudHMvVUkvUGFwZXJMaW5lLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9QYXBlclVsLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9Qcm9maWxlLmpzIiwicmVhY3QvY29tcG9uZW50cy9VSS9TZWFyY2hJbnB1dC5qcyIsInJlYWN0L2xpYi9VdGlscy5qcyIsInJlYWN0L2xpYi9jb2xvcnMuanMiLCJyZWFjdC9zZXJ2aWNlcy9FbnRpdHkuU2VydmljZS5qcyIsInJlYWN0L3NlcnZpY2VzL1N1Z2dlc3Rpb24uU2VydmljZS5qcyIsInJlYWN0L3NlcnZpY2VzL1RleHRBbmFseXNpcy5TZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGlu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LEVBaUJaLG1CQWpCWSxFQWtCWixlQWxCWSxFQW1CWixpQkFuQlksRUFvQlosaUJBcEJZLEVBcUJaLGFBckJZLEVBc0JaLGNBdEJZLENBQWI7O0lBeUJNLGlCOzs7Ozs7O2lDQUNpQixFLEVBQUk7QUFDekIsd0JBQUUsR0FBRixDQUFNLGlCQUFOLEVBQ0MsR0FERCxDQUNLLFVBQUMsR0FBRCxFQUFNLEdBQU4sRUFBYztBQUNsQixPQUFHLE1BQU0sRUFBTixHQUFXLElBQUksSUFBbEI7QUFDQSxJQUhEO0FBSUE7Ozs7OztrQkFHYSxpQjs7Ozs7Ozs7Ozs7QUNwQ2Y7Ozs7Ozs7O0lBRU0sbUI7Ozs7Ozs7MEJBQ1UsRyxFQUFLLEUsRUFBSTtBQUN2Qix3QkFBRSxJQUFGLGdCQUNDLElBREQsQ0FDTSxFQUFDLE1BQU0sR0FBUCxFQUROLEVBRUMsR0FGRCxDQUVLLFVBQUMsR0FBRCxFQUFNLEdBQU4sRUFBYztBQUNsQixPQUFHLEdBQUgsRUFBUSxJQUFJLElBQUosSUFBWSxJQUFwQjtBQUNBLElBSkQ7QUFLQTs7Ozs7O2tCQUdhLG1CIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQge1JvdXRlciwgUm91dGUsIEluZGV4Um91dGUsIGJyb3dzZXJIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgaW5qZWN0VGFwRXZlbnRQbHVnaW4gZnJvbSAncmVhY3QtdGFwLWV2ZW50LXBsdWdpbidcblxuaW5qZWN0VGFwRXZlbnRQbHVnaW4oKVxuXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnXG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJy4vY29tcG9uZW50cy9EYXNoYm9hcmQnXG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi9jb21wb25lbnRzL05vdEZvdW5kJ1xuXG5yZW5kZXIoKFxuICA8Um91dGVyIGhpc3Rvcnk9e2Jyb3dzZXJIaXN0b3J5fT5cbiAgXHQ8Um91dGUgcGF0aD0nLycgY29tcG9uZW50PXtBcHB9PlxuICBcdFx0PEluZGV4Um91dGUgY29tcG9uZW50PXtEYXNoYm9hcmR9IC8+XG4gIFx0XHQ8Um91dGUgcGF0aD0nKicgY29tcG9uZW50PXtOb3RGb3VuZH0gLz5cbiAgXHQ8L1JvdXRlPlxuICA8L1JvdXRlcj5cbiksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSlcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5pbXBvcnQgU3VnZ2VzdGlvblNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvU3VnZ2VzdGlvbi5TZXJ2aWNlJ1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9saWIvY29sb3JzJ1xuXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vVUkvTG9hZGVyJ1xuaW1wb3J0IEZ1bGxTY3JlZW4gZnJvbSAnLi9VSS9GdWxsU2NyZWVuJ1xuaW1wb3J0IENlbnRlckNvbnRhaW5lciBmcm9tICcuL1VJL0NlbnRlckNvbnRhaW5lcidcblxuY29uc3Qgc3R5bGVzID0ge1xuXHRsb2FkZXI6IHtcblx0XHRiYWNrZ3JvdW5kOiBjb2xvcnMucmVkNTAwXG5cdH1cbn1cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aW5pdDogZmFsc2UsXG5cdFx0XHRzdWdnZXN0aW9uczogW11cblx0XHR9XG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdFN1Z2dlc3Rpb25TZXJ2aWNlLmdldFN1Z2dlc3Rpb25zKGRhdGEgPT4ge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGluaXQ6IHRydWUsXG5cdFx0XHRcdHN1Z2dlc3Rpb25zOiBkYXRhXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblx0cmVuZGVyTG9hZGVyKCkge1xuXHRcdHJldHVybiA8RnVsbFNjcmVlbj48Q2VudGVyQ29udGFpbmVyPjxMb2FkZXIgc3R5bGU9e1tzdHlsZXMubG9hZGVyXX0gLz48L0NlbnRlckNvbnRhaW5lcj48L0Z1bGxTY3JlZW4+XG5cdH1cblx0cmVuZGVyQ29udGVudCgpIHtcblx0XHR2YXIgY2hpbGRyZW5XaXRoUHJvcHMgPSBSZWFjdC5DaGlsZHJlbi5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgY2hpbGQgPT4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgIFx0c3VnZ2VzdGlvbnM6IHRoaXMuc3RhdGUuc3VnZ2VzdGlvbnNcbiAgICAgICAgfSkpXG5cdFx0cmV0dXJuIDxkaXY+e2NoaWxkcmVuV2l0aFByb3BzfTwvZGl2PlxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRpZighdGhpcy5zdGF0ZS5pbml0KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yZW5kZXJMb2FkZXIoKVxuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5yZW5kZXJDb250ZW50KClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oQXBwKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgYXN5bmMgZnJvbSAnYXN5bmMnXG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vbGliL2NvbG9ycydcbmltcG9ydCBUZXh0QW5hbHlzaXNTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL1RleHRBbmFseXNpcy5TZXJ2aWNlJ1xuXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vVUkvTG9hZGVyJ1xuaW1wb3J0IEZ1bGxTY3JlZW4gZnJvbSAnLi9VSS9GdWxsU2NyZWVuJ1xuaW1wb3J0IENlbnRlckNvbnRhaW5lciBmcm9tICcuL1VJL0NlbnRlckNvbnRhaW5lcidcbmltcG9ydCBTZWFyY2hJbnB1dCBmcm9tICcuL1VJL1NlYXJjaElucHV0J1xuaW1wb3J0IFNlYXJjaEdyaWQgZnJvbSAnLi9TZWFyY2hHcmlkJ1xuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGxvZ286IHtcblx0XHRoZWlnaHQ6IDEwMFxuXHR9LFxuXHRpbnB1dDoge1xuXHRcdHdpZHRoOiA1NTAsXG5cdFx0aGVpZ2h0OiA0MCxcblx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcblx0XHRtYXJnaW5Ub3A6IDM0XG5cdH0sXG5cdGVhc2U6IHtcblx0XHR0cmFuc2l0aW9uOiAnYWxsIDAuMXMgZWFzZS1pbi1vdXQnXG5cdH0sXG5cdGJsdXI6IHtcblx0XHRmaWx0ZXI6ICdibHVyKDEwcHgpJ1xuXHR9LFxuXHRsb2FkZXI6IHtcblx0XHRjb250YWluZXI6IHtcblx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxuXHRcdFx0dG9wOiAwLFxuXHRcdFx0bGVmdDogMCxcblx0XHRcdHpJbmRleDogMTAwMDBcblx0XHR9LFxuXHRcdGxvYWRlcjoge1xuXHRcdFx0YmFja2dyb3VuZDogY29sb3JzLnJlZDUwMFxuXHRcdH1cblx0fVxufVxuXG5jbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzZWFyY2g6IGZhbHNlLFxuXHRcdFx0bW9kYWw6IGZhbHNlLFxuXHRcdFx0c3JjOiAnJyxcblx0XHRcdHJlY29tbWVuZDogJycsXG5cdFx0XHRlbnRpdGllczogW11cblx0XHR9XG5cdFx0dGhpcy5vblNyY0NoYW5nZSA9IHRoaXMub25TcmNDaGFuZ2UuYmluZCh0aGlzKVxuXHRcdHRoaXMuc2VhcmNoID0gdGhpcy5zZWFyY2guYmluZCh0aGlzKVxuXHRcdHRoaXMub25UYWIgPSB0aGlzLm9uVGFiLmJpbmQodGhpcylcblx0XHR0aGlzLm9uSG9tZSA9IHRoaXMub25Ib21lLmJpbmQodGhpcylcblx0fVxuXHRvblNyY0NoYW5nZSh2KSB7XG5cdFx0bGV0IHJlYyA9ICcnXG5cdFx0bGV0IHdvcmRzID0gdi5zcGxpdCgnICcpXG5cdFx0bGV0IHdvcmQgPSBfLmxhc3Qod29yZHMpXG5cdFx0aWYod29yZCAmJiB3b3JkLmxlbmd0aD49Mikge1xuXHRcdFx0bGV0IHIgPSBfLmZpbmQodGhpcy5wcm9wcy5zdWdnZXN0aW9ucywgcyA9PiB7XG5cdFx0XHRcdHJldHVybiBzLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aCh3b3JkLnRvTG93ZXJDYXNlKCkpXG5cdFx0XHR9KVxuXHRcdFx0ciA9IHIgfHwgJydcblx0XHRcdGlmKHIpIHJlYyA9IHIuc3Vic3RyaW5nKHdvcmQubGVuZ3RoKVxuXHRcdH1cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHNyYzogdixcblx0XHRcdHJlY29tbWVuZDogcmVjXG5cdFx0fSlcblx0fVxuXHRvblRhYigpIHtcblx0XHRsZXQge3NyYywgcmVjb21tZW5kfSA9IHRoaXMuc3RhdGVcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHNyYzogc3JjICsgcmVjb21tZW5kLFxuXHRcdFx0cmVjb21tZW5kOiAnJ1xuXHRcdH0pXG5cdH1cblx0b25Ib21lKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c2VhcmNoOiBmYWxzZSxcblx0XHRcdG1vZGFsOiBmYWxzZSxcblx0XHRcdHNyYzogJycsXG5cdFx0XHRyZWNvbW1lbmQ6ICcnLFxuXHRcdFx0ZW50aXRpZXM6IFtdXG5cdFx0fSlcblx0fVxuXHRzZWFyY2goKSB7XG5cdFx0aWYoIXRoaXMuc3RhdGUuc3JjKSByZXR1cm4gZmFsc2Vcblx0XHRsZXQgc3JjID0gdGhpcy5zdGF0ZS5zcmMgKyB0aGlzLnN0YXRlLnJlY29tbWVuZFxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c2VhcmNoOiB0cnVlLFxuXHRcdFx0c3JjOiBzcmMsXG5cdFx0XHRyZWNvbW1lbmQ6ICcnXG5cdFx0fSlcblx0XHRUZXh0QW5hbHlzaXNTZXJ2aWNlLmFuYWx5c2Uoc3JjLCAoZXJyLCByZXMpID0+IHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRzZWFyY2g6IGZhbHNlLFxuXHRcdFx0XHRlbnRpdGllczogcmVzLFxuXHRcdFx0XHRtb2RhbDogdHJ1ZVxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cdHJlbmRlckZ1bGxTcmMoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxGdWxsU2NyZWVuPlxuXHRcdFx0XHQ8Q2VudGVyQ29udGFpbmVyPlxuXHRcdFx0XHRcdDxpbWcgc3JjPScvaW1nL2YxX2xvZ28ucG5nJyBzdHlsZT17c3R5bGVzLmxvZ299IC8+PGJyLz5cblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXtzdHlsZXMuaW5wdXR9PjxTZWFyY2hJbnB1dCByZWNvbW1lbmQ9e3RoaXMuc3RhdGUucmVjb21tZW5kfSB2YWx1ZT17dGhpcy5zdGF0ZS5zcmN9IG9uQ2hhbmdlPXt0aGlzLm9uU3JjQ2hhbmdlfSBvbkVudGVyPXt0aGlzLnNlYXJjaH0gb25UYWI9e3RoaXMub25UYWJ9IC8+PC9kaXY+PGJyLz5cblx0XHRcdFx0PC9DZW50ZXJDb250YWluZXI+XG5cdFx0XHQ8L0Z1bGxTY3JlZW4+XG5cdFx0KVxuXHR9XG5cdHJlbmRlckdyaWQoKSB7XG5cdFx0cmV0dXJuIDxTZWFyY2hHcmlkIG9uSG9tZT17dGhpcy5vbkhvbWV9IHJlY29tbWVuZD17dGhpcy5zdGF0ZS5yZWNvbW1lbmR9IHZhbHVlPXt0aGlzLnN0YXRlLnNyY30gb25DaGFuZ2U9e3RoaXMub25TcmNDaGFuZ2V9IG9uRW50ZXI9e3RoaXMuc2VhcmNofSBvblRhYj17dGhpcy5vblRhYn0gZW50aXRpZXM9e3RoaXMuc3RhdGUuZW50aXRpZXN9IC8+XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtzZWFyY2gsIG1vZGFsfSA9IHRoaXMuc3RhdGVcblx0XHRjb25zdCBsb2FkZXIgPSB0aGlzLnN0YXRlLnNlYXJjaCA/IDxGdWxsU2NyZWVuIHN0eWxlPXtbc3R5bGVzLmxvYWRlci5jb250YWluZXJdfT48Q2VudGVyQ29udGFpbmVyPjxMb2FkZXIgc3R5bGU9e1tzdHlsZXMubG9hZGVyLmxvYWRlcl19IC8+PC9DZW50ZXJDb250YWluZXI+PC9GdWxsU2NyZWVuPiA6IG51bGxcblx0XHRsZXQgY250ID0gdGhpcy5zdGF0ZS5tb2RhbCA/IHRoaXMucmVuZGVyR3JpZCgpIDogdGhpcy5yZW5kZXJGdWxsU3JjKClcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0e2xvYWRlcn1cblx0XHRcdFx0PGRpdiBzdHlsZT17W3N0eWxlcy5lYXNlLCBzZWFyY2ggPyBzdHlsZXMuYmx1ciA6IG51bGxdfT5cblx0XHRcdFx0XHR7Y250fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oRGFzaGJvYXJkKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmltcG9ydCBGdWxsU2NyZWVuIGZyb20gJy4vVUkvRnVsbFNjcmVlbidcbmltcG9ydCBDZW50ZXJDb250YWluZXIgZnJvbSAnLi9VSS9DZW50ZXJDb250YWluZXInXG5cbmNvbnN0IE5vdEZvdW5kID0gKHByb3BzKSA9PiA8RnVsbFNjcmVlbj48Q2VudGVyQ29udGFpbmVyPk5vdCBmb3VuZDwvQ2VudGVyQ29udGFpbmVyPjwvRnVsbFNjcmVlbj5cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKE5vdEZvdW5kKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmltcG9ydCBOYXYgZnJvbSAnLi9VSS9OYXYnXG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tICcuL1VJL0dyaWRDb250YWluZXInXG5cbmNsYXNzIFNlYXJjaEdyaWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PE5hdiBvbkhvbWU9e3RoaXMucHJvcHMub25Ib21lfSByZWNvbW1lbmQ9e3RoaXMucHJvcHMucmVjb21tZW5kfSB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX0gb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2V9IG9uRW50ZXI9e3RoaXMucHJvcHMub25FbnRlcn0gb25UYWI9e3RoaXMucHJvcHMub25UYWJ9IC8+XG5cdFx0XHRcdDxHcmlkQ29udGFpbmVyIGVudGl0aWVzPXt0aGlzLnByb3BzLmVudGl0aWVzfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEdyaWRcbiIsImltcG9ydCBSZWFjdCwge1Byb3BUeXBlc30gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuY29uc3Qgc3R5bGUgPSB7XG5cdGNlbnRlckJsb2NrU3R5bGU6IHtcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdGhlaWdodDogJzEwMCUnLFxuXHRcdG1heEhlaWdodDogJzEwMCUnLFxuXHRcdG92ZXJmbG93OiAnYXV0bycsXG5cdFx0dGV4dEFsaWduOiAnY2VudGVyJ1xuXHR9LFxuXHRjZW50ZXJDb250ZW50U3R5bGU6IHtcblx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcblx0XHR2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcblx0XHRib3hTaXppbmc6ICdib3JkZXItYm94J1xuXHR9XG59XG5cbmNvbnN0IENlbnRlckNvbnRhaW5lciA9IChwcm9wcykgPT4gPGRpdiBzdHlsZT17W3N0eWxlLmNlbnRlckJsb2NrU3R5bGUsIC4uLnByb3BzLnN0eWxlXX0gaWQ9J2NlbnRlckNvbnRlbnQnPjxkaXYgc3R5bGU9e1tzdHlsZS5jZW50ZXJDb250ZW50U3R5bGUsIC4uLnByb3BzLmJveFN0eWxlXX0+e3Byb3BzLmNoaWxkcmVufTwvZGl2PjwvZGl2PlxuXG5DZW50ZXJDb250YWluZXIuZGVmYXVsdFByb3BzID0ge1xuICBzdHlsZToge30sXG4gIGJveFN0eWxlOiB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oQ2VudGVyQ29udGFpbmVyKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmNvbnN0IHN0eWxlID0ge1xuXHR3aWR0aDogJzEwMCUnLFxuXHRoZWlnaHQ6ICcxMDB2aCdcbn1cblxuY29uc3QgRnVsbFNjcmVlbiA9IChwcm9wcykgPT4gPGRpdiBzdHlsZT17W3N0eWxlLCAuLi5wcm9wcy5zdHlsZV19Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cblxuRnVsbFNjcmVlbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHN0eWxlOiB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oRnVsbFNjcmVlbilcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuaW1wb3J0IE1hc29ucnkgZnJvbSAncmVhY3QtbWFzb25yeS1jb21wb25lbnQnXG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vLi4vbGliL2NvbG9ycydcbmltcG9ydCBVdGlscyBmcm9tICcuLi8uLi9saWIvVXRpbHMnXG5cbmltcG9ydCBQYXBlciBmcm9tICcuL1BhcGVyJ1xuaW1wb3J0IFBhcGVyQ29udGVudCBmcm9tICcuL1BhcGVyQ29udGVudCdcbmltcG9ydCBQcm9maWxlIGZyb20gJy4vUHJvZmlsZSdcblxuY29uc3Qgc3R5bGVzID0ge1xuXHRjb250YWluZXI6IHtcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdG1pbkhlaWdodDogJzEwMHZoJyxcblx0XHRib3hTaXppbmc6ICdib3JkZXItYm94Jyxcblx0XHRwYWRkaW5nOiAnMTAwcHggNDBweCA0MHB4IDQwcHgnLFxuXHRcdGJhY2tncm91bmQ6IGNvbG9ycy5ncmV5MjAwXG5cdH0sXG5cdG1hbnNvcnk6IHtcblx0XHRwYWRkaW5nOiAyMCxcblx0XHRib3hTaXppbmc6ICdib3JkZXItYm94Jyxcblx0XHR3aWR0aDogJzMzLjMzJSdcblx0fVxufVxuXG5jbGFzcyBHcmlkQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0cHJvZmlsZXM6IFtdLFxuXHRcdFx0ZGF0ZXM6IFtdLFxuXHRcdFx0c3VtbWFyeTogbnVsbFxuXHRcdH1cblx0fVxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0dGhpcy5wYXJzZUVudGl0aWVzKHRoaXMucHJvcHMpXG5cdH1cblx0Y29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcblx0XHR0aGlzLnBhcnNlRW50aXRpZXMobmV4dFByb3BzKVxuXHR9XG5cdHBhcnNlRW50aXRpZXMocHJvcHMpIHtcblx0XHR0aGlzLnNldFN0YXRlKFV0aWxzLnBhcnNlRW50aXRpZXMocHJvcHMuZW50aXRpZXMpKVxuXHR9XG5cdHJlbmRlckVtcHR5KCkge1xuXHRcdHJldHVybiA8TWFzb25yeSBlbGVtZW50VHlwZT17J2Rpdid9PjxkaXYgc3R5bGU9e3N0eWxlcy5tYW5zb3J5fT48UGFwZXI+PFBhcGVyQ29udGVudD48c3BhbiBjbGFzc05hbWU9J2xuciBsbnItY3Jvc3MnIC8+IE5vIHJlc3VsdHMgZm91bmQ8L1BhcGVyQ29udGVudD48L1BhcGVyPjwvZGl2PjwvTWFzb25yeT5cblx0fVxuXHRyZW5kZXJDb250ZW50KCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TWFzb25yeSBlbGVtZW50VHlwZT17J2Rpdid9PlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5wcm9maWxlcy5tYXAocCA9PiA8ZGl2IGtleT17cC5faWR9IHN0eWxlPXtzdHlsZXMubWFuc29yeX0+PFByb2ZpbGUgZW50aXR5PXtwfSAvPjwvZGl2Pil9XG5cdFx0XHQ8L01hc29ucnk+XG5cdFx0KVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRsZXQgY250ID0gdGhpcy5wcm9wcy5lbnRpdGllcy5sZW5ndGggPyB0aGlzLnJlbmRlckNvbnRlbnQoKSA6IHRoaXMucmVuZGVyRW1wdHkoKVxuXHRcdHJldHVybiA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT57Y250fTwvZGl2PlxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShHcmlkQ29udGFpbmVyKVxuIiwiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uLy4uL2xpYi9jb2xvcnMnXG5cbmNvbnN0IHN0eWxlID0ge1xuXHR3aWR0aDogJzYwcHgnLFxuICBoZWlnaHQ6ICc2MHB4JyxcbiAgYmFja2dyb3VuZDogY29sb3JzLnJlZDUwMCxcbiAgYW5pbWF0aW9uOiAnc2stcm90YXRlcGxhbmUgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dCdcbn1cblxuY29uc3QgTG9hZGVyID0gKHByb3BzKSA9PiA8ZGl2IHN0eWxlPXtbc3R5bGUsIHByb3BzLnN0eWxlXX0gLz5cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKExvYWRlcilcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uLy4uL2xpYi9jb2xvcnMnXG5cbmltcG9ydCBTZWFyY2hJbnB1dCBmcm9tICcuL1NlYXJjaElucHV0J1xuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGNvbnRhaW5lcjoge1xuXHRcdGJhY2tncm91bmQ6ICcjMWIxNzE4Jyxcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdGhlaWdodDogNzAsXG5cdFx0Ym94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG5cdFx0cGFkZGluZzogJzE1cHggMjBweCcsXG5cdFx0cG9zaXRpb246ICdmaXhlZCcsXG5cdFx0dG9wOiAwLFxuXHRcdGxlZnQ6IDAsXG5cdFx0ekluZGV4OiAxMDBcblx0fSxcblx0bG9nbzoge1xuXHRcdGhlaWdodDogNDAsXG5cdFx0Y3Vyc29yOiAncG9pbnRlcidcblx0fSxcblx0aW5wdXQ6IHtcblx0XHR3aWR0aDogNDAwLFxuXHRcdGhlaWdodDogNDAsXG5cdFx0bWFyZ2luOiAnMHB4IDMwcHgnLFxuXHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuXHRcdHBhZGRpbmc6IDBcblx0fSxcblx0aW5wOiB7XG5cdFx0Ym9yZGVyOiBgMXB4IHNvbGlkICR7Y29sb3JzLndoaXRlfWAsXG5cdFx0Jzpmb2N1cyc6IHtcblx0XHRcdGJvcmRlcjogYDFweCBzb2xpZCAke2NvbG9ycy53aGl0ZX1gXG5cdFx0fVxuXHR9XG59XG5cbmNsYXNzIE5hdiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8bmF2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cblx0XHRcdFx0PGltZyBzcmM9Jy9pbWcvZjFfbG9nb19kYXJrLnBuZycgb25DbGljaz17dGhpcy5wcm9wcy5vbkhvbWV9IHN0eWxlPXtzdHlsZXMubG9nb30gLz5cblx0XHRcdFx0PGRpdiBzdHlsZT17c3R5bGVzLmlucHV0fT48U2VhcmNoSW5wdXQgaW5wU3R5bGU9e1tzdHlsZXMuaW5wXX0gcmVjb21tZW5kPXt0aGlzLnByb3BzLnJlY29tbWVuZH0gdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfSBvbkVudGVyPXt0aGlzLnByb3BzLm9uRW50ZXJ9IG9uVGFiPXt0aGlzLnByb3BzLm9uVGFifSAvPjwvZGl2PlxuXHRcdFx0PC9uYXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShOYXYpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi9saWIvY29sb3JzJ1xuXG5jb25zdCBzdHlsZSA9IHtcblx0d2lkdGg6ICcxMDAlJyxcblx0YmFja2dyb3VuZDogY29sb3JzLndoaXRlLFxuXHRib3hTaGFkb3c6ICcwIC0xcHggMCAjZTVlNWU1LCAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgLjEyKSwgMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgLjI0KSdcbn1cblxuY29uc3QgUGFwZXIgPSAocHJvcHMpID0+IDxkaXYgc3R5bGU9e1tzdHlsZSwgcHJvcHMuc3R5bGVdfT57cHJvcHMuY2hpbGRyZW59PC9kaXY+XG5cblBhcGVyLmRlZmF1bHRQcm9wcyA9IHtcblx0c3R5bGU6IHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShQYXBlcilcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uLy4uL2xpYi9jb2xvcnMnXG5cbmNvbnN0IHN0eWxlID0ge1xuXHRkaXNwbGF5OiAnYmxvY2snLFxuXHRib3JkZXI6ICdub25lJyxcblx0bWFyZ2luOiAwLFxuXHRwYWRkaW5nOiAnMTBweCAyMHB4Jyxcblx0Y29sb3I6IGNvbG9ycy53aGl0ZSxcblx0YmFja2dyb3VuZDogY29sb3JzLnJlZDUwMCxcblx0Zm9udFNpemU6ICcxcmVtJyxcblx0Zm9udFdlaWdodDogNDAwLFxuXHRmb250RmFtaWx5OiAnaW5oZXJpdCcsXG5cdGN1cnNvcjogJ3BvaW50ZXInLFxuXHR0cmFuc2l0aW9uOiAnYWxsIDAuMXMgZWFzZS1pbi1vdXQnLFxuXHQnOmhvdmVyJzoge1xuXHRcdGJhY2tncm91bmQ6IGNvbG9ycy5yZWQ3MDBcblx0fVxufVxuXG5jb25zdCBQYXBlckJ0biA9IChwcm9wcykgPT4gPGEgaHJlZj17cHJvcHMuaHJlZn0gdGFyZ2V0PSdfYmxhbmsnPjxidXR0b24gc3R5bGU9e3N0eWxlfT57cHJvcHMuY2hpbGRyZW59PC9idXR0b24+PC9hPlxuXG5QYXBlckJ0bi5kZWZhdWx0UHJvcHMgPSB7XG5cdHN0eWxlOiB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oUGFwZXJCdG4pXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuY29uc3Qgc3R5bGUgPSB7XG5cdHdpZHRoOiAnMTAwJScsXG5cdGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuXHRwYWRkaW5nOiAzMFxufVxuXG5jb25zdCBQYXBlckNvbnRlbnQgPSAocHJvcHMpID0+IDxkaXYgc3R5bGU9e3N0eWxlfT57cHJvcHMuY2hpbGRyZW59PC9kaXY+XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShQYXBlckNvbnRlbnQpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuY29uc3Qgc3R5bGUgPSB7XG5cdHdpZHRoOiAnMTAwJScsXG5cdGRpc3BsYXk6ICdibG9jaycsXG5cdGZvbnRTaXplOiAnMS41cmVtJyxcblx0Zm9udFdlaWdodDogMzAwLFxuXHRtYXJnaW5Cb3R0b206IDMwLFxuXHRwYWRkaW5nOiAwXG59XG5cbmNvbnN0IFBhcGVySGVhZGVyID0gKHByb3BzKSA9PiA8aDEgc3R5bGU9e3N0eWxlfT57cHJvcHMuY2hpbGRyZW59PC9oMT5cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKFBhcGVySGVhZGVyKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmNvbnN0IHN0eWxlID0ge1xuXHR3aWR0aDogJzEwMCUnLFxuXHRkaXNwbGF5OiAnYmxvY2snXG59XG5cbmNvbnN0IFBhcGVySW1nID0gKHByb3BzKSA9PiA8aW1nIHNyYz17cHJvcHMuc3JjfSBzdHlsZT17c3R5bGV9IC8+XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShQYXBlckltZylcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGNvbnRhaW5lcjoge1xuXHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0Zm9udFdlaWdodDogMzAwLFxuXHRcdG1hcmdpbkJvdHRvbTogMTUsXG5cdFx0ZmxvYXQ6ICdsZWZ0J1xuXHR9LFxuXHRoMjoge1xuXHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0bWFyZ2luOiAwLFxuXHRcdHBhZGRpbmc6IDAsXG5cdFx0Zm9udFNpemU6ICcxcmVtJyxcblx0XHRmb250V2VpZ2h0OiA0MDBcblx0fSxcblx0dHh0OiB7XG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRmb250U2l6ZTogJzFyZW0nLFxuXHRcdHdvcmRXcmFwOiAnYnJlYWstd29yZCdcblx0fVxufVxuXG5jb25zdCBQYXBlckxpID0gKHByb3BzKSA9PiA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT48aDIgc3R5bGU9e3N0eWxlcy5oMn0+e3Byb3BzLmhlYWR9PC9oMj48ZGl2IHN0eWxlPXtzdHlsZXMudHh0fT57cHJvcHMuY2hpbGRyZW59PC9kaXY+PC9kaXY+XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShQYXBlckxpKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vLi4vbGliL2NvbG9ycydcblxuY29uc3Qgc3R5bGUgPSB7XG5cdHdpZHRoOiAnMTAwJScsXG5cdGRpc3BsYXk6ICdibG9jaycsXG5cdGJhY2tncm91bmQ6IGNvbG9ycy5ncmV5MjAwLFxuXHRoZWlnaHQ6IDEsXG5cdG1hcmdpbjogJzE1cHggMCAzMHB4IDAnXG59XG5cbmNvbnN0IFBhcGVyTGluZSA9IChwcm9wcykgPT4gPGRpdiBzdHlsZT17c3R5bGV9IC8+XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShQYXBlckxpbmUpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuY29uc3Qgc3R5bGUgPSB7XG5cdHdpZHRoOiAnMTAwJScsXG5cdGRpc3BsYXk6ICdibG9jaydcbn1cblxuY29uc3QgUGFwZXJVbCA9IChwcm9wcykgPT4gPGRpdiBjbGFzc05hbWU9J2NsZWFyJyBzdHlsZT17c3R5bGV9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKFBhcGVyVWwpXG4iLCJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXN9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vLi4vbGliL2NvbG9ycydcbmltcG9ydCBFbnRpdHlTZXJ2aWNlIGZyb20gJy4uLy4uL3NlcnZpY2VzL0VudGl0eS5TZXJ2aWNlJ1xuaW1wb3J0IFV0aWxzIGZyb20gJy4uLy4uL2xpYi9VdGlscydcblxuaW1wb3J0IFBhcGVyIGZyb20gJy4vUGFwZXInXG5pbXBvcnQgUGFwZXJDb250ZW50IGZyb20gJy4vUGFwZXJDb250ZW50J1xuaW1wb3J0IFBhcGVySW1nIGZyb20gJy4vUGFwZXJJbWcnXG5pbXBvcnQgUGFwZXJIZWFkZXIgZnJvbSAnLi9QYXBlckhlYWRlcidcbmltcG9ydCBQYXBlclVsIGZyb20gJy4vUGFwZXJVbCdcbmltcG9ydCBQYXBlckxpIGZyb20gJy4vUGFwZXJMaSdcbmltcG9ydCBQYXBlckxpbmUgZnJvbSAnLi9QYXBlckxpbmUnXG5pbXBvcnQgUGFwZXJCdG4gZnJvbSAnLi9QYXBlckJ0bidcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInXG5pbXBvcnQgQ2VudGVyQ29udGFpbmVyIGZyb20gJy4vQ2VudGVyQ29udGFpbmVyJ1xuXG5jb25zdCBleGNsdWRlID0gWyd0aHVtYm5haWwnLCAnZGVwaWN0aW9uJywgJ2JpcnRoUGxhY2UnLCAnd2lraVBhZ2VJRCcsICdhYnN0cmFjdCcsICdsb2NhdGlvbiddXG5cbmNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRlbnRpdHk6IG51bGwsXG5cdFx0XHRlcnI6IGZhbHNlXG5cdFx0fVxuXHR9XG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHRpZih0aGlzLnByb3BzLmVudGl0eS5kYXRhKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtlbnRpdHk6IHRoaXMucHJvcHMuZW50aXR5LmRhdGF9KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRFbnRpdHlTZXJ2aWNlLmdldEVudGl0eSh0aGlzLnByb3BzLmVudGl0eSwgKGVyciwgcmVzKSA9PiB7XG5cdFx0XHRcdGlmKGVycikgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe2VudGl0eTogbnVsbCwgZXJyOiB0cnVlfSlcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7ZW50aXR5OiByZXMuYm9keS5yZXN1bHRzLmJpbmRpbmdzWzBdfSlcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cdHJlbmRlckxvYWRlcigpIHtcblx0XHRyZXR1cm4gPFBhcGVyPjxQYXBlckNvbnRlbnQ+PENlbnRlckNvbnRhaW5lcj48TG9hZGVyIC8+PC9DZW50ZXJDb250YWluZXI+PC9QYXBlckNvbnRlbnQ+PC9QYXBlcj5cblx0fVxuXHRyZW5kZXJDb250ZW50KCkge1xuXHRcdGxldCB7ZW50aXR5fSA9IHRoaXMuc3RhdGVcblx0XHRsZXQgaW1nID0gXy5oYXMoZW50aXR5LCAnZGVwaWN0aW9uJykgPyA8UGFwZXJJbWcgc3JjPXtlbnRpdHkuZGVwaWN0aW9uLnZhbHVlfSAvPiA6IG51bGxcblx0XHRsZXQgaHJlZiA9IF8uaGFzKGVudGl0eSwgJ3dpa2lQYWdlSUQnKSA/IDxkaXY+PFBhcGVyTGluZSAvPjxQYXBlckJ0biBocmVmPXtgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnLz9jdXJpZD0ke2VudGl0eS53aWtpUGFnZUlELnZhbHVlfWB9PlJlYWQgTW9yZTwvUGFwZXJCdG4+PC9kaXY+IDogbnVsbFxuXHRcdGxldCBrZXlzID0gXyhlbnRpdHkpLmtleXMoKS5maWx0ZXIoayA9PiBfLmluZGV4T2YoZXhjbHVkZSwgayk9PS0xKS52YWx1ZSgpXG5cdFx0cmV0dXJuIChcblx0XHRcdDxQYXBlcj5cblx0XHRcdFx0e2ltZ31cblx0XHRcdFx0PFBhcGVyQ29udGVudD5cblx0XHRcdFx0XHQ8UGFwZXJIZWFkZXI+e3RoaXMucHJvcHMuZW50aXR5Lm5hbWV9PC9QYXBlckhlYWRlcj5cblx0XHRcdFx0XHQ8UGFwZXJVbD5cblx0XHRcdFx0XHRcdHtrZXlzLm1hcChrID0+IDxQYXBlckxpIGtleT17YCR7dGhpcy5wcm9wcy5lbnRpdHkuX2lkfS0ke2t9YH0gaGVhZD17VXRpbHMuY2FwaXRhbGl6ZShrKX0+e1V0aWxzLmZvcm1hdEVudGl0eVN0cmluZyhlbnRpdHlba10udmFsdWUpfTwvUGFwZXJMaT4pfVxuXHRcdFx0XHRcdDwvUGFwZXJVbD5cblx0XHRcdFx0XHR7aHJlZn1cblx0XHRcdFx0PC9QYXBlckNvbnRlbnQ+XG5cdFx0XHQ8L1BhcGVyPlxuXHRcdClcblx0fVxuXHRyZW5kZXJBZ2FpbkJ0bigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PFBhcGVyPlxuXHRcdFx0XHQ8UGFwZXJDb250ZW50PlxuXHRcdFx0XHRcdDxzcGFuPkNvdWxkIG5vdCBmZXRjaCBkYXRhLiBDbGljayB0byB0cnkgYWdhaW48L3NwYW4+XG5cdFx0XHRcdDwvUGFwZXJDb250ZW50PlxuXHRcdFx0PC9QYXBlcj5cblx0XHQpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGlmKHRoaXMuc3RhdGUuZXJyKSByZXR1cm4gdGhpcy5yZW5kZXJBZ2FpbkJ0bigpXG5cdFx0aWYoIXRoaXMuc3RhdGUuZW50aXR5KSByZXR1cm4gdGhpcy5yZW5kZXJMb2FkZXIoKVxuXHRcdHJldHVybiB0aGlzLnJlbmRlckNvbnRlbnQoKVxuXHR9XG59XG5cblByb2ZpbGUucHJvcFR5cGVzID0ge1xuXHRlbnRpdHk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oUHJvZmlsZSlcbiIsImltcG9ydCBSZWFjdCwge1Byb3BUeXBlc30gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSdcblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi9saWIvY29sb3JzJ1xuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGNvbnRhaW5lcjoge1xuXHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0aGVpZ2h0OiAnMTAwJScsXG5cdFx0cG9zaXRpb246ICdyZWxhdGl2ZScsXG5cdFx0YmFja2dyb3VuZDogY29sb3JzLndoaXRlLFxuXHRcdG92ZXJmbG93OiAnaGlkZGVuJ1xuXHR9LFxuXHRpbnBDb250YWluZXI6IHtcblx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcblx0XHR0b3A6IDAsXG5cdFx0bGVmdDogMCxcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdGhlaWdodDogJzEwMCUnLFxuXHRcdGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuXHRcdGJhY2tncm91bmQ6ICdub25lJyxcblx0XHRib3JkZXI6IGAxcHggc29saWQgJHtjb2xvcnMuZ3JleTUwMH1gLFxuXHRcdGZvbnRXZWlnaHQ6IDMwMCxcblx0XHRwYWRkaW5nOiAnNXB4IDQ1cHggNXB4IDVweCcsXG5cdFx0Zm9udFNpemU6ICcxcmVtJyxcblx0XHR0ZXh0QWxpZ246ICdsZWZ0Jyxcblx0XHRmb250RmFtaWx5OiAnUm9ib3RvJyxcblx0XHRtYXJnaW46IDAsXG5cdFx0Jzpmb2N1cyc6IHtcblx0XHRcdG91dGxpbmU6ICdub25lJyxcblx0XHRcdGJvcmRlcjogYDFweCBzb2xpZCAke2NvbG9ycy5ncmV5ODAwfWBcblx0XHR9XG5cdH0sXG5cdHJlY29tbWVuZDoge1xuXHRcdGNvbG9yOiBjb2xvcnMuZ3JleTUwMCxcblx0XHRwYWRkaW5nVG9wOiA5XG5cdH0sXG5cdGVhc2U6IHtcblx0XHR0cmFuc2l0aW9uOiAnYWxsIDAuMXMgZWFzZS1pbi1vdXQnXG5cdH0sXG5cdHdoaXRlU3BhY2U6IHtcblx0XHRjb2xvcjogY29sb3JzLndoaXRlXG5cdH0sXG5cdGljb246IHtcblx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcblx0XHR3aWR0aDogNDAsXG5cdFx0aGVpZ2h0OiA0MCxcblx0XHR0b3A6IDAsXG5cdFx0cmlnaHQ6IDAsXG5cdFx0ZGlzcGxheTogJ2Jsb2NrJyxcblx0XHRmb250U2l6ZTogJzFlbScsXG5cdFx0YmFja2dyb3VuZDogY29sb3JzLmdyZXk4MDAsXG5cdFx0Y29sb3I6IGNvbG9ycy53aGl0ZSxcblx0XHRib3JkZXI6ICdub25lJyxcblx0XHRwYWRkaW5nOiAwLFxuXHRcdGN1cnNvcjogJ3BvaW50ZXInLFxuXHRcdCc6aG92ZXInOiB7XG5cdFx0XHRjb2xvcjogY29sb3JzLmdyZXk1MDBcblx0XHR9XG5cdH1cbn1cblxuY2xhc3MgU2VhcmNoSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMub25LZXkgPSB0aGlzLm9uS2V5LmJpbmQodGhpcylcblx0XHR0aGlzLm9uS2V5RG93biA9IHRoaXMub25LZXlEb3duLmJpbmQodGhpcylcblx0fVxuXHRvbktleShlKSB7XG5cdFx0aWYoZS5rZXkgPT0gJ0VudGVyJykgdGhpcy5wcm9wcy5vbkVudGVyKClcblx0fVxuXHRvbktleURvd24oZSkge1xuXHRcdGlmKGUua2V5ID09ICdUYWInKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdHRoaXMucHJvcHMub25UYWIoKVxuXHRcdH1cblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e1tzdHlsZXMuY29udGFpbmVyLCB0aGlzLnByb3BzLnN0eWxlXX0+XG5cdFx0XHRcdDxkaXYgc3R5bGU9e1tzdHlsZXMuaW5wQ29udGFpbmVyLCBzdHlsZXMucmVjb21tZW5kLCB0aGlzLnByb3BzLmlucFN0eWxlXX0+PHNwYW4gc3R5bGU9e3N0eWxlcy53aGl0ZVNwYWNlfT57dGhpcy5wcm9wcy52YWx1ZX08L3NwYW4+e3RoaXMucHJvcHMucmVjb21tZW5kfTwvZGl2PlxuXHRcdFx0XHQ8aW5wdXQga2V5PSdpbnB1dFNyYycgdHlwZT0ndGV4dCcgc3R5bGU9e1tzdHlsZXMuZWFzZSwgc3R5bGVzLmlucENvbnRhaW5lciwgdGhpcy5wcm9wcy5pbnBTdHlsZV19IHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfSBvbkNoYW5nZT17ZSA9PiB0aGlzLnByb3BzLm9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX0gb25LZXlQcmVzcz17dGhpcy5vbktleX0gb25LZXlEb3duPXt0aGlzLm9uS2V5RG93bn0gLz5cblx0XHRcdFx0PGJ1dHRvbiBzdHlsZT17W3N0eWxlcy5pY29uLCBzdHlsZXMuZWFzZV19IGtleT0naW50ZXJuYWxTcmNCdXR0b24nIG9uQ2xpY2s9e2UgPT4gdGhpcy5wcm9wcy5vbkVudGVyKCl9PjxpIGNsYXNzTmFtZT0nZmEgZmEtc2VhcmNoJyAvPjwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cblNlYXJjaElucHV0LmRlZmF1bHRQcm9wcyA9IHtcblx0c3R5bGU6IHt9LFxuXHR2YWx1ZTogJycsXG5cdHJlY29tbWVuZDogJycsXG5cdGlucFN0eWxlOiB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oU2VhcmNoSW5wdXQpXG4iLCJpbXBvcnQge0RPTX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmNsYXNzIFV0aWxzIHtcblx0c3RhdGljIHBhcnNlRW50aXRpZXMoZW50aXRpZXMpIHtcblx0XHRsZXQgZGF0ZXMgPSBfLmZpbHRlcihlbnRpdGllcywgZSA9PiBlLnR5cGU9PSdkYXRlJylcblx0XHRsZXQgcHJvZmlsZXMgPSBfLmZpbHRlcihlbnRpdGllcywgZSA9PiBlLnR5cGUhPSdkYXRlJylcblx0XHRyZXR1cm4ge2RhdGVzLCBwcm9maWxlc31cblx0fVxuXG5cdHN0YXRpYyBjYXBpdGFsaXplKHN0cikge1xuXHRcdHJldHVybiBfKHN0ci5zcGxpdCgvKD89W0EtWl0pLykpLm1hcCh0eHQgPT4gdHh0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHh0LnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpKS52YWx1ZSgpLmpvaW4oJyAnKVxuXHR9XG5cblx0c3RhdGljIGZvcm1hdEVudGl0eVN0cmluZyhlKSB7XG5cdFx0aWYoZS5zdGFydHNXaXRoKCdodHRwOi8vJykgfHwgZS5zdGFydHNXaXRoKCdodHRwczovLycpKSB7XG5cdFx0XHRyZXR1cm4gRE9NLmEoe2hyZWY6IGUsIHRhcmdldDogJ19ibGFuayd9LCBlKVxuXHRcdH1cblx0XHRyZXR1cm4gZVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWxzXG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIHJlZDUwOiAnI2ZmZWJlZScsXG4gIHJlZDEwMDogJyNmZmNkZDInLFxuICByZWQyMDA6ICcjZWY5YTlhJyxcbiAgcmVkMzAwOiAnI2U1NzM3MycsXG4gIHJlZDQwMDogJyNlZjUzNTAnLFxuICByZWQ1MDA6ICcjZjQ0MzM2JyxcbiAgcmVkNjAwOiAnI2U1MzkzNScsXG4gIHJlZDcwMDogJyNkMzJmMmYnLFxuICByZWQ4MDA6ICcjYzYyODI4JyxcbiAgcmVkOTAwOiAnI2I3MWMxYycsXG4gIHJlZEExMDA6ICcjZmY4YTgwJyxcbiAgcmVkQTIwMDogJyNmZjUyNTInLFxuICByZWRBNDAwOiAnI2ZmMTc0NCcsXG4gIHJlZEE3MDA6ICcjZDUwMDAwJyxcblxuICBwaW5rNTA6ICcjZmNlNGVjJyxcbiAgcGluazEwMDogJyNmOGJiZDAnLFxuICBwaW5rMjAwOiAnI2Y0OGZiMScsXG4gIHBpbmszMDA6ICcjZjA2MjkyJyxcbiAgcGluazQwMDogJyNlYzQwN2EnLFxuICBwaW5rNTAwOiAnI2U5MWU2MycsXG4gIHBpbms2MDA6ICcjZDgxYjYwJyxcbiAgcGluazcwMDogJyNjMjE4NWInLFxuICBwaW5rODAwOiAnI2FkMTQ1NycsXG4gIHBpbms5MDA6ICcjODgwZTRmJyxcbiAgcGlua0ExMDA6ICcjZmY4MGFiJyxcbiAgcGlua0EyMDA6ICcjZmY0MDgxJyxcbiAgcGlua0E0MDA6ICcjZjUwMDU3JyxcbiAgcGlua0E3MDA6ICcjYzUxMTYyJyxcblxuICBwdXJwbGU1MDogJyNmM2U1ZjUnLFxuICBwdXJwbGUxMDA6ICcjZTFiZWU3JyxcbiAgcHVycGxlMjAwOiAnI2NlOTNkOCcsXG4gIHB1cnBsZTMwMDogJyNiYTY4YzgnLFxuICBwdXJwbGU0MDA6ICcjYWI0N2JjJyxcbiAgcHVycGxlNTAwOiAnIzljMjdiMCcsXG4gIHB1cnBsZTYwMDogJyM4ZTI0YWEnLFxuICBwdXJwbGU3MDA6ICcjN2IxZmEyJyxcbiAgcHVycGxlODAwOiAnIzZhMWI5YScsXG4gIHB1cnBsZTkwMDogJyM0YTE0OGMnLFxuICBwdXJwbGVBMTAwOiAnI2VhODBmYycsXG4gIHB1cnBsZUEyMDA6ICcjZTA0MGZiJyxcbiAgcHVycGxlQTQwMDogJyNkNTAwZjknLFxuICBwdXJwbGVBNzAwOiAnI2FhMDBmZicsXG5cbiAgZGVlcFB1cnBsZTUwOiAnI2VkZTdmNicsXG4gIGRlZXBQdXJwbGUxMDA6ICcjZDFjNGU5JyxcbiAgZGVlcFB1cnBsZTIwMDogJyNiMzlkZGInLFxuICBkZWVwUHVycGxlMzAwOiAnIzk1NzVjZCcsXG4gIGRlZXBQdXJwbGU0MDA6ICcjN2U1N2MyJyxcbiAgZGVlcFB1cnBsZTUwMDogJyM2NzNhYjcnLFxuICBkZWVwUHVycGxlNjAwOiAnIzVlMzViMScsXG4gIGRlZXBQdXJwbGU3MDA6ICcjNTEyZGE4JyxcbiAgZGVlcFB1cnBsZTgwMDogJyM0NTI3YTAnLFxuICBkZWVwUHVycGxlOTAwOiAnIzMxMWI5MicsXG4gIGRlZXBQdXJwbGVBMTAwOiAnI2IzODhmZicsXG4gIGRlZXBQdXJwbGVBMjAwOiAnIzdjNGRmZicsXG4gIGRlZXBQdXJwbGVBNDAwOiAnIzY1MWZmZicsXG4gIGRlZXBQdXJwbGVBNzAwOiAnIzYyMDBlYScsXG5cbiAgaW5kaWdvNTA6ICcjZThlYWY2JyxcbiAgaW5kaWdvMTAwOiAnI2M1Y2FlOScsXG4gIGluZGlnbzIwMDogJyM5ZmE4ZGEnLFxuICBpbmRpZ28zMDA6ICcjNzk4NmNiJyxcbiAgaW5kaWdvNDAwOiAnIzVjNmJjMCcsXG4gIGluZGlnbzUwMDogJyMzZjUxYjUnLFxuICBpbmRpZ282MDA6ICcjMzk0OWFiJyxcbiAgaW5kaWdvNzAwOiAnIzMwM2Y5ZicsXG4gIGluZGlnbzgwMDogJyMyODM1OTMnLFxuICBpbmRpZ285MDA6ICcjMWEyMzdlJyxcbiAgaW5kaWdvQTEwMDogJyM4YzllZmYnLFxuICBpbmRpZ29BMjAwOiAnIzUzNmRmZScsXG4gIGluZGlnb0E0MDA6ICcjM2Q1YWZlJyxcbiAgaW5kaWdvQTcwMDogJyMzMDRmZmUnLFxuXG4gIGJsdWU1MDogJyNlM2YyZmQnLFxuICBibHVlMTAwOiAnI2JiZGVmYicsXG4gIGJsdWUyMDA6ICcjOTBjYWY5JyxcbiAgYmx1ZTMwMDogJyM2NGI1ZjYnLFxuICBibHVlNDAwOiAnIzQyYTVmNScsXG4gIGJsdWU1MDA6ICcjMjE5NmYzJyxcbiAgYmx1ZTYwMDogJyMxZTg4ZTUnLFxuICBibHVlNzAwOiAnIzE5NzZkMicsXG4gIGJsdWU4MDA6ICcjMTU2NWMwJyxcbiAgYmx1ZTkwMDogJyMwZDQ3YTEnLFxuICBibHVlQTEwMDogJyM4MmIxZmYnLFxuICBibHVlQTIwMDogJyM0NDhhZmYnLFxuICBibHVlQTQwMDogJyMyOTc5ZmYnLFxuICBibHVlQTcwMDogJyMyOTYyZmYnLFxuXG4gIGxpZ2h0Qmx1ZTUwOiAnI2UxZjVmZScsXG4gIGxpZ2h0Qmx1ZTEwMDogJyNiM2U1ZmMnLFxuICBsaWdodEJsdWUyMDA6ICcjODFkNGZhJyxcbiAgbGlnaHRCbHVlMzAwOiAnIzRmYzNmNycsXG4gIGxpZ2h0Qmx1ZTQwMDogJyMyOWI2ZjYnLFxuICBsaWdodEJsdWU1MDA6ICcjMDNhOWY0JyxcbiAgbGlnaHRCbHVlNjAwOiAnIzAzOWJlNScsXG4gIGxpZ2h0Qmx1ZTcwMDogJyMwMjg4ZDEnLFxuICBsaWdodEJsdWU4MDA6ICcjMDI3N2JkJyxcbiAgbGlnaHRCbHVlOTAwOiAnIzAxNTc5YicsXG4gIGxpZ2h0Qmx1ZUExMDA6ICcjODBkOGZmJyxcbiAgbGlnaHRCbHVlQTIwMDogJyM0MGM0ZmYnLFxuICBsaWdodEJsdWVBNDAwOiAnIzAwYjBmZicsXG4gIGxpZ2h0Qmx1ZUE3MDA6ICcjMDA5MWVhJyxcblxuICBjeWFuNTA6ICcjZTBmN2ZhJyxcbiAgY3lhbjEwMDogJyNiMmViZjInLFxuICBjeWFuMjAwOiAnIzgwZGVlYScsXG4gIGN5YW4zMDA6ICcjNGRkMGUxJyxcbiAgY3lhbjQwMDogJyMyNmM2ZGEnLFxuICBjeWFuNTAwOiAnIzAwYmNkNCcsXG4gIGN5YW42MDA6ICcjMDBhY2MxJyxcbiAgY3lhbjcwMDogJyMwMDk3YTcnLFxuICBjeWFuODAwOiAnIzAwODM4ZicsXG4gIGN5YW45MDA6ICcjMDA2MDY0JyxcbiAgY3lhbkExMDA6ICcjODRmZmZmJyxcbiAgY3lhbkEyMDA6ICcjMThmZmZmJyxcbiAgY3lhbkE0MDA6ICcjMDBlNWZmJyxcbiAgY3lhbkE3MDA6ICcjMDBiOGQ0JyxcblxuICB0ZWFsNTA6ICcjZTBmMmYxJyxcbiAgdGVhbDEwMDogJyNiMmRmZGInLFxuICB0ZWFsMjAwOiAnIzgwY2JjNCcsXG4gIHRlYWwzMDA6ICcjNGRiNmFjJyxcbiAgdGVhbDQwMDogJyMyNmE2OWEnLFxuICB0ZWFsNTAwOiAnIzAwOTY4OCcsXG4gIHRlYWw2MDA6ICcjMDA4OTdiJyxcbiAgdGVhbDcwMDogJyMwMDc5NmInLFxuICB0ZWFsODAwOiAnIzAwNjk1YycsXG4gIHRlYWw5MDA6ICcjMDA0ZDQwJyxcbiAgdGVhbEExMDA6ICcjYTdmZmViJyxcbiAgdGVhbEEyMDA6ICcjNjRmZmRhJyxcbiAgdGVhbEE0MDA6ICcjMWRlOWI2JyxcbiAgdGVhbEE3MDA6ICcjMDBiZmE1JyxcblxuICBncmVlbjUwOiAnI2U4ZjVlOScsXG4gIGdyZWVuMTAwOiAnI2M4ZTZjOScsXG4gIGdyZWVuMjAwOiAnI2E1ZDZhNycsXG4gIGdyZWVuMzAwOiAnIzgxYzc4NCcsXG4gIGdyZWVuNDAwOiAnIzY2YmI2YScsXG4gIGdyZWVuNTAwOiAnIzRjYWY1MCcsXG4gIGdyZWVuNjAwOiAnIzQzYTA0NycsXG4gIGdyZWVuNzAwOiAnIzM4OGUzYycsXG4gIGdyZWVuODAwOiAnIzJlN2QzMicsXG4gIGdyZWVuOTAwOiAnIzFiNWUyMCcsXG4gIGdyZWVuQTEwMDogJyNiOWY2Y2EnLFxuICBncmVlbkEyMDA6ICcjNjlmMGFlJyxcbiAgZ3JlZW5BNDAwOiAnIzAwZTY3NicsXG4gIGdyZWVuQTcwMDogJyMwMGM4NTMnLFxuXG4gIGxpZ2h0R3JlZW41MDogJyNmMWY4ZTknLFxuICBsaWdodEdyZWVuMTAwOiAnI2RjZWRjOCcsXG4gIGxpZ2h0R3JlZW4yMDA6ICcjYzVlMWE1JyxcbiAgbGlnaHRHcmVlbjMwMDogJyNhZWQ1ODEnLFxuICBsaWdodEdyZWVuNDAwOiAnIzljY2M2NScsXG4gIGxpZ2h0R3JlZW41MDA6ICcjOGJjMzRhJyxcbiAgbGlnaHRHcmVlbjYwMDogJyM3Y2IzNDInLFxuICBsaWdodEdyZWVuNzAwOiAnIzY4OWYzOCcsXG4gIGxpZ2h0R3JlZW44MDA6ICcjNTU4YjJmJyxcbiAgbGlnaHRHcmVlbjkwMDogJyMzMzY5MWUnLFxuICBsaWdodEdyZWVuQTEwMDogJyNjY2ZmOTAnLFxuICBsaWdodEdyZWVuQTIwMDogJyNiMmZmNTknLFxuICBsaWdodEdyZWVuQTQwMDogJyM3NmZmMDMnLFxuICBsaWdodEdyZWVuQTcwMDogJyM2NGRkMTcnLFxuXG4gIGxpbWU1MDogJyNmOWZiZTcnLFxuICBsaW1lMTAwOiAnI2YwZjRjMycsXG4gIGxpbWUyMDA6ICcjZTZlZTljJyxcbiAgbGltZTMwMDogJyNkY2U3NzUnLFxuICBsaW1lNDAwOiAnI2Q0ZTE1NycsXG4gIGxpbWU1MDA6ICcjY2RkYzM5JyxcbiAgbGltZTYwMDogJyNjMGNhMzMnLFxuICBsaW1lNzAwOiAnI2FmYjQyYicsXG4gIGxpbWU4MDA6ICcjOWU5ZDI0JyxcbiAgbGltZTkwMDogJyM4Mjc3MTcnLFxuICBsaW1lQTEwMDogJyNmNGZmODEnLFxuICBsaW1lQTIwMDogJyNlZWZmNDEnLFxuICBsaW1lQTQwMDogJyNjNmZmMDAnLFxuICBsaW1lQTcwMDogJyNhZWVhMDAnLFxuXG4gIHllbGxvdzUwOiAnI2ZmZmRlNycsXG4gIHllbGxvdzEwMDogJyNmZmY5YzQnLFxuICB5ZWxsb3cyMDA6ICcjZmZmNTlkJyxcbiAgeWVsbG93MzAwOiAnI2ZmZjE3NicsXG4gIHllbGxvdzQwMDogJyNmZmVlNTgnLFxuICB5ZWxsb3c1MDA6ICcjZmZlYjNiJyxcbiAgeWVsbG93NjAwOiAnI2ZkZDgzNScsXG4gIHllbGxvdzcwMDogJyNmYmMwMmQnLFxuICB5ZWxsb3c4MDA6ICcjZjlhODI1JyxcbiAgeWVsbG93OTAwOiAnI2Y1N2YxNycsXG4gIHllbGxvd0ExMDA6ICcjZmZmZjhkJyxcbiAgeWVsbG93QTIwMDogJyNmZmZmMDAnLFxuICB5ZWxsb3dBNDAwOiAnI2ZmZWEwMCcsXG4gIHllbGxvd0E3MDA6ICcjZmZkNjAwJyxcblxuICBhbWJlcjUwOiAnI2ZmZjhlMScsXG4gIGFtYmVyMTAwOiAnI2ZmZWNiMycsXG4gIGFtYmVyMjAwOiAnI2ZmZTA4MicsXG4gIGFtYmVyMzAwOiAnI2ZmZDU0ZicsXG4gIGFtYmVyNDAwOiAnI2ZmY2EyOCcsXG4gIGFtYmVyNTAwOiAnI2ZmYzEwNycsXG4gIGFtYmVyNjAwOiAnI2ZmYjMwMCcsXG4gIGFtYmVyNzAwOiAnI2ZmYTAwMCcsXG4gIGFtYmVyODAwOiAnI2ZmOGYwMCcsXG4gIGFtYmVyOTAwOiAnI2ZmNmYwMCcsXG4gIGFtYmVyQTEwMDogJyNmZmU1N2YnLFxuICBhbWJlckEyMDA6ICcjZmZkNzQwJyxcbiAgYW1iZXJBNDAwOiAnI2ZmYzQwMCcsXG4gIGFtYmVyQTcwMDogJyNmZmFiMDAnLFxuXG4gIG9yYW5nZTUwOiAnI2ZmZjNlMCcsXG4gIG9yYW5nZTEwMDogJyNmZmUwYjInLFxuICBvcmFuZ2UyMDA6ICcjZmZjYzgwJyxcbiAgb3JhbmdlMzAwOiAnI2ZmYjc0ZCcsXG4gIG9yYW5nZTQwMDogJyNmZmE3MjYnLFxuICBvcmFuZ2U1MDA6ICcjZmY5ODAwJyxcbiAgb3JhbmdlNjAwOiAnI2ZiOGMwMCcsXG4gIG9yYW5nZTcwMDogJyNmNTdjMDAnLFxuICBvcmFuZ2U4MDA6ICcjZWY2YzAwJyxcbiAgb3JhbmdlOTAwOiAnI2U2NTEwMCcsXG4gIG9yYW5nZUExMDA6ICcjZmZkMTgwJyxcbiAgb3JhbmdlQTIwMDogJyNmZmFiNDAnLFxuICBvcmFuZ2VBNDAwOiAnI2ZmOTEwMCcsXG4gIG9yYW5nZUE3MDA6ICcjZmY2ZDAwJyxcblxuICBkZWVwT3JhbmdlNTA6ICcjZmJlOWU3JyxcbiAgZGVlcE9yYW5nZTEwMDogJyNmZmNjYmMnLFxuICBkZWVwT3JhbmdlMjAwOiAnI2ZmYWI5MScsXG4gIGRlZXBPcmFuZ2UzMDA6ICcjZmY4YTY1JyxcbiAgZGVlcE9yYW5nZTQwMDogJyNmZjcwNDMnLFxuICBkZWVwT3JhbmdlNTAwOiAnI2ZmNTcyMicsXG4gIGRlZXBPcmFuZ2U2MDA6ICcjZjQ1MTFlJyxcbiAgZGVlcE9yYW5nZTcwMDogJyNlNjRhMTknLFxuICBkZWVwT3JhbmdlODAwOiAnI2Q4NDMxNScsXG4gIGRlZXBPcmFuZ2U5MDA6ICcjYmYzNjBjJyxcbiAgZGVlcE9yYW5nZUExMDA6ICcjZmY5ZTgwJyxcbiAgZGVlcE9yYW5nZUEyMDA6ICcjZmY2ZTQwJyxcbiAgZGVlcE9yYW5nZUE0MDA6ICcjZmYzZDAwJyxcbiAgZGVlcE9yYW5nZUE3MDA6ICcjZGQyYzAwJyxcblxuICBicm93bjUwOiAnI2VmZWJlOScsXG4gIGJyb3duMTAwOiAnI2Q3Y2NjOCcsXG4gIGJyb3duMjAwOiAnI2JjYWFhNCcsXG4gIGJyb3duMzAwOiAnI2ExODg3ZicsXG4gIGJyb3duNDAwOiAnIzhkNmU2MycsXG4gIGJyb3duNTAwOiAnIzc5NTU0OCcsXG4gIGJyb3duNjAwOiAnIzZkNGM0MScsXG4gIGJyb3duNzAwOiAnIzVkNDAzNycsXG4gIGJyb3duODAwOiAnIzRlMzQyZScsXG4gIGJyb3duOTAwOiAnIzNlMjcyMycsXG5cbiAgYmx1ZUdyZXk1MDogJyNlY2VmZjEnLFxuICBibHVlR3JleTEwMDogJyNjZmQ4ZGMnLFxuICBibHVlR3JleTIwMDogJyNiMGJlYzUnLFxuICBibHVlR3JleTMwMDogJyM5MGE0YWUnLFxuICBibHVlR3JleTQwMDogJyM3ODkwOWMnLFxuICBibHVlR3JleTUwMDogJyM2MDdkOGInLFxuICBibHVlR3JleTYwMDogJyM1NDZlN2EnLFxuICBibHVlR3JleTcwMDogJyM0NTVhNjQnLFxuICBibHVlR3JleTgwMDogJyMzNzQ3NGYnLFxuICBibHVlR3JleTkwMDogJyMyNjMyMzgnLFxuXG4gIGdyZXk1MDogJyNmYWZhZmEnLFxuICBncmV5MTAwOiAnI2Y1ZjVmNScsXG4gIGdyZXkyMDA6ICcjZWVlZWVlJyxcbiAgZ3JleTMwMDogJyNlMGUwZTAnLFxuICBncmV5NDAwOiAnI2JkYmRiZCcsXG4gIGdyZXk1MDA6ICcjOWU5ZTllJyxcbiAgZ3JleTYwMDogJyM3NTc1NzUnLFxuICBncmV5NzAwOiAnIzYxNjE2MScsXG4gIGdyZXk4MDA6ICcjNDI0MjQyJyxcbiAgZ3JleTkwMDogJyMyMTIxMjEnLFxuXG4gIGJsYWNrOiAnIzAwMDAwMCcsXG4gIHdoaXRlOiAnI2ZmZmZmZicsXG5cbiAgdHJhbnNwYXJlbnQ6ICdyZ2JhKDAsIDAsIDAsIDApJyxcbiAgZnVsbEJsYWNrOiAncmdiYSgwLCAwLCAwLCAxKScsXG4gIGRhcmtCbGFjazogJ3JnYmEoMCwgMCwgMCwgMC44NyknLFxuICBsaWdodEJsYWNrOiAncmdiYSgwLCAwLCAwLCAwLjU0KScsXG4gIG1pbkJsYWNrOiAncmdiYSgwLCAwLCAwLCAwLjI2KScsXG4gIGZhaW50QmxhY2s6ICdyZ2JhKDAsIDAsIDAsIDAuMTIpJyxcbiAgZnVsbFdoaXRlOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXG4gIGRhcmtXaGl0ZTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC44NyknLFxuICBsaWdodFdoaXRlOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0KSdcbn1cbiIsImltcG9ydCAkIGZyb20gJ3N1cGVyYWdlbnQnXG5cbmNsYXNzIEVudGl0eVNlcnZpY2Uge1xuXHRzdGF0aWMgZ2V0RW50aXR5KGVudGl0eSwgY2IpIHtcblx0XHQkLnBvc3QoJy9haS9lbnRpdHknKVxuXHRcdC5zZW5kKGVudGl0eSlcblx0XHQuZW5kKChlcnIsIHJlcykgPT4ge1xuXHRcdFx0Y2IoZXJyLCByZXMpXG5cdFx0fSlcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbnRpdHlTZXJ2aWNlXG4iLCJpbXBvcnQgJCBmcm9tICdzdXBlcmFnZW50J1xuXG5jb25zdCB0ZW1wID0gW1xuXHQnTGV3aXMgSGFtaWx0b24nLFxuXHQnTmljbyBSb3NiZXJnJyxcblx0J1NlYmFzdGlhbiBWZXR0ZWwnLFxuXHQnS2ltaSBSYWlra29uZW4nLFxuXHQnRGFuaWVsIFJpY2NpYXJkbycsXG5cdCdNYXggVmVyc3RhcHBlbicsXG5cdCdGZWxpcHBlIE1hc3NhJyxcblx0J1ZhbHR0ZXJpIEJvdHRhcycsXG5cdCdTZXJnaW8gUGVyZXonLFxuXHQnTmljbyBIdWxrZW5iZXJnJyxcblx0J0RhbmlpbCBLdnlhdCcsXG5cdCdDYXJsb3MgU2FpbnonLFxuXHQnUm9tYWluIEdyb3NqZWFuJyxcblx0J0Zlcm5hbmRvIEFsb25zbycsXG5cdCdKZW5zb24gQnV0dG9uJyxcblx0J0tldmluIE1hZ251c3NlbicsXG5cdCdFc3RlYmFuIEd1dGllcnJleicsXG5cdCdKb2x5b24gUGFsbWVyJyxcblx0J01hcmN1cyBFcmljc3NvbicsXG5cdCdQYXNjYWwgV2VocmxlaW4nLFxuXHQnRmVsaXBlIE5hc3InLFxuXHQnUmlvIEhhcnlhbnRvJ1xuXVxuXG5jbGFzcyBTdWdnZXN0aW9uU2VydmljZSB7XG5cdHN0YXRpYyBnZXRTdWdnZXN0aW9ucyhjYikge1xuXHRcdCQuZ2V0KCcvYWkvc3VnZ2VzdGlvbnMnKVxuXHRcdC5lbmQoKGVyciwgcmVzKSA9PiB7XG5cdFx0XHRjYihlcnIgPyBbXSA6IHJlcy5ib2R5KVxuXHRcdH0pXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3VnZ2VzdGlvblNlcnZpY2VcbiIsImltcG9ydCAkIGZyb20gJ3N1cGVyYWdlbnQnXG5cbmNsYXNzIFRleHRBbmFseXNpc1NlcnZpY2Uge1xuXHRzdGF0aWMgYW5hbHlzZSh0eHQsIGNiKSB7XG5cdFx0JC5wb3N0KGAvYWkvYW5hbHlzZWApXG5cdFx0LnNlbmQoe3RleHQ6IHR4dH0pXG5cdFx0LmVuZCgoZXJyLCByZXMpID0+IHtcblx0XHRcdGNiKGVyciwgcmVzLmJvZHkgfHwgbnVsbClcblx0XHR9KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRBbmFseXNpc1NlcnZpY2VcbiJdfQ==
