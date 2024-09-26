// bubble no recursivo

function bubblesort(arra) {
    let n = arra.length;
    let swapped;

    do {
        swapped = false
        for (let i = 0; i < n - 1; i++) {
            if (arra[i] > arra[i + 1]) {
                [arra[i], arra[i + 1]] = [arra[i + 1], arra[i]];
                swapped = true
            }
        }
    } while (swapped);

    return arra
}

let datos = [34, 23, 2, 4, 1, 3, 5, 9, 7, 6]

let resultado = bubblesort(datos)

console.log("arreglo ordenado:", resultado); 


// bubble recursivo

function bubblerecursivo(arr, n = arr.length) {
    if (n === 1) return arr
    let swapped=false
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped=true
        }
    }
    if(!swapped) return arr
    return bubblerecursivo(arr, n - 1)
}

let datitos = [11, 1, 3, 2, 4, 5, 7, 6, 8, 9, 10];

let resultao = bubblerecursivo(datitos)

console.log("arreglo ordenado: ", resultao);
