const React = require('react');
const Usuario = require('../nuevousuario');
const {Link} = require ('react-router-dom');

console.log(' componente listaUsuario');

class ListaUsuario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarios: null,
            loading: true,
            error: false,
        };
    }

    componentDidMount() {
        fetch(`/api/usuario/`)
            .then(res => res.json()).then((data) =>{
                console.log("Comp ListaUsuario: "+data);
            this.setState({
                usuarios: data.usuarios,
                loading: false,
                error: false,
            });
        })
            .catch((err) => {
                console.error(err);
                this.setState({
                    usuarios: null,
                    loading: false,
                    error: true,
                });
            });
    }

    render() {
        const usuarios  = this.state.usuarios;
        if (this.state.loading) {
            return <div>Cargando Usuarios ...</div>
        }
        return (
            <div>
                <h1>Listado de Usuarios</h1>
                <div className="flex-container"> 
                                               
                    <Link to={`/lista-usuarios/nuevousuario`}>Crear nuevo Usuario</Link>      
                </div>
                
                <ul >
                    {
                        usuarios.map(usuario => (
                            <h1> {usuario.idUsuario} </h1> 
                        ))
                    }
                </ul>
            </div>
        );
    }
};
// <Usuario key={usuario.idUsuario} idUsuario={usuario.idUsuario} nombreUsuario={usuario.nombreUsuario}/>
module.exports = ListaUsuario;
