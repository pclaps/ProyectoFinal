const express = require('express');
const router = express.Router();
/*router.get('/', getAllProveedor);
router.get('/:id', getProveedor);
router.post('/',saveProveedor);

router.delete('/:id', deleteProveedor);
router.post('/update/:id',updateProveedor);
*/

const Proveedor = require('../../models/ProveedorModel');


const validateParams = (req, res, next) => {
    
    if(isNaN(req.params.id)) {
        res.status(404).send({
            success: false,
            message: "El parametro es invalido"
        });
    } else {
        next();
    }
};

//Obtengo todos los proveedores del Sistema
const getProveedores=(req,res)=>{  
    console.log('getProveedores') ;
    Proveedor.getProveedores()
    .then(listProvs =>{   
        res.json({listProvs});
    })
    .catch(function(err){  
        console.log(err);
        console.log('ocurrio un error en getProveedores');
        res.json(err);
    })
};

router.get('/', getProveedores);

//Obtengo un Tipo de Actividad por ID
const getProveedorId=(req,res)=>{    
    const { id } = req.params;     
    Proveedor.getProveedorId(id)
    .then(function(proveedor){        
        res.json(proveedor);
    })
    .catch(function(err){  
        console.log(err);
        console.log('ocurrio un error en getProveedor');
        res.json(err);
    })
};
router.get('/:id', getProveedorId);

const saveProveedor=(req,res)=>{
    const {descripcion , direccion } = req.body;
    const data = {descripcion, direccion};
    Proveedor.guardarProv(data)
    .then(function(proveedor){
        console.log(proveedor);
        res.json(proveedor);    
    })
    .catch(function(err){  
        console.log(err)    ;
        console.log('ocurrio un error en saveProveedor');
        res.json(err);
    })
};

router.post('/', saveProveedor );

const deleteProveedor=(req,res)=>{
    const { id } = req.params; // igual a     const id = req.params.id;
   
    Proveedor.deleteTipAct(id)
    .then(function(proveedor){
        console.log(proveedor);
        res.json(proveedor);    
    })
    .catch(function(err){  
        console.log(err)    ;
        console.log('ocurrio un error en deleteProveedor');
        res.json(err);
    })
}
router.delete('/:id',validateParams,deleteProveedor);

const updateProveedor=(req,res)=>{

    const { id } = req.params; 
    const {descripcion,direccion } = req.body;
    const dataProv = {descripcion,direccion};
    Proveedor.updateProveedor(dataProv,id)
           .then(function(proveedor){
              //console.log(Usuario);
                res.json(proveedor);    
            })
            .catch(function(err){  
                console.log('ocurrio un error en deleteProveedor');
                res.json(err);
            })
}
router.put('/:id',validateParams,updateProveedor);

module.exports = router;
