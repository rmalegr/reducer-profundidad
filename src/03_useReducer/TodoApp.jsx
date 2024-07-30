import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
//Initial State
const initialState = [
  // {
  //   id: new Date().getTime() * 3,
  //   description: "Recolectar la piedra del alma",
  //   completed: false,
  // },
];
const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

// -> INicio de la Apicación
function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    //leer todos y serializarlos como el loclstorage lee strings no objetos
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log(todos);
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    //usamos el dispatch para mandar esta accion
    dispatch(action);
  };

  const handleDeleteTodo = (todoId) => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: todoId,
    };
    dispatch(action);
  };

  const handleToggleTodo = (todoId) => {
    console.log({ todoId });
    const action = {
      type: "[TODO] Toggle Todo",
      payload: todoId,
    };
    dispatch(action);
  };

  return (
    <div className="container">
      <h1>
        Todo App: 10 <small>pendientes: 2</small>{" "}
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          {/* TodoList */}
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          {/* TodoAdd onNewTodo( todo )
          id: new Date()..., decription:'', completed:false */}
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </div>
  );
}

export default TodoApp;
