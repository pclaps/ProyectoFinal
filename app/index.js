const router = require('express').Router();
const ListaUsuarioRouter = require('./pages/lista-usuarios');
const ListaActividadesRouter = require('./pages/lista-actividades');
const ListaProveedorRouter = require('./pages/lista-proveedores');
const LoginRouter = require('./pages/seguridad');
const HorarioRouter = require('./pages/lista-horarioactividad');
const { appErrorHandler } = require('../middlewares/error-handler');


router.use('/lista-usuarios', ListaUsuarioRouter);
router.use('/lista-actividades', ListaActividadesRouter);
//router.use('/lista-actividades',appAutorizacionHandler, ListaActividadesRouter);
router.use('/lista-proveedores',ListaProveedorRouter);
router.use('/seguridad', LoginRouter);
router.use('/lista-horarioactividad',HorarioRouter);
router.use(appErrorHandler);

module.exports = router;