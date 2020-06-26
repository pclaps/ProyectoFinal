const connection = require('../services/db-connection');
//Defino las funcionalidades para la clase 
const GETALL_TIPOACTIVIDAD ="SELECT * FROM TIPOACTIVIDAD ";
const GET_TIPOACTIVIDAD_BY_ID ="SELECT * FROM TIPOACTIVIDAD WHERE IDTIPOACTIVIDAD = ?";
const SAVE_TIPOACTIVIDAD ="INSERT INTO TIPOACTIVIDAD SET ?";
const DELETE_TIPOACTIVIDAD = "DELETE FROM tipoactividad WHERE idTipoActividad = ?";


class TIPOACTIVIDAD {
    constructor (idTipoActividad,descripcion,imagen){       
        this.idTipoActividad = idTipoActividad,
        this.descripcion = descripcion,
        this.imagen = imagen
    }

    static getTodasTipAct (){
        return new Promise(function(resolve, reject){
            connection.query(GETALL_TIPOACTIVIDAD,function(error,results){
                if (error){
                
                    reject(error);
                } else {                                     
                    console.log(results);
                
                    resolve(results.map((tipact) => {
                        const { idTipoActividad,descripcion,imagen } = tipact;
                        return new TIPOACTIVIDAD(idTipoActividad,descripcion,imagen);
                    }));
                }
            });
        })
    }

    static getUnaTipAct (id){
        return new Promise(function(resolve, reject){
            connection.query(GET_TIPOACTIVIDAD_BY_ID,[id],function(error,results){
                if (error){
                    console.log(error);
                    reject(error);
                } else {                   
                    const {idTipoActividad,descripcion,imagen} = results[0];//aca tengo los nombres posta                    
                    resolve(new TIPOACTIVIDAD(idTipoActividad,descripcion,imagen));
                }
            });
        })
    }

  //  static guardarTipAct(descripcion,imagen){
    static guardarTipAct(data){
        return new Promise(function(resolve, reject){
            console.log('promesa '+SAVE_TIPOACTIVIDAD);
            const newTIPOACTIVIDAD = data ;
            console.log(newTIPOACTIVIDAD);
            const idTipoActividad =1;// count(*) from TIPOACTIVIDAD
            connection.query(SAVE_TIPOACTIVIDAD,[newTIPOACTIVIDAD],function(error,results){
                if (error){
                    console.log(error);
                    reject(error);
                } else {                                                        
                    const {descripcion,imagen} = newTIPOACTIVIDAD;//Uso los datos de la nueva 
                    console.log('res: '+ descripcion);
                    console.log(imagen);
                    resolve(new TIPOACTIVIDAD(idTipoActividad, descripcion,imagen));
                }
            });
        })
    }

    static deleteTipAct(id){
        console.log(DELETE_TIPOACTIVIDAD);
        console.log(id);
        return new Promise(function(resolve, reject){
            connection.query(DELETE_TIPOACTIVIDAD,[id],function(error,results){
                if (error){
                    console.log(error);
                    reject(error);
                } else {                                      
                    //resolve(new TIPOACTIVIDAD(id,"",""));
                    resolve( {"success" : "true",
                                "descripcion": "borrado con exito"
                                });
                }
            });
        })
    }
}

module.exports = TIPOACTIVIDAD;

