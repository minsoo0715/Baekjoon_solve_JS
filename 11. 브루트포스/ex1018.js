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
  if(input.length == Number(input[0])+2) {
      rl.close()
  }

}).on("close", function() {
  play()
  process.exit();
  
});



function play() {
    let cnt1 = 0;
    let cnt2 = 0;
    let min = -1;
    let N = Number(input[0])
    let M = Number(input[1])
    let arr = []
    for(let i = 0; i<N; i++) {
        arr.push(input[i+2]);
    }


    for(let m = 0; m<(N-8)+1; m++) {
        for(let n = 0; n<(M-8)+1; n++) {
            for(let i = m; i<=m+7; i++) {
                for(let j = n; j<=n+7; j++) {
                    if( (i+j)%2 == 0) {
                        arr[i][j] != 'W' ? ++cnt1 : ++cnt2
                    }
                    if((i+j)%2 == 1 ) {
                        arr[i][j] != 'B' ? ++cnt1 : ++cnt2
                    }
                }
            }
            let lmin = cnt1 > cnt2 ? cnt2 : cnt1; 
            

            cnt1 = 0;
            cnt2 = 0;
            if(min == -1 || min > lmin) {
                min = lmin;
            }



        }
    }
    console.log(min)

    

}

