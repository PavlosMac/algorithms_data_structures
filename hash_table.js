// Hash tables are key value pairs
// Hash tables can find values quickly
// Store data in large array

// What makes a good hash?
// 1. Fast / constant time
// 2. Deterministic, one input yields same output everytime / no randomness
// 3. Distributes uniformly

// simple hash function
// hash collision or clash is when two pieces of data in a hash table share the same hash value
// prime numbers is helpful in spreading ut keys more uniformly

function hash(key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for(let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}


// Handling Collissions
// separate chaining
//

class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }
    
    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key);
        if(!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value])
        return index;
    }

    get(key) {
        let index = _hash(key);
        if(this.keyMap[index]) {
            for(let i = 0; i < this.keyMap[index].length; i++) {
                if(this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }

    values() {
        let valuesArr = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j = o; j < this.keyMap[i].length; j++) {
                    if(!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }

    keys() {
        let keysArr = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j = 0; j < this.keyMap[i].length; j++) {
                    if(!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
    }
}

let HT = new HashTable();

HT.set("hello world", "goodbye")
HT.set("cats", "are coll")
HT.set("dogs", "are noot")
