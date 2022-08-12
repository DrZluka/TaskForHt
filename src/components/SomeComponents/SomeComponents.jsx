import React, {Component} from 'react';
import "./SomeComponents.scss";



class SomeComponents extends Component {
    render() {

        return (
            <>
                <h1>{this.props.text}</h1>
            </>
        );
    }
}

export default SomeComponents;