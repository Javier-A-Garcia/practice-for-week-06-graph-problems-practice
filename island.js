function getNeighbors(row, col, graph) {
  // Your code here
  let neighbors = [];

  // Up
  if (row > 0) {
    if (graph[row - 1][col] === 1){
      neighbors.push([row - 1, col]);
    }
  }
  // Down
  if (row < graph.length - 1) {
    if (graph[row + 1][col] === 1) {
      neighbors.push([row + 1, col]);
    }
  }
  // Left
  if (col > 0) {
    if (graph[row][col - 1] === 1) {
      neighbors.push([row, col - 1]);
    }
  }

  // Right
  if (col < graph[0].length - 1) {
    if (graph[row][col + 1] === 1) {
      neighbors.push([row, col + 1]);
    }
  }

  return neighbors;
}


function islandSize(row, col, graph) {
  // Your code here

  // Create a visited set to store visited nodes
  let visited = new Set();

  // Create a stack, put the starting node in the stack
  let stack = [[row, col]];

  // Put the stringified starting node in visited
  visited.add(stack[0].toString());

  // Initialize size to 0
  let size = 0;

  // While the stack is not empty,
  while (stack.length > 0) {
    // Pop the first node
    let currentNode = stack.pop();

    // DO THE THING (increment size by 1)
    size++;

    // Then push all the UNVISITED neighbors on top of the stack
    let [row, col] = [currentNode[0], currentNode[1]];
    // HINT: This is what your helper function `getNeighbors` is for
    let neighbors = getNeighbors(row, col, graph);

    neighbors.forEach(neighbor => {
      // HINT: Remember, you're storing your visited nodes as strings!
      if (!visited.has(neighbor.toString())) {
        stack.push(neighbor);
        // and mark them as visited
        visited.add(neighbor.toString());
      }
    });
  }

  // return size
  return size;
}

module.exports = [getNeighbors, islandSize];
