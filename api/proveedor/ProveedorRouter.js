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
const getProveedores=(req,res)=>{   
    Proveedor.getProveedores()
    .then(function(proveedor){       
        res.json(proveedor);
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

const saveProveedor=(req,res)=>{
    const {descripcion , imagen } = req.body;
    const data = {descripcion, imagen};
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

const deleteProveedor=(req,res)=>{
    const { id } = req.params; // igual a     const id = req.params.id;
   
    Proveedor.deleteTipAct(id)
    .then(function(Proveedor){
        console.log(Proveedor);
        res.json(Proveedor);    
    })
    .catch(function(err){  
        console.log(err)    ;
        console.log('ocurrio un error en deleteProveedor');
        res.json(err);
    })
}

//para el post
const updateProveedor=(req,res)=>{

    const { id } = req.params; 
    const {descripcion,direccion } = req.body;
    const dataProv = {descripcion,direccion};
    Proveedor.updateProveedor(dataProv,id)
           .then(function(Proveedor){
              //console.log(Usuario);
                res.json(Proveedor);    
            })
            .catch(function(err){  
                console.log('ocurrio un error en deleteProveedor');
                res.json(err);
            })
}

module.exports = router;
