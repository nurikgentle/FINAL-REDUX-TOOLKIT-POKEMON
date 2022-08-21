import React, { Component } from "react";

export class ErrorBoundary extends Component {

    constructor(props) {
        super(props) 

        this.state = {
            error: null,
        }
        
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    static getDerivedStateFromError(error) {
        return {error};
    }

    render() {
        if(this.state.error)
        return <div style={{ color: 'red', textAlign: 'center', height: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', bottom: '100px', gap: '50px', flexWrap: 'wrap' }}>
           <a style={{ textDecoration: 'none', color: 'blue' }} href='/'>ВЕРНУТЬСЯ В НА ГЛАВНУЮ СТРАНИЦУ</a>
          <h1 style={{ fontSize: '50px' }}>УПС...  ОШИБКА СЕРВЕРA ☹</h1>
        </div>

        return this.props.children
    }
}

export default ErrorBoundary