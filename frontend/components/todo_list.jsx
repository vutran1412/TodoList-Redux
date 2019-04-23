import React from 'react';
import selectAllTodos from '../reducers/selectors';

const TodoList = (store) => {
    const todoListItems = selectAllTodos(store);
    const listItems = todoListItems.map((listItem, idx) => (
        <li key={idx}>{listItem}</li>
    ))
    return (
        <ul>
            {listItems}
        </ul>
    );
}

export default TodoList;