const React = require('react');
const HorarioActividad = require('./HorarioActividad');
const {Link} = require ('react-router-dom');
const {Segment,List,Icon,Button,Label,Divider, Container, Table} = require('semantic-ui-react');



//completarr
class ListaHorarioActividad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            horarios: null,
            loading: true,
            error: false,
        };
    }
    //Para elegir horario
    onElegirHorario(idUsuario){
        console.log('Actividad Agendada');
    }

    componentDidMount() { 
        alert('lista'+this.props.idActividad)  ;     
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
                        idActividad={horario.idActividad}/>                            
                    </Table.Row>  ))
                  }
                   </Table.Body>
                </Table>
            </div>      
        );
    }
};
module.exports = ListaHorarioActividad;
