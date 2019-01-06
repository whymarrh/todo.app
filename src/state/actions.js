export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export function addTodo(name) {
    return {type: ADD_TODO, payload: {name}};
}

export function completeTodo(index) {
    return {type: COMPLETE_TODO, payload: {index}};
}

export function deleteTodo(index) {
    return {type: DELETE_TODO, payload: {index}};
}
