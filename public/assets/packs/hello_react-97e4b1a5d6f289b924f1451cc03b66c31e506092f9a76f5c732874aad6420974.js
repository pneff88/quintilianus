function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _srcAppJs = require("../src/App.js");

var _srcAppJs2 = _interopRequireDefault(_srcAppJs);

// const Hello = props => (
//   <div>Hello {props.name}!</div>
// )

// Hello.defaultProps = {
//   name: 'David'
// }

// Hello.propTypes = {
//   name: PropTypes.string
// }

var hasloaded = false;

document.addEventListener('DOMContentLoaded', function () {
  if (!hasloaded) {
    _reactDom2['default'].render(_react2['default'].createElement(_srcAppJs2['default'], null), document.body.appendChild(document.createElement('div')));
    hasloaded = true;
  }
});
