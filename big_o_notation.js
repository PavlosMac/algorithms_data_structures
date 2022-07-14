// Big O NOTATION
// Grading code performance. Number of operations.

// Constants do not matter.
// O(2n)  = O(n)  ; 2 is constants

// We don't need smaller terms
// O(1000n + 50) ; O(n)

// 1. Arithmetic operations are constant.
// 2. Variable assignment is constant.
// 3. Accessing elements in array by index is constant.
// 4. In a loop, the complexity of the loop is the length times the complexity.


function logAtLeast5(n) {
    for(var i = 0; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}

// The big O of above is O(n). As n grows, LINEAR time.

// Primitives take constant space.
// Strings require O(n) space, where n is the string length.
// Reference types are generally O(n), where n is the length of the array or number of keys for objects.

// LOGARITHM
// log ** 2 (8) = 3 ; The logarithm of a number roughly measures the number of times you can divide that number by 2.
// Before you get value less than or equal to 1.

// BIG O Objects,
// Fast, unordered lookup. O(n) - All main operations (search, add, remove) are constant time. hasOwnProperty - O(1)

// BIG O Arrays,
// Ordered lists. Access O(1)  arr[2] - constant time, plucks from index right away, does not move through each element.
// Add to end array - constant time (simple) / add or removing from beginning to beginning of array must re indexed all elements O(n)
// Search - O(n) , operation has to check each element.


// ALGORITHMS and PROBLEM SOLVING - "Set of steps to accomplish a task."
// * Understand the problem
// * Explore concrete examples
// * Break it down
// * Solve / Simplify
// * Refactor

// UNDERSTAND THE PROBLEM
// - Can I restate the problem in my own words?
// - What are the inputs?
// - What are the outputs?
// - Can the outputs be determined from the inputs? Do I have enough information to solve the problem? (at least consider)
// - How should I label the important pieces of data? parameters, return type etc

// Write a function that takes 2 numbers and returns their sum.

// CONCRETE EXAMPLES

// BREAK IT DOWN

// write a function that takes in a string and returns a count of each character in that string.
// write psyudocode

// function charCount() {
    // make object to return at end
    // loop over string, for each character...
    // if the char is a number/character AND is a key in object add 1 to count
    // if the char is number/letter and is AND not in object, add it to object and set it to 1
    // if character is something else, do nothing
    // return object at end
// }

// SOLVE or SIMPLIFY
// If you get stuck, try to solve a simpler problem.

//  REFACTORING QUESTIONS
// 1. Can we check the results?
// 2. Can we improve performance?
// 3. Can you think of refactor?
// 4. Can you derive the result differently?


// FREQUENCY COUNTERS
// This pattern uses objects or sets to collect values/frequencies of values

// Write a function called same, which accepts two arrays. The function should return true if every value
// in the array exists in the other array as squared. The frequency of values must be the same.

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    //sort the arrays so we can check at index
    let sortedArr1 = arr1.sort((a, b) => a - b);
    let sortedArr2 = arr2.sort((a, b) => a - b);
    const source = sortedArr1[sortedArr1.length -1] < sortedArr2[sortedArr2.length - 1] ? sortedArr1:sortedArr2;
    const squareArr = sortedArr1 === source ? sortedArr2:sortedArr1;
    let isSame = true;

    for(let i =0; i < source.length; i++) {
        if ((source[i] ** 2) !== squareArr[i]) {
            return isSame = false;
        }
    }
    //inputs are two arrays of numbers
    // output is boolean

    return isSame;
}

// console.log(same([1,2,3,2], [1,4,9,4]))

// Try to use an object to construct a profile to break down the contents of array or string.

function sameFreq(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    };

    let freqCount1 = {};
    let freqCount2 = {};

    for (let val of arr1) {
        freqCount1[val] = (freqCount1[val] || 0) + 1;
    }
    for (let v of arr2) {
        freqCount2[v] = (freqCount2[v] || 0) + 1;
    }

    for (let key of Object.keys(freqCount1)) {
        console.log(key);
        if(!(key ** 2 in freqCount2)) {
            return false;
        };
        if(freqCount2[key ** 2] !== freqCount1[key]) {
            return false;
        }
    }
    return true;
}

