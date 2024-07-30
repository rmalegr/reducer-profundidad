export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    // case 'ADD_TODO':
    //   return [...initialState, action.payload]
    case "[TODO] Add Todo":
      return [...initialState, action.payload];
    //[{type : {todo remove], payload:id}}]
    case "[TODO] Remove Todo":
      return initialState.filter((todo) => todo.id != action.payload);
    case "[TODO] Toggle Todo":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });

    default:
      return initialState;
  }
};
