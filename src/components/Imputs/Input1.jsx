import React, {Component} from 'react';

class Input1 extends Component {

    //state={
   //     value: ""
   // }

    inputHandler(e){
        //this.setState({value: e.target.value})
        this.props.inputHandler(e.target.value)
    }

    render() {
        return (
            <div>
                <input value={this.props.inputValue} onChange={(e)=> this.inputHandler(e)} type={"text"}/>
            </div>
        );
    }
}

export default Input1;