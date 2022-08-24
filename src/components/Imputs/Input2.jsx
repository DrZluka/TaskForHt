import React, {Component} from 'react';

class Input2 extends Component {

    inputHandler(e){
        //this.setState({value: e.target.value})
        this.props.inputHandler(e.target.value)
    }

    render() {
        return (
            <div>
                <input value={this.props.inputValue} onChange={(e)=> this.inputHandler(e)} type={"number"}/>
            </div>
        );
    }
}

export default Input2;