import React, { Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListaProductos from "./components/ListaProductos";

function App() {
  const fecha = new Date().getFullYear();
  return (
    <Fragment>
      <Header
        titulo = "Tienda Virtual"
      />

      <ListaProductos/>

      <Footer
        fecha = {fecha}
      
      />
    
    </Fragment>
  );
}


export default App;
