//https://www.acmicpc.net/problem/5639

const input = [];
const preTraversedNodes = Array(10002);

const postTraverse = (left, right) => {
    if(left>right){
        return;
    }

    const root = preTraversedNodes[left];
    let pivot = right;
    while(preTraversedNodes[pivot]>root){
        pivot--;
    }

    postTraverse(left+1, pivot);
    postTraverse(pivot+1, right);
    console.log(root);
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    input.forEach((numString, index)=>{
      preTraversedNodes[index] = +numString});
      
    postTraverse(0, input.length-1);
  });
