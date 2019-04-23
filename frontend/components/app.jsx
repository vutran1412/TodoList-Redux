import React from 'react';
import TodoContainer from './todo_list_container'

const App = () => {
    return (
        <div>
            <h1>Todo App Test</h1>
            <TodoContainer state={state}/>
        </div>

    )
}

export default App;