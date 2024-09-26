//selectionsort no recursivo

function selectionsort(array) {
    let n = array.length

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j
            }
        }
        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]]

        }
    }
    return array
}

let datitos = [1, 3, 2, 5, 4]
console.log("selectionsort no recursivo: ", selectionsort(datitos));



//selectionsort recursivo

function selectionsortrecursivo(arr, startindex = 0) {
    let ñ = arr.length
    if (startindex >= ñ - 1) return arr

    let min = startindex
    for (let k = startindex + 1; k < ñ; k++) {
        if (arr[k] < arr[min]) {
            min = k
        }
    }
    if (min !== startindex) {
        [arr[startindex], arr[min]] = [arr[min],arr[startindex]]
    }
    return selectionsortrecursivo(arr, startindex + 1)
}

let dato = [3, 2, 5, 4, 1]
console.log("selectionsort recursivo: ", selectionsortrecursivo(dato));

