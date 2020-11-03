let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");

function solve(n) {

    let arr = [];
    arr[0] =  BigInt(0);
    arr[1] = BigInt(1);

    for(let i = 2; i<=n; i++) {
        arr[i] = BigInt(arr[i-1] + arr[i-2]);
    }
    console.log(arr[arr.length-1].toString().replace("n", ""));
}
solve(Number(input[0]));