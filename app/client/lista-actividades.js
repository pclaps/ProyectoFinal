const React = require('react');
const ReactDOM = require('react-dom');
const { BrowserRouter } = require('react-router-dom');

const ListaActividadesPage = require('../pages/lista-actividades/view');
const styles = require('../pages/lista-actividades/style.scss');

const initialState = JSON.parse(window.__STATE__);

delete window.__STATE__;

console.log('ListaActividadesPage-client');

ReactDOM/ReactDOM.hydrate(
    <BrowserRouter>
        <ListaActividadesPage initialState={initialState}/>
    </BrowserRouter>,
    document.getElementById('app')
);
