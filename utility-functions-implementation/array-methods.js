// *************************** For each implementation *************************

// arr.forEach( function(curr, index, array){} )
Array.prototype.myForEach = function(callback){
    for(let i=0;i < this.length;i++){
        callback(this[i], i, this);
    }
}

let arr = [1,2,3,4,5];
arr.myForEach( (curr, index, arr) =>{
    console.log(`Hey this is ${curr}`);
});

console.log(`arr is: ${arr}`);