const React = require('react');
const {Link} = require ('react-router-dom');

console.log(' Componente Actividad');
// <Link to={`/lista-usuarios/usuario/${this.props.idUsuario}`}>Ir al Usuario</Link>
class Actividad extends React.Component {
  render() {
    return (
      <li>
        <h1> {this.props.idActividad}</h1>
        <h2> {this.props.descripcion}</h2>
        <p>{this.props.cuposTotales}</p>       
      </li>
    );
  }
};

module.exports = Actividad;