const React = require('react');
//const Proveedor = require('../Proveedor/Proveedor');
const {Link} = require ('react-router-dom');
const Proveedor = require('../../../models/ProveedorModel');

console.log(' componente ListaProveedores');

class ListaProveedores extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            proveedores: null,
            loading: true,
            error: false,
        };
    }

    componentDidMount() {
        fetch(`/api/proveedor/`)
            .then(res => res.json()).then((data) =>{
                console.log("fetch ListaProveedores: "+ data);
            this.setState({
                proveedores: data.listProvs,
                loading: false,
                error: false,
            });
            })
            .catch((err) => {
                console.error('fallo fetch');
                this.setState({
                    proveedores: null,
                    loading: false,
                    error: true,
                });
            });
    }

    render() {
        const proveedores  = this.state.proveedores;
        if (this.state.loading) {
            return <div>Cargando Proveedores ...</div>
        }
        return (
            <div>
                <h1>Listado de Proveedores</h1>
                <div > 
                                               
                    <Link to={`/lista-proveedores/nuevoproveedor`}>Crear nuevo Proveedor</Link>      
                </div>
                <ul>
                    {
                        proveedores.map(proveedor => (
                            <Proveedor key={proveedor.idProveedor} idProveedor={proveedor.idProveedor} descripcion ={proveedor.descripcion} direccion={proveedor.direccion} />
                        ))
                    }
                </ul>
            </div>

        );
    }
};
module.exports = ListaProveedores;
