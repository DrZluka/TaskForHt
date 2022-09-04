import React, {Component} from 'react';
import "./Todolist.scss";
import MarkList from "../MarkList/MarkList";

class Todolist extends Component {
    render() {
        return (
            <div>
                <MarkList/>
            </div>
        );
    }
}

export default Todolist;