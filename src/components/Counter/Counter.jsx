import React, {Component} from 'react';
import "./Counter.scss"

class Counter extends Component {

    state = {
        value:0
    }

    upCount(){
        this.setState({value:this.state.value +1})
    }
    countDown(){
        this.setState({value:this.state.value -1})
    }


    render() {
        return (
            <div className="Counter">
                <p>Counter</p>
                <p>{this.state.value}</p>
                <botton onClick={()=>this.upCount()}>+1</botton>
                <botton onClick={()=>this.countDown()}>-1</botton>
            </div>
        );
    }
}

export default Counter;