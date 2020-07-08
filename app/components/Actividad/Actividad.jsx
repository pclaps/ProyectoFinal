const React = require('react');
const {Link} = require ('react-router-dom');

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