import { useEffect, useReducer, useRef } from 'react';
import todosReducer from '../../../reducers/todosReducer';
import axios from 'axios';

const Todos = () => {
  const todoInput = useRef();
  const [todoState, todoDispatch] = useReducer(todosReducer, []); // second param is initialState
  console.log(todoState); // now undefined. you can get the list of todos here
  console.log(todoDispatch); // fn. using this you can fetch, add, update, delete the todos

  useEffect(() => {
    // send rest api calls to the backend.
    // upon successful data fetching... dispatch with the action type and payload
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then((res) => {
        console.log(res.data);
        todoDispatch({
          type: 'LIST_TODOS',
          payload: res.data
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  const handleAddTodo = () => {
    console.log(todoInput.current.value); // entered todo
    // dispatcher fn should be called with action obj
    // action obj must have type property.
    // action obj can have payload property.
    todoDispatch({
      type: 'ADD_TODO',
      payload: {
        id: Math.floor(Math.random() * 10000),
        title: todoInput.current.value,
        completed: false
      }
    });

    todoInput.current.value = '';
  };

  return (
    <div>
      <h2>Todos App | Demo of useReducer Hook</h2>

      <input type="text" placeholder="Enter Your Todo" ref={todoInput} />
      <button type="button" onClick={handleAddTodo}>
        Add Todo
      </button>

      <div className="card">
        <ul className="list-group list-group-flush">
          {todoState?.map((todo) => {
            return (
              <li className="list-group-item" key={todo.id}>
                {todo.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
