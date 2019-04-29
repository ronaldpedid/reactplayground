import React from 'react';
import App from './App';
import { render, unmountComponentAtNode } from 'react-dom';

function startup() {
  let targetNode = document.getElementById('root');
  Promise.resolve(initializeClient(targetNode))
    .catch(err => {
      console.error('A error has occured when starting up the client');
      console.error(err);
    });
}

export async function initializeClient(targetNode) {
  clearTargetNode(targetNode);
  render(
    <App />,
    targetNode,
  );
}

function clearTargetNode(targetNode) {
  unmountComponentAtNode(targetNode);
}

if (module.hot) {
  module.hot.accept(function () {
    startup();
  });
  startup();
} else {
  startup();
}