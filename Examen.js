const prompt=require("prompt-sync")();

//Examen primer punto

/* 
class empleados {
    constructor(Nombre, apellido, RFC, direccion, telefono) {
        this._Nombre=Nombre
        this._apellido=apellido
        this._RFC=RFC
        this._direccion=direccion
        this._telefono=telefono
    }


datitos(){
    console.log(`nombre ${this._Nombre} apellidos ${this._apellido}, RFC ${this.RFC}, direccion${this._direccion}, telefono ${this._telefono}`);
    
    }
}

let persona=()=>{
    let nuevoempleado = parseInt(prompt("numero de empleados"))
    for (let i = 0; i<nuevoempleado; i++) {
        let personas= new empleados(
            prompt("ingresa el nombre: "),
            prompt("ingresa el apellido: "),
            prompt("ingresa el RFC: "),
            prompt("ingresa la dirección: "),
            parseInt(prompt("ingresa el numero telefonico: "))
        )
        console.log(personas)
        personas.datitos
        
    }
    
}
persona() */




//Examen segundo punto

/* class empleados {
    constructor(Nombre, apellido, RFC, direccion, telefono) {
        this._Nombre=Nombre
        this._apellido=apellido
        this._RFC=RFC
        this._direccion=direccion
        this._telefono=telefono
    }


datitos(){
    console.log(`nombre ${this._Nombre} apellidos ${this._apellido}, RFC ${this.RFC}, direccion${this._direccion}, telefono ${this._telefono}`);
    }

    despedirultimo(){
        console.log(`saludos estimado ${this._Nombre} ${this._apellido}, desafortunadamente tenemos que despedirte`);
    }

}

let persona=()=>{
    let nuevoempleado = parseInt(prompt("numero de empleados"))
    let Empleados=[]
    for (let i = 0; i<nuevoempleado; i++) {
        let personas= new empleados(
            prompt("ingresa el nombre: "),
            prompt("ingresa el apellido: "),
            prompt("ingresa el RFC: "),
            prompt("ingresa la dirección: "),
            parseInt(prompt("ingresa el numero telefonico: "))
        )

        Empleados.push(personas)
        personas.datitos
        
    }
    Empleados[Empleados.length-1].despedirultimo()
}
persona() */




//Examen tercer punto

/* class empleados {
    constructor(Nombre, apellido, RFC, direccion, telefono) {
        this._Nombre=Nombre
        this._apellido=apellido
        this._RFC=RFC
        this._direccion=direccion
        this._telefono=telefono
    }

     get Nombre(){
        return this._Nombre
    }
     set nombre(nombress){
        this._Nombre=nombress
    }
     get apellido(){
        return this._apellido
    }
     set apellido(apellidoss){
        this._apellido=apellidoss
    }
     get RFC(){
        return this._RFC
    }
     set RFC(rfc){
        this._RFC=rfc
    }
     get direccion(){
        return this._direccion
    }
     set direccion(ubicacion){
        this._direccion=ubicacion
    }
     get telefono(){
        return this._telefono
    }
     set telefono(numero){
        this._telefono=numero
    }
     datitos(){
        console.log(`nombre ${this._Nombre} apellidos ${this._apellido}, RFC ${this.RFC}, direccion${this._direccion}, telefono ${this._telefono}`);
    }
}

let persona=()=>{
    let nuevoempleado = parseInt(prompt("numero de empleados"))
    for (let i = 0; i<nuevoempleado; i++) {
        let personas= new empleados(
            prompt("ingresa el nombre: "),
            prompt("ingresa el apellido: "),
            prompt("ingresa el RFC: "),
            prompt("ingresa la dirección: "),
            parseInt(prompt("ingresa el numero telefonico: "))
        )

        console.log(personas);
        personas.datitos
    }
    
}
persona() */




//Examen cuarto punto

class empleados {
    constructor(Nombre, apellido,trabajo) {
        this._Nombre=Nombre
        this._apellido=apellido
        this._trabajo=trabajo
    }


datitos(){
    let horas=8
    let sueldo=100
    let extra= sueldo+(sueldo*0.15)
    if (this._trabajo > horas) {
        console.log(`eso es todo campeon ${this._Nombre} tu sueldo con extras es de ${extra}`);
    } else {
        console.log(`eso es todo ${this._Nombre} tu sueldo es de ${sueldo}`);
        }
    }
}

let persona=()=>{
    let nuevoempleado = parseInt(prompt("numero de empleados: "))
    for (let i = 0; i<nuevoempleado; i++) {
        let personas= new empleados(
            prompt("ingresa el nombre: "),
            prompt("ingresa el apellido: "),
            parseInt(prompt("ingresa las horas trabajadas: "))
        )
        personas.datitos()
    }
}
persona()