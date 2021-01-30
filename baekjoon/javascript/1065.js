//https://www.acmicpc.net/problem/1004

const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function(line) {
    input.push(line.trim());
  })
  .on("close", function() {
    const N = Number(input[0]);
    
    let result=0;
    for(let n=1; n<=N; n++){
        if(n<100){
            result++;
        }
        else if(n<1000){
            const n3 = Math.floor(n/100);
            const n2 = Math.floor((n-n3*100)/10);
            const n1 = Math.floor(n%10);
            if(n3-n2 === n2-n1){
                result++;
            }
        }
    }
    
    console.log(result);
  });
