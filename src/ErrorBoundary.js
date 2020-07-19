import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        err: false

    }

    componentDidCatch(err, info) {
        this.setState({
            err: true
        });
        console.log({err, info});

    }

    render() {
        if(this.state.err) return <div>404 Not Found</div>
        return this.props.children;
    }
}

export default ErrorBoundary;