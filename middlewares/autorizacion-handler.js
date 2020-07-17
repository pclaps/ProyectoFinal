const React = require('react');
const {Link} = require ('react-router-dom');
const { Redirect } = require ('react-router-dom');
const {StaticRouter} = require('react-router-dom');
//const View = require('../../pages/users/view');
const {renderToString} = require('react-dom/server');


const appAutorizacionHandler = (req, res, next) => {
  console.log(" appAutorizacionHandler");

  if (req.session!=null){
    console.log('not nutll');
    if(req.session.mail==='r'){
        console.log('Usuario conectado es r!!');
    } else console.log('Usuario conectado es: '+ req.session.mail);
    next();
  }else{
    console.log("else");
   /*   return <Redirect to="/users/signin" />  */

/*     window.location="/users/signin"  */
  }

  //res.render("/signin",{message: 'No autorizado'});
  // Validar que en la request este el usuario logeado TODO
  // Redirect con express al login TODO
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
    apiAutorizacionHandler 
};