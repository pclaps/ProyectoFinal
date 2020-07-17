const React = require('react');
const ReactDOM = require('react-dom');
const { BrowserRouter } = require('react-router-dom');

const ListaHorarioActividadPage = require('../pages/lista-horarioactividad/view');
const styles = require('../pages/lista-horarioactividad/style.scss');

const initialState = JSON.parse(window.__STATE__);

delete window.__STATE__;

ReactDOM/ReactDOM.hydrate(
    <BrowserRouter>
        <ListaHorarioActividadPage initialState={initialState}/>
    </BrowserRouter>,
    document.getElementById('app')
);
