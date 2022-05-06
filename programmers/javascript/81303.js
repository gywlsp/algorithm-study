function solution(n, k, cmd) {
  const root = new Node(0);
  let currNode = root,
    prevNode = root;
  for (let i = 1; i < n; i++) {
    const node = new Node(i);
    node.prev = prevNode;
    prevNode.next = node;
    prevNode = node;
    if (i === k) currNode = node;
  }

  const stack = [];
  cmd.forEach((v) => {
    const [command, count] = v.split(" ");
    switch (command) {
      case "U": {
        let i = 0;
        while (i < +count && currNode.prev) {
          currNode = currNode.prev;
          i++;
        }
        break;
      }
      case "D": {
        let i = 0;
        while (i < +count && currNode.next) {
          currNode = currNode.next;
          i++;
        }
        break;
      }
      case "C": {
        stack.push(currNode);
        const prev = currNode.prev;
        const next = currNode.next;
        if (prev && next) {
          prev.next = next;
          next.prev = prev;
          currNode = next;
        } else if (prev) {
          prev.next = null;
          currNode = prev;
        } else if (next) {
          next.prev = null;
          currNode = next;
        }
        break;
      }
      case "Z": {
        const node = stack.pop();
        const prev = node.prev;
        const next = node.next;
        if (prev) {
          prev.next = node;
        }
        if (next) {
          next.prev = node;
        }
        break;
      }
    }
  });
  const answer = Array(n).fill("O");
  stack.forEach((node) => (answer[node.idx] = "X"));
  return answer.join("");
}

class Node {
  constructor(idx) {
    this.idx = idx;
    this.prev = null;
    this.next = null;
  }
}
