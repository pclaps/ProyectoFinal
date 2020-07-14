const React = require('react');
const {Link} = require ('react-router-dom');
const {List,Button,Table,Icon} = require('semantic-ui-react');


class HorarioActividad extends React.Component {
  render() {
    return (
      <React.Fragment>   
          <Table.Cell>{this.props.idActividad}</Table.Cell>
          <Table.Cell>{this.props.descripcion}</Table.Cell>
          <Table.Cell>{this.props.tipoActividad}</Table.Cell>
          <Table.Cell>{this.props.cupos}</Table.Cell>     
          <Table.Cell>{this.props.imagen}</Table.Cell>     
          <Table.Cell>{this.props.idProveedor}</Table.Cell> 
          <Table.Cell>
            <Button color='green' inverted>Seleccionar</Button>
          </Table.Cell>      
          <Table.Cell>
                  <a href= {`/lista-proveedores/proveedor/${this.props.idProveedor}`}>Ir a Proveedor</a>                                                    
          </Table.Cell>   
          <Table.Cell><a href= {`/lista-actividades/porproveedor/${this.props.idActividad}`}>Seleccionar Actividades</a></Table.Cell>                          
   </React.Fragment>
    
    );
  }
};

module.exports = HorarioActividad;