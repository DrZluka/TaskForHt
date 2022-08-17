import React, {Component} from 'react';

class NewComponentForLifeCycle extends Component {

    componentDidMount() {
        alert("Компонента встроенна");
    }

    componentWillUnmount() {
        alert("Компонента закрыта");
    }

    render() {
        return (
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, illo!</p>
            </div>
        );
    }
}

export default NewComponentForLifeCycle;