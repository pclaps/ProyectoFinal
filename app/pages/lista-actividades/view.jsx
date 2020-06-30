const React = require('react');
const { Route } = require('react-router-dom');
const Actividad = require('../../components/nuevaActividad');
const ListaActividades = require('../../components/ListaActividades');

console.log('ListaUsuariosPage-view');

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
                    path="/lista-actividades/actividad"
                    render={(props) => <Actividad {...props} actividades={actividades}/>}
                />
            </React.Fragment>
        );
    }
};

module.exports = ListaActividadesPage;
