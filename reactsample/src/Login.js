import React from 'react';

class Login extends React.Component {

    render() {
        return <button onClick={this.props.onChange}>{this.props.isLoggedIn ? 'Logout' : 'Login'}</button>
    }

}

export default Login;