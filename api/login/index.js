const router = require('express').Router();
const Usuario = require('../../models/usuarioModel');
const moment = require('moment');

const {appAutorizacionHandler,getSessionUsuario} = require('../../middlewares/autorizacion-handler');


const validarLogin = (req, res,next) => {   
   console.log('validarLogin API');
    const { email,clave } = req.body;
    const datalogin = { email,clave };
    Usuario.validoMailLogin(datalogin)
            .then(login => { console.log('resultado Validar login '+ login.success + login.id);                      
            if (req.session.email){
                  console.log('datos del body '+req.session.email);
                  next();
            }
            else{
                //asigno la sesion al email conectado
                req.session.email=email;
                req.session.user=login.id
                req.user=login.id;
                console.log('session:'+ req.session.email+' '+req.user);
                res.json({login,});
                next();
            }              
            })           
           .catch(function(err){  
              console.log(err);        
              console.log('ocurrio un error API '+ err.msg);                                 
              res.status(401).json( {
                'success': false,
                'msg': err.msg
              });           
         })
}

router.post('/', validarLogin,getSessionUsuario,appAutorizacionHandler, );


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
    })
         .catch(function(err){  
            console.log(err);        
            console.log('ocurrio un error '+ err.msg);
            res.json(err);
    })
};
router.get('/:id', getUsuario);
/*
const saveUsuario=(req,res)=>{
    console.log('saveUsuario');
    const {clave,email,nombreUsuario,apellidoUsuario,fechaNacimiento,telefono,rol,direccion } = req.body;    
    const dataUsu = {clave,email,nombreUsuario,apellidoUsuario,fechaNacimiento,telefono,rol,direccion};
    console.log(dataUsu);
    //console.log('guardarUsuario');
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
*/
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
    
    const { id } = req.params; console.log('updateUsuario: '+ id);
    const {clave,email,nombreUsuario,apellidoUsuario,fecNac,telefono,fecC,fecM,rol,direccion } = req.body;
    const fechaNacimiento= moment(fecNac).format();
    const fecCreado= moment(fecC).format();
    const fecModif= moment(fecM).format();

    const dataUsu = {clave,email,nombreUsuario,apellidoUsuario,fechaNacimiento,telefono,fecCreado,fecModif,rol,direccion};
    Usuario.updateUsuario(dataUsu,id)
           .then(function(usuario){
              //console.log(Usuario);
                res.json(usuario);    
            })
            .catch(function(err){  
                console.log('ocurrio un error en Update Usuario');
                res.json(err);
            })
   
}
router.put('/:id',validateParams,updateUsuario);

module.exports = router