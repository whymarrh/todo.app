import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addTodo, completeTodo, deleteTodo} from '../state/actions';
import {TodoList} from './TodoList';

const mapStateToProps = (items) => ({ items });

export const App = connect(mapStateToProps)(class App extends Component {
    onFormSubmit = (e) => {
        const {dispatch} = this.props;

        e.preventDefault();
        const form = e.target;
        const [name] = form.elements;
        dispatch(addTodo(name.value));
        name.value = null;
    };

    render() {
        const {dispatch, items} = this.props;
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type='text' name='name' />
                </form>
                <TodoList
                    items={items}
                    completeTodo={(...args) => dispatch(completeTodo(...args))}
                    deleteTodo={(...args) => dispatch(deleteTodo(...args))}
                />
            </div>
        );
    }
});
