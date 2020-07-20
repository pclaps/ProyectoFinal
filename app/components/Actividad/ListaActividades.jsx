const React = require('react');
const Actividad = require('./Actividad');
const {Link} = require ('react-router-dom');
const {Segment,List,Icon,Button,Label,Divider, Container, Table,Step,Grid} = require('semantic-ui-react');



class ListaActividades extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            actividades: null,
            loading: true,
            error: false,
        };
        this.onDeleteActividad = this.onDeleteActividad.bind(this);
    }

    onDeleteActividad(idActividad){
        console.log("borrar usuario", idActividad);
        // Despues que se legue al eliminar y todo este ok

        fetch(`/api/actividad/${idActividad}`, {
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
    componentDidMount() {        
        const url= this.props.idProveedor ?`/api/actividad?idProveedor=${this.props.idProveedor}`:`/api/actividad`;        
        //console.log(url);
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
                        <Button color='blue' inverted  as={Link} to="/lista-actividades">Lista Actividades</Button>
                        <Button as={Link} to="/lista-actividades/nuevaactividad" floated='right' icon labelPosition='left' primary size='medium'>
                             <Icon name='plus circle' /> Nueva Actividad
                        </Button> 
                                       
                    </div>
                   
                    <Table celled selectable>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>idActividad</Table.HeaderCell>
                                <Table.HeaderCell>Descripcion</Table.HeaderCell>
                                <Table.HeaderCell>Tipo Actividad</Table.HeaderCell>
                                <Table.HeaderCell>Cupos</Table.HeaderCell>
                                <Table.HeaderCell>Imagen</Table.HeaderCell>                                
                                <Table.HeaderCell>Id Proveedor</Table.HeaderCell>   
                                <Table.HeaderCell>Horarios</Table.HeaderCell>                              
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
                        cupos={actividad.cuposTotales}
                        idProveedor={actividad.idProveedor}
                        onDeleteActividad ={this.onDeleteActividad}
                        />                            
                    </Table.Row>  ))
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

                <Step disabled>
                <Icon name='industry' />
                <Step.Content>
                    <Step.Title>Seleccione</Step.Title>
                    <Step.Description>su proveedor</Step.Description>
                </Step.Content>
                </Step>

                <Step active >
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
module.exports = ListaActividades;
