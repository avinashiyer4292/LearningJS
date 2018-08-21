// *************************** For each implementation *************************

// arr.forEach( function(curr, index, array){} )
Array.prototype.myForEach = function(callback){
    for(let i=0;i < this.length;i++){
        callback(this[i], i, this);
    }
}

// let arr = [1,2,3,4,5];
// arr.myForEach( (curr, index, arr) =>{
//     console.log(`Hey this is ${curr}`);
// });


// **************************** Map implementation *******************************
// Array.prototype.myMap = function(callback){
//     let result=[];
//     for(let i=0;i<this.length;i++){
//         result.push(callback(this[i], i , this));
        
//     }
//     return result;
// }

// let arr = [1,2,3,4,5];
// let arr2 = arr.myMap( (curr,index, arr) => {
//     return curr*10;
// })

// console.log(`Arr2 : ${arr2}`);



// *************************** Filter implementation ******************************

Array.prototype.myFilter = function(callback){
    let result = [];
    for(let i=0;i < this.length;i++)
        if(callback(this[i],i, this))
            result.push(this[i]);
    return result;
}

let arr = [1,2,3,4,5];
let arr2= arr.myFilter( (curr, index, arr) => {
    return curr> 3;
});
console.log(`Arr2: ${arr2}`);