export const STATUS_DONE = 'done';
export const STATUS_PENDING = 'pending';

export class Todo {
    constructor(title, description, dueDate, status = STATUS_PENDING) {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._status = status;
    }

    complete() {
        this._status = STATUS_DONE;
    }

    completed() {
        return this._status === STATUS_DONE;
    }

    get title() {
        return this._title;
    }

    get description() {
        return this._description;
    }

    get dueDate() {
        return this._dueDate;
    }
}
