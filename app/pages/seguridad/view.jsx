const React = require('react');
const { Route } = require('react-router-dom');
const UsuarioNuevo = require('../../components/Usuario/UsuarioNuevo');
const Login = require('../../components/Usuario/Login');

//console.log('ListaUsuariosPage-view');

class ListaUsuariosPage extends React.Component {
    render() {
        const { usuarios } = this.props.initialState;       
        return (
            <React.Fragment>                          
                 <Route
                    exact
                    path="/seguridad"
                    render={(props) => <ListaUsuarios {...props} usuarios={usuarios}/>}
                />    
                   <Route
                    exact
                    path="/seguridad/nuevousuario"
                    render={(props) => <UsuarioNuevo {...props} usuarios={usuarios}/>}
                />
            </React.Fragment>
        );
    }
};

module.exports = ListaUsuariosPage;
