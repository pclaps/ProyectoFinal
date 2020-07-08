const router = require('express').Router();
const Usuario = require('../../models/actividadModel');


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
    console.log('getAllActividad router');
    Actividad.getTodasActividad()
    .then(function(listActividades){       
        res.json(listActividades);
    })
    .catch(function(err){  
        console.log(err);
        console.log('ocurrio un error en getAllActividad');
        res.json(err);
    })
};

//router.get('/', (req, res, next) => {}

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
//Guardo un Tipo de Actividad
const saveActividad=(req,res)=>{
    const {descripcion , imagen } = req.body;
    const data = {descripcion, imagen};
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



//para el post
const updateActividad=(req,res)=>{

    const { id } = req.params; 
    const newActividad = req.body;
    console.log(newActividad);    
    connection.query('UPDATE Actividad set ?  WHERE id = ?',[newActividad,id],(err, rows)=>{
         if (err){
         // console.log('error Actividad');
             res.json(err);
         }
         console.log(rows);
         console.log(success);
    }); 
}

module.exports = router;

