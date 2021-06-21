let input = require('fs').readFileSync('./dev/stdin').toString().replace(/\r/g, "").split("\n").join(' ').split(' ').map(Number);

 let N = input[0];

let arr = [];
let obj = [];

arr = input.slice(1, N*2-1);
let M  = input[N*2-1];
console.log('m개',M,input.slice(N*2), input.length);
let query = input.slice(N*2, input.length);

console.log('N개',N,arr);
for(let i = 0; i<arr.length; i+=2) {      2n
    console.log(arr[i] , arr[i+1]);
    obj.push([arr[i], arr[i+1]]);
}
console.log(arr);
console.log('obj', obj);

let tree = [];

for(let i = 0; i<N; i++) {
    tree.push([]);
}


 for(let Data of obj) {
     console.log(`tree[${Data[0]}].push(${Data[1]})`);
     console.log(`tree[${Data[1]}].push(${Data[0]})`);

     tree[Data[0]-1].push(Data[1]);
     tree[Data[1]-1].push(Data[0]);
}

for(let Data of tree) {
    console.log(Data);
}

var Tree = function(a) {
    this.data =  a;
    this.child = [];
    this.parent = null;
}

let treedic = [];


for(let Data of tree) {
    for(let Data_ of Data) {
    }
}

for(let i = 0; i<N; i++) {
    treedic[i] = [];
}



for(let i = 0; i<tree.length; i++) {
    for(let j = 0; j<tree[i].length; j++) {
        console.log(tree[i], tree[i][j]);

        treedic[i].push(tree[i][j]);
    }
}


for(let i = 0; i<treedic.length; i++) {
    for(let j = 0; j<treedic[i].length; j++) {
        let v = treedic[i][j];
        treedic[v-1][treedic[v-1].indexOf(i+1)] 
        treedic[v-1].splice(treedic[v-1].indexOf(i+1),1);
    }
}



for(let i = 0; i<treedic.length; i++) {
    treedic[i].sort((a,b) => a-b);
}

console.log('treedic after', treedic);



let depth = [];
let nodeNum = [];
let count = 0;

function dfs(index, _depth) {    
    depth[count] = _depth;
    nodeNum[count] = index + 1;
    count++;
    console.log(treedic[index].length, index+1);
    for(let i = 0; i < treedic[index].length; i++) {
        
        if(treedic[treedic[index][i] - 1] == undefined) continue;

        dfs(treedic[index][i] - 1, _depth+1);
        depth[count] = _depth;
        nodeNum[count] = index+1;   
        count++;
    }
    if(count == N) return;
}

console.log(`dfs(0,0)`)

dfs(0,0, 0);
console.log('hey')
console.log('depth', depth)

for(let i = 0; i<depth.length; i++) {
    console.log('depth: ',depth[i], "nodeNum: ", nodeNum[i])
}


