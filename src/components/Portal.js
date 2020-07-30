import React from 'react';
import ReactDOM from 'react-dom';

const portalRoot = document.getElementById('portal')
// const newElement = document.createElement('div')

class Portal extends React.Component {
    constructor(props){
        super(props)
        this.newElement = document.createElement('div')
    }

    componentDidMount = () => {
        portalRoot.appendChild(this.newElement);
    }

    componentWillUnmount = () => {
        portalRoot.removeChild(this.newElement);
    }

    render(){
        const { children } = this.props;
        return ReactDOM.createPortal(children, this.newElement);
    }

    }

export default Portal;

