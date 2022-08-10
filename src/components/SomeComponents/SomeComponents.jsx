import React, {Component} from 'react';
import "./SomeComponents.scss"
import Button from "../Button/Button";



class SomeComponents extends Component {
    render() {

        const {buttonName} = this.props


        return (
            <>
                <h1>Hello world and React!</h1>
                <Button action={"action"} name={buttonName}/>
            </>
        );
    }
}

export default SomeComponents;