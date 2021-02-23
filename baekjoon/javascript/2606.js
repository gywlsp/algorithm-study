//https://www.acmicpc.net/problem/2606

const input = [];
//그래프, 방문 여부, 결과값 담는 변수
let graph, visited, result=0;

const strToNumArr = (str) => str.split(" ").map(Number);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
      const N = Number(input.shift());
      graph = [...Array(N+1)].map(()=>[]);
      visited = Array(N+1).fill(false);

      input.splice(0, 1);
      //그래프 생성
      let v1, v2;
      input.forEach((str)=>{
        [v1, v2] = strToNumArr(str);
        graph[v1].push(v2);
        graph[v2].push(v1);
      });

      //1번 컴퓨터부터 깊이우선탐색
      dfs(1);
      //1번 컴퓨터 제외(1번 컴퓨터를 통해 바이러스에 걸리게 되는 컴퓨터의 수)
      console.log(result-1);
  });

const dfs = (v) => {
  //방문했으면 리턴
  if(visited[v]){
      return;
  }

  //방문 여부 저장
  visited[v]=true;
  result++;
  //인접 정점 방문 안 했으면 깊이우선탐색 재귀 호출
  graph[v].forEach((vertex)=>{
      if(!visited[vertex]){
          dfs(vertex);
      }
  });
};