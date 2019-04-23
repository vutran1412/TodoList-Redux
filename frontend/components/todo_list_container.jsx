import { connect } from 'react-redux';
import { receiveTodo } from '../actions/todo_actions';
import { TodoList } from './todo_list';
import { selectAllTodos } from '../reducers/selectors';

const mapStateToProps = (state) => ({
    todos: selectAllTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
    receiveTodo: (todo) => dispatch(receiveTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);