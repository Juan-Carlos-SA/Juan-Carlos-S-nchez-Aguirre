//definir clases con atributos dentro del constructor

class persona{
    constructor(nombre,edad,sexo,direccion){
        this._nombre=nombre
        this._edad=edad
        this._sexo=sexo
        this._direccion=direccion
    }
    //Metodo saludar
    saludar(){

        console.log(`hola ${this.nombre}`);
    }
    //encapsulamiento seltter y getter
    get nombre(){
        return this._nombre
    }
    set nombre(values){
        this._nombre=values
    }
}
let persona1=new persona("juca",23,"m","balancan")
persona1.nombre="dany"
console.log(persona1);
persona1.saludar()


