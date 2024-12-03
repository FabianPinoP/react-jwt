import { useState } from "react";

// Se define un custom hook llamado useInput, que toma un argumento initialValue por ejemplo useInput("") en el archivo RegisterWithCustomHooks
const useInput = (initialValue) => {
  //value representa el valor actual del input.
  // setValue es una función para actualizar el valor del estado.
  const [value, setValue] = useState(initialValue);

  // función que se ejecuta cada vez que ocurre un evento de cambio onChange en el input
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange, //  una referencia a la función handleChange, que actualiza ese estado.
  };
};

// El propósito principal es empaquetar estas dos cosas juntas (value y onChange) para que puedan ser utilizadas fácilmente por un componente que use este custom hook

export default useInput;
