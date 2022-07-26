// Graphs are nodes + connections
// AdjacencyList 

class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertice1, vertice2) {
        this.adjacencyList[vertice1].push(vertice2);
        this.adjacencyList[vertice2].push(vertice1);
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
    removeVertex(vertex) {
        while(this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
            
        }
        delete this.adjacencyList[vertex];
    }

    DFSRecursive(vertex) {
        if(!vertex) return undefined;
        let results = [];
        let visited = {};

        const recursive = (v) => {
            if(!v) return null;
            visited[v] = true;
            results.push(v);
            this.adjacencyList[v].forEach(ver => {
                if(!visited[ver]) recursive(ver);
            })
        }
        recursive(vertex);
        return results;
    }
    DFSIterative(vertex) {
        let stack = [vertex];
        let results = [];
        let visited = {};
        visited[vertex] = true;
        let node;
        while(stack.length) {
            node = stack.pop();
            results.push(node);
            this.adjacencyList[node].forEach(neighbour => {
                if(!visited[neighbour]) {
                    visited[neighbour] = true;
                    stack.push(neighbour);
                    }
                });
        }
        return results;
    }

    BFS(vertex) { // BREADTH FIRST
        let q = [vertex];
        let results = [];
        let visited = {};
        visited[vertex] = true;
        let currentVertex;
        while(q.length) {
            currentVertex = q.shift();
            results.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(v => {
                if(!visited[v]) {
                    visited[v] = true;
                    q.push(v)
                }
            })
        }
        return results;
    }
}

let gr = new Graph();
gr.addVertex("Athens")
gr.addVertex("Tokyo");
gr.addVertex("London");
gr.addVertex("Milano")

gr.addEdge("Athens", "Milano");
gr.addEdge("Athens", "London");
gr.addEdge("Tokyo", "Milano")
gr.addEdge("Tokyo", "London")
gr.addEdge("London", "Milano")

// console.log(g.adjacencyList)
// g.removeVertex("London");
// console.log(g.adjacencyList);


// GRAPH TRAVERSEL
// DEPTH FIRST -
// * vist first node, then visit neighbour

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

//              A
//             / \
//            B   C
//            |   |
//            D---E
//             \ /
//              F

//  THEN ADD --> g.addEdge("B", "C");
//              A
//             / \
//            B---C
//            |   |
//            D---E
//             \ /
//              F    
// console.log(g.DFSIterative("A"))
// console.log(g.DFSRecursive("A"))
console.log(g.BFS("A"))