//Crear una lista con diferentes tipos de datos
/* let datos={nombre:"Juan",apellidos:"Sánchez",edad:19,estudiante:false}; */
/* let arreglo=["Dany", 34, true]; */
let datos=[{nombre:"Juan",apellidos:"Sánchez",edad:19,estudiante:false, 
nombre:"navarro",apellidos:"navarro",edad:19,estudiante:true}];
const info = () => {

/*    for (let arr in arreglo)(
        console.log(arreglo[arr])
    )*/

/*     for (let list in datos)(
        console.log(`${list} : ${dato(list)}`)
    ) 
   seleccionar y pulsar alt shift A, para ponerlo en comentario
}*/

/*     let pejelagarto=Object.values(datos);
    pejelagarto.map((data, index) => {
        console.log(`${index} : ${data}`);
    }) */

   /* let elpeje= Object.values(datos)
   for (let data of elpeje){
    let info=data
    console.log(info);
   } */

/*   Object.entries(datos).forEach (([key,value]) => {
    console.log(`${key} : ${value}`);
    
  }) */

    datos.map((data)=>{
        console.log(`El nombre es: ${data,nombre}`);
        
    })
}
info()
