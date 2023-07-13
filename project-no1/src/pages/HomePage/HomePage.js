// then, custom imports
import Blog from './Blog/Blog';
import MyAccount from './MyAccount/MyAccount';
import Todos from './Todos/Todos';

const HomePage = () => {
  return (
    <div>
      <h1>React Core Concepts and Hooks</h1>

      <h2>
        Demo of React Hooks | useState, useEffect, useRef, useReducer,
        useContext
      </h2>
      <MyAccount />
      <hr />

      <Blog />
      <hr />

      <Todos />

    </div>
  );
};

export default HomePage;
