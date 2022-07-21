
// CONSTANT O(1) , O(logn), O(n) ,  
// BINARY TREE
// EACH NODE CAN HAVE MOST 2 CHILDREN / 0,1,2 nodes


// BINARY SEARCH TREE
// Every node to left of parent is always less of parents, all values to right of parent are higher


class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }

    find(val) {
        if(this.root === null) return undefined;
        if(this.root.value === val) return this.root;
        let current = this.root,
            found = false;
        while(current && !found) {
            if(val < current.value) {
                current = current.left
            } else if(val > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }

    breadthFirstSearch() {
        let queue = [],
            list = [],
            currentNode = this.root;
        queue.push(currentNode);
        while(queue.length) {
            currentNode = queue.shift();
            list.push(currentNode.value);
            if(currentNode.left) {
                queue.push(currentNode.left);
            }
            if(currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return list;
    }

    depthFirstSearchPreorder() {
        let node = this.root,
            list = [];

        const traverse = (currentNode) => {
            list.push(currentNode.value);
            if(currentNode.left) traverse(currentNode.left);
            if(currentNode.right) traverse(currentNode.right);
        }
        traverse(node);
        return list;
    }

    depthFirstSearchPostorder() {
        let node = this.root,
            list = [];

        const traverse = (currentNode) => {
            if(currentNode.left) traverse(currentNode.left);
            if(currentNode.right) traverse(currentNode.right);
            list.push(currentNode.value);
        }
        traverse(node);
        return list;
    }

    depthFirstSearchInorder() {
        let node = this.root,
            list = [];

        const traverse = (currentNode) => {
            if(currentNode.left) traverse(currentNode.left);
            list.push(currentNode.value);
            if(currentNode.right) traverse(currentNode.right);
        }
        traverse(node);
        return list;
    }
}

let bts = new BinarySearchTree();

bts.insert(10)
bts.insert(6)
bts.insert(15)
bts.insert(3)
bts.insert(8)
bts.insert(20)

console.log(bts.depthFirstSearchInorder());