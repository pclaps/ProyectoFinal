const React = require('react');
const {Link} = require ('react-router-dom');

console.log(' Componente Actividad');

class Proveedor extends React.Component {
  render() {
    return (
      <li>
        <h1> {this.props.idProveedor}</h1>
        <Link to={`/lista-proveedores/proveedor/${this.props.idProveedor}`}>Ir al Proveedor</Link>
        <h2> {this.props.descripcion}</h2>
        <p>{this.props.direccion}</p>       
      </li>
    );
  }
};

module.exports = Proveedor;