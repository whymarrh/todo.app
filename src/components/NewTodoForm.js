import React, {PureComponent} from 'react';
import DatePicker from 'react-datepicker';
import DateTime from 'luxon/src/datetime.js'

import 'react-datepicker/dist/react-datepicker.css';

export class NewTodoForm extends PureComponent {
    state = {
        dueDate: DateTime.local().plus({days: 1}).toJSDate(),
    };

    onSubmit = (e) => {
        const {addTodo} = this.props;
        const {dueDate} = this.state;

        e.preventDefault();
        const form = e.target;
        const [title, desc] = form.elements;
        addTodo({
            title: title.value,
            desc: desc.value,
            dueDate,
        });
        title.value = null;
        desc.value = null;
    };

    onDateChange = (dueDate) => {
        this.setState({
            dueDate,
        })
    };

    render() {
        const {dueDate} = this.state;
        return (
            <form className="entry-form" onSubmit={this.onSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    required
                />
                <input
                    type="text"
                    name="desc"
                    placeholder="Description"
                    required
                />
                <DatePicker
                    selected={dueDate}
                    onChange={this.onDateChange}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    timeCaption="time"
                />
                <button type="submit">Add</button>
            </form>
        )
    }
}
