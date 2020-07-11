const React = require('react');
const { Route } = require('react-router-dom');
const ProveedorNuevo = require('../../components/Proveedor/ProveedorNuevo');
const ListaProveedores = require('../../components/Proveedor/ListaProveedores');
const ProveedorEditar = require('../../components/Proveedor/ProveedorEditar');

//console.log('ListaProveedoresPage-view');

class ListaProveedoresPage extends React.Component {
    render() {        
        return (
            <React.Fragment>               
                 <Route
                    exact
                    path="/lista-proveedores"
                    render={(props) => <ListaProveedores {...props}/>}
                />
                   <Route
                    exact
                    path="/lista-proveedores/proveedor/:id"
                    render={(props) => <ProveedorEditar {...props} />}
                />
                   <Route
                    exact
                    path="/lista-proveedores/nuevoproveedor"
                    render={(props) => <ProveedorNuevo {...props} />}
                />
            </React.Fragment>
        );
    }
};

module.exports = ListaProveedoresPage;
