let dol1 =96
let dol2 =108
let dol3 =89

let avgdol = ((dol1+dol2+dol3)/3)
console.log(avgdol)

let koa1 =88
let koa2 =91
let koa3 =110

let avgkoa = ((koa1+koa2+koa3)/3)
console.log(avgkoa)

if(avgdol>avgkoa) {
    console.log("Os dolphins ganham o troféu")
} else {
    if(avgdol===avgkoa) {
        console.log("as equipas empatam")
    } else {
    console.log("Os Koalas ganham o troféu")
}
}

//correção 

if (avgdol === avgkoa) {
    console.log("ambos ganham o troféu")
} else if (avgdol > avgkoa) {
    console.log("os dolphins ganham o troféu")
} else {
    console.log("os koalas ganham o troféu")
}

