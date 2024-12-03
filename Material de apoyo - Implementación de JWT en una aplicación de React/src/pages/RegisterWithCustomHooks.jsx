import useInput from "../hooks/useInput";

const RegisterWithCustomHooks = () => {
  // Maneja el estado inicial de los campos
  const email = useInput("");
  const password = useInput("");

  // {
  //   value: "",         // El valor actual del input
  //   onChange: handleChange, // Función para manejar cambios en el input
  // }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email.value, password.value);
  };

  // <input {...email} />:
  // El operador spread (...) descompone el objeto email y agrega sus propiedades (value y onChange) al input:
  // es lo mismo que esto:

// <input 
//   type="email" 
//   placeholder="Email" 
//   value={email.value} 
//   onChange={email.onChange} 
// />


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        {...email}
      />
      <input
        type="password"
        placeholder="Password"
        {...password}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegisterWithCustomHooks;
