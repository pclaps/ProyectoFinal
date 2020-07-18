const router = require('express').Router();
const HorarioActividad = require('../../models/HorarioActividadModel');
const moment = require('moment');

console.log('horario actividad API');
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
    //busco los horarios segun actividad
    console.log('getAllHorarioActividad API:  '+req.query.idActividad);

    if (req.query.idActividad){
        console.log('getHorariosActividadesByActividad API');
        const id = req.query.idActividad;   
        HorarioActividad.getHorariosActividadesByActividad(id)
        .then(listHorarioActividad =>{   
        res.json({listHorarioActividad})
        console.log('lista '+ listHorarioActividad);
    })
    .catch(function(err){  
        console.log(err);
        console.log('ocurrio un error en getHorariosActividadesByActividad');
        res.json(err);
    })
    }
    else
    {
        console.log('getHorariosActividades API');
        HorarioActividad.getHorariosActividades()
        .then(listHorarioActividad =>{   
            res.json({listHorarioActividad})
            console.log(listHorarioActividad);;
        })
        .catch(function(err){  
            console.log(err);
            console.log('ocurrio un error en getHorariosActividades');
            res.json(err);
        })
    }
    
};

router.get('/', getAllHorarioActividad);

//Obtengo un Tipo de Actividad por ID
const getHorariosByID=(req,res)=>{    
    console.log('getHorariosByID'+req.params);
    const { id } = req.params;     
    HorarioActividad.getHorariosActividadesByID(id)
    .then(function(horario){        
        res.json(horario);
    })
    .catch(function(err){  
        console.log(err);
        console.log('ocurrio un error en getActividad');
        res.json(err);
    })
};
router.get('/:id', getHorariosByID);

//Guardo un Tipo de Actividad
const saveHorarioActividad=(req,res)=>{
    console.log('saveHorarioActividad');
    const {dia,hora,mes,idLocal,idActividad,fecC,fecM } = req.body;    
    const fechaCreacion= moment(fecC).format();
    const fechaModif= moment(fecM).format();
    const data = {dia,hora,mes,idLocal,idActividad,fechaCreacion,fechaModif};

    HorarioActividad.guardarHorarioActividad(data)
    .then(function(horario){
        console.log('horario :'+horario);
        res.json(horario);    
    })
    .catch(function(err){  
        console.log(err)    ;
        console.log('ocurrio un error en saveHorarioActividad');
        res.json(err);
    })
};
router.post('/', saveHorarioActividad );

const deleteHorActividad=(req,res)=>{
    const { id } = req.params; // igual a     const id = req.params.id;
   
    HorarioActividad.deleteHorarioActividad(id)
    .then(function(horactividad){
        console.log(horactividad);
        res.json(horactividad);    
    })
    .catch(function(err){  
        console.log(err)    ;
        console.log('ocurrio un error en deleteActividad');
        res.json(err);
    })
}

router.delete('/:id',validateParams,deleteHorActividad);

//para el post
const updateHorarioActividad=(req,res)=>{

    const { id } = req.params; 
    const {dia,hora,mes,idLocal,idActividad,fecC,fecM } = req.body;    
    const fechaCreacion= moment(fecC).format();
    const fechaModificacion= moment(fecM).format();

    const dataHorario = {dia,hora,mes,idLocal,idActividad,fechaCreacion,fechaModificacion};
    Usuario.updateUsuario(dataHorario,id)
           .then(function(horario){
              //console.log(Usuario);
                res.json(horario);    
            })
            .catch(function(err){  
                console.log('ocurrio un error en Update HorarioActividad');
                res.json(err);
            })
}
router.put('/:id',validateParams,updateHorarioActividad);

module.exports = router;

