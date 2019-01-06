import React, { PureComponent } from 'react';

export class TodoList extends PureComponent {
    render() {
        const {items, completeTodo, deleteTodo} = this.props;

        return (
            <ul>
                {items.map((item, idx) => (
                    <li key={idx}>
                        {
                            item.completed()
                                ? (
                                    <input type="checkbox" checked disabled />
                                )
                                : (
                                    <input type="checkbox" onClick={() => completeTodo(idx)} />
                                )
                        }
                        <button onClick={() => deleteTodo(idx)}>🗑</button> {item.name()}
                    </li>
                ))}
            </ul>
        );
    }
}
