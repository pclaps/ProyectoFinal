const React = require('react');
const {Link} = require ('react-router-dom');
const { Redirect } = require ('react-router-dom');
const { Button,Form, Segment,Dropdown,Grid,Header,Message,Image } = require ('semantic-ui-react');

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clave:'',
            email:'',                   
            redirect: null
        };
        //Defino Handlers
        this.handleClaveChange = this.handleClaveChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClaveChange(event) {
        this.setState({
            clave: event.target.value
        });
    }
    handleEmailChange(event) {
        this.setState({
            email: event.target.value
        });
    }
   
    handleSubmit(event) {
        event.preventDefault();
        alert('login usuario');
        fetch('/api/login', {
            method: 'POST',
            headers : { "Content-Type" : "application/json; charset=utf-8"},
            body: JSON.stringify({
                clave: this.state.clave,
                email: this.state.email,                
            })
        }).then(res => res.json()).then((data) =>{

            this.setState({
                redirect: true
            });

        }).catch((err) => {
            alert(err);
            alert('Ocurrio un error');
        });
    }

    render() {
        if (this.state.redirect) {                       
            return  window.location="/lista-proveedores"      
        }
        return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='/logo.png' /> Ingrese en su cuenta
          </Header>
          <Form size='large' onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Input 
              fluid 
              icon='user' 
              iconPosition='left' 
              placeholder='E-mail'  
              value={this.state.email} 
              onChange={this.handleEmailChange}/>
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Contraseña'
                value={this.state.clave} 
                onChange={this.handleClaveChange}
                type='password'
              />
    
              <Button color='teal' fluid size='large'>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            Crear nuevo usuario? <a href="/lista-usuarios/nuevousuario">Registro</a>
          </Message>
        </Grid.Column>
      </Grid>
    
           
        );
    }
};

module.exports = Login;
/* <div>               
                <Segment inverted textAlign="center">Login de Usuarios</Segment>            
                <Form onSubmit={this.handleSubmit} className="flex-container2">     
                    <Form.Field required>
                          <label>Correo electrónico</label>                          
                          <input placeholder='Email' 
                          value={this.state.email} 
                          onChange={this.handleEmailChange}
                          error={{
                            content: 'Please enter a valid email address',
                            pointing: 'below',
                          }}/>
                    </Form.Field>  
                    <Form.Field required>
                          <label>Contraseña</label>                          
                          <input placeholder='Contraseña' 
                          value={this.state.clave} 
                          onChange={this.handleClaveChange}
                         />
                    </Form.Field>  
                 
                    <Form.Button primary >Login</Form.Button>                      
                </Form>
            </div>*/