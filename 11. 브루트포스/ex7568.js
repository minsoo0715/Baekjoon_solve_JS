const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function(line) {


  let temp =  line.split(' ').map((el) => el)
  input = input.concat(temp);
  

}).on("close", function() {
    play();
    process.exit();
  
});


function play() {
    let n = input[0];
    let info = [];
    let rank = [];
    for(let i = 0; i<n; i++) {
       info[i] = new Array([input[i*2+1],input[i*2+2]])
       rank[i] = 1;
    }

    
    for(let i = 0; i<n; i++) {
        for(let j = 0; j<n; j++) {
            if(i == j) continue;

               if(info[i][0][0] > info[j][0][0] && info[i][0][1] > info[j][0][1]) {
                rank[j]++;
            }

        }
    }
   
    let rs = "";
    rank.forEach((value) => rs+=`${value} `);
    console.log(rs);



}



  