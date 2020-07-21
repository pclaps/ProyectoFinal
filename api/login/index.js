const router = require('express').Router();
const Usuario = require('../../models/usuarioModel');
const moment = require('moment');

const {appAutorizacionHandler,getSessionUsuario} = require('../../middlewares/autorizacion-handler');

const logout=(req, res) => {
    req.session.destroy();
    //res.send("logout success!");
    res.status(200).send({
        success: true,
        message: "Desconexion Correcta"
    });
  };

router.get('/',logout);

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

router.post('/', validarLogin,getSessionUsuario,appAutorizacionHandler );

module.exports = router