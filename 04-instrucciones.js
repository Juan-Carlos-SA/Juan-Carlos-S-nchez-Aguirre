const prompt=require("prompt-sync")();
/*
let numero1=;
let nuemro2=;

numero1=parseInt(prompt("ingrese el numero 1: "))
nuemro2=parseInt(prompt("ingrese valor 2: "))


console.log(numero1*nuemro2); */


/* realizar un promgrama que contenga un arreglo indefinido en el que 
solicite a traves de teclado el tamaño y se ingrese por lo menos 4 
valores de cualquier tipo, imprimir los valores en pantalla */


/* let arreglo=[];

function infoarreglo(){
    const dimension=parseInt(prompt("ingresa el tamaño del array: "))
    for (let i=0 i<dimension; i++
        let (datos=prompt("ingresa los datos: ")
        arreglo[i]=datos
        arreglo.push(datos)
    )   
} */


/* 
let informacion
const datos=()=>{
    const dimension=parseInt(prompt("ingresa el tamaño del array: "))
    for (let i=0 i<dimension; i++
      let (datos=prompt("ingresa los datos: ")
            arreglo[i]=datos
            arreglo.push(datos)
        )   

} */
let arreglo=[];

let info
const datos=()=> {
    const dimension=parseInt(prompt("ingresa el tamaño del arreglo"))
    for (let i=0; i<dimension;i++){
        let nombre=prompt("ingresa el nombre: ")
        let edad=parseInt(prompt("ingresa edad: "))
        info={
            nombre,
            edad,
        }
        arreglo.push(info)
    }

    arreglo.map((handsome)=> {
        console.log(
            `el nombre es ${handsome.nombre} y tiene ${handsome.edad} años`
        );
        
    })

    console.log(arreglo);
    
}
datos()