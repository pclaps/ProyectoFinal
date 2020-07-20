const React = require('react');
const { Route } = require('react-router-dom');
const HorarioActividad = require('../../components/HorarioActividad/HorarioActividad');
const HorarioActividadNueva = require('../../components/HorarioActividad/HorarioActividadNueva')
const ListaHorarioActividad = require('../../components/HorarioActividad/ListaHorarioActividad');

//console.log('ListaUsuariosPage-view');

class ListaHorarioActividadPage extends React.Component {
    render() {
        const { horarios } = this.props.initialState;       
        return (
            <React.Fragment>               
                 <Route
                    exact
                    path="/lista-horarioactividad"
                    render={(props) => <ListaHorarioActividad {...props} horarios={horarios}/>}
                />
                 <Route
                    exact
                    path="/lista-horarioactividad/poractividad/:idActividad"
                    render={(props) => <ListaHorarioActividad {...props} idActividad={props.match.params.idActividad}/>}
                />
                   <Route
                    exact
                    path="/lista-horarioactividad/horarioactividad/:id"
                    render={(props) => <HorarioActividad {...props} horarios={horarios}/>}
                />
                 <Route
                    exact
                    path="/lista-horarioactividad/nuevohorario"
                    render={(props) => <HorarioActividadNueva {...props} horarios={horarios}/>}
                />
            </React.Fragment>
        );
    }
};

module.exports = ListaHorarioActividadPage;
