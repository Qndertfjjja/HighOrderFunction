let input=[1,2,3,4,5]
function odd(element){
    if(element%2==0){
        return true;
    }
}
 input=input.filter(odd)
function square(element){
    return element*element;
}
 input=input.map(square)
 function sum(acc,element){
    return acc+element;
 }
 input=input.reduce(sum,0)
 console.log(input)