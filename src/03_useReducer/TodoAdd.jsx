import React from "react";
import useForm from "../hooks/useForm";

const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetFormState } = useForm({
    description: "",
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      completed: false,
    };
    //Sin existe no se manda a ejecutar
    onNewTodo(newTodo);
    onResetFormState()
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
        placeholder="¿Qué hay que hacer?"
      />
      <button type="submit" className="btn btn-outline-primary mt-1">
        Agregar
      </button>
    </form>
  );
};

export default TodoAdd;
