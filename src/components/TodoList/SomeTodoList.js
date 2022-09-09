import React, {useState} from 'react';
import InputOfTask from "./InputOfTask";
import TodoList from "./TodoList";


const SomeTodoList = (props) => {

    const [todo, setTodo] = useState([
    ]);

    return (
        <div>
            <h1>Task Manager</h1>
            <InputOfTask todo={todo} setTodo={setTodo}/>
            <TodoList todo={todo} setTodo={setTodo}/>
        </div>
    );
};

export default SomeTodoList;