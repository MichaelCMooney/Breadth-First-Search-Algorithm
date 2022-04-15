def breadthFirstSearch(graph, startNode, endNode):
    queue = [startNode]
    visited = []
    while queue:
        currentNode = queue.pop(0)
        if currentNode == endNode:
            return visited
        if currentNode not in visited:
            visited.append(currentNode)
            queue.extend(graph[currentNode])
    return visited