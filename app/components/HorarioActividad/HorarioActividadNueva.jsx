const React = require('react');
const {Link} = require ('react-router-dom');
const { Redirect } = require ('react-router-dom');
const { Button,Form, Segment } = require ('semantic-ui-react');
//const HorarioActividad = require('./HorarioActividad');


///FORMULARIO DE NUEVA ACTIVIDAD

class HorarioActividadNueva extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dia:'',
            hora:'',
            mes:'',
            idLocal:'',
            idActividad:'',            
            redirect: null
        };
        //Defino Handlers
        this.handleDiaChange = this.handleDiaChange.bind(this);
        this.handleHoraChange = this.handleHoraChange.bind(this);
        this.handleMesChange = this.handleMesChange.bind(this);
        this.handleIdLocalChange = this.handleIdLocalChange.bind(this);
        this.handleIdActividadChange = this.handleIdActividadChange.bind(this);       
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleDiaChange(event) {
        this.setState({
            dia: event.target.value
        });
    }
    handleHoraChange(event) {
        this.setState({
            hora: event.target.value
        });
    }

    handleMesChange(event) {
        this.setState({
            mes: event.target.value
        });
    }

    handleIdLocalChange(event) {
        this.setState({
            idLocal: event.target.value
        });
    }
    
    handleIdActividadChange(event) {
        this.setState({
            idActividad: event.target.value
        });
    }

    

    handleSubmit(event) {
        event.preventDefault();
        alert('nuevo Horarioactividad');
        fetch('/api/horarioactividad', {
            method: 'POST',
            headers : { "Content-Type" : "application/json; charset=utf-8"},
            body: JSON.stringify({
                dia:this.state.dia,
                hora:this.state.hora,
                mes:this.state.mes,
                idLocal:this.state.idLocal,
                idActividad:this.state.idActividad,                
            })
        }).then(res => res.json()).then((data) =>{

            this.setState({
                redirect: true
            });

        }).catch((err) => {
            alert('Ocurrio un error');
        });
    }

    render() {
        if (this.state.redirect) {
            return  window.location=="/lista-horarioactividad" 
        }
        return (
            <div>               
                <Segment inverted textAlign="center">Registro de Horarios</Segment>
                <Link to={`/lista-horarioactividad/`}>Ir al listado</Link>               
                <Form onSubmit={this.handleSubmit} className="flex-container2">     
                    <Form.Field>                                                                     
                          <label>Día</label>
                          <input placeholder='dia' 
                          value={this.state.dia} 
                          onChange={this.handleDiaChange}/>
                    </Form.Field>  
                    <Form.Field>
                          <label>Hora</label>
                          <input placeholder='Hora' 
                          value={this.state.hora} 
                          onChange={this.handleHoraChange}/>
                    </Form.Field>  
                    <Form.Field>
                          <label>Mes</label>
                          <input placeholder='mes' 
                          value={this.state.mes} 
                          onChange={this.handleMesChange}/>
                    </Form.Field>  
                    <Form.Field>
                          <label>Id Local</label>
                          <input placeholder='idLocal' 
                          value={this.state.idLocal} 
                          onChange={this.handleIdLocalChange}/>
                    </Form.Field>                  
                    <Form.Field>
                          <label>Id Actividad</label>
                          <input placeholder='idActividad' 
                          value={this.state.idActividad} 
                          onChange={this.handleIdActividadChange}/>
                    </Form.Field>  
                  
                    <Form.Button primary >Crear Horario</Form.Button>                   
                </Form>
            </div>
        );
    }
};

module.exports = HorarioActividadNueva;
