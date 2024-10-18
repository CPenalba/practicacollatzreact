import React, { Component } from "react";

export default class Collatz extends Component {
  state = {
    numeros: [],
  };

  mostrarCollatz = () => {
    let numero = parseInt(this.props.numero);
    let aux = [];
    aux.push(numero);
    this.state.numeros.push(numero);
    while (numero != 1) {
      if (numero % 2 == 0) {
        numero = numero / 2;
      } else {
        numero = numero * 3 + 1;
      }
      aux.push(numero);
    }
    this.setState({
      numeros: aux,
    });
  };

  componentDidMount = () => {
    this.mostrarCollatz();
  };

  render() {
    return (
      <div>
        <h1>Conjetura de Collatz</h1>
        <h3 style={{ style: "red" }}>Numero: {this.props.numero}</h3>
        <ul>
          {this.state.numeros.map((numero, index) => {
            return <li key={index}>{numero}</li>;
          })}
        </ul>
      </div>
    );
  }
}
