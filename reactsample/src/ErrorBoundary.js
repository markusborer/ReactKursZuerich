import React from 'react';

class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            errorInfo: null,
            error: null
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({errorInfo: errorInfo, error: error});
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <>
                    <p>Es ist ein Fehler aufgetreten.</p>
                    <p>{this.state.errorInfo.componentStack}</p>
                </>
            );
        } else {
            return this.props.children;
        }
    }

}

export default ErrorBoundary;
