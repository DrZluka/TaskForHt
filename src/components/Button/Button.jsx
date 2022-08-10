import React, {Component} from 'react';
import "./Button.scss"

const Button = (props ) => {
        return (
            <button onClick={() => props.action("asdf")}> {props.name}</button>
        );
}

export default Button;