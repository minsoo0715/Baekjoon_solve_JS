
  const readline = require("readline");

  var scanf = function (input_n) {
    return new Promise(function (resolve, reject) {
     const rl = readline.createInterface({
       input: process.stdin,
       output: process.stdout
     });
     let input = [];

     

     rl.on("line", function(line) {
   
   
       let temp =  line.split(' ').map((el) => parseInt(el))
       input = input.concat(temp);
   
       if(input_n == input.length) rl.close();
       
     
     }).on("close", function() {
       resolve(input);
       
     })
    })
  }

  
let arr = [];
let output = "";

scanf(2).then( (input) => {
   n = input[0];
   m = input[1];

   solve(m, n, 0);
   console.log(output);
})


function solve(m,n, index) {
    

    if(index == m) {
        let str = "";
        
        for(let i = 0; i<m; i++) {
            
            str += `${arr[i]} `;
        }
        output += `${str}\n`

        return;
    
    }

    for(let i = 1; i<=n; i++) {

            if(index != 0) {
                if(arr[index-1] > i) {
                    continue;
                }
            }
            arr[index] = i;
            solve(m, n, index+1);
        
    }


}