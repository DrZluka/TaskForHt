import React, {useState} from 'react';
import {iconTypes} from "../../constants/icons";
import {Button} from "../Button/Button";
import styles from './TodoList.module.scss'

const TodoList = ({todo, setTodo}) => {

    const [edit, setEdit] = useState(null);

    function deleteTodo(id){
        let newTodo = [...todo].filter(item => item.id != id);
        setTodo(newTodo);

    }

    function markTask(id){
        let newTodo = [...todo].filter(item => {
            if(item.id == id){
                item.status = !item.status
            }
            return item;
        });
        setTodo(newTodo);
    }

    function editTodo(id){
        setEdit(id)
    }

    return (
        <div>
            {
                todo.map( item => (
                    <div className={styles.mainDiv}  key={item.id}>
                        {
                            edit == item.id ?
                                <div>
                                    <input/>
                                    <Button iconType={iconTypes.saveEditTask}>Save</Button>
                                </div>:
                                <div className={styles.divItem}>{item.title}</div>
                        }
                        <Button onClick={ ()=>editTodo(item.id) } iconType={iconTypes.editTask}>Edit</Button>
                        <Button className={styles.buttonPlace} onClick={ ()=>deleteTodo(item.id) } iconType={iconTypes.deleteTask}>Delete</Button>
                        <Button onClick={ ()=>markTask(item.id) } iconType={iconTypes.taskDone}>Done</Button>
                    </div>

                ))
            }
        </div>
    );
};

export default TodoList;