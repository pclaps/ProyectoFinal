const React = require('react');
const {Link} = require ('react-router-dom');
const Task = require('../task');
const { Button,Form, Segment,Dropdown, FormField } = require ('semantic-ui-react');

class TaskDetail extends React.Component {
    constructor(props) {
        super (props);

        this.state = {
            task: null, 
            loading: true,
            error: null,
        }
       // this.handleNameChange = this.handleNameChange.bind(this);
    }
  /*  handleNameChange(event) {
        this.setState({
            task : event.target.value
        });
    }*/
    componentDidMount() {
        fetch(`/api/tasks/${this.props.id}`)
        .then(res => res.json()).then((data) =>{
            this.setState({
                task: data.task, 
                loading: false,
                error: false,
            });
        }) 
        .catch((err) => {
            console.error(err);
            this.setState({
                task: null, 
                loading: false,
                error: true,
            });
        });
    }
    render(){
        if (this.state.loading) {
            return (
                <div>Cargando...</div>
            )
        }

        if (this.state.error) {
            return (
                <div>Ocurrio un error al obtener la tarea</div>
            )
        }
        console.log(this.state.task);
        return(
            
            <div>
                <Link to={`/to-do-list`}>Ir al listado</Link>               
                <div>Detalle de tarea</div>     
                <div>{this.state.task.id}</div>
                <Form>  
                    <Form.Field required>
                        <label>ID</label>                          
                        <input placeholder='Id' 
                        value={this.state.task.id} 
                        />
                    </Form.Field>  
                    <Form.Field required>
                        <label>Name</label>                          
                        <input placeholder='Name' 
                        value={this.state.task.name} 
                        />
                    </Form.Field>  
                </Form>
            </div>
          
        )
    }
}

module.exports = TaskDetail;
// <Task key={this.state.task.id} id={this.state.task.id} name={this.state.task.name} description={this.state.task.description} />                 
/*

        <Form>  
          <Form.Field required>
            <label>ID</label>                          
            <input placeholder='Id' 
            value={this.props.id} 
            />
          </Form.Field>  
          <Form.Field >
            <label>Name</label>                          
            <input placeholder='Name' 
            value={this.props.name} 
           
            />
          </Form.Field>  
          <Link to={`/to-do-list/task/${this.props.id}`}>Ir a la tarea</Link>
        </Form>          */