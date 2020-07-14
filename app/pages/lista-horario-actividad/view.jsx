const React = require('react');
const { Route } = require('react-router-dom');
const HorarioActividad = require('../../components/HorarioActividad/HorarioActividad');
const HorarioActividadNueva = require('../../components/HorarioActividad/HorarioActividadNueva')
const ListaHorarioActividad = require('../../components/HorarioActividad/ListaHorarioActividad');

//console.log('ListaUsuariosPage-view');

class ListaActividadesPage extends React.Component {
    render() {
        const { actividades } = this.props.initialState;       
        return (
            <React.Fragment>               
                 <Route
                    exact
                    path="/lista-horarioactividad"
                    render={(props) => <ListaHorarioActividad {...props} actividades={actividades}/>}
                />
                 <Route
                    exact
                    path="/lista-horarioactividad/poractividad/:idActividad"
                    render={(props) => <ListaHorarioActividad {...props} idActividad={props.match.params.idActividad}/>}
                />
                   <Route
                    exact
                    path="/lista-horarioactividad/horarioactividad/:id"
                    render={(props) => <HorarioActividad {...props} actividades={actividades}/>}
                />
                 <Route
                    exact
                    path="/lista-actividades/nuevaactividad"
                    render={(props) => <HorarioActividadNueva {...props} actividades={actividades}/>}
                />
            </React.Fragment>
        );
    }
};

module.exports = ListaActividadesPage;
