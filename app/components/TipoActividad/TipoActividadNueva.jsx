const React = require('react');
const {Link} = require ('react-router-dom');
const { Redirect } = require ('react-router-dom');
const { Button,Form,Checkbox } = require ('semantic-ui-react');

class TipoActividadNueva extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            descripcion: '',
            image: '',
            redirect: null
        };

        this.handleImageChange = this.handleImageChange.bind(this);
        this.handledescripcionChange = this.handledescripcionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleImageChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    handledescripcionChange(event) {
        this.setState({
            descripcion: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        fetch('/api/tipoactividad', {
            method: 'POST',
            headers : { "Content-Type" : "application/json; charset=utf-8"},
            body: JSON.stringify({
                name: this.state.descripcion,
                image: this.state.image
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
            return <Redirect to="/to-do-list" />
        }
        return (
            <div>
                
                <h2 className="red-text">Crear Tipo de Actividad</h2>
                <Link to={`/to-do-list/`}>Ir al listado</Link>
                <Form onSubmit={this.handleSubmit} className="flex-container2">     
                    <div>
                        Desc TipoActividad:
                        <input type="text" name="descripcion" value={this.state.descripcion} 
                        onChange={this.handledescripcionChange}  />
                    </div>
                    <div>
                        Imagen:
                        <input type="text" name="image" value={this.state.image} onChange={this.handleImageChange} />
                    </div>
                    
                    <Form.Button primary >Crear TipoActividad</Form.Button>                   
                    </Form>
            </div>
        );
    }
};

module.exports = TipoActividadNueva;
