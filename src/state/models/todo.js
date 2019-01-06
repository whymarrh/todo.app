export class Todo {
    constructor(name) {
        this._name = name.toLowerCase();
        this._done = false;
    }

    name() {
        return this._name;
    }

    complete() {
        this._done = true;
    }

    completed() {
        return this._done;
    }
}
