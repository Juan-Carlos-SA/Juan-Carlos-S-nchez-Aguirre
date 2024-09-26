//insactionsort no recursivo

function insactionsort(array) {
    const n = array.length

    for (let i = 1; i < n; i++) {
        let key = array[i]
        let j = i - 1

        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j]
            j--;
        }
        array[j + 1] = key
    }
    return array
}

let datitos = [1, 4, 2, 5, 6, 3, 7]

console.log("insertionsort no recursivo: ", insactionsort([...datitos]));



// recursivo

function insertionsortrecursivo(array, n = array.length) {
    if (n<=1) return array

    insertionsortrecursivo(array, n - 1)

    let key = array[n - 1]
    let j = n - 2

    while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j]
        j--;
    }
    array[j + 1] = key

    return array
}

console.log("insertionsort recursivo: ", insertionsortrecursivo([...datitos]));
