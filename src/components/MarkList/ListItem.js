import React, {Component} from 'react';
import {Button} from "../Button/Button";
import {iconTypes} from "../../constants/icons";
import styles from './MarkList.module.scss'

export class ListItem extends Component {

    constructor(props) {
        super(props);
    }

    onClickClose = () => {
        this.props.removeItem(this.props.id);
    }

    render() {
        return (
            <li>
                <div className={styles.listItemValueWrapper}>{this.props.item.value}</div>
                <Button size="small" onClick={this.onClickClose()} iconType={iconTypes.deleteTask}/>
            </li>
        );
    }
}
