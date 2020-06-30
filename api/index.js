const router = require('express').Router();
const taskRouter = require('./tasks');
const TipoActividadRouter = require('./tipoActividad');
const UsuarioRouter = require('./usuario');
const ActividadRouter = require('./actividad')
const { apiErrorHandler } = require('../middlewares/error-handler');
const { route } = require('./tasks');

console.log('Ruteo de la API');

router.use('/tasks', taskRouter);
//router.use('/tipoactividad',TipoActividadRouter);
router.use('/usuario',UsuarioRouter);
router.use('/actividad',ActividadRouter);
router.use(apiErrorHandler);

module.exports = router;