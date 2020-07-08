const React = require('react');
//const Proveedor = require('../Proveedor/Probuveedor');
const {Link,} = require ('react-router-dom');
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
            usuario: null,
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

            clave: event.target.value
        });
    }
    handleEmailChange(event) {
        console.log(event.target.value);
        this.setState({
            email: event.target.value
        });
    }
    handleNombreChange(event) {
        this.setState({
            nombreUsuario: event.target.value
        });
    }

    handleApellidoChange(event) {
        this.setState({
            apellidoUsuario: event.target.value
        });
    }

    handleFecNacChange(event) {
        this.setState({
            fechaNacimiento: event.target.value
        });
    }
  
    handleTelefonoChange(event) {
        this.setState({
            telefono: event.target.value
        });
    }

    handleDireccionChange(event) {
        this.setState({
            direccion: event.target.value
        });
    }

    handleRolChange(event) {
        console.log(event.target.value);
        this.setState({
            rol: event.target.value
        });
    }

    handleIdProveedorChange(event) {
        this.setState({
            idProveedor: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        alert('nuevo usuario');
        fetch('/api/usuario', {
            method: 'POST',
            headers : { "Content-Type" : "application/json; charset=utf-8"},
            body: JSON.stringify({
                clave: this.state.clave,
                email: this.state.email,
                nombreUsuario: this.state.nombreUsuario,
                apellidoUsuario: this.state.apellidoUsuario,
                fechaNacimiento: this.state.fechaNacimiento,
                telefono: this.state.telefono,
                fecCreado:this.state.fecCreado,
                fecModif: this.state.fecModif,
                rol:this.state.rol,
                direccion: this.state.direccion,
                idProveedor:this.state.idProveedor
            })
        }).then(res => res.json()).then((data) =>{

            this.setState({
                redirect: true
            });

        }).catch((err) => {
            alert(err);
            alert('Ocurrio un error');
        });
    }

    componentDidMount() {       
        //alert(`/api/usuario/${this.props.id}`);
        //fetch(`/api/usuario/${this.props.id}`)
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
                    usuario: data.usuario,
                    loading: false,
                  error: false,
            });
        });
    }

    render() {        
        const usuario  = this.state.usuario;
        console.log(usuario)
        if (this.state.loading) {
            return <div>
                Cargando Usuario Detalle...</div>
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
                          onChange={this.handleFecNacChange}/>
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
