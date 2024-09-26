// quicksort recursivo 

function quicksortrecursivo(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let pivote = arr[0]
    let menores = []
    let mayores = []

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivote) {
            menores.push(arr[i])
        } else {
            mayores.push(arr[i])
        }
    }

    return [...quicksortrecursivo(menores), pivote, ...quicksortrecursivo(mayores)]
}

let datos = [1, 3, 2, 4, 5, 7, 6, 8]
let resultado = quicksortrecursivo(datos)
console.log("quicksort recursivo: ", resultado);



//quicksort no recursivo

function quicksortiterativo(arra){
    let stack=[]
    stack.push([0,arra.length - 1])

    while(stack.length){
        let [inicio,fin]= stack.pop()

        if (inicio<fin){
            let pivoteindex=partition(arra,inicio,fin)

            stack.push([inicio,pivoteindex-1])
            stack.push([pivoteindex+1,fin])
        }
    }
    return arra
}

//funcion adicional para particionar el array

function partition(arra,inicio,fin){
    let pivotes = arra[fin]
    let i=inicio
    for (let j=inicio; j<fin; j++){
        if (arra[j]< pivotes){
            [arra[i],arra[j]]=[arra[j],arra[i]]
            i++
        }
    }

    [arra[i],arra[fin]]=[arra[fin],arra[i]]
    return i;
}


let datitos =[4,2,3,1,5]
let resultadoiterativo=quicksortiterativo(datitos)
console.log("quicksort no recursivo: ", resultadoiterativo);
