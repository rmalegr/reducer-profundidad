import { useEffect, useState } from "react";

const SimpleForm = () => {
  //UseEffect llama aun calback que va a estar ejecutando siempre cada vez que se llama al,
  //se va estar redibujndo cada que el form esté cambiando
  const [formState, setFormState] = useState({
    username: "rmalegre",
    email: "rodrigomalegre@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value, 
    });
  };

  useEffect(() => {
    console.log("usseEffect Called");
  }, []);

  useEffect(() => {
    console.log("formState Changed");
  }, [formState]); //Cada vez que el formulari cambie

  return (
    <div>
      <h1>Formulario Simple </h1>
      <hr />
      <form>
        <label htmlFor="username">Username :</label>
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          name="username"
          value={username}
          onChange={onInputChange}
        />
        <label htmlFor="email">Email</label>
        <input 
          type="email"
          className="form-control"
          placeholder="email"
          name="email"
          value={email}
          onChange={onInputChange} 
        />
      </form>
    </div>
  );
};

export default SimpleForm;
