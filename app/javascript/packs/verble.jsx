

import React from 'react'
import ReactDOM from 'react-dom'
import App from "../src/App.js"


let hasloaded = false;

document.addEventListener('DOMContentLoaded', () => {
  console.log("************")
  if (!hasloaded) {
  ReactDOM.render(
      <App/>,
      document.body.appendChild(document.createElement('div')),
    )
    hasloaded=true;
  }
})
