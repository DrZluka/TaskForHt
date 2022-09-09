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



    onSubmit = (e) => {
        e.preventDefault();
        const newItemValue = this.inputRef.current.value;

        if(!newItemValue){return}

        const trimValue = newItemValue.trim();
        if (trimValue.length){
            this.props.addItem({value: newItemValue, uid: Date.now()});
            this.formRef.current.reset();
        }

    }

    render() {
        return (
            <form ref={this.formRef} onSubmit={this.onSubmit}>
                <div className={styles.formContent}>
                    <input type="text" ref={this.formRef} placeholder="add new mark" className={styles.inputField}/>
                    <Button type="submit" iconType={iconTypes.addNewTask} className={styles.submitBtn}>add</Button>

                </div>
            </form>
        );
    }
}
