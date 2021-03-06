const React = require('react');
const { Route } = require('react-router-dom');
const UsuarioNuevo = require('../../components/Usuario/UsuarioNuevo');
const Login = require('../../components/Usuario/Login');
const Logout = require('../../components/Usuario/Logout');

//console.log('ListaUsuariosPage-view');

class SeguridadPage extends React.Component {
    render() {
        const { usuarios } = this.props.initialState;       
       // console.log('usuarios: '+ usuarios);
        
        return (
            <React.Fragment>                          
                 <Route
                    exact
                    path="/seguridad/login"
                    render={(props) => <Login {...props} usuarios={usuarios}/>}
                />    
                 <Route
                    exact
                    path="/seguridad/logout"
                    render={(props) => <Logout {...props} usuarios={usuarios}/>}
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

module.exports = SeguridadPage;
