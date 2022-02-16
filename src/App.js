import React, { Fragment } from "react";
function App() {
  const empleado = {
    nombre: "Raciel Noel",
    trabajo: "Desarrollador web",
  };
  return (
    <Fragment>
      <h1>{empleado.nombre}</h1>
      <p>{empleado.trabajo}</p>
      { 2 + 2 }
    </Fragment>
  );
}

export default App;
