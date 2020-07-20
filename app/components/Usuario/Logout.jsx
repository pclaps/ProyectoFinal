const React = require('react');
const {Link,Redirect} = require ('react-router-dom');
const { Button,Form, Segment,Dropdown,Grid,Header,Message,Image,Step,Icon } = require ('semantic-ui-react');


class Logout extends React.Component {

    componentDidMount() {       
       
        fetch(`/api/logout/`, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
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
          }) .then(res => res.json()).then((data) =>{
                this.setState({
                    usuario: {
                        ...data.usuario
                    },
                    loading: false,
                  error: false,
            });
        });
    }
    render(){
        return(
            <div>
            <Grid size='huge'   style={{ maxWidth: 600 }}>
          <Step.Group >
                <Step active>
                <Icon name='user' />
                <Step.Content>
                    <Step.Title>Ha salido del Sistema</Step.Title>
                    <Step.Description>...</Step.Description>
                </Step.Content>
                </Step>

            </Step.Group>
          </Grid>         
            </div>
        )
           
        
    }
}

module.exports = Logout;