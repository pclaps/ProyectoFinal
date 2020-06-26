const router = require('express').Router();
const TipoActividad = require('../../models/tipoActividadModel');


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
const getAllTipoActividad=(req,res)=>{   
    TipoActividad.getTodasTipAct()
    .then(function(tipoactividad){       
        res.json(tipoactividad);
    })
    .catch(function(err){  
        console.log(err);
        console.log('ocurrio un error en getAllTipoActividad');
        res.json(err);
    })
};
//Obtengo un Tipo de Actividad por ID
const getTipoActividad=(req,res)=>{    
    const { id } = req.params;     
    TipoActividad.getUnaTipAct(id)
    .then(function(tipoactividad){        
        res.json(tipoactividad);
    })
    .catch(function(err){  
        console.log(err);
        console.log('ocurrio un error en getTipoActividad');
        res.json(err);
    })
};
//Guardo un Tipo de Actividad
const saveTipoActividad=(req,res)=>{
    const {descripcion , imagen } = req.body;
    const data = {descripcion, imagen};
    TipoActividad.guardarTipAct(data)
    .then(function(tipoactividad){
        console.log(tipoactividad);
        res.json(tipoactividad);    
    })
    .catch(function(err){  
        console.log(err)    ;
        console.log('ocurrio un error en saveTipoActividad');
        res.json(err);
    })
};

const deleteTipoActividad=(req,res)=>{
    const { id } = req.params; // igual a     const id = req.params.id;
   
    TipoActividad.deleteTipAct(id)
    .then(function(tipoactividad){
        console.log(tipoactividad);
        res.json(tipoactividad);    
    })
    .catch(function(err){  
        console.log(err)    ;
        console.log('ocurrio un error en deleteTipoActividad');
        res.json(err);
    })
}

//para el post
const updateTipoActividad=(req,res)=>{

    const { id } = req.params; 
    const {descripcion,imagen } = req.body;
    const data = {descripcion,imagen};
    TipoActividad.updateTipoActividad(datav,id)
           .then(function(TipoActividad){
              //console.log(Usuario);
                res.json(TipoActividad);    
            })
            .catch(function(err){  
                console.log('ocurrio un error en updateTipoActividad');
                res.json(err);
            })

}

module.exports = router;
/*
module.exports = {
    validateParams,
    getTipoActividad,
    getAllTipoActividad,
    saveTipoActividad,
    deleteTipoActividad,
    updateTipoActividad
};
*/