const React = require('react');
const Usuario = require('./Usuario');
const {Link} = require ('react-router-dom');
const {Segment,List,Icon,Button,Label,Divider} = require('semantic-ui-react');

class ListaUsuarios extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarios: null,
            loading: true,
            error: false,
        };
        this.onDeleteUsuario = this.onDeleteUsuario.bind(this);
        this.onRefresh = this.onRefresh.bind(this);
    }

    onDeleteUsuario(idUsuario){
        console.log("borrar usuario", idUsuario);
        // Despues que se legue al eliminar y todo este ok

        fetch(`/api/usuario/${idUsuario}`, {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // body: JSON.stringify(data) // body data type must match "Content-Type" header
          })
          .then(response => response.json())
          .then(data => {
            console.log('response', data);
            //refresco la lista , trayendo nuevamente los datos
            this.onRefresh();
          });
    }
/**
 * 
 */
    onRefresh() {
        fetch(`/api/usuario/`)
        .then(res => res.json()).then((data) =>{
            this.setState({
                usuarios: data.listUsuarios,
                loading: false,
                error: false,
            });
        });
    }

    componentDidMount() {
        this.onRefresh();
    }

    render() {
        const usuarios  = this.state.usuarios;
        if (this.state.loading) {
            return <div>                 
                 Cargando Usuarios ...
                 <Icon loading name='spinner' size="huge" /></div>
        }
        return (
            <div>
                <Segment inverted textAlign="center">Listado de Usuarios</Segment>                  
                <div >                                                                    
                    <Button as={Link} to="/lista-usuarios/nuevousuario" floated='right' icon labelPosition='left' primary size='big' >
                        <Icon name='user' /> Nuevo Usuario
                    </Button>                    
                    <Label>
                         <Icon name='user' />Cantidad de Usuarios{usuarios.length}
                    </Label>
                </div>
                <Divider horizontal></Divider>
                <ul>
                    {
                        usuarios.map(usuario => (
                            <Usuario key={usuario.idUsuario} 
                            idUsuario={usuario.idUsuario} 
                            nombreUsuario ={usuario.nombreUsuario} 
                            email={usuario.email} 
                            onDeleteUsuario={this.onDeleteUsuario} />
                        ))
                    }
                </ul>
               
            </div>

        );
    }
};
// <Usuario key={usuario.idUsuario} idUsuario={usuario.idUsuario} nombreUsuario={usuario.nombreUsuario}/>
module.exports = ListaUsuarios;
