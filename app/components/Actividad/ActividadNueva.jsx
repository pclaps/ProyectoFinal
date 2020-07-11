const React = require('react');
const {Link} = require ('react-router-dom');
const { Redirect } = require ('react-router-dom');
const { Button,Form, Segment } = require ('semantic-ui-react');


///FORMULARIO DE NUEVA ACTIVIDAD

class ActividadNueva extends React.Component {

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
        this.handleDescripcionChange = this.handleDescripcionChange.bind(this);
        this.handleTipoActividadChange = this.handleTipoActividadChange.bind(this);
        this.handleCuposTotalesChange = this.handleCuposTotalesChange.bind(this);
        this.handleImagenChange = this.handleImagenChange.bind(this);
        this.handleIdUsuarioRespChange = this.handleIdUsuarioRespChange.bind(this);
        this.handleIdProveedorChange = this.handleIdProveedorChange.bind(this);       
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleDescripcionChange(event) {
        this.setState({
            descripcion: event.target.value
        });
    }
    handleTipoActividadChange(event) {
        this.setState({
            tipoActividad: event.target.value
        });
    }

    handleCuposTotalesChange(event) {
        this.setState({
            cuposTotales: event.target.value
        });
    }

    handleImagenChange(event) {
        this.setState({
            imagen: event.target.value
        });
    }
    
    handleIdUsuarioChange(event) {
        this.setState({
            idUsuarioResp: event.target.value
        });
    }

    handleIdUsuarioRespChange(event) {
        this.setState({
            idUsuarioResp: event.target.value
        });
    }

    handleIdProveedorChange(event) {
        this.setState({
            idProveedor: event.target.value
        });
    }


    handleSubmit(event) {
        event.preventDefault();
        alert('nuevo actividad');
        fetch('/api/actividad', {
            method: 'POST',
            headers : { "Content-Type" : "application/json; charset=utf-8"},
            body: JSON.stringify({
                descripcion:this.state.descripcion,
                tipoActividad:this.state.tipoActividad,
                cuposTotales:this.state.cuposTotales,
                imagen:this.state.imagen,
                idUsuarioResp:this.state.idUsuarioResp,
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
            return <Redirect to="/lista-actividades" />
        }
        return (
            <div>
               
                <Segment inverted textAlign="center">Registro de Actividades</Segment>
                <Link to={`/lista-actividades/`}>Ir al listado</Link>               
                <Form onSubmit={this.handleSubmit} className="flex-container2">     
                    <Form.Field>                                                                     
                          <label>Descripcion</label>
                          <input placeholder='descripcion' 
                          value={this.state.descripcion} 
                          onChange={this.handleDescripcionChange}/>
                    </Form.Field>  
                    <Form.Field>
                          <label>Tipo de Actividad</label>
                          <input placeholder='tipoActividad' 
                          value={this.state.tipoActividad} 
                          onChange={this.handleTipoActividadChange}/>
                    </Form.Field>  
                    <Form.Field>
                          <label>Cupos Totales</label>
                          <input placeholder='cuposTotales' 
                          value={this.state.apellidoUsuario} 
                          onChange={this.handleApellidoChange}/>
                    </Form.Field>  
                    <Form.Field>
                          <label>Imagen</label>
                          <input placeholder='imagen' 
                          value={this.state.imagen} 
                          onChange={this.handleImagenChange}/>
                    </Form.Field>  
                    <Form.Field>
                          <label>idUsuarioResp</label>
                          <input placeholder='idUsuarioResp' 
                          value={this.state.idUsuarioResp} 
                          onChange={this.handleidUsuarioRespChange}/>
                    </Form.Field>                   
                    <Form.Field>
                          <label>Proveedor</label>
                          <input placeholder='idProveedor' 
                          value={this.state.idProveedor} 
                          onChange={this.handleIdProveedorChange}/>
                    </Form.Field>   
                    <Form.Button primary >Crear ACTIVIDAD</Form.Button>                   
                </Form>
            </div>
        );
    }
};

module.exports = ActividadNueva;
