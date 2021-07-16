let input = require('fs').readFileSync('./dev/stdin').toString().split("\n");

let sum = []
let res = [];

for(let i = 0; i<input.length; i++) {
    let item = Number(input[i])
    sum[item] == undefined ? sum[item] = 1 : ++sum[item]
}
let temp = 0;
for(let i = 0; i<sum.length; i++) {
    if(sum[i] == undefined) continue;
    temp += Number(sum[i]);
    sum[i] = temp;
}

for(let i = 0; i<input.length; i++) {
    res[--sum[input[i]]] = input[i]
}
for(let i = 0; i<res.length; i++) {
    console.log(Number(res[i]))
}
// 메모리 부족 nodejs는 웁니다...

