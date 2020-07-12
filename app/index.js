const router = require('express').Router();
const todoListRouter = require('./pages/to-do-list');
const ListaUsuarioRouter = require('./pages/lista-usuarios');
const ListaActividadesRouter = require('./pages/lista-actividades');
const ListaProveedorRouter = require('./pages/lista-proveedores');
const LoginRouter = require('./pages/seguridad')

const { appErrorHandler } = require('../middlewares/error-handler');

console.log('INDEX APP');
//Aca se rutean las distintas páginas 
router.use('/to-do-list', todoListRouter);
router.use('/lista-usuarios', ListaUsuarioRouter);
router.use('/lista-actividades', ListaActividadesRouter);
router.use('/lista-proveedores',ListaProveedorRouter);
router.use('/seguridad', LoginRouter);
router.use(appErrorHandler);

module.exports = router;