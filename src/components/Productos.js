import React, { Component } from "react";

class Productos extends Component {
    state = {
        productos : [
            { id : 1, name : "Camisa ReactJS", precio: 30 },
            { id : 2, name : "Camisa VueJS", precio: 30 },
            { id : 3, name : "Camisa Angular", precio: 30 },
            { id : 4, name : "Camisa Node.js", precio: 30 }
        ]
    }
    render() {

        const {productos} = this.state;
        console.log(productos);
        return ( 
            <h1>Lista de Productos</h1>
        );
    }
}

export default Productos;