const router = require('express').Router();
const Usuario = require('../../models/usuarioModel');

/*
const getSessionUsuario = (req, res, next) => {

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

const getAllUsuario=(req,res)=>{
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
}

router.get('/', getAllUsuario);


const getUsuario=(req,res)=>{  
    const { id } = req.params;     
    console.log('getUsuario API: '+ id);
    Usuario.getUsuarioID(id)
            .then(usuario => {
               res.json({
                    usuario,
              });   
    /*        .then(function({user}){          
                res.json({user});  */   
    })
         .catch(function(err){  
            console.log(err);        
            console.log('ocurrio un error '+ err.msg);
            res.json(err);
    })
};
router.get('/:id', getUsuario);

const saveUsuario=(req,res)=>{
    console.log('saveUsuario');
    const {clave,email,nombreUsuario,apellidoUsuario,fechaNacimiento,telefono,rol,direccion } = req.body;    
    const dataUsu = {clave,email,nombreUsuario,apellidoUsuario,fechaNacimiento,telefono,rol,direccion};
    console.log(dataUsu);
    console.log('guardarUsuario');
    Usuario.guardarUsuario(dataUsu)
     .then(function(Usuario){
        res.json(Usuario);    
    })
     .catch(function(err){  
        console.log(err)    ;
        console.log('ocurrio un error en al guardar usuario'+ 'codError : '+ err.errno );
        res.json(err);
    })
};

router.post('/', saveUsuario );

const deleteUsuario=(req,res)=>{
    console.log('deleteUsuario');
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
router.delete('/:id',validateParams,deleteUsuario);

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
router.post('/',validateParams,updateUsuario);

module.exports = router