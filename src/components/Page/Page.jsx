import React, {Component} from 'react';
import Form from "../Form/Form";
import SomeTodoList from "../TodoList/SomeTodoList";

class Page extends Component {
    render() {
        return (
            <div>
               {/* <Form/>*/}

                <SomeTodoList/>

            </div>
        );
    }
}

export default Page;