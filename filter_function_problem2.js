let input=[1,2,3,4,5,6]
function fn(element){
    if(element%2==0){
        return true;
    }
}
let output=input.filter(fn)
console.log(output)