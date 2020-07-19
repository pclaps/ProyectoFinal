const React = require('react');
const HorarioActividad = require('./HorarioActividad');
const {Link} = require ('react-router-dom');
const {Segment,List,Icon,Button,Label,Divider, Container, Table} = require('semantic-ui-react');

class ListaHorarioActividad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            horarios: null,
            loading: true,
            error: false,
        };

        this.onAgendarHorario = this.onAgendarHorario.bind(this);
    }
    //Para agendar horario
    onAgendarHorario(idHorarioActividad){
       
        console.log('hora: '+idHorarioActividad);
       
        fetch(`/api/actividadagendada/`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
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
            body: JSON.stringify({

                idHorarioActividad : idHorarioActividad                     
            })
          })
          .then(response => response.json())
          .then(data => {
            console.log('response', data);
            //refresco la lista , trayendo nuevamente los datos
            //this.onRefresh();
          });
    }

    componentDidMount() { 
        alert('lista HorAct'+this.props.idActividad)  ;     
        const url= this.props.idActividad ?`/api/horarioactividad?idActividad=${this.props.idActividad}`:`/api/horarioactividad`;         
        fetch(url)
            .then(res => res.json()).then((data) =>{              
            this.setState({
                horarios: data.listHorarioActividad,
                loading: false,
                error: false,
            });
            })
            .catch((err) => {
                console.error('fallo fetch');
                this.setState({
                    horarios: null,
                    loading: false,
                    error: true,
                });
            });
    }

    render() {        
        const horarios  = this.state.horarios;        
        if (this.state.loading) {
            return <div>Cargando Horario ...</div>
        }
        return (
            <div>
                <Segment inverted textAlign="center">Seleccionar Horario</Segment>                  
                    <div >                                                
                        <Button color='green' inverted  as={Link} to="/lista-horarioactividad">Lista Horarios</Button>
                        <Button as={Link} to="/lista-horarioactividad/nuevohorario" floated='right' icon labelPosition='left' primary size='medium'>
                             <Icon name='plus circle' /> Nueva Horario
                        </Button> 
                                       
                    </div>
                   
                    <Table celled selectable>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>idHorarioActividad</Table.HeaderCell>
                                <Table.HeaderCell>Día</Table.HeaderCell>
                                <Table.HeaderCell>Hora</Table.HeaderCell>
                                <Table.HeaderCell>Mes</Table.HeaderCell>
                                <Table.HeaderCell>id Local</Table.HeaderCell>                                
                                <Table.HeaderCell>Id Actividad</Table.HeaderCell>                                
                                <Table.HeaderCell>Agendar</Table.HeaderCell>  
                                <Table.HeaderCell>Ir A</Table.HeaderCell>  
                            </Table.Row>
                        </Table.Header>
                  <Table.Body>
                  {
                    horarios.map(horario => (
                     <Table.Row>                   
                        <HorarioActividad key={horario.idHorarioActividad} 
                        idHorarioActividad={horario.idHorarioActividad} 
                        dia={horario.dia}
                        hora ={horario.hora}  
                        mes={horario.mes}
                        idLocal={horario.idLocal}
                        idActividad={horario.idActividad}
                        onAgendarHorario={this.onAgendarHorario}
                            />                            
                    </Table.Row>  ))
                  }
                   </Table.Body>
                </Table>
            </div>      
        );
    }
};
module.exports = ListaHorarioActividad;
