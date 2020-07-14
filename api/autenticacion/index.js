const router = require('express').Router();
const Usuario = require('../../models/usuarioModel');
const moment = require('moment');


const getSessionUsuario = (req, res, next) => {

    if(req.session.user){
        req.user = req.session.user;
    }
    next();
}

router.get('/', getSessionUsuario);

const autenticarUsuario = (req, res, next) => {
    //valido que el usuario sea Admin
         if(req.user == 'Admin'){
            next();
         }else{
             res.sendStatus(401);
         }         
}

router.get('/', autenticarUsuario);

const validateParams = (req, res, next) => {
//    res.juan = 'hola';
    if(isNaN(req.params.id)) {
        res.status(404).send({
            success: false,
            message: "El parametro es invalido"
        });
    } else {
        next();
    }
};

module.exports = router