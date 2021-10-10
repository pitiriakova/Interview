class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name) {
    if (!this.adjacencyList[name]) this.adjacencyList[name] = [];
  }

  addEdge(v1, v2) {
    if (!this.adjacencyList[v1]) {
      this.adjacencyList[v1] = []
    }

    if (!this.adjacencyList[v2]) {
      this.adjacencyList[v2] = []
    }

    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter(v1 => v1 !== v2);
      this.adjacencyList[v2] = this.adjacencyList[v2].filter(v2 => v1 !== v2);
    }
  }

  removeVertex(v) {
    if (this.adjacencyList[v]) {
      while (this.adjacencyList[v].length) {
        const vertexToRemove = this.adjacencyList[v].pop();
        this.removeEdge(v, vertexToRemove);
      }

      delete this.adjacencyList[v];
    }
  }

  dfrRecursively(start) {
    const result = [];
    const visitedVertices = {};
    const adjacencyList = this.adjacencyList;

    (function dfsHelper(vertex) {
      if (!vertex) return null;

      visitedVertices[vertex] = true;
      result.push(vertex);

      adjacencyList[vertex].forEach(neighbour => {
        if (!visitedVertices[neighbour]) {
          return dfsHelper(neighbour);
        }
      })
    })(start);

    return result;
  }

  dfrIteratively(start) {
    // FOR DFS USE STACK
    const stack = [];
    const result = [];
    const visited = {};
    let vertex;
      stack.push(start);

    while (stack.length) {
      vertex = stack.pop();
      if (!visited[vertex]) {
        visited[vertex] = true;
        result.push(vertex);

        this.adjacencyList[vertex].forEach(neighbour => {
          if (!visited[neighbour]) {
            stack.push(neighbour)
          }
        })
      }
    }

    return result;
  }

  // FOR BFS USE QUEUE

  bfs(start) {
    const queue = [];
    const result = [];
    const visited = {};
    let currentVertex;
    queue.push(start);

    while(queue.length) {
      currentVertex = queue.shift();

      if (!visited[currentVertex]) {
        visited[currentVertex] = true;
        result.push(currentVertex);
        this.adjacencyList[currentVertex].forEach(neighbor => {
          if (!visited[neighbor]) {
            queue.push(neighbor);
          }
        })
      }
    }

    return result;
  }
}

const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

console.log(g)

// DIFFERENT ORDER IS OK
// console.log(g.dfrRecursively('A')); //[ 'A', 'B', 'D', 'E', 'C', 'F' ]
// console.log(g.dfrIteratively('A')); //[ 'A', 'C', 'E', 'F', 'D', 'B' ]
// console.log(g.bfs('A')); //[ 'A', 'B', 'C', 'D', 'E', 'F' ]

// g.addVertex('Tokyo');
// g.addVertex('NY');
// g.addVertex('Aspen');
// g.addEdge('Tokyo', 'NY');
// g.addEdge('Tokyo', 'Aspen'); // Graph { adjacencyList: { Tokyo: [ 'NY', 'Aspen' ], NY: [ 'Tokyo' ], Aspen: [ 'Tokyo' ] } }
// g.addEdge('Dnipro', 'Amsterdam');
// g.addEdge('NY', 'Amsterdam');
// g.removeEdge('Tokyo', 'Aspen'); // Graph { adjacencyList: { Tokyo: [ 'NY' ], NY: [ 'Tokyo' ], Aspen: [] }}
// g.removeVertex('Aspen');
// g.removeVertex('asdasdas');
// console.log(g.dfrRecursively('NY')); //[ 'NY', 'Tokyo', 'Aspen' ]
// console.log(g.dfrIteratively('NY')); //[ 'NY', 'Tokyo', 'Aspen' ]

