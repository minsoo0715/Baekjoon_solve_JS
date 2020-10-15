const scanf = require('scanf_js')

scanf(1).then( function (input) {

    let n = Number(input[0]);

    let i = 666;
    while(true) {
        let temp = i.toString()


       if((temp.match(/666/g) || []).length != 0 && n!=0) {
           n--;
       }


        
        if(n == 0) { 
            console.log(i); 
            break;
        }
        i++;
    }



})