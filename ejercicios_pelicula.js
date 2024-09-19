const prompt = require("prompt-sync")()


 class cooperativa {
    constructor(nombre, nummembresia, estadocliente, direccion, telefono) {
        this._nombre = nombre
        this._nummembresia= nummembresia
        this._estadocliente= estadocliente
        this._direccion = direccion
        this._telefono = telefono
        this._agregar = []
 
    }

    agregar() {
        let tam = parseInt(prompt("cantidad de clientes a dar de alta: "))
        for (let i = 0; i < tam; i++) {
            this._nombre = prompt("ingresa el nombre del cliente: ")
            this._nummembresia = parseInt(prompt("ingresa el num. de membresia: "))
            this._estadocliente = prompt(" eres deudor? si/No ")
            this._direccion = prompt("ingresa la direccion del cliente: ")
            this._telefono = parseInt(prompt("ingresa el telefono del cliente: "))
        }

        let clientes = {
            nombre: this._nombre,
            nummembresia:this._nummembresia,
            estadocliente:this._estadocliente,
            direccion:this._direccion,
            telefono:this._telefono,
        }
        this._agregar.push(clientes)
    }

    mostrarclientes() {
        this._agregar.length > 0 ? this._agregar.map((cli) => {
            console.log(`nombre es ${cli.nombre} y  ${cli.estadocliente} tiene deudas`);

        }) : console.log("no hay clientes que mostrar");



    }
}

let clientes = new cooperativa()
clientes.agregar()
clientes.mostrarclientes()



