import React, { Component } from 'react'

export class Formulariocss extends Component {
  render() {
    return (
        <form>
        <label for="Nombre">Nombre:</label>
        <input type="text" name="nombre" placeholder="Escribre el nombre" />
        <br></br>
        <label for="Apellido">Apellido:</label>
        <input type="text" name="apellido" placeholder="Escribre el apellido" />
      </form>
    )
  }
}

export default Formulariocss