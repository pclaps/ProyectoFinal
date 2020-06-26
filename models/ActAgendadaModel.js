const connection = require('../database');
//Defino las funcionalidades para la clase 
const GETALL_ACTAGENDADA ="SELECT * FROM ActividadAgendada ";
const GET_ACTAGENDADA_BY_ID ="SELECT * FROM ActividadAgendada WHERE IDActividadAgendada = ?";
const SAVE_ACTAGENDADA ="INSERT INTO ActividadAgendada SET ?";
const DELETE_ACTAGENDADA = "DELETE FROM ActividadAgendada WHERE idActividadAgendada = ?";


class ActividadAgendada {
    constructor (idActividadAgendada,descripcion,direccion){       
        this.idActividadAgendada = idActividadAgendada,
        this.descripcion = descripcion,
        this.direccion = direccion
    }

    static getTodasActAgendada (){
        return new Promise(function(resolve, reject){
            connection.query(GETALL_ACTAGENDADA,function(error,results){
                if (error){
                
                    reject(error);
                } else {                                     
                    console.log(results);
                
                    resolve(results.map((ActAgendada) => {
                        const { idActividadAgendada,descripcion,direccion } = ActAgendada;
                        return new ActividadAgendada(idActividadAgendada,descripcion,direccion);
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
                    const {idActividadAgendada,descripcion,direccion} = results[0];//aca tengo los nombres posta                    
                    resolve(new ActividadAgendada(idActividadAgendada,descripcion,direccion));
                }
            });
        })
    }

  //  static guardarActAgendada(descripcion,direccion){
    static guardarActAgendada(data){
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
}

module.exports = ActividadAgendada;

