import TodoItem from "./TodoItem";

function TodoList({ todos = [], onDeleteTodo, onToggleTodo }) {
  return (
    // TodoItem
    <ul className="list-group">
      {todos.map((todo) => (
        //TodoItem
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
