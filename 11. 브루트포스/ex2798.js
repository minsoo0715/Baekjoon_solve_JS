const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function(line) {


  let temp =  line.split(' ').map((el) => parseInt(el))
  input = input.concat(temp);


}).on("close", function() {
    play();
  process.exit();
  
});




function play() {

    let n = input[0];
    let m = input[1];
    let max = -1;
    let num = [];
    for(let i = 0; i<n; i++) {
        num[i] = input[i+2];
    }
    
    
    for(let i = 0; i<n; i++) {
        for(let j = 0; j<n; j++) {
            for(let k = 0; k<n; k++) {
                
                if(i == j || j == k || i == k) continue;
    
    
                let value = Number(num[i]) + Number(num[j]) + Number(num[k]);
                if(Number(max) < Number(value) && value<=m) {
                     max = value;
                    if(max == m) break;
                }
            }
        }
    }
    
    console.log(max);
}


  