// console.log(sameFreq([1,2,3,2], [1,4,9,4]))

// FREQUENCY COUNTER PROBLEM 2
// Given two strings, write a function to determine if the second string is an anagram of the first.
// Bad solution below. Too many loops!
function isAnagramBad(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    };

    let freqCountStr1 = {};
    let freqCountStr2 = {};
    
    for(const s of str1.split('')) {
        freqCountStr1[s] = (freqCountStr1[s] || 0) + 1;
    }

    for(const s of str2.split('')) {
        freqCountStr2[s] = (freqCountStr2[s] || 0) + 1;
    }
    for(let k of Object.keys(freqCountStr1)) {
        if(!(k in freqCountStr2)) {
            return false;
        }
        if(freqCountStr1[k] !== freqCountStr2[k]) {
            return false;
        }
    }
    return true;
}

// console.log(isAnagramBad('anagrao', 'nanargm'));
// console.log(isAnagramBad('saplo', 'sopla'));
// console.log(isAnagramBad('rat', 'car'));
// console.log(isAnagramBad('awesome', 'awesom'));


function isAnagramGood(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    };

    let source = {};

    for(let i = 0; i< str1.length; i++) {
        source[str1[i]] = source[str1[i]] ? source[str1[i]] += 1 : 1;
    }

    for(let j = 0; j < str2.length; j++) {
        if(!source[str2[j]]) {
            return false;
        } else {
            source[str2[j]] -= 1;
        }
    }

    return true;
}


// console.log(isAnagramGood('anaggrao', 'nawnargm'));
// console.log(isAnagramGood('saplo', 'sopla'));
// console.log(isAnagramGood('rawc', 'carw'));
// console.log(isAnagramGood('awesome', 'awesom'));

// FREQUENCY COUNTER PROBLEM 3


// Write a function called sameFrequency, given two positive integers, find out if the numbers have the same
// frequency of digits. O(N)

function sameFrequency(num1, num2) {
    let num1Split = String(num1);
    let num2Split = String(num2);

    if(num1Split.length !== num2Split.length) {
        return false;
    }
    let profile = {};

    for(let i=0; i<num1Split.length; i++) {
        profile[num1Split[i]] ? profile[num1Split[i]]++ : profile[num1Split[i]] = 1;
    }
    for(let j=0; j<num2Split.length; j++) {
        let idx = num2Split[j];
        if(!profile[idx]) {
            return false;
        }
        profile[idx]--;
    }
    return true;
}

// console.log("-----Start");
// console.log(sameFrequency(182, 218));
// console.log(sameFrequency(34, 14))
// console.log(sameFrequency(3589578, 5879385))
// console.log(sameFrequency(22, 222))



// MULTIPLE POINTERS
// Implement a function called countUniqueValues, which accepts a sorted array
// counts the unique values in the array

// function countUniqueValues(arr) {
//     let profile = {};

//     for(let i=0; i<arr.length; i++) {
//         if(!profile[arr[i]] || arr[i] === 0) {
//             profile[arr[i]] = true;
//         } 
//     }
//     return Object.keys(profile).length;
// }

// console.log(countUniqueValues([1,1,3,4,5,5,6,10,11,11,12,13,0,0]));
// console.log(countUniqueValues([]));
// console.log(countUniqueValues([-2, -1, -1, 0, 1]));

// Implement a function called areThereDuplicates, which accepts a variable number of arguments, and checks whether there are
// any duplicates among args passed in.

function areThereDuplicates() {
    let profiler = {};
    for(let i=0; i<arguments.length;i++) {
        profiler[arguments[i]] ? profiler[arguments[i]]++ : profiler[arguments[i]] = 1;
        if(profiler[arguments[i]] > 1) {
            return true
        }
    }
    return false;

}

function areThereDuplicates2() {
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
}
// console.log(areThereDuplicates(1,2,3)); //false
// console.log(areThereDuplicates(1,2,2)); // true
// console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true

