const React = require('react');
//const Proveedor = require('../Proveedor/Proveedor');
const {Link} = require ('react-router-dom');

console.log(' componente ListaProveedores');

class UsuarioDetalle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarios: null,
            loading: true,
            error: false,
        };
    }

    componentDidMount() {
        fetch(`/api/usuario/${this.props.id}`)
            .then(res => res.json()).then((data) =>{
                console.log("fetch ListaUsuarios: ");
            this.setState({
                usuario: data.usuario,
                loading: false,
                error: false,
            });
            })
            .catch((err) => {
                console.error('fallo fetch');
                this.setState({
                    usuario: null,
                    loading: false,
                    error: true,
                });
            });
    }

    
    handleSubmit(event) {
        event.preventDefault();
        alert('upd usuario');
        fetch(`/api/usuario/${this.props.id}`, {
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

    render() {
        const usuario  = this.state.usuario;
        if (this.state.loading) {
            return <div>Cargando Usuario ...</div>
        }
        return (
            <div>
               
               <Segment inverted textAlign="center">Detalle de Usuario</Segment>
               <Link to={`/lista-usuarios/`}>Ir al listado</Link>               
               <Link to={`/lista-usuarios/`}>Ir al listado de Usuarios</Link>       
               <Form onSubmit={this.handleSubmit} className="flex-container2">     
                   <Form.Field required>
                         <label>Correo electrónico</label>                          
                         <input placeholder='Email' 
                         value={this.state.email} 
                         onChange={this.handleEmailChange}
                         error={{
                           content: 'Please enter a valid email address',
                           pointing: 'below',
                         }}/>                     
                   </Form.Field>  
                   <Form.Field required>
                          <label>Contraseña</label>                          
                          <input placeholder='Contraseña' 
                          value={this.state.clave} 
                          onChange={this.handleClaveChange}
                         />
                    </Form.Field>  
                    <Form.Field required>
                          <label>Nombre</label>
                          <input placeholder='Nombre' 
                          value={this.state.nombreUsuario} 
                          onChange={this.handleNombreChange}/>
                    </Form.Field>  
                    <Form.Field required>
                          <label>Apellido</label>
                          <input placeholder='Apellido' 
                          value={this.state.apellidoUsuario} 
                          onChange={this.handleApellidoChange}/>
                    </Form.Field>  
                    <Form.Field required>
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
                </Form>
            </div>

        );
    }
};
module.exports = UsuarioDetalle;
