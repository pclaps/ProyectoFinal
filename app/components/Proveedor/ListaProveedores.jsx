const React = require('react');
const {Link} = require ('react-router-dom');
const Proveedor = require('./Proveedor');
const {Segment,List,Icon,Button,Label,Divider, Container,Table,Grid,Step} = require('semantic-ui-react');

class ListaProveedores extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            proveedores: null,
            loading: true,
            error: false,
        };
        this.onDeleteProveedor = this.onDeleteProveedor.bind(this);
        this.onRefresh = this.onRefresh.bind(this);
    }
    onDeleteProveedor(idProveedor){
        console.log("borrar usuario", idProveedor);
        // Despues que se legue al eliminar y todo este ok

        fetch(`/api/proveedor/${idProveedor}`, {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
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
          })
          .then(response => response.json())
          .then(data => {
            console.log('response', data);
            //refresco la lista , trayendo nuevamente los datos
            this.onRefresh();
          });
    }

    onRefresh() {
       // console.log('onRefresh');
        fetch(`/api/proveedor/`)
        .then(res => res.json()).then((data) =>{
            this.setState({
                proveedores: data.listProvs,
                loading: false,
                error: false,
            });
        });
    }

    componentDidMount() {
       this.onRefresh();
    }

    render() {        
        const proveedores  = this.state.proveedores;
        if (this.state.loading) {
            return <div>                 
                 Cargando Proveedores ...
                 <Icon loading name='spinner' size="huge" /></div>
        }
        return (
            <div>
                <Segment inverted textAlign="center" size='big'>Listado de Proveedores</Segment>                  
                    <div >   
                    <Button as={Link} to="/lista-proveedores/nuevoproveedor" floated='right' icon labelPosition='left' primary size='medium'>
                        <Icon name='plus circle' /> Nuevo Proveedor
                    </Button>                                                                                                                
                    </div>
                    <Table singleLine>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Proveedor</Table.HeaderCell>
                                <Table.HeaderCell>Descripción</Table.HeaderCell>
                                <Table.HeaderCell>Dirección</Table.HeaderCell>
                                <Table.HeaderCell>Borrar</Table.HeaderCell>
                                <Table.HeaderCell>Modificar</Table.HeaderCell>
                                <Table.HeaderCell>Elegir Actividad</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                        {
                            proveedores.map(proveedor => (
                            <Table.Row>
                                <Proveedor key={proveedor.idProveedor}
                                        idProveedor={proveedor.idProveedor} 
                                        descripcion ={proveedor.descripcion} 
                                        direccion={proveedor.direccion}
                                        onDeleteProveedor={this.onDeleteProveedor} />                                                     
                            </Table.Row>))    
                         }
                        </Table.Body>
                   </Table> 
                   <Grid size='huge'   style={{ maxWidth: 600 }}>
          <Step.Group >
                <Step disabled>
                <Icon name='user' />
                <Step.Content>
                    <Step.Title>Registro</Step.Title>
                    <Step.Description>de usuario</Step.Description>
                </Step.Content>
                </Step>

                <Step active>
                <Icon name='industry' />
                <Step.Content>
                    <Step.Title>Seleccione</Step.Title>
                    <Step.Description>su proveedor</Step.Description>
                </Step.Content>
                </Step>

                <Step disabled>
                <Icon name='sort' />
                <Step.Content>
                <Step.Title>Seleccione</Step.Title>
                    <Step.Description>su actividad</Step.Description>
                </Step.Content>
                </Step>

                <Step disabled>
                <Icon name='calendar' />
                <Step.Content>
                <Step.Title>Confirme</Step.Title>
                    <Step.Description>fecha</Step.Description>
                </Step.Content>
                </Step>
            </Step.Group>
          </Grid>                       
            </div>
        );
    }
};
module.exports = ListaProveedores;
