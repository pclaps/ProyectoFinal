const connection = require('../services/db-connection');
const bcrypt = require('bcrypt');
//Defino las funcionalidades para la clase 
const GETALL_USUARIO ="SELECT * FROM usuario ";
const GET_USUARIO_BY_ID ="SELECT * FROM usuario WHERE idUsuario = ?";
const SAVE_USUARIO ="INSERT INTO usuario SET ?";
const DELETE_USUARIO = "DELETE FROM usuario WHERE idUsuario = ?";
const UPDATE_USUARIO = "UPDATE usuario SET ?  WHERE idUsuario = ?";
//
console.log('UsuariosModel');
//
class Usuario {
    constructor (idUsuario,clave,email,nombreUsuario,apellidoUsuario,fechaNacimiento,telefono,fecCreado,fecModif,rol,direccion,idProveedor){       
        this.idUsuario = idUsuario,
        this.clave = clave,
        this.email = email,
        this.nombreUsuario = nombreUsuario,
        this.apellidoUsuario = apellidoUsuario,
        this.fechaNacimiento = fechaNacimiento,
        this.telefono = telefono,
        this.fecCreado = fecCreado,
        this.fecModif = fecModif,
        this.rol = rol,
        this.direccion = direccion,
        this.idProveedor = idProveedor
    }

    static getUsuarios (){
        return new Promise(function(resolve, reject){
            connection.query(GETALL_USUARIO,function(error,results){
                if (error){                
                    reject(error);
                } else {                                     
                   console.log('results getUsuarios');
                    try {
                        resolve(results.map((usuario) => {
                            const { idUsuario,clave,email,nombreUsuario,apellidoUsuario,fechaNacimiento,telefono,fecCreado,fecModif,rol,direccion,idProveedor } = usuario;
                            return new Usuario(idUsuario,clave,email,nombreUsuario,apellidoUsuario,fechaNacimiento,telefono,fecCreado,fecModif,rol,direccion,idProveedor);
                        }));
                     } catch(error) {
                        // console.log(error);
                         /*  const error ={ success: false,
                           msg : 'No existe registro',
                        }*/
                        reject(error);
                       }
                }
            });
        })
    }

    static getUsuarioID (id){
        console.log(GET_USUARIO_BY_ID + id);
        return new Promise(function(resolve, reject){
            connection.query(GET_USUARIO_BY_ID,[id],function(error,results){
                if (error){
                    console.log('fallo');
                    console.log('getUsuarioID BD: '+error);
                    reject(error);
                } else {                        
                    if (results[0] == null)
                    {
                        console.log('undefined idUsuario'+ error);
                        const error ={ success: false,
                                       msg : 'No existe registro',
                        }
                        reject(error);
                    }else{
                            const { idUsuario,clave,email,nombreUsuario,apellidoUsuario,fechaNacimiento,telefono,fecCreado,fecModif,rol,direccion,idProveedor } = results[0];
                            return new Usuario(idUsuario,clave,email,nombreUsuario,apellidoUsuario,fechaNacimiento,telefono,fecCreado,fecModif,rol,direccion,idProveedor);                                   
                    }
                    
                }
            });
        })
    }

    static guardarUsuario(data){
        return new Promise(function(resolve, reject){        
            const saltRounds=10;
            bcrypt.hash(data.clave,saltRounds,function(err,hash){
                data.clave = hash;
                const newusuario = data ;
                connection.query(SAVE_USUARIO,[newusuario],function(error,results){
                if (error){
                    console.log(error);
                    reject(error);
                } else {                                                                            
                    resolve({"success" : "true",
                             "descripcion": "Usuario creado con exito"
                             });
                }
            });
        })
       
    })
}

    static deleteUsuario(id){
        console.log(DELETE_USUARIO);
        console.log(id);
        return new Promise(function(resolve, reject){
            connection.query(DELETE_USUARIO,[id],function(error,results){
                if (error){
                    console.log(error);
                    reject(error);
                } else {                                                          
                    resolve( {"success" : "true",
                                "descripcion": "borrado con exito"
                            }  );
                }
            });
        })
    }

    static updateUsuario(data,id){
        console.log(UPDATE_USUARIO);
        console.log(id);
        return new Promise(function(resolve, reject){
            connection.query(UPDATE_USUARIO,[data,id],function(error,results){
                if (error){
                    console.log(error);
                    reject(error);
                } else {                                                          
                    resolve({"success" : "true",
                              "descripcion": "update Usuario con exito"
                            });
                }
            });
        })
    }
}

module.exports = Usuario;

