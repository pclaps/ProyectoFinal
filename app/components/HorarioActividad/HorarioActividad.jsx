const React = require('react');
const {Link} = require ('react-router-dom');
const {List,Button,Table,Icon, Checkbox} = require('semantic-ui-react');


class HorarioActividad extends React.Component {
  render() {
    return (
      <React.Fragment>   
          <Table.Cell>{this.props.idHorarioActividad}</Table.Cell>
          <Table.Cell>{this.props.dia}</Table.Cell>
          <Table.Cell>{this.props.hora}</Table.Cell>
          <Table.Cell>{this.props.mes}</Table.Cell>     
          <Table.Cell>{this.props.idLocal}</Table.Cell>     
          <Table.Cell>{this.props.idActividad}</Table.Cell>                     
          <Table.Cell>            
            <Button color='green' inverted onClick={ ()=>this.props.onAgendarHorario(this.props.idHorarioActividad)}>Agendar</Button>            
          </Table.Cell>      
          <Table.Cell>
                  <a href= {`/lista-horarioactividad/actividad/${this.props.idActividad}`}>Ir a Actividad</a>                                                    
          </Table.Cell>            
   </React.Fragment>
    
    );
  }
};

module.exports = HorarioActividad;