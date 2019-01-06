import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addTodo, completeTodo, deleteTodo} from '../state/actions';
import {NewTodoForm} from './NewTodoForm';
import {TodoList} from './TodoList';

const mapStateToProps = (items) => ({ items });

export const App = connect(mapStateToProps)(class App extends Component {
        render() {
        const {dispatch, items} = this.props;
        return (
            <div>
                <NewTodoForm
                    addTodo={(...args) => dispatch(addTodo(...args))}
                />
                <TodoList
                    items={items}
                    completeTodo={(...args) => dispatch(completeTodo(...args))}
                    deleteTodo={(...args) => dispatch(deleteTodo(...args))}
                />
            </div>
        );
    }
});
