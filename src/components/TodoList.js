import React, { PureComponent } from 'react';
import DateTime from 'luxon/src/datetime.js'

export class TodoList extends PureComponent {
    render() {
        const {items, completeTodo, deleteTodo} = this.props;

        return (
            <ul>
                {items.map((item, idx) => (
                    <li key={idx}>
                        <input
                            type="checkbox"
                            defaultChecked={item.completed()}
                            disabled={item.completed()}
                            onClick={() => completeTodo(idx)}
                        />
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
