import React, {Component} from 'react';
import Input1 from "../Imputs/Input1";

class SomeInput extends Component {
    state={
        value:"",
        value1: "",
        value2: "",
        text:""
    }


    inputHandler(e){
        this.setState({value: e})
    }

    inputHandlerOne(e){
        this.setState({value1: e})
    }

    inputHandlerTwo(e){
        this.setState({value2: e})
    }

    printSomeText(e){
        e.preventDefault()

        let t = this.state.value + this.state.value1 + this.state.value2;

        this.setState({text:t})
    }

    render() {

        return (
            <>
                <Input1 inputHandler={(e)=>this.inputHandler(e)} inputValue={this.state.value}/>
                <Input1 inputHandler={(e)=>this.inputHandlerOne(e)} inputValue={this.state.value1}/>
                <Input1 inputHandler={(e)=>this.inputHandlerTwo(e)} inputValue={this.state.value2}/>
                <input value={"Send"} onClick={(e)=>this.printSomeText(e)} type={"button"}/>
                
                <p>{this.state.text}</p>
            </>
        );
    }
}

export default SomeInput;