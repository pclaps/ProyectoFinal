const React = require('react');
const {Link} = require ('react-router-dom');
const {List,Button} = require('semantic-ui-react');


class Usuario extends React.Component {
  /*  constructor(props) {
        super(props);
        this.state = {
            usuarios: null,
            loading: true,
            error: false,
        };
        this.handleDelete = this.handleDelete.bind(this);
    }

  handleDelete(event) {   
    alert('deletehandle');
    console.log(`/api/usuario/${this.props.idUsuario}`)
    fetch(`/api/usuario/${this.props.idUsuario}`, {
        method: 'DELETE'
    })
     .catch(err => console.error(err))
     .then(() => {
        alert('borro usuario');
     })
  };
*/
  render() {
 
    return (
      <div>
      
      <List>
        <List.Item>
         <List.Icon circular name='user' size="small" />
         <List.Content>{this.props.nombreUsuario}</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='mail' />
           <List.Content>
             <a href='mailto:'>{this.props.email}</a>
          </List.Content>
         </List.Item>
         <List.Item>
            <List.Icon name='id card outline' size="small" />
            <List.Content>{this.props.idUsuario}</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='linkify' />
          <List.Content>
              <a href= {`/lista-usuarios/usuario/${this.props.idUsuario}`}>Ir a Usuario</a>
          </List.Content>
        </List.Item>                
        <Button color='red' onClick={()=>this.props.onDeleteUsuario(this.props.idUsuario)}>Borrar</Button>
        <Button as={Link} to= {`/lista-usuarios/usuario/${this.props.idUsuario}`}>Modificar </Button>
    </List>
       
      </div>
     
    );
  }
};

module.exports = Usuario;
//<Button  as={Link} to= {`/api/usuario/delete/${this.props.idUsuario}`}>Borrar </Button>
/*<li>
<h2> {this.props.idUsuario}</h2>
        <h2> {this.props.nombreUsuario}</h2>
        <Link to={`/lista-usuarios/usuario/${this.props.idUsuario}`}>Ir al Usuario</Link>
        <p>{this.props.email}</p>       
      </li>*/

      /**
       *   <div>
          <Table.Cell>
              {this.props.idUsuario} 
          </Table.Cell>    
          <Table.Cell>
              {this.props.nombreUsuario} 
          </Table.Cell> 
          <Table.Cell>
              {this.props.contrasena} 
          </Table.Cell> 
          <Table.Cell>
              {this.props.correo}          
          </Table.Cell>
          <Table.Cell>
              <Button primary as={Link} to={`/detalleUsuario/${this.props.idUsuario}`}>Detalle</Button>
              <Button color='red' onClick={()=>this.props.onDeleteUsuario(this.props.idUsuario)}>Borrar</Button>
          </Table.Cell>
      </div>
       * 
       */