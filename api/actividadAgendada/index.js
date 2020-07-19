const router = require('express').Router();
const moment = require('moment');
const ActividadAgendada = require('../../models/ActAgendadaModel');
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

const saveActividadAgendada=(req,res)=>{
   // console.log('saveActividadAgendada +email'+ req.session.email+' '+ req.id);
    const idUsuario= req.id; 
    //console.log('req.body : '+req.body.idHorarioActividad);
    const idHorAct = req.body.idHorarioActividad;
    const fechaCreacion= moment(fechaCreacion).format();
    const fechaModificacion= moment(fechaModificacion).format();
    const asistencia =0;
    const data= {idUsuario,asistencia,fechaCreacion,fechaModificacion,idHorAct };    
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
router.post('/',getSessionUsuario, saveActividadAgendada );

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

module.exports = router;