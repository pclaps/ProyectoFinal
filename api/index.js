const router = require('express').Router();
const taskRouter = require('./tasks');
const TipoActividadRouter = require('./tipoActividad');
//const TipoActividadMW = require('../middlewares/tipoActividadMw');
const UsuarioRouter = require('./usuario');
const LoginRouter = require('./login');
const ActividadRouter = require('./actividad');
const ProveedorRouter = require('./proveedor');
const { apiErrorHandler } = require('../middlewares/error-handler');
const { route } = require('./tasks');
 

router.use('/tasks', taskRouter);
router.use('/tipoactividad',TipoActividadRouter);
//router.use('/tipoactividad',TipoActividadMW);
router.use('/usuario',UsuarioRouter);
router.use('/actividad',ActividadRouter);
router.use('/proveedor',ProveedorRouter);
router.use('/login',LoginRouter);
router.use(apiErrorHandler);

module.exports = router;