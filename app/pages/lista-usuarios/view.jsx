const React = require('react');
const { Route } = require('react-router-dom');
const Usuario = require('../../components/nuevousuario/Usuario');
const UsuarioDetalle = require('../../components/nuevousuario/UsuarioDetalle');
const ListaUsuarios = require('../../components/lista-usuarios');

console.log('ListaUsuariosPage-view');

class ListaUsuariosPage extends React.Component {
    render() {
        const { usuarios } = this.props.initialState;       
        return (
            <React.Fragment>          
                <Route
                    path="/to-do-list/task/:id"
                    render={(props) => <UsuarioDetalle {...props} id={props.match.params.id}/>}
                />  
                 <Route
                    exact
                    path="/lista-usuarios"
                    render={(props) => <ListaUsuarios {...props} usuarios={usuarios}/>}
                />    
                 <Route
                    exact
                    path="/lista-usuarios/updUsuario"
                    render={(props) => <ListaUsuarios {...props} usuarios={usuarios}/>}
                />
                   <Route
                    exact
                    path="/lista-usuarios/nuevousuario"
                    render={(props) => <Usuario {...props} usuarios={usuarios}/>}
                />
            </React.Fragment>
        );
    }
};

module.exports = ListaUsuariosPage;
