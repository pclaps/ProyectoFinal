const React = require('react');
const Usuario = require('./Actividad');
const {Link} = require ('react-router-dom');

console.log(' componente listaActividades');

class ListaActividades extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            actividades: null,
            loading: true,
            error: false,
        };
    }

    componentDidMount() {
        fetch(`/api/actividad`)
            .then(res => res.json()).then((data) =>{              
            this.setState({
                actividades: data.listActividades,
                loading: false,
                error: false,
            });
            })
            .catch((err) => {
                console.error('fallo fetch');
                this.setState({
                    actividades: null,
                    loading: false,
                    error: true,
                });
            });
    }

    render() {
        //lista para recorrer
        const actividades  = this.state.actividades;
        if (this.state.loading) {
            return <div>Cargando Actividades ...</div>
        }
        return (
            <div>
                <h1>Listado de Actividades</h1>
                <div >                                                
                    <Link to={`/lista-usuarios/nuevousuario`}>Crear nuevo Actividad</Link>      
                </div>
                <ul>
                    {
                        actividades.map(actividad => (
                            <Actividad key={actividad.idActividad} idActividad={actividades.idActividad} descripcion ={actividades.descripcion}  cupos={actividades.cuposTotales}/>
                        ))
                    }
                </ul>
            </div>

        );
    }
};
module.exports = ListaActividades;
