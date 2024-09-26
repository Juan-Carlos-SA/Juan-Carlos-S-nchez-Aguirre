//mergesort recursivo

function mergesortrecursivo(arr) {
    if (arr.length <= 1) {
        return arr
    }

    //dividir el array a la mitad

    const mitad = Math.floor(arr.length / 2)
    const izquierda = arr.slice(0, mitad)
    const derecha = arr.slice(mitad)

    return merge(mergesortrecursivo(izquierda), mergesortrecursivo(derecha))
}

//funcion para combinar 2 arrays en uno

function merge(izquierda, derecha) {
    let resultado = []
    let i = 0, j = 0

    while (i < izquierda.length && j < derecha.length) {
        if (izquierda[i] < derecha[j]) {
            resultado.push(izquierda[i])
            i++
        } else {
            resultado.push(derecha[j])
            j++
        }
    }

    return resultado.concat(izquierda.slice(i)).concat(derecha.slice(j))
}

let datos = [6, 5, 4, 7, 3, 2, 9, 1, 0]
let resultado = mergesortrecursivo(datos)
console.log("mergesort recursivo: ", resultado);



//mergesort no recursivo

function mergesortiterativo(array){
    let n=array.length

    for (let tamaño=1; tamaño<n; tamaño*=2){
        for (let izquierdas=0; izquierdas<n-tamaño;izquierdas+=2*tamaño){
            let mitads = izquierdas + tamaño;
            let derechas=Math.min(izquierdas+2*tamaño,n);
            merges(array,izquierdas,mitads,derechas)
        }
    }
    return array
}

//funcion para combinar dos subarrays en el array principal

function merges(array,izquierdas,mitads,derechas){
    let resultao =[]
    let w= izquierdas, k=mitads

    while (w<mitads && k<derechas){
        if (array[w]<array[k]){
            resultao.push(array[w])
            w++
        } else {
            resultao.push(array[k])
            k++
        }
    }

    while (w<mitads) {
        resultao.push(array[w])
        w++
    }
    while (k<derechas){
        resultao.push(array[k])
        k++
    }

    for (let m= izquierdas; m<derechas; m++){
        array[m]=resultao[m-izquierdas]
    }
}

let datitos =[3,4,2,1,5]
let resultadoiterativo=mergesortiterativo(datitos)
console.log("Mergesort no recursivo: ", resultadoiterativo);
