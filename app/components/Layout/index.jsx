const React = require('react');
const HeaderMio = require('./HeaderMio');
const FooterMio = require('./FooterMio');

class LayoutMio extends React.Component {
    render() {
        return (
            <div>
                <HeaderMio currentUser={this.props.currentUser}/>
                <div>LAYOUTTTTTTTTTTTTTTTTTTTTTTTT</div>
                <div className="page-content">
                    {this.props.children}
                </div>
                <FooterMio />
            </div>
        );
    }
};

module.exports = LayoutMio;