function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    let i = 0;
    for(let j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
// console.log(countUniqueValues([1,2,2,5,7,7,99]));



// MULTIPLE POINTERS
// averagePair, given a sorted array of integers and a target average, determine if there is a pair of values 
// in the array where the average of the pair equals the target average

function averagePair(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = (arr[left] + arr[right]) / 2;

        if (sum === target) {
            return true;
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    };
    return false;
}

// console.log(averagePair([1, 2, 3], 2.5)); // true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
// console.log(averagePair([-1, 0, 4, 5, 6], 4.1)); // false
// console.log(averagePair([], 4)); // false

function isSubsequence(str1, str2) {
    console.log(str1, str2);
    if(str1.length === 0) return true
    if(str2.length === 0) return false
    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  

    return isSubsequence(str1, str2.slice(1))
}

// console.log(isSubsequence("hello", "hello world")); //true
// console.log(isSubsequence("abc", "abracadabra")); //true
// console.log(isSubsequence("sing", "sting")); //true
// console.log(isSubsequence("abc", "acb")); //false

// given an array of integers and a numer, write a function which finds the maximum sum of
// subarray with the length of the number passed to the function.

function maxSubarraySum(arr, n) {
    let tmp = 0;

    for(let i=0; i<n; i++) {
        tmp += arr[i];
    }
    let max = tmp;

    for(let i=n; i<arr.length; i++) {
        tmp += arr[i] - arr[i-n];
        max = Math.max(max, tmp);
    }

    return max;
}

// console.log(maxSubarraySum([100, 200, 300, 400], 2)); //700
// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); //39
// console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); //5
// console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); //5


// Should return minimal length of subarray of which sum is greater than or equal to integer passed in.
function minSubArrayLen(arr, n) {
    let left = 0;
    let right = 0;
    let subArrMin = 0;

    let sum = 0;

    while(right < arr.length) {
        // sum the right pointer value moving to the right
        sum += arr[right];
        while(sum >= n) {
            let len = (right + 1) - left;
            subArrMin = subArrMin > 0 ? Math.min(len, subArrMin):len;
            sum -= arr[left];
            left++;
        }
        right++;
    }
    return subArrMin;
}
// console.log(minSubArrayLen([2,3,1,2,4,3], 7)); //2
// console.log(minSubArrayLen([2,1,6,5,4], 9)); //2
// console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)); //1
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39)); //3


// write a function which accepts a string and returns the length of the longest substring with all distinct characters

function findLongestSubstring(str) {
    if(!str) {
        return 0;
    }
    let de = str.split('');
    let profile = {};
    let left = 0;
    let right = 0;
    let longestLen = 0;
    let failSafe = 0;

    while(right < de.length) {
        profile[de[right]] ? profile[de[right]]++: profile[de[right]] = 1;
        if(right == de.length-1 && ((right - left) > longestLen)) {
            return right-left;
        }
        if(profile[de[right]] > 1) {
            failSafe+=2;
            if(de.length-1 === failSafe) {
                return 1;
            }
            let tmpLongest = right - (!left ? left : (left-1));
            longestLen = Math.max(tmpLongest, longestLen);
            // console.log(left, right, de[right], longestLen);
            profile = {};
            left = right;
        }
        right++;
    }
    return longestLen;
}

// console.log(findLongestSubstring('rithmschool')) // 7
// console.log(findLongestSubstring(['r','i','t','h','m','s','c','h','o','o','l'])) // 7
// console.log(findLongestSubstring('thisisawesome')); // 6
// console.log(findLongestSubstring(['t','h','i','s','i','s','a','w','e','s','o','m','e'])); // 6

// console.log(findLongestSubstring('thecatinthehat')); // 7
// console.log(findLongestSubstring('thisishowwedoit')); // 6
// console.log(findLongestSubstring('longestsubstring')); // 8
// console.log(findLongestSubstring('bbbbb')); // 1

// function findLongestSubstringAlgo(str) {
//     let longest = 0;
//     let seen = {};
//     let start = 0;
   
//     for (let i = 0; i < str.length; i++) {
//       let char = str[i];
//       if (seen[char]) {
//         start = Math.max(start, seen[char]);
//         console.log('start ', start);
//       }
//       // index - beginning of substring + 1 (to include current in count)
//       longest = Math.max(longest, i - start + 1);
//       console.log('longest', longest);
//       // store the index of the next char so as to not double count
//       seen[char] = i + 1;
//     }
//     return longest;
//   }

//   console.log(findLongestSubstringAlgo('rithmschool'));
// console.log(findLongestSubstringAlgo('thisisawesome'));

