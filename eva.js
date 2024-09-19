//evaluacion tema 1
const prompt = require("prompt-sync")()


class cooperativa {
    constructor(nombre, apellido, rfc, direccion, telefono, horastrabajadas, costoporhora) {
        this._nombre = nombre
        this._apellido = apellido
        this._rfc = rfc
        this._direccion = direccion
        this._telefono = telefono
        this._agregar = []
        this._sueldo = 0
        this._costosporhora = costoporhora
        this._horastrabajadas = horastrabajadas
    }
    //getter 
    //setter

    agregar() {
        let tam = parseInt(prompt("cantidad de empleados a dar de alta: "))
        for (let i = 0; i < tam; i++) {
            this._nombre = prompt("ingresa el nombre del empleado: ")
            this._apellido = prompt("ingresa el apellido del empleado: ")
            this._rfc = prompt("ingresa el rfc del empleado: ")
            this._direccion = prompt("ingresa la direccion del empleado: ")
            this._telefono = parseInt(prompt("ingresa el telefono del empleado: "))
            this._horastrabajadas = parseInt(prompt("numero de horas trabajadas: "))
            this._costosporhora = parseFloat(prompt("ingresa el costo por hora: "))

        }

        let empleados = {
            nombre: this._nombre,
            apellido:this._apellido,
            rfc:this._rfc,
            direccion:this._direccion,
            telefono:this._telefono,
            horastrabajadas: this._horastrabajadas,
            costoporhora: this._costosporhora,
            sueldo: this.calcularsueldo()

        }
        this._agregar.push(empleados)
    }



    calcularsueldo() {
        if (this._horastrabajadas > 8) {
            this._sueldo = this._costosporhora * this.horastrabajadas
            return this._sueldo=this._costosporhora*0.15
        } else {
            return this._sueldo = this._costosporhora * this.horastrabajadas

        }

    }

    eliminar() {
        this._agregar.length > 0 ? this._agregar.pop() : console.log("no hay registros de eliminar");


    }


    mostrarempleados() {
        this._agregar.length > 0 ? this._agregar.map((emp) => {
            console.log(`nombre es ${emp.nombre} y tiene un sueldo ${emp.sueldo}`);

        }) : console.log("no hay empleados que mostrar");



    }
}

let empleo = new cooperativa()
empleo.agregar()
empleo.mostrarempleados()
empleo.eliminar()

