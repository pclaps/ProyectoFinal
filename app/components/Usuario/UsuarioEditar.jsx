const React = require('react');
const {Link,Redirect} = require ('react-router-dom');
const { Button,Form, Segment,Dropdown } = require ('semantic-ui-react');

const options = [
    { key: 'a', text: 'Administrador', value: 'Admin' },
    { key: 'e', text: 'Empleado', value: 'empleado' },
    { key: 'profesor', text: 'Profesor', value: 'Prof' },
    { key: 'cliente', text: 'Cliente', value: 'cliente' },
  ]

class UsuarioEditar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: {
                idUsuario: null,
                clave: '',
                email: '',
                nombreUsuario: '',
                apellidoUsuario: '',
                fechaNacimiento: '',
                telefono: '',
                fecCreado:'',
                fecModif: '',
                rol:'',
                direccion: '',
                idProveedor:''
            },
            redirect : false,
            loading: true,
            error: false,
        };
        this.handleClaveChange = this.handleClaveChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNombreChange = this.handleNombreChange.bind(this);
        this.handleApellidoChange = this.handleApellidoChange.bind(this);
        this.handleFecNacChange = this.handleFecNacChange.bind(this);
        this.handleTelefonoChange = this.handleTelefonoChange.bind(this);
        this.handleRolChange = this.handleRolChange.bind(this);
        this.handleDireccionChange = this.handleDireccionChange.bind(this);
        this.handleIdProveedorChange = this.handleIdProveedorChange.bind(this);  
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    
    handleClaveChange(event) {
        
        this.setState({
            usuario: {
                ...this.state.usuario,
            clave : event.target.value
            }
        });
    }
    handleEmailChange(event) {
        this.setState({
            usuario: {
                ...this.state.usuario,
            mail : event.target.value
            }
        });
    }
    handleNombreChange(event) {
        
        this.setState({
            usuario: {
                ...this.state.usuario,
            nombreUsuario : event.target.value
            }
        });
    }

    handleApellidoChange(event) {
        this.setState({
            usuario: {
                ...this.state.usuario,
            apellidoUsuario : event.target.value
            }
        });
    }

    handleFecNacChange(event) {
        this.setState({
            usuario: {
                ...this.state.usuario,
            fechaNacimiento : event.target.value           
            }
        });
    }
  
    handleTelefonoChange(event) {
        this.setState({
            usuario: {
                ...this.state.usuario,
            telefono : event.target.value
            }
        });
    }

    handleDireccionChange(event) {
        this.setState({
            usuario: {
                ...this.state.usuario,
            direccion : event.target.value
            }
        });
    }

    handleRolChange(event) {
        this.setState({
            usuario: {
                ...this.state.usuario,
            rol : event.target.value
            }
        });
    }

    handleIdProveedorChange(event) {
        this.setState({
            usuario: {
                ...this.state.usuario,
            idProveedor : event.target.value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();   
     //   alert(this.state.usuario.rol)   
        //fetch(`/api/usuario/${this.props.id}`, { //asi accedo a la propiedad del padre
            //console.log(`/api/usuario/${this.state.usuario.idUsuario}`)
        fetch(`/api/usuario/${this.state.usuario.idUsuario}`, {
            method: 'PUT',
            headers : { "Content-Type" : "application/json; charset=utf-8"},
            body: JSON.stringify({
                clave: this.state.usuario.clave,
                email: this.state.usuario.email,
                nombreUsuario: this.state.usuario.nombreUsuario,
                apellidoUsuario: this.state.usuario.apellidoUsuario,
                fechaNacimiento: this.state.usuario.fechaNacimiento,
                telefono: this.state.usuario.telefono,
                fecCreado:this.state.usuario.fecCreado,
                fecModif: this.state.usuario.fecModif,
                rol:this.state.usuario.rol,
                direccion: this.state.usuario.direccion,
                idProveedor:this.state.usuario.idProveedor
            })
        }).then(res => res.json())  
          .then((data) =>{
            this.setState({
                redirect: true
            });


        }).catch((err) => {
            alert(err);
            alert('Ocurrio un error');
        });
    }

    componentDidMount() {       
       
        fetch(`/api/usuario/${this.props.id}`, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // body: JSON.stringify(data) // body data type must match "Content-Type" header
          }) .then(res => res.json()).then((data) =>{
                this.setState({
                    usuario: {
                        ...data.usuario
                    },
                    loading: false,
                  error: false,
            });
        });
    }

    render() {        
        const usuario  = this.state.usuario;
        if (this.state.redirect) {
            return <Redirect to="/lista-usuarios" />
        }
        return (
            <div>               
                <Segment inverted textAlign="center">Modificar Usuario</Segment>               
                <Link to={`/lista-usuarios/`}>Ir al listado de Usuarios</Link>       
                <Form onSubmit={this.handleSubmit} className="flex-container2">  
                <Form.Field required>
                          <label>Correo electrónico</label>                          
                          <input placeholder='Email' 
                          value={this.state.usuario.email} 
                          onChange={this.handleEmailChange}
                          error={{
                            content: 'Please enter a valid email address',
                            pointing: 'below',
                          }}/>
                    </Form.Field>  
                    <Form.Field required>
                          <label>Contraseña</label>                          
                          <input placeholder='Contraseña' 
                          value={this.state.usuario.clave} 
                          onChange={this.handleClaveChange}
                         />
                    </Form.Field>  
                    <Form.Field required>
                          <label>Nombre</label>
                          <input placeholder='Nombre' 
                          value={this.state.usuario.nombreUsuario} 
                          onChange={this.handleNombreChange}/>
                    </Form.Field>  
                    <Form.Field required>
                          <label>Apellido</label>
                          <input placeholder='Apellido' 
                          value={this.state.usuario.apellidoUsuario} 
                          onChange={this.handleApellidoChange}/>
                    </Form.Field>  
                    <Form.Field required>
                          <label>Fecha Nacimiento</label>                          
                          <input placeholder='Fecha Nac' 
                          value={this.state.usuario.fechaNacimiento} 
                          onChange={this.handleFecNacChange}
                          />
                    </Form.Field>  
                    <Form.Field>
                          <label>Celular</label>
                          <input placeholder='Celular' 
                          value={this.state.usuario.telefono} 
                          onChange={this.handleTelefonoChange}/>
                    </Form.Field> 
                    <Form.Select 
                       fluid
                       label='Rol de usuario'
                       options={options}
                       placeholder='Tipo de usuario'
                       value={this.state.usuario.rol} 
                       onChange={this.handleRolChange}
                     />                
                    <Form.Field>
                          <label>Direccion</label>
                          <input placeholder='direccion' 
                          value={this.state.usuario.direccion} 
                          onChange={this.handleDireccionChange}/>
                    </Form.Field>   
                    <Form.Field>
                          <label>Proveedor</label>
                          <input placeholder='idProveedor' 
                          value={this.state.usuario.idProveedor} 
                          onChange={this.handleIdProveedorChange}/>
                    </Form.Field>    
                    <Form.Button primary >Modificar Usuario</Form.Button>                      
                </Form>
            </div>
        );
    }
};
module.exports = UsuarioEditar;
