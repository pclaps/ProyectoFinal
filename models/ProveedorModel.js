const connection = require('../services/db-connection');
//Defino las funcionalidades para la clase 
const GETALL_PROVEEDOR ="SELECT * FROM Proveedor ";
const GET_PROVEEDOR_BY_ID ="SELECT * FROM Proveedor WHERE IDProveedor = ?";
const SAVE_PROVEEDOR ="INSERT INTO Proveedor SET ?";
const DELETE_PROVEEDOR = "DELETE FROM Proveedor WHERE idProveedor = ?";
const GET_ACTIVIDADES_PROVEEDOR ="";

class Proveedor {
    constructor (idProveedor,descripcion,direccion){       
        this.idProveedor = idProveedor,
        this.descripcion = descripcion,
        this.direccion = direccion
    }

    static getProveedores (){
        console.log('getProveedores');
        return new Promise(function(resolve, reject){
            connection.query(GETALL_PROVEEDOR,function(error,results){
                if (error){                
                    reject(error);
                } else {                                     
                    console.log(results);
                
                    resolve(results.map((Prov) => {
                        const { idProveedor,descripcion,direccion } = Prov;
                        return new Proveedor(idProveedor,descripcion,direccion);
                    }));
                }
            });
        })
    }

    static getProveedorId (id){
        console.log('getProveedorId');
        return new Promise(function(resolve, reject){
            connection.query(GET_PROVEEDOR_BY_ID,[id],function(error,results){
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
                         const {idProveedor,descripcion,direccion} = results[0];//aca tengo los nombres posta                    
                         resolve(new Proveedor(idProveedor,descripcion,direccion));
                }}
            });
        })
    }

  //  static guardarProv(descripcion,direccion){
    static guardarProv(data){
        return new Promise(function(resolve, reject){            
            const newProveedor = data ;
            connection.query(SAVE_PROVEEDOR,[newProveedor],function(error,results){
                if (error){
                    console.log(error);
                    reject(error);
                } else {                                                                            
                    resolve({"success" : "true",
                             "descripcion": "Proveedor creado con exito"
                    });
                }
            });
        })
    }

    static deleteProv(id){        
        return new Promise(function(resolve, reject){
            connection.query(DELETE_PROVEEDOR,[id],function(error,results){
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

module.exports = Proveedor;

