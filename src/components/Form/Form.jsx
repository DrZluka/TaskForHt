import React, {Component} from 'react';
import SomeInput from "../SomeInput/SomeInput";
import FormOfNumber from "../FormOfNumber/FormOfNumber";

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
            </form>
        );
    }
}

export default Form;