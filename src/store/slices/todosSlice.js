import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        setTodos (state, action) {
            state.todos = action.payload;
        },
        addTodo (state, action) {
            state.todos.push(action.payload)
        }
    }
})


export const { addTodo, setTodos } = todosSlice.actions;


export const fetchTodos = () => async dispatch => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json();
    dispatch(setTodos(todos));
}

export default todosSlice.reducer;