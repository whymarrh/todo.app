import React, { PureComponent } from 'react';
import DateTime from 'luxon/src/datetime.js'

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
                        &nbsp;
                        <button onClick={() => deleteTodo(idx)}>🗑</button>
                        &nbsp;
                        <strong>{item.title}</strong>
                        &nbsp;
                        {item.description}
                        &nbsp;
                        <span>{DateTime.fromJSDate(item.dueDate).diffNow().toFormat('d')} days</span>
                    </li>
                ))}
            </ul>
        );
    }
}
