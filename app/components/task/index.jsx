const React = require('react');
const {Link} = require ('react-router-dom');
const { Button,Form, Segment,Dropdown, FormField } = require ('semantic-ui-react');

  
class Task extends React.Component {
  render() {
    return (
      <li>
      <h2>{this.props.id}: {this.props.name}</h2>
      <p>{this.props.description}</p>
      <Link to={`/to-do-list/task/${this.props.id}`}>Ir a la tarea</Link>
      <p>hola</p>
    </li>        
    );
  }
};

module.exports = Task;
 /*    <li>
<h2>{this.props.id}: {this.props.name}</h2>
<p>{this.props.description}</p>
<Link to={`/to-do-list/task/${this.props.id}`}>Ir a la tarea</Link>
<p>hola</p>

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
</Form>
</li> */