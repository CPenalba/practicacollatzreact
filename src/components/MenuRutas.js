import React, { Component } from "react";

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/collatz/6">Collatz 6</a>
            </li>
            <li>
              <a href="/collatz/9">Collatz 9</a>
            </li>
            <li>
              <a href="noexiste">Sin ruta</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
