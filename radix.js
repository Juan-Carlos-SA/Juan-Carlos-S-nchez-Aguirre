//radixsort no recursivo

function radixsort(array) {
    const max = Math.max(...array)

    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countingsort(array, exp);
    }
    return array
}



function countingsort(array, exp) {
    const n = array.length
    const output = new Array(n)
    const count = new Array(10).fill(0)

    for (let i = 0; i < n; i++) {
        count[Math.floor((array[i] / exp) % 10)]++
    }

    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1]
    }

    for (let i = n - 1; i >= 0; i--) {
        output[count[Math.floor((array[i] / exp) % 10)] - 1] = array[i]
        count[Math.floor((array[i] / exp) % 10)]--;
    }

    for (let i = 0; i < n; i++) {
        array[i] = output[i]
    }
}

let datitos = [170, 35, 45, 69, 78, 2, 4, 3, 1]

console.log("radixsort no recursivo: ", radixsort(datitos));


//radixsort recursivo

function radixsortrecursivo(array){
    const max= Math.max(...array)
    return radixsorthelper(array,max,1)
}

function radixsorthelper(array,max,exp){
    if (Math.floor(max/exp)<=0) return array
    countingsort(array,exp)
    return radixsorthelper(array, max,exp*10)
}

console.log("radixsort recursivo: ",radixsortrecursivo([...datitos]));
