const React = require('react');

const  getSessionUsuario = (req, res, next) => {
  console.log('getSessionUsuario');
  if(req.session.email){
      req.user = req.session.email;
      req.id = req.session.user;
      console.log('req.user : '+ req.user);
      next();
  }
  else{
    console.log('No logueado');
    res.redirect('/seguridad/login');
  }
}

const appAutorizacionHandler = (req, res, next) => {
  console.log("appAutorizacionHandler");
  //Si esta logueado
  if (req.session.email){
    console.log('usuario logueado');

    //si es administrador
    if(req.session.email==='admin'){
        console.log('es el admin');
        next();
    } 
    else{
        console.log('Usuario conectado es: '+ req.session.email  );        
    }   
    
  }
  else{
    console.log("No esta logueado");
    res.redirect('/seguridad/login');
  }
};

const apiAutorizacionHandler = (req, res, next) => {
    console.log("hola seguridad api");
//     if(req.session.user/*  == 'nuevo' */){
//       next();
//    }else{
//        res.render("signin",{message: 'No autorizado'});
//    } 

    // Validar que en la request este el usuario logeado TODO
    // res.status(401);
    //res.json({
      //  message: 'Error flaco'
    //});
    // Si no hay problemas llamar a next();
    next();
};

module.exports = { 
    appAutorizacionHandler, 
    apiAutorizacionHandler,
    getSessionUsuario
};