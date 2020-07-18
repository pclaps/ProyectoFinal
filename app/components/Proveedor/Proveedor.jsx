const React = require('react');
const {Link} = require ('react-router-dom');
const {List,Button,Table} = require('semantic-ui-react');

class Proveedor extends React.Component {
  render() {
    return (
      <React.Fragment>
       <Table.Cell>{this.props.idProveedor}</Table.Cell>
       <Table.Cell>{this.props.descripcion}</Table.Cell>
       <Table.Cell>{this.props.direccion}</Table.Cell>
       <Table.Cell>
          <Button color='green' inverted onClick={()=>this.props.onDeleteProveedor(this.props.idProveedor)}>Borrar</Button></Table.Cell>
       <Table.Cell>
           <Button color='red' inverted as={Link} to={`/lista-proveedores/proveedor/${this.props.idProveedor}`}>Modificar</Button>                        
       </Table.Cell>   
       <Table.Cell>
       <a href= {`/lista-actividades/porproveedor/${this.props.idProveedor}`}>Seleccionar Actividades</a> 
       <Button color='teal'  as={Link} to={`/lista-actividades/porproveedor/${this.props.idProveedor}`}>Elegir Actividad</Button>                          
       </Table.Cell>
      </React.Fragment>
    );
  }
};

module.exports = Proveedor;
