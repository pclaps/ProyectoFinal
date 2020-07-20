const router = require('express').Router();
const Usuario = require('../../models/usuarioModel');
const moment = require('moment');

const {appAutorizacionHandler,getSessionUsuario} = require('../../middlewares/autorizacion-handler');
console.log('logout');

const logout=(req, res) => {
    console.log("logout success!");
    req.session.destroy();
    
  };

router.get('/',logout);

module.exports = router