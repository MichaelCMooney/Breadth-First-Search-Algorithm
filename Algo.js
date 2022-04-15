const breadthFirstSearch = (graph, startNode, endNode) => {
    const queue = [startNode];
    const visited = [];
    while (queue.length) {
        const currentNode = queue.shift();
        if (currentNode === endNode) {
        return visited;
        }
        if (!visited.includes(currentNode)) {
        visited.push(currentNode);
        queue.push(...graph[currentNode]);
        }
    }
    return visited;
    }