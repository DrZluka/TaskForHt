import React, {Component} from 'react';
import Form from "../Form/Form";
import Todolist from "../Todolist/Todolist";

class Page extends Component {
    render() {
        return (
            <div>
                <Form/>
                <Todolist/>

            </div>
        );
    }
}

export default Page;