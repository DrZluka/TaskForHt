import React, {Component} from 'react';
import {Button} from "../Button/Button";
import {iconTypes} from "../../constants/icons";
import styles from './MarkList.module.scss'

export class FormTask extends Component {
    constructor(props) {
        super(props);
        this.formRef = React.createRef();
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }

    onSubmot = (event) => {
        event.preventDefault();
        const newItemValue = this.inputRef.current.value;

        if(!newItemValue){return}

        const trimvalue = newItemValue.trim();
        if (trimvalue.length){
            this.props.addItem({value: newItemValue, uid: Date.now()});
            this.formRef.current.reset();
        }

    }

    render() {
        return (
            <form ref={this.formRef} onSubmit={this.onSubmot}>
                <div className={styles.formContent}>
                    <input type="text" ref={this.formRef} placeholder="add new mark" className={styles.inputField}/>
                    <Button type="submit" iconType={iconTypes.addNewTask} className={styles.submitBtn}>add</Button>

                </div>
            </form>
        );
    }
}
