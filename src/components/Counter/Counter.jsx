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
            <div>
                <p>Counter</p>
                <p>{this.state.value}</p>
                <bottom onClick={()=>this.upCount()}>+1</bottom>
                <bottom onClick={()=>this.countDown()}>-1</bottom>
            </div>
        );
    }
}

export default Counter;