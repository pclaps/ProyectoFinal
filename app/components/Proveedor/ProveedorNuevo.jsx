const React = require('react');
const {Link} = require ('react-router-dom');
const { Redirect } = require ('react-router-dom');
const { Button,Form, Segment } = require ('semantic-ui-react');


///FORMULARIO DE NUEVO PROVEEDOR
class ProveedorNuevo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            descripcion:'',
            direccion:'',
            idProveedor:'',             
            redirect: null
        };
        //Defino Handlers
        this.handleDescripcionChange = this.handleDescripcionChange.bind(this);       
        this.handleDireccionChange = this.handleDireccionChange.bind(this);       
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleDescripcionChange(event) {
        this.setState({
            descripcion: event.target.value
        });
    }

    handleDireccionChange(event) {
        this.setState({
            direccion: event.target.value
        });
    }

    

    handleSubmit(event) {
        event.preventDefault();
        alert('nuevo proveedor');
        fetch('/api/proveedor', {
            method: 'POST',
            headers : { "Content-Type" : "application/json; charset=utf-8"},
            body: JSON.stringify({
                descripcion : this.state.descripcion,
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
            return <Redirect to="/lista-proveedores" />
        }
        return (
            <div>               
                <Segment inverted textAlign="center">Registro de Proveedores</Segment>
                <Link to={`/lista-proveedores/`}>Ir al listado</Link>               
                <Form onSubmit={this.handleSubmit} className="flex-container2"> 
                 
                    <Form.Field>
                          <label>Descripcion</label>
                          <input placeholder='Descripcion' 
                          value={this.state.descripcion} 
                          onChange={this.handleDescripcionChange}/>
                    </Form.Field>  
                                   
                    <Form.Field>
                          <label>Direccion</label>
                          <input placeholder='direccion' 
                          value={this.state.direccion} 
                          onChange={this.handleDireccionChange}/>
                    </Form.Field>   
                   
                    <Form.Button primary >Crear Proveedor</Form.Button>                   
                </Form>
            </div>
        );
    }
};

module.exports = ProveedorNuevo;
