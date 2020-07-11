const React = require('react');
const Actividad = require('./Actividad');
const {Link} = require ('react-router-dom');
const {Segment,List,Icon,Button,Label,Divider, Container, Table} = require('semantic-ui-react');



class ListaActividades extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            actividades: null,
            loading: true,
            error: false,
        };
    }

    componentDidMount() {        
        const url= this.props.idProveedor ?`/api/actividad?idProveedor=${this.props.idProveedor}`:`/api/actividad`;        
        console.log(url);
        fetch(url)
            .then(res => res.json()).then((data) =>{              
            this.setState({
                actividades: data.listActividades,
                loading: false,
                error: false,
            });
            })
            .catch((err) => {
                console.error('fallo fetch');
                this.setState({
                    actividades: null,
                    loading: false,
                    error: true,
                });
            });
    }

    render() {        
        const actividades  = this.state.actividades;        
        if (this.state.loading) {
            return <div>Cargando Actividades ...</div>
        }
        return (
            <div>
                <Segment inverted textAlign="center">Seleccionar Actividad</Segment>                  
                    <div >                                                
                        <Link to={`/lista-actividades`}>Ir a Listado</Link> 
                        <Button as={Link} to="/lista-actividades/nuevactividad">
                        Crear Actividad
                        </Button>                      
                    </div>
                   
                    <Table celled selectable>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>idActividada</Table.HeaderCell>
                                <Table.HeaderCell>Descripcion</Table.HeaderCell>
                                <Table.HeaderCell>TipoActividad</Table.HeaderCell>
                                <Table.HeaderCell>Cupos</Table.HeaderCell>
                                <Table.HeaderCell>Imagen</Table.HeaderCell>                                
                                <Table.HeaderCell>Id Proveedor</Table.HeaderCell>                                
                            </Table.Row>
                        </Table.Header>
                  <Table.Body>
                  {
                        actividades.map(actividad => (
                     <Table.Row>                   
                        <Actividad key={actividad.idActividad} 
                        idActividad={actividad.idActividad} 
                        direccion={actividad.direccion}
                        descripcion ={actividad.descripcion}  
                        cupos={actividad.cuposTotales}/>                            
                    </Table.Row>  ))
                    }
                    </Table.Body>
                     </Table>
            </div>      
        );
    }
};
module.exports = ListaActividades;
