const React = require('react');
const {Link} = require ('react-router-dom');

console.log(' Componente Usuario');
// <Link to={`/lista-usuarios/usuario/${this.props.idUsuario}`}>Ir al Usuario</Link>
class Usuario extends React.Component {
  render() {
    return (
      <li>
        <h2> {this.props.idUsuario}</h2>
        <h2> {this.props.nombreUsuario}</h2>
        <p>{this.props.email}</p>       
      </li>
    );
  }
};

module.exports = Usuario;