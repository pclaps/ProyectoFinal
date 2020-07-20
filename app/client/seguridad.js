const React = require('react');
const ReactDOM = require('react-dom');
const { BrowserRouter } = require('react-router-dom');
const SeguridadPage = require('../pages/seguridad/view');
const styles = require('../pages/seguridad/style.scss');

//console.log('SeguridadPage');
const initialState = JSON.parse(window.__STATE__);

delete window.__STATE__;

ReactDOM/ReactDOM.hydrate(
    <BrowserRouter>
        <SeguridadPage initialState={initialState}/>
    </BrowserRouter>,
    document.getElementById('app')
);