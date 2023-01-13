import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux'
import { RootState } from './reducers';
import { useDispatch } from 'react-redux/es/exports';
import axios from 'axios';

function App() {
  const [todoValue, setTodoValue] = useState("")

  const todos: string[] = useSelector((state: RootState) => state.todos)
  const counter = useSelector((state: RootState) => state.counter)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const fetchPosts: any = () => {
    return async function fetchPostsThunk(dispatch: any, getState: any) {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
      dispatch({ type: "FETCH_POSTS", payload: response.data })
    }
  }

  const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch({ type: "ADD_TODO", text: todoValue })
    setTodoValue("")
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(event.target.value)
  }
  return (
    <div className="App">
      <p>
        Clicked: {counter} times
      </p>
      {' '}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      {' '}
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <ul>
        {todos.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>
      <form onSubmit={addTodo}>
        <input type="text" value={todoValue} onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
