import React, {useState} from 'react';
import {Button} from "../Button/Button";
import {iconTypes} from "../../constants/icons";
import { v4 as uuidv4 } from 'uuid';
import styles from './TodoList.module.scss'

const InputOfTask = ({todo, setTodo}) => {

    const [value, setValue] = useState('')

    function saveNewTask(){
        setTodo(
            [...todo, {
                id: uuidv4(),
                title: value,
                status: true
            }]
        )
        setValue('')
    }

    return (

        <div>
            <input className={styles.inputStyles} type="text" value={value} onChange={(e)=>setValue(e.target.value)} placeholder="add new task"/>
            <Button onClick={saveNewTask} iconType={iconTypes.addNewTask}>add</Button>
        </div>


    );
};

export default InputOfTask;