// write a function which accepts a string and returns the string in reverse

// function reverse(str) { // works
//     if (str.length === 1) {
//         return str;
//     }
//     return slice(1) + reverse(str.slice(0, -1));
// }


function isPalindrome(input){// works
    if(!input) return true;
    if( input.slice(-1) !== input.slice(0, 1) ) {
        return false;

    }
    return isPalindrome(input.slice(1, -1));
  }

// console.log(isPalindrome('amanaplanacanalpanama'))

function isRecursive(arr, callback) { // works
    if(!arr.length) {
        return false;
    }
    if(callback(arr[0])) {
        return true
    }
    return isRecursive(arr.splice(1, arr.length), callback);
}

const isOdd = val => val % 2 !== 0;


// console.log(isRecursive([4, 6, 8], isOdd));


// function should accept an array of arrays and returns them all flattened.

function flatten(arr) { //works
    let out = [];
    for(let i=0; i<arr.length; i++) {
        if(Array.isArray(arr[i])) {
            out = out.concat(flatten(arr[i]));
        } else {
            out.push(arr[i])
        }
    }
    return out;
}

// console.log(flatten( [1, [2, [3, [4, 0]], [ [5] ] ] ] ));
// console.log(flatten([1, 2, 3, [4, 5]]));


// function should capitalize first letter of each string in passed array

function capitalizeFirst(arr) { //works
    let ret = [];
    if(!arr.length) {
        return arr;
    }
    ret.push(arr[0][0].toUpperCase() + arr[0].substring(1));
    return ret.concat(capitalizeFirst(arr.splice(1)));
}

// console.log(capitalizeFirst(["car", "taco", "banana"]));

// function return the sum of all even numbers in object with nested objects
function nestedEvenSum(obj) {
    let sum = 0;
    for(const k in obj) {
        if (obj[k].constructor === Object) {
            sum += nestedEvenSum(obj[k]);
        }
        if (typeof obj[k] === "number" && obj[k] % 2 === 0) {
            sum += obj[k];
        }
    }
    return sum
}


const obj1 = {
    a: 2,
    b: {
        b:2, 
        bb: 
        {
            b: 3, 
            bb: {
                b:2
            }
        }
    },
    c: {c:{c: 2}, cc: 'b', ccc: 5},
    e: {e: {e: 2}, ee: 'car'}
}
function nestedEvenSum1(obj) {
    let sum = 0;
    for (const k in obj) {
        sum += obj[k] && typeof obj[k] === 'object'
            ? nestedEvenSum(obj[k])
            : obj[k] % 2 === 0
                ? obj[k]
                : 0;
    }
    return sum;
}

// console.log(nestedEvenSum(obj1));


// function should capitalize each word in passed array

function capitalizeAll(arr) { // works
    if(!arr.length) {
        return arr;
    }
    let ret = [];
    let str = "";
    for(const l of arr[0]) {
        str += l.toUpperCase();
    }
    ret.push(str);
    return ret.concat(capitalizeAll(arr.splice(1)));
}

const items = ["i", "am", "learning", "recursion"];
// console.log('uhu ==> ', capitalizeAll(items));


// Here's a fundamental rule of thumb for recursion: data dependencies (the things used to compute a result) are the parameters, results are return values.

// function should take an object and find all of the values which are numbers and convert them to strings.

function stringifyNumbers(obj) { // works
    let clone = {};
    for(const key in obj) {
        if(typeof obj[key] === 'number') {
            clone[key] = obj[key].toString();
        }
        if(Array.isArray(obj[key]) || typeof obj[key] === 'boolean') {
            clone[key] = obj[key];
        }
        if(obj[key].constructor === Object) {
            clone[key] = stringifyNumbers(obj[key]);
        }
    }
    return clone;
}

const objec = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66,
            ob: {
                near: 999,
                wr: [1,2,3,4,566],
                u: 9233
            }
        }
    }
}

// console.log(stringifyNumbers(objec));


// write function accepts object and returns all values that returns array with all values in obj that have typeof string
function collectStrings(obj) {
    let ret = [];

    for(const o in obj) {
        if(typeof obj[o] === "string") {
            ret.push(obj[o]);
        }
        if(obj[o].constructor === Object) {
            return ret.concat(collectStrings(obj[o]));
        }
    }
    return ret;
}

let obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMore: {
                        thing: "last thing"
                    }
                }
            }
        }
    }
}
// console.log(collectStrings(obj));

// for sorted array binary search is O(log n) - best search algorithm
function binarySearch(sortArr, val) {
    let start = 0;
    let end = sortArr.length - 1;
    let middle = Math.round(sortArr.length/2);
    while(sortArr[middle] !== val && start <= end) {
        if(sortArr[middle] < val) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
        middle = Math.floor((start + end) / 2); 
    }
    return sortArr[middle] === val ? middle:-1;
}

let binaryVal = [2,4,6,11,14,17,20,21,23,24,34,66,81,90];
// console.log(binarySearch(binaryVal, 21));


function findSubstring(smallerStr, bigStr) {
    let matchCount = 0;
    for(let i=0; i<bigStr.length; i++) {
        for(let p=0; p<smallerStr.length; p++) {
            if(bigStr[i+p] !== smallerStr[p]) break;
            if(p === smallerStr.length-1) matchCount++;
        }
    }
    return matchCount;
}

// console.log(findSubstring("se", "seguaogsegtrose"));


// bubble sort
function bubbleSort(arr) {
    let noSwap;
    let c = 0;
    for(let i=arr.length; i > 0; i--) {
        c++;
        noSwap = true;
        for(let j=0; j < i-1; j++) {
            c++;
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                noSwap = false;
            }
        }
        if(noSwap) break;
    }
    return arr;
}

let arr = [37, 45, 29, 8, 102, 100];

// console.log(bubbleSort(arr))


// selection sort
function selectionSort(arr) {
    for(let i=0; i<arr.length; i++) {
        let lowest = i;
        for(let j = i+1; j<arr.length; j++) {
            if(arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if(i !== lowest) {
            [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
        }
    }
    return arr;
}

let arrayS = [22, 2, 54, 33, 1, 5];
// console.log(selectionSort(arrayS))



// insertion sort
// tips: put first val ahead
// do loop - get i value
// do inner loop, look back, create j value
function insertionSort(arr) {
    for(let i=1; i<arr.length; i++) {
        let curreVal = arr[i];
        for(var j=i-1; j>=0 && arr[j] > curreVal; j--) {
            arr[j+1] = arr[j];
        }   
        arr[j+1] = curreVal;
    }
    return arr;
}

// console.log(insertionSort(arrayS))


// | Merge Sort |

function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}


function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    console.log('|',left, '|', right, '|')
    return merge(left, right);
}

// console.log(mergeSort([10,24,76,73]));


// Quick sort

function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
  
    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
  }
  
  
  function quickSort(arr, left = 0, right = arr.length -1){
      if(left < right){
          let pivotIndex = pivot(arr, left, right) //3
          //left
          quickSort(arr,left,pivotIndex-1);
          //right
          quickSort(arr,pivotIndex+1,right);
        }
       return arr;
  } 
             
//   quickSort([100,-3,2,4,6,9,1,2,5,3,23])

// Radix sort

// 1. Define a function that accepts a list of numbers
// 2. Figure out how many digits the largest nunber has
// 3. Start a loop from zero to largest digit
 // - for each iteration we
 // * create bucket for each digit
 // * place each number in corresponding bucket
 // 4. Replace exiting array with values in bucket starting with zero and going up to 9
 // 5. Return list at end
// helper functions

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// console.log(getDigit(234, 4));

function digitCount(num) {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
// console.log(digitCount(2348))

function mostDigits(nums) {
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

// function radixSort(nums) {
//     let maxDigitCount = mostDigits(nums);
//     for(let k=0; k<maxDigitCount; k++) {
//         let digitBuckets = Array.from({length: 10}, () => []);
//         for(let i=0; i< digitBuckets.length; i++) {
//             let digit = getDigit(nums[i], k);
//             digitBuckets[digit].push(nums[i])
//         }
//         nums = [].nums.concat(...digitBuckets)
//     }
//     console.log(maxDigitCount)
// }

// console.log(radixSort([23, 345, 5467, 12, 2345, 8852]))
console.log([].length)