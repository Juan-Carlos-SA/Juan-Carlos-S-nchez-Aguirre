//bucketsort no recursivo

function bucketsort(arr){
    const n= arr.length
    if (n<=0) return arr

    const buckets=Array.from({length:n}, ()=>[])

    for (let num of arr){
        const bucketindex=Math.floor(num*n)
        buckets[bucketindex].push(num)
    }
    return buckets.reduce((sorted, buckets)=>{
        return sorted.concat(buckets.sort((a,b)=>a-b))
    },[])
}


let datos= [0.23,0.45,0.12,0.67,0.34]
console.log("bucketsort no recursivo: ",bucketsort(datos));


//bucketsort recursivo

function bucketsortrecursivo(array){
    const ñ=array.length
    if (ñ<=0)return array

    const bucketss=Array.from({length:ñ},()=>[])
    for (let num of array){
        const bucketindexx =Math.floor(num*ñ)
        bucketss[bucketindexx].push(num)
    }
    return bucketsortrecursivohelper(bucketss,0,ñ)

}

function bucketsortrecursivohelper(bucketss,index,ñ){
    if (index>=ñ)return []

    const sortedbucket=bucketss[index].sort((a,b)=>a-b)

    return sortedbucket.concat(bucketsortrecursivohelper(bucketss,index+1,ñ))
}

let datitos=[0.23,0.30,0.2,0.43,0.50]
console.log("bucketsort recursivo: ",bucketsortrecursivo(datitos));
