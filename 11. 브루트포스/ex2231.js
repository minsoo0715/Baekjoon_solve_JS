const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let count = 0;

rl.on("line", function(line) {


  let temp =  line.split(' ').map((el) => el)
  input = input.concat(temp);
  rl.close()


}).on("close", function() {
    play();
  process.exit();
  
});


function getSum(num) {
    let m = []
    let rs = Number(num);
    for(let i = 0; i<num.length; i++) {
        m[i] = Number(num.charAt(i));
    }

    for(let j = 0; j<m.length; j++) {
         rs+=m[j];
    }


    return rs;

}

function play() {
     
    let rs = 0;
    let n = input[0];
    
    for(let i = 1; i<=Number(n); i++) {
        let temp = getSum(i.toString());
        if(n == temp) { 
            rs = i;
            break;
        }
    }


    console.log(rs);



}


  