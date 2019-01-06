import React, { PureComponent } from 'react';
import DateTime from 'luxon/src/datetime.js'

export class TodoList extends PureComponent {
    render() {
        const {items, completeTodo, deleteTodo} = this.props;

        return (
            <ul>
                {items.map((item, idx) => (
                    <li className="to-do" key={idx}>
                        <span className="to-do__content">
                            <input
                                type="checkbox"
                                defaultChecked={item.completed()}
                                disabled={item.completed()}
                                onClick={() => completeTodo(idx)}
                            />
                            &nbsp;
                            <button onClick={() => deleteTodo(idx)}>🗑</button>
                            &nbsp;
                            <span className="title">{item.title}</span>
                            &nbsp;
                            <span className="description">{item.description}</span>
                        </span>
                        <span className="to-do__due-date">{DateTime.fromJSDate(item.dueDate).diffNow().toFormat('d')} days</span>
                    </li>
                ))}
            </ul>
        );
    }
}
