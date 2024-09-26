//heapsort no recursivo
function heapsort(array) {
    const n = array.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(array, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        [array[0], array[i]] = [array[i], array[0]]
        heapify(array, i, 0);
    }
    return array;
}

function heapify(array, n, i) {
    let largest = i
    const left = 2 * i + 1
    const right = 2 * i + 2


    if (left < n && array[left] > array[largest]) {
        largest = left;
    }


    if (right < n && array[right] > array[largest]) {
        largest = right
    }


    if (largest !== i) {
        [array[i], array[largest]] = [array[largest], array[i]]
        heapify(array, n, largest)
    }
}



//heapsort recursivo

function heapsortRecursivo(array) {
    const n = array.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapifyRecursivo(array, n, i);
    }


    for (let i = n - 1; i > 0; i--) {
        [array[0], array[i]] = [array[i], array[0]]; 
        heapifyRecursivo(array, i, 0);
    }
    return array;
}

function heapifyRecursivo(array, n, i) {
    let largest = i
    const left = 2 * i + 1
    const right = 2 * i + 2 

    
    if (left < n && array[left] > array[largest]) {
        largest = left;
    }
    
    if (right < n && array[right] > array[largest]) {
        largest = right;
    }

    
    if (largest !== i) {
        [array[i], array[largest]] = [array[largest], array[i]]
        heapifyRecursivo(array, n, largest)
    }
}

let datitos = [170, 35, 45, 69, 78, 2, 4, 3, 1]
console.log("Heap Sort No Recursivo: ", heapsort(datitos))
console.log("Heap Sort Recursivo: ", heapsortRecursivo([...datitos]))
