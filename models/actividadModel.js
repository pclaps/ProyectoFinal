const connection = require('../database');
//Defino las funcionalidades para la clase 
const GET_ACTIVIDADES_BY_ACTIVIDAD ="SELECT * FROM ACTIVIDAD WHERE name = ?";
//const SAVE_ACTIVIDAD ="INSERT INTO ACTIVIDAD set name=?,description=?,image_id=?,password=?,usuario=?";
const SAVE_ACTIVIDAD ="INSERT INTO ACTIVIDAD set ?";
const DELETE_ACTIVIDADES = "DELETE * FROM ACTIVIDAD WHERE name = ?";
//console.log(GET_ACTIVIDADES_BY_ACTIVIDAD);

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

    static getTodasActividad (){
        return new Promise(function(resolve, reject){
            connection.query(GETALL_ACTIVIDAD,function(error,results){
                if (error){
                
                    reject(error);
                } else {                                     
                    console.log(results);
                
                    resolve(results.map((Actividad) => {
                        const {idActividad,descripcion,tipoActividad,cuposTotales,imagen,idUsuarioResp,idProveedor} = results[0];//aca tengo los nombres posta                    
                        resolve(new ACTIVIDAD(idActividad,descripcion,tipoActividad,cuposTotales,imagen,idUsuarioResp,idProveedor))
                    }));
                }
            });
        })
    }

    static getUnaActividad (id){
        return new Promise(function(resolve, reject){
            connection.query(GET_ACTIVIDAD_BY_ID,[id],function(error,results){
                if (error){
                    console.log(error);
                    reject(error);
                } else {                   
                    const {idActividad,descripcion,tipoActividad,cuposTotales,imagen,idUsuarioResp,idProveedor} = results[0];//aca tengo los nombres posta                    
                    resolve(new ACTIVIDAD(idActividad,descripcion,tipoActividad,cuposTotales,imagen,idUsuarioResp,idProveedor))
                }
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

