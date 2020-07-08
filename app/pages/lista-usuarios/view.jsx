const React = require('react');
const { Route } = require('react-router-dom');
const UsuarioNuevo = require('../../components/Usuario/UsuarioNuevo');
const UsuarioEditar = require('../../components/Usuario/UsuarioEditar');
const ListaUsuarios = require('../../components/Usuario/ListaUsuarios');


//console.log('ListaUsuariosPage-view');

class ListaUsuariosPage extends React.Component {
    render() {
        const { usuarios } = this.props.initialState;       
        return (
            <React.Fragment>          
                <Route
                    path="/lista-usuarios/usuario/:id"
                    render={(props) => <UsuarioEditar {...props} id={props.match.params.id}/>}
                />  
                 <Route
                    exact
                    path="/lista-usuarios"
                    render={(props) => <ListaUsuarios {...props} usuarios={usuarios}/>}
                />    
                   <Route
                    exact
                    path="/lista-usuarios/nuevousuario"
                    render={(props) => <UsuarioNuevo {...props} usuarios={usuarios}/>}
                />
            </React.Fragment>
        );
    }
};

module.exports = ListaUsuariosPage;
