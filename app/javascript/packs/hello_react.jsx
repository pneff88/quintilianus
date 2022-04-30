// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import App from "../src/App.js"

// const Hello = props => (
//   <div>Hello {props.name}!</div>
// )

// Hello.defaultProps = {
//   name: 'David'
// }

// Hello.propTypes = {
//   name: PropTypes.string
// }

let hasloaded = false;

document.addEventListener('DOMContentLoaded', () => {
  if (!hasloaded) {
  ReactDOM.render(
      <App/>,
      document.body.appendChild(document.createElement('div')),
    )
    hasloaded=true;
  }
})
