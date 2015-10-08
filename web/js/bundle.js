(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
*	Searchable Table
*	Author: Jean-Pierre Sierens
*	===========================================================================
*/

'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var SearchableTable = (function (_React$Component) {
	_inherits(SearchableTable, _React$Component);

	function SearchableTable() {
		_classCallCheck(this, SearchableTable);

		_get(Object.getPrototypeOf(SearchableTable.prototype), 'constructor', this).call(this);
		// Initial state of the component
		this.state = { filterText: '' };
	}

	_createClass(SearchableTable, [{
		key: 'handleUserInput',
		value: function handleUserInput(filterText) {
			// When there's a change in the state, the component and all its
			// sub-components get updated.
			this.setState({ filterText: filterText });
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				null,
				_react2['default'].createElement(SearchBar, {
					filterText: this.state.filterText,
					onUserInput: this.handleUserInput.bind(this)
				}),
				_react2['default'].createElement(Table, {
					data: this.props.data,
					filterText: this.state.filterText
				})
			);
		}
	}]);

	return SearchableTable;
})(_react2['default'].Component);

exports['default'] = SearchableTable;

var SearchBar = (function (_React$Component2) {
	_inherits(SearchBar, _React$Component2);

	function SearchBar() {
		_classCallCheck(this, SearchBar);

		_get(Object.getPrototypeOf(SearchBar.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(SearchBar, [{
		key: 'handleChange',
		value: function handleChange() {
			// passing filter data up by using a callback
			this.props.onUserInput(
			// ref is like the id
			this.refs.filterTextInput.getDOMNode().value);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'form',
				null,
				_react2['default'].createElement('input', {
					type: 'text',
					placeholder: 'Search for one keyword...',
					ref: 'filterTextInput',
					value: this.props.filterText,
					onChange: this.handleChange.bind(this)
				})
			);
		}
	}]);

	return SearchBar;
})(_react2['default'].Component);

var Table = (function (_React$Component3) {
	_inherits(Table, _React$Component3);

	function Table() {
		_classCallCheck(this, Table);

		_get(Object.getPrototypeOf(Table.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Table, [{
		key: 'render',
		value: function render() {
			var sections = [];
			var data = this.props.data;
			data.forEach((function (product) {
				if (product.name.indexOf(this.props.filterText) === -1) {
					return;
				}
				sections.push(_react2['default'].createElement(Section, { data: product }));
			}).bind(this));
			return _react2['default'].createElement(
				'div',
				null,
				sections
			);
		}
	}]);

	return Table;
})(_react2['default'].Component);

var Section = (function (_React$Component4) {
	_inherits(Section, _React$Component4);

	function Section() {
		_classCallCheck(this, Section);

		_get(Object.getPrototypeOf(Section.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Section, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				null,
				_react2['default'].createElement(
					'p',
					null,
					this.props.data.name,
					' = ',
					this.props.data.price,
					' '
				)
			);
		}
	}]);

	return Section;
})(_react2['default'].Component);

module.exports = exports['default'];

},{"react":"react"}],2:[function(require,module,exports){
/*
*	Author: Jean-Pierre Sierens
*	===========================================================================
*/

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SearchableTable = require('./SearchableTable');

var _SearchableTable2 = _interopRequireDefault(_SearchableTable);

var _data = require('./data');

// Filterable CheatSheet Component
_react2['default'].render(_react2['default'].createElement(_SearchableTable2['default'], { data: _data.data }), document.getElementById('searchable-table'));

},{"./SearchableTable":1,"./data":3,"react":"react"}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var data = [{ category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" }, { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" }, { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" }, { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" }, { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" }, { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }];
exports.data = data;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9qcHNpZXJlbnMvU2l0ZXMvaXRlbWRlbW8vZGV2L2pzL1NlYXJjaGFibGVUYWJsZS5qcyIsIi9ob21lL2pwc2llcmVucy9TaXRlcy9pdGVtZGVtby9kZXYvanMvYXBwLmpzIiwiL2hvbWUvanBzaWVyZW5zL1NpdGVzL2l0ZW1kZW1vL2Rldi9qcy9kYXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNNa0IsT0FBTzs7OztJQUVKLGVBQWU7V0FBZixlQUFlOztBQUN4QixVQURTLGVBQWUsR0FDckI7d0JBRE0sZUFBZTs7QUFFbEMsNkJBRm1CLGVBQWUsNkNBRTFCOztBQUVGLE1BQUksQ0FBQyxLQUFLLEdBQUcsRUFBQyxVQUFVLEVBQUUsRUFBRSxFQUFDLENBQUE7RUFDaEM7O2NBTGdCLGVBQWU7O1NBTWpCLHlCQUFDLFVBQVUsRUFBRTs7O0FBR3hCLE9BQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxVQUFVLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQztHQUMzQzs7O1NBQ0Usa0JBQUU7QUFDUCxVQUNDOzs7SUFDQyxpQ0FBQyxTQUFTO0FBQ1QsZUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxBQUFDO0FBQ25CLGdCQUFXLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEFBQUM7TUFDL0M7SUFDZCxpQ0FBQyxLQUFLO0FBQ0wsU0FBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxBQUFDO0FBQ3RCLGVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQUFBQztNQUNqQztJQUNHLENBQ0w7R0FDRjs7O1FBeEJtQixlQUFlO0dBQVMsbUJBQU0sU0FBUzs7cUJBQXZDLGVBQWU7O0lBMkI5QixTQUFTO1dBQVQsU0FB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LFFBQVEsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUMsQ0FDNUUsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKlxuKlx0U2VhcmNoYWJsZSBUYWJsZVxuKlx0QXV0aG9yOiBKZWFuLVBpZXJyZSBTaWVyZW5zXG4qXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaGFibGVUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0Ly8gSW5pdGlhbCBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7ZmlsdGVyVGV4dDogJyd9XG4gICAgfVxuICAgIGhhbmRsZVVzZXJJbnB1dChmaWx0ZXJUZXh0KSB7XG4gICAgXHQvLyBXaGVuIHRoZXJlJ3MgYSBjaGFuZ2UgaW4gdGhlIHN0YXRlLCB0aGUgY29tcG9uZW50IGFuZCBhbGwgaXRzIFxuICAgIFx0Ly8gc3ViLWNvbXBvbmVudHMgZ2V0IHVwZGF0ZWQuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZpbHRlclRleHQ6IGZpbHRlclRleHR9KTtcbiAgICB9XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8U2VhcmNoQmFyIFxuXHRcdFx0XHRcdGZpbHRlclRleHQ9e3RoaXMuc3RhdGUuZmlsdGVyVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgb25Vc2VySW5wdXQ9e3RoaXMuaGFuZGxlVXNlcklucHV0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgLz5cblx0XHRcdFx0PFRhYmxlIFxuXHRcdFx0XHRcdGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gXG5cdFx0XHRcdFx0ZmlsdGVyVGV4dD17dGhpcy5zdGF0ZS5maWx0ZXJUZXh0fVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5jbGFzcyBTZWFyY2hCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRoYW5kbGVDaGFuZ2UoKSB7XG5cdFx0Ly8gcGFzc2luZyBmaWx0ZXIgZGF0YSB1cCBieSB1c2luZyBhIGNhbGxiYWNrXG4gICAgICAgIHRoaXMucHJvcHMub25Vc2VySW5wdXQoXG4gICAgICAgIFx0Ly8gcmVmIGlzIGxpa2UgdGhlIGlkXG4gICAgICAgICAgICB0aGlzLnJlZnMuZmlsdGVyVGV4dElucHV0LmdldERPTU5vZGUoKS52YWx1ZVxuICAgICAgICApO1xuICAgIH1cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICBcdHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgXHRwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3Igb25lIGtleXdvcmQuLi5cIiBcbiAgICAgICAgICAgICAgICBcdHJlZj1cImZpbHRlclRleHRJbnB1dFwiXG4gICAgICAgICAgICAgICAgXHR2YWx1ZT0ge3RoaXMucHJvcHMuZmlsdGVyVGV4dH1cbiAgICAgICAgICAgICAgICBcdG9uQ2hhbmdlPSB7dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX0gXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKTtcblx0fVxufVxuXG5jbGFzcyBUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpe1xuXHRcdGxldCBzZWN0aW9ucyA9IFtdO1xuXHRcdGxldCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuXHRcdGRhdGEuZm9yRWFjaChmdW5jdGlvbihwcm9kdWN0KXtcblx0XHRcdGlmIChwcm9kdWN0Lm5hbWUuaW5kZXhPZih0aGlzLnByb3BzLmZpbHRlclRleHQpID09PSAtMSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRzZWN0aW9ucy5wdXNoKDxTZWN0aW9uIGRhdGE9e3Byb2R1Y3R9IC8+KTtcblx0XHR9LmJpbmQodGhpcykpXG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdj57c2VjdGlvbnN9PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5jbGFzcyBTZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PHA+e3RoaXMucHJvcHMuZGF0YS5uYW1lfSA9IHt0aGlzLnByb3BzLmRhdGEucHJpY2V9IDwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cbiIsIi8qXG4qXHRBdXRob3I6IEplYW4tUGllcnJlIFNpZXJlbnNcbipcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTZWFyY2hhYmxlVGFibGUgZnJvbSAnLi9TZWFyY2hhYmxlVGFibGUnO1xuaW1wb3J0IHtkYXRhfSBmcm9tICcuL2RhdGEnO1xuXG4vLyBGaWx0ZXJhYmxlIENoZWF0U2hlZXQgQ29tcG9uZW50XG5SZWFjdC5yZW5kZXIoPFNlYXJjaGFibGVUYWJsZSBkYXRhPXtkYXRhfS8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoYWJsZS10YWJsZScpKTtcblxuXG4iLCJleHBvcnQgY29uc3QgZGF0YSA9IFtcbiAge2NhdGVnb3J5OiBcIlNwb3J0aW5nIEdvb2RzXCIsIHByaWNlOiBcIiQ0OS45OVwiLCBzdG9ja2VkOiB0cnVlLCBuYW1lOiBcIkZvb3RiYWxsXCJ9LFxuICB7Y2F0ZWdvcnk6IFwiU3BvcnRpbmcgR29vZHNcIiwgcHJpY2U6IFwiJDkuOTlcIiwgc3RvY2tlZDogdHJ1ZSwgbmFtZTogXCJCYXNlYmFsbFwifSxcbiAge2NhdGVnb3J5OiBcIlNwb3J0aW5nIEdvb2RzXCIsIHByaWNlOiBcIiQyOS45OVwiLCBzdG9ja2VkOiBmYWxzZSwgbmFtZTogXCJCYXNrZXRiYWxsXCJ9LFxuICB7Y2F0ZWdvcnk6IFwiRWxlY3Ryb25pY3NcIiwgcHJpY2U6IFwiJDk5Ljk5XCIsIHN0b2NrZWQ6IHRydWUsIG5hbWU6IFwiaVBvZCBUb3VjaFwifSxcbiAge2NhdGVnb3J5OiBcIkVsZWN0cm9uaWNzXCIsIHByaWNlOiBcIiQzOTkuOTlcIiwgc3RvY2tlZDogZmFsc2UsIG5hbWU6IFwiaVBob25lIDVcIn0sXG4gIHtjYXRlZ29yeTogXCJFbGVjdHJvbmljc1wiLCBwcmljZTogXCIkMTk5Ljk5XCIsIHN0b2NrZWQ6IHRydWUsIG5hbWU6IFwiTmV4dXMgN1wifVxuXTsiXX0=
