const React = require('react');
const {Link} = require ('react-router-dom');
const { Redirect } = require ('react-router-dom');
const { Button,Form, Segment,Dropdown,Grid,Header,Message,Image,Step,Icon } = require ('semantic-ui-react');

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
        fetch('/api/login', {
            method: 'POST',
            headers : { "Content-Type" : "application/json; charset=utf-8"},
            body: JSON.stringify({
                clave: this.state.clave,
                email: this.state.email,                
            })
        }).then(res => res.json()).then((data) =>{   
            alert('.then '+ data.usuario);
            this.setState({
                redirect: true
            });


        }).catch((err) => {
            alert(err);
            console.log('error en login');
            alert('Ocurrio un error componente');
        });
    }

    render() {
        if (this.state.redirect) {                       
            return  window.location="/lista-proveedores"      
        }
        return (
        <Grid textAlign='center' style={{ height: '100px' }} verticalAlign='middle'>
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
          <Segment size='big'>
          <Step.Group>
                <Step>
                <Icon name='user' />
                <Step.Content>
                    <Step.Title>Registro</Step.Title>
                    <Step.Description>de usuario</Step.Description>
                </Step.Content>
                </Step>

                <Step active>
                <Icon name='industry' />
                <Step.Content>
                    <Step.Title>Seleccione</Step.Title>
                    <Step.Description>su proveedor</Step.Description>
                </Step.Content>
                </Step>

                <Step active>
                <Icon name='sort' />
                <Step.Content>
                <Step.Title>Seleccione</Step.Title>
                    <Step.Description>su actividad</Step.Description>
                </Step.Content>
                </Step>

                <Step active>
                <Icon name='calendar' />
                <Step.Content>
                <Step.Title>Confirme</Step.Title>
                    <Step.Description>fecha</Step.Description>
                </Step.Content>
                </Step>
            </Step.Group>
          </Segment>
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