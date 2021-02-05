const input = [];
const sLengthList = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
     const N = Number(input[0]);

     sLengthList.push(3);
     while(N>sLengthList[sLengthList.length-1]){
        sLengthList.push(2*sLengthList[sLengthList.length-1]+sLengthList.length+3);
     }

     let n=N;
     for(let i=sLengthList.length-1; i>=0; i--){
         const prevSLength = (sLengthList[i-1]||0);
         
         if(n===prevSLength+1){
             console.log('m');
             break;
         }else if(n>prevSLength+1 && n<=prevSLength+(i+3)){
             console.log('o')
        }else if(n>prevSLength+(i+3)){
            n-=prevSLength+(i+3);
        }
     }

  });