const React = require('react');
const Task = require('../task');
const {Link} = require ('react-router-dom');

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: null,
            loading: true,
            error: false,
        };
    }

    componentDidMount() {
        fetch(`/api/tasks/`)
            .then(res => res.json()).then((data) =>{
            this.setState({
                tasks: data.tasks,
                loading: false,
                error: false,
            });
        })
            .catch((err) => {
                console.error(err);
                this.setState({
                    tasks: null,
                    loading: false,
                    error: true,
                });
            });
    }

    render() {
        const tasks  = this.state.tasks;
        if (this.state.loading) {
            return <div>Cargando tareas ...</div>
        }
        return (
            <div>
                <h1>Listado de tareas</h1>
                <div className="flex-container"> 
                    <Link to={`/to-do-list/new`}>Crear nueva tarea</Link>
                    <Link to={`/to-do-list/nueva`}>Crear nueva TipoActividad</Link>
                    <Link to={`/to-do-list/proveedor`}>Crear nuevo Proveedor</Link>                                   
                    <Link to={`/to-do-list/nuevousuario`}>Crear nuevo Usuario</Link>      
                </div>
                
                <ul className="to-do-list">
                    {
                        tasks.map(task => (
                            <Task key={task.id} id={task.id} name={task.name} description={task.description} />
                        ))
                    }
                </ul>
            </div>
        );
    }
};

module.exports = ToDoList;
