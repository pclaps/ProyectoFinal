const router = require('express').Router();
const React = require('react');
const {StaticRouter} = require('react-router-dom');
const {renderToString} = require('react-dom/server');
const Usuario = require('../../../models/usuarioModel');
const View = require('./view');

// https://www.digitalocean.com/community/tutorials/react-react-router-ssr
//console.log('pages-lista-usuarios--index');

router.get('/*', (req, res, next) => {
    const initialState = {};
    const context = {};

    const content = renderToString(
        <StaticRouter location={req.url} context={context}>
            <View initialState={initialState}/>
        </StaticRouter>
    );

    res.render('template', {
        pageName: 'lista-usuarios',
        pageTitle: 'Lista de Usuarios',
        host: 'http://localhost:3000',
        initialState,
        content
    });
});

module.exports = router;
