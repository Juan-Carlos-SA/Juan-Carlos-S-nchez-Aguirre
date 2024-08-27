/*.MAP
let dimensiones =[
    [1,2,3], [4,5,6]
]

const arreglo = () => {
    dimensiones.map((datos, index) => {
        datos.map((valores, i) => {
            console.log(`${i}=${valores}`);
            
        })
    })
}

arreglo()
*/

/*FOR IN

let dime2 =[
    [7,8,9],
    [2,2,1]
]

const arreglo2 = () => {
    for (let bacalao in dime2) {
        let pescao = dime2[bacalao]
        for (let i in pescao) {
            console.log(i);
            
        }
    }
}

arreglo2()

*/


/*FOR OF

let dime3 = [
    [90,70,90],
    [60,40,100]
]

const arreglotripas = () => {
    for (let datingos of dime3) {
        for (let valor of datingos) {
            console.log(`${datingos.indexOf(valor)} = ${valor}`);
            
        }
    }
}

arreglotripas()


*/


/*FUNCION FLECHA

let NUM = [
    [7,9,10],
    [4,5,7]
]

const arregloflecha = () => NUM.forEach((perroasado) =>
    perroasado.forEach((valo, ñ) => console.log(`${ñ} = ${valo}`))
)

arregloflecha()

*/



/*WHILE

let numr = [
    [9,5,4],
    [3,8,2]
]

const perron = () => {
    let i = 0
    while (i < numr.length) {
        let j = 0;
        while (j < numr[i].length) {
            console.log(`${j} = ${numr[i][j]}`)
            j++;
        }
        i++;
    }
}

perron();
*/