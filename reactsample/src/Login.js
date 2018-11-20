import React from 'react';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    onClick = (e) => {
        this.setState({isLoggedIn: !this.state.isLoggedIn});
    }

    render() {
        let welcomeMessage;
        if (this.state.isLoggedIn) {
            welcomeMessage = <div>{'Welcome ' + this.props.name}</div>;
        }
        return(
            <>
                <button onClick={this.onClick}>{this.state.isLoggedIn ? 'Logout' : 'Login'}</button>
                {welcomeMessage}
            </>
            )
    }

}

export default Login;