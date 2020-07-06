var express = require('express');
var router = express.Router();

//var multer  = require('multer');
//var upload = multer({ dest: 'public/uploads/' });

const { 
    validateParams,
    getTipoActividad,
    getAllTipoActividad,
    saveTipoActividad,
    deleteTipoActividad,
    updateTipoActividad
} = require('../api/tipoActividad');


router.delete('/:id',validateParams,deleteTipoActividad);