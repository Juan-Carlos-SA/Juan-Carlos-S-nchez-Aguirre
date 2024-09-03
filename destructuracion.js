/* tema destructuracion y spread operation */

const persona={
    nombre:"juan",
    edad:19,
    sexo:"M"
}

/* let nombre,edad,sexo */
/* ({nombre,edad,sexo}=persona) */

/* console.log(sexo);
 */

/* let {...datos}=persona */ /*este es spread operation*/
 let {nombre:name}=persona
 /* datos.nombre="alejandro" */
console.log(name);


/* let nombre,edad;
({nombre,edad,...info}=persona) */