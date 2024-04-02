let numbers=[1,5,3,4,2];

// first approach

function myReducer(array,reducer,initial){
    let acc=initial;
    for(let i=0;i<array.length;i++){
        acc=reducer(acc,array[i],i,array);
    }
    return acc
}


//to get the sum by using reduce

// sum=myReducer(numbers,(a,b)=>{return a+b},0)
// console.log(sum)

//to get the largest by using reduce

const large=myReducer(numbers,(acc,curr)=>{
    if(curr>acc){
        return curr;
    }else{
        return acc
    }
},0);
console.log(large)


//second approach

// function myReduce(reducer,initial){
   
//     for(let i=0;i<this.length;i++){
//         initial=reducer(initial,this[i],this);
//     }
//     return initial
// };
// Array.prototype.myReduce=myReduce;
// const sum=numbers.myReduce((acc,curr)=>acc+curr,0)
// console.log(sum)
