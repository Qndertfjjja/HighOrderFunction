let input=[5,10,15,20]
function fn(acc,element){
    return acc+element
}
let output=input.reduce(fn,0)
console.log(output)