import React from 'react';
import { TodoForm } from './todo_list/todo_form';

const TodoList = ({ todos, receiveTodo }) => {
    const listItems = todos.map((listItem, idx) => (
        <li key={idx}>{listItem.title}</li>
    ))
    
    return (
        <>
            <ul>
                {listItems}
            </ul>
            <TodoForm receiveTodo={ receiveTodo }/>
        </>
    );
}

export default TodoList;