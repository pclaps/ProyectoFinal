const React = require('react');
const {Link} = require ('react-router-dom');
const {List,Button} = require('semantic-ui-react');

class Usuario extends React.Component {
 
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
        <Button color='red' inverted onClick={()=>this.props.onDeleteUsuario(this.props.idUsuario)}>Borrar</Button>
        <Button as={Link} color='teal' to= {`/lista-usuarios/usuario/${this.props.idUsuario}`}>Modificar </Button>
    </List>
       
      </div>
     
    );
  }
};

module.exports = Usuario;
