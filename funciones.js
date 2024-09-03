//funciones factoriales (factory functions)
const persona={
    nombre: "juan",
    edad:19
}

const personas={
    nombre: "uan",
    edad:18
}
function datospersona(nombre,edad){
    return{
        nombre,
        edad,

        active:true
    }
}

let persona1=datospersona("dany",24)
let persona2=datospersona("juan",19)
//console.log(persona1,persona2);
//camel case
const datosUsuario={
    nombre:"juanca",
    edad:20,
    password:"123456",
    direccion:{
        colonia:"El Carmen",
        calle:"Principal",
        numext:132
    },
    sueldo:343.28,
     guardarUsuario:function(){    
        console.log("guardar usuario...");
          
     }
} 
//datosUsuario.guardarUsuario()

//Add registros y parámetros a los objetos definidos
const user={id:1}
user.nombre="juanca"
user.guardarUser=function(){
    console.log("guardando user...");
}
/* console.log(user);
user.guardarUser()
 */


//Esto esta mal por que crea otra variavle indefinida
/* let  funcionGuardar=user.guardarUser()
console.log(funcionGuardar);
 */

//objetos definidos
/* const person=Object.freeze ({id:1,nombre:"juan"}) */
const person=Object.seal ({id:1,nombre:"juan"})
person.id=2,
person.nombre="dany"
person.edad=23

/* console.log(person); */

//Pasar funciones como parametros
function pitbull(nombre){
    this._nombre=(nombre)
}

function Animal(en,argumento){
    return new en(argumento)    
}

let Animal1=Animal(pitbull,"firulais")
console.log(Animal1);

