import React, {Component} from 'react';
import Input2 from "../Imputs/Input2";

class FormOfNumber extends Component {
    state={
        value1: 0,
        value2: 0,
        valueOfAll: 0
    }

    inputHandlerOne(e){
        this.setState({value1: e})
    }

    inputHandlerTwo(e){
        this.setState({value2: e})
    }

    printSomeNumber(e){
        e.preventDefault()

        let n = (this.state.value1 * 0.5)  +  (this.state.value2 * 0.5);

        this.setState({valueOfAll:n})
    }

    render() {
        return (
            <>
                <Input2 inputHandler={(e)=>this.inputHandlerOne(e)} inputValue={this.state.value1}/>
                <Input2 inputHandler={(e)=>this.inputHandlerTwo(e)} inputValue={this.state.value2}/>
                <input value={"Send"} onClick={(e)=>this.printSomeNumber(e)} type={"button"}/>

                <p>{this.state.valueOfAll}</p>
            </>
        );
    }
}

export default FormOfNumber;