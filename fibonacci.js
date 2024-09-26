/* const prompt=require("prompt-sync")();

let n = parseInt(prompt("cantidad de fibonacci: "))


function fibonacci(n) {
    let arr = (0, 1)
    for (let i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr
}
console.log(fibonacci(6)); */

let fu = () => {
    let primer = 0
    let segundo = 1
    let suce = [0, 1]

    for (let i = 2; i <= 5; i++) {
        let suma = primer + segundo
        primer = segundo
        segundo = suma

        suce.push(suma)
    }
    console.log(suce);
}
fu()