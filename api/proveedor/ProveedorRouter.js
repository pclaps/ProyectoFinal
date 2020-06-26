const express = require('express');
const router = express.Router();

const {
    validateParams,
    getAllProveedor,
    getProveedor,
    saveProveedor,
    deleteProveedor,
    updateProveedor
}= require('../middlewares/ProveedorMw');

//Listo actividades
router.get('/', getAllProveedor);
router.get('/:id', getProveedor);
router.post('/',saveProveedor);

router.delete('/:id', deleteProveedor);
router.post('/update/:id',updateProveedor);

module.exports = router;
