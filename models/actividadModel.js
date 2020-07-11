const connection = require('../services/db-connection');
//Defino las funcionalidades para la clase 
const GET_ACTIVIDADES_BY_ACTIVIDAD ="SELECT * FROM ACTIVIDAD WHERE name = ?";
//const SAVE_ACTIVIDAD ="INSERT INTO ACTIVIDAD set name=?,description=?,image_id=?,password=?,usuario=?";
const SAVE_ACTIVIDAD ="INSERT INTO ACTIVIDAD set ?";
const DELETE_ACTIVIDADES = "DELETE * FROM ACTIVIDAD WHERE name = ?";
const GET_ACTIVIDADES_BY_PRV = "SELECT * FROM ACTIVIDAD WHERE IdProveedor =?"
const GET_ACTIVIDAD_BY_ID = "SELECT * FROM ACTIVIDAD WHERE idActividad =?"
const GETALL_ACTIVIDAD="SELECT * FROM ACTIVIDAD";

class ACTIVIDAD {
    constructor (idActividad, descripcion,tipoActividad,cuposTotales,imagen,idUsuarioResp,idProveedor){       
        this.idActividad = idActividad,
        this.descripcion = descripcion,
        this.tipoActividad = tipoActividad,
        this.cuposTotales = cuposTotales,
        this.imagen = imagen,
        this.idUsuarioResp = idUsuarioResp,
        this.idProveedor = idProveedor
    }

     static getTodasActividadporProveedor(id){
        console.log('getTodasActividadporProveedor BD : '+id);
        return new Promise(function(resolve, reject){
            connection.query(GET_ACTIVIDADES_BY_PRV,[id],function(error,results){
                if (error){
                    console.log(error);
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
                        resolve(results.map((actividad) => {
                            const {idActividad,descripcion,tipoActividad,cuposTotales,imagen,idUsuarioResp,idProveedor} = actividad;                   
                            return new ACTIVIDAD(idActividad,descripcion,tipoActividad,cuposTotales,imagen,idUsuarioResp,idProveedor);
                        }));                       
                }}
            });
        })
        }
        
    static getTodasActividad (){
        console.log('getTodasActividad BD :')
        return new Promise(function(resolve, reject){
            connection.query(GETALL_ACTIVIDAD,function(error,results){
                if (error){
                
                    reject(error);
                } else {                                     
                    //console.log(results);
                  
                    try {
                        resolve(results.map((actividad) => {
                            const {idActividad,descripcion,tipoActividad,cuposTotales,imagen,idUsuarioResp,idProveedor} = actividad;                   
                            return new ACTIVIDAD(idActividad,descripcion,tipoActividad,cuposTotales,imagen,idUsuarioResp,idProveedor);
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

    static getUnaActividad (id){
        console.log('getUnaActividad BD :'+ id);
        return new Promise(function(resolve, reject){
            connection.query(GET_ACTIVIDAD_BY_ID,[id],function(error,results){
                if (error){
                    console.log(error);
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
                         const {idActividad,descripcion,tipoActividad,cuposTotales,imagen,idUsuarioResp,idProveedor} = results[0];//aca tengo los nombres posta                    
                         resolve(new ACTIVIDAD(idActividad,descripcion,tipoActividad,cuposTotales,imagen,idUsuarioResp,idProveedor))
                }}
            });
        })
    }

    static guardarActividad(data){
        return new Promise(function(resolve, reject){            
            const Actividad = data ;
            connection.query(SAVE_ACTIVIDAD,[Actividad],function(error,results){
                if (error){
                    console.log(error);
                    reject(error);
                } else {                                                                            
                    resolve({"success" : "true",
                             "descripcion": "ActividadAgendada creado con exito"
                    });
                }
            });
        })
    }

    static deleteActividad(id){        
        return new Promise(function(resolve, reject){
            connection.query(DELETE_ACTIVIDAD,[id],function(error,results){
                if (error){
                    console.log(error);
                    reject(error);
                } else {                                                          
                    resolve( {"success" : "true",
                                "descripcion": "borrado con exito"
                                });
                }
            });
        })
    }
}

module.exports = ACTIVIDAD;

