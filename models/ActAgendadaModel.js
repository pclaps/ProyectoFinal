const connection = require('../database');
//Defino las funcionalidades para la clase 
const GETALL_ACTAGENDADA ="SELECT * FROM ActividadAgendada ";
const GET_ACTAGENDADA_BY_ID ="SELECT * FROM ActividadAgendada WHERE IDActividadAgendada = ?";
const GET_ACTAGENDADA_BY_USR ="SELECT * FROM ActividadAgendada WHERE idUsuario = ?";
const SAVE_ACTAGENDADA ="INSERT INTO ActividadAgendada SET ?";
const DELETE_ACTAGENDADA = "DELETE FROM ActividadAgendada WHERE idActividadAgendada = ?";
const UPDATE_ACTAGENDADA = "UPDATE ActividadAgendada SET ?  WHERE idActividadAgendada = ?";


class ActividadAgendada {
    constructor (idActividadAgendada,usuario,asistencia,fechaCreacion,fechaModificacion,idHorAct){       
        this.idActividadAgendada = idActividadAgendada,
        this.usuario = usuario,
        this.asistencia = asistencia,
        this.fechaCreacion = fechaCreacion,
        this.fechaModificacion = fechaModificacion,
        this.idHorAct = idHorAct
    }

    static getTodasActAgendada (){
        return new Promise(function(resolve, reject){
            connection.query(GETALL_ACTAGENDADA,function(error,results){
                if (error){
                
                    reject(error);
                } else {                                     
                    console.log(results);
                
                    resolve(results.map((ActAgendada) => {
                        const { idActividadAgendada,usuario,asistencia,fechaCreacion,fechaModificacion,idHorAct } = ActAgendada;
                        return new ActividadAgendada(idActividadAgendada,usuario,asistencia,fechaCreacion,fechaModificacion,idHorAct);
                    }));
                }
            });
        })
    }

    getTodasActividadporUsuario (id){
        return new Promise(function(resolve, reject){
            connection.query(GET_ACTAGENDADA_BY_USR,[id],function(error,results){
                if (error){                
                    reject(error);
                } else {                                     
                    console.log(results);                
                    resolve(results.map((ActAgendada) => {
                        const { idActividadAgendada,usuario,asistencia,fechaCreacion,fechaModificacion,idHorAct } = ActAgendada;
                        return new ActividadAgendada(idActividadAgendada,usuario,asistencia,fechaCreacion,fechaModificacion,idHorAct);
                    }));
                }
            });
        })
    }

    static getUnaActAgendada (id){
        return new Promise(function(resolve, reject){
            connection.query(GET_ACTAGENDADA_BY_ID,[id],function(error,results){
                if (error){
                    console.log(error);
                    reject(error);
                } else {  
                    if (results[0] == null)
                    {
                        console.log('undefined IDaCTAGE'+ error);
                        const error ={ success: false,
                                       msg : 'No existe registro',
                        }
                        reject(error);
                    }else{                 
                        const {idActividadAgendada,usuario,asistencia,fechaCreacion,fechaModificacion,idHorAct} = results[0];//aca tengo los nombres posta                    
                        resolve(new ActividadAgendada(idActividadAgendada,usuario,asistencia,fechaCreacion,fechaModificacion,idHorAct));
                }}
            });
        })
    }

    static guardarActAgendada(data){
        console.log('guardarActAgendada BD '+ data)
        return new Promise(function(resolve, reject){            
            const newActividadAgendada = data ;
            connection.query(SAVE_ACTAGENDADA,[newActividadAgendada],function(error,results){
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

    static deleteActAgendada(id){        
        return new Promise(function(resolve, reject){
            connection.query(DELETE_ACTAGENDADA,[id],function(error,results){
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

    static updateActAgendada(data,id){
        console.log('updateActividad BD: '+ id);        
        return new Promise(function(resolve, reject){
            connection.query(UPDATE_ACTAGENDADA,[data,id],function(error,results){
                if (error){
                    console.log(error);
                    reject(error);
                } else {       console.log('success');                                                     
                    resolve({"success" : "true",
                              "msg": "update Usuario con exito"
                            });
                }
            });
        })
    }
}

module.exports = ActividadAgendada;

