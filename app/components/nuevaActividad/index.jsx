const React = require('react');
const {Link} = require ('react-router-dom');
const { Redirect } = require ('react-router-dom');
const { Button,Form, Segment } = require ('semantic-ui-react');


///FORMULARIO DE NUEVA ACTIVIDAD
//CAMBIAR YA QUE TIENE TODO DE USUARIO
class NuevaActividad extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            descripcion:'',
            tipoActividad:'',
            cuposTotales:'',
            imagen:'',
            idUsuarioResp:'',
            idProveedor:'',             
            redirect: null
        };
        //Defino Handlers
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNombreChange = this.handleNombreChange.bind(this);
        this.handleApellidoChange = this.handleApellidoChange.bind(this);
        this.handleFecNacChange = this.handleFecNacChange.bind(this);
        this.handleTelefonoChange = this.handleTelefonoChange.bind(this);
      //  this.handleRolChange = this.handleRolChange.bind(this);
        this.handleDireccionChange = this.handleDireccionChange.bind(this);
        this.handleIdProveedorChange = this.handleIdProveedorChange.bind(this);       
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(event) {
        this.setState({
            email: event.target.value
        });
    }
    handleNombreChange(event) {
        this.setState({
            nombre: event.target.value
        });
    }

    handleApellidoChange(event) {
        this.setState({
            apellido: event.target.value
        });
    }

    handleFecNacChange(event) {
        this.setState({
            fechaNacimiento: event.target.value
        });
    }
    
    handleDireccionChange(event) {
        this.setState({
            direccion: event.target.value
        });
    }

    handleDireccionChange(event) {
        this.setState({
            direccion: event.target.value
        });
    }

    handleRolChange(event) {
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
        fetch('/api/Usuario', {
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
            alert('Ocurrio un error');
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/to-do-list" />
        }
        return (
            <div>
               
                <Segment inverted textAlign="center">Registro de Usuarios</Segment>
                <Link to={`/to-do-list/`}>Ir al listado</Link>               
                <Form onSubmit={this.handleSubmit} className="flex-container2">     
                    <Form.Field>
                          <label>correo electrónico</label>
                          <input placeholder='Email' 
                          value={this.state.email} 
                          onChange={this.handleEmailChange}/>
                    </Form.Field>  
                    <Form.Field>
                          <label>Nombre</label>
                          <input placeholder='Nombre' 
                          value={this.state.nombreUsuario} 
                          onChange={this.handleNombreChange}/>
                    </Form.Field>  
                    <Form.Field>
                          <label>Apellido</label>
                          <input placeholder='Apellido' 
                          value={this.state.apellidoUsuario} 
                          onChange={this.handleApellidoChange}/>
                    </Form.Field>  
                    <Form.Field>
                          <label>Fecha Nacimiento</label>
                          <input placeholder='Fecha Nac' 
                          value={this.state.fechaNacimiento} 
                          onChange={this.handleFecNacChange}/>
                    </Form.Field>  
                    <Form.Field>
                          <label>Celular</label>
                          <input placeholder='Celular' 
                          value={this.state.telefono} 
                          onChange={this.handleTelefonoChange}/>
                    </Form.Field> 
                    <Form.Field>
                          <label>Rol</label>
                          <input placeholder='Rol' 
                          value={this.state.rol} 
                          />
                    </Form.Field>  
                    <Form.Field>
                          <label>Direccion</label>
                          <input placeholder='direccion' 
                          value={this.state.direccion} 
                          onChange={this.handleDireccionChange}/>
                    </Form.Field>   
                    <Form.Field>
                          <label>Proveedor</label>
                          <input placeholder='idProveedor' 
                          value={this.state.idProveedor} 
                          onChange={this.handleIdProveedorChange}/>
                    </Form.Field>   
                    <Form.Button primary >Crear Usuario</Form.Button>                   
                </Form>
            </div>
        );
    }
};

module.exports = NuevaActividad;
