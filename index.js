 const Array = require('./array')

 function main() {
     Array.SIZE_RATIO = 3;
     let arr = new Array();
     arr.push('tauhida')
    //  arr.push(3);
    //  arr.push(5);
    //  arr.push(15);
    //  arr.push(19);
    //  arr.push(45);
    //  arr.push(10);
    //  arr.pop();
    //  arr.pop();
    //  arr.pop();
    //  console.log(arr);
    //  console.log(arr.get(0))
 }

 main()

//  Length with one push is 1, capacity 3, ptr 0
// length with 6 pushes is 6, capacity 12, ptr 3
// Length increased from 1 to 6 because that is the number of elements in the array. 
// capacity increased from 3 to 12 because at the 4th push, the existing capacity of 3 was exceeded, so the capacity tripled to 12 (3x4)
// ptr increased from 0 to 3 because when array length was going to exceed capacity, resize occurred, and ptr was set within allocate to be += size, making it 3. For example, at the next resize at 12, 12 will be the size, added to the existing 3 and ptr will be 15.

// after pops capacity and ptr remain unchanged, but length changes as elements are cleared. capacity is not decreased. 

// pushing 'tauhida' or any string will return NAN because the array is defined as float. 

function URLify(string) {
    let newString = '';
    if (string === '') {
        return ''
    }
    if(string[0] === ' ') {
        return newString += '%20' + URLify(string.slice(1))
    }
    return newString + string[0] + URLify(string.slice(1))
}

//console.log(URLify('str ing'))

function filterLessThan5(arr2, newArr = []) {
    if (arr2.length < 1) {
        return newArr
    }
    else if(arr2[0] < 5) {
        return filterLessThan5(arr2.slice(1), newArr)
    }
    else {
    newArr.push(arr2[0])
        return filterLessThan5(arr2.slice(1), newArr)
    }
}
let testArray = [8]
//console.log(filterLessThan5(testArray))

function mergeArrays(arr1, arr2, newArr = []) {
    if (arr1.length < 1 && arr2.length < 1) {
        return newArr
    }
    else if(arr1[0] <= arr2[0] || arr2.length < 1) {
        newArr.push(arr1[0]) 
        return mergeArrays(arr1.slice(1), arr2, newArr)
    }
    else if(arr1.length < 1){
        newArr.push(arr2[0] || arr1.length < 1)
        return mergeArrays(arr1, arr2.slice(1), newArr)
    }
    newArr.push(arr2[0] || arr1.length < 1)
    return mergeArrays(arr1, arr2.slice(1), newArr)
}

let arr1= [1, 3, 6, 8, 11]
let arr2= [2, 3, 5, 8, 9, 10]

//console.log(mergeArrays(arr1, arr2))

function removeChars(string, chars) {
    let newString = ''
    for (let x = 0; x < string.length; x++) {
        let value = '';
        for(let y = 0; y < chars.length; y++) {
            if (chars[y] === string[x]) {
                value = ''
                return 
            }
            else if (chars[y] !== string[x]) {
                value = string[x]
            }
        }
        newString = value
    }
    return newString;
}

// console.log(removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou')) FIX ME

function products(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        productArr = arr.filter(num => num !== arr[i])
        let product = 1;
        for(let x = 0; x < productArr.length; x++) {
            product = product * productArr[x];
        }
        newArr.push(product)
    }
    return newArr
}

// console.log(products([1, 3, 9, 4]))

function twoDarray(arr) {
    let newArr = arr;
    for(let y = 0; y < arr.length; y++) {
        for(let x = 0; x < arr[y].length; x++) {
            if (arr[y][x] === 0) {
                for(let y2 = 0; y2 < newArr.length; y2++) {
                    if (y2 === y) {
                        for(let x2 =0; x2 < newArr[y].length; x2++) {
                            if(newArr[y2][x2] === 1) {
                            newArr[y2].splice(x2, 1)
                            newArr[y2].push(0)
                            }
                        }
                    }
                    else {
                        if (newArr[y2][x] ===1) {
                        newArr[y2].splice(x, 1, 0)
                        }
                    }
                }
            }
        }
    }
    console.log(newArr[0])
    console.log(newArr[1])
    console.log(newArr[2])
    return newArr;
}

console.log(twoDarray([[0,1, 0], [1,1,1], [0,1,0]]))
tinyArr=[0,1, 0]

// console.log(tinyArr.splice(0, 1), tinyArr)
// console.log(tinyArr.splice(0, 0, 1), tinyArr)

// console.log(twoDarray([[1,0,1,1,0],
//     [0,1,1,1,0],
//     [1,1,1,1,1],
//     [1,0,1,1,1],
//     [1,1,1,1,1]
//     ]))

