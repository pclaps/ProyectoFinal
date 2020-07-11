const React = require('react');
const {Link} = require ('react-router-dom');
const {List,Button,Table,Icon} = require('semantic-ui-react');


class Actividad extends React.Component {
  render() {
    return (
      <div>
        <Table.Row>
       <Table.Cell>{this.props.idActividad}</Table.Cell>
       <Table.Cell>{this.props.descripcion}</Table.Cell>
       <Table.Cell>{this.props.tipoActividad}</Table.Cell>
       <Table.Cell>{this.props.cupos}</Table.Cell>     
       <Table.Cell>{this.props.imagen}</Table.Cell>     
       <Table.Cell>{this.props.idProveedor}</Table.Cell> 
       <Table.Cell>
       <Button
            floated='right'
            icon
            labelPosition='left'
            primary
            size='small'
          >
            <Icon name='user' /> Add User 
            </Button> 
       </Table.Cell> 
       <Table.Cell>
        <Button color="google plus">Seleccionar</Button>
       </Table.Cell>      
       <Table.Cell>
               <a href= {`/lista-proveedores/proveedor/${this.props.idProveedor}`}>Ir a Proveedor</a>                                                    
       </Table.Cell>   
       <Table.Cell><a href= {`/lista-actividades/porproveedor/${this.props.idProveedor}`}>Seleccionar Actividades</a></Table.Cell>                       
       </Table.Row>
   </div>
    
    );
  }
};

module.exports = Actividad;