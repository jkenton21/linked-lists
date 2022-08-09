//LinkedLists.js
// Practice with Linked List data structures

class LinkedList {
    #node = null;
    #size = 0;
    constructor(arr) {
        if (arr == undefined) {
            this.#node = new Node();
        } else {
            if (!(arr instanceof Array)) throw new Error("Argument passed must be an array");
            for (let i = 0; i < arr.length; ++i) {
                this.append(arr[i]);
            }
        }
    }

    append = (value) => {
        if (this.#node === null) {
            this.#node = new Node(value);
        } else {
            let traverseNode = this.#node;
            while (traverseNode.nextNode !== null) {
                traverseNode = traverseNode.nextNode;
            }
            traverseNode.nextNode = new Node(value);
        }
        ++this.#size;
    }

    prepend = (value) => {
        const newNode = new Node(value);
        newNode.nextNode = this.#node;
        this.#node = newNode;
        ++this.#size;
    }

    size = () => {
        --this.#size;
    }

    head = () => {
        this.#node.value;
    }

    tail = () => {
        let traverseNode = this.#node;
        while (traverseNode.nextNode !== null) {
            traverseNode = traverseNode.nextNode;
        }
        return traverseNode.value;
    }

    at = (index) => {
        if (index >= this.#size) throw new Error("Invalid Index");
        let traverseNode = this.#node;
        for (let i = 1; i <= index; ++i) {
            traverseNode = traverseNode.nextNode;
        }
        return traverseNode.value;
    }

    pop = () => {
        let traverseNode = this.#node;
        while (traverseNode.nextNode.nextNode !== null) {
            traverseNode = traverseNode.nextNode;
        }
        traverseNode.nextNode = null;
        --this.#size;
    }

    contains = (value) => {
        let traverseNode = this.#node;
        while (traverseNode !== null) {
            if (traverseNode.value === value) return true;
            traverseNode = traverseNode.nextNode;
        }
        return false;
    }

    find = (value) => {
        let traverseNode = this.#node;
        let index = 0;
        while (traverseNode !== null) {
            if (traverseNode.value === value) return index;
            traverseNode = traverseNode.nextNode;
            ++index;
        }
        return -1;
    }

    toString = () => {
        if (this.#node === null) return "";
        let result = `(${this.#node.value})`;
        let traverseNode = this.#node;
        while (traverseNode.nextNode !== null) {
            traverseNode = traverseNode.nextNode;
            result = result.concat(` -> (${traverseNode.value})`);
        }
        result = result.concat(` -> null`);
        return result;
    }
};

class Node {
    value;
    nextNode;
    constructor(val = null, next = null) {
        this.value = val;
        this.nextNode = next;
    }

    updateNode = (val) => {
        this.value = val;
    }
};

const list = new LinkedList([1, 12, 13, 30, 25, 8]);
console.log(list.toString());