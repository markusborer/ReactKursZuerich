import React from 'react';
import { Button, Icon } from 'react-materialize';

class Login extends React.Component {

    render() {
        return <Button onClick={this.props.onChange}>{this.props.isLoggedIn ? 'Logout' : 'Login'}<Icon left>{this.props.isLoggedIn ? 'power_settings_new' : 'exit_to_app'}</Icon>
        </Button>
    }

}

export default Login;