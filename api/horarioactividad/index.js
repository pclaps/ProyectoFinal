const router = require('express').Router();
const Actividad = require('../../models/HorarioActividadModel');


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


const getAllHorarioActividad=(req,res)=>{   
    
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
router.put('/:id',validateParams,updateActividad);

module.exports = router;

