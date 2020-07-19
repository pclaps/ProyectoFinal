const connection = require('../services/db-connection');
//Defino las funcionalidades para la clase 
const GET_HORARIOACTIVIDADES_BY_HORARIO ="SELECT * FROM HORARIOACTIVIDAD WHERE hora = ?";
const GET_HORARIOACTIVIDADES_BY_ACTIVIDAD ="SELECT * FROM HORARIOACTIVIDAD WHERE idactividad = ?";
const GET_HORARIOACTIVIDADES_BY_ID ="SELECT * FROM HORARIOACTIVIDAD WHERE idhorarioActividad = ?";
const GET_HORARIOACTIVIDADES ="SELECT * FROM HORARIOACTIVIDAD";
const SAVE_HORARIO_ACTIVIDAD ="INSERT INTO HORARIOACTIVIDAD set ?";
const DELETE_HORARIO_ACTIVIDAD = "DELETE * FROM HORARIOACTIVIDAD WHERE idHorarioActividad = ?";



class HORARIOACTIVIDAD {
    constructor (idHorarioActividad, dia,hora,mes,idLocal,idActividad,fechaCreacion,fechaModif){       
        this.idHorarioActividad = idHorarioActividad,
        this.dia = dia,
        this.hora = hora,
        this.mes = mes,
        this.idLocal = idLocal,
        this.idActividad = idActividad,
        this.fechaCreacion = fechaCreacion,
        this.fechaModif = fechaModif
    }
    /*
    Obtengo todos los horariosActividades
    */
    static getHorariosActividades (){
        console.log('getHorariosActividades');
        return new Promise(function(resolve, reject){
            connection.query(GET_HORARIOACTIVIDADES,function(error,results){
                if (error){                
                    reject(error);
                } else {                                     
                    console.log(results);                
                    resolve(results.map((horario) => {
                        const {idHorarioActividad, dia,hora,mes,idLocal,idActividad,fechaCreacion,fechaModif} =horario;//aca tengo los nombres posta                    
                        return(new HORARIOACTIVIDAD(idHorarioActividad, dia,hora,mes,idLocal,idActividad,fechaCreacion,fechaModif));
                    }));
                }
            });
        })
    }

static getHorariosActividadesByActividad (id){
        console.log('getHorariosActividadesByActividad BD '+id);
        return new Promise(function(resolve, reject){
            connection.query(GET_HORARIOACTIVIDADES_BY_ACTIVIDAD,[id],function(error,results){
                if (error){
                    console.log(error);
                    reject(error);
                } else {                   
                    resolve(results.map((horario) => {
                        const {idHorarioActividad, dia,hora,mes,idLocal,idActividad,fechaCreacion,fechaModif} =horario;//aca tengo los nombres posta                    
                        return(new HORARIOACTIVIDAD(idHorarioActividad, dia,hora,mes,idLocal,idActividad,fechaCreacion,fechaModif));
                    }));
                }
            });
        })
    }
    static getHorariosActividadesByID (id){
        console.log('getHorariosActividadesByID '+ id);
        return new Promise(function(resolve, reject){
            connection.query(GET_HORARIOACTIVIDADES_BY_ID,[id],function(error,results){
                if (error){
                    console.log(error);
                    reject(error);
                } else {                   
                    const {idHorarioActividad, dia,hora,mes,idLocal,idActividad,fechaCreacion,fechaModif} = results[0];//aca tengo los nombres posta                    
                    resolve(new HORARIOACTIVIDAD(idHorarioActividad, dia,hora,mes,idLocal,idActividad,fechaCreacion,fechaModif));
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
                    const {idHorarioActividad, dia,hora,mes,idLocal,idActividad,fechaCreacion,fechaModif} = results[0];//aca tengo los nombres posta                    
                    resolve(new HORARIOACTIVIDAD(idHorarioActividad, dia,hora,mes,idLocal,idActividad,fechaCreacion,fechaModif));
                }
            });
        })
    }*/

    static guardarHorarioActividad(data){

        //Deberia validar si viene alguna FK por ejemplo IdActividad e IdLocal que no existan
        
        return new Promise(function(resolve, reject){            
            const horActividad = data ;
            connection.query(SAVE_HORARIO_ACTIVIDAD,[horActividad],function(error,results){
                if (error){
                    console.log(error);
                    reject(error);
                } else {                                   
                    console.log('Se creo HOrario Actividad exitosamente');
                    resolve({"success" : "true",
                             "msg": "HorarioActividad creado con exito"
                    });
                }
            });
        })
    }

    static deleteHorarioActividad(id){        
        return new Promise(function(resolve, reject){
            connection.query(DELETE_HORARIO_ACTIVIDAD,[id],function(error,results){
                if (error){
                    console.log(error);
                    reject(error);
                } else {                                                          
                    resolve( {"success" : "true",
                                "msg": "borrado con exito"
                                });
                }
            });
        })
    }
}

module.exports = HORARIOACTIVIDAD;

