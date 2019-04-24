import merge from "lodash/merge"
import { RECEIVE_TODOS } from "../actions/todo_actions"
import { RECEIVE_TODO } from "../actions/todo_actions"


const initialState = {
    1: {
        id: 1,
        title: 'wash car',
        body: 'with soap',
        done: false
    },
    2: {
        id: 2,
        title: 'wash dog',
        body: 'with shampoo',
        done: true
    },
};


const todoReducer = (state = initialState, action) => {

    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_TODOS:
            let nextState = merge({}, state);
            nextState[action.todos.id] = action.todos;
            return nextState;
        case RECEIVE_TODO:
            let nextTodoState = merge({}, state);
            nextTodoState[action.todo.id] = action.todo;
            return nextTodoState;
        default: 
            return state;
    }
}


export default todoReducer;