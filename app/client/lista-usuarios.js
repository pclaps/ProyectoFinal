const React = require('react');
const ReactDOM = require('react-dom');
const { BrowserRouter } = require('react-router-dom');
const ListaUsuariosPage = require('../pages/lista-usuarios/view');
const styles = require('../pages/lista-usuarios/style.scss');

const initialState = JSON.parse(window.__STATE__);

delete window.__STATE__;

console.log('ListaUsuariosPage-client');

ReactDOM/ReactDOM.hydrate(
    <BrowserRouter>
        <ListaUsuariosPage initialState={initialState}/>
    </BrowserRouter>,
    document.getElementById('app')
);