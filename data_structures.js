
// SinglyLinkedList -  insertion and removal are beginning are important
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next= newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(!this.length) {
            this.tail = null;
            this.head = null;
        }
        return current;
    }

    shift() {
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(!this.length) {
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if(index<0 || (index >= this.length)) return null;        
        let current = this.head;
        let counter = 0
        while(counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(idx, val) {
        let node = this.get(idx);
        if(!node) return false;
        node.val = val;;
        return true;
    }

    insert(idx, node) {
        if(idx < 0 || idx > this.length) return false;
        if(idx === this.length) return !!this.push(node);
        if(idx === 0) return !!this.unshift(node);
        let n = new Node(node);
        let previousNext = this.get(idx-1);
        let tmp = previousNext.next
        previousNext.next = n;
        n.next = tmp;
        this.length++;
        return true;
    }

    remove(idx) {
        if(idx < 0 || idx > this.length) return undefined;
        if(idx === this.length - 1) return this.pop();
        let previous = this.get(idx-1);
        let next = previous.next
        previous.next = next.next;
        this.length--;
        return next;
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let previous = null;
        for(let i = 0; i < this.length; i++){
            next = node.next;
            node.next = previous;
            previous = node;
            node = next;
        }
        return this;
    }
    print() {
        let arr = [];
        let current = this.head;
        while(current) {
            arr.push(current.val)
            current = current.next;
        }
        console.log(arr)
    }
}


class NodeD {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.previous = null;
    }
}

// BIG O
// removal is faster than singly
// more memory
// better than singly for finding nodes
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let n = new NodeD(val);
        if(!this.head) {
            this.head = n;
            this.tail = n;
        } else {
            this.tail.next = n;
            n.previous = this.tail;
            this.tail = n;
        }
        this.length++;
        return this;
    }

    shift() {
        if(this.length === 0) return undefined;
        const oldHead = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.previous = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val) {
        const newNode = new NodeD(val)
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.previous = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length) return null;
        let current;
        if(index <= this.length/2) {
            let count = 0;
            current = this.head;
            while(count != index) {
                current = current.next;
                count++;
            }
        } else {
            let count = this.length - 1;
            current = this.tail;
            while(count !== index) {
                current = current.previous;
                count--;
            }
        }
        return current;
    }

    set(index, val) {
        const nodeFound = this.get(index);
        if(nodeFound != null) {
            nodeFound.val = val;
            return true;
        } 
        return false;
    }

    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === 0) {
            return !!this.unshift(val);
        }
        if(index === this.length) return !!this.push(val);
        const beforeNode = this.get(index-1);
        const newNode = new NodeD(val);
        const afterNode = beforeNode.next;
        beforeNode.next = newNode, newNode.previous = beforeNode;
        newNode.next = afterNode; afterNode.previous = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index == 0) return this.shift();
        if(index == this.length -1) return this.pop();
        const removeNode = this.get(index);
        const beforeNode = removeNode.previous;
        const nextNode = removeNode.next;
        beforeNode.next = nextNode;
        nextNode.previous = beforeNode;
        removeNode.next = null;
        removeNode.previous = null;
        this.length--;
        return removeNode;
    }
}

const dbLink = new DoublyLinkedList();

dbLink.push(222)
dbLink.push(12)
dbLink.push(54)
dbLink.push(000)

console.log(dbLink.remove(1))
console.log(dbLink.get(1))
