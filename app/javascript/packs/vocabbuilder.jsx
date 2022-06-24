import React from 'react'
import ReactDOM from 'react-dom'
import App2 from "../src2/App.jsx"

let hasloaded = false;

document.addEventListener('DOMContentLoaded', () => {
  if (!hasloaded) {
  ReactDOM.render(
      <App2/>,
      document.body.appendChild(document.createElement('div')),
    )
    hasloaded=true;
  }
})
