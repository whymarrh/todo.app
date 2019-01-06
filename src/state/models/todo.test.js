import {Todo} from './todo'

describe('Todo model', () => {
    it('should default to having a pending status', () => {
        const todo = new Todo('Example', 'Description', '2018-01-01');
        expect(todo.completed()).toBe(false);
    });

    describe('#description', () => {
        it('should return the constructed value', () => {
            const todo = new Todo('Example', 'Description', '2018-01-01');
            expect(todo.dueDate).toBe('2018-01-01');
        })
    });
});
