import React, {Component} from 'react';
import SomeInput from "../SomeInput/SomeInput";
import FormOfNumber from "../FormOfNumber/FormOfNumber";
import ValidationForm from "../ValidationForm/ValidationForm";

class Form extends Component {

    state={
        someValue: ""
    }

    inputHandler(v){
        this.setState({someValue: v})
    }

    render() {
        return (
            <form action="">
                <SomeInput stateHandler={(e)=> this.inputHandler(e)} />
                <FormOfNumber/>
                <ValidationForm/>
            </form>
        );
    }
}

export default Form;