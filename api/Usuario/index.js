const router = require('express').Router();
const Usuario = require('../../models/usuarioModel');
console.log('API--Usuario...');
/*
const getUsuario = (req, res, next) => {

    if(req.session.user){
        req.user = req.session.user;
    }
    next();
}
*/
const validateParams = (req, res, next) => {
    res.juan = 'hola';
    if(isNaN(req.params.id)) {
        res.status(404).send({
            success: false,
            message: "El parametro es invalido"
        });
    } else {
        next();
    }
};

//const getAllUsuario=(req,res)=>{   
router.get('/', (req, res, next) => {
    console.log('getAllUsuario');
    Usuario.getUsuarios()
    .then(listUsuarios =>{   
        res.json({listUsuarios});
    })
    .catch(function(err){  
        console.log(err);
        console.log('ocurrio un error en getAllUsuario');
        res.json(err);
    })
});
//};

//router.get('/', getAllUsuario);


//Obtengo un Tipo de Actividad por ID
const getUsuario=(req,res)=>{    
    const { id } = req.params;     
    Usuario.getUsuarioID(id)
    .then(function(Usuario){        
        res.json(Usuario);
    })
    .catch(function(err){  
        console.log(err);
        console.log('ocurrio un error en getUsuario');
        res.json(err);
    })
};
router.get('/:id', getUsuario);


//Guardo un Tipo de Actividad

/*
router.post('/', (req, res, next) => {
    console.log(req.body);
    const task = new Task(null, req.body.name, req.body.description);

    task.save().then(task => {
        res.json({
            task,
        });
    }).catch(err => {
        next(err);
    });
});*/
//const saveUsuario=(req,res)=>{
router.post('/', (req, res, next) => {
    console.log('saveUsuario');
    const {clave,email,nombreUsuario,apellidoUsuario,fechaNacimiento,telefono,rol,direccion } = req.body;    
    const dataUsu = {clave,email,nombreUsuario,apellidoUsuario,fechaNacimiento,telefono,rol,direccion};
    console.log(dataUsu);
    console.log('guardarUsuario');
    Usuario.guardarUsuario(dataUsu)
     .then(function(Usuario){
        console.log(Usuario);
        res.json(Usuario);    
    })
     .catch(function(err){  
        console.log(err)    ;
        console.log('ocurrio un error en al guardar usuario'+ 'codError : '+ err.errno );
        res.json(err);
    })
});

const deleteUsuario=(req,res)=>{
    const { id } = req.params; // igual a     const id = req.params.id;
    Usuario.deleteUsuario(id)
    .then(function(Usuario){
        console.log(Usuario);
        res.json(Usuario);    
    })
    .catch(function(err){  
        console.log(err)    ;
        console.log('ocurrio un error en deleteUsuario');
        res.json(err);
    })
}

//para el post
const updateUsuario=(req,res)=>{

    const { id } = req.params; 
    const {clave,email,nombreUsuario,apellidoUsuario,fechaNacimiento,telefono,fecCreado,fecModif,rol,direccion } = req.body;
    const dataUsu = {clave,email,nombreUsuario,apellidoUsuario,fechaNacimiento,telefono,fecCreado,fecModif,rol,direccion};
    Usuario.updateUsuario(dataUsu,id)
           .then(function(Usuario){
              //console.log(Usuario);
                res.json(Usuario);    
            })
            .catch(function(err){  
                console.log('ocurrio un error en deleteUsuario');
                res.json(err);
            })
   
}

module.exports = router