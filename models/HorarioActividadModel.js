const connection = require('../services/db-connection');
//Defino las funcionalidades para la clase 
const GET_HORARIOACTIVIDADES_BY_HORARIO ="SELECT * FROM HORARIOACTIVIDAD WHERE hora = ?";
const GET_HORARIOACTIVIDADES_BY_ACTIVIDAD ="SELECT * FROM HORARIOACTIVIDAD WHERE idactividad = ?";
const GET_HORARIOACTIVIDADES ="SELECT * FROM HORARIOACTIVIDAD";
const SAVE_HORARIO_ACTIVIDAD ="INSERT INTO HORARIOACTIVIDAD set ?";
const DELETE_HORARIO_ACTIVIDAD = "DELETE * FROM HORARIOACTIVIDAD WHERE idHorarioActividad = ?";



class HORARIOACTIVIDAD {
    constructor (idHorarioActividad, dia,hora,mes,idLocal,idActividad,fechaCreacion,fechaModificacion){       
        this.idHorarioActividad = idHorarioActividad,
        this.dia = dia,
        this.hora = hora,
        this.mes = mes,
        this.idLocal = idLocal,
        this.idActividad = idActividad,
        this.fechaCreacion = fechaCreacion,
        this.fechaModificacion = fechaModificacion
    }
    /*
    Obtengo todos los horariosActividades
    */
    static getHorariosActividades (){
        return new Promise(function(resolve, reject){
            connection.query(GET_HORARIOACTIVIDADES,function(error,results){
                if (error){                
                    reject(error);
                } else {                                     
                    console.log(results);                
                    resolve(results.map((HorarioActividad) => {
                        const {idHorarioActividad, dia,hora,mes,idLocal,idActividad,fechaCreacion,fechaModificacion} = results[0];//aca tengo los nombres posta                    
                        resolve(new HORARIOACTIVIDAD(idHorarioActividad, dia,hora,mes,idLocal,idActividad,fechaCreacion,fechaModificacion));
                    }));
                }
            });
        })
    }

    static getHorariosActividadesByActividad (id){
        return new Promise(function(resolve, reject){
            connection.query(GET_HORARIOACTIVIDADES_BY_ACTIVIDAD,[id],function(error,results){
                if (error){
                    console.log(error);
                    reject(error);
                } else {                   
                    const {idHorarioActividad, dia,hora,mes,idLocal,idActividad,fechaCreacion,fechaModificacion} = results[0];//aca tengo los nombres posta                    
                    resolve(new HORARIOACTIVIDAD(idHorarioActividad, dia,hora,mes,idLocal,idActividad,fechaCreacion,fechaModificacion));
                }
            });
        })
    }
    //Retorna el Horari
   /* static getHorariosActividadesByHorario (horario){
        return new Promise(function(resolve, reject){
            connection.query(GET_HORARIOACTIVIDADES_BY_ACTIVIDAD,[horario],function(error,results){
                if (error){
                    console.log(error);
                    reject(error);
                } else {                   
                    const {idHorarioActividad, dia,hora,mes,idLocal,idActividad,fechaCreacion,fechaModificacion} = results[0];//aca tengo los nombres posta                    
                    resolve(new HORARIOACTIVIDAD(idHorarioActividad, dia,hora,mes,idLocal,idActividad,fechaCreacion,fechaModificacion));
                }
            });
        })
    }*/

    static guardarHorarioActividad(data){
        return new Promise(function(resolve, reject){            
            const HorActividad = data ;
            connection.query(SAVE_HORARIO_ACTIVIDAD,[HorActividad],function(error,results){
                if (error){
                    console.log(error);
                    reject(error);
                } else {                                                                            
                    resolve({"success" : "true",
                             "descripcion": "HoarioActividad creado con exito"
                    });
                }
            });
        })
    }

    static deleteHoraroActividad(id){        
        return new Promise(function(resolve, reject){
            connection.query(DELETE_HORARIO_ACTIVIDAD,[id],function(error,results){
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

module.exports = HORARIOACTIVIDAD;

