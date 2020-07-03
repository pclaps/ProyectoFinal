const React = require('react');
const Usuario = require('../Usuario');
const {Link} = require ('react-router-dom');
const {Segment} = require('semantic-ui-react');

console.log(' componente listaUsuario');
//        <h1>Listado de Usuarios</h1>
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
                console.log("Comp ListaUsuario: ");
            this.setState({
                usuarios: data.listUsuarios,
                loading: false,
                error: false,
            });
            })
            .catch((err) => {
                console.error('fallo fetch');
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
                <Segment inverted textAlign="center">Listado de Usuarios</Segment>
        
                <div > 
                                               
                    <Link to={`/lista-usuarios/nuevousuario`}>Crear nuevo Usuario</Link>      
                </div>
                <ul>
                    {
                        usuarios.map(usuario => (
                            <Usuario key={usuario.idUsuario} idUsuario={usuario.idUsuario} nombreUsuario ={usuario.nombreUsuario} email={usuario.email} />
                        ))
                    }
                </ul>
            </div>

        );
    }
};
// <Usuario key={usuario.idUsuario} idUsuario={usuario.idUsuario} nombreUsuario={usuario.nombreUsuario}/>
module.exports = ListaUsuario;
