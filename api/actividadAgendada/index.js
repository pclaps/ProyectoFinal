const router = require('express').Router();
const ActividadAgendada = require('../../models/ActAgendadaModel');}
const moment = require('moment');


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


const getAllActividadAgendada=(req,res)=>{   
    
    if (req.query.idUsuario){
        console.log('getTodasActividadAgendada por usuarioAPI');
        const id = req.query.idUsuario;   
        ActividadAgendada.getTodasActividadporUsuario(id)
        .then(listActAgendada =>{   
        res.json({listActAgendada})
        console.log(listActAgendada);
    })
    .catch(function(err){  
        console.log(err);
        console.log('ocurrio un error en getTodasActividadporProveedor');
        res.json(err);
    })
    }
    else
    {
        console.log('getAllActividadAgendada API');
        ActividadAgendada.getTodasActAgendada()
        .then(listActAgendada =>{   
            res.json({listActAgendada})
            console.log(listActAgendada);;
        })
        .catch(function(err){  
            console.log(err);
            console.log('ocurrio un error en getAllActividad');
            res.json(err);
        })
    }
    
};

router.get('/', getAllActividadAgendada);

//Obtengo un Tipo de Actividad por ID
const getActividadAgendada=(req,res)=>{    
    const { id } = req.params;     
    ActividadAgendada.getUnaActAgendada(id)
    .then(function(actAgendada){        
        res.json(actAgendada);
    })
    .catch(function(err){  
        console.log(err);
        console.log('ocurrio un error en getActividad');
        res.json(err);
    })
};
router.get('/:id', getActividadAgendada);

//Guardo ActividadAgendada
const saveActividadAgendada=(req,res)=>{
    const {idActividadAgendada,usuario,asistencia,fechaCreacion,fechaModificacion,idHorAct} = req.body;
    const data = {idActividadAgendada,usuario,asistencia,fechaCreacion,fechaModificacion,idHorAct };
    console.log('saveActividadAgendada API: '+ data);
    ActividadAgendada.guardarActAgendada(data)
    .then(function(actAgendada){
        console.log(actAgendada);
        res.json(actAgendada);    
    })
    .catch(function(err){  
        console.log(err)    ;
        console.log('ocurrio un error en saveActividad');
        res.json(err);
    })
};
router.post('/', saveActividadAgendada );

const deleteActividadAgendada=(req,res)=>{
    const { id } = req.params; // igual a     const id = req.params.id;
   
    ActividadAgendada.deleteActividad(id)
    .then(function(actAgendada){
        console.log(actAgendada);
        res.json(actAgendada);    
    })
    .catch(function(err){  
        console.log(err)    ;
        console.log('ocurrio un error en deleteActividad');
        res.json(err);
    })
}

router.delete('/:id',validateParams,deleteActividadAgendada);

//para el post
const updateActividadAgendada=(req,res)=>{
    const { id } = req.params; console.log('updateActividadAgendada: '+ id);
    const {idActividadAgendada,usuario,asistencia,fechaCreacion,fecM,idHorAct } = req.body;
    const fecModif= moment(fecM).format();    
    const dataActAge = {idActividadAgendada,usuario,asistencia,fechaCreacion,fechaModificacion,idHorAct};
    ActividadAgendada.updateActAgendada(dataActAge,id)
               .then(function(actAge){
                  //console.log(Usuario);
                    res.json(actAge);    
                })
                .catch(function(err){  
                    console.log('ocurrio un error en Update Usuario');
                    res.json(err);
                })
       
    }
router.put('/:id',validateParams,updateActividadAgendada);

module.exports = router;

