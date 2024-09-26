/* class persona{
    constructor(nombre,edad,sexo,direccion,telefono){
        this._nombre=nombre
        this._edad=edad
        this._sexo=sexo
        this._direccion=direccion
        this._telefono=telefono
    }*/

const prompt = require("prompt-sync")();


class personas {
    constructor(Nombre, apellido, sexo, direccion, telefono) {
        this._Nombre = Nombre
        this._apellido = apellido
        this._sexo = sexo
        this._direccion = direccion
        this._telefono = telefono
    }

}

let persona = () => {
    let nuevapersona = parseInt(prompt("numero de personas: "))
    for (let i = 0; i < nuevapersona; i++) {
        let personita = new personas(
            prompt("ingresa el nombre: "),
            prompt("ingresa el apellido: "),
            prompt("ingresa el sexo: "),
            prompt("ingresa la dirección: "),
            parseInt(prompt("ingresa el numero telefonico: "))
        )
        console.log(personita)

    }

}
persona()