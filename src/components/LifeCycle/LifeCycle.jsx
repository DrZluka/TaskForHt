import React, {Component} from 'react';
import "./LifeCycle.scss";
import NewComponentForLifeCycle from "./NewComponentForLifeCycle/NewComponentForLifeCycle";

class LifeCycle extends Component {

    state = {
        someCounter: true,
        hiddenAria: "hidden"
    }



    somePoop(){
        if(this.state.someCounter){
            this.setState({someCounter:false})
            this.setState({hiddenAria: "visible"})
        }
        else{
            this.setState({someCounter:true})
            this.setState({hiddenAria: "hidden"})
        }
    }

    render() {

        return (
            <div className="LifeCycle">
                <div style={{visibility: this.state.hiddenAria}}>
                    <NewComponentForLifeCycle />
                </div>

                <botton onClick={()=>this.somePoop()}>Press botton</botton>
            </div>
        );
    }
}

export default LifeCycle;