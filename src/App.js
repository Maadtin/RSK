import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, fetchTodos } from './store/slices/todosSlice';

function App() {

  const todos = useSelector(state => state.todosReducer.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <div className="App">
      <h1>Todos</h1>
      {todos.map(todo => {
        return <li key={todo.id}>{todo.title}</li>
      })}>
    </div>
  );
}

export default App;
