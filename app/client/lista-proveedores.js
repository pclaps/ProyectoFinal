const React = require('react');
const ReactDOM = require('react-dom');
const { BrowserRouter } = require('react-router-dom');
const ListaProveedoresPage = require('../pages/lista-proveedores/view');
const styles = require('../pages/lista-proveedores/style.scss');

const initialState = JSON.parse(window.__STATE__);

delete window.__STATE__;

ReactDOM/ReactDOM.hydrate(
    <BrowserRouter>
        <ListaProveedoresPage initialState={initialState}/>
    </BrowserRouter>,
    document.getElementById('app')
);
