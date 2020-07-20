const router = require('express').Router();
const Actividad = require('../../models/actividadModel');
const {getSessionUsuario} = require('../../middlewares/autorizacion-handler');

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


const getAllActividad=(req,res)=>{   
    
    if (req.query.idProveedor){
        console.log('getTodasActividadporProveedor API');
        const id = req.query.idProveedor;   
        Actividad.getTodasActividadporProveedor(id)
        .then(listActividades =>{   
        res.json({listActividades})
        console.log(listActividades);
    })
    .catch(function(err){  
        console.log(err);
        console.log('ocurrio un error en getTodasActividadporProveedor');
        res.json(err);
    })
    }
    else
    {
        console.log('getAllActividad API');
        Actividad.getTodasActividad()
        .then(listActividades =>{   
            res.json({listActividades})
            console.log(listActividades);;
        })
        .catch(function(err){  
            console.log(err);
            console.log('ocurrio un error en getAllActividad');
            res.json(err);
        })
    }
    
};

router.get('/', getAllActividad);

//Obtengo un Tipo de Actividad por ID
const getActividad=(req,res)=>{    
    const { id } = req.params;     
    Actividad.getUnaActividad(id)
    .then(function(actividad){        
        res.json(actividad);
    })
    .catch(function(err){  
        console.log(err);
        console.log('ocurrio un error en getActividad');
        res.json(err);
    })
};
router.get('/:id', getActividad);

//Guardo Actividad
const saveActividad=(req,res)=>{
    const {descripcion,tipoActividad,cuposTotales,imagen,idUsuarioResp,idProveedor } = req.body;
    const data = {descripcion,tipoActividad,cuposTotales,imagen,idUsuarioResp,idProveedor };
    console.log(data);
    Actividad.guardarActividad(data)
    .then(function(actividad){
        console.log(actividad);
        res.json(actividad);    
    })
    .catch(function(err){  
        console.log(err)    ;
        console.log('ocurrio un error en saveActividad');
        res.json(err);
    })
};
router.post('/', saveActividad );

const deleteActividad=(req,res)=>{
    const { id } = req.params; // igual a     const id = req.params.id;
   
    Actividad.deleteActividad(id)
    .then(function(actividad){
        console.log(actividad);
        res.json(actividad);    
    })
    .catch(function(err){  
        console.log(err)    ;
        console.log('ocurrio un error en deleteActividad');
        res.json(err);
    })
}

router.delete('/:id',validateParams,deleteActividad);

//para el post
const updateActividad=(req,res)=>{
    
    const { id } = req.params; console.log('updateActividad: '+ id);
    const {idActividad, descripcion,tipoActividad,cuposTotales,imagen,idUsuarioResp,idProveedor } = req.body;    
    const dataAct = {idActividad, descripcion,tipoActividad,cuposTotales,imagen,idUsuarioResp,idProveedor};
        Actividad.updateActividad(dataAct,id)
               .then(function(actividad){
                  //console.log(Usuario);
                    res.json(actividad);    
                })
                .catch(function(err){  
                    console.log('ocurrio un error en Update Usuario');
                    res.json(err);
                })
       
    }
router.put('/:id',validateParams,updateActividad);

module.exports = router;

