//https://www.acmicpc.net/problem/9095

const input = [];

const memoSetList = [...Array(11)].map(()=>{return new Set();});

const memo = (num) => {
    for(let k=1; k<=3; k++){
        for(const numString of memoSetList[num-k]){
            for(let i=0; i<=numString.length; i++){
                memoSetList[num].add(numString.slice(0, i)+`${k}`+numString.slice(i));
            }
        }
    }
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {

   memoSetList[1].add('1');
   memoSetList[2].add('11');
   memoSetList[2].add('2');
   memoSetList[3].add('111');
   memoSetList[3].add('12');
   memoSetList[3].add('21');
   memoSetList[3].add('3');

   for(let i=4; i<=10; i++){
       memo(i);
   }

   input.splice(0,1);
   input.forEach((numString)=>{
        console.log(memoSetList[Number(numString)].size);
   })
  });