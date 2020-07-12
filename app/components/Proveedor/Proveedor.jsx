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
       <Table.Cell><Button color='red' onClick={()=>this.props.onDeleteProveedor(this.props.idProveedor)}>Borrar</Button></Table.Cell>
       <Table.Cell>
                         <a href= {`/lista-proveedores/proveedor/${this.props.idProveedor}`}>Ir a Proveedor</a>                                                    
       </Table.Cell>   
       <Table.Cell><a href= {`/lista-actividades/porproveedor/${this.props.idProveedor}`}>Seleccionar Actividades</a></Table.Cell>                 
      </React.Fragment>
    );
  }
};

module.exports = Proveedor;
/*
         <List>
        <List.Item>
         <List.Icon circular name='user' size="small" />
         <List.Content>{this.props.idProveedor}</List.Content>
        </List.Item>        
         <List.Item>
            <List.Icon name='id card outline' size="small" />
            <List.Content>{this.props.descripcion}</List.Content>
        </List.Item>
        <List.Item>
            <List.Icon name='id card outline' size="small" />
            <List.Content>{this.props.direccion}</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='linkify' />
          <List.Content>
              <a href= {`/lista-proveedores/proveedor/${this.props.idProveedor}`}>Ir a Proveedor</a>
              <a href= {`/lista-actividades/porproveedor/${this.props.idProveedor}`}>Seleccionar Actividades</a>
          </List.Content>
        </List.Item>                
        <Button color='red' onClick={()=>this.props.onDeleteProveedor(this.props.idProveedor)}>Borrar</Button>
        <Button as={Link} to= {`/lista-proveedores/proveedor/${this.props.idProveedor}`}>Modificar </Button>
        <Button color='orange' as={Link} to= {`/lista-actividades/porproveedor/${this.props.idProveedor}`}>Actividades </Button>
        
    </List>*/