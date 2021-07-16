
let input = require('fs').readFileSync('./dev/stdin').toString().split("\n");


let n = input[0];



let arr = input.slice(1, input.length).map(Number); 
solve(arr)

function solve(arr) {


    arr.sort((a,b) => {
        return Number(a)-Number(b);
    });
    
    for(data of arr) {
        console.log(data.toString());
    }

}
    

