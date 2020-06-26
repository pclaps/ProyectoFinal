const router = require('express').Router();
const todoListRouter = require('./pages/to-do-list');
const { appErrorHandler } = require('../middlewares/error-handler');

console.log('index app');

//Aca se rutean las distintas páginas 
router.use('/to-do-list', todoListRouter);
//router.use('/login', loginRouter);
router.use(appErrorHandler);

module.exports = router;