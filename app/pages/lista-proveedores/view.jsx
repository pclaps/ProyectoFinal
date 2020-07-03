const React = require('react');
const { Route } = require('react-router-dom');
const Proveedor = require('../../components/Proveedor/ProveedorForm');
const ListaProveedores = require('../../components/Proveedor/ListaProveedores');

console.log('ListaProveedoresPage-view');

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
                    path="/lista-proveedores/proveedor"
                    render={(props) => <Proveedor {...props} />}
                />
            </React.Fragment>
        );
    }
};

module.exports = ListaProveedoresPage;
