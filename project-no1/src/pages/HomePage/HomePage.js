import Blog from "./Blog/Blog";
import MyAccount from "./MyAccount/MyAccount";

const HomePage = () => {
  return (
    <div>
      <h1>React Core Concepts and Hooks</h1>

      <h2>Demo of React Hooks | useState, useEffect, useRef</h2>
      <MyAccount />
      <hr/>

      <Blog />

    </div>
  )
}

export default HomePage;
