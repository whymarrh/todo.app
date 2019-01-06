import {ADD_TODO, COMPLETE_TODO, DELETE_TODO} from './actions';
import {Todo} from './models/todo';

export function rootReducer(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            const {title, desc, dueDate, status} = action.payload;
            return [...state, new Todo(title, desc, dueDate, status)];

        case COMPLETE_TODO: {
            const {index} = action.payload;
            state[index].complete();
            return [...state];
        }

        case DELETE_TODO: {
            const {index} = action.payload;
            state.splice(index, 1);
            return [...state];
        }


        default:
            return state;
    }
}
