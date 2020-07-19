const router = require('express').Router();
const TipoActividadRouter = require('./tipoActividad');
//const TipoActividadMW = require('../middlewares/tipoActividadMw');
const UsuarioRouter = require('./usuario');
const LoginRouter = require('./login');
const ActividadRouter = require('./actividad');
const ProveedorRouter = require('./proveedor');
const HorarioActividad = require('./horarioactividad');
const ActividadAgendada = require('./actividadagendada');
const { apiErrorHandler ,appErrorHandler} = require('../middlewares/error-handler');
const {apiAutorizacionHandler} = require('../middlewares/autorizacion-handler');

router.use('/tipoactividad',TipoActividadRouter);
//router.use('/tipoactividad',TipoActividadMW);
router.use('/usuario',UsuarioRouter);
router.use('/actividad',ActividadRouter);
router.use('/proveedor',ProveedorRouter);
router.use('/login',LoginRouter);
router.use('/horarioactividad',HorarioActividad);
router.use('/actividadagendada',ActividadAgendada);
router.use(apiErrorHandler);

module.exports = router;