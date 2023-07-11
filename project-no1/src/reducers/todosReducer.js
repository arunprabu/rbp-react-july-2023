// What's a reducer?
// is a fn that takes in state and an action as inputs 
// must return state 

const todosReducer = (state, action) => {
  /////
  console.log("INSIDE todosReducer");

  // must return updated state
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];

    case 'LIST_TODOS': 
      return action.payload; 

    default:
      return state;
  }
}

export default todosReducer;
