const router = require('express').Router();
const todoListRouter = require('./pages/to-do-list');
const ListaUsuarioRouter = require('./pages/lista-usuarios');
const ListaActividadesRouter = require('./pages/lista-actividades');
const ListaProveedorRouter = require('./pages/lista-proveedores');
const LoginRouter = require('./pages/seguridad');
const HorarioRouter = require('./pages/lista-horarioactividad');

const { appErrorHandler } = require('../middlewares/error-handler');
const { appAutorizacionHandler,apiAutorizacionHandler} = require('../middlewares/autorizacion-handler');
//console.log('INDEX APP');
//Aca se rutean las distintas páginas 
router.use(apiAutorizacionHandler);
router.use(appAutorizacionHandler);

router.use('/to-do-list', todoListRouter);
router.use('/lista-usuarios', ListaUsuarioRouter);
router.use('/lista-actividades', ListaActividadesRouter);
//router.use('/lista-actividades',appAutorizacionHandler, ListaActividadesRouter);
router.use('/lista-proveedores',ListaProveedorRouter);
router.use('/seguridad', LoginRouter);
router.use('/lista-horarioactividad',HorarioRouter);
router.use(appErrorHandler);

module.exports = router;