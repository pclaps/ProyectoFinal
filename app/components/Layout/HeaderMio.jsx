const React = require('react');
const {Header} = require('semantic-ui-react');

class HeaderMio extends React.Component {
    render() {
        return (
            <Header className="page-header">
               Header User: {this.props.currentUser}
            </Header>
        );
    }
};

module.exports = HeaderMio;