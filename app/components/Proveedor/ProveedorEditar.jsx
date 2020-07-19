const React = require('react');
const {Link,Redirect} = require ('react-router-dom');
const { Button,Form, Segment,Dropdown,DropdownMenu } = require ('semantic-ui-react');

class ProveedorEditar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            proveedor: {
                idProveedor: null,
                descripcion: '',
                direccion: '',     
            },        
            redirect : false,
            loading: true,
            error: false,
        };
        this.handleDescripcionChange = this.handleDescripcionChange.bind(this);
        this.handleDireccionChange = this.handleDireccionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleDescripcionChange(event) {
        
        this.setState({
            proveedor: {
                ...this.state.proveedor,
            descripcion : event.target.value
            }
        });
    }
   
    handleDireccionChange(event) {
        this.setState({
            proveedor: {
                ...this.state.proveedor,
            direccion : event.target.value
            }
        });
    }

    
    handleSubmit(event) {
        event.preventDefault();      
        //console.log(`/api/proveedor/${this.state.proveedor.idProveedor}`)
        fetch(`/api/proveedor/${this.state.proveedor.idProveedor}`, {
            method: 'PUT',
            headers : { "Content-Type" : "application/json; charset=utf-8"},
            body: JSON.stringify({                
                idProveedor:this.state.proveedor.idProveedor,
                descripcion: this.state.proveedor.descripcion,
                direccion: this.state.proveedor.direccion,                
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
        alert(this.state.proveedor.idProveedor)          ;
        fetch(`/api/proveedor/${this.props.id}`, {
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
                    proveedor: {
                        ...data.proveedor
                    },
                    loading: false,
                  error: false,
            });
        });
    }

    render() {        
        const proveedor  = this.state.proveedor;
        if (this.state.redirect) {
            return <Redirect to="lista-proveedores/" />
        }
        return (
            <div>               
                <Segment inverted textAlign="center">Modificar Proveedor</Segment>               
                <Link to={`/lista-proveedores/`}>Ir al listado de Proveedores</Link>       
                <Form onSubmit={this.handleSubmit} className="flex-container2">                      
                    <Form.Field>
                          <label>Descripcion</label>
                          <input placeholder='Descripcion' 
                          value={this.state.proveedor.descripcion} 
                          onChange={this.handleDescripcionChange}/>
                    </Form.Field>                             
                    <Form.Field>
                          <label>Direccion</label>
                          <input placeholder='direccion' 
                          value={this.state.proveedor.direccion} 
                          onChange={this.handleDireccionChange}/>
                    </Form.Field>   
                    <Form.Button primary >Modificar Proveedor</Form.Button>                      
                </Form>
            </div>
        );
    }
};
module.exports = ProveedorEditar;
