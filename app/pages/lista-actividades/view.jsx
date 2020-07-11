const React = require('react');
const { Route } = require('react-router-dom');
const Actividad = require('../../components/Actividad/Actividad');
const ActividadNueva = require('../../components/Actividad/ActividadNueva')
const ListaActividades = require('../../components/Actividad/ListaActividades');

//console.log('ListaUsuariosPage-view');

class ListaActividadesPage extends React.Component {
    render() {
        const { actividades } = this.props.initialState;       
        return (
            <React.Fragment>               
                 <Route
                    exact
                    path="/lista-actividades"
                    render={(props) => <ListaActividades {...props} actividades={actividades}/>}
                />
                 <Route
                    exact
                    path="/lista-actividades/porproveedor/:idProveedor"
                    render={(props) => <ListaActividades {...props} idProveedor={props.match.params.idProveedor}/>}
                />
                   <Route
                    exact
                    path="/lista-actividades/actividad/:id"
                    render={(props) => <Actividad {...props} actividades={actividades}/>}
                />
                 <Route
                    exact
                    path="/lista-actividades/nuevaactividad"
                    render={(props) => <Actividad {...props} actividades={actividades}/>}
                />
            </React.Fragment>
        );
    }
};

module.exports = ListaActividadesPage